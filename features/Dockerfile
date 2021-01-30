FROM cypress/base:14.15.4 as features

WORKDIR /home/node/app
COPY package.json .yarnrc.yml yarn.lock ./
COPY .yarn ./.yarn
COPY features/package.json ./features/
RUN yarn install
RUN yarn cache clean

COPY tsconfig.json tsconfig.base.json ./
COPY features ./features

ENTRYPOINT ["yarn", "workspace", "features"]
CMD ["test"]
