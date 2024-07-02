FROM cypress/included:13.11.0
RUN mkdir /workspace
WORKDIR /workspace
RUN chmod -R 777 ./
RUN chmod -R 777 /workspace
COPY package.json ./
RUN npm install
COPY . .

# docker run -it -v $(pwd):/workspace:cached -w /workspace \sha256:7c3571b2056546c3a327ecb44c639bcee80ca1ef7464fd4c3a5ec900e014bd86 \
#     npx cypress run -e run_env=stg -s 'cypress/e2e/assignment.cy.js'
   
    