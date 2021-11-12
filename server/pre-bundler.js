const fs = require("fs");
const path = require("path");
const walk = require('walk');
var basePath = "client/";
var componentPath = basePath + "component";
var clientScriptsPath = basePath + "client";
var indexFilePath = basePath + "index.js";
const fileName = 'client/srstee-config.json';

if(process.argv.length < 3) {
    console.log("Invalid usage of the command. \nCorrect format : npm run pack [application-name]");
    process.exit(0);
}

const appName = process.argv[2];

var preBundler = new PreBundler();
preBundler.process();

function PreBundler() {

    this.excludeList = [],

    this.process = () => {
        let promise1 = this.updateComponentsIntoBundle();
        let promise2 = this.updateClientScriptsIntoBundle();

        Promise.all([promise1, promise2])
        .then((results) => {

            fs.writeFile(indexFilePath, results.join("\n"), function (err) {

                if (err) {
                    console.log("Error occurred... " + err);
                    throw err;
                }
            });
        })
        this.updateCommonScriptReferences();
        this.updateComponentTemplateReferences();
    }

    this.updateCommonScriptReferences = function() {
        this.copyRecursiveSync('client/common/script', 'client/client/script');
        this.add2ExcludeList(this.excludeList);
    }

    this.updateComponentTemplateReferences = function() {
        this.walker = walk.walk(componentPath, {
            followLinks: false
        });

        this.walker.on('file', function (root, stat, next) {
            // Add this file to the list of files
            if ((appName == 'all' || root.includes("/" + appName + "/")) && stat.name.endsWith("Definition.js")) {
                var filePath = root + "/" + stat.name;
                fs.copyFile(filePath, root + ".js", (err) => {
                    if (err) {
                        throw err;
                    }
                });
            }
            next();
        });
    }

    this.updateComponentsIntoBundle = function() {
        return new Promise((resolve, reject) => {
            this.walker = walk.walk(componentPath, {
                followLinks: false
            });
            let indexFileContents = "";
            this.walker.on('file', function (root, stat, next) {
                // Add this file to the list of files
                if ((appName == 'all' || root.includes("/" + appName + "/")) && stat.name.endsWith("Definition.js")) {
                    var configFile = root + "/Configuration.js";
                    fs.readFile(configFile, (err, data) => {
                        if (!err) {
                            let outputContent = {};
                            try {
                                data = data.toString();
                                data = data.replace(/\/\*srsti-uid=.*\*\//, "");
                                outputContent = JSON.parse(data);
                                if(outputContent.Type != "Snabbdom") {
                                    let filePath = root + "/" + stat.name;
                                    filePath = filePath.replace(componentPath, "component");
                                    indexFileContents = indexFileContents + "import \"" + filePath + "\";\n";
                                }
                            }catch(err) {
                                console.log(err);
                            }
                        }
                    });

                }
                next();
            });

            this.walker.on('end', function () {
                resolve(indexFileContents);
            });
        });
    }

    this.updateClientScriptsIntoBundle = function() {
        return new Promise((resolve, reject) => {
            this.walker = walk.walk(clientScriptsPath, {
                followLinks: false
            });
            let indexFileContents = "";
            this.walker.on('file', function (root, stat, next) {
                // Add this file to the list of files
                if ((appName == 'all' || root.includes("/" + appName + "/") || root.endsWith("/" + appName)) && stat.name.endsWith(".js")) {
                    var filePath = root + "/" + stat.name;
                    filePath = filePath.replace(clientScriptsPath, "client");
                    indexFileContents = indexFileContents + "import " + stat.name.split('.js')[0] + " from \"" + filePath + "\";\n";
                    indexFileContents += "const _" +stat.name.split('.js')[0] + " = " + stat.name.split('.js')[0] + ";\n";
                }
                next();
            });

            this.walker.on('end', function () {
                resolve(indexFileContents);
            });
        });
    }

    this.getExistingSrsteeConfig = function() {
        return new Promise((resolve, reject) => {
            if (fs.existsSync(fileName)) {
                fs.readFile(fileName, (err, data) => {
                    if (err) throw err;
                    let outputContent = {};
                    try {
                        outputContent = JSON.parse(data);
                    }catch(err) {
                        console.log(err);
                    }
                    resolve(outputContent);
                });
            }else{
                resolve({});
            }
        });
    }

    this.add2ExcludeList = function(entries) {
        this.getExistingSrsteeConfig().then(function(jsonContent) {
            jsonContent["excludes"] = jsonContent["excludes"] || {};
            if(entries) {
                entries.forEach((entry, indx) => {
                    jsonContent["excludes"][entry] = jsonContent["excludes"][entry] || entry;
                });
            }

            fs.writeFile(fileName, JSON.stringify(jsonContent, null, 2), function (err) {
              if (err) {
                console.log(err);
                throw err;
              }
            });
        });
    }

    this.copyRecursiveSync = function (src, dest) {
        var exists = fs.existsSync(src);
        var stats = exists && fs.statSync(src);
        var isDirectory = exists && stats.isDirectory();
        if (exists && isDirectory) {
            var distExists = fs.existsSync(dest);
            var distStats = distExists && fs.statSync(dest);
            var isDestDirectory = distExists && distStats.isDirectory();
            if (!exists || !isDestDirectory) {
                fs.mkdirSync(dest);
            }
            var self = this;
            fs.readdirSync(src).forEach(function (childItemName) {
                self.copyRecursiveSync(path.join(src, childItemName),
                    path.join(dest, childItemName));
            });
        } else {

            let srcPath = path.join(__dirname + '/../' + src);
            let destPath = path.join(__dirname + '/../' + dest);
            fs.copyFile(srcPath, destPath, (err) => {
                if (err) {
                    throw err;
                }
            });
            this.excludeList.push(dest);
        }
    }
}
/*bundle*/
/*srsti-uid=b4d46160-6f7e-11e8-aece-c185e42dc57b##*/
