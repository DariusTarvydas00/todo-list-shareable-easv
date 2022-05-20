#FROM node:latest
#WORKDIR /app
#COPY package*.json ./
#RUN npm install
#COPY . .
#RUN npm run build
#CMD ["node", "dist/main"]
# Image source
FROM node:latest
RUN mkdit /opt/test
# Docker working directory
#WORKDIR /app
#
## Copying file into APP directory of docker
#COPY ./package*.json ./
#
## Then install the NPM module
#RUN npm install
#
## Copy current directory to APP folder
#COPY . .
#
#RUN npm run build
#
#EXPOSE 3000
#CMD ["node", "dist/main"]