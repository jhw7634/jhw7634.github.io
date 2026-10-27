// 문제은행 검사: node check.js   (DOM 예시 실행에 jsdom 필요: npm i jsdom)
// 1) 형식: 보기 4개, 정답 번호, 단원, 함정, 보기별 풀이 why (정답 칸만 비우고 번호 대신 내용으로)
// 2) check가 달린 문제는 코드를 실제로 실행해서 출력이 정답 보기와 같고 다른 보기와는 달라야 함 (오류 문제는 그 오류가 나야 함)
// 3) 이론 코드(parts.c)를 실행해서 출력이 적어 둔 실행 결과(o)와 같아야 함
// 4) 함정 요약의 '식 → 결과' 줄은 식을 계산해서 결과와 같아야 함
// 5) 모든 문제 주제(topic)가 같은 단원의 이론 설명(topics 정규식)으로 이어져야 함
// 실행은 매번 새 node 프로세스. console.log에는 문자열·숫자 같은 값만 넘겨야 함 (배열·객체는 브라우저와 node의 출력 모양이 달라서 막아 둠)
const { spawnSync } = require("child_process"), path = require("path");

// 코드 실행: html이 있으면 jsdom 문서 안에서, mock이 있으면 fetch를 그 데이터로 바꿔서
function run(code, { html, mock, with: before } = {}) {
  const guard = `{ const l = console.log; console.log = (...a) => { if (a.some(x => (x !== null && typeof x === "object") || typeof x === "function")) throw new Error("CHECK: console.log에 배열·객체를 넘김"); l(...a); }; }\n`;
  const fake = mock ? `fetch = async url => { const d = ${JSON.stringify(mock)}[url]; if (d === undefined) throw new TypeError("Failed to fetch"); return { ok: true, status: 200, json: async () => d }; };\n` : "";
  const body = (before ? before + '\nconsole.log("@@@");\n' : "") + code;
  const src = html
    ? `const { JSDOM, VirtualConsole } = require("jsdom"); const vc = new VirtualConsole();
       vc.on("log", (...a) => console.log(...a)); vc.on("jsdomError", e => { console.error(e.message); process.exitCode = 1; });
       const w = new JSDOM(${JSON.stringify(html)}, { runScripts: "outside-only", virtualConsole: vc }).window;
       w.eval(${JSON.stringify(guard.replace("const l = console.log", "const l = console.log.bind(console)") + fake + body)});`
    : guard + fake + body;
  const p = spawnSync(process.execPath, ["-e", src], { encoding: "utf8", timeout: 15000, cwd: __dirname });
  let out = p.stdout.replace(/\r/g, "");
  if (before) out = out.slice(out.lastIndexOf("@@@\n") + 4);
  return { out: out.replace(/\n$/, ""), err: p.stderr, ok: p.status === 0 };
}
// 결과 비교: 줄 끝 공백만 무시
const norm = t => String(t).split("\n").map(x => x.trimEnd()).join("\n").trim();
// 함정 표의 결과 모양: 문자열은 "따옴표", 배열은 [1, 2]
const show = v => typeof v === "string" ? JSON.stringify(v) : Array.isArray(v) ? `[${v.map(show).join(", ")}]` : Object.is(v, -0) ? "-0" : typeof v === "bigint" ? v + "n" : String(v);
module.exports = { run, norm, show };
if (require.main !== module) return;

global.window = {};
require("./questions.js");
const { JS_UNITS: U, JS_QUESTIONS: Q, JS_TRAPS: T, JS_STUDY: S } = window;
const errors = [], units = Object.fromEntries(U.map(u => [u.id, u])), traps = new Set(T.map(t => t.id));
let ran = 0;
const ids = {};
for (const q of Q) {
  const where = q.id;
  const miss = ["id", "unit", "freq", "subject", "topic", "q", "options", "answer", "exp"].filter(k => !q[k]);
  if (miss.length) { errors.push(`${where}: 빠진 항목 ${miss}`); continue; }
  if (ids[q.id]) errors.push(`${where}: id 중복`);
  ids[q.id] = 1;
  if (!units[q.unit]) errors.push(`${where}: 없는 단원 ${q.unit}`);
  else if (units[q.unit].subject !== q.subject) errors.push(`${where}: 과목과 단원이 안 맞음`);
  if (q.trap && !traps.has(q.trap)) errors.push(`${where}: 없는 함정 ${q.trap}`);
  if (!["high", "mid", "low"].includes(q.freq)) errors.push(`${where}: freq 값 오류`);
  const o = q.options;
  if (o.length !== 4 || new Set(o.map(norm)).size !== 4) errors.push(`${where}: 보기는 서로 다른 4개여야 함`);
  if (![1, 2, 3, 4].includes(q.answer)) errors.push(`${where}: 정답 번호 오류`);
  const w = q.why;
  if (!Array.isArray(w) || w.length !== 4 || w.some((x, i) => !x.trim() !== (i + 1 === q.answer))) errors.push(`${where}: why는 정답 칸만 비우고 나머지 보기 풀이를 채워야 함`);
  else if (w.some(x => /[①②③④]|[1-4]번 보기/.test(x))) errors.push(`${where}: why에는 보기 번호 대신 내용으로 적기`);
  for (const t of [q.q, q.exp, ...(w || [])]) if ((t.match(/`/g) || []).length % 2) errors.push(`${where}: 백틱 짝이 안 맞음`);
  const k = q.check;
  if (!k) continue;
  const r = run(k.js || q.code, { html: q.html, mock: k.mock });
  ran++;
  if (k.err) { if (r.ok || !r.err.includes(k.err + ":")) errors.push(`${where}: ${k.err} 오류가 나야 함 (${r.ok ? "오류 없음" : r.err.trim().split("\n").find(x => /Error/.test(x))})`); continue; }
  if (k.assert) { if (!r.ok) errors.push(`${where}: 확인 코드 실패 ${r.err.trim().split("\n").find(x => /Error/.test(x))}`); continue; }
  if (!r.ok) { errors.push(`${where}: 실행 오류 ${r.err.trim().split("\n").find(x => /Error/.test(x))}`); continue; }
  if (norm(r.out) !== norm(o[q.answer - 1])) errors.push(`${where}: 실행 결과 [${norm(r.out)}] ≠ 정답 보기 [${o[q.answer - 1]}]`);
  const same = o.map((x, i) => i + 1).filter(i => i !== q.answer && norm(o[i - 1]) === norm(r.out));
  if (same.length) errors.push(`${where}: 다른 보기 ${same}도 실행 결과와 같음`);
}
// 정답 번호 분포 (연습·함정 따로)
for (const [name, lst] of [["연습", Q.filter(q => !q.trap)], ["함정", Q.filter(q => q.trap)]]) {
  const cnt = [1, 2, 3, 4].map(n => lst.filter(q => q.answer === n).length);
  console.log(`${name}: ${lst.length}문항 · 정답 분포 ${cnt.join("/")}`);
  if (Math.max(...cnt) - Math.min(...cnt) > Math.ceil(lst.length * 0.06)) errors.push(`${name}: 정답 번호가 한쪽으로 몰림`);
}
for (const t of T) {
  if (Q.filter(q => q.trap === t.id).length !== 3) errors.push(`함정 ${t.id}: 문제가 3개여야 함`);
  if (!t.ex) continue;
  let ls = t.ex.split("\n");
  if (!ls[0].includes("→") && ls.length > 1 && ls.slice(1).every(x => x.includes("→"))) ls = ls.slice(1); // 첫 줄은 표 제목
  if (!ls.every(x => x.includes("→"))) { // 코드 예시: 실행한 출력이 '// ' 주석 줄들과 같아야 함
    const r = run(ls.filter(x => !x.startsWith("//")).join("\n")), want = ls.filter(x => x.startsWith("//")).map(x => x.slice(3)).join(" ");
    ran++;
    if (!r.ok || r.out.split("\n").join(" ") !== want) errors.push(`함정 ${t.id}: 예시 출력 [${r.out.split("\n").join(" ")}] ≠ 주석 [${want}]`);
    continue;
  }
  for (const x of ls) {
    const k = x.lastIndexOf("→"), r = run(`const show = ${show}; console.log(show(eval(${JSON.stringify(x.slice(0, k).trim())})));`);
    ran++;
    if (!r.ok || r.out !== x.slice(k + 1).trim()) errors.push(`함정 ${t.id}: [${x}] 실제 결과 ${r.ok ? r.out : "오류"}`);
  }
}
// 이론 코드 실행 (w: 앞 코드들을 먼저 실행하고 이어서)
let parts = 0;
for (const l of S) {
  if (!units[l.unit]) errors.push(`${l.id}: 없는 단원 ${l.unit}`);
  if (!l.parts?.length) errors.push(`${l.id}: 내용 없음`);
  const done = [];
  for (const [i, p] of (l.parts || []).entries()) {
    if (!p.c) continue;
    const r = run(p.c, { html: p.html, mock: p.mock, with: p.w ? done.join("\n") : "" });
    parts++;
    if (!r.ok) errors.push(`${l.id} ${i + 1}번째: 실행 오류 ${r.err.trim().split("\n").find(x => /Error/.test(x))}`);
    else if (norm(r.out) !== norm(p.o ?? "")) errors.push(`${l.id} ${i + 1}번째: 실행 결과 [${norm(r.out)}] ≠ 적어 둔 결과 [${norm(p.o ?? "")}]`);
    if (!p.html && !p.mock) done.push(p.c.replace(/console\.log\(/g, "(() => {})("));
  }
}
// 문제 주제 → 이론 설명
for (const q of Q) if (!S.some(l => l.unit === q.unit && l.topics && new RegExp(l.topics).test(q.topic))) errors.push(`${q.id}: 주제 '${q.topic}'에 맞는 이론 설명이 없음`);
console.log(`이론 ${S.length}개 · 코드 ${parts}개 실행 · 함정 ${T.length}개 · 실행 검증 ${ran}개`);
console.log(errors.length ? errors.join("\n") : "문제 없음");
process.exit(errors.length ? 1 : 0);
