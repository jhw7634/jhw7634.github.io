# 문제은행 검사: python3 check.py   (필요: pip install pandas scikit-learn tensorflow)
# 1) 형식 검사 (보기 4개, 정답 번호, 대제목, 함정, 보기별 풀이 why: 정답 칸만 비우고 보기 번호 대신 내용으로)
# 3) 파이썬 코드 요약(AICE_NOTES)의 코드를 순서대로 이어 붙여, 만든 예시 데이터(data.csv)로 처음부터 끝까지 실행
# 2) check가 달린 문제는 파이썬으로 실제 실행해서 출력이 정답 보기와 같고, 나머지 보기와는 달라야 함
#    (문제마다 새 프로세스에서 실행, pandas는 pd로 미리 불러 둠)
import collections, json, os, re, subprocess, sys

src = subprocess.run(["node", "-e", "global.window={};require('./questions.js');"
                      "console.log(JSON.stringify({u:window.AICE_UNITS,q:window.AICE_QUESTIONS,t:window.AICE_TRAPS||[],n:window.AICE_NOTES||[]}))"],
                     capture_output=True, text=True, check=True, cwd=sys.path[0]).stdout
data = json.loads(src)
units = {u["id"]: u for u in data["u"]}
qs = data["q"]
traps = {t["id"] for t in data["t"]}
errors = []

def run(code, cwd=None):
    p = subprocess.run([sys.executable, "-c", "import warnings; warnings.filterwarnings('ignore')\nimport pandas as pd\n" + code],
                       capture_output=True, text=True, timeout=300, cwd=cwd, env={**os.environ, "TF_CPP_MIN_LOG_LEVEL": "3", "MPLBACKEND": "Agg"})
    if p.returncode: raise RuntimeError(p.stderr.strip().splitlines()[-1])
    return p.stdout

norm = lambda t: re.sub(r"\s+", " ", str(t)).strip()
ids = collections.Counter(q["id"] for q in qs)
checked = 0
for q in qs:
    where = q.get("id", "?")
    need = ["id", "unit", "freq", "subject", "topic", "q", "options", "answer", "exp"]
    miss = [k for k in need if not q.get(k)]
    if miss: errors.append(f"{where}: 빠진 항목 {miss}"); continue
    if ids[q["id"]] > 1: errors.append(f"{where}: id 중복")
    if q["unit"] not in units: errors.append(f"{where}: 없는 대제목 {q['unit']}")
    elif units[q["unit"]]["subject"] != q["subject"]: errors.append(f"{where}: 과목과 대제목이 안 맞음")
    if q.get("trap") and q["trap"] not in traps: errors.append(f"{where}: 없는 함정 {q['trap']}")
    if q["freq"] not in ("high", "mid", "low"): errors.append(f"{where}: freq 값 오류")
    o = q["options"]
    if len(o) != 4 or len({norm(x) for x in o}) != 4: errors.append(f"{where}: 보기는 서로 다른 4개여야 함")
    if q["answer"] not in (1, 2, 3, 4): errors.append(f"{where}: 정답 번호 오류")
    w = q.get("why")
    if not (isinstance(w, list) and len(w) == 4 and all(isinstance(x, str) for x in w)):
        errors.append(f"{where}: why는 보기 4개에 맞춘 풀이 4칸이어야 함")
    elif [bool(x.strip()) for x in w] != [i + 1 != q["answer"] for i in range(4)]:
        errors.append(f"{where}: why는 정답 칸만 비우고 나머지 보기 풀이를 채워야 함")
    elif any(re.search(r"[①②③④]|[1-4]번 보기", x) for x in w):
        errors.append(f"{where}: why에는 보기 번호 대신 내용으로 적기")
    ck = q.get("check")
    if not ck: continue
    try:
        got = norm(run(ck["py"]))
        if got != norm(o[q["answer"] - 1]):
            errors.append(f"{where}: 실행 결과 [{got}] ≠ 정답 보기 [{o[q['answer'] - 1]}]")
        others = [i + 1 for i, x in enumerate(o) if i + 1 != q["answer"] and norm(x) == got]
        if others: errors.append(f"{where}: 다른 보기 {others}도 실행 결과와 같음")
        checked += 1
    except Exception as e:
        errors.append(f"{where}: 실행 오류 {e}")

# 문항 수와 정답 번호 분포
sets = collections.defaultdict(list)
for q in qs: sets[f"실전 {q['exam']}" if q.get("exam") else "함정" if q.get("trap") else "연습"].append(q)
for name, lst in sorted(sets.items()):
    by_subj = collections.Counter(q["subject"] for q in lst)
    ans = collections.Counter(q["answer"] for q in lst)
    print(f"{name}: {len(lst)}문항 (1과목 {by_subj[1]}, 2과목 {by_subj[2]}) · 정답 분포 {dict(sorted(ans.items()))}")
    if name.startswith("실전"):
        if len(lst) != 20: errors.append(f"{name}: 20문항이어야 함")
        run4 = "".join(str(q["answer"]) for q in lst)
        if re.search(r"(\d)\1\1\1", run4): errors.append(f"{name}: 같은 정답 번호 4연속")
# 코드 요약: 결측·공백·이상치·오타가 섞인 고객 이탈 예시 데이터로 전체 흐름 실행
DATA = """
import numpy as np
r = np.random.default_rng(0); n = 300
age = r.integers(18, 70, n).astype(float); age[:5] = np.nan
monthly = r.normal(60, 15, n).round(1); monthly[:3] = 500
total = (monthly * r.integers(1, 60, n)).round(1).astype(str); total[5:10] = ' '
gender = r.choice(['M', 'F'], n).astype(object); gender[10:14] = None
contract = r.choice(['월', '1년', '2년', '월간'], n)
churn = ((contract == '월') & (r.random(n) < 0.6) | (r.random(n) < 0.1)).astype(int)
pd.DataFrame({'customerID': [f'C{i:04d}' for i in range(n)], 'gender': gender, 'age': age, 'contract': contract,
              'monthly': monthly, 'total': total, 'churn': churn}).to_csv('data.csv', index=False)
"""
import tempfile
notes = "\n".join(x["code"] for x in data["n"])
tail = "\nassert list(codes) == [1, 0, 2]\nassert df.isnull().sum().sum() == 0\nassert set(pred_dl) <= {0, 1}\nprint('ok')"
with tempfile.TemporaryDirectory() as d:
    try:
        out = run(DATA + notes + tail, cwd=d).split()
        if out[-1:] != ["ok"]: errors.append(f"코드 요약: 끝까지 실행되지 않음 {out[-3:]}")
        else: print(f"코드 요약 {len(data['n'])}단계 실행 검증")
    except Exception as e:
        errors.append(f"코드 요약: 실행 오류 {e}")
for x in data["n"]:
    if x.get("unit") not in units: errors.append(f"{x['id']}: 없는 대제목 {x.get('unit')}")
for t in traps:
    if sum(q.get("trap") == t for q in qs) != 2: errors.append(f"함정 {t}: 문제가 2개여야 함")
print(f"파이썬 실행 검증 {checked}문항")
print("\n".join(errors) if errors else "문제 없음")
sys.exit(1 if errors else 0)
