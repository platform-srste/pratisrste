"use strict";

module.exports = function () {
    const fs = require("fs");
    const path = require("path");
    const walk = require('walk');
    const basePath = "client/";
    const componentPath = basePath + "component";
    const clientScriptsPath = basePath + "client";
    const indexFilePath = basePath + "index.js";
    var  copiedCommonScriptFiles = [];
    var walker;
    return {
        getCopiedCommonScripts: function() {
            return copiedCommonScriptFiles;
        },
        updateComponentTemplateReferences: function(appName) {
            return new Promise((resolve, reject) => {
                walker = walk.walk(componentPath, {
                    followLinks: false
                });

                walker.on('file', function (root, stat, next) {
                    if ((appName == 'all' || root.includes("/" + appName + "/")) && stat.name.endsWith("Definition.js")) {
                        var filePath = path.join(root, stat.name);                        
                        fs.copyFile(filePath, root + ".js", (err) => {
                            if (err) {
                                throw err;
                            }
                        });
                    }
                    next();
                });

                walker.on('end', function () {
                    resolve();
                });
            });
        },

        createComponentStyles: function(appName, outputFileName) {
            return new Promise((resolve, reject) => {
                let stylesJSON = {};
                walker = walk.walk(componentPath, {
                    followLinks: false
                });                
                walker.on('file', function (root, stat, next) {                    
                    if ((appName == 'all' || root.includes(appName)) && stat.name.endsWith("Style.css")) {
                        var styleFile = path.join(root, "/Style.css");
                        let componentName = path.dirname(styleFile).split(path.sep).pop();                        
                        fs.readFile(styleFile, "utf8", (err, data) => {
                            if (!err) {                                
                                try {                                
                                    data = data.replace(/\/\*srsti-uid=.*\*\//, "");                                                                           
                                    stylesJSON[componentName] = data;
                                }catch(err) {
                                    console.log(err);
                                }
                            }
                        });
                    }
                    next();
                });

                walker.on('end', function () {
                    let returnJSONData = stylesJSON?JSON.stringify(stylesJSON): "";
                    let componentStylesStr = `export default function() { return ${returnJSONData};}`;                    

                    fs.writeFile(path.join(outputFileName), componentStylesStr, function (err) {
                        if (err) throw err;  
                        resolve(path.join(basePath, appName + "_styles.js"));
                    });                    
                });
            });
        }, 

        getComponents2Bundle: function(appName) {
            return new Promise((resolve, reject) => {
                walker = walk.walk(componentPath, {
                    followLinks: false
                });
                let files = [];
                walker.on('file', function (root, stat, next) {                    
                    if ((appName == 'all' || root.includes(appName)) && stat.name.endsWith("Definition.js")) {

                        var configFile = path.join(root, "/Configuration.js");
                        fs.readFile(configFile, (err, data) => {
                            if (!err) {
                                let outputContent = {};
                                try {
                                    data = data.toString();
                                    data = data.replace(/\/\*srsti-uid=.*\*\//, "");
                                    outputContent = JSON.parse(data);
                                    if(outputContent.Type != "Snabbdom") {
                                        let fileBasePath = root.replace(componentPath, "component");
                                        let filePath = fileBasePath + "/" + stat.name;
                                        files.push(filePath);
                                        files.push(fileBasePath + ".js");                                        
                                    }
                                }catch(err) {
                                    console.log(err);
                                }
                            }
                        });

                    }
                    next();
                });

                walker.on('end', function () {
                    resolve(files);
                });
            });
        },

        getClientScripts2Bundle: function(appName) {
            return new Promise((resolve, reject) => {
                walker = walk.walk(clientScriptsPath, {
                    followLinks: false
                });
                let files = [];
                walker.on('file', function (root, stat, next) {
                    // Add this file to the list of files
                    if ((appName == 'all' || root.includes("/" + appName + "/") || root.endsWith("/" + appName)) && stat.name.endsWith(".js")) {
                        var filePath = path.join(root,stat.name);
                        filePath = filePath.replace(clientScriptsPath, "client");
                        files.push(filePath);
                    }
                    next();
                });

                walker.on('end', function () {
                    resolve(files);
                });
            });
        },

        copyRecursiveSync: function (src, dest) {
            var exists = fs.existsSync(path.normalize(src));
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

                let srcPath = path.join(__dirname + '/' + src);
                let destPath = path.join(__dirname + '/' + dest);
                copiedCommonScriptFiles.push(dest);
                fs.copyFile(srcPath, destPath, (err) => {
                    if (err) {
                        throw err;
                    }
                });
            }
        }
    };
};
