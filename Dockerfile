FROM node:16.3.0-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
EXPOSE 9002
CMD [ "npm", "run", "serve" ]