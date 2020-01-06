FROM node:lts-alpine

ENV NODE_ENV development

# Create app directory
WORKDIR /home/node/app
RUN chown -R node:node /home/node/app
USER node

# Expose port
EXPOSE 8080

# Commands at runtime
# Command "dev" does not work
CMD [ "npm", "run", "start" ]
