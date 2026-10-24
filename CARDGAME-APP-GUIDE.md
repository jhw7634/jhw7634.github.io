# 카드게임 앱 만들기 가이드

'뻥 화투'(`/ppeong/`)를 만든 방식 그대로, 다른 카드게임도 **설치되는 앱(PWA)** 으로 만들기 위한 설명서입니다.
새 게임을 만들 때 이 파일을 Claude에게 보여 주고 "이 가이드대로 ○○ 게임 앱 만들어 줘"라고 하면 됩니다.

---

## 1. 결과물 모양

- 주소: `https://jhw7634.github.io/<게임폴더>/` (예: `/ppeong/`)
- 휴대폰에서 링크를 열고 **앱 설치 / 홈 화면에 추가** → 아이콘으로 전체 화면 앱처럼 실행
- 한 번 열면 인터넷 없이도 동작 (서비스워커 캐시)
- 앱스토어 등록 없음 — 링크만 공유하면 끝

## 2. 폴더 구조 (게임 하나당 폴더 하나)

```
jhw7634.github.io/
├─ CARDGAME-APP-GUIDE.md   ← 이 파일
├─ ppeong/                 ← 뻥 화투 (참고용 완성본)
│  ├─ index.html           ← 앱 전체 (HTML+CSS+JS 한 파일)
│  ├─ manifest.json        ← 앱 이름·아이콘·색 (설치용)
│  ├─ sw.js                ← 오프라인 캐시
│  ├─ icon-192.png / icon-512.png
│  ├─ hero.jpg             ← 홈 화면 대표 이미지 (선택)
│  └─ cards/               ← 카드 이미지 (예: 1-1.jpg … 12-4.jpg)
└─ <새게임>/               ← 같은 구조로 복사해서 시작
```

## 3. 화면 구성 (뻥 기준, 그대로 재사용 가능)

| 화면 | 내용 |
|---|---|
| 홈 | 대표 이미지, 시작 버튼, 메뉴 타일, 하단 탭바, **앱 설치 버튼** |
| 연습 게임 | 나 + 컴퓨터 상대, 단계별 진행·팁·뒤로가기, 게임 방식 선택 |
| 모션 설명서 | 한 판을 애니메이션으로 따라가기 |
| 점수판 | 2~6명, 판별 기록·누적·등수, 기록은 기기에만 저장(localStorage) |
| 계산기 | 손패 조합·점수 확인 |
| 게임 방법 | 규칙·점수표·용어·팁 |
| 카드 보기 | 전체 카드 목록 |

게임마다 필요 없는 화면은 빼고, 필요한 화면(예: 베팅, 족보표)은 추가.

## 4. 점수판 공통 규칙

- **게임 방식** 선택: `5판` · `10판` · `제한 없음` · `100점 내기` · `200점 내기` · `300점 내기`
  - 판수 방식: 정한 판수가 끝나면 종료
  - 점수 내기: 누구든 누적이 기준점에 닿으면 그 판에서 종료
- 특수 점수(예: 뻥의 마이너스)는 **직접 입력** 가능하게
- 판 취소, 새 게임, 이름 바꾸기, 같은 점수는 같은 등수
- 승리 기준(점수 낮은 사람 / 높은 사람)은 게임마다 명시

## 5. 앱(PWA)으로 만들기 체크리스트

1. `index.html` `<head>`에
   ```html
   <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
   <meta name="theme-color" content="#171311">
   <meta name="apple-mobile-web-app-capable" content="yes">
   <meta name="apple-mobile-web-app-title" content="게임이름">
   <link rel="manifest" href="manifest.json">
   <link rel="apple-touch-icon" href="icon-192.png">
   ```
2. `manifest.json`
   ```json
   {
     "id": "/<게임폴더>/", "name": "게임 전체 이름", "short_name": "짧은이름",
     "start_url": "./", "scope": "./", "display": "standalone",
     "orientation": "portrait", "lang": "ko",
     "background_color": "#171311", "theme_color": "#171311",
     "icons": [
       {"src": "icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any"},
       {"src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any"},
       {"src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"}
     ]
   }
   ```
3. `sw.js` — 캐시 이름에 버전 번호(`<게임>-v1`)를 두고, 앱 파일·카드 이미지를 전부 목록에 넣기
4. `index.html` 맨 끝에서 `navigator.serviceWorker.register('sw.js')`
5. 홈에 **앱 설치 버튼**: 안드로이드는 설치 창(`beforeinstallprompt`), 아이폰은 "사파리 → 공유 → 홈 화면에 추가" 안내. 이미 설치해서 열었으면 숨김 (`ppeong/index.html` 맨 아래 스크립트 복사)

## 6. 수정할 때 꼭 지킬 것

- 파일을 고치면 **`sw.js`의 캐시 버전 숫자를 1 올리기** (안 올리면 설치한 사람 폰에 옛 버전이 남음)
- 새 파일(이미지 등)을 추가하면 `sw.js` 목록에도 추가
- 같은 주소에 다시 올리면 공유한 링크는 그대로 최신 버전

## 7. 디자인 규칙

- 휴대폰 세로 화면 기준, 한 화면 앱 (화면 전환 + 하단 탭바 고정)
- 글꼴: Noto Sans KR (Google Fonts)
- 폰트·외부 스크립트 외에는 모두 파일 안에 포함
- 용어 표기는 게임 고유 이름 그대로 (예: '뻥' — '뽕'·'나이롱뽕'으로 쓰지 않음)

## 8. 배포

1. 이 저장소에 `<새게임>/` 폴더 추가 → 커밋 → `main`에 푸시
2. 1~2분 뒤 `https://jhw7634.github.io/<새게임>/` 접속 확인
3. 휴대폰에서 열어 앱 설치 → 아이콘 실행·오프라인 동작 확인

## 9. Claude에게 줄 요청 예시

```
CARDGAME-APP-GUIDE.md 대로 '<게임이름>' 앱 만들어 줘.
- 폴더: /<게임폴더>/
- 인원: ○~○명, 카드: (화투 48장 / 트럼프 52장 …)
- 규칙: (간단히 적기)
- 점수: (낮은 사람이 이김 / 높은 사람이 이김, 특수 점수)
- 필요한 화면: 연습 게임, 점수판, 게임 방법 …
```
