#!/usr/bin/env bash
# REST Client 대신 터미널(curl)로 보낼 때 — Mac · Linux · Windows Git Bash 모두 OK
# 사용법: bash curl.sh https://<내-n8n-주소> [test|prod]
#   예)  bash curl.sh http://localhost:5678 test
#
# 보내는 내용: { "words": ["고양이", "커피", "회의"] }
# 한글을 \uXXXX 로 적어 보냅니다. Windows 에서 curl 명령줄에 한글을 그대로 넣으면
# n8n 에 "???" 로 도착하기 때문이에요. n8n 은 \uXXXX 를 한글로 바르게 읽습니다.
#   고양이 = 고양이 · 커피 = 커피 · 회의 = 회의
BASE="${1:?n8n 주소를 입력하세요 (예: http://localhost:5678)}"; MODE="${2:-test}"
BASE="${BASE%/}"
PATH_PREFIX=$([ "$MODE" = "prod" ] && echo webhook || echo webhook-test)
BODY='{ "words": ["고양이", "커피", "회의"] }'
curl -sS -X POST "$BASE/$PATH_PREFIX/hackers-words" \
  -H 'Content-Type: application/json; charset=utf-8' \
  --data-binary "$BODY"
echo
