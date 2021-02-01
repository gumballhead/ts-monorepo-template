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

FROM node:lts-alpine3.12 as db
ENV NODE_ENV production

WORKDIR /home/node/app
COPY --from=build /home/node/app ./

RUN yarn workspace db install
RUN yarn cache clean

USER node
ENTRYPOINT ["yarn", "workspace", "db"]
CMD ["migrate", "up"]
