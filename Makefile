dev:
		docker compose up

install:
		cd backend && pnpm install && cd .. && cd storefront && pnpm install

setup:
		cd backend && cp .env.template .env && cd .. && cd storefront && cp .env.template .env
