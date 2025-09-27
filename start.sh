#!/bin/sh

set -e
mkdir -p logs
nginx -p ${PWD} -c "nginx.conf" "$@"
