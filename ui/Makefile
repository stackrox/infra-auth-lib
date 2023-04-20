.PHONY: install-dependencies
install-dependencies:
	yarn install --frozen-lockfile

.PHONY: generate-client
generate-client:
	yarn gen:src

.PHONY: build
build:
	yarn build

.PHONY: publish
publish:
	yarn publish --non-interactive
