FROM node:16-alpine

WORKDIR /usr/backend/

COPY ./package.json .

RUN npm install

COPY . .

ENV PORT=5001 \
    MONGO_URL=mongodb+srv://darshanaswani:root@cluster0.eprneqs.mongodb.net/?retryWrites=true&w=majority \
    JWT_SECRET=abc123 \
    PAYPAL_CLIENT_ID=AVJmZ6OWQst-JZlACweqAcaLuCLzt4vMr473dBrOSAfmUN8O9StF3SUABg-Riy7T2ZxmQf1HJxF2Wb1v

RUN npm run data:import