FROM node:19 as build
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run docs:deploy

FROM nginx as web
COPY --from=build /app/public /usr/share/nginx/html