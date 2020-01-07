FROM node:10
RUN mkdir -p /usr/src/critical-css-app/node_modules && chown -R node:node /usr/src/critical-css-app
WORKDIR /usr/src/critical-css-app
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 8080
CMD [ "node", "yarn build:prod" ]
