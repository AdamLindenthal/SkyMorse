FROM node:boron
EXPOSE 8080

RUN mkdir /usr/src/convertor
WORKDIR /usr/src/convertor

COPY ./*.js . /usr/src/convertor/
COPY ./*.json . /usr/src/convertor/

RUN npm install
CMD node convertorService.js