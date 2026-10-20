# 📔 웹 다이어리 템플릿 — Next.js API Route → n8n Webhook

해커스 **AI X n8n 업무자동화** 특강 2교시 실습용 템플릿입니다.

```
브라우저(손님) → /api/diary (안내데스크, Next.js API Route) → n8n Webhook (직통번호)
```

- 브라우저는 n8n 주소를 **모릅니다**. `/api/diary` 만 호출합니다.
- n8n 주소는 서버 환경변수 `N8N_WEBHOOK_URL` (금고) 에만 둡니다.

## Vercel 로 배포하기 (코드 수정 없음)

1. 이 페이지 오른쪽 위 **Use this template → Create a new repository**
2. https://vercel.com → **Add New… → Project** → 방금 만든 저장소 **Import**
3. **Environment Variables**
   - Key: `N8N_WEBHOOK_URL`
   - Value: n8n Webhook 의 **Production URL** (예: `https://내-n8n/webhook/hackers-diary`)
4. **Deploy** → 배포 URL 접속 → 제목·내용 입력 → **저장하기** → ✅ 저장 완료

> n8n 워크플로우는 반드시 **Publish(활성화)** 상태여야 하고, `webhook-test` 가 아닌 `webhook` 주소를 넣어야 합니다.

## 로컬 실행

```bash
cp .env.example .env.local   # N8N_WEBHOOK_URL 입력
npm install
npm run dev                  # http://localhost:3000
```

## 파일 구조

| 파일 | 역할 |
|---|---|
| `app/page.tsx` | 입력 폼(title, content) · 저장 버튼 · 저장 결과 표시 |
| `app/api/diary/route.ts` | 입력 검사 후 `N8N_WEBHOOK_URL` 로 POST (안내데스크) |
| `n8n/02_diary_webhook.json` | n8n 에 Import 할 수신 워크플로우 |
