FROM node:10-alpine
WORKDIR /app/pratisrste

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./dest /app/pratisrste

WORKDIR /app/pratisrste
RUN rm -rf node_modules
RUN npm cache clean --force

RUN npm install jspm@beta -g
RUN npm install loopback -g
RUN npm install node-gyp -g
RUN npm install grunt-cli  -g

RUN jspm config maxRetries 50000
RUN jspm config registries.npm.timeouts.lookup 1000

RUN npm install
#RUN jspm install --dev

WORKDIR /app/pratisrste
