FROM node:lts-alpine3.12 as tests

WORKDIR /home/node/app
COPY package.json .yarnrc.yml yarn.lock ./
COPY .yarn ./.yarn
COPY db/package.json ./db/
COPY lib/package.json ./lib/
COPY tests/package.json ./tests/
RUN yarn workspace tests install
RUN yarn cache clean

COPY tsconfig.json tsconfig.base.json ./
COPY db ./db
COPY lib ./lib
COPY tests ./tests

ENTRYPOINT ["yarn", "workspace", "tests"]
CMD ["test"]
