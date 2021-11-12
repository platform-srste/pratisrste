### What is this repository for? ###


### How do I get set up? ###

>cd <ROOT>/server
>npm install
>cd <ROOT>/client
>jspm install

npm install --registry=https://registry.npmjs.org

To fix all the manual changes related to installed 3rd party libraries in jspm package folder, run - 
> grunt override_config

### Commands ###

Starting server -
> npm run server

Starting client -
> npm run client

Bundling -
> npm run pack

Custom library bundling - 
> grunt --customlib=<name-of-the-package-in-jspm-config> corelibbundle
Example: grunt --customlib=lodash@4.17.20 corelibbundle
Note: Make sure the respective core library is jspm installed under config/jspm_packages directory. If not found, install it using below command - 
	> jspm install npm:<name-of-the-package-in-jspm-config> --dev

Publishing application -
> npm run app-pub [Application Scope Name] [Application Directory]
        Example:
		> npm run app-pub mmf ../apps/coreapp
		> npm run app-pub designer ../apps/designer
		>  npm run app-pub studio ../apps/studio
		> npm run app-pub blockly ../apps/blockly
		> npm run app-pub mindomind ../apps/mindomind
		> npm run app-pub sarvam ../apps/sarvam

Reseting application in pratisrstee -
> npm run app-reset [Application Scope Name] [Application Directory]
