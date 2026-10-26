Next.js 15(App Router, TypeScript)로 Vercel 에 올릴 "웹 다이어리"를 만들어 줘.
app/page.tsx 에는 제목(title)·내용(content) 입력칸과 [저장하기] 버튼을 만들어 줘.
버튼을 누르면 fetch('/api/diary') 로 { title, content } 를 POST 하고, 결과를 버튼 아래에 "✅ 저장 완료" 또는 "⚠️ 오류"로 보여 줘.
app/api/diary/route.ts 에서 받은 title·content 를 환경변수 N8N_WEBHOOK_URL 주소로 POST 해 줘.
title 이나 content 가 비어 있으면 n8n 에 보내지 말고 400 오류를 돌려줘.
n8n 주소는 코드에 적지 말고, 환경변수 이름에 NEXT_PUBLIC_ 을 붙이지 마.
Tailwind 같은 추가 라이브러리 없이, package.json 을 포함한 모든 파일 전체 코드를 생략 없이 줘.
