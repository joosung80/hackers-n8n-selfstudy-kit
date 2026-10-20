// 브라우저 → (여기) /api/diary → n8n Webhook
// n8n 주소는 서버 환경변수에만 있으므로 브라우저에 노출되지 않는다.
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { title, content } = await req.json().catch(() => ({}))

  if (!title?.trim() || !content?.trim()) {
    return NextResponse.json({ ok: false, message: '제목과 내용을 모두 입력해주세요.' }, { status: 400 })
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL
  if (!webhookUrl) {
    return NextResponse.json({ ok: false, message: 'N8N_WEBHOOK_URL 환경변수가 없습니다.' }, { status: 500 })
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, timestamp: new Date().toISOString() }),
    })
    if (!res.ok) {
      return NextResponse.json({ ok: false, message: `n8n 응답 오류 (HTTP ${res.status})` }, { status: 502 })
    }
    const data = await res.json().catch(() => ({}))
    return NextResponse.json({ ok: true, message: '저장 완료', n8n: data })
  } catch {
    return NextResponse.json({ ok: false, message: 'n8n에 연결할 수 없습니다.' }, { status: 502 })
  }
}
