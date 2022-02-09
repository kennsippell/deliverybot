FROM ubuntu:20.04
RUN apt update
RUN apt install -y curl gnupg
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt update
RUN apt install -y yarn
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build
ENV LOG_LEVEL debug
ENV LOG_FORMAT son
ENTRYPOINT [ "yarn", "start"]