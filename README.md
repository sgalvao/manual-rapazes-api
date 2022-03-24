## Rulebook with voting API

### Tech stack
- [Node](https://github.com/nodejs/node)
- [Express](https://github.com/expressjs/express)
- [GraphQL](https://github.com/graphql/graphql-js)
- [Apollo Server](https://github.com/apollographql/apollo-server)
- [Typescript](https://www.typescriptlang.org/)
- [Prisma V2](https://www.prisma.io/)
- [Deployed in Heroku](https://www.heroku.com/)
- [AWS S3 Bucket](https://aws.amazon.com/pt/free/?trk=2ee11bb2-bc40-4546-9852-2c4ad8e8f646&sc_channel=ps&sc_campaign=acquisition&sc_medium=ACQ-P|PS-GO|Brand|Desktop|SU|Core-Main|Core|BR|PT|Text&ef_id=CjwKCAjwrfCRBhAXEiwAnkmKmT2jBWhBYfb_zjzvnZggJgDdlvWLPG5CA0cLflMWS1pO8KHtH6BYQhoCguAQAvD_BwE:G:s&s_kwcid=AL!4422!3!561843094929!e!!g!!aws&ef_id=CjwKCAjwrfCRBhAXEiwAnkmKmT2jBWhBYfb_zjzvnZggJgDdlvWLPG5CA0cLflMWS1pO8KHtH6BYQhoCguAQAvD_BwE:G:s&s_kwcid=AL!4422!3!561843094929!e!!g!!aws&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all)

### Design Intuition
I developed this project to improve and apply clean software architecture concepts based on SOLID principles.

## Functionality
This project's main features would be:
- creating users, 
- creating rules, 
- voting for these rules to be approved (With all the necessary validations in a vote)
> (The approval flow can be by majority or unanimous vote
> the user can choose a better method for each rule)

## Dependencies
- Node js => v16

## Up and Running
- Install dependencies `yarn (or npm i)`
- Run `yarn dev (or npm dev)` to run development server (will be available in `http://localhost:9000` and GraphQL in `http://localhost:9000/graphql`)

## Available scripts
- `yarn start (or npm start)`: Run server in production mode
- `yarn dev (or npm dev)`: Run server in development mode
- `yarn build (or npm run build)`: Generate production build (files will be available on `build` directory)
- `yarn lint (or npm run lint)`: Run linter based on eslint configurations
- `yarn lint:fix (or npm run lint:fix )`: Run linter and fix errors


