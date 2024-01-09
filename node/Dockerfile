FROM node:latest

WORKDIR /usr/src/app

ENV DOCKERIZE_VERSION v0.7.0

# RUN apt-get update \
#   && apt-get install -y wget \
#   && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
#   && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

RUN apt update && \
  apt install -y wget netcat-traditional && \
  wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
  chmod +x /usr/bin/wait-for

COPY package.json ./
RUN npm install --quiet

COPY . .

EXPOSE 5000

# ENTRYPOINT ["./start.sh"]
