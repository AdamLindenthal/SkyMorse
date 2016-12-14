FROM node:boron
EXPOSE 8000

RUN mkdir /usr/src/gateway
WORKDIR /usr/src/gateway

COPY ./*.js /usr/src/gateway/
COPY ./*.json /usr/src/gateway/
COPY ./web /usr/src/gateway/web/

RUN npm install
CMD node gateway.js