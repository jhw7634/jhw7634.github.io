# AICE 오답킬러

AICE Associate 자격증 대비 파이썬 퀴즈 웹앱 (홈 화면에 설치 가능, 오프라인 지원). SQLD 오답킬러와 같은 구조입니다.

- `index.html` 앱, `lessons.js` 공부 탭 강의 26개(파이썬 기초부터 딥러닝까지), `questions.js` 문제은행 202문항(연습 122, 함정 20개 × 2, 실전 2회 × 20)과 파이썬 코드 요약 11단계, `manifest.webmanifest`·`sw.js`·`icon-*.png` 설치용
- `python3 check.py`: 문제 형식을 검사하고, 코드 결과를 묻는 문제, 코드 요약, 강의 코드를 실제 파이썬으로 실행해 정답을 검증 (`pip install pandas scikit-learn tensorflow seaborn matplotlib`)
- 모든 문제·보기·해설·아이콘은 새로 작성했습니다. 기출·교재·공식 샘플 문장을 옮겨 오지 않습니다.
- 본 앱은 AICE 시험을 주관하는 KT·한국경제신문과 관련 없는 개인 학습용 앱입니다.
