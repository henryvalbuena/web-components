FROM node

RUN mkdir -p /www/src/
WORKDIR /www/src/
ENV PATH /www/src/node_modules/.bin:$PATH

# Install Yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

COPY package*.json /www/src/

RUN yarn install

COPY . /www/src/

EXPOSE 4000

CMD [ "yarn", "run", "serve" ]



