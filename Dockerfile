FROM node

RUN useradd -ms /bin/bash openspace && adduser openspace sudo

USER openspace
WORKDIR /home/openspace

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000
