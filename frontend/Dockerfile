FROM node:16-alpine

WORKDIR /usr/frontend/

COPY ./package*.json ./

RUN npm install --legacy-peer-deps

ENV DISABLE_ESLINT_PLUGIN=true

COPY . .