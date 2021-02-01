FROM node:lts-alpine3.12 as base
ENV APP_PORT ${APP_PORT}
ENV NODE_ENV development

WORKDIR /home/node/app
COPY package.json .yarnrc.yml yarn.lock ./
COPY .yarn ./.yarn
COPY app/package.json ./app/
COPY lib/package.json ./lib/
COPY db/package.json ./db/
COPY api/package.json ./api/
RUN yarn workspace app install

COPY tsconfig.json tsconfig.base.json ./

EXPOSE ${APP_PORT}
ENTRYPOINT ["yarn", "workspace", "app"]
CMD ["start"]

FROM node:lts-alpine3.12 as build
WORKDIR /home/node/app
COPY --from=base /home/node/app ./

RUN yarn workspace app install
COPY app ./app
COPY api ./api
COPY lib ./lib
COPY db ./db
RUN yarn workspace app build

FROM nginx:stable as router
ENV API_PORT ${API_PORT}
COPY --from=build /home/node/app/app/dist /srv/app
COPY app/nginx.conf /etc/nginx/templates/default.conf.template

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
