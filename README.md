# ut-reviews
## TODO
- [x] nginx works locally
- [x] nginx works on aws
- [ ] https set up
- [ ] integrate google account sign in, express sessions, users table in db
- [ ] express api https://github.com/cdimascio/express-openapi-validator
- [ ] database model and api implementation
- [ ] ui/frontend/react stuff
## Tech Stack
- frontend
  - react
  - webpack
- backend
  - node
  - express
  - postgres
- deployment
  - docker
  - aws ec2
  - nginx
## Useful Commands
- `docker-compose up --build [-d]` - build images and run containers \[in background\]
- `docker-compose down` - stops and removes containers and networks from `docker-compose up`
- `docker-compose exec SERVICE /bin/bash` - connect to backend/frontend/... container
  labeled by `service` in docker-compose.yaml
- `docker-compose logs --help` - view logs from containers


