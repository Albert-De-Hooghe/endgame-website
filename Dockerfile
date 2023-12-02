FROM node:18-alpine

WORKDIR /front-end/

COPY /front-end/build/ /front-end/build/
#COPY /front-end/public/ /front-end/public
#COPY /front-end/src/ /front-end/src
#COPY /front-end/package.json /front-end/

RUN npm install -g serve
CMD ["serve","-s","build"]