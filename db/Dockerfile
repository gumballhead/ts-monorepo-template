FROM node:lts-alpine3.12 as build
ENV NODE_ENV development

WORKDIR /home/node/app
COPY package.json .yarnrc.yml yarn.lock ./
COPY .yarn ./.yarn
COPY db/package.json ./db/
COPY lib/package.json ./lib/
RUN yarn workspace db install

COPY tsconfig.json tsconfig.base.json ./
COPY db ./db
COPY lib ./lib
RUN yarn workspace db build
RUN yarn cache clean

FROM node:lts-alpine3.12 as db

WORKDIR /home/node/app
COPY --from=build /home/node/app ./
USER node

ENTRYPOINT ["yarn", "workspace", "db"]
CMD ["migrate", "up"]
