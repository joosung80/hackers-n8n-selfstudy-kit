// 🛎️ 안내데스크: 브라우저 → (여기) /api/diary → n8n Webhook
// 이 파일은 Vercel 서버에서만 실행돼요. 그래서 n8n 주소(금고)가 브라우저에 보이지 않아요.

export async function POST(request) {
  // ① 손님 주문서 받기
  const { title, content } = await request.json().catch(() => ({}))

  // ② 빈칸 검사
  if (!title?.trim() || !content?.trim()) {
    return Response.json({ ok: false, message: '제목과 내용을 모두 입력해주세요.' }, { status: 400 })
  }

  // ③ 금고(환경변수)에서 n8n 직통번호 꺼내기
  const webhookUrl = process.env.N8N_WEBHOOK_URL
  if (!webhookUrl) {
    return Response.json({ ok: false, message: 'N8N_WEBHOOK_URL 환경변수가 없습니다.' }, { status: 500 })
  }

  // ④ n8n 으로 전달
  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, timestamp: new Date().toISOString() }),
    })
    if (!res.ok) {
      return Response.json({ ok: false, message: `n8n 응답 오류 (HTTP ${res.status})` }, { status: 502 })
    }
  } catch {
    return Response.json({ ok: false, message: 'n8n 에 연결할 수 없습니다.' }, { status: 502 })
  }

  // ⑤ 손님에게 답변
  return Response.json({ ok: true, message: '저장 완료' })
}
