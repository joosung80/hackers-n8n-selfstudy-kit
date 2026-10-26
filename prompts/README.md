# 🤖 AI 에게 다이어리 웹 만들어 달라고 하기 — 7문장 요청서

ChatGPT · Claude · Gemini 에 아래 파일 내용을 **그대로 붙여 넣으세요.**

| 파일 | 만들어지는 것 |
|---|---|
| [`diary-simple-prompt.md`](diary-simple-prompt.md) | 🚲 심플 버전 — `index.html` + `api/diary.js` 2개 |
| [`diary-nextjs-prompt.md`](diary-nextjs-prompt.md) | 🚗 Next.js 버전 — `app/page.tsx` + `app/api/diary/route.ts` 등 |

두 요청서 모두, AI 가 만든 코드를 고치지 않고 Vercel 에 올려 **✅ 저장 → n8n 도착**까지 확인했습니다 (2026-10-26).

**받은 코드 30초 검수**
- 화면 코드에 `fetch('/api/diary'` 가 있고, n8n 주소는 없다
- 안내데스크 코드에 `process.env.N8N_WEBHOOK_URL` 이 있다
- 막히면 에러 메시지를 붙여 넣고 "고쳐 줘, 바뀐 파일 전체로"
