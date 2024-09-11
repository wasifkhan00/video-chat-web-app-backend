FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

COPY controllers controllers
COPY middlewares middlewares
COPY routes routes
COPY logged.txt logged.txt
COPY package-lock.json package-lock.json
COPY package.json package.json
COPY Server.js Server.js


RUN npm install

ENTRYPOINT ["node","Server.js"]



