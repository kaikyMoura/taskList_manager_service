# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.10.0

FROM node:${NODE_VERSION}-alpine as base
WORKDIR /app

FROM base as deps

RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json ./ 
COPY prisma ./prisma
RUN npm ci --omit=dev

FROM base as build

COPY package.json package-lock.json ./ 
COPY prisma ./prisma
RUN npm ci
COPY . .
RUN npm run build

FROM base as final

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/ ./
RUN chown -R node:node /app
USER node

COPY .env .env

RUN npx prisma generate

EXPOSE 5000

CMD ["npm", "run", "start"]