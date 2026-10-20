#!/usr/bin/env bash
# REST Client 대신 터미널(curl)로 보낼 때
# 사용법: ./curl.sh https://<내-n8n-주소> [test|prod]
BASE="${1:?n8n 주소를 입력하세요}"; MODE="${2:-test}"
PATH_PREFIX=$([ "$MODE" = "prod" ] && echo webhook || echo webhook-test)
curl -sS -X POST "$BASE/$PATH_PREFIX/hackers-words" \
  -H 'Content-Type: application/json' \
  -d '{ "words": ["고양이", "커피", "회의"] }'
echo
