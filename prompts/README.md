# 🤖 AI 에게 다이어리 웹 만들어 달라고 하기 — 4~5문장 요청서

ChatGPT · Claude · Gemini 에 붙여 넣고, 마지막 줄의 **n8n 주소만 내 것으로** 바꾸세요.

| 파일 | 만들어지는 것 |
|---|---|
| [`diary-simple-prompt.md`](diary-simple-prompt.md) | 🚲 심플 버전 (HTML + Vercel 함수) — 4문장 |
| [`diary-nextjs-prompt.md`](diary-nextjs-prompt.md) | 🚗 Next.js 버전 — 5문장 ("최신 버전" 한 줄 추가) |

**핵심은 네 가지:** 목적(웹 다이어리 · Vercel) · 보낼 것(title · content) · 주소 · 금고("환경변수로 설정할 거야").
"환경변수로" 한마디에 AI 가 n8n 주소를 숨기는 안내데스크(`/api/diary`)를 알아서 만들어 줍니다.

두 요청서 모두 AI 가 만든 코드를 고치지 않고 Vercel 에 올려 ✅ 저장 → n8n 도착까지 확인했습니다 (2026-10-26).
Next.js 에서 "최신 버전" 한 줄을 빼면 옛 버전(15.5.4)이 나와 Vercel 이 "Vulnerable version" 으로 배포를 막았습니다.

**확인 한 가지:** 화면 코드에 n8n 주소가 없고 `/api/diary` 같은 내 주소만 있으면 성공. 막히면 에러 메시지를 붙여 넣고 "고쳐 줘".
