FROM node:lts-alpine3.12 as base
ENV API_PORT ${API_PORT}
ENV NODE_ENV development

WORKDIR /home/node/app
COPY package.json .yarnrc.yml yarn.lock ./
COPY .yarn ./.yarn
COPY api/package.json ./api/
COPY lib/package.json ./lib/
COPY db/package.json ./db/
RUN yarn workspace api install

COPY tsconfig.json tsconfig.base.json ./

EXPOSE ${API_PORT}
EXPOSE 9229
ENTRYPOINT ["yarn", "workspace", "api"]
CMD ["dev"]

FROM node:lts-alpine3.12 as api
ENV API_PORT ${API_PORT}
WORKDIR /home/node/app
COPY --from=base /home/node/app ./

RUN yarn workspace api install
COPY api ./api
COPY db ./db
COPY lib ./lib
RUN yarn workspace api build

ENV NODE_ENV production
RUN yarn workspace api install
RUN yarn cache clean

EXPOSE ${API_PORT}
USER node

ENTRYPOINT ["yarn", "workspace", "api"]
CMD ["start"]
