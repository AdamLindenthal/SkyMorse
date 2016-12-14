FROM node:boron
EXPOSE 8070

RUN mkdir /usr/src/generator
WORKDIR /usr/src/generator

COPY ./*.js . /usr/src/generator/
COPY ./*.json . /usr/src/generator/

RUN npm install
CMD node generatorService.js