FROM node:alpine

# Create app directory
WORKDIR /www

# Install app dependencies
COPY package*.json ./

RUN npm install

COPY src  ./

EXPOSE 3000

CMD [ "node", "/www/server.js" ]










