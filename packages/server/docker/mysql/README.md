## Start a MySQL Server with Docker

### Prerequisite

Installed docker engine on the server is required.

## Instructions

1. Create the `.env` file with template [.env.example](./.env.example) and put it here.
	```
	cp .env.example .env
	```
1. Fill in the required value in the `.env` file.
1. Use docker compose in this folder to start the MySQL server.
	```
	sudo docker compose up -d

	# or with older version of docker compose
	# sudo docker-compose up -d
	```
