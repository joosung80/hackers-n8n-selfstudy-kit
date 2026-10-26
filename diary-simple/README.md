# 📔 웹 다이어리 · 심플 버전 (파일 2개)

해커스 n8n 특강 2교시 실습용입니다. **Next.js 없이** HTML 한 장 + Vercel 함수 하나로 만든 다이어리예요.

```
index.html     🪑 화면 — 입력칸 + 저장 버튼, fetch('/api/diary')
api/diary.js   🛎️ 안내데스크 — 서버에서만 실행, 금고(N8N_WEBHOOK_URL) 주소로 n8n 에 전달
```

## 1분 배포

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjoosung80%2Fhackers-n8n-selfstudy-kit%2Ftree%2Fmain%2Fdiary-simple&project-name=my-diary&env=N8N_WEBHOOK_URL&envDescription=n8n%20Webhook%20%EC%9D%98%20Production%20URL)

1. 위 버튼 → GitHub 로 로그인 → 저장소 이름 그대로 **Create**
2. **N8N_WEBHOOK_URL** 칸에 n8n Webhook 의 **Production URL** (`…/webhook/hackers-diary`)
3. **Deploy** → 1분 뒤 도메인 클릭 → 일기 쓰고 **저장하기** → ✅ 저장 완료

## 자주 막히는 곳

| 화면 메시지 | 해결 |
|---|---|
| N8N_WEBHOOK_URL 환경변수가 없습니다 | Vercel → Settings → Environment Variables 추가 → Deployments → Redeploy |
| n8n 응답 오류 (HTTP 404) | Production URL 인지(`webhook-test` 아님), n8n 에서 Publish 했는지 |
| 저장하면 404 | `api` 폴더가 저장소 맨 위에 있는지 |
