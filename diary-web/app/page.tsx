'use client'

import { useState } from 'react'

type Result = { ok: boolean; message: string; at?: string }

export default function DiaryPage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<Result | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    try {
      // n8n을 직접 부르지 않고, 우리 서버의 API Route로 보낸다
      const res = await fetch('/api/diary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      })
      const data = await res.json()
      // 저장 후에도 입력값을 그대로 두어, 무엇이 저장됐는지 한 화면에서 확인할 수 있게 한다
      setResult({ ok: data.ok, message: data.message, at: new Date().toLocaleString('ko-KR') })
    } catch {
      setResult({ ok: false, message: '네트워크 오류가 발생했습니다.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="wrap">
      <h1>📔 웹 다이어리</h1>
      <p className="sub">작성한 일기는 Next.js API Route(/api/diary)를 거쳐 n8n으로 전달됩니다.</p>

      <form onSubmit={handleSubmit} className="card">
        <label htmlFor="title">제목 (title)</label>
        <input id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="오늘의 제목" />

        <label htmlFor="content">내용 (content)</label>
        <textarea id="content" name="content" rows={7} value={content} onChange={(e) => setContent(e.target.value)} placeholder="오늘 있었던 일을 적어보세요" />

        <button type="submit" disabled={loading}>{loading ? '저장 중…' : '저장하기'}</button>
      </form>

      {result && (
        <div className={`result ${result.ok ? 'ok' : 'err'}`} role="status">
          {result.ok ? '✅ ' : '⚠️ '}
          {result.message}
          {result.at && <span className="at"> · {result.at}</span>}
        </div>
      )}
    </main>
  )
}
