FROM node:10 as build
RUN mkdir -p /usr/src/critical-css-app/node_modules && chown -R node:node /usr/src/critical-css-app
WORKDIR /usr/src/critical-css-app
COPY package*.json ./
COPY yarn*.lock ./
RUN yarn install
COPY . /usr/src/critical-css-app
RUN yarn build:prod

FROM nginx:1.16.0-alpine
COPY --from=build /usr/src/critical-css-app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

