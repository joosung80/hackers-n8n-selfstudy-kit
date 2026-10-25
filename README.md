# 🎁 n8n 업무자동화 셀프 학습 키트

> **AI X n8n 업무자동화 실전 프로젝트** 특강 (2026.10.26 · 중소조선연구원) 수강생 선물 패키지
> 강의 때 함께 만든 3개 실습 + 보너스 1개를 **집에서 혼자서도** 처음부터 끝까지 따라 할 수 있도록 담았습니다.

![Webhook = n8n 에 달린 초인종](images/concept_webhook_doorbell.jpg)

## 📦 들어 있는 것

| 폴더 / 파일 | 내용 |
|---|---|
| 📘 [`manual/self-study-manual.md`](manual/self-study-manual.md) | **셀프 실습 매뉴얼** — 환경 준비부터 실습 1·2·3·보너스, 문제 해결까지 |
| 📕 [`manual/lecture-slides.pdf`](manual/lecture-slides.pdf) | 강의자료 PDF (그림으로 보는 API · URL · GET/POST · 상태코드 · JSON · Webhook) |
| ⚙️ [`workflows/`](workflows/) | n8n 에 바로 가져오는 워크플로우 4개 — **노드마다 한국어 설명 메모** 포함 |
| 📨 [`hoppscotch/`](hoppscotch/) | **Hoppscotch 컬렉션** — 강의 시나리오 7개를 브라우저 도구로 바로 Import (변수 2개만 바꾸면 끝) |
| 📨 [`rest-client/`](rest-client/) | 웹훅에 JSON 을 보내는 파일 (`.http` · Mac/Linux `curl.sh` · Windows `curl.ps1`) |
| 🌐 [`diary-web/`](diary-web/) | 2교시 웹 다이어리 (Next.js) 소스 |
| 🖼️ [`images/`](images/) | 개념 그림 7장 + 정답 화면 |

강의 웹페이지: **https://hackers-n8n-lecture.vercel.app**

## 🚀 3단계로 시작하기

1. **n8n 준비** — [n8n Cloud 무료 체험](https://n8n.io) 가입 (또는 내 PC 에 Docker 설치 → 매뉴얼 1장)
2. **워크플로우 가져오기** — n8n 에서 새 워크플로우 → 왼쪽 위 워크플로우 이름 옆 **⋯ → Import… → Import from URL…** → 아래 주소 붙여넣기
3. **매뉴얼 따라 실행** — 화면의 노란/초록 메모가 단계별로 안내합니다

| 실습 | 무엇을 배우나 | Import from URL 에 붙여넣을 주소 |
|---|---|---|
| 01 · Webhook 초인종 | API · JSON · POST · Webhook | `https://raw.githubusercontent.com/joosung80/hackers-n8n-selfstudy-kit/main/workflows/01_webhook_words.json` |
| 02 · 웹 다이어리 수신 | API Route · 환경변수 · 배포 | `https://raw.githubusercontent.com/joosung80/hackers-n8n-selfstudy-kit/main/workflows/02_diary_webhook.json` |
| 03 · 뉴스 5개만 | RSS · 아이템 · Limit · Expression | `https://raw.githubusercontent.com/joosung80/hackers-n8n-selfstudy-kit/main/workflows/03_hn_rss_limit.json` |
| 🎁 04 · 매일 아침 뉴스 브리핑 | Schedule · Code · 메시지 발송 | `https://raw.githubusercontent.com/joosung80/hackers-n8n-selfstudy-kit/main/workflows/04_bonus_daily_news_briefing.json` |

> 파일로 받으려면: 각 파일 열기 → 오른쪽 위 **Download raw file** → n8n 에서 **⋯ → Import… → Import from file…**

## 🧭 추천 학습 순서

```
강의자료 PDF 로 개념 복습 (30분)
   → 매뉴얼 2장 · 실습 01 Webhook (20분)
   → 매뉴얼 3장 · 실습 02 다이어리 + Vercel (40분)
   → 매뉴얼 4장 · 실습 03 RSS (20분)
   → 매뉴얼 5장 · 보너스 04 → 내 업무 RSS 로 바꿔 매일 받아보기 🎉
```

## 🔗 함께 쓰는 저장소

- 다이어리 템플릿 (Use this template 용): https://github.com/joosung80/hackers-n8n-diary-template
- n8n 공식 문서: https://docs.n8n.io

---
학습 목적 자료입니다. 자유롭게 고쳐 쓰고, 동료와 나눠 주세요. 🙌
