FROM node:20 AS base
WORKDIR /app

FROM base AS dep
COPY package.json package-lock.json ./
RUN npm ci

FROM dep AS dev
COPY . .
EXPOSE 5173
CMD ["npm","run","dev"]

FROM dep AS build
COPY . .
RUN npm run build