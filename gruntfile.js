"use strict";

var walk = require('walk');

module.exports = function (grunt) {
    var eachAsync = require("each-async");
    const path = require('path');
    const GruntUtilFn = require("./grunt-utils");
    var gruntUtils = GruntUtilFn();

    grunt.loadNpmTasks('grunt-sed');
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    // Setup JSPM
    var jspm = require("jspm");
    jspm.setPackagePath(".");

    grunt.loadNpmTasks('grunt-contrib-uglify-es');    
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-symlink');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');    
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-iterate');    
    
    // Get the JSPM baseURL from package.json
    var getBaseUrl = function () {
        var pkgJson = grunt.file.readJSON("package.json");

        if (pkgJson.jspm && pkgJson.jspm.directories && pkgJson.jspm.directories.baseURL) {
            return pkgJson.jspm.directories.baseURL;
        }

        return "";
    };

    const getStylesJSON = async function(appName) {

    }

    const getFiles = function(appName) {
        return new Promise(async (resolve, reject) => {             
            gruntUtils.copyRecursiveSync('config/common/script', 'config/client/script');            
            let promise1 = gruntUtils.createComponentStyles(appName, "config/client/" + appName + "_styles.js");
            let promise2 = gruntUtils.getComponents2Bundle(appName);
            let promise3 = gruntUtils.getClientScripts2Bundle(appName);
            Promise.all([promise1, promise2, promise3])
            .then((files) => {
                let files2bundle = [].concat.apply([], files);
                resolve(files2bundle);
            });
        });
    }

    grunt.registerTask("create_temp_dir", "Create temp directory to copy files related to prod", function() {
        const done = this.async();                      
        grunt.initConfig({                        
            copy: {
                main: {
                  files: [                                 
                    {expand: true, src: ['./config/config.js'], dest: 'dest/', filter: 'isFile'},
                    {expand: true, src: ['./config/index.js'], dest: 'dest/', filter: 'isFile'},
                    {expand: true, src: ['./config/jspm.config.js'], dest: 'dest/', filter: 'isFile'},
                    {expand: true, src: ['./config/package.json'], dest: 'dest/', filter: 'isFile'},
                    {expand: true, src: ['./server/**'], dest: 'dest/'},
                    {expand: true, src: ['./gruntfile.js'], dest: 'dest/', filter: 'isFile'},                                       
                    {expand: true, src: ['./grunt-utils.json'], dest: 'dest/', filter: 'isFile'},
                    {expand: true, src: ['./package-lock.json'], dest: 'dest/', filter: 'isFile'},
                    {expand: true, src: ['./package.json'], dest: 'dest/', filter: 'isFile'},                    
                    {expand: true, src: ['./README.md'], dest: 'dest/', filter: 'isFile'}                    
                  ],
                },
            }                                                                        
        });  
        done();          
    });

    grunt.registerTask("override_setup", "Override Config", function() {
        const done = this.async();        
        grunt.initConfig({                        
            sed: {        
                overflowMenu_1: {
                    path: 'client/jspm_packages/npm/carbon-components-react@7.3.2/lib/components/OverflowMenu/OverflowMenu.js',
                    pattern: '!menuBody\.contains\\(target\\) \&\& \_this\.menuEl',
                    replacement: '\!(event\.composedPath \&\& event\.composedPath() \&\& event\.composedPath()\.length \> 0 \&\& menuBody\.contains(event\.composedPath()[0])) \&\& \!menuBody\.contains(target) \&\& \_this\.menuEl',
                    recursive: false
                },
                overflowMenu_2: {
                    path: 'client/jspm_packages/npm/carbon-components-react@7.3.2/lib/components/OverflowMenu/OverflowMenu.js',
                    pattern: '\\(\!_this\._menuBody \\|\\| \!_this\._menuBody\.contains\\(evt.target\\)\\)',
                    replacement: '(\!_this\._menuBody \|\| ((\!evt\.composedPath \|\| \!evt\.composedPath() \|\| evt\.composedPath()\.length == 0) \&\& \!_this\._menuBody\.contains(evt\.target)) \|\| (evt\.composedPath \&\& evt\.composedPath() \&\& evt\.composedPath()\.length > 0 \&\& \!_this\._menuBody\.contains(evt\.composedPath()[0])))',
                    recursive: false
                },
                downshift_1: {
                    path: 'client/jspm_packages/npm/downshift@1.31.16/dist/downshift.cjs.js',
                    pattern: 'parent \\=\\=\\= child \\|\\| parent\.contains\\(child\\)',                    
                    replacement: 'parent\.contains(child) \|\| parent \=\=\= child  \|\| (evt \&\& evt\.composedPath \&\& evt\.composedPath() \&\& evt\.composedPath().length > 0 \&\& (parent === evt\.composedPath()[0] || parent\.contains(evt\.composedPath()[0])))',
                    recursive: false
                },
                downshift_2: {
                    path: 'client/jspm_packages/npm/downshift@1.31.16/dist/downshift.cjs.js',
                    pattern: 'isOrContainsNode\\(_this3\._rootNode\, event\.target\\)',                    
                    replacement: 'isOrContainsNode(_this3\._rootNode\, event\.target\, event)',
                    recursive: false
                },
                clicklistener: {
                    path: 'client/jspm_packages/npm/carbon-components-react@7.3.2/lib/internal/ClickListener.js',
                    pattern: 'this\.element\.contains \&\& !this\.element\.contains\\(evt\.target\\)',
                    replacement: 'this\.element\.contains \&\& !this\.element\.contains(evt\.target) \&\& (evt\.composedPath \&\& evt\.composedPath() && evt\.composedPath()\.length > 0 && !this\.element\.contains(evt\.composedPath()[0]))',
                    recursive: false
                }, 
                clickoutside: {
                    path: 'client/jspm_packages/github/tj/react-click-outside@1.1.0/build/index.js',
                    pattern: 'onClickOutside\:',
                    replacement: '\/\/onClickOutside\:',
                    recursive: false
                }                                               
            }                 
        });  
        done();          
    });   

    grunt.registerTask("updateCommonScripts", "Update common scripts", function() {
        const done = this.async();    
        const templateContent = `export default function() {
            return new Promise(async (resolve, reject)=> {
                let $resolve = resolve;
                let $reject = reject;
                let $input = arguments[0];
                let result = ($1)(arguments);                                                       
                if(result && result.then) {
                    result.then((data)=> $resolve(data));
                }else{
                    setTimeout(()=>$resolve(result), 2000);                                
                }
            })
        }`;

        grunt.initConfig({  
            copy: {
                main: {
                  options: {
                      process: function (content, srcpath) {
                        return templateContent.replace("$1", content);                          
                      }
                  },
                  files: [
                    {
                      expand: true,
                      src: ['./config/common/script/**/*.js'],
                      dest: './',
                      filter: 'isFile'
                    }
                  ]
                },
            }            
        });  
        done();          
    });

    grunt.registerTask("init-app", "Copy application files into config", function() {
        const done = this.async();        
        grunt.initConfig({                        
            copy: {
                main: {
                  files: [                                 
                    {expand: true, src: ['**'], dest: 'config/', cwd: './client',}                    
                  ],
                },
            }                       
        });  
        done();          
    });

    grunt.registerTask("init-customlib", "Copy application files into config", function() {
        const done = this.async();        
        grunt.initConfig({                                     
            iterate: {
                options: {
                    argName: 'customlib',   // Default set to 'key'
                    separator: ',',   // Default set to ','
                    limit: 1         // Since the tasks run concurrently default set to maximum of 2 or number of CPU cores
                }
            }           
        });  
        done();          
    });

    grunt.registerTask('createbundle', 'Create bundle from multiple packages', ['iterate:corelibbundle']);

    grunt.registerTask("cleanup", "Clean up the temporary files", function() {
        const done = this.async();        
        var files2remove = gruntUtils.getCopiedCommonScripts();            
        files2remove.push("./config/bundles");
        files2remove.push("./config/client");
        files2remove.push("./config/common");
        files2remove.push("./config/component");
        files2remove.push("./config/palette");
        files2remove.push("./config/server");

        grunt.initConfig({   
            clean: files2remove                    
        });  
        done();          
    });    

    grunt.registerTask('override_config', ['override_setup', 'sed']);

    grunt.registerTask("thirdpartybundle", "Bundle Thirdparty files", function () { 
        const done = this.async();
        var filesList = grunt.file.readJSON("thirdpartylibs.json");      
        var files = filesList.list;           
        var outputFilePath = path.join('client', 'bundles', "core_bundle.js");
        var contents = "";
        for(var fileIndx in files) {
            let filePath = files[fileIndx];
            let fileContents = grunt.file.read(path.join(filePath));
            contents = contents + fileContents;
        }          
        
        grunt.file.write(outputFilePath, contents);
        done();
    });

    grunt.registerTask("jsonFileBundle", "Bundle JSON Files", function () { 
        const done = this.async();
        var customlist = grunt.option('customlist');
        var filesList = grunt.file.readJSON(customlist + ".json");        
        var files = filesList.list;           
        var outputFilePath = path.join('client', 'bundles', customlist + '_bundle.js');
        var contents = "";
        for(var fileIndx in files) {
            let fileName = files[fileIndx];
            let fileContents = grunt.file.readJSON(path.join("config", "jspm_packages", "npm", fileName + ".json"));
            contents = contents + `System.registerDynamic('npm:${fileName}.json', [], true, function ($__require, exports, module) {
                module.exports = ${JSON.stringify(fileContents)} 
            });\n`;
        }          
        
        grunt.file.write(outputFilePath, contents);        
        done();
    });

    grunt.registerTask("jspm", "Bundle JSPM", async function () {     
        const done = this.async();
        var customlib = grunt.option('customlib');                     
        var minifyOption = grunt.option('minify');    
        let thisOptions = this.options;   
        if(customlib) {                 
            var fileOptions = {
                followLinks: false                
            };
            var files2Bundle = [];
            var whitelistedDirs = grunt.option('whitelist');
            whitelistedDirs = whitelistedDirs?whitelistedDirs.split(":"): [""];
            var pkgJson = grunt.file.readJSON("package.json");      
            var customLibFullName = customlib.substr(1).indexOf("@") > -1?customlib: ""; 
            var customLibName =  !customlib.startsWith("@") && customlib.indexOf("@") == -1? customlib: customlib.split("@").splice(0, customlib.split("@").length - 1).join("@")
            if(!customLibFullName) {
                let packageVersion = pkgJson && pkgJson.jspm 
                                && pkgJson.jspm.dependencies 
                                && (pkgJson.jspm.dependencies[customLibName] || pkgJson.jspm.devDependencies[customLibName]);
                customLibFullName = customLibName + "@" + packageVersion;
            }
            var remainingWhiteListedDir = whitelistedDirs.length;               
            if(whitelistedDirs.length > 0) {
                whitelistedDirs.map((whitelistedDir) => {     
                    console.log(path.join("config", "jspm_packages", "npm", customLibFullName, whitelistedDir))                        
                    var walker = walk.walk(path.join("config", "jspm_packages", "npm", customLibFullName, whitelistedDir), fileOptions);                        
                    walker.on('file', function(root, stat, next) {                        
                        // Add this file to the list of files    
                        if(stat.name.endsWith(".js")) {            
                            files2Bundle.push(path.join(root, stat.name));
                        }
                        next();
                    });

                    walker.on("errors", function (root, nodeStatsArray, next) {
                        next();
                    });
                
                    walker.on('end', function() {                                                       
                        if(files2Bundle && files2Bundle.length > 0) {
                            var updatedFiles2Bundle = [];
                            updatedFiles2Bundle.push("jspm_packages/npm/" + customLibFullName);                                             
                            files2Bundle.map((fileName, indx) => {
                                if(fileName.endsWith(".js")) {
                                    if(fileName.startsWith("config/")) {
                                        updatedFiles2Bundle.push(fileName.split("config/")[1]);
                                    }else{
                                        updatedFiles2Bundle.push(fileName);
                                    }
                                }
                                    
                            });                                       
                            
                            remainingWhiteListedDir = remainingWhiteListedDir == 0?remainingWhiteListedDir: remainingWhiteListedDir - 1;
                            if(remainingWhiteListedDir == 0) {
                                
                                var options = thisOptions({
                                    sfx: true,
                                    mangle: true,
                                    minify: false,
                                    inject: false,
                                    sourceMaps: 'inline'
                                });
                                var inputFilePath = path.join('client', 'bundles', customLibName + '_bundle.js');
                                var outputFilePath = path.join('client', 'bundles', customLibName + '_bundle.min.js');
                                var files = {};
                                files[outputFilePath] = [inputFilePath];
                                grunt.initConfig({                        
                                    uglify: {
                                        options: {
                                            mangle: false
                                        },
                                        my_target: {
                                            files
                                        }
                                    }
                                });                                                                    
                                var bundle = options.sfx ? "bundleSFX" : "bundle";
                                var dest = path.join("client",  "bundles", customLibName + "_bundle.js");                                
                                var Builder = require('jspm').Builder;
                                var builder = new Builder();                            
                                builder.bundle(updatedFiles2Bundle, dest, options).then(() => {                        
                                    done();            
                                });
                            }
                        }                
                    });
                });  
            }                                                                   
        } else if(minifyOption) {
            var inputFP = path.join('client', 'bundles', minifyOption + '_bundle.js');
            var outputFP = path.join('client', 'bundles', minifyOption + '_bundle.min.js');
            var files2Transform = {};
            files2Transform[outputFP] = [inputFP];            
            grunt.initConfig({                
                uglify: {
                    options: {
                        mangle: false,
                        minify: true,                        
                    },
                    my_target: {
                        files: files2Transform
                    }
                }
            });             
            done();
        }else {
            var appName = grunt.option('app');
            if(appName) {
                let scriptFiles = await getFiles(appName);
                var options = this.options({
                    sfx: true,
                    mangle: true,
                    minify: false,
                    inject: false,
                    sourceMaps: 'inline'
                });
                var inputFilePath = path.join('client', 'bundles', appName + '_bundle.js');
                var outputFilePath = path.join('client', 'bundles', appName + '_bundle.min.js');
                var files = {};
                files[outputFilePath] = [inputFilePath];                
                grunt.initConfig({                                        
                    uglify: {
                        options: {
                            mangle: false
                        },
                        my_target: {
                            files
                        }
                    }
                });    
                let stylesJSON = await getStylesJSON(appName);

                var bundle = options.sfx ? "bundleSFX" : "bundle";
                var dest = path.join("client", "bundles", appName + "_bundle.js");
                var Builder = require('jspm').Builder;
                var updatedScriptFiles = [];                                
                scriptFiles.map((scriptFile)=>{
                    let updatedScriptFile = path.normalize(path.join(scriptFile));                                        
                    updatedScriptFiles.push(updatedScriptFile);                    
                });
                var builder = new Builder();                                            
                builder.bundle(updatedScriptFiles, dest, options).then(() => {                        
                    done();            
                });
            }else {
                done();
            }            
        }        
    });
    grunt.registerTask('create_temp_prod_dir', ['create_temp_dir', 'copy']);
    grunt.registerTask('createcorebundle', 'Create core bundle from multiple packages', ['init-customlib', 'createbundle']);
    grunt.registerTask('corelibbundle', ['jspm', 'uglify']);    
    grunt.registerTask('test', ['test1', 'copy']);    
    grunt.registerTask("default", ["init-app",  "copy", "updateCommonScripts", "copy", "jspm", "uglify", "cleanup", "clean"]);
};
