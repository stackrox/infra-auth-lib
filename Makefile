##############
## Protobuf ##
##############
# This target installs the buf binary.
.PHONY: buf-install
buf-install:
	@brew install bufbuild/buf/buf

# This target compiles proto files into:
# - Go gRPC bindings
# - Go gRPC-Gateway bindings
# - JSON Swagger definitions file
.PHONY: buf-generated-srcs
buf-generated-srcs:
	@buf generate

.PHONY: unit-tests
unit-tests:
	@go test -v ./...
