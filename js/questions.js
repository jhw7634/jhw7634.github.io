// JS 오답킬러 데이터: 과목(JS_SUBJECTS), 단원(JS_UNITS), 이론(JS_STUDY), 함정 요약(JS_TRAPS), 문제(JS_QUESTIONS: 연습 + 함정 trap)
// 문제 필드: id, unit, freq(중요도 high/mid/low), subject, trap?, topic, q, html?(문제에 보여 줄 HTML), code?, options(4), answer(1~4), exp, why(보기별 풀이, 정답 칸은 ""),
//   check?(검증용, 앱은 안 씀: {}이면 code를 실행한 출력이 정답 보기와 같아야 함, {err}는 그 오류, {assert}는 확인 코드, {js}는 따로 실행할 코드)
// 이론 필드: id, unit, part("과목 · 묶음"), title, sum, topics(이 설명으로 이어질 문제 주제 정규식), parts[{t 설명, html?, c 코드, o 실행 결과}], figs?, tip
// node check.js가 모든 코드를 실제로 실행해 확인합니다. 저작권: 모든 설명·문제·보기·해설·그림은 새로 작성했습니다.
window.JS_SUBJECTS = {
 "1": "기초 문법",
 "2": "활용"
};

window.JS_UNITS = [
 {
  "id": "var",
  "subject": 1,
  "title": "변수와 출력",
  "desc": "console.log, let·const·var, 이름 규칙, 다시 넣기, 주석"
 },
 {
  "id": "type",
  "subject": 1,
  "title": "자료형과 형 변환",
  "desc": "숫자·문자열·불리언·null·undefined, typeof, Number()·String(), NaN, 참 같은 값·거짓 같은 값"
 },
 {
  "id": "op",
  "subject": 1,
  "title": "연산자",
  "desc": "산술·나머지·거듭제곱, ++, 복합 대입, ===와 ==, &&·||·!, ??, 삼항 연산자"
 },
 {
  "id": "if",
  "subject": 1,
  "title": "조건문",
  "desc": "if·else if·else, 조건 겹침 순서, switch와 break, 조건에 쓰는 값"
 },
 {
  "id": "loop",
  "subject": 1,
  "title": "반복문",
  "desc": "for, while, do...while, break·continue, for...of와 for...in, 중첩 반복"
 },
 {
  "id": "fn",
  "subject": 1,
  "title": "함수",
  "desc": "함수 선언·표현식·화살표 함수, 매개변수·기본값·return, 콜백, 스코프, 클로저, 호이스팅"
 },
 {
  "id": "str",
  "subject": 2,
  "title": "문자열",
  "desc": "템플릿 리터럴, length와 인덱스, slice·indexOf·includes·split·replace·trim·padStart"
 },
 {
  "id": "arr",
  "subject": 2,
  "title": "배열",
  "desc": "push·pop·shift·unshift, slice·splice, map·filter·reduce·find·some·every, sort, 펼치기"
 },
 {
  "id": "obj",
  "subject": 2,
  "title": "객체와 JSON",
  "desc": "속성 읽기·쓰기, 메서드와 this, Object.keys, 구조 분해, 참조와 복사, JSON, ?."
 },
 {
  "id": "class",
  "subject": 2,
  "title": "클래스",
  "desc": "class·constructor·메서드, new, extends·super, static, get, instanceof"
 },
 {
  "id": "dom",
  "subject": 2,
  "title": "웹 페이지 다루기 (DOM)",
  "desc": "querySelector, textContent·innerHTML, classList, 요소 만들기, 이벤트, dataset, value"
 },
 {
  "id": "async",
  "subject": 2,
  "title": "비동기와 오류 처리",
  "desc": "try·catch·finally·throw, setTimeout과 실행 순서, Promise, async·await, fetch"
 }
];

window.JS_STUDY = [
 {
  "id": "g01",
  "unit": "var",
  "part": "처음 시작",
  "title": "자바스크립트가 뭐예요?",
  "sum": "웹 페이지를 움직이게 하는 언어, console.log로 결과 보기",
  "topics": "자바스크립트|console|주석|세미콜론|실행 순서",
  "parts": [
   {
    "t": "웹 페이지는 세 가지로 만들어져요.\nHTML : 내용과 뼈대 (제목, 글, 버튼)\nCSS : 꾸미기 (색, 크기, 위치)\n자바스크립트 : 움직임 (버튼을 누르면 무언가 일어나게)"
   },
   {
    "t": "자바스크립트는 컴퓨터에게 일을 시키는 글이에요. 위에서 아래로 한 줄씩 차례대로 실행돼요. 브라우저(크롬, 사파리) 안에서도 돌아가고, Node.js라는 프로그램으로 컴퓨터에서 바로 돌릴 수도 있어요."
   },
   {
    "t": "`console.log()`는 괄호 안의 값을 콘솔(결과 창)에 보여 줘요. 글자는 따옴표로 감싸고, 숫자는 그대로 써요. 쉼표로 여러 개를 주면 한 칸씩 띄어서 보여 줘요.",
    "c": "console.log(\"안녕하세요\");\nconsole.log(3 + 4);\nconsole.log(\"합계\", 10);",
    "o": "안녕하세요\n7\n합계 10"
   },
   {
    "t": "`//` 뒤의 글은 주석이라 실행되지 않아요. 코드에 메모를 남길 때 써요. 여러 줄 주석은 `/*`와 `*/` 사이에 써요. 줄 끝의 세미콜론(;)은 '한 문장 끝'이라는 표시예요.",
    "c": "// 이 줄은 실행되지 않아요\nconsole.log(\"보여요\"); // 여기서부터 주석\n/* 여러 줄\n   주석 */",
    "o": "보여요"
   }
  ],
  "tip": "코드는 위에서 아래로 한 줄씩 실행돼요. 결과를 보고 싶으면 `console.log()`를 써요."
 },
 {
  "id": "g02",
  "unit": "var",
  "part": "처음 시작",
  "title": "용어 정리",
  "sum": "앞으로 계속 나오는 말들을 미리 한 번에",
  "parts": [
   {
    "t": "값과 이름에 관한 말\n값 : 숫자 7, 글자 \"사과\"처럼 코드가 다루는 것 하나하나\n변수 : 값에 붙이는 이름표 (let, const)\n자료형 : 값의 종류 (숫자, 문자열, 불리언 등)\n문자열 : 따옴표로 감싼 글자 (string)\n불리언 : 참(true)과 거짓(false) 두 가지 값\n연산자 : + - === 처럼 값으로 계산하거나 비교하는 기호"
   },
   {
    "t": "묶음에 관한 말\n배열 : 값 여러 개를 순서대로 담은 목록 [1, 2, 3]\n인덱스 : 배열·문자열에서 몇 번째인지 나타내는 번호, 0부터 시작\n객체 : 이름(키)과 값을 짝지어 담은 상자 { name: \"민지\" }\n속성 : 객체 안의 키와 값 한 쌍\n메서드 : 객체에 들어 있는 함수 (\"abc\".toUpperCase())"
   },
   {
    "t": "함수와 웹에 관한 말\n함수 : 할 일을 묶어 이름 붙인 것, 불러서 쓰는 기계\n매개변수 : 함수를 만들 때 받는 값의 이름\n인수 : 함수를 부를 때 실제로 넣는 값\n반환 : 함수가 일을 마치고 돌려주는 값 (return)\nDOM : 웹 페이지를 자바스크립트로 다룰 수 있게 만든 나무 모양 구조\n이벤트 : 클릭, 입력처럼 페이지에서 일어나는 일\n비동기 : 오래 걸리는 일을 기다리지 않고 다음 일을 먼저 하는 방식"
   }
  ]
 },
 {
  "id": "v01",
  "unit": "var",
  "part": "기초 문법 · 값과 변수",
  "title": "변수: 값에 붙이는 이름표",
  "sum": "let과 const로 변수 만들기, 다시 넣기",
  "topics": "^let|^const|^변수|재할당|^대입|초기화|여러 변수|값 바꾸기|값 복사",
  "figs": [
   {
    "pic": "<svg viewBox=\"0 0 320 150\"><rect class=\"h\" x=\"20\" y=\"40\" width=\"110\" height=\"70\" rx=\"10\"/><text class=\"k\" x=\"75\" y=\"30\">score</text><text class=\"k\" x=\"75\" y=\"82\" data-o=\"0\">10</text><text class=\"k\" x=\"75\" y=\"82\" data-o=\"1 2\">20</text>\n<rect class=\"b\" x=\"190\" y=\"40\" width=\"110\" height=\"70\" rx=\"10\" data-s=\"2\"/><text class=\"k\" x=\"245\" y=\"30\" data-s=\"2\">PI</text><text class=\"k\" x=\"245\" y=\"82\" data-s=\"2\">3.14</text><path class=\"x\" d=\"M180 120 l130 -90\" data-s=\"3\"/><text class=\"m\" x=\"245\" y=\"135\" data-s=\"3\">const는 다시 못 넣어요</text></svg>",
    "steps": [
     "let score = 10 → score 상자에 10이 들어가요",
     "score = 20 → 같은 상자에 20을 다시 넣어요 (10은 사라져요)",
     "const PI = 3.14 → 처음 넣은 값을 바꿀 수 없는 상자",
     "PI = 3 처럼 다시 넣으려 하면 TypeError 오류"
    ]
   },
   {
    "table": {
     "cap": "let과 const",
     "cols": [
      "",
      "let",
      "const"
     ],
     "rows": [
      [
       "다시 넣기",
       "돼요",
       "안 돼요 (TypeError)"
      ],
      [
       "만들 때 값",
       "없어도 돼요 (undefined)",
       "꼭 넣어야 해요"
      ],
      [
       "언제 쓰나",
       "값이 바뀔 때 (점수, 횟수)",
       "안 바뀔 때 (기본으로 이걸 써요)"
      ]
     ]
    },
    "memo": "const = constant(상수, 변하지 않는 수). 기본은 const, 바뀌어야 하면 let."
   }
  ],
  "parts": [
   {
    "t": "변수는 값에 붙이는 이름표예요. `let 이름 = 값;`으로 만들어요. 여기서 = 는 '같다'가 아니라 '오른쪽 값을 왼쪽 이름에 넣어라'라는 뜻이에요.",
    "c": "let score = 10;\nconsole.log(score);\nscore = 20; // 다시 넣기 (let은 앞에 안 붙여요)\nconsole.log(score);",
    "o": "10\n20"
   },
   {
    "t": "변수를 만들 때 값을 안 넣으면 '아직 값이 없음'이라는 뜻의 `undefined`가 들어 있어요.",
    "c": "let box;\nconsole.log(box);\nbox = \"사과\";\nconsole.log(box);",
    "o": "undefined\n사과"
   },
   {
    "t": "`const`로 만든 변수에는 다시 넣을 수 없어요. 넣으려 하면 TypeError 오류가 나요. 그래서 바뀌지 않는 값에 써요.",
    "c": "const PI = 3.14;\ntry {\n  PI = 3;\n} catch (e) {\n  console.log(e.name); // 오류 이름\n}\nconsole.log(PI);",
    "o": "TypeError\n3.14"
   },
   {
    "t": "변수끼리 계산하거나, 자기 자신을 이용해 새 값을 넣을 수 있어요.",
    "c": "let a = 3;\nlet b = 4;\nlet sum = a + b;\nsum = sum + 1;\nconsole.log(sum);",
    "o": "8"
   }
  ],
  "tip": "`let`은 다시 넣을 수 있고 `const`는 못 넣어요. 값 없이 만든 `let` 변수는 `undefined`예요."
 },
 {
  "id": "v02",
  "unit": "var",
  "part": "기초 문법 · 값과 변수",
  "title": "var와 이름 짓는 규칙",
  "sum": "옛날 방식 var, 이름에 쓸 수 있는 글자, 대소문자 구분",
  "topics": "^var|이름 규칙|대소문자|카멜|예약어|다시 선언|이름",
  "parts": [
   {
    "t": "`var`는 옛날부터 쓰던 변수 만드는 방법이에요. 같은 이름으로 또 만들어도 오류가 안 나서 실수하기 쉬워요. 요즘은 `let`과 `const`를 써요.",
    "c": "var name = \"민지\";\nvar name = \"준호\"; // 또 만들어도 오류 없음\nconsole.log(name);",
    "o": "준호"
   },
   {
    "t": "`let`과 `const`는 같은 범위 안에서 같은 이름으로 두 번 만들 수 없어요. 이건 SyntaxError(문법 오류)라서 코드가 아예 실행되지 않아요."
   },
   {
    "t": "변수 이름 규칙\n쓸 수 있는 글자 : 영어, 숫자, _, $ (한글도 되지만 잘 안 써요)\n첫 글자 : 숫자로 시작하면 안 돼요 (1st는 안 됨, first1은 됨)\n대소문자 : 구분해요. age와 Age는 다른 변수\n예약어 : if, for, class, return처럼 자바스크립트가 쓰는 단어는 이름으로 못 써요\n띄어쓰기 : 안 돼요. 두 단어는 userName처럼 붙이고 뒤 단어 첫 글자를 대문자로 (카멜 표기법)"
   },
   {
    "t": "대소문자가 다르면 완전히 다른 이름이에요.",
    "c": "let age = 10;\nlet Age = 20;\nconsole.log(age, Age);",
    "o": "10 20"
   }
  ],
  "tip": "`var`는 같은 이름으로 또 만들어도 오류가 없어요. 이름은 숫자로 시작할 수 없고 대소문자를 구분해요."
 },
 {
  "id": "t01",
  "unit": "type",
  "part": "기초 문법 · 값과 변수",
  "title": "자료형: 값의 종류",
  "sum": "숫자, 문자열, 불리언, undefined, null과 typeof",
  "topics": "자료형|typeof|불리언|^null|undefined|소수|정수|Infinity",
  "figs": [
   {
    "table": {
     "cap": "자주 쓰는 자료형",
     "cols": [
      "자료형",
      "예",
      "typeof 결과"
     ],
     "rows": [
      [
       "숫자",
       "7, 3.5, -2",
       "\"number\""
      ],
      [
       "문자열",
       "\"안녕\", '사과'",
       "\"string\""
      ],
      [
       "불리언",
       "true, false",
       "\"boolean\""
      ],
      [
       "값 없음(아직)",
       "undefined",
       "\"undefined\""
      ],
      [
       "값 없음(일부러)",
       "null",
       "\"object\" (옛날 실수)"
      ],
      [
       "배열·객체",
       "[1, 2], { a: 1 }",
       "\"object\""
      ],
      [
       "함수",
       "function () {}",
       "\"function\""
      ]
     ]
    },
    "memo": "typeof null만 \"object\"인 건 처음 만들 때 생긴 실수가 그대로 남은 거예요. 시험·면접 단골!"
   }
  ],
  "parts": [
   {
    "t": "값에는 종류(자료형)가 있어요. 자바스크립트는 숫자에 정수와 소수를 따로 나누지 않고 모두 number예요."
   },
   {
    "t": "`typeof 값`은 그 값의 종류를 글자로 알려 줘요.",
    "c": "console.log(typeof 7);\nconsole.log(typeof 3.5);\nconsole.log(typeof \"7\");\nconsole.log(typeof true);\nconsole.log(typeof undefined);",
    "o": "number\nnumber\nstring\nboolean\nundefined"
   },
   {
    "t": "`undefined`는 '아직 값을 안 넣었음', `null`은 '일부러 비워 둠'이에요. 그런데 `typeof null`은 \"object\"가 나와요. 처음 만들 때의 실수가 고쳐지지 않고 남은 거예요.",
    "c": "let empty = null;\nconsole.log(empty);\nconsole.log(typeof null);\nconsole.log(typeof [1, 2]);",
    "o": "null\nobject\nobject"
   },
   {
    "t": "양수를 0으로 나누면 오류 대신 Infinity(무한대)가 나와요 (음수는 -Infinity, 0 / 0은 NaN).",
    "c": "console.log(10 / 0);\nconsole.log(typeof Infinity);",
    "o": "Infinity\nnumber"
   }
  ],
  "tip": "`typeof null`은 \"object\", 배열도 \"object\", 함수는 \"function\"이에요."
 },
 {
  "id": "t02",
  "unit": "type",
  "part": "기초 문법 · 값과 변수",
  "title": "형 변환: 종류 바꾸기",
  "sum": "Number(), String(), parseInt, NaN, + 연결",
  "topics": "형 변환|Number\\(|String\\(|parseInt|parseFloat|NaN|문자열 연결|toString|isNaN|자동 변환|숫자 변환|\\+ 연산",
  "figs": [
   {
    "table": {
     "cap": "숫자로 바꾸기",
     "cols": [
      "식",
      "결과"
     ],
     "rows": [
      [
       "Number(\"42\")",
       "42"
      ],
      [
       "Number(\"42px\")",
       "NaN"
      ],
      [
       "parseInt(\"42px\")",
       "42 (앞의 숫자만)"
      ],
      [
       "Number(\"\")",
       "0"
      ],
      [
       "Number(true)",
       "1"
      ],
      [
       "Number(null)",
       "0"
      ],
      [
       "Number(undefined)",
       "NaN"
      ]
     ]
    },
    "memo": "+는 한쪽만 문자열이어도 '붙이기'. -, *, /는 무조건 '숫자 계산'."
   }
  ],
  "parts": [
   {
    "t": "`Number()`는 숫자로, `String()`은 문자열로 바꿔 줘요. 숫자로 바꿀 수 없으면 NaN(Not a Number, 숫자가 아님)이 나와요.",
    "c": "console.log(Number(\"42\") + 1);\nconsole.log(String(42) + 1);\nconsole.log(Number(\"사과\"));",
    "o": "43\n421\nNaN"
   },
   {
    "t": "`parseInt()`는 앞에서부터 숫자인 데까지만 읽어서 정수로 바꿔요. `parseFloat()`는 소수점도 읽어요.",
    "c": "console.log(parseInt(\"42px\"));\nconsole.log(parseInt(\"3.9\"));\nconsole.log(parseFloat(\"3.9kg\"));\nconsole.log(parseInt(\"px42\"));",
    "o": "42\n3\n3.9\nNaN"
   },
   {
    "t": "`+`는 한쪽이라도 문자열이면 숫자 계산이 아니라 글자 붙이기를 해요. 그런데 `-`, `*`, `/`는 문자열을 숫자로 바꿔서 계산해요.",
    "c": "console.log(\"5\" + 3);\nconsole.log(\"5\" - 3);\nconsole.log(\"5\" * \"2\");\nconsole.log(1 + 2 + \"3\");\nconsole.log(\"1\" + 2 + 3);",
    "o": "53\n2\n10\n33\n123"
   },
   {
    "t": "NaN은 어떤 값과도 같지 않아요. 자기 자신과도요! 그래서 NaN인지 확인할 때는 `Number.isNaN()`을 써요.",
    "c": "const x = Number(\"abc\");\nconsole.log(x === NaN);\nconsole.log(Number.isNaN(x));\nconsole.log(typeof NaN);",
    "o": "false\ntrue\nnumber"
   }
  ],
  "tip": "`\"5\" + 3`은 \"53\", `\"5\" - 3`은 2. 계산은 왼쪽부터라 `1 + 2 + \"3\"`은 \"33\"이에요. `NaN === NaN`은 false예요."
 },
 {
  "id": "t03",
  "unit": "type",
  "part": "기초 문법 · 값과 변수",
  "title": "참 같은 값, 거짓 같은 값",
  "sum": "조건에서 false로 치는 값 6개 외우기",
  "topics": "falsy|truthy|거짓 같은|참 같은|Boolean|!!|빈 배열|빈 문자열",
  "figs": [
   {
    "table": {
     "cap": "조건에서 거짓으로 치는 값 (이 6개를 외우면 돼요)",
     "cols": [
      "값",
      "뜻"
     ],
     "rows": [
      [
       "false",
       "거짓"
      ],
      [
       "0",
       "숫자 0 (-0도)"
      ],
      [
       "\"\"",
       "빈 문자열"
      ],
      [
       "null",
       "일부러 비움"
      ],
      [
       "undefined",
       "아직 값 없음"
      ],
      [
       "NaN",
       "숫자가 아님"
      ]
     ]
    },
    "memo": "이 6개(그리고 0n 같은 드문 값) 말고는 전부 참이에요. \"0\", \"false\", 빈 배열 [], 빈 객체 {}도 참!"
   }
  ],
  "parts": [
   {
    "t": "if 같은 조건 자리에 true/false가 아닌 값을 넣으면, 자바스크립트가 참이나 거짓으로 바꿔서 생각해요. `Boolean(값)`으로 어떻게 바뀌는지 볼 수 있어요.",
    "c": "console.log(Boolean(0));\nconsole.log(Boolean(\"\"));\nconsole.log(Boolean(\"0\"));\nconsole.log(Boolean([]));\nconsole.log(Boolean(null));",
    "o": "false\nfalse\ntrue\ntrue\nfalse"
   },
   {
    "t": "느낌표 두 개 `!!`도 같은 일을 해요. `!`는 참·거짓을 뒤집고, 한 번 더 뒤집으면 원래 참·거짓이 나와요.",
    "c": "console.log(!!\"hello\");\nconsole.log(!!undefined);\nconsole.log(!0);",
    "o": "true\nfalse\ntrue"
   },
   {
    "t": "그래서 빈 값인지 확인할 때 조건에 그냥 변수를 넣는 경우가 많아요.",
    "c": "const name = \"\";\nif (name) {\n  console.log(\"이름: \" + name);\n} else {\n  console.log(\"이름을 입력하세요\");\n}",
    "o": "이름을 입력하세요"
   }
  ],
  "tip": "외울 거짓 같은 값은 false, 0, \"\", null, undefined, NaN 여섯 개예요. \"0\"과 []는 참이에요."
 },
 {
  "id": "o01",
  "unit": "op",
  "part": "기초 문법 · 연산자와 조건문",
  "title": "계산하는 연산자",
  "sum": "+ - * / % **, ++와 --, += 같은 줄임 표현",
  "topics": "산술|나머지|%|거듭제곱|\\*\\*|증가|감소|\\+\\+|--|복합 대입|\\+=|우선순위|소수 계산|짝수",
  "parts": [
   {
    "t": "사칙연산은 + - * / 이고, `%`는 나눈 나머지, `**`는 거듭제곱이에요. 나머지는 짝수·홀수를 가를 때 많이 써요 (2로 나눈 나머지가 0이면 짝수).",
    "c": "console.log(7 / 2);\nconsole.log(7 % 2);\nconsole.log(2 ** 3);\nconsole.log(10 % 5 === 0);",
    "o": "3.5\n1\n8\ntrue"
   },
   {
    "t": "곱하기·나누기가 더하기·빼기보다 먼저예요. 먼저 하고 싶은 건 괄호로 묶어요.",
    "c": "console.log(2 + 3 * 4);\nconsole.log((2 + 3) * 4);",
    "o": "14\n20"
   },
   {
    "t": "`x += 3`은 `x = x + 3`을 줄인 거예요. `-=`, `*=`, `/=`도 있어요. `x++`은 1 더하기, `x--`는 1 빼기예요.",
    "c": "let x = 10;\nx += 3;\nx *= 2;\nx--;\nconsole.log(x);",
    "o": "25"
   },
   {
    "t": "`++`를 뒤에 쓰면(x++) 지금 값을 먼저 쓰고 나중에 1을 더해요. 앞에 쓰면(++x) 먼저 더하고 그 값을 써요.",
    "c": "let a = 5;\nconsole.log(a++);\nconsole.log(a);\nlet b = 5;\nconsole.log(++b);",
    "o": "5\n6\n6"
   },
   {
    "t": "컴퓨터는 소수를 2진수로 저장해서 아주 작은 오차가 생길 수 있어요.",
    "c": "console.log(0.1 + 0.2);\nconsole.log(0.1 + 0.2 === 0.3);",
    "o": "0.30000000000000004\nfalse"
   }
  ],
  "tip": "`%`는 나머지, `**`는 거듭제곱. `a++`는 쓰고 나서 더하고, `++a`는 더하고 나서 써요."
 },
 {
  "id": "o02",
  "unit": "op",
  "part": "기초 문법 · 연산자와 조건문",
  "title": "비교 연산자: ===와 ==",
  "sum": "같은지 다른지, 크고 작은지 비교하기",
  "topics": "비교|===|==|!==|!=|일치|동등|크기 비교|문자열 비교",
  "figs": [
   {
    "table": {
     "cap": "===(엄격)와 ==(느슨)",
     "cols": [
      "식",
      "===",
      "=="
     ],
     "rows": [
      [
       "5 와 \"5\"",
       "false",
       "true"
      ],
      [
       "0 과 false",
       "false",
       "true"
      ],
      [
       "\"\" 와 0",
       "false",
       "true"
      ],
      [
       "null 과 undefined",
       "false",
       "true"
      ],
      [
       "null 과 0",
       "false",
       "false"
      ],
      [
       "NaN 과 NaN",
       "false",
       "false"
      ]
     ]
    },
    "memo": "== 는 종류를 바꿔서 비교해서 헷갈려요. 항상 === 와 !== 를 쓰기!"
   }
  ],
  "parts": [
   {
    "t": "`===`는 값과 종류가 모두 같아야 true예요. `==`는 종류가 다르면 같은 종류로 바꾼 뒤 비교해서 뜻밖의 결과가 나와요.",
    "c": "console.log(5 === \"5\");\nconsole.log(5 == \"5\");\nconsole.log(0 == false);\nconsole.log(null == undefined);",
    "o": "false\ntrue\ntrue\ntrue"
   },
   {
    "t": "다르다는 `!==`(엄격)과 `!=`(느슨)이에요. 크기는 > < >= <= 로 비교해요.",
    "c": "console.log(3 !== \"3\");\nconsole.log(3 != \"3\");\nconsole.log(5 >= 5);",
    "o": "true\nfalse\ntrue"
   },
   {
    "t": "문자열끼리 크기를 비교하면 숫자 크기가 아니라 사전 순서(한 글자씩)로 비교해요. 그래서 \"10\"이 \"9\"보다 작아요. 한쪽이 숫자면 숫자로 바꿔서 비교해요.",
    "c": "console.log(\"10\" < \"9\");\nconsole.log(10 < 9);\nconsole.log(\"10\" < 9);\nconsole.log(\"apple\" < \"banana\");",
    "o": "true\nfalse\nfalse\ntrue"
   }
  ],
  "tip": "비교는 항상 `===`. 문자열끼리 비교는 사전 순서라 `\"10\" < \"9\"`가 true예요."
 },
 {
  "id": "o03",
  "unit": "op",
  "part": "기초 문법 · 연산자와 조건문",
  "title": "논리 연산자: &&, ||, !, ??",
  "sum": "그리고·또는·아니다, 기본값 넣기",
  "topics": "논리|&&|\\|\\||^!|\\?\\?|단락|기본값|널 병합|논리 대입",
  "figs": [
   {
    "table": {
     "cap": "||와 ??의 차이",
     "cols": [
      "식",
      "결과",
      "이유"
     ],
     "rows": [
      [
       "0 || 10",
       "10",
       "0은 거짓 같은 값"
      ],
      [
       "0 ?? 10",
       "0",
       "0은 null·undefined가 아님"
      ],
      [
       "\"\" || \"이름 없음\"",
       "\"이름 없음\"",
       "빈 문자열은 거짓 같은 값"
      ],
      [
       "null ?? \"없음\"",
       "\"없음\"",
       "null이라 오른쪽"
      ]
     ]
    },
    "memo": "|| 는 '거짓 같으면' 오른쪽, ?? 는 'null·undefined일 때만' 오른쪽."
   }
  ],
  "parts": [
   {
    "t": "`&&`(그리고)는 둘 다 참일 때만 참, `||`(또는)는 하나라도 참이면 참, `!`(아니다)는 참·거짓을 뒤집어요.",
    "c": "const age = 15;\nconsole.log(age > 10 && age < 20);\nconsole.log(age < 10 || age > 20);\nconsole.log(!(age > 10));",
    "o": "true\nfalse\nfalse"
   },
   {
    "t": "사실 `&&`와 `||`는 true/false가 아니라 둘 중 한 값을 그대로 돌려줘요. `||`는 왼쪽이 참 같으면 왼쪽, 아니면 오른쪽. `&&`는 왼쪽이 거짓 같으면 왼쪽, 아니면 오른쪽이에요.",
    "c": "console.log(\"사과\" || \"배\");\nconsole.log(\"\" || \"배\");\nconsole.log(\"사과\" && \"배\");\nconsole.log(0 && \"배\");",
    "o": "사과\n배\n배\n0"
   },
   {
    "t": "답이 이미 정해지면 오른쪽은 아예 실행하지 않아요 (단락 평가). `false && 무엇`은 무조건 false라서 오른쪽을 안 봐요.",
    "c": "let count = 0;\nfalse && count++;\ntrue || count++;\nconsole.log(count);",
    "o": "0"
   },
   {
    "t": "`??`는 왼쪽이 null이나 undefined일 때만 오른쪽을 써요. 0이나 빈 문자열을 그대로 살리고 싶을 때 `||` 대신 써요.",
    "c": "const saved = 0;\nconsole.log(saved || 100);\nconsole.log(saved ?? 100);\nconsole.log(undefined ?? 100);",
    "o": "100\n0\n100"
   }
  ],
  "tip": "`||`는 거짓 같은 값이면 오른쪽, `??`는 null·undefined일 때만 오른쪽. `0 || 10`은 10, `0 ?? 10`은 0이에요."
 },
 {
  "id": "i01",
  "unit": "if",
  "part": "기초 문법 · 연산자와 조건문",
  "title": "if, else if, else",
  "sum": "조건에 따라 다른 일 하기, 삼항 연산자",
  "topics": "^if|else|조건 순서|삼항|중첩|블록|조건문|범위 조건|조건에 쓰는|중괄호 없는|대입 실수",
  "figs": [
   {
    "pic": "<svg viewBox=\"0 0 320 170\"><rect class=\"b\" x=\"110\" y=\"8\" width=\"100\" height=\"30\" rx=\"8\"/><text x=\"160\" y=\"28\">score = 85</text><path class=\"ar\" d=\"M160 38v14\"/>\n<path class=\"h\" d=\"M160 52l60 22-60 22-60-22z\" data-s=\"0\"/><text x=\"160\" y=\"78\">≥ 90 ?</text><text class=\"m\" x=\"235\" y=\"70\" data-s=\"1\">아니요</text><path class=\"ar\" d=\"M220 74h20v30\" data-s=\"1\"/>\n<path class=\"h\" d=\"M240 104l60 22-60 22-60-22z\" data-s=\"1\"/><text x=\"240\" y=\"130\">≥ 80 ?</text><text class=\"m\" x=\"158\" y=\"118\" data-s=\"2\">예</text>\n<rect class=\"gs\" x=\"40\" y=\"114\" width=\"90\" height=\"28\" rx=\"8\" data-s=\"2\"/><text x=\"85\" y=\"133\" data-s=\"2\">\"B\" 출력</text><path class=\"ar\" d=\"M180 126h-50\" data-s=\"2\"/><text class=\"m\" x=\"160\" y=\"162\" data-s=\"3\">아래 else if·else는 건너뛰어요</text></svg>",
    "steps": [
     "위에서부터 조건을 하나씩 봐요: 85 ≥ 90? 아니요",
     "다음 조건 else if: 85 ≥ 80?",
     "예! 이 칸만 실행하고",
     "맞는 칸을 하나 실행하면 나머지는 건너뛰어요"
    ]
   }
  ],
  "parts": [
   {
    "t": "`if (조건) { ... }`은 조건이 참일 때만 중괄호 안을 실행해요. 아니면 `else` 쪽을 실행해요.",
    "c": "const temp = 30;\nif (temp >= 28) {\n  console.log(\"에어컨 켜기\");\n} else {\n  console.log(\"그냥 두기\");\n}",
    "o": "에어컨 켜기"
   },
   {
    "t": "여러 갈래는 `else if`로 이어요. 위에서부터 보고 처음 맞는 칸 하나만 실행해요. 그래서 넓은 조건을 위에 두면 그 안에 포함되는 아래 조건은 실행될 기회가 없어요.",
    "c": "const score = 85;\nif (score >= 90) {\n  console.log(\"A\");\n} else if (score >= 80) {\n  console.log(\"B\");\n} else if (score >= 70) {\n  console.log(\"C\");\n} else {\n  console.log(\"D\");\n}",
    "o": "B"
   },
   {
    "t": "`조건 ? 참일 때 값 : 거짓일 때 값`은 짧은 if예요 (삼항 연산자). 값을 하나 고를 때 써요.",
    "c": "const age = 20;\nconst label = age >= 19 ? \"성인\" : \"청소년\";\nconsole.log(label);",
    "o": "성인"
   },
   {
    "t": "`10 < x < 20`처럼 이어 쓰면 안 돼요. 왼쪽부터 `10 < x`가 true/false가 되고, 그걸 20과 비교하거든요. `x > 10 && x < 20`으로 써요.",
    "c": "const x = 50;\nconsole.log(10 < x < 20);\nconsole.log(x > 10 && x < 20);",
    "o": "true\nfalse"
   }
  ],
  "tip": "else if는 위에서부터 처음 맞는 하나만 실행해요. 범위는 `x > 10 && x < 20`처럼 &&로 이어요."
 },
 {
  "id": "i02",
  "unit": "if",
  "part": "기초 문법 · 연산자와 조건문",
  "title": "switch: 값마다 갈래 나누기",
  "sum": "case, break, default",
  "topics": "switch|case|break 없|default|fall",
  "parts": [
   {
    "t": "`switch (값)`은 값이 `case`와 같은(===) 곳으로 가서 실행해요. 맞는 case가 없으면 `default`로 가요. 각 case 끝에는 `break`로 멈춰요.",
    "c": "const day = \"토\";\nswitch (day) {\n  case \"토\":\n  case \"일\":\n    console.log(\"주말\");\n    break;\n  default:\n    console.log(\"평일\");\n}",
    "o": "주말"
   },
   {
    "t": "`break`를 빼먹으면 멈추지 않고 아래 case들을 계속 실행해요. 위 예처럼 일부러 여러 case를 묶을 때만 break를 빼요.",
    "c": "const n = 1;\nswitch (n) {\n  case 1:\n    console.log(\"하나\");\n  case 2:\n    console.log(\"둘\");\n    break;\n  case 3:\n    console.log(\"셋\");\n}",
    "o": "하나\n둘"
   },
   {
    "t": "switch는 ===로 비교해서 숫자 1과 문자열 \"1\"은 다른 case예요.",
    "c": "const v = \"1\";\nswitch (v) {\n  case 1:\n    console.log(\"숫자 1\");\n    break;\n  default:\n    console.log(\"못 찾음\");\n}",
    "o": "못 찾음"
   }
  ],
  "tip": "switch는 ===로 비교하고, break가 없으면 아래 case로 계속 내려가요."
 },
 {
  "id": "r01",
  "unit": "loop",
  "part": "기초 문법 · 반복문",
  "title": "for와 while",
  "sum": "같은 일을 여러 번, 몇 번 도는지 세기",
  "topics": "^for$|for 문|while|do|반복 횟수|합계|누적|무한|중첩|구구단|카운트",
  "figs": [
   {
    "pic": "<svg viewBox=\"0 0 320 150\"><text class=\"k\" x=\"160\" y=\"20\">for (let i = 0; i &lt; 3; i++)</text>\n<rect class=\"h\" x=\"10\" y=\"50\" width=\"70\" height=\"40\" rx=\"8\"/><text x=\"45\" y=\"75\">i = 0</text><text class=\"m\" x=\"45\" y=\"105\">① 시작</text>\n<rect class=\"h\" x=\"95\" y=\"50\" width=\"70\" height=\"40\" rx=\"8\" data-s=\"1\"/><text x=\"130\" y=\"75\" data-s=\"1\">i &lt; 3 ?</text><text class=\"m\" x=\"130\" y=\"105\" data-s=\"1\">② 조건</text>\n<rect class=\"gs\" x=\"180\" y=\"50\" width=\"60\" height=\"40\" rx=\"8\" data-s=\"2\"/><text x=\"210\" y=\"75\" data-s=\"2\">본문</text><text class=\"m\" x=\"210\" y=\"105\" data-s=\"2\">③ 실행</text>\n<rect class=\"h\" x=\"255\" y=\"50\" width=\"55\" height=\"40\" rx=\"8\" data-s=\"3\"/><text x=\"282\" y=\"75\" data-s=\"3\">i++</text><text class=\"m\" x=\"282\" y=\"105\" data-s=\"3\">④ 증가</text>\n<path class=\"ln\" d=\"M282 92v35H130V92\" data-s=\"3\"/><text class=\"m\" x=\"205\" y=\"142\" data-s=\"4\">②로 돌아가 거짓이 될 때까지 반복</text></svg>",
    "steps": [
     "① 처음 한 번만: i = 0",
     "② 조건이 참인지 봐요 (거짓이면 끝)",
     "③ 참이면 중괄호 안을 실행",
     "④ i를 1 늘리고",
     "다시 ②로: i가 3이 되면 조건이 거짓이라 끝나요"
    ]
   }
  ],
  "parts": [
   {
    "t": "`for (시작; 조건; 증가) { 본문 }`은 조건이 참인 동안 본문을 되풀이해요. i가 0, 1, 2일 때 실행되고 3이 되면 멈춰요. 그래서 3번이에요.",
    "c": "for (let i = 0; i < 3; i++) {\n  console.log(\"i는\", i);\n}",
    "o": "i는 0\ni는 1\ni는 2"
   },
   {
    "t": "반복하면서 값을 모을 때는 반복문 바깥에 변수를 만들어 두고 더해 가요.",
    "c": "let sum = 0;\nfor (let i = 1; i <= 5; i++) {\n  sum += i;\n}\nconsole.log(sum);",
    "o": "15"
   },
   {
    "t": "`while (조건)`은 조건이 참인 동안 계속 돌아요. 횟수가 정해지지 않았을 때 써요. 조건이 언젠가 거짓이 되게 만들지 않으면 영원히 돌아요 (무한 반복).",
    "c": "let n = 1;\nwhile (n < 100) {\n  n *= 2;\n}\nconsole.log(n);",
    "o": "128"
   },
   {
    "t": "`do { } while (조건)`은 조건을 나중에 봐서, 조건이 처음부터 거짓이어도 한 번은 실행해요.",
    "c": "let k = 10;\ndo {\n  console.log(\"한 번은 실행\", k);\n} while (k < 5);",
    "o": "한 번은 실행 10"
   },
   {
    "t": "반복문 안에 반복문을 넣을 수 있어요. 바깥이 한 번 돌 때 안쪽은 끝까지 다 돌아요.",
    "c": "for (let a = 1; a <= 2; a++) {\n  for (let b = 1; b <= 3; b++) {\n    console.log(a + \"x\" + b + \"=\" + a * b);\n  }\n}",
    "o": "1x1=1\n1x2=2\n1x3=3\n2x1=2\n2x2=4\n2x3=6"
   }
  ],
  "tip": "`i < 3`이면 0, 1, 2로 3번. `do...while`은 조건이 거짓이어도 한 번은 실행해요."
 },
 {
  "id": "r02",
  "unit": "loop",
  "part": "기초 문법 · 반복문",
  "title": "break와 continue",
  "sum": "반복을 멈추거나 이번 차례만 건너뛰기",
  "topics": "break|continue|건너뛰|멈추",
  "parts": [
   {
    "t": "`break`는 반복을 바로 끝내요. `continue`는 이번 차례의 나머지만 건너뛰고 다음 차례로 가요.",
    "c": "for (let i = 1; i <= 5; i++) {\n  if (i === 2) continue; // 2는 건너뛰기\n  if (i === 4) break; // 4에서 끝\n  console.log(i);\n}",
    "o": "1\n3"
   },
   {
    "t": "찾던 것을 발견하면 break로 더 볼 필요 없이 멈춰요.",
    "c": "const nums = [3, 8, 12, 5];\nlet found = -1;\nfor (let i = 0; i < nums.length; i++) {\n  if (nums[i] > 10) {\n    found = nums[i];\n    break;\n  }\n}\nconsole.log(found);",
    "o": "12"
   },
   {
    "t": "반복문이 겹쳐 있을 때 break는 자기가 들어 있는 가장 안쪽 반복만 끝내요.",
    "c": "for (let a = 1; a <= 2; a++) {\n  for (let b = 1; b <= 3; b++) {\n    if (b === 2) break;\n    console.log(a, b);\n  }\n}",
    "o": "1 1\n2 1"
   }
  ],
  "tip": "break는 반복 끝, continue는 이번 차례만 건너뛰기. 겹친 반복에서 break는 안쪽 하나만 끝내요."
 },
 {
  "id": "r03",
  "unit": "loop",
  "part": "기초 문법 · 반복문",
  "title": "for...of와 for...in",
  "sum": "배열의 값 하나씩, 객체의 키 하나씩",
  "topics": "for\\.\\.\\.of|for\\.\\.\\.in|of와 in|순회",
  "figs": [
   {
    "table": {
     "cap": "of와 in",
     "cols": [
      "",
      "for...of",
      "for...in"
     ],
     "rows": [
      [
       "꺼내 주는 것",
       "값",
       "키(이름)"
      ],
      [
       "배열에 쓰면",
       "\"사과\", \"배\"",
       "\"0\", \"1\" (글자로 된 번호)"
      ],
      [
       "주로 쓰는 곳",
       "배열, 문자열",
       "객체"
      ]
     ]
    },
    "memo": "of = 값을 꺼내요, in = 안에 있는 이름(키)을 꺼내요."
   }
  ],
  "parts": [
   {
    "t": "`for (const 값 of 배열)`은 배열의 값을 앞에서부터 하나씩 꺼내 줘요. 번호(i)를 따로 관리하지 않아도 돼요. 문자열에 쓰면 글자를 하나씩 꺼내요.",
    "c": "const fruits = [\"사과\", \"배\", \"귤\"];\nfor (const f of fruits) {\n  console.log(f);\n}\nfor (const ch of \"가나\") {\n  console.log(ch);\n}",
    "o": "사과\n배\n귤\n가\n나"
   },
   {
    "t": "`for (const 키 in 객체)`는 객체의 키(이름)를 하나씩 꺼내 줘요. 값은 `객체[키]`로 읽어요.",
    "c": "const score = { 국어: 90, 수학: 80 };\nfor (const k in score) {\n  console.log(k, score[k]);\n}",
    "o": "국어 90\n수학 80"
   },
   {
    "t": "배열에 for...in을 쓰면 값이 아니라 번호가 나오고, 그 번호는 숫자가 아니라 문자열이에요. 배열에는 for...of를 써요.",
    "c": "const arr = [\"a\", \"b\"];\nfor (const i in arr) {\n  console.log(i, typeof i);\n}",
    "o": "0 string\n1 string"
   }
  ],
  "tip": "배열 값은 for...of, 객체 키는 for...in. 배열에 for...in을 쓰면 \"0\", \"1\" 같은 문자열 번호가 나와요."
 },
 {
  "id": "f01",
  "unit": "fn",
  "part": "기초 문법 · 함수",
  "title": "함수 만들고 부르기",
  "sum": "function, 매개변수와 인수, return",
  "topics": "함수 선언|^함수$|^return|undefined 반환|^매개변수|^인수|호출|재귀",
  "figs": [
   {
    "pic": "<svg viewBox=\"0 0 320 120\"><rect class=\"b\" x=\"10\" y=\"45\" width=\"60\" height=\"34\" rx=\"8\"/><text x=\"40\" y=\"67\">3, 4</text><text class=\"m\" x=\"40\" y=\"96\">인수 (넣는 값)</text>\n<path class=\"ar\" d=\"M72 62h30\" data-s=\"1\"/><rect class=\"h\" x=\"105\" y=\"30\" width=\"110\" height=\"64\" rx=\"12\" data-s=\"1\"/><text class=\"k\" x=\"160\" y=\"58\" data-s=\"1\">add(a, b)</text><text class=\"m\" x=\"160\" y=\"78\" data-s=\"1\">return a + b</text>\n<path class=\"ar\" d=\"M217 62h30\" data-s=\"2\"/><rect class=\"gs\" x=\"250\" y=\"45\" width=\"60\" height=\"34\" rx=\"8\" data-s=\"2\"/><text class=\"k\" x=\"280\" y=\"67\" data-s=\"2\">7</text><text class=\"m\" x=\"280\" y=\"96\" data-s=\"2\">반환값</text></svg>",
    "steps": [
     "함수를 부를 때 값(인수)을 넣어요: add(3, 4)",
     "함수 안에서 a = 3, b = 4가 되어 계산해요",
     "return으로 결과 7을 돌려줘요"
    ]
   }
  ],
  "parts": [
   {
    "t": "함수는 할 일을 묶어 이름을 붙인 기계예요. `function 이름(매개변수) { ... }`로 만들고, `이름(인수)`로 불러서 써요. 한 번 만들면 몇 번이든 다시 쓸 수 있어요.",
    "c": "function hello(name) {\n  console.log(\"안녕, \" + name);\n}\nhello(\"민지\");\nhello(\"준호\");",
    "o": "안녕, 민지\n안녕, 준호"
   },
   {
    "t": "`return`은 결과를 돌려주고 함수를 바로 끝내요. 돌려받은 값은 변수에 넣거나 계산에 쓸 수 있어요.",
    "c": "function add(a, b) {\n  return a + b;\n}\nconst r = add(3, 4);\nconsole.log(r, add(1, 1) * 10);",
    "o": "7 20"
   },
   {
    "t": "return 아래 줄은 실행되지 않아요. 그리고 return이 없는 함수는 `undefined`를 돌려줘요.",
    "c": "function f() {\n  return 1;\n  console.log(\"안 보여요\");\n}\nfunction g() {\n  const x = 5;\n}\nconsole.log(f(), g());",
    "o": "1 undefined"
   },
   {
    "t": "인수를 덜 넣으면 빈 매개변수는 undefined가 되고, 더 넣으면 남는 건 그냥 무시돼요. 오류는 나지 않아요.",
    "c": "function two(a, b) {\n  return a + \" \" + b;\n}\nconsole.log(two(1));\nconsole.log(two(1, 2, 3));",
    "o": "1 undefined\n1 2"
   },
   {
    "t": "함수 안에서 자기 자신을 다시 부를 수도 있어요 (재귀). 언젠가 멈추는 조건(여기서는 n이 0일 때)이 꼭 있어야 해요.",
    "c": "function countdown(n) {\n  if (n === 0) return \"발사\";\n  return n + \" \" + countdown(n - 1);\n}\nconsole.log(countdown(3));",
    "o": "3 2 1 발사"
   }
  ],
  "tip": "return은 값을 돌려주고 함수를 끝내요. return이 없으면 undefined, 안 넣은 매개변수도 undefined예요."
 },
 {
  "id": "f02",
  "unit": "fn",
  "part": "기초 문법 · 함수",
  "title": "기본값과 나머지 매개변수",
  "sum": "인수를 안 넣었을 때의 값, 개수가 정해지지 않은 인수",
  "topics": "기본값|나머지 매개변수|\\.\\.\\.rest|arguments|가변",
  "parts": [
   {
    "t": "매개변수에 `= 값`을 붙이면 인수를 안 넣었을 때(undefined일 때) 그 값을 써요. null을 넣으면 기본값이 쓰이지 않아요.",
    "c": "function greet(name = \"손님\") {\n  return name + \"님\";\n}\nconsole.log(greet(\"민지\"));\nconsole.log(greet());\nconsole.log(greet(undefined));\nconsole.log(greet(null));",
    "o": "민지님\n손님님\n손님님\nnull님"
   },
   {
    "t": "`...이름`은 남는 인수를 모두 배열로 받아요 (나머지 매개변수). 항상 맨 마지막 매개변수여야 해요.",
    "c": "function sum(first, ...rest) {\n  console.log(first, rest.length);\n  let t = first;\n  for (const n of rest) t += n;\n  return t;\n}\nconsole.log(sum(1, 2, 3, 4));",
    "o": "1 3\n10"
   }
  ],
  "tip": "기본값은 undefined일 때만 쓰여요 (null이면 안 쓰임). `...rest`는 맨 끝에, 배열로 받아요."
 },
 {
  "id": "f03",
  "unit": "fn",
  "part": "기초 문법 · 함수",
  "title": "함수 표현식과 화살표 함수",
  "sum": "함수를 변수에 넣기, => 로 짧게 쓰기",
  "topics": "화살표|=>|함수 표현식|익명|즉시 실행|중괄호|객체 반환",
  "figs": [
   {
    "table": {
     "cap": "같은 함수, 세 가지 모양",
     "cols": [
      "모양",
      "코드"
     ],
     "rows": [
      [
       "함수 선언",
       "function double(x) { return x * 2; }"
      ],
      [
       "함수 표현식",
       "const double = function (x) { return x * 2; };"
      ],
      [
       "화살표 함수",
       "const double = x => x * 2;"
      ]
     ]
    },
    "memo": "화살표 함수에 중괄호 { }를 쓰면 return을 꼭 적어야 해요. 없으면 undefined!"
   }
  ],
  "parts": [
   {
    "t": "함수도 값이라서 변수에 넣을 수 있어요 (함수 표현식). 화살표 함수는 `function`을 빼고 `=>`로 더 짧게 쓴 거예요.",
    "c": "const square = function (x) {\n  return x * x;\n};\nconst cube = (x) => {\n  return x * x * x;\n};\nconsole.log(square(3), cube(2));",
    "o": "9 8"
   },
   {
    "t": "본문이 한 줄 식이면 중괄호와 return을 빼고 쓸 수 있어요. 그 식의 값을 바로 돌려줘요. 매개변수가 하나면 괄호도 뺄 수 있어요.",
    "c": "const double = x => x * 2;\nconst add = (a, b) => a + b;\nconst hi = () => \"안녕\";\nconsole.log(double(5), add(2, 3), hi());",
    "o": "10 5 안녕"
   },
   {
    "t": "중괄호를 쓰면 그건 '본문'이라서 return을 안 쓰면 undefined가 나와요. 객체를 바로 돌려주고 싶으면 소괄호로 감싸요: `() => ({ ... })`.",
    "c": "const a = x => { x * 2; };\nconst b = x => ({ value: x });\nconsole.log(a(5));\nconsole.log(b(5).value);",
    "o": "undefined\n5"
   },
   {
    "t": "함수를 만들자마자 바로 부를 수도 있어요. 함수를 소괄호로 감싸고 끝에 ()를 붙여요 (즉시 실행 함수). 한 번만 쓸 계산을 감싸서 바깥 변수와 섞이지 않게 할 때 써요.",
    "c": "const total = (() => {\n  const price = 1200;\n  const count = 3;\n  return price * count;\n})();\nconsole.log(total);",
    "o": "3600"
   }
  ],
  "tip": "`x => x * 2`는 바로 돌려주지만, `x => { x * 2; }`는 return이 없어서 undefined예요."
 },
 {
  "id": "f04",
  "unit": "fn",
  "part": "기초 문법 · 함수",
  "title": "콜백: 함수를 넘겨주기",
  "sum": "함수를 다른 함수의 인수로 넣어서 나중에 부르게 하기",
  "topics": "콜백|고차|함수를 인수|함수를 반환|함수 값",
  "parts": [
   {
    "t": "함수를 다른 함수에 인수로 넘길 수 있어요. 넘겨준 함수를 콜백(callback, 나중에 불러 줘)이라고 해요. 넘길 때는 괄호 없이 이름만 써요. 괄호를 쓰면 그 자리에서 실행된 결과가 넘어가요.",
    "c": "function twice(action) {\n  action();\n  action();\n}\nfunction clap() {\n  console.log(\"짝\");\n}\ntwice(clap);",
    "o": "짝\n짝"
   },
   {
    "t": "콜백에 값을 넘겨줄 수도 있어요. 배열의 forEach, map 같은 메서드도 이렇게 콜백을 받아요.",
    "c": "function each(list, fn) {\n  for (const x of list) fn(x);\n}\neach([1, 2, 3], n => console.log(n * 10));",
    "o": "10\n20\n30"
   },
   {
    "t": "함수가 함수를 돌려줄 수도 있어요. 돌려받은 함수를 다시 불러서 써요.",
    "c": "function makeAdder(n) {\n  return x => x + n;\n}\nconst add5 = makeAdder(5);\nconsole.log(add5(10));\nconsole.log(makeAdder(1)(1));",
    "o": "15\n2"
   }
  ],
  "tip": "콜백으로 넘길 땐 `clap`(괄호 없음). `clap()`이라 쓰면 실행 결과가 넘어가요."
 },
 {
  "id": "f05",
  "unit": "fn",
  "part": "기초 문법 · 함수",
  "title": "스코프: 변수가 보이는 범위",
  "sum": "블록 { } 안의 let·const, 함수 안의 변수, 바깥 변수",
  "topics": "스코프|블록|전역|지역|가려|var와 블록|ReferenceError|섀도",
  "figs": [
   {
    "pic": "<svg viewBox=\"0 0 320 160\"><rect class=\"b\" x=\"10\" y=\"10\" width=\"300\" height=\"140\" rx=\"12\"/><text class=\"l m\" x=\"22\" y=\"30\">전역: let a = 1</text>\n<rect class=\"h\" x=\"30\" y=\"40\" width=\"260\" height=\"100\" rx=\"10\" data-s=\"1\"/><text class=\"l m\" x=\"42\" y=\"60\" data-s=\"1\">함수 안: let b = 2</text>\n<rect class=\"gs\" x=\"50\" y=\"70\" width=\"220\" height=\"60\" rx=\"8\" data-s=\"2\"/><text class=\"l m\" x=\"62\" y=\"90\" data-s=\"2\">블록 { }: let c = 3</text><text class=\"l\" x=\"62\" y=\"115\" data-s=\"3\">a, b, c 모두 보여요 (안 → 밖)</text></svg>",
    "steps": [
     "가장 바깥(전역)에 만든 a는 어디서나 보여요",
     "함수 안에서 만든 b는 그 함수 안에서만",
     "{ } 블록 안에서 let으로 만든 c는 그 블록 안에서만",
     "안쪽에서는 바깥 변수가 보이지만, 바깥에서는 안쪽 변수가 안 보여요"
    ]
   }
  ],
  "parts": [
   {
    "t": "변수는 만든 곳의 중괄호 { } 안에서만 쓸 수 있어요. 이 범위를 스코프라고 해요. 바깥에서 안쪽 변수를 쓰면 ReferenceError(없는 이름) 오류가 나요.",
    "c": "if (true) {\n  let inside = \"안\";\n  console.log(inside);\n}\ntry {\n  console.log(inside);\n} catch (e) {\n  console.log(e.name);\n}",
    "o": "안\nReferenceError"
   },
   {
    "t": "안쪽에서는 바깥 변수를 읽고 바꿀 수 있어요. 안쪽에서 같은 이름을 새로 만들면 안쪽 것이 바깥 것을 가려요 (바깥 것은 그대로).",
    "c": "let x = \"바깥\";\nfunction f() {\n  let x = \"안\";\n  console.log(x);\n}\nf();\nconsole.log(x);",
    "o": "안\n바깥"
   },
   {
    "t": "`var`는 블록 { }을 무시하고 함수 단위로만 범위가 정해져요. 그래서 if나 for 안에서 만든 var가 밖에서도 보여요.",
    "c": "if (true) {\n  var v = \"var는 새어 나와요\";\n}\nconsole.log(v);\nfor (var i = 0; i < 3; i++) {}\nconsole.log(i);",
    "o": "var는 새어 나와요\n3"
   }
  ],
  "tip": "let·const는 블록 { } 안에서만, var는 함수 안에서만 살아요. 안에서는 밖이 보이지만 밖에서는 안이 안 보여요."
 },
 {
  "id": "f06",
  "unit": "fn",
  "part": "기초 문법 · 함수",
  "title": "클로저: 기억하는 함수",
  "sum": "함수가 만들어질 때의 바깥 변수를 계속 기억함",
  "topics": "클로저|카운터|기억|비공개",
  "parts": [
   {
    "t": "함수 안에서 만든 함수는 바깥 함수가 끝난 뒤에도 바깥 변수를 기억하고 계속 쓸 수 있어요. 이걸 클로저라고 해요.",
    "c": "function makeCounter() {\n  let count = 0;\n  return () => {\n    count++;\n    return count;\n  };\n}\nconst next = makeCounter();\nconsole.log(next());\nconsole.log(next());\nconsole.log(next());",
    "o": "1\n2\n3"
   },
   {
    "t": "makeCounter를 다시 부르면 새 count가 생겨요. 두 카운터는 서로 다른 count를 기억해요.",
    "c": "function makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst a = makeCounter();\nconst b = makeCounter();\na();\na();\nconsole.log(a(), b());",
    "o": "3 1"
   },
   {
    "t": "count는 바깥에서 직접 바꿀 수 없고 돌려받은 함수로만 바꿀 수 있어요. 그래서 값을 숨겨 지킬 때 써요."
   }
  ],
  "tip": "클로저 = 만들어질 때의 바깥 변수를 기억하는 함수. 부를 때마다 새로 만들면 따로따로 기억해요."
 },
 {
  "id": "f07",
  "unit": "fn",
  "part": "기초 문법 · 함수",
  "title": "호이스팅: 끌어올리기",
  "sum": "선언보다 먼저 쓰면 어떻게 되나 (var, let, function)",
  "topics": "호이스팅|TDZ|선언 전|끌어올",
  "figs": [
   {
    "table": {
     "cap": "선언하기 전에 쓰면",
     "cols": [
      "",
      "결과"
     ],
     "rows": [
      [
       "function 선언",
       "잘 불려요"
      ],
      [
       "var 변수",
       "undefined"
      ],
      [
       "let·const 변수",
       "ReferenceError"
      ],
      [
       "const로 만든 화살표 함수",
       "ReferenceError"
      ]
     ]
    },
    "memo": "function 선언만 통째로 위로 올라가요. var는 이름만 올라가서 undefined."
   }
  ],
  "parts": [
   {
    "t": "자바스크립트는 실행 전에 선언을 먼저 훑어봐요. `function`으로 선언한 함수는 통째로 맨 위로 올린 것처럼 동작해서, 선언보다 위에서 불러도 돼요.",
    "c": "console.log(hi());\nfunction hi() {\n  return \"안녕\";\n}",
    "o": "안녕"
   },
   {
    "t": "`var` 변수는 이름만 위로 올라가고 값은 안 올라가서, 선언 전에 읽으면 undefined예요.",
    "c": "console.log(v);\nvar v = 5;\nconsole.log(v);",
    "o": "undefined\n5"
   },
   {
    "t": "`let`과 `const`는 선언 줄에 닿기 전까지 쓸 수 없어요 (이 구간을 TDZ, 일시적 사각지대라고 해요). 읽으면 ReferenceError가 나요.",
    "c": "try {\n  console.log(n);\n} catch (e) {\n  console.log(e.name);\n}\nlet n = 1;",
    "o": "ReferenceError"
   }
  ],
  "tip": "function 선언은 먼저 불러도 OK, var는 undefined, let·const는 ReferenceError."
 },
 {
  "id": "s01",
  "unit": "str",
  "part": "활용 · 문자열",
  "title": "문자열과 템플릿 리터럴",
  "sum": "따옴표 세 가지, ${ }로 값 끼워 넣기, length와 인덱스",
  "topics": "템플릿|백틱|따옴표|length|인덱스|글자 하나|불변|이스케이프|줄바꿈|at\\(|charAt|문자열 \\+",
  "parts": [
   {
    "t": "문자열은 작은따옴표 ' ', 큰따옴표 \" \", 백틱(키보드 숫자 1 왼쪽 기호)으로 만들어요. 백틱으로 만든 문자열을 템플릿 리터럴이라고 하는데, 그 안에 달러와 중괄호로 변수나 식을 바로 끼워 넣을 수 있고 엔터로 줄을 바꿀 수도 있어요.",
    "c": "const name = \"민지\";\nconst age = 12;\nconsole.log(`${name}는 ${age}살, 내년엔 ${age + 1}살`);\nconsole.log(\"이름: \" + name);",
    "o": "민지는 12살, 내년엔 13살\n이름: 민지"
   },
   {
    "t": "`length`는 글자 수, `[번호]`는 그 자리 글자예요. 번호는 0부터 시작해서 마지막 글자 번호는 length - 1이에요. `at(-1)`은 뒤에서 첫 번째 글자예요.",
    "c": "const word = \"hello\";\nconsole.log(word.length);\nconsole.log(word[0], word[4]);\nconsole.log(word[10]);\nconsole.log(word.at(-1));",
    "o": "5\nh o\nundefined\no"
   },
   {
    "t": "문자열은 한 번 만들면 그 안의 글자를 바꿀 수 없어요 (불변). 바꾸려면 새 문자열을 만들어야 해요.",
    "c": "let s = \"cat\";\ns[0] = \"b\"; // 아무 일도 안 일어나요\nconsole.log(s);\ns = \"b\" + s.slice(1);\nconsole.log(s);",
    "o": "cat\nbat"
   },
   {
    "t": "따옴표 안에서 \\n은 줄바꿈, \\\"는 따옴표 글자 자체예요. 이런 걸 이스케이프 문자라고 해요.",
    "c": "console.log(\"첫 줄\\n둘째 줄\");\nconsole.log(\"그가 \\\"안녕\\\"이라고 했다\");",
    "o": "첫 줄\n둘째 줄\n그가 \"안녕\"이라고 했다"
   }
  ],
  "tip": "번호는 0부터, 마지막은 length - 1. 없는 번호는 undefined. 문자열 글자는 직접 바꿀 수 없어요."
 },
 {
  "id": "s02",
  "unit": "str",
  "part": "활용 · 문자열",
  "title": "문자열 메서드",
  "sum": "자르기, 찾기, 바꾸기, 나누기, 다듬기",
  "topics": "slice|substring|indexOf|includes|startsWith|endsWith|toUpperCase|toLowerCase|trim|split|replace|repeat|padStart|padEnd|메서드|대소문자 변환|문자열 뒤집기|join",
  "figs": [
   {
    "table": {
     "cap": "자주 쓰는 문자열 메서드 (s = \"Hello\")",
     "cols": [
      "메서드",
      "결과",
      "뜻"
     ],
     "rows": [
      [
       "s.slice(1, 3)",
       "\"el\"",
       "1번부터 3번 앞까지"
      ],
      [
       "s.indexOf(\"l\")",
       "2",
       "처음 나오는 번호 (없으면 -1)"
      ],
      [
       "s.includes(\"ell\")",
       "true",
       "들어 있나"
      ],
      [
       "s.toUpperCase()",
       "\"HELLO\"",
       "대문자로"
      ],
      [
       "s.split(\"\")",
       "[\"H\",\"e\",\"l\",\"l\",\"o\"]",
       "나눠서 배열로"
      ],
      [
       "s.replace(\"l\", \"L\")",
       "\"HeLlo\"",
       "처음 하나만 바꾸기"
      ],
      [
       "s.padStart(7, \"*\")",
       "\"**Hello\"",
       "앞을 채워 길이 맞추기"
      ]
     ]
    },
    "memo": "slice(시작, 끝)의 끝 번호 글자는 안 들어가요. replace는 처음 하나만, 전부는 replaceAll."
   }
  ],
  "parts": [
   {
    "t": "`slice(시작, 끝)`은 시작 번호부터 끝 번호 바로 앞까지 잘라요. 끝을 안 쓰면 끝까지, 음수는 뒤에서부터 세요.",
    "c": "const s = \"JavaScript\";\nconsole.log(s.slice(0, 4));\nconsole.log(s.slice(4));\nconsole.log(s.slice(-6));",
    "o": "Java\nScript\nScript"
   },
   {
    "t": "`indexOf`는 처음 나오는 번호(없으면 -1), `includes`는 들어 있는지 true/false, `startsWith`·`endsWith`는 그걸로 시작·끝나는지 알려 줘요. 대소문자를 구분해요.",
    "c": "const mail = \"mia@test.com\";\nconsole.log(mail.indexOf(\"@\"));\nconsole.log(mail.indexOf(\"#\"));\nconsole.log(mail.includes(\"test\"));\nconsole.log(mail.endsWith(\".com\"));\nconsole.log(mail.includes(\"TEST\"));",
    "o": "3\n-1\ntrue\ntrue\nfalse"
   },
   {
    "t": "`toUpperCase`·`toLowerCase`는 대·소문자로, `trim`은 앞뒤 빈칸을 지워요. 원래 문자열은 그대로이고 새 문자열을 돌려줘요.",
    "c": "const raw = \"  Hi There  \";\nconsole.log(\"[\" + raw.trim() + \"]\");\nconsole.log(raw.trim().toUpperCase());\nconsole.log(\"[\" + raw + \"]\");",
    "o": "[Hi There]\nHI THERE\n[  Hi There  ]"
   },
   {
    "t": "`split(기준)`은 기준 글자로 나눠 배열을 만들고, 배열의 `join(기준)`은 다시 붙여요. 둘을 이어 쓰면 글자를 바꾸거나 뒤집을 수 있어요.",
    "c": "const csv = \"사과,배,귤\";\nconst parts = csv.split(\",\");\nconsole.log(parts.length, parts[1]);\nconsole.log(parts.join(\" / \"));\nconsole.log(\"abc\".split(\"\").reverse().join(\"\"));",
    "o": "3 배\n사과 / 배 / 귤\ncba"
   },
   {
    "t": "`replace(찾을 것, 바꿀 것)`은 처음 하나만 바꾸고, `replaceAll`은 전부 바꿔요. `repeat(n)`은 n번 반복, `padStart(길이, 채울 글자)`는 앞을 채워 길이를 맞춰요.",
    "c": "const t = \"a-b-c\";\nconsole.log(t.replace(\"-\", \"+\"));\nconsole.log(t.replaceAll(\"-\", \"+\"));\nconsole.log(\"ha\".repeat(3));\nconsole.log(\"7\".padStart(3, \"0\"));",
    "o": "a+b-c\na+b+c\nhahaha\n007"
   }
  ],
  "tip": "문자열 메서드는 원본을 안 바꾸고 새 값을 돌려줘요. slice의 끝 번호는 빠지고, replace는 처음 하나만 바꿔요."
 },
 {
  "id": "a01",
  "unit": "arr",
  "part": "활용 · 배열",
  "title": "배열: 순서 있는 목록",
  "sum": "만들기, 번호로 읽기, push·pop·shift·unshift",
  "topics": "배열 만들기|^배열$|length|push|pop|shift|unshift|배열 인덱스|Array\\.isArray|배열 바꾸기|const 배열|빈 칸|2차원|중첩 배열",
  "figs": [
   {
    "pic": "<svg viewBox=\"0 0 320 120\"><text class=\"m\" x=\"20\" y=\"30\">0</text><text class=\"m\" x=\"70\" y=\"30\">1</text><text class=\"m\" x=\"120\" y=\"30\">2</text><text class=\"m\" x=\"170\" y=\"30\" data-s=\"1\">3</text>\n<rect class=\"no\" x=\"0\" y=\"40\" width=\"40\" height=\"40\" rx=\"6\" data-o=\"3\"/><rect class=\"h\" x=\"0\" y=\"40\" width=\"40\" height=\"40\" rx=\"6\" data-o=\"0 1 2\"/><rect class=\"h\" x=\"50\" y=\"40\" width=\"40\" height=\"40\" rx=\"6\"/><rect class=\"h\" x=\"100\" y=\"40\" width=\"40\" height=\"40\" rx=\"6\"/><rect class=\"gs\" x=\"150\" y=\"40\" width=\"40\" height=\"40\" rx=\"6\" data-o=\"1\"/><rect class=\"no\" x=\"150\" y=\"40\" width=\"40\" height=\"40\" rx=\"6\" data-o=\"2\"/>\n<text x=\"20\" y=\"66\" data-o=\"0 1 2\">\"a\"</text><text x=\"70\" y=\"66\">\"b\"</text><text x=\"120\" y=\"66\">\"c\"</text><text x=\"170\" y=\"66\" data-o=\"1 2\">\"d\"</text>\n<text class=\"l m\" x=\"210\" y=\"58\" data-o=\"0\">arr = [\"a\", \"b\", \"c\"]</text><text class=\"l m\" x=\"210\" y=\"58\" data-o=\"1\">push(\"d\") 끝에 넣기</text><text class=\"l m\" x=\"210\" y=\"58\" data-o=\"2\">pop() 끝에서 빼기</text><text class=\"l m\" x=\"210\" y=\"58\" data-o=\"3\">shift() 앞에서 빼기</text>\n<text class=\"m\" x=\"160\" y=\"108\">번호(인덱스)는 0부터</text></svg>",
    "steps": [
     "배열은 번호 붙은 칸이 줄지어 있는 상자예요. 번호는 0부터",
     "push(\"d\") → 맨 끝에 넣어요",
     "pop() → 맨 끝 것을 빼서 돌려줘요",
     "shift() → 맨 앞 것을 빼요 (나머지가 앞으로 당겨져요)"
    ]
   },
   {
    "table": {
     "cap": "넣고 빼기",
     "cols": [
      "",
      "끝",
      "앞"
     ],
     "rows": [
      [
       "넣기",
       "push",
       "unshift"
      ],
      [
       "빼기",
       "pop",
       "shift"
      ]
     ]
    },
    "memo": "push·unshift는 새 길이, pop·shift는 뺀 값을 돌려줘요."
   }
  ],
  "parts": [
   {
    "t": "배열은 값을 순서대로 담은 목록이에요. 대괄호 [ ]로 만들고 쉼표로 나눠요. `배열[번호]`로 읽고 써요. 번호는 0부터예요.",
    "c": "const pets = [\"강아지\", \"고양이\", \"토끼\"];\nconsole.log(pets[0], pets.length);\npets[1] = \"햄스터\";\nconsole.log(pets.join(\",\"));\nconsole.log(pets[pets.length - 1]);",
    "o": "강아지 3\n강아지,햄스터,토끼\n토끼"
   },
   {
    "t": "`push`는 끝에 넣고 새 길이를, `pop`은 끝을 빼서 그 값을 돌려줘요. `unshift`·`shift`는 앞쪽에서 같은 일을 해요.",
    "c": "const q = [\"b\"];\nconsole.log(q.push(\"c\"));\nconsole.log(q.unshift(\"a\"));\nconsole.log(q.pop());\nconsole.log(q.shift());\nconsole.log(q.join(\",\"));",
    "o": "2\n3\nc\na\nb"
   },
   {
    "t": "`const`로 만든 배열도 안의 값은 바꿀 수 있어요. const가 막는 건 '다른 배열을 통째로 다시 넣기'뿐이에요.",
    "c": "const list = [1, 2];\nlist.push(3);\nconsole.log(list.length);\ntry {\n  list = [9];\n} catch (e) {\n  console.log(e.name);\n}",
    "o": "3\nTypeError"
   },
   {
    "t": "배열인지 확인할 때는 typeof(\"object\"가 나와요) 말고 `Array.isArray()`를 써요. 배열 안에 배열을 넣으면 표처럼 쓸 수 있어요.",
    "c": "const grid = [[1, 2], [3, 4]];\nconsole.log(typeof grid, Array.isArray(grid));\nconsole.log(grid[1][0]);",
    "o": "object true\n3"
   }
  ],
  "tip": "번호는 0부터, 마지막은 `arr[arr.length - 1]`. const 배열도 push는 돼요. 배열 확인은 `Array.isArray`."
 },
 {
  "id": "a02",
  "unit": "arr",
  "part": "활용 · 배열",
  "title": "자르기·찾기·합치기",
  "sum": "slice와 splice, indexOf·includes, concat과 펼치기(...), 구조 분해",
  "topics": "slice|splice|indexOf|includes|concat|펼치기|전개|\\.\\.\\.|구조 분해|join|복사|배열 비교|flat|lastIndexOf",
  "figs": [
   {
    "table": {
     "cap": "slice와 splice",
     "cols": [
      "",
      "slice(1, 3)",
      "splice(1, 2)"
     ],
     "rows": [
      [
       "하는 일",
       "1번부터 3번 앞까지 복사",
       "1번부터 2개를 잘라 냄"
      ],
      [
       "원본 배열",
       "그대로",
       "바뀜"
      ],
      [
       "돌려주는 것",
       "복사한 새 배열",
       "잘라 낸 것들의 배열"
      ]
     ]
    },
    "memo": "splice는 원본을 쪼개요(s-p-lice, 바꾸는 p). slice는 구경만."
   }
  ],
  "parts": [
   {
    "t": "`slice(시작, 끝)`은 원본은 두고 일부를 복사한 새 배열을 줘요. `splice(시작, 개수, 넣을 것...)`은 원본에서 잘라 내고, 그 자리에 새 값을 넣을 수도 있어요.",
    "c": "const a = [\"a\", \"b\", \"c\", \"d\"];\nconsole.log(a.slice(1, 3).join(\"\"), a.join(\"\"));\nconst cut = a.splice(1, 2, \"X\");\nconsole.log(cut.join(\"\"), a.join(\"\"));",
    "o": "bc abcd\nbc aXd"
   },
   {
    "t": "`indexOf`는 값의 번호(없으면 -1), `includes`는 들어 있는지 알려 줘요. indexOf는 ===로 비교하고, includes도 거의 같지만 NaN은 찾아 줘요.",
    "c": "const n = [10, 20, 30];\nconsole.log(n.indexOf(20), n.indexOf(99));\nconsole.log(n.includes(30), n.includes(\"30\"));",
    "o": "1 -1\ntrue false"
   },
   {
    "t": "점 세 개 `...배열`은 배열을 펼쳐서 낱개로 꺼내요 (펼치기, 전개). 배열 합치기나 복사에 써요. `concat`도 합친 새 배열을 줘요.",
    "c": "const x = [1, 2];\nconst y = [3, 4];\nconst both = [...x, ...y, 5];\nconsole.log(both.join(\",\"), x.concat(y).length);\nconsole.log(Math.max(...both));",
    "o": "1,2,3,4,5 4\n5"
   },
   {
    "t": "구조 분해는 배열에서 값을 한 번에 꺼내 변수에 넣는 문법이에요. 순서대로 들어가고, 쉼표로 건너뛰거나 `...`로 나머지를 모을 수 있어요.",
    "c": "const [first, second, ...others] = [1, 2, 3, 4];\nconsole.log(first, second, others.length);\nconst [, b] = [\"가\", \"나\"];\nconsole.log(b);\nlet p = 1, q = 2;\n[p, q] = [q, p];\nconsole.log(p, q);",
    "o": "1 2 2\n나\n2 1"
   },
   {
    "t": "`flat()`은 배열 안에 든 배열을 한 단계 펼쳐서 새 배열을 만들어요. 더 깊이 든 배열은 그대로 남아요.",
    "c": "const nested = [1, [2, 3], [4, [5]]];\nconst f = nested.flat();\nconsole.log(nested.length, f.length, f[3]);",
    "o": "3 5 4"
   },
   {
    "t": "배열은 ===로 비교하면 내용이 아니라 '같은 상자인지'를 봐요. 내용이 같아도 따로 만든 배열은 false예요.",
    "c": "console.log([1, 2] === [1, 2]);\nconst r = [1, 2];\nconst r2 = r;\nconsole.log(r === r2);",
    "o": "false\ntrue"
   }
  ],
  "tip": "slice는 원본 그대로, splice는 원본을 바꿔요. `[...a, ...b]`로 합치고, `[a, b] = [b, a]`로 서로 바꿔요."
 },
 {
  "id": "a03",
  "unit": "arr",
  "part": "활용 · 배열",
  "title": "map, filter, reduce",
  "sum": "모두 바꾸기, 골라내기, 하나로 모으기",
  "topics": "^map|filter|reduce|체이닝|메서드 연결|합계 reduce|초깃값",
  "figs": [
   {
    "pic": "<svg viewBox=\"0 0 320 160\"><text class=\"l m\" x=\"5\" y=\"25\">원본</text><g><rect class=\"h\" x=\"70\" y=\"10\" width=\"40\" height=\"26\" rx=\"6\"/><text x=\"90\" y=\"28\">1</text><rect class=\"h\" x=\"120\" y=\"10\" width=\"40\" height=\"26\" rx=\"6\"/><text x=\"140\" y=\"28\">2</text><rect class=\"h\" x=\"170\" y=\"10\" width=\"40\" height=\"26\" rx=\"6\"/><text x=\"190\" y=\"28\">3</text><rect class=\"h\" x=\"220\" y=\"10\" width=\"40\" height=\"26\" rx=\"6\"/><text x=\"240\" y=\"28\">4</text></g>\n<g data-s=\"1\"><text class=\"l m\" x=\"5\" y=\"70\">map ×10</text><rect class=\"gs\" x=\"70\" y=\"55\" width=\"40\" height=\"26\" rx=\"6\"/><text x=\"90\" y=\"73\">10</text><rect class=\"gs\" x=\"120\" y=\"55\" width=\"40\" height=\"26\" rx=\"6\"/><text x=\"140\" y=\"73\">20</text><rect class=\"gs\" x=\"170\" y=\"55\" width=\"40\" height=\"26\" rx=\"6\"/><text x=\"190\" y=\"73\">30</text><rect class=\"gs\" x=\"220\" y=\"55\" width=\"40\" height=\"26\" rx=\"6\"/><text x=\"240\" y=\"73\">40</text></g>\n<g data-s=\"2\"><text class=\"l m\" x=\"5\" y=\"112\">filter 짝수</text><rect class=\"gs\" x=\"120\" y=\"98\" width=\"40\" height=\"26\" rx=\"6\"/><text x=\"140\" y=\"116\">2</text><rect class=\"gs\" x=\"220\" y=\"98\" width=\"40\" height=\"26\" rx=\"6\"/><text x=\"240\" y=\"116\">4</text></g>\n<g data-s=\"3\"><text class=\"l m\" x=\"5\" y=\"150\">reduce 합</text><rect class=\"gs\" x=\"145\" y=\"134\" width=\"60\" height=\"26\" rx=\"6\"/><text class=\"k\" x=\"175\" y=\"152\">10</text></g></svg>",
    "steps": [
     "원본 배열 [1, 2, 3, 4]",
     "map: 칸마다 바꿔서 같은 개수의 새 배열 (x => x * 10)",
     "filter: 조건이 참인 것만 남긴 새 배열 (x => x % 2 === 0)",
     "reduce: 모두 모아 값 하나로 (합계 10)"
    ]
   },
   {
    "table": {
     "cap": "세 메서드 비교",
     "cols": [
      "",
      "콜백이 돌려줄 것",
      "결과"
     ],
     "rows": [
      [
       "map",
       "바꾼 값",
       "같은 길이 배열"
      ],
      [
       "filter",
       "true/false",
       "같거나 짧은 배열"
      ],
      [
       "reduce",
       "다음 누적 값",
       "값 하나"
      ]
     ]
    },
    "memo": "셋 다 원본은 그대로예요. map은 개수 그대로, filter는 고르기, reduce는 하나로."
   }
  ],
  "parts": [
   {
    "t": "`map(콜백)`은 각 값을 콜백으로 바꿔서 같은 길이의 새 배열을 만들어요. 원본은 그대로예요.",
    "c": "const prices = [1000, 2500, 300];\nconst won = prices.map(p => p + \"원\");\nconsole.log(won.join(\" \"));\nconsole.log(prices.map((p, i) => i).join(\",\"));",
    "o": "1000원 2500원 300원\n0,1,2"
   },
   {
    "t": "`filter(콜백)`은 콜백이 참을 돌려준 값만 모은 새 배열을 만들어요. 하나도 없으면 빈 배열 [ ]이에요.",
    "c": "const ages = [8, 15, 21, 30];\nconst adults = ages.filter(a => a >= 19);\nconsole.log(adults.join(\",\"), adults.length);\nconsole.log(ages.filter(a => a > 100).length);",
    "o": "21,30 2\n0"
   },
   {
    "t": "`reduce((누적, 값) => 새 누적, 초깃값)`은 앞에서부터 값을 하나씩 누적에 모아 결과 하나를 만들어요. 초깃값을 안 주면 첫 값이 초깃값이 되고 두 번째 값부터 돌아요.",
    "c": "const nums = [1, 2, 3, 4];\nconst total = nums.reduce((acc, n) => acc + n, 0);\nconsole.log(total);\nconst max = nums.reduce((a, b) => (a > b ? a : b));\nconsole.log(max);",
    "o": "10\n4"
   },
   {
    "t": "새 배열을 돌려주니까 점으로 이어 쓸 수 있어요 (메서드 연결).",
    "c": "const r = [1, 2, 3, 4, 5]\n  .filter(n => n % 2 === 1)\n  .map(n => n * n)\n  .reduce((a, b) => a + b, 0);\nconsole.log(r);",
    "o": "35"
   }
  ],
  "tip": "map = 모두 바꾸기(길이 같음), filter = 고르기, reduce = 하나로 모으기. 셋 다 원본은 안 바뀌어요."
 },
 {
  "id": "a04",
  "unit": "arr",
  "part": "활용 · 배열",
  "title": "find, some, every, forEach",
  "sum": "하나 찾기, 하나라도·모두 맞는지, 하나씩 실행",
  "topics": "find|findIndex|some|every|forEach|빈 배열 every",
  "parts": [
   {
    "t": "`find`는 조건에 맞는 첫 값(없으면 undefined), `findIndex`는 그 번호(없으면 -1)를 줘요.",
    "c": "const users = [{ name: \"민지\", age: 12 }, { name: \"준호\", age: 15 }];\nconst u = users.find(x => x.age > 13);\nconsole.log(u.name);\nconsole.log(users.findIndex(x => x.age > 20));\nconsole.log(users.find(x => x.age > 20));",
    "o": "준호\n-1\nundefined"
   },
   {
    "t": "`some`은 하나라도 맞으면 true, `every`는 모두 맞아야 true예요. 빈 배열에서는 some이 false, every가 true예요 (틀린 게 하나도 없으니까).",
    "c": "const s = [3, 5, 8];\nconsole.log(s.some(n => n % 2 === 0));\nconsole.log(s.every(n => n > 0));\nconsole.log([].some(n => n > 0), [].every(n => n > 0));",
    "o": "true\ntrue\nfalse true"
   },
   {
    "t": "`forEach`는 값마다 콜백을 실행만 하고 아무것도 돌려주지 않아요 (undefined). 새 배열이 필요하면 map을 써요. forEach는 중간에 break로 멈출 수 없어요.",
    "c": "const r = [\"a\", \"b\"].forEach((x, i) => console.log(i, x));\nconsole.log(r);",
    "o": "0 a\n1 b\nundefined"
   }
  ],
  "tip": "find는 값, findIndex는 번호. 빈 배열의 every는 true. forEach는 아무것도 돌려주지 않아요(undefined)."
 },
 {
  "id": "a05",
  "unit": "arr",
  "part": "활용 · 배열",
  "title": "sort와 reverse",
  "sum": "정렬은 원본을 바꾸고, 숫자는 비교 함수가 필요해요",
  "topics": "sort|정렬|reverse|비교 함수|toSorted",
  "parts": [
   {
    "t": "`sort()`는 아무것도 안 넣으면 값을 문자열로 바꿔 사전 순서로 정렬해요. 그래서 숫자는 10이 9보다 앞에 와요!",
    "c": "console.log([\"바나나\", \"사과\", \"귤\"].sort().join(\",\"));\nconsole.log([10, 9, 1, 100].sort().join(\",\"));",
    "o": "귤,바나나,사과\n1,10,100,9"
   },
   {
    "t": "숫자는 비교 함수를 넣어요. `(a, b) => a - b`는 작은 것부터(오름차순), `(a, b) => b - a`는 큰 것부터(내림차순)예요. 결과가 음수면 a가 앞, 양수면 b가 앞이에요.",
    "c": "const n = [10, 9, 1, 100];\nconsole.log(n.sort((a, b) => a - b).join(\",\"));\nconsole.log(n.sort((a, b) => b - a).join(\",\"));",
    "o": "1,9,10,100\n100,10,9,1"
   },
   {
    "t": "`sort`와 `reverse`는 원본 배열 자체를 바꾸고, 그 배열을 그대로 돌려줘요. 원본을 지키려면 `[...arr]`로 복사한 뒤 정렬해요.",
    "c": "const orig = [3, 1, 2];\nconst sorted = orig.sort();\nconsole.log(orig.join(\",\"), sorted === orig);\nconst keep = [3, 1, 2];\nconst copy = [...keep].reverse();\nconsole.log(keep.join(\",\"), copy.join(\",\"));",
    "o": "1,2,3 true\n3,1,2 2,1,3"
   },
   {
    "t": "객체 배열은 속성을 꺼내 비교해요.",
    "c": "const kids = [{ n: \"준호\", h: 150 }, { n: \"민지\", h: 142 }, { n: \"서연\", h: 147 }];\nkids.sort((a, b) => a.h - b.h);\nconsole.log(kids.map(k => k.n).join(\",\"));",
    "o": "민지,서연,준호"
   }
  ],
  "tip": "숫자 정렬은 `sort((a, b) => a - b)`. sort·reverse는 원본을 바꿔요."
 },
 {
  "id": "b01",
  "unit": "obj",
  "part": "활용 · 객체와 JSON",
  "title": "객체: 이름표 붙은 상자",
  "sum": "키와 값, 점·대괄호로 읽고 쓰기, 추가·삭제, in",
  "topics": "객체 만들기|^객체$|점 표기|대괄호|속성 추가|delete|in 연산자|없는 속성|단축 속성|계산된 키|중첩 객체|키 이름|const 객체",
  "parts": [
   {
    "t": "객체는 `{ 키: 값 }` 짝을 모아 둔 상자예요. 배열이 번호로 찾는다면 객체는 이름(키)으로 찾아요. `객체.키` 또는 `객체[\"키\"]`로 읽어요.",
    "c": "const cat = { name: \"나비\", age: 3 };\nconsole.log(cat.name, cat[\"age\"]);\nconsole.log(cat.color);",
    "o": "나비 3\nundefined"
   },
   {
    "t": "키가 변수에 들어 있으면 꼭 대괄호를 써요. `obj.key`는 이름이 \"key\"인 속성을 찾아요.",
    "c": "const cat = { name: \"나비\", age: 3 };\nconst key = \"name\";\nconsole.log(cat[key]);\nconsole.log(cat.key);",
    "o": "나비\nundefined"
   },
   {
    "t": "없는 키에 값을 넣으면 새로 생기고, `delete`로 지워요. `\"키\" in 객체`는 그 키가 있는지 알려 줘요. const 객체도 속성은 바꿀 수 있어요.",
    "c": "const box = { a: 1 };\nbox.b = 2;\nbox.a = 10;\ndelete box.b;\nconsole.log(box.a, box.b, \"a\" in box, \"b\" in box);",
    "o": "10 undefined true false"
   },
   {
    "t": "변수 이름과 키 이름이 같으면 `{ name }`처럼 한 번만 써도 돼요 (단축 속성). 대괄호로 키를 계산해서 만들 수도 있어요.",
    "c": "const name = \"민지\";\nconst age = 12;\nconst user = { name, age };\nconsole.log(user.name, user.age);\nconst k = \"score\";\nconst o = { [k + 1]: 90 };\nconsole.log(o.score1);",
    "o": "민지 12\n90"
   },
   {
    "t": "객체 안에 객체를 넣을 수 있어요. 점을 이어서 안쪽으로 들어가요.",
    "c": "const me = { name: \"민지\", address: { city: \"서울\" } };\nconsole.log(me.address.city);",
    "o": "서울"
   }
  ],
  "tip": "변수에 든 키는 `obj[key]`, 그냥 이름은 `obj.name`. 없는 속성을 읽으면 undefined예요."
 },
 {
  "id": "b02",
  "unit": "obj",
  "part": "활용 · 객체와 JSON",
  "title": "메서드와 this",
  "sum": "객체 안의 함수, this는 '부른 객체'",
  "topics": "메서드|this|화살표 함수와 this|메서드 단축",
  "parts": [
   {
    "t": "객체 안에 넣은 함수를 메서드라고 해요. 메서드 안의 `this`는 그 메서드를 부른 객체(점 앞의 객체)를 가리켜요.",
    "c": "const dog = {\n  name: \"바둑\",\n  bark() {\n    return this.name + \": 멍멍\";\n  },\n};\nconsole.log(dog.bark());",
    "o": "바둑: 멍멍"
   },
   {
    "t": "this는 함수를 만든 곳이 아니라 '어떻게 불렀는지'로 정해져요. 같은 함수를 b에 넣고 b.who()로 부르면 this는 b예요.",
    "c": "const a = { n: \"A\", who() { return this.n; } };\nconst b = { n: \"B\", who: a.who };\nconsole.log(a.who(), b.who());",
    "o": "A B"
   },
   {
    "t": "화살표 함수는 자기만의 this가 없어서, 객체 메서드로 쓰면 this가 그 객체를 가리키지 않아요. 메서드는 `이름() { }` 모양으로 만들어요.",
    "c": "const counter = {\n  count: 5,\n  normal() {\n    return this.count;\n  },\n  arrow: () => this.count,\n};\nconsole.log(counter.normal());\nconsole.log(counter.arrow());",
    "o": "5\nundefined"
   },
   {
    "t": "반대로 메서드 안에서 콜백을 쓸 때는 화살표 함수가 편해요. 화살표 함수는 바깥(메서드)의 this를 그대로 쓰거든요.",
    "c": "const team = {\n  name: \"파랑\",\n  members: [\"민지\", \"준호\"],\n  list() {\n    return this.members.map(m => m + \"(\" + this.name + \")\");\n  },\n};\nconsole.log(team.list().join(\", \"));",
    "o": "민지(파랑), 준호(파랑)"
   }
  ],
  "tip": "this = 점 앞의 객체. 화살표 함수는 this가 없어서 메서드로는 안 맞고, 메서드 안 콜백으로는 딱 맞아요."
 },
 {
  "id": "b03",
  "unit": "obj",
  "part": "활용 · 객체와 JSON",
  "title": "Object.keys·values·entries",
  "sum": "객체를 배열로 바꿔서 하나씩 다루기",
  "topics": "Object\\.keys|Object\\.values|Object\\.entries|fromEntries|속성 개수|Object\\.assign|freeze",
  "parts": [
   {
    "t": "`Object.keys(객체)`는 키 배열, `Object.values`는 값 배열, `Object.entries`는 [키, 값] 짝의 배열을 줘요. 배열이 되니까 length, map, forEach를 쓸 수 있어요.",
    "c": "const score = { 국어: 90, 수학: 70, 영어: 80 };\nconsole.log(Object.keys(score).join(\",\"));\nconsole.log(Object.values(score).reduce((a, b) => a + b, 0));\nconsole.log(Object.keys(score).length);\nfor (const [k, v] of Object.entries(score)) console.log(k + \"=\" + v);",
    "o": "국어,수학,영어\n240\n3\n국어=90\n수학=70\n영어=80"
   },
   {
    "t": "`Object.fromEntries`는 반대로 [키, 값] 짝 배열을 객체로 만들어요. entries → map → fromEntries로 값을 한꺼번에 바꿀 수 있어요.",
    "c": "const price = { 사과: 1000, 배: 2000 };\nconst sale = Object.fromEntries(Object.entries(price).map(([k, v]) => [k, v / 2]));\nconsole.log(sale.사과, sale.배);",
    "o": "500 1000"
   },
   {
    "t": "`Object.freeze`로 얼린 객체는 속성을 바꾸거나 더할 수 없어요 (보통은 조용히 무시되고, 엄격 모드에서는 TypeError가 나요).",
    "c": "const cfg = Object.freeze({ level: 1 });\ncfg.level = 99;\ncfg.extra = true;\nconsole.log(cfg.level, cfg.extra);",
    "o": "1 undefined"
   }
  ],
  "tip": "keys는 키, values는 값, entries는 [키, 값] 짝. 객체 속성 개수는 `Object.keys(obj).length`."
 },
 {
  "id": "b04",
  "unit": "obj",
  "part": "활용 · 객체와 JSON",
  "title": "객체 구조 분해와 펼치기",
  "sum": "속성을 변수로 꺼내기, 객체 합치기",
  "topics": "구조 분해|펼치기|전개|\\.\\.\\.|합치기|기본값 구조|이름 바꾸기|매개변수 구조",
  "parts": [
   {
    "t": "`const { 키 } = 객체`로 속성을 같은 이름의 변수로 꺼내요. 순서가 아니라 이름으로 찾아요. `키: 새이름`으로 이름을 바꾸고, `= 값`으로 기본값을 줄 수 있어요.",
    "c": "const user = { name: \"민지\", age: 12 };\nconst { age, name } = user;\nconsole.log(name, age);\nconst { name: who, city = \"서울\" } = user;\nconsole.log(who, city);",
    "o": "민지 12\n민지 서울"
   },
   {
    "t": "함수 매개변수에서 바로 꺼낼 수도 있어요.",
    "c": "function intro({ name, age }) {\n  return `${name}(${age})`;\n}\nconsole.log(intro({ age: 15, name: \"준호\" }));",
    "o": "준호(15)"
   },
   {
    "t": "`{ ...객체 }`는 속성을 펼쳐서 새 객체에 복사해요. 같은 키가 겹치면 뒤에 쓴 값이 이겨요.",
    "c": "const base = { color: \"red\", size: 1 };\nconst big = { ...base, size: 3 };\nconsole.log(big.color, big.size, base.size);\nconst o = { size: 9, ...base };\nconsole.log(o.size);",
    "o": "red 3 1\n1"
   }
  ],
  "tip": "객체 구조 분해는 이름으로, 배열 구조 분해는 순서로 꺼내요. 펼쳐 합칠 땐 뒤에 쓴 게 이겨요."
 },
 {
  "id": "b05",
  "unit": "obj",
  "part": "활용 · 객체와 JSON",
  "title": "참조와 복사",
  "sum": "객체·배열 변수에는 상자의 '위치'가 들어 있어요",
  "topics": "참조|복사|얕은|깊은|structuredClone|같은 객체|원시값|함수에 객체",
  "figs": [
   {
    "pic": "<svg viewBox=\"0 0 320 150\"><rect class=\"b\" x=\"10\" y=\"20\" width=\"70\" height=\"30\" rx=\"6\"/><text x=\"45\" y=\"40\">a</text><rect class=\"b\" x=\"10\" y=\"80\" width=\"70\" height=\"30\" rx=\"6\" data-s=\"1\"/><text x=\"45\" y=\"100\" data-s=\"1\">b</text>\n<rect class=\"h\" x=\"190\" y=\"40\" width=\"120\" height=\"60\" rx=\"10\"/><text class=\"k\" x=\"250\" y=\"66\" data-o=\"0 1\">{ n: 1 }</text><text class=\"k\" x=\"250\" y=\"66\" data-o=\"2 3\">{ n: 2 }</text><text class=\"m\" x=\"250\" y=\"88\">실제 상자</text>\n<path class=\"ln\" d=\"M80 35L188 60\"/><path class=\"ln\" d=\"M80 95L188 80\" data-s=\"1\"/><text class=\"m\" x=\"95\" y=\"140\" data-s=\"2\">b.n = 2 → a.n도 2</text>\n<rect class=\"gs\" x=\"200\" y=\"112\" width=\"100\" height=\"26\" rx=\"6\" data-s=\"3\"/><text class=\"m\" x=\"250\" y=\"130\" data-s=\"3\">{ ...a } 새 상자</text></svg>",
    "steps": [
     "const a = { n: 1 } → a에는 상자의 위치(참조)가 들어가요",
     "const b = a → 상자가 복사되는 게 아니라 같은 상자를 가리켜요",
     "b.n = 2 → 같은 상자라서 a.n도 2가 돼요",
     "새 상자가 필요하면 { ...a }나 structuredClone(a)로 복사해요"
    ]
   },
   {
    "table": {
     "cap": "복사 방법",
     "cols": [
      "방법",
      "안쪽 객체까지?"
     ],
     "rows": [
      [
       "b = a",
       "복사 아님 (같은 상자)"
      ],
      [
       "{ ...a }, [...arr]",
       "겉만 새로 (얕은 복사)"
      ],
      [
       "structuredClone(a)",
       "안쪽까지 전부 새로 (깊은 복사)"
      ]
     ]
    }
   }
  ],
  "parts": [
   {
    "t": "숫자·문자열 같은 값은 변수에 값 자체가 복사돼요. 그런데 객체와 배열은 상자의 위치(참조)가 복사돼요. 그래서 한쪽을 바꾸면 다른 쪽도 바뀌어요.",
    "c": "let x = 1;\nlet y = x;\ny = 2;\nconsole.log(x);\nconst a = { n: 1 };\nconst b = a;\nb.n = 2;\nconsole.log(a.n, a === b);",
    "o": "1\n2 true"
   },
   {
    "t": "함수에 객체를 넘기면 같은 상자가 넘어가서, 함수 안에서 속성을 바꾸면 바깥 객체도 바뀌어요.",
    "c": "function grow(p) {\n  p.h += 10;\n}\nconst kid = { h: 140 };\ngrow(kid);\nconsole.log(kid.h);",
    "o": "150"
   },
   {
    "t": "`{ ...a }`는 겉 상자만 새로 만들어요 (얕은 복사). 안쪽에 객체가 또 있으면 그건 같은 상자를 같이 써요. 안쪽까지 모두 새로 만들려면 `structuredClone`을 써요.",
    "c": "const orig = { name: \"민지\", pet: { kind: \"고양이\" } };\nconst shallow = { ...orig };\nshallow.name = \"준호\";\nshallow.pet.kind = \"강아지\";\nconsole.log(orig.name, orig.pet.kind);\nconst deep = structuredClone(orig);\ndeep.pet.kind = \"토끼\";\nconsole.log(orig.pet.kind);",
    "o": "민지 강아지\n강아지"
   }
  ],
  "tip": "`b = a`는 같은 상자. `{ ...a }`는 겉만 새 상자, `structuredClone(a)`는 안쪽까지 새 상자."
 },
 {
  "id": "b06",
  "unit": "obj",
  "part": "활용 · 객체와 JSON",
  "title": "JSON: 데이터를 글자로",
  "sum": "JSON.stringify와 JSON.parse",
  "topics": "JSON|stringify|parse|직렬화|localStorage",
  "parts": [
   {
    "t": "JSON은 객체·배열을 글자(문자열)로 적는 약속이에요. 서버와 데이터를 주고받거나 저장할 때 써요. 키는 꼭 큰따옴표로 감싸요.",
    "c": "const user = { name: \"민지\", age: 12, tags: [\"코딩\", \"그림\"] };\nconst text = JSON.stringify(user);\nconsole.log(text);\nconsole.log(typeof text);",
    "o": "{\"name\":\"민지\",\"age\":12,\"tags\":[\"코딩\",\"그림\"]}\nstring"
   },
   {
    "t": "`JSON.parse(글자)`는 반대로 글자를 다시 객체로 만들어요. 형식이 틀리면 SyntaxError 오류가 나요.",
    "c": "const back = JSON.parse('{\"name\":\"준호\",\"age\":15}');\nconsole.log(back.name, back.age + 1);\ntry {\n  JSON.parse(\"{name: 1}\");\n} catch (e) {\n  console.log(e.name);\n}",
    "o": "준호 16\nSyntaxError"
   },
   {
    "t": "JSON으로 바꿀 때 함수와 undefined인 속성은 빠지고, 배열 안의 undefined는 null이 돼요.",
    "c": "const o = { a: 1, b: undefined, f() {}, list: [1, undefined] };\nconsole.log(JSON.stringify(o));",
    "o": "{\"a\":1,\"list\":[1,null]}"
   },
   {
    "t": "브라우저의 localStorage는 글자만 저장할 수 있어서, 객체는 stringify로 저장하고 parse로 꺼내요. 이 앱의 기록도 이렇게 저장돼요."
   }
  ],
  "tip": "stringify는 객체 → 글자, parse는 글자 → 객체. JSON의 키는 큰따옴표, 함수·undefined 속성은 빠져요."
 },
 {
  "id": "b07",
  "unit": "obj",
  "part": "활용 · 객체와 JSON",
  "title": "?. 옵셔널 체이닝",
  "sum": "없을 수도 있는 속성을 오류 없이 읽기",
  "topics": "\\?\\.|옵셔널|TypeError 속성|undefined 속성",
  "parts": [
   {
    "t": "undefined나 null의 속성을 읽으려 하면 TypeError 오류가 나요. `?.`를 쓰면 앞이 null·undefined일 때 오류 대신 undefined를 돌려주고 멈춰요.",
    "c": "const user = { name: \"민지\" };\ntry {\n  console.log(user.address.city);\n} catch (e) {\n  console.log(e.name);\n}\nconsole.log(user.address?.city);\nconsole.log(user.address?.city ?? \"주소 없음\");",
    "o": "TypeError\nundefined\n주소 없음"
   },
   {
    "t": "메서드도 `?.()`로 있을 때만 부를 수 있어요. 앞이 멀쩡하면 평소처럼 동작해요.",
    "c": "const a = { hi() { return \"안녕\"; } };\nconsole.log(a.hi?.());\nconsole.log(a.bye?.());\nconsole.log(a?.hi());",
    "o": "안녕\nundefined\n안녕"
   }
  ],
  "tip": "`a?.b`는 a가 null·undefined면 undefined. `?? 기본값`과 함께 쓰면 좋아요."
 },
 {
  "id": "c01",
  "unit": "class",
  "part": "활용 · 클래스",
  "title": "클래스: 객체 만드는 틀",
  "sum": "class, constructor, 메서드, new",
  "topics": "^class|constructor|new|인스턴스|클래스 메서드|필드|this 클래스|typeof 클래스|new 없이",
  "parts": [
   {
    "t": "클래스는 같은 모양의 객체를 여러 개 찍어 내는 틀(붕어빵 틀)이에요. `new 클래스이름(값)`으로 객체(인스턴스)를 만들면 `constructor`가 실행돼서 this에 값을 채워요.",
    "c": "class Dog {\n  constructor(name) {\n    this.name = name;\n  }\n  bark() {\n    return this.name + \" 멍!\";\n  }\n}\nconst a = new Dog(\"바둑\");\nconst b = new Dog(\"초코\");\nconsole.log(a.bark(), b.bark());",
    "o": "바둑 멍! 초코 멍!"
   },
   {
    "t": "클래스 몸통에 `이름 = 값`으로 필드를 바로 적을 수도 있어요. 메서드는 모든 인스턴스가 같이 써요.",
    "c": "class Counter {\n  count = 0;\n  up() {\n    this.count++;\n    return this;\n  }\n}\nconst c = new Counter();\nc.up().up();\nconsole.log(c.count);\nconsole.log(new Counter().up === c.up);",
    "o": "2\ntrue"
   },
   {
    "t": "클래스는 `new` 없이 부르면 TypeError 오류가 나요. 그리고 typeof로 보면 클래스는 \"function\"이에요.",
    "c": "class A {}\ntry {\n  A();\n} catch (e) {\n  console.log(e.name);\n}\nconsole.log(typeof A, typeof new A());",
    "o": "TypeError\nfunction object"
   }
  ],
  "tip": "class는 틀, new로 찍어 낸 게 인스턴스. constructor는 new할 때 한 번 실행돼요."
 },
 {
  "id": "c02",
  "unit": "class",
  "part": "활용 · 클래스",
  "title": "상속: extends와 super",
  "sum": "있는 클래스를 물려받아 더 만들기",
  "topics": "extends|super|상속|오버라이드|덮어쓰기|instanceof",
  "parts": [
   {
    "t": "`class 자식 extends 부모`로 부모의 필드와 메서드를 물려받아요. 자식 constructor에서는 this를 쓰기 전에 꼭 `super(...)`로 부모 constructor를 먼저 불러야 해요.",
    "c": "class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  move() {\n    return this.name + \" 움직여요\";\n  }\n}\nclass Bird extends Animal {\n  constructor(name, wing) {\n    super(name);\n    this.wing = wing;\n  }\n}\nconst b = new Bird(\"참새\", 2);\nconsole.log(b.move(), b.wing);",
    "o": "참새 움직여요 2"
   },
   {
    "t": "자식이 같은 이름의 메서드를 만들면 부모 것 대신 자식 것이 불려요 (덮어쓰기, 오버라이드). `super.메서드()`로 부모 것을 부를 수 있어요.",
    "c": "class Animal {\n  sound() {\n    return \"...\";\n  }\n}\nclass Cat extends Animal {\n  sound() {\n    return \"야옹 \" + super.sound();\n  }\n}\nconsole.log(new Cat().sound());",
    "o": "야옹 ..."
   },
   {
    "t": "`객체 instanceof 클래스`는 그 클래스(또는 그 자식)로 만들었는지 알려 줘요.",
    "c": "class A {}\nclass B extends A {}\nconst x = new B();\nconsole.log(x instanceof B, x instanceof A, new A() instanceof B);",
    "o": "true true false"
   }
  ],
  "tip": "자식 constructor에선 this 전에 super(). 같은 이름 메서드는 자식 것이 이겨요. 자식 인스턴스는 부모 instanceof도 true."
 },
 {
  "id": "c03",
  "unit": "class",
  "part": "활용 · 클래스",
  "title": "static, get, set, #비공개",
  "sum": "클래스 자체의 메서드, 속성처럼 쓰는 함수, 숨긴 필드",
  "topics": "static|get|set|getter|setter|#|비공개|private",
  "parts": [
   {
    "t": "`static`을 붙인 메서드는 인스턴스가 아니라 클래스 자체에서 불러요. `Math.max` 같은 도구 함수를 만들 때 써요.",
    "c": "class MathKid {\n  static double(n) {\n    return n * 2;\n  }\n}\nconsole.log(MathKid.double(4));\nconsole.log(typeof new MathKid().double);",
    "o": "8\nundefined"
   },
   {
    "t": "`get 이름()`은 괄호 없이 속성처럼 읽는 메서드, `set 이름(값)`은 값을 넣을 때 실행되는 메서드예요.",
    "c": "class Rect {\n  constructor(w, h) {\n    this.w = w;\n    this.h = h;\n  }\n  get area() {\n    return this.w * this.h;\n  }\n  set size(n) {\n    this.w = n;\n    this.h = n;\n  }\n}\nconst r = new Rect(2, 3);\nconsole.log(r.area);\nr.size = 5;\nconsole.log(r.area);",
    "o": "6\n25"
   },
   {
    "t": "이름 앞에 `#`을 붙인 필드는 클래스 안에서만 쓸 수 있어요. 밖에서 몰래 바꿀 수 없게 지켜 줘요.",
    "c": "class Wallet {\n  #money = 0;\n  add(n) {\n    if (n > 0) this.#money += n;\n    return this.#money;\n  }\n}\nconst w = new Wallet();\nw.add(100);\nw.add(-50);\nconsole.log(w.add(0), w.money);",
    "o": "100 undefined"
   }
  ],
  "tip": "static은 `클래스.메서드()`로, get은 괄호 없이 `obj.area`로, #필드는 클래스 안에서만."
 },
 {
  "id": "d01",
  "unit": "dom",
  "part": "활용 · 웹 페이지 다루기 (DOM)",
  "title": "DOM과 요소 찾기",
  "sum": "웹 페이지는 나무 모양, querySelector로 찾기",
  "topics": "DOM|querySelector|getElementById|querySelectorAll|선택자|document|NodeList|없는 요소",
  "figs": [
   {
    "pic": "<svg viewBox=\"0 0 320 150\"><rect class=\"h\" x=\"120\" y=\"5\" width=\"80\" height=\"26\" rx=\"6\"/><text x=\"160\" y=\"23\">document</text><path class=\"ar\" d=\"M160 31v12\"/>\n<rect class=\"h\" x=\"125\" y=\"43\" width=\"70\" height=\"26\" rx=\"6\"/><text x=\"160\" y=\"61\">body</text><path class=\"ar\" d=\"M160 69v8M70 77h180M70 77v8M250 77v8\" data-s=\"1\"/>\n<rect class=\"b\" x=\"30\" y=\"85\" width=\"80\" height=\"26\" rx=\"6\" data-s=\"1\"/><text x=\"70\" y=\"103\" data-s=\"1\">h1</text><rect class=\"b\" x=\"210\" y=\"85\" width=\"80\" height=\"26\" rx=\"6\" data-s=\"1\"/><text x=\"250\" y=\"103\" data-s=\"1\">ul</text>\n<path class=\"ar\" d=\"M250 111v10M215 121h70M215 121v6M285 121v6\" data-s=\"2\"/><rect class=\"gs\" x=\"185\" y=\"127\" width=\"60\" height=\"22\" rx=\"6\" data-s=\"2\"/><text x=\"215\" y=\"142\" data-s=\"2\">li</text><rect class=\"gs\" x=\"255\" y=\"127\" width=\"60\" height=\"22\" rx=\"6\" data-s=\"2\"/><text x=\"285\" y=\"142\" data-s=\"2\">li</text></svg>",
    "steps": [
     "브라우저는 HTML을 읽어서 document라는 나무 꼭대기를 만들어요",
     "태그 하나하나가 가지(요소)가 돼요: body 안에 h1, ul",
     "ul 안에 li 두 개. 자바스크립트는 이 나무에서 요소를 찾아 바꿔요"
    ]
   },
   {
    "table": {
     "cap": "찾는 방법",
     "cols": [
      "코드",
      "찾는 것"
     ],
     "rows": [
      [
       "querySelector(\"#title\")",
       "id가 title인 요소 하나"
      ],
      [
       "querySelector(\".item\")",
       "class가 item인 첫 요소"
      ],
      [
       "querySelector(\"li\")",
       "첫 번째 li"
      ],
      [
       "querySelectorAll(\"li\")",
       "li 모두 (목록)"
      ],
      [
       "getElementById(\"title\")",
       "id로 찾기 (# 없이)"
      ]
     ]
    },
    "memo": "# = id, . = class, 아무것도 없으면 태그 이름. CSS 선택자와 똑같아요."
   }
  ],
  "parts": [
   {
    "t": "DOM은 웹 페이지(HTML)를 자바스크립트가 다룰 수 있게 만든 나무 모양 구조예요. `document.querySelector(\"선택자\")`는 맞는 첫 요소를 찾아 줘요. 없으면 null이에요.",
    "html": "<h1 id=\"title\">안녕</h1>\n<p class=\"note\">첫 메모</p>\n<p class=\"note\">둘째 메모</p>",
    "c": "const h = document.querySelector(\"#title\");\nconsole.log(h.textContent);\nconsole.log(document.querySelector(\".note\").textContent);\nconsole.log(document.querySelector(\".none\"));",
    "o": "안녕\n첫 메모\nnull"
   },
   {
    "t": "`querySelectorAll`은 맞는 요소를 모두 담은 목록(NodeList)을 줘요. length와 forEach를 쓸 수 있어요. 하나도 없으면 길이 0인 목록이에요.",
    "html": "<ul>\n  <li>사과</li>\n  <li>배</li>\n  <li>귤</li>\n</ul>",
    "c": "const items = document.querySelectorAll(\"li\");\nconsole.log(items.length);\nitems.forEach((li, i) => console.log(i, li.textContent));\nconsole.log(document.querySelectorAll(\"table\").length);",
    "o": "3\n0 사과\n1 배\n2 귤\n0"
   },
   {
    "t": "`getElementById(\"아이디\")`는 id로 찾아요. 이건 선택자가 아니라서 #을 붙이지 않아요.",
    "html": "<div id=\"box\">상자</div>",
    "c": "console.log(document.getElementById(\"box\").textContent);\nconsole.log(document.getElementById(\"#box\"));",
    "o": "상자\nnull"
   }
  ],
  "tip": "querySelector는 첫 하나(없으면 null), querySelectorAll은 모두(목록). getElementById에는 # 없이."
 },
 {
  "id": "d02",
  "unit": "dom",
  "part": "활용 · 웹 페이지 다루기 (DOM)",
  "title": "글자·속성·클래스 바꾸기",
  "sum": "textContent와 innerHTML, setAttribute, classList, style",
  "topics": "textContent|innerHTML|setAttribute|getAttribute|classList|style|className|toggle|속성 바꾸기|value|dataset",
  "parts": [
   {
    "t": "`textContent`는 요소 안의 글자를 읽고 바꿔요. `innerHTML`은 태그까지 HTML로 해석해요. 사용자가 쓴 글을 넣을 때는 textContent를 써야 안전해요 (innerHTML에 넣으면 남이 쓴 태그가 실행될 수 있어요).",
    "html": "<p id=\"msg\">처음</p>",
    "c": "const p = document.querySelector(\"#msg\");\np.textContent = \"<b>굵게</b>\";\nconsole.log(p.children.length);\np.innerHTML = \"<b>굵게</b>\";\nconsole.log(p.children.length, p.textContent);",
    "o": "0\n1 굵게"
   },
   {
    "t": "`classList`로 class를 넣고(add) 빼고(remove) 켜고 끄고(toggle) 있는지(contains) 확인해요. 디자인은 CSS class로 바꾸는 게 깔끔해요.",
    "html": "<button class=\"btn\">눌러요</button>",
    "c": "const b = document.querySelector(\".btn\");\nb.classList.add(\"on\");\nconsole.log(b.className);\nb.classList.toggle(\"on\");\nconsole.log(b.classList.contains(\"on\"));\nb.classList.remove(\"btn\");\nconsole.log(\"[\" + b.className + \"]\");",
    "o": "btn on\nfalse\n[]"
   },
   {
    "t": "`setAttribute`·`getAttribute`로 속성을 바꾸고 읽어요. `style.속성`으로 직접 꾸밀 수도 있는데, CSS의 background-color는 backgroundColor처럼 붙여 써요.",
    "html": "<img id=\"pic\" src=\"a.png\" alt=\"그림\">",
    "c": "const img = document.querySelector(\"#pic\");\nimg.setAttribute(\"alt\", \"고양이\");\nconsole.log(img.getAttribute(\"alt\"));\nimg.style.backgroundColor = \"yellow\";\nconsole.log(img.style.backgroundColor);",
    "o": "고양이\nyellow"
   },
   {
    "t": "입력 칸에 사용자가 적은 값은 `value`로 읽어요. value는 숫자를 적어도 항상 문자열이에요. `data-이름` 속성은 `dataset.이름`으로 읽어요.",
    "html": "<input id=\"age\" value=\"12\">\n<li id=\"item\" data-price=\"3000\">연필</li>",
    "c": "const age = document.querySelector(\"#age\").value;\nconsole.log(typeof age, age + 1, Number(age) + 1);\nconst li = document.querySelector(\"#item\");\nconsole.log(li.dataset.price);",
    "o": "string 121 13\n3000"
   }
  ],
  "tip": "글자는 textContent(안전), HTML은 innerHTML. 입력값 value는 늘 문자열이라 계산 전에 Number()로."
 },
 {
  "id": "d03",
  "unit": "dom",
  "part": "활용 · 웹 페이지 다루기 (DOM)",
  "title": "요소 만들고 붙이고 지우기",
  "sum": "createElement, append, prepend, remove",
  "topics": "createElement|append|appendChild|prepend|remove|요소 만들기|요소 지우기|children",
  "parts": [
   {
    "t": "`document.createElement(\"태그\")`로 새 요소를 만들어요. 만들기만 하면 화면에 안 보이고, `부모.append(요소)`로 붙여야 나타나요. append는 맨 끝에, prepend는 맨 앞에 붙여요.",
    "html": "<ul id=\"list\"><li>하나</li></ul>",
    "c": "const ul = document.querySelector(\"#list\");\nconst li = document.createElement(\"li\");\nli.textContent = \"둘\";\nconsole.log(ul.children.length);\nul.append(li);\nconst first = document.createElement(\"li\");\nfirst.textContent = \"영\";\nul.prepend(first);\nconsole.log(ul.children.length, ul.textContent);",
    "o": "1\n3 영하나둘"
   },
   {
    "t": "`요소.remove()`로 지워요. 이미 붙어 있는 요소를 다른 곳에 append하면 복사가 아니라 그리로 옮겨져요.",
    "html": "<div id=\"a\"><span>공</span></div>\n<div id=\"b\"></div>",
    "c": "const ball = document.querySelector(\"span\");\ndocument.querySelector(\"#b\").append(ball);\nconsole.log(document.querySelector(\"#a\").children.length, document.querySelector(\"#b\").children.length);\nball.remove();\nconsole.log(document.querySelectorAll(\"span\").length);",
    "o": "0 1\n0"
   },
   {
    "t": "배열로 목록을 한꺼번에 만들 때 이렇게 해요.",
    "html": "<ul id=\"menu\"></ul>",
    "c": "const foods = [\"김밥\", \"라면\", \"떡볶이\"];\nconst menu = document.querySelector(\"#menu\");\nfor (const f of foods) {\n  const li = document.createElement(\"li\");\n  li.textContent = f;\n  menu.append(li);\n}\nconsole.log(menu.children.length, menu.lastElementChild.textContent);",
    "o": "3 떡볶이"
   }
  ],
  "tip": "createElement로 만들고 append로 붙여야 보여요. 붙어 있는 요소를 append하면 옮겨져요."
 },
 {
  "id": "d04",
  "unit": "dom",
  "part": "활용 · 웹 페이지 다루기 (DOM)",
  "title": "이벤트: 눌렀을 때 실행하기",
  "sum": "addEventListener, event.target, preventDefault, 이벤트 위임",
  "topics": "이벤트|addEventListener|click|event\\.target|preventDefault|submit|input 이벤트|위임|버블|removeEventListener|once|onclick",
  "parts": [
   {
    "t": "`요소.addEventListener(\"click\", 함수)`는 그 요소를 누를 때마다 함수를 실행하게 해요. 함수를 넘길 때 괄호를 붙이면 안 돼요 (붙이면 지금 바로 실행돼 버려요). 아래 코드의 `btn.click()`은 누른 것처럼 흉내 내는 거예요.",
    "html": "<button id=\"btn\">좋아요</button>\n<span id=\"n\">0</span>",
    "c": "let likes = 0;\nconst btn = document.querySelector(\"#btn\");\nbtn.addEventListener(\"click\", () => {\n  likes++;\n  document.querySelector(\"#n\").textContent = likes;\n});\nbtn.click();\nbtn.click();\nconsole.log(document.querySelector(\"#n\").textContent);",
    "o": "2"
   },
   {
    "t": "함수는 이벤트 정보(event)를 받아요. `event.target`은 실제로 누른 요소예요. 안쪽 요소에서 일어난 클릭은 바깥 요소로 전해져요 (버블링). 그래서 부모에 하나만 달아도 여러 자식을 처리할 수 있어요 (이벤트 위임).",
    "html": "<ul id=\"list\">\n  <li>사과</li>\n  <li>배</li>\n</ul>",
    "c": "const list = document.querySelector(\"#list\");\nlist.addEventListener(\"click\", e => {\n  console.log(\"누른 것: \" + e.target.textContent);\n});\ndocument.querySelectorAll(\"li\")[1].click();",
    "o": "누른 것: 배"
   },
   {
    "t": "폼의 제출(submit)이나 링크는 기본 동작(페이지 이동)이 있어요. `event.preventDefault()`로 막고 자바스크립트로 처리해요.",
    "html": "<form id=\"f\"><input name=\"q\" value=\"고양이\"><button>검색</button></form>",
    "c": "const form = document.querySelector(\"#f\");\nform.addEventListener(\"submit\", e => {\n  e.preventDefault();\n  console.log(\"검색어: \" + form.querySelector(\"input\").value, e.defaultPrevented);\n});\nform.requestSubmit();",
    "o": "검색어: 고양이 true"
   },
   {
    "t": "`{ once: true }`를 주면 한 번만 실행돼요. `removeEventListener`로 떼려면 붙일 때와 같은 함수를 넘겨야 해요.",
    "html": "<button id=\"b\">한 번만</button>",
    "c": "const b = document.querySelector(\"#b\");\nlet n = 0;\nb.addEventListener(\"click\", () => n++, { once: true });\nb.click();\nb.click();\nconsole.log(n);",
    "o": "1"
   }
  ],
  "tip": "`addEventListener(\"click\", fn)` (fn에 괄호 없음). e.target은 실제로 누른 요소, preventDefault는 기본 동작 막기."
 },
 {
  "id": "e01",
  "unit": "async",
  "part": "활용 · 비동기와 오류 처리",
  "title": "오류 처리: try, catch, finally",
  "sum": "오류가 나도 멈추지 않게, 직접 오류 던지기",
  "topics": "try|catch|finally|throw|오류 종류|Error|ReferenceError|TypeError|SyntaxError|RangeError|오류 메시지",
  "figs": [
   {
    "table": {
     "cap": "자주 보는 오류",
     "cols": [
      "이름",
      "언제"
     ],
     "rows": [
      [
       "ReferenceError",
       "없는 변수 이름을 썼을 때"
      ],
      [
       "TypeError",
       "undefined의 속성 읽기, 함수가 아닌 걸 부르기, const 다시 넣기"
      ],
      [
       "SyntaxError",
       "문법이 틀렸을 때 (괄호 빠짐, JSON 형식 틀림)"
      ],
      [
       "RangeError",
       "허용 범위를 넘었을 때 (new Array(-1))"
      ]
     ]
    }
   }
  ],
  "parts": [
   {
    "t": "오류가 나면 프로그램이 거기서 멈춰요. `try { }` 안에서 난 오류는 `catch (e) { }`가 받아서 처리하고, 프로그램은 계속 돌아가요. e.name은 오류 이름, e.message는 설명이에요.",
    "c": "try {\n  const user = undefined;\n  console.log(user.name);\n  console.log(\"여기는 실행 안 돼요\");\n} catch (e) {\n  console.log(\"잡았다:\", e.name);\n}\nconsole.log(\"계속 실행\");",
    "o": "잡았다: TypeError\n계속 실행"
   },
   {
    "t": "`finally { }`는 오류가 나든 안 나든 마지막에 꼭 실행돼요. 정리할 일을 넣어요.",
    "c": "function test(n) {\n  try {\n    if (n < 0) throw new Error(\"음수 안 돼요\");\n    return \"좋아요\";\n  } catch (e) {\n    return e.message;\n  } finally {\n    console.log(\"검사 끝\");\n  }\n}\nconsole.log(test(1));\nconsole.log(test(-1));",
    "o": "검사 끝\n좋아요\n검사 끝\n음수 안 돼요"
   },
   {
    "t": "`throw new Error(\"메시지\")`로 내가 직접 오류를 일으킬 수 있어요. 잘못된 값을 받았을 때 알려 주는 용도예요.",
    "c": "function divide(a, b) {\n  if (b === 0) throw new RangeError(\"0으로 나눌 수 없어요\");\n  return a / b;\n}\ntry {\n  divide(1, 0);\n} catch (e) {\n  console.log(e.name, e.message);\n}",
    "o": "RangeError 0으로 나눌 수 없어요"
   }
  ],
  "tip": "try에서 오류가 나면 아래 줄은 건너뛰고 catch로. finally는 항상 마지막에 실행돼요."
 },
 {
  "id": "e02",
  "unit": "async",
  "part": "활용 · 비동기와 오류 처리",
  "title": "setTimeout과 실행 순서",
  "sum": "기다리는 일은 나중에, 지금 할 일 먼저",
  "topics": "setTimeout|setInterval|clearTimeout|실행 순서|비동기|이벤트 루프|대기열|동기",
  "figs": [
   {
    "pic": "<svg viewBox=\"0 0 320 150\"><rect class=\"b\" x=\"10\" y=\"10\" width=\"140\" height=\"130\" rx=\"10\"/><text class=\"m\" x=\"80\" y=\"28\">지금 할 일 (콜 스택)</text>\n<rect class=\"b\" x=\"170\" y=\"10\" width=\"140\" height=\"130\" rx=\"10\"/><text class=\"m\" x=\"240\" y=\"28\">기다리는 줄 (대기열)</text>\n<rect class=\"h\" x=\"25\" y=\"40\" width=\"110\" height=\"26\" rx=\"6\" data-o=\"0\"/><text x=\"80\" y=\"58\" data-o=\"0\">log(\"A\")</text>\n<rect class=\"gs\" x=\"185\" y=\"40\" width=\"110\" height=\"26\" rx=\"6\" data-o=\"1 2\"/><text x=\"240\" y=\"58\" data-o=\"1 2\">log(\"B\")</text><text class=\"m\" x=\"240\" y=\"82\" data-o=\"1\">0초 지나면 줄 서요</text>\n<rect class=\"h\" x=\"25\" y=\"40\" width=\"110\" height=\"26\" rx=\"6\" data-o=\"2\"/><text x=\"80\" y=\"58\" data-o=\"2\">log(\"C\")</text>\n<rect class=\"h\" x=\"25\" y=\"40\" width=\"110\" height=\"26\" rx=\"6\" data-o=\"3\"/><text x=\"80\" y=\"58\" data-o=\"3\">log(\"B\")</text><text class=\"m\" x=\"80\" y=\"100\" data-o=\"3\">지금 할 일이 다 끝나야</text><text class=\"m\" x=\"80\" y=\"116\" data-o=\"3\">줄에서 꺼내 실행해요</text>\n<text class=\"k\" x=\"160\" y=\"146\" data-s=\"3\">출력: A → C → B</text></svg>",
    "steps": [
     "console.log(\"A\") 지금 바로 실행",
     "setTimeout(() => log(\"B\"), 0) → B는 기다리는 줄로",
     "console.log(\"C\") 지금 바로 실행",
     "지금 할 일이 끝나면 줄에 있던 B를 실행. 그래서 A, C, B"
    ]
   }
  ],
  "parts": [
   {
    "t": "`setTimeout(함수, 밀리초)`는 정한 시간이 지난 뒤에 함수를 실행해요 (1000 = 1초). 기다리는 동안 다른 코드를 먼저 실행해요. 이런 방식을 비동기라고 해요.",
    "c": "console.log(\"A\");\nsetTimeout(() => console.log(\"B\"), 100);\nconsole.log(\"C\");",
    "o": "A\nC\nB"
   },
   {
    "t": "시간을 0으로 줘도 바로 실행되지 않아요. 지금 하고 있는 코드가 모두 끝난 다음에 실행돼요.",
    "c": "setTimeout(() => console.log(\"0초 타이머\"), 0);\nfor (let i = 0; i < 3; i++) console.log(\"반복\", i);",
    "o": "반복 0\n반복 1\n반복 2\n0초 타이머"
   },
   {
    "t": "시간이 짧은 타이머부터 실행돼요. `setInterval`은 정한 시간마다 반복하고, `clearTimeout`·`clearInterval`로 멈춰요.",
    "c": "setTimeout(() => console.log(\"200\"), 200);\nsetTimeout(() => console.log(\"50\"), 50);\nlet n = 0;\nconst id = setInterval(() => {\n  n++;\n  console.log(\"틱\", n);\n  if (n === 2) clearInterval(id);\n}, 60);",
    "o": "50\n틱 1\n틱 2\n200"
   }
  ],
  "tip": "setTimeout은 0초여도 지금 코드가 다 끝난 뒤에 실행돼요. 그래서 A 출력, 타이머 B, C 출력 순으로 쓰면 A → C → B예요."
 },
 {
  "id": "e03",
  "unit": "async",
  "part": "활용 · 비동기와 오류 처리",
  "title": "Promise: 나중에 올 결과",
  "sum": "약속 객체, then·catch·finally, 마이크로태스크",
  "topics": "Promise|then|catch|resolve|reject|마이크로|Promise\\.all|Promise\\.race|체이닝 then",
  "parts": [
   {
    "t": "Promise(약속)는 '나중에 결과를 줄게'라는 객체예요. 성공하면 `resolve(값)`, 실패하면 `reject(오류)`를 불러요. 결과는 `.then(값 => ...)`으로, 실패는 `.catch(오류 => ...)`로 받아요.",
    "c": "const order = new Promise((resolve, reject) => {\n  setTimeout(() => resolve(\"피자 도착\"), 50);\n});\norder.then(food => console.log(food));\nconsole.log(\"주문 완료\");",
    "o": "주문 완료\n피자 도착"
   },
   {
    "t": "then은 새 Promise를 돌려줘서 이어 쓸 수 있어요. then에서 return한 값이 다음 then으로 가요. 중간에 오류가 나면 아래의 catch로 바로 건너뛰어요.",
    "c": "Promise.resolve(2)\n  .then(n => n * 10)\n  .then(n => {\n    if (n > 10) throw new Error(\"너무 커요\");\n    return n;\n  })\n  .then(n => console.log(\"여기는 건너뛰어요\", n))\n  .catch(e => console.log(\"실패:\", e.message))\n  .finally(() => console.log(\"끝\"));",
    "o": "실패: 너무 커요\n끝"
   },
   {
    "t": "Promise의 then은 setTimeout(0)보다 먼저 실행돼요. 둘 다 기다리는 줄에 서지만 Promise 쪽 줄(마이크로태스크)이 더 급한 줄이에요.",
    "c": "setTimeout(() => console.log(\"타이머\"), 0);\nPromise.resolve().then(() => console.log(\"약속\"));\nconsole.log(\"지금\");",
    "o": "지금\n약속\n타이머"
   },
   {
    "t": "`Promise.all([...])`은 모두 성공하면 결과를 배열로 순서대로 주고, 하나라도 실패하면 바로 실패해요.",
    "c": "const wait = (ms, v) => new Promise(r => setTimeout(() => r(v), ms));\nPromise.all([wait(80, \"가\"), wait(20, \"나\")]).then(r => console.log(r.join(\",\")));\nPromise.all([wait(10, 1), Promise.reject(new Error(\"하나 실패\"))]).catch(e => console.log(e.message));",
    "o": "하나 실패\n가,나"
   }
  ],
  "tip": "지금 코드 → Promise then → setTimeout 순서. Promise.all은 넣은 순서대로 결과를 줘요."
 },
 {
  "id": "e04",
  "unit": "async",
  "part": "활용 · 비동기와 오류 처리",
  "title": "async와 await",
  "sum": "Promise를 기다리는 코드를 위에서 아래로 읽히게",
  "topics": "async|await|async 함수 반환|await 오류|순차|병렬",
  "parts": [
   {
    "t": "함수 앞에 `async`를 붙이면 그 함수 안에서 `await`를 쓸 수 있어요. `await Promise`는 결과가 올 때까지 그 함수 안에서만 기다렸다가 값을 꺼내 줘요. 함수 바깥의 코드는 기다리지 않고 먼저 실행돼요.",
    "c": "const wait = ms => new Promise(r => setTimeout(r, ms));\nasync function cook() {\n  console.log(\"물 끓이기\");\n  await wait(50);\n  console.log(\"라면 넣기\");\n  return \"완성\";\n}\ncook().then(r => console.log(r));\nconsole.log(\"숟가락 놓기\");",
    "o": "물 끓이기\n숟가락 놓기\n라면 넣기\n완성"
   },
   {
    "t": "async 함수는 무엇을 return하든 항상 Promise를 돌려줘요. 그래서 결과는 then이나 await로 꺼내요.",
    "c": "async function getNum() {\n  return 7;\n}\nconst p = getNum();\nconsole.log(p instanceof Promise);\np.then(n => console.log(n));",
    "o": "true\n7"
   },
   {
    "t": "await한 Promise가 실패하면 그 자리에서 오류가 나요. 일반 오류처럼 try/catch로 잡아요.",
    "c": "async function load() {\n  try {\n    await Promise.reject(new Error(\"네트워크 끊김\"));\n    console.log(\"안 보여요\");\n  } catch (e) {\n    console.log(\"잡음:\", e.message);\n  }\n}\nload();",
    "o": "잡음: 네트워크 끊김"
   },
   {
    "t": "await를 하나씩 쓰면 차례대로 기다려서 시간이 더해져요. 서로 상관없는 일은 `Promise.all`로 한꺼번에 기다리면 빨라요.",
    "c": "const wait = (ms, v) => new Promise(r => setTimeout(() => r(v), ms));\nasync function main() {\n  const [a, b] = await Promise.all([wait(60, \"가\"), wait(30, \"나\")]);\n  console.log(a + b);\n}\nmain();",
    "o": "가나"
   }
  ],
  "tip": "async 함수는 항상 Promise를 돌려줘요. await는 그 함수 안에서만 기다리고, 실패는 try/catch로 잡아요."
 },
 {
  "id": "e05",
  "unit": "async",
  "part": "활용 · 비동기와 오류 처리",
  "title": "fetch로 데이터 받아 오기",
  "sum": "서버에 요청하고 JSON으로 받기",
  "topics": "fetch|response|json\\(\\)|API|요청",
  "parts": [
   {
    "t": "`fetch(주소)`는 서버에 데이터를 요청하고 Promise를 돌려줘요. 받은 응답(response)에서 `response.json()`을 부르면 JSON 글자를 객체로 바꿔 주는데, 이것도 Promise라서 한 번 더 기다려야 해요. 아래 예의 주소는 연습용 가짜 주소예요.",
    "mock": {
     "https://example.com/api/user": {
      "name": "민지",
      "level": 3
     }
    },
    "c": "async function showUser() {\n  const res = await fetch(\"https://example.com/api/user\");\n  const user = await res.json();\n  console.log(user.name, user.level);\n}\nshowUser();",
    "o": "민지 3"
   },
   {
    "t": "인터넷이 끊기는 등 요청이 실패하면 fetch의 Promise가 실패해요. 그래서 try/catch로 감싸요. (서버가 '없음(404)'이라고 답한 건 실패가 아니라서 `res.ok`로 따로 확인해요.)",
    "mock": {
     "https://example.com/api/list": [
      1,
      2,
      3
     ]
    },
    "c": "async function load(url) {\n  try {\n    const res = await fetch(url);\n    const data = await res.json();\n    return \"받음 \" + data.length + \"개\";\n  } catch (e) {\n    return \"실패: \" + e.name;\n  }\n}\nload(\"https://example.com/api/list\").then(console.log);\nload(\"https://no-server.example/api\").then(console.log); // 연결할 수 없는 주소",
    "o": "실패: TypeError\n받음 3개"
   }
  ],
  "tip": "fetch → await → res.json() → await. 두 번 기다려요. 요청 실패는 try/catch, 404 같은 응답은 res.ok로 확인."
 }
];

window.JS_TRAPS = [
 {
  "id": "t01",
  "title": "== 는 종류를 바꿔서 비교해요",
  "body": "`==`는 종류가 다르면 같은 종류로 바꾼 다음 비교해서 뜻밖에 true가 나와요. `===`는 값과 종류가 모두 같아야 true예요. 항상 `===`를 쓰세요. 예외: null과 undefined는 `==`로만 서로 같아요.",
  "ex": "5 == \"5\" → true\n5 === \"5\" → false\n0 == false → true\n\"\" == 0 → true\nnull == undefined → true\nnull === undefined → false\nnull == 0 → false"
 },
 {
  "id": "t02",
  "title": "+ 는 문자열이 하나라도 있으면 붙이기",
  "body": "`+`는 한쪽이라도 문자열이면 글자를 붙여요. `-`, `*`, `/`는 문자열을 숫자로 바꿔서 계산해요. 계산은 왼쪽부터라서 순서에 따라 결과가 달라져요. 입력값(value)은 늘 문자열이니 Number()로 바꾼 뒤 더하세요.",
  "ex": "\"5\" + 3 → \"53\"\n\"5\" - 3 → 2\n\"5\" * \"2\" → 10\n1 + 2 + \"3\" → \"33\"\n\"1\" + 2 + 3 → \"123\"\n\"a\" - 1 → NaN"
 },
 {
  "id": "t03",
  "title": "소수 계산에는 작은 오차가 있어요",
  "body": "컴퓨터는 소수를 2진수로 저장해서 0.1 같은 수를 정확히 담지 못해요. 그래서 `0.1 + 0.2 === 0.3`이 false예요. 돈 계산은 원 단위 정수로 하고, 보여 줄 때는 `toFixed()`로 자릿수를 맞춰요.",
  "ex": "0.1 + 0.2 → 0.30000000000000004\n0.1 + 0.2 === 0.3 → false\n(0.1 + 0.2).toFixed(2) → \"0.30\"\n(1 + 2) / 10 === 0.3 → true"
 },
 {
  "id": "t04",
  "title": "typeof null은 \"object\"",
  "body": "`typeof`는 대부분 예상대로 나오지만 null은 \"object\"가 나와요 (처음 만들 때 생긴 실수). 배열도 \"object\"라서 배열인지는 `Array.isArray()`로, null인지는 `=== null`로 확인해요. 함수는 \"function\"이에요.",
  "ex": "typeof null → \"object\"\ntypeof [] → \"object\"\nArray.isArray([]) → true\ntypeof undefined → \"undefined\"\ntypeof function () {} → \"function\"\ntypeof NaN → \"number\""
 },
 {
  "id": "t05",
  "title": "NaN은 자기 자신과도 같지 않아요",
  "body": "NaN(숫자가 아님)은 어떤 값과도, 자기 자신과도 같지 않아요. 그래서 `x === NaN`은 늘 false예요. NaN인지는 `Number.isNaN(x)`로 확인해요. NaN이 섞인 계산의 결과는 또 NaN이에요.",
  "ex": "NaN === NaN → false\nNumber.isNaN(NaN) → true\nNumber(\"12a\") → NaN\nNaN + 1 → NaN\n[NaN].includes(NaN) → true\n[NaN].indexOf(NaN) → -1"
 },
 {
  "id": "t06",
  "title": "거짓 같은 값 6개 외우기",
  "body": "조건에서 거짓으로 치는 값은 `false`, `0`, `\"\"`, `null`, `undefined`, `NaN` 여섯 개를 외우면 돼요 (그 밖에 `0n` 같은 드문 값도 있어요). 나머지는 모두 참이에요. 특히 문자열 \"0\", \"false\", 빈 배열 [], 빈 객체 {}는 참이에요.",
  "ex": "Boolean(\"0\") → true\nBoolean(\"false\") → true\nBoolean([]) → true\nBoolean({}) → true\nBoolean(0) → false\nBoolean(\" \") → true"
 },
 {
  "id": "t07",
  "title": "|| 와 ?? 는 기본값 규칙이 달라요",
  "body": "`a || b`는 a가 거짓 같은 값(0, 빈 문자열 포함)이면 b를 써요. `a ?? b`는 a가 null이나 undefined일 때만 b를 써요. 0점이나 빈 이름을 그대로 살리고 싶으면 `??`를 써요.",
  "ex": "0 || 100 → 100\n0 ?? 100 → 0\n\"\" || \"손님\" → \"손님\"\n\"\" ?? \"손님\" → \"\"\nnull ?? \"손님\" → \"손님\"\nfalse ?? true → false"
 },
 {
  "id": "t08",
  "title": "const도 안의 내용은 바뀌어요",
  "body": "`const`가 막는 건 변수에 다른 값을 '다시 넣기'예요. const로 만든 배열에 push하거나 객체의 속성을 바꾸는 건 돼요. 겉 속성까지 못 바꾸게 하려면 `Object.freeze()`를 써요 (안쪽 객체까지 얼리지는 않아요)."
 },
 {
  "id": "t09",
  "title": "var + 반복 + 타이머 = 같은 값만",
  "body": "`var`는 반복문 전체에 변수가 하나뿐이라, 타이머가 나중에 실행될 때는 반복이 다 끝난 뒤의 값(조건이 거짓이 된 3)만 보여요. `let`은 반복할 때마다 새 변수가 생겨서 그 차례의 값을 기억해요.",
  "ex": "for (var i = 0; i < 3; i++) setTimeout(() => console.log(i));\n// 3 3 3\nfor (let i = 0; i < 3; i++) setTimeout(() => console.log(i));\n// 0 1 2"
 },
 {
  "id": "t10",
  "title": "선언 전에 쓰면: var는 undefined, let은 오류",
  "body": "`function` 선언은 위에서 불러도 되고, `var`는 이름만 먼저 생겨서 undefined가 나오고, `let`·`const`는 선언 줄 전에 쓰면 ReferenceError예요. const로 만든 화살표 함수도 선언 전에 부르면 오류예요."
 },
 {
  "id": "t11",
  "title": "sort()는 글자 순서로 정렬해요",
  "body": "`sort()`에 아무것도 안 넣으면 값을 문자열로 바꿔서 사전 순서로 정렬해요. 그래서 숫자 10이 9보다 앞에 와요. 숫자는 `sort((a, b) => a - b)`. 그리고 sort는 원본 배열을 바꿔요.",
  "ex": "[10, 9, 1].sort() → [1, 10, 9]\n[10, 9, 1].sort((a, b) => a - b) → [1, 9, 10]\n[10, 9, 1].sort((a, b) => b - a) → [10, 9, 1]\n[\"b\", \"a\", \"C\"].sort() → [\"C\", \"a\", \"b\"]"
 },
 {
  "id": "t12",
  "title": "객체를 복사한 줄 알았는데 같은 상자",
  "body": "`const b = a`는 객체를 복사하지 않고 같은 상자를 가리키게 해요. `{ ...a }`는 겉만 새 상자라서 안쪽 객체는 여전히 같이 써요. 안쪽까지 새로 만들려면 `structuredClone(a)`."
 },
 {
  "id": "t13",
  "title": "화살표 함수에는 자기 this가 없어요",
  "body": "화살표 함수는 this를 따로 갖지 않고 바깥의 this를 그대로 써요. 그래서 객체의 메서드를 화살표 함수로 만들면 this가 그 객체가 아니에요. 반대로 메서드 안의 콜백은 화살표 함수가 편해요."
 },
 {
  "id": "t14",
  "title": "for...in은 키, for...of는 값",
  "body": "`for...of`는 배열의 값을, `for...in`은 객체의 키를 꺼내요. 배열에 for...in을 쓰면 번호가 나오는데 그 번호는 숫자가 아니라 문자열이에요. 그래서 i + 1이 \"01\"처럼 붙어 버려요. 객체에는 for...of를 바로 못 써요."
 },
 {
  "id": "t15",
  "title": "switch에서 break를 빼먹으면",
  "body": "`switch`는 맞는 case부터 실행해서 `break`를 만날 때까지 아래 case들도 계속 실행해요. case마다 break를 쓰거나 return으로 끝내요. 비교는 ===라서 \"1\"과 1은 다른 case예요."
 },
 {
  "id": "t16",
  "title": "Promise는 setTimeout(0)보다 먼저",
  "body": "실행 순서는 ① 지금 코드 전부 → ② Promise의 then·await 뒤 (급한 줄, 마이크로태스크) → ③ setTimeout (보통 줄) 이에요. 시간을 0으로 줘도 setTimeout은 맨 나중이에요. new Promise 안의 함수는 바로 실행돼요.",
  "ex": "console.log(1);\nsetTimeout(() => console.log(2), 0);\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);\n// 1 4 3 2"
 },
 {
  "id": "t17",
  "title": "map(parseInt)의 함정",
  "body": "map은 콜백에 (값, 번호, 배열) 세 개를 넘겨줘요. parseInt는 두 번째 값을 '몇 진법인지'로 써서 `[\"1\", \"2\", \"3\"].map(parseInt)`가 [1, NaN, NaN]이 돼요. `map(Number)`나 `map(s => parseInt(s))`처럼 써요.",
  "ex": "[\"1\", \"2\", \"3\"].map(parseInt) → [1, NaN, NaN]\n[\"1\", \"2\", \"3\"].map(Number) → [1, 2, 3]\n[\"1\", \"2\", \"3\"].map(s => parseInt(s)) → [1, 2, 3]\nparseInt(\"11\", 2) → 3"
 },
 {
  "id": "t18",
  "title": "화살표 함수에서 객체 돌려주기",
  "body": "화살표 함수에서 `=>` 뒤의 중괄호는 '객체'가 아니라 '함수 본문'으로 읽혀요. 그래서 `() => { a: 1 }`은 undefined를 돌려줘요. 객체를 돌려주려면 소괄호로 감싸 `() => ({ a: 1 })`. 본문 중괄호를 쓰면 return을 꼭 적어요."
 },
 {
  "id": "t19",
  "title": "forEach는 아무것도 돌려주지 않아요",
  "body": "`forEach`는 값마다 실행만 하고 늘 undefined를 돌려줘요. 새 배열이 필요하면 `map`, 고르려면 `filter`. forEach 안의 return은 그 차례만 끝낼 뿐 반복 전체를 멈추지 못해요 (break도 못 써요). 멈춰야 하면 for...of + break."
 },
 {
  "id": "t20",
  "title": "문자열 비교와 문자열은 못 바꿔요",
  "body": "문자열끼리 크기를 비교하면 숫자 크기가 아니라 사전 순서(한 글자씩)라서 \"10\" < \"9\"가 true예요. 그리고 문자열은 `s[0] = \"x\"`처럼 글자 하나를 바꿀 수 없어요 (보통은 조용히 무시되고, 엄격 모드에서는 TypeError가 나요). 문자열 메서드는 늘 새 문자열을 돌려줘요.",
  "ex": "\"10\" < \"9\" → true\n10 < 9 → false\n\"10\" < 9 → false\n\"B\" < \"a\" → true\n\"abc\".toUpperCase() → \"ABC\""
 }
];

window.JS_QUESTIONS = [
 {
  "id": "var-01",
  "unit": "var",
  "freq": "high",
  "subject": 1,
  "topic": "console.log",
  "q": "출력 결과는?",
  "code": "console.log(\"합계:\", 2 + 3);",
  "options": [
   "합계: 2 + 3",
   "합계: 5",
   "합계:5",
   "\"합계:\" 5"
  ],
  "answer": 2,
  "exp": "쉼표로 여러 값을 주면 한 칸 띄어 이어서 보여 줘요. 2 + 3은 계산된 5가 나와요.",
  "why": [
   "따옴표 밖의 2 + 3은 계산돼서 5가 돼요.",
   "",
   "쉼표로 나눈 값 사이에는 빈칸이 하나 들어가요.",
   "문자열은 따옴표 없이 내용만 보여요."
  ],
  "check": {}
 },
 {
  "id": "var-02",
  "unit": "var",
  "freq": "high",
  "subject": 1,
  "topic": "재할당",
  "q": "출력 결과는?",
  "code": "let score = 10;\nscore = score + 5;\nscore = 3;\nconsole.log(score);",
  "options": [
   "3",
   "15",
   "18",
   "10"
  ],
  "answer": 1,
  "exp": "변수에는 마지막에 넣은 값만 남아요. 15가 됐다가 3을 다시 넣었어요.",
  "why": [
   "",
   "15 뒤에 3을 다시 넣어서 15는 사라졌어요.",
   "다시 넣기는 더하기가 아니라 바꿔 넣기예요.",
   "처음 값 10은 두 번 바뀌었어요."
  ],
  "check": {}
 },
 {
  "id": "var-03",
  "unit": "var",
  "freq": "high",
  "subject": 1,
  "topic": "const",
  "q": "실행하면 어떻게 되는가?",
  "code": "const max = 100;\nmax = 200;\nconsole.log(max);",
  "options": [
   "200이 출력된다",
   "100이 출력된다",
   "TypeError 오류가 난다",
   "undefined가 출력된다"
  ],
  "answer": 3,
  "exp": "const로 만든 변수에 다시 넣으면 TypeError(Assignment to constant variable)가 나고, 그 아래는 실행되지 않아요.",
  "why": [
   "const는 다시 넣을 수 없어서 200으로 바뀌지 않아요.",
   "오류가 난 줄에서 멈춰서 console.log까지 가지 않아요.",
   "",
   "값이 사라지지 않고 오류로 멈춰요."
  ],
  "check": {
   "err": "TypeError"
  }
 },
 {
  "id": "var-04",
  "unit": "var",
  "freq": "mid",
  "subject": 1,
  "topic": "let 초기화",
  "q": "출력 결과는?",
  "code": "let box;\nconsole.log(box);",
  "options": [
   "null",
   "undefined",
   "0",
   "ReferenceError 오류"
  ],
  "answer": 2,
  "exp": "값 없이 만든 let 변수에는 undefined가 들어 있어요.",
  "why": [
   "null은 누군가 일부러 넣어야 생겨요.",
   "",
   "숫자 0이 자동으로 들어가지 않아요.",
   "변수는 만들어졌으니 이름 오류가 아니에요."
  ],
  "check": {}
 },
 {
  "id": "var-05",
  "unit": "var",
  "freq": "high",
  "subject": 1,
  "topic": "이름 규칙",
  "q": "변수 이름으로 쓸 수 있는 것은?",
  "options": [
   "1user",
   "user-name",
   "class",
   "user_name1"
  ],
  "answer": 4,
  "exp": "영어, 숫자, _, $를 쓸 수 있고 숫자로 시작하지만 않으면 돼요.",
  "why": [
   "숫자로 시작하는 이름은 쓸 수 없어요.",
   "- 기호는 빼기로 읽혀서 이름에 못 써요.",
   "class는 자바스크립트가 쓰는 예약어예요.",
   ""
  ],
  "check": {
   "assert": "const assert = require('assert');\nnew Function('let user_name1 = 1;');\nfor (const bad of ['let 1user = 1;', 'let user-name = 1;', 'let class = 1;']) assert.throws(() => new Function(bad), SyntaxError);"
  }
 },
 {
  "id": "var-06",
  "unit": "var",
  "freq": "mid",
  "subject": 1,
  "topic": "대소문자",
  "q": "실행하면 어떻게 되는가?",
  "code": "let name = \"민지\";\nconsole.log(Name);",
  "options": [
   "ReferenceError 오류가 난다",
   "민지가 출력된다",
   "undefined가 출력된다",
   "Name이 출력된다"
  ],
  "answer": 1,
  "exp": "자바스크립트는 대소문자를 구분해서 name과 Name은 다른 이름이에요. Name은 만든 적이 없어서 ReferenceError예요.",
  "why": [
   "",
   "Name과 name은 다른 변수예요.",
   "만든 적 없는 이름은 undefined가 아니라 오류예요.",
   "따옴표가 없으니 글자 Name이 아니라 변수 이름이에요."
  ],
  "check": {
   "err": "ReferenceError"
  }
 },
 {
  "id": "var-07",
  "unit": "var",
  "freq": "mid",
  "subject": 1,
  "topic": "var 다시 선언",
  "q": "출력 결과는?",
  "code": "var color = \"빨강\";\nvar color = \"파랑\";\nconsole.log(color);",
  "options": [
   "빨강",
   "SyntaxError 오류",
   "빨강 파랑",
   "파랑"
  ],
  "answer": 4,
  "exp": "var는 같은 이름으로 또 만들어도 오류가 나지 않고 마지막 값이 남아요.",
  "why": [
   "두 번째 줄에서 값이 파랑으로 바뀌었어요.",
   "오류는 let·const로 두 번 만들 때 나요.",
   "변수 하나에는 값 하나만 들어 있어요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "var-08",
  "unit": "var",
  "freq": "mid",
  "subject": 1,
  "topic": "다시 선언 (let)",
  "q": "실행하면 어떻게 되는가?",
  "code": "let color = \"빨강\";\nlet color = \"파랑\";\nconsole.log(color);",
  "options": [
   "파랑이 출력된다",
   "빨강이 출력된다",
   "undefined가 출력된다",
   "SyntaxError 오류가 나서 아무것도 실행되지 않는다"
  ],
  "answer": 4,
  "exp": "같은 범위에서 let으로 같은 이름을 두 번 만들면 문법 오류(SyntaxError)라서 코드 전체가 실행되지 않아요.",
  "why": [
   "let은 다시 만들기를 허락하지 않아요.",
   "문법 오류는 실행 전에 걸려서 첫 줄도 실행되지 않아요.",
   "값이 비는 게 아니라 오류예요.",
   ""
  ],
  "check": {
   "err": "SyntaxError"
  }
 },
 {
  "id": "var-09",
  "unit": "var",
  "freq": "high",
  "subject": 1,
  "topic": "값 복사",
  "q": "출력 결과는?",
  "code": "let a = 1;\nlet b = a;\na = 5;\nconsole.log(b);",
  "options": [
   "5",
   "1",
   "undefined",
   "6"
  ],
  "answer": 2,
  "exp": "숫자는 b = a 할 때 값 1이 복사돼요. 그 뒤 a를 바꿔도 b는 1 그대로예요.",
  "why": [
   "숫자는 값 자체가 복사돼서 a를 바꿔도 b는 안 바뀌어요.",
   "",
   "b에는 1이 들어 있어요.",
   "더하기를 한 적이 없어요."
  ],
  "check": {}
 },
 {
  "id": "var-10",
  "unit": "var",
  "freq": "mid",
  "subject": 1,
  "topic": "값 바꾸기",
  "q": "a와 b의 값을 서로 바꾸고 나서 출력하면?",
  "code": "let a = 1;\nlet b = 2;\nlet temp = a;\na = b;\nb = temp;\nconsole.log(a, b);",
  "options": [
   "1 2",
   "2 1",
   "2 2",
   "1 1"
  ],
  "answer": 2,
  "exp": "temp에 a(1)를 잠깐 보관하고, a에 b(2), b에 temp(1)를 넣어서 서로 바뀌었어요.",
  "why": [
   "temp를 써서 실제로 서로 바꿨어요.",
   "",
   "b에는 보관해 둔 1이 들어가요.",
   "a에는 b의 값 2가 들어가요."
  ],
  "check": {}
 },
 {
  "id": "var-11",
  "unit": "var",
  "freq": "high",
  "subject": 1,
  "topic": "주석",
  "q": "출력 결과는?",
  "code": "console.log(\"하나\"); // console.log(\"둘\");\n/* console.log(\"셋\"); */\nconsole.log(\"넷\");",
  "options": [
   "하나\n둘\n셋\n넷",
   "하나\n넷",
   "하나\n셋\n넷",
   "넷"
  ],
  "answer": 2,
  "exp": "// 뒤와 /* */ 사이는 주석이라 실행되지 않아요.",
  "why": [
   "주석 안의 코드는 실행되지 않아요.",
   "",
   "/* */ 사이도 주석이에요.",
   "첫 줄의 // 앞부분은 실행돼요."
  ],
  "check": {}
 },
 {
  "id": "var-12",
  "unit": "var",
  "freq": "mid",
  "subject": 1,
  "topic": "대입",
  "q": "`x = x + 1`의 뜻으로 알맞은 것은?",
  "options": [
   "x와 x + 1이 같은지 비교한다",
   "x가 1인지 확인한다",
   "x에 1을 더한 값을 다시 x에 넣는다",
   "오류가 나는 식이다"
  ],
  "answer": 3,
  "exp": "=는 '같다'가 아니라 '오른쪽 값을 왼쪽에 넣어라'예요. 오른쪽 x + 1을 먼저 계산해서 x에 넣어요.",
  "why": [
   "같은지 비교는 ===예요.",
   "=는 확인하는 게 아니라 넣는 기호예요.",
   "",
   "자주 쓰는 올바른 식이에요."
  ],
  "check": {
   "assert": "const assert = require('assert');\nlet x = 4;\nx = x + 1;\nassert.strictEqual(x, 5);"
  }
 },
 {
  "id": "var-13",
  "unit": "var",
  "freq": "low",
  "subject": 1,
  "topic": "여러 변수",
  "q": "출력 결과는?",
  "code": "let a = 2, b = a * 3, c = a + b;\nconsole.log(c);",
  "options": [
   "6",
   "5",
   "8",
   "NaN"
  ],
  "answer": 3,
  "exp": "쉼표로 여러 변수를 한 줄에 만들 수 있어요. 왼쪽부터 a = 2, b = 6, c = 8이에요.",
  "why": [
   "6은 b의 값이에요.",
   "c는 a + b = 2 + 6이에요.",
   "",
   "앞에서 만든 변수를 바로 써도 돼요."
  ],
  "check": {}
 },
 {
  "id": "var-14",
  "unit": "var",
  "freq": "mid",
  "subject": 1,
  "topic": "const 쓰임",
  "q": "let과 const 중 const를 쓰기 알맞은 것은?",
  "options": [
   "바뀌지 않는 세금 비율 0.1",
   "게임에서 계속 올라가는 점수",
   "반복할 때마다 1씩 커지는 횟수",
   "버튼을 누를 때마다 바뀌는 글자"
  ],
  "answer": 1,
  "exp": "const는 다시 넣을 수 없어서, 처음 정한 뒤 바뀌지 않는 값에 써요.",
  "why": [
   "",
   "점수는 계속 바뀌어서 let이 맞아요.",
   "횟수는 커져야 하니 let이 맞아요.",
   "바뀌는 글자도 let이 맞아요."
  ]
 },
 {
  "id": "var-15",
  "unit": "var",
  "freq": "low",
  "subject": 1,
  "topic": "실행 순서",
  "q": "출력 결과는?",
  "code": "let msg = \"A\";\nconsole.log(msg);\nmsg = \"B\";\nconsole.log(msg);\nmsg = \"C\";",
  "options": [
   "A\nB",
   "C\nC",
   "A\nB\nC",
   "B\nC"
  ],
  "answer": 1,
  "exp": "코드는 위에서 아래로 실행돼요. console.log가 두 번이라 그때그때의 값 A, B가 나와요. C를 넣은 뒤에는 출력이 없어요.",
  "why": [
   "",
   "출력할 때의 값이 나와요. 나중에 넣은 C는 앞의 출력에 영향이 없어요.",
   "console.log는 두 번뿐이에요.",
   "첫 출력은 A일 때예요."
  ],
  "check": {}
 },
 {
  "id": "type-01",
  "unit": "type",
  "freq": "high",
  "subject": 1,
  "topic": "typeof",
  "q": "출력 결과는?",
  "code": "console.log(typeof \"123\");",
  "options": [
   "string",
   "number",
   "123",
   "object"
  ],
  "answer": 1,
  "exp": "따옴표로 감쌌으니 숫자처럼 보여도 문자열이에요.",
  "why": [
   "",
   "따옴표 안의 123은 숫자가 아니라 글자예요.",
   "typeof는 값이 아니라 종류 이름을 돌려줘요.",
   "문자열의 typeof는 \"string\"이에요."
  ],
  "check": {}
 },
 {
  "id": "type-02",
  "unit": "type",
  "freq": "mid",
  "subject": 1,
  "topic": "typeof",
  "q": "출력 결과는?",
  "code": "console.log(typeof 3.14, typeof -5);",
  "options": [
   "float number",
   "number number",
   "number int",
   "float int"
  ],
  "answer": 2,
  "exp": "자바스크립트는 정수와 소수를 나누지 않고 모두 number예요.",
  "why": [
   "\"float\"라는 typeof 결과는 없어요.",
   "",
   "\"int\"라는 typeof 결과도 없어요.",
   "둘 다 number예요."
  ],
  "check": {}
 },
 {
  "id": "type-03",
  "unit": "type",
  "freq": "high",
  "subject": 1,
  "topic": "Number() 변환",
  "q": "출력 결과는?",
  "code": "console.log(Number(\"3\") + 2);",
  "options": [
   "32",
   "NaN",
   "\"5\"",
   "5"
  ],
  "answer": 4,
  "exp": "Number(\"3\")은 숫자 3이 돼서 3 + 2 = 5예요.",
  "why": [
   "Number로 먼저 숫자로 바꿔서 붙이기가 아니에요.",
   "\"3\"은 숫자로 바꿀 수 있어요.",
   "결과는 숫자 5이고, 출력에는 따옴표가 안 붙어요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "type-04",
  "unit": "type",
  "freq": "high",
  "subject": 1,
  "topic": "String() 변환",
  "q": "출력 결과는?",
  "code": "console.log(String(5) + 5);",
  "options": [
   "55",
   "10",
   "NaN",
   "5 5"
  ],
  "answer": 1,
  "exp": "String(5)는 문자열 \"5\"라서 + 5는 붙이기가 돼요.",
  "why": [
   "",
   "한쪽이 문자열이라 더하기가 아니에요.",
   "숫자와 문자열은 붙일 수 있어요.",
   "+는 빈칸 없이 붙여요."
  ],
  "check": {}
 },
 {
  "id": "type-05",
  "unit": "type",
  "freq": "high",
  "subject": 1,
  "topic": "parseInt",
  "q": "출력 결과는?",
  "code": "console.log(parseInt(\"12.7cm\"));",
  "options": [
   "12.7",
   "13",
   "12",
   "NaN"
  ],
  "answer": 3,
  "exp": "parseInt는 앞에서부터 정수로 읽을 수 있는 데까지만 읽어요. 점(.)에서 멈춰서 12예요. 반올림하지 않아요.",
  "why": [
   "소수까지 읽는 건 parseFloat예요.",
   "parseInt는 반올림하지 않고 잘라요.",
   "",
   "앞부분 12는 숫자로 읽을 수 있어요."
  ],
  "check": {}
 },
 {
  "id": "type-06",
  "unit": "type",
  "freq": "mid",
  "subject": 1,
  "topic": "NaN 숫자 변환",
  "q": "출력 결과는?",
  "code": "console.log(Number(\"12px\"));",
  "options": [
   "12",
   "0",
   "12px",
   "NaN"
  ],
  "answer": 4,
  "exp": "Number는 문자열 전체가 숫자여야 바꿀 수 있어요. 끝에 px가 있어서 NaN이에요.",
  "why": [
   "앞 숫자만 읽는 건 parseInt예요.",
   "못 바꾸면 0이 아니라 NaN이에요.",
   "Number의 결과는 숫자(또는 NaN)예요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "type-07",
  "unit": "type",
  "freq": "low",
  "subject": 1,
  "topic": "숫자 변환",
  "q": "출력 결과는?",
  "code": "console.log(Number(\"\"), Number(\" \"), Number(null));",
  "options": [
   "NaN NaN 0",
   "0 NaN NaN",
   "0 0 0",
   "NaN NaN NaN"
  ],
  "answer": 3,
  "exp": "빈 문자열과 빈칸만 있는 문자열은 0이 되고, null도 0이 돼요.",
  "why": [
   "빈 문자열은 NaN이 아니라 0이에요.",
   "빈칸만 있어도 0이고, null도 0이에요.",
   "",
   "셋 모두 0이 돼요."
  ],
  "check": {}
 },
 {
  "id": "type-08",
  "unit": "type",
  "freq": "mid",
  "subject": 1,
  "topic": "Boolean 변환 !!",
  "q": "출력 결과는?",
  "code": "console.log(!!null, !!\"a\", !!0);",
  "options": [
   "true true false",
   "false true false",
   "false true true",
   "null a 0"
  ],
  "answer": 2,
  "exp": "!!는 참·거짓으로 바꿔요. null과 0은 거짓 같은 값, \"a\"는 참이에요.",
  "why": [
   "null은 거짓 같은 값이에요.",
   "",
   "0은 거짓 같은 값이에요.",
   "!!는 원래 값이 아니라 true/false를 돌려줘요."
  ],
  "check": {}
 },
 {
  "id": "type-09",
  "unit": "type",
  "freq": "low",
  "subject": 1,
  "topic": "숫자 변환",
  "q": "출력 결과는?",
  "code": "console.log(Number(true) + Number(false) + Number(null));",
  "options": [
   "1",
   "2",
   "NaN",
   "truefalsenull"
  ],
  "answer": 1,
  "exp": "Number(true)는 1, false는 0, null은 0이라 합은 1이에요.",
  "why": [
   "",
   "false와 null은 둘 다 0이에요.",
   "셋 다 숫자로 바뀌어서 NaN이 아니에요.",
   "Number로 바꾼 뒤 숫자 더하기를 해요."
  ],
  "check": {}
 },
 {
  "id": "type-10",
  "unit": "type",
  "freq": "low",
  "subject": 1,
  "topic": "typeof",
  "q": "출력 결과는?",
  "code": "console.log(typeof typeof 1);",
  "options": [
   "number",
   "string",
   "typeof",
   "undefined"
  ],
  "answer": 2,
  "exp": "typeof 1은 문자열 \"number\"예요. 그 문자열의 typeof는 \"string\"이에요.",
  "why": [
   "안쪽 typeof의 결과 \"number\"는 문자열이에요.",
   "",
   "typeof는 \"typeof\"를 돌려주지 않아요.",
   "결과는 문자열 하나라 undefined가 아니에요."
  ],
  "check": {}
 },
 {
  "id": "type-11",
  "unit": "type",
  "freq": "mid",
  "subject": 1,
  "topic": "Infinity",
  "q": "출력 결과는?",
  "code": "console.log(10 / 0, -10 / 0);",
  "options": [
   "Infinity -Infinity",
   "오류가 난다",
   "0 0",
   "NaN NaN"
  ],
  "answer": 1,
  "exp": "0으로 나누면 오류 대신 Infinity(무한대)가 나와요. 음수를 나누면 -Infinity예요.",
  "why": [
   "",
   "자바스크립트는 0으로 나눠도 오류를 내지 않아요.",
   "0이 아니라 무한대예요.",
   "NaN은 0 / 0처럼 답을 정할 수 없을 때예요."
  ],
  "check": {}
 },
 {
  "id": "type-12",
  "unit": "type",
  "freq": "mid",
  "subject": 1,
  "topic": "toString",
  "q": "출력 결과는?",
  "code": "const n = 7;\nconsole.log(n.toString() + 3, typeof n);",
  "options": [
   "73 number",
   "10 number",
   "73 string",
   "10 string"
  ],
  "answer": 1,
  "exp": "toString()은 \"7\"이라는 새 문자열을 돌려줘서 + 3은 붙이기예요. 원래 n은 그대로 숫자예요.",
  "why": [
   "",
   "\"7\" + 3은 붙이기라 10이 아니에요.",
   "toString은 n 자체를 바꾸지 않아서 n은 여전히 number예요.",
   "붙이기 결과는 73이고 n은 number예요."
  ],
  "check": {}
 },
 {
  "id": "type-13",
  "unit": "type",
  "freq": "mid",
  "subject": 1,
  "topic": "자동 변환",
  "q": "출력 결과는?",
  "code": "console.log(\"6\" / \"2\", \"6\" * 1);",
  "options": [
   "NaN 6",
   "3 61",
   "3 6",
   "62 6"
  ],
  "answer": 3,
  "exp": "/와 *는 문자열을 숫자로 바꿔서 계산해요.",
  "why": [
   "\"6\"과 \"2\"는 숫자로 바꿀 수 있어서 NaN이 아니에요.",
   "*는 붙이기를 하지 않아요.",
   "",
   "/는 나누기라 3이에요."
  ],
  "check": {}
 },
 {
  "id": "type-14",
  "unit": "type",
  "freq": "high",
  "subject": 1,
  "topic": "null",
  "q": "'일부러 값이 없다고 비워 둘 때' 넣는 값은?",
  "options": [
   "undefined",
   "null",
   "NaN",
   "0"
  ],
  "answer": 2,
  "exp": "null은 개발자가 '비어 있음'을 일부러 표시할 때 넣어요. undefined는 아직 값을 안 넣은 상태예요.",
  "why": [
   "undefined는 값을 넣지 않았을 때 자동으로 있는 값이에요.",
   "",
   "NaN은 숫자 계산에 실패했다는 뜻이에요.",
   "0은 숫자 값이 있는 거예요."
  ]
 },
 {
  "id": "type-15",
  "unit": "type",
  "freq": "low",
  "subject": 1,
  "topic": "isNaN",
  "q": "출력 결과는?",
  "code": "console.log(isNaN(\"abc\"), Number.isNaN(\"abc\"));",
  "options": [
   "true false",
   "true true",
   "false false",
   "false true"
  ],
  "answer": 1,
  "exp": "isNaN은 먼저 숫자로 바꿔 보고 NaN인지 봐서 true예요. Number.isNaN은 값이 진짜 NaN일 때만 true라서 문자열 \"abc\"는 false예요.",
  "why": [
   "",
   "Number.isNaN은 바꾸지 않고 봐서 문자열은 false예요.",
   "isNaN은 \"abc\"를 숫자로 바꾸면 NaN이라 true예요.",
   "반대예요. isNaN이 true, Number.isNaN이 false예요."
  ],
  "check": {}
 },
 {
  "id": "type-16",
  "unit": "type",
  "freq": "mid",
  "subject": 1,
  "topic": "문자열 연결",
  "q": "출력 결과는?",
  "code": "console.log(typeof (1 + \"1\"), typeof (1 - \"1\"));",
  "options": [
   "number number",
   "string string",
   "number string",
   "string number"
  ],
  "answer": 4,
  "exp": "+는 문자열이 있으면 붙여서 \"11\"(string), -는 숫자 계산이라 0(number)이에요.",
  "why": [
   "1 + \"1\"은 붙이기라 문자열이에요.",
   "1 - \"1\"은 숫자 0이에요.",
   "반대예요. +가 string, -가 number예요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "op-01",
  "unit": "op",
  "freq": "high",
  "subject": 1,
  "topic": "나머지 %",
  "q": "출력 결과는?",
  "code": "console.log(17 % 5);",
  "options": [
   "3",
   "2",
   "3.4",
   "5"
  ],
  "answer": 2,
  "exp": "17을 5로 나누면 몫 3, 나머지 2예요. %는 나머지예요.",
  "why": [
   "3은 몫이에요.",
   "",
   "3.4는 17 / 5의 결과예요.",
   "나머지는 나누는 수 5보다 작아요."
  ],
  "check": {}
 },
 {
  "id": "op-02",
  "unit": "op",
  "freq": "mid",
  "subject": 1,
  "topic": "거듭제곱 **",
  "q": "출력 결과는?",
  "code": "console.log(2 ** 4, 3 ** 2);",
  "options": [
   "16 9",
   "8 6",
   "6 5",
   "16 6"
  ],
  "answer": 1,
  "exp": "**는 거듭제곱이에요. 2를 4번 곱하면 16, 3을 2번 곱하면 9예요.",
  "why": [
   "",
   "곱하기가 아니라 거듭제곱이에요.",
   "더하기가 아니에요.",
   "3 ** 2는 3 × 3 = 9예요."
  ],
  "check": {}
 },
 {
  "id": "op-03",
  "unit": "op",
  "freq": "high",
  "subject": 1,
  "topic": "복합 대입 +=",
  "q": "출력 결과는?",
  "code": "let a = 5;\na += 2;\na *= 3;\nconsole.log(a);",
  "options": [
   "11",
   "17",
   "21",
   "10"
  ],
  "answer": 3,
  "exp": "a += 2로 7, a *= 3으로 21이에요.",
  "why": [
   "*=는 3을 더하는 게 아니라 곱해요.",
   "순서대로 계산하면 7 × 3이에요.",
   "",
   "+= 2를 먼저 해요."
  ],
  "check": {}
 },
 {
  "id": "op-04",
  "unit": "op",
  "freq": "high",
  "subject": 1,
  "topic": "증가 ++",
  "q": "출력 결과는?",
  "code": "let n = 3;\nconst a = n++;\nconst b = ++n;\nconsole.log(a, b, n);",
  "options": [
   "4 5 5",
   "3 4 4",
   "3 5 5",
   "4 4 5"
  ],
  "answer": 3,
  "exp": "n++는 지금 값 3을 a에 주고 n을 4로, ++n은 먼저 5로 만든 뒤 b에 5를 줘요.",
  "why": [
   "n++는 더하기 전 값을 돌려줘요.",
   "++n은 더한 뒤의 값을 돌려줘서 b는 5예요.",
   "",
   "a는 3, b는 5예요."
  ],
  "check": {}
 },
 {
  "id": "op-05",
  "unit": "op",
  "freq": "mid",
  "subject": 1,
  "topic": "우선순위",
  "q": "출력 결과는?",
  "code": "console.log(2 + 3 * 2 ** 2);",
  "options": [
   "100",
   "20",
   "50",
   "14"
  ],
  "answer": 4,
  "exp": "** 먼저(2 ** 2 = 4), 그다음 *(3 × 4 = 12), 마지막에 +(2 + 12 = 14)예요.",
  "why": [
   "왼쪽부터 순서대로 계산하지 않아요.",
   "**가 *보다 먼저예요.",
   "+가 가장 나중이에요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "op-06",
  "unit": "op",
  "freq": "high",
  "subject": 1,
  "topic": "&& 논리",
  "q": "출력 결과는?",
  "code": "console.log(true && \"안녕\", 0 && \"안녕\");",
  "options": [
   "true false",
   "안녕 안녕",
   "true 0",
   "안녕 0"
  ],
  "answer": 4,
  "exp": "&&는 왼쪽이 참 같으면 오른쪽 값, 거짓 같으면 왼쪽 값을 그대로 돌려줘요.",
  "why": [
   "&&는 true/false가 아니라 두 값 중 하나를 돌려줘요.",
   "0은 거짓 같은 값이라 0이 그대로 나와요.",
   "첫 번째는 오른쪽 값 \"안녕\"이에요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "op-07",
  "unit": "op",
  "freq": "high",
  "subject": 1,
  "topic": "|| 기본값",
  "q": "출력 결과는?",
  "code": "const nick = null;\nconsole.log(nick || \"손님\");",
  "options": [
   "null",
   "true",
   "손님",
   "undefined"
  ],
  "answer": 3,
  "exp": "||는 왼쪽이 거짓 같은 값이면 오른쪽을 돌려줘요. null은 거짓 같은 값이에요.",
  "why": [
   "null은 거짓 같은 값이라 오른쪽으로 가요.",
   "||는 true/false가 아니라 값을 돌려줘요.",
   "",
   "오른쪽 \"손님\"이 나와요."
  ],
  "check": {}
 },
 {
  "id": "op-08",
  "unit": "op",
  "freq": "mid",
  "subject": 1,
  "topic": "! 논리",
  "q": "출력 결과는?",
  "code": "console.log(!true, !0, !\"\");",
  "options": [
   "false false false",
   "true true true",
   "false 1 true",
   "false true true"
  ],
  "answer": 4,
  "exp": "!는 참·거짓으로 바꾼 뒤 뒤집어요. 0과 빈 문자열은 거짓이라 뒤집으면 true예요.",
  "why": [
   "0과 \"\"는 거짓 같은 값이라 !를 붙이면 true예요.",
   "!true는 false예요.",
   "!의 결과는 늘 true나 false예요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "op-09",
  "unit": "op",
  "freq": "mid",
  "subject": 1,
  "topic": "단락 평가",
  "q": "출력 결과는?",
  "code": "let n = 0;\nconst a = n > 0 && ++n;\nconst b = n === 0 || ++n;\nconsole.log(n, a, b);",
  "options": [
   "0 false true",
   "2 2 true",
   "1 false 1",
   "0 0 true"
  ],
  "answer": 1,
  "exp": "n > 0이 false라 &&의 오른쪽(++n)은 실행 안 돼요. n === 0이 true라 ||의 오른쪽도 실행 안 돼요. n은 0 그대로예요.",
  "why": [
   "",
   "두 ++n 모두 실행되지 않았어요.",
   "&&의 왼쪽이 false라 오른쪽을 보지 않아요.",
   "a는 왼쪽 값 false 그대로예요."
  ],
  "check": {}
 },
 {
  "id": "op-10",
  "unit": "op",
  "freq": "low",
  "subject": 1,
  "topic": "나머지 %",
  "q": "출력 결과는?",
  "code": "console.log(-7 % 3);",
  "options": [
   "2",
   "1",
   "-1",
   "-2"
  ],
  "answer": 3,
  "exp": "%의 결과 부호는 나누어지는 수(왼쪽)를 따라가요. -7 = 3 × (-2) + (-1)이라 -1이에요.",
  "why": [
   "자바스크립트의 %는 음수에서 양수 2로 바꿔 주지 않아요.",
   "부호가 왼쪽 수를 따라 음수예요.",
   "",
   "몫을 -2로 잡으면 나머지는 -1이에요."
  ],
  "check": {}
 },
 {
  "id": "op-11",
  "unit": "op",
  "freq": "high",
  "subject": 1,
  "topic": "!== 비교",
  "q": "출력 결과는?",
  "code": "console.log(3 !== \"3\", 3 != \"3\");",
  "options": [
   "false true",
   "true false",
   "true true",
   "false false"
  ],
  "answer": 2,
  "exp": "!==는 종류가 달라서 '다르다'(true), !=는 \"3\"을 숫자로 바꿔 같다고 봐서 false예요.",
  "why": [
   "엄격한 !==는 종류까지 봐요.",
   "",
   "느슨한 !=는 종류를 바꿔서 같다고 봐요.",
   "둘의 결과가 달라요."
  ],
  "check": {}
 },
 {
  "id": "op-12",
  "unit": "op",
  "freq": "mid",
  "subject": 1,
  "topic": "크기 비교",
  "q": "출력 결과는?",
  "code": "console.log(5 >= \"5\", \"abc\" < \"abd\");",
  "options": [
   "false true",
   "true false",
   "false false",
   "true true"
  ],
  "answer": 4,
  "exp": "한쪽이 숫자면 \"5\"를 숫자로 바꿔 5 >= 5라 true예요. 문자열끼리는 한 글자씩 비교해서 c < d라 true예요.",
  "why": [
   "\"5\"는 숫자 5로 바뀌어 비교돼요.",
   "세 번째 글자 c가 d보다 앞이라 true예요.",
   "둘 다 true예요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "op-13",
  "unit": "op",
  "freq": "high",
  "subject": 1,
  "topic": "짝수 판별",
  "q": "숫자 n이 짝수인지 확인하는 식은?",
  "options": [
   "n % 2 === 0",
   "n / 2 === 0",
   "n % 2 === 1",
   "n * 2 === 0"
  ],
  "answer": 1,
  "exp": "2로 나눈 나머지가 0이면 짝수예요.",
  "why": [
   "",
   "n / 2가 0인 건 n이 0일 때뿐이에요.",
   "나머지가 1이면 홀수예요 (양수일 때).",
   "n * 2가 0인 것도 n이 0일 때뿐이에요."
  ],
  "check": {
   "assert": "const assert = require('assert');\nfor (const n of [0, 2, 8, 3, 7]) assert.strictEqual(n % 2 === 0, [0, 2, 8].includes(n));\nassert.notStrictEqual(8 / 2 === 0, true);\nassert.notStrictEqual(8 * 2 === 0, true);"
  }
 },
 {
  "id": "op-14",
  "unit": "op",
  "freq": "mid",
  "subject": 1,
  "topic": "&&와 || 순서",
  "q": "출력 결과는?",
  "code": "console.log(true || false && false, false && \"x\" || \"y\");",
  "options": [
   "false y",
   "true x",
   "false false",
   "true y"
  ],
  "answer": 4,
  "exp": "&&가 ||보다 먼저예요. 앞은 true || (false && false) = true, 뒤는 (false && \"x\") || \"y\" = \"y\"예요.",
  "why": [
   "&&를 먼저 계산하면 앞은 true예요.",
   "false && \"x\"는 false라서 ||의 오른쪽 \"y\"가 나와요.",
   "두 번째 식은 \"y\"예요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "op-15",
  "unit": "op",
  "freq": "low",
  "subject": 1,
  "topic": "복합 대입",
  "q": "출력 결과는?",
  "code": "let n = 10;\nn -= 3;\nn /= 7;\nn **= 3;\nconsole.log(n);",
  "options": [
   "3",
   "0",
   "1",
   "343"
  ],
  "answer": 3,
  "exp": "10 - 3 = 7, 7 / 7 = 1, 1의 세제곱 = 1이에요.",
  "why": [
   "7 / 7은 1이고, 1을 세제곱해도 1이에요.",
   "나누기 결과 1에서 0이 되지 않아요.",
   "",
   "**=는 n을 거듭제곱해요. 그때 n은 1이에요."
  ],
  "check": {}
 },
 {
  "id": "op-16",
  "unit": "op",
  "freq": "mid",
  "subject": 1,
  "topic": "?? 널 병합",
  "q": "출력 결과는?",
  "code": "console.log(undefined ?? null ?? 0 ?? \"끝\");",
  "options": [
   "끝",
   "null",
   "undefined",
   "0"
  ],
  "answer": 4,
  "exp": "??는 왼쪽부터 null·undefined가 아닌 첫 값을 골라요. 0은 null·undefined가 아니라서 0이에요.",
  "why": [
   "0에서 멈춰서 \"끝\"까지 가지 않아요.",
   "null은 건너뛰어요.",
   "undefined도 건너뛰어요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "if-01",
  "unit": "if",
  "freq": "high",
  "subject": 1,
  "topic": "if else",
  "q": "출력 결과는?",
  "code": "const age = 12;\nif (age >= 13) {\n  console.log(\"가입 가능\");\n} else {\n  console.log(\"보호자 동의 필요\");\n}",
  "options": [
   "가입 가능",
   "가입 가능\n보호자 동의 필요",
   "보호자 동의 필요",
   "아무것도 출력되지 않는다"
  ],
  "answer": 3,
  "exp": "12 >= 13은 false라 else 쪽이 실행돼요.",
  "why": [
   "조건이 거짓이라 if 쪽은 실행 안 돼요.",
   "if와 else 중 하나만 실행돼요.",
   "",
   "else가 있어서 꼭 하나는 실행돼요."
  ],
  "check": {}
 },
 {
  "id": "if-02",
  "unit": "if",
  "freq": "high",
  "subject": 1,
  "topic": "조건 순서",
  "q": "출력 결과는?",
  "code": "const s = 95;\nif (s >= 60) {\n  console.log(\"합격\");\n} else if (s >= 90) {\n  console.log(\"우수\");\n} else {\n  console.log(\"불합격\");\n}",
  "options": [
   "우수",
   "합격\n우수",
   "불합격",
   "합격"
  ],
  "answer": 4,
  "exp": "위에서부터 처음 맞는 조건 하나만 실행해요. 95 >= 60이 먼저 맞아서 \"합격\"만 나와요. 우수를 보이려면 >= 90을 위에 둬야 해요.",
  "why": [
   "s >= 90은 확인하지도 않아요. 앞 조건이 먼저 맞았어요.",
   "else if는 앞 조건이 거짓일 때만 봐요.",
   "95는 60 이상이에요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "if-03",
  "unit": "if",
  "freq": "high",
  "subject": 1,
  "topic": "삼항",
  "q": "출력 결과는?",
  "code": "const n = 7;\nconst kind = n % 2 === 0 ? \"짝수\" : \"홀수\";\nconsole.log(kind);",
  "options": [
   "짝수",
   "홀수",
   "true",
   "1"
  ],
  "answer": 2,
  "exp": "7 % 2는 1이라 조건이 false, : 뒤의 \"홀수\"가 골라져요.",
  "why": [
   "조건이 거짓이면 : 뒤의 값이에요.",
   "",
   "삼항 연산자는 조건 자체가 아니라 고른 값을 돌려줘요.",
   "나머지 값이 아니라 고른 문자열이 들어가요."
  ],
  "check": {}
 },
 {
  "id": "if-04",
  "unit": "if",
  "freq": "mid",
  "subject": 1,
  "topic": "중첩 삼항",
  "q": "출력 결과는?",
  "code": "const t = 0;\nconsole.log(t > 0 ? \"양수\" : t < 0 ? \"음수\" : \"영\");",
  "options": [
   "양수",
   "영",
   "음수",
   "false"
  ],
  "answer": 2,
  "exp": "t > 0이 거짓이라 뒤의 t < 0 ? ... 으로 가고, 그것도 거짓이라 \"영\"이에요.",
  "why": [
   "0은 0보다 크지 않아요.",
   "",
   "0은 0보다 작지도 않아요.",
   "삼항 연산자는 고른 값을 돌려줘요."
  ],
  "check": {}
 },
 {
  "id": "if-05",
  "unit": "if",
  "freq": "mid",
  "subject": 1,
  "topic": "조건에 쓰는 값",
  "q": "출력 결과는?",
  "code": "const count = 0;\nif (count) {\n  console.log(\"있음\");\n} else {\n  console.log(\"없음\");\n}",
  "options": [
   "없음",
   "있음",
   "0",
   "오류가 난다"
  ],
  "answer": 1,
  "exp": "숫자 0은 거짓 같은 값이라 else로 가요.",
  "why": [
   "",
   "0은 조건에서 거짓이에요.",
   "if는 count 값을 출력하지 않아요.",
   "숫자를 조건에 쓰는 건 문제없어요."
  ],
  "check": {}
 },
 {
  "id": "if-06",
  "unit": "if",
  "freq": "mid",
  "subject": 1,
  "topic": "중괄호 없는 if",
  "q": "출력 결과는?",
  "code": "const ok = false;\nif (ok)\n  console.log(\"A\");\n  console.log(\"B\");",
  "options": [
   "A\nB",
   "아무것도 출력되지 않는다",
   "B",
   "A"
  ],
  "answer": 3,
  "exp": "중괄호가 없으면 if 바로 다음 한 문장만 if에 속해요. 들여쓰기는 상관없어서 B는 항상 실행돼요.",
  "why": [
   "ok가 false라 A는 실행 안 돼요.",
   "두 번째 줄은 if에 속하지 않아 실행돼요.",
   "",
   "A는 if에 속해서 실행되지 않아요."
  ],
  "check": {}
 },
 {
  "id": "if-07",
  "unit": "if",
  "freq": "high",
  "subject": 1,
  "topic": "범위 조건",
  "q": "출력 결과는?",
  "code": "const x = 5;\nconsole.log(10 < x < 20);",
  "options": [
   "false",
   "true",
   "오류가 난다",
   "undefined"
  ],
  "answer": 2,
  "exp": "왼쪽부터 10 < 5는 false, 그다음 false < 20은 false가 0으로 바뀌어 0 < 20이라 true예요. 범위는 x > 10 && x < 20으로 써야 해요.",
  "why": [
   "수학처럼 읽히지 않고 왼쪽부터 두 번 비교해요.",
   "",
   "문법 오류는 없어요.",
   "비교의 결과는 true나 false예요."
  ],
  "check": {}
 },
 {
  "id": "if-08",
  "unit": "if",
  "freq": "high",
  "subject": 1,
  "topic": "범위 조건",
  "q": "나이 age가 13살 이상 19살 이하인지 확인하는 조건은?",
  "options": [
   "age >= 13 && age <= 19",
   "13 <= age <= 19",
   "age >= 13 || age <= 19",
   "age >= 13 & <= 19"
  ],
  "answer": 1,
  "exp": "두 조건을 모두 만족해야 하니 &&로 이어요.",
  "why": [
   "",
   "이어 쓰면 왼쪽부터 계산돼서 항상 true가 돼요.",
   "||는 하나만 맞아도 돼서 모든 나이가 true예요.",
   "문법 오류예요. 비교마다 age를 써야 해요."
  ],
  "check": {
   "assert": "const assert = require('assert');\nconst f = age => age >= 13 && age <= 19;\nassert(f(13) && f(19) && !f(12) && !f(20));\nconst g = age => 13 <= age <= 19;\nassert(g(30));\nconst h = age => age >= 13 || age <= 19;\nassert(h(30));\nassert.throws(() => new Function('age', 'return age >= 13 & <= 19'), SyntaxError);"
  }
 },
 {
  "id": "if-09",
  "unit": "if",
  "freq": "low",
  "subject": 1,
  "topic": "대입 실수",
  "q": "출력 결과는?",
  "code": "let x = 0;\nif (x = 5) {\n  console.log(\"참\", x);\n} else {\n  console.log(\"거짓\", x);\n}",
  "options": [
   "거짓 0",
   "거짓 5",
   "참 0",
   "참 5"
  ],
  "answer": 4,
  "exp": "조건 안의 =는 비교가 아니라 넣기예요. x에 5를 넣고 그 값 5가 조건이 돼서 참이에요. 비교는 ===로 써요.",
  "why": [
   "x = 5로 x가 5가 됐고, 5는 참 같은 값이에요.",
   "5는 참이라 else로 가지 않아요.",
   "x는 이미 5로 바뀌었어요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "if-10",
  "unit": "if",
  "freq": "mid",
  "subject": 1,
  "topic": "else if",
  "q": "출력 결과는?",
  "code": "const h = 14;\nlet msg = \"밤\";\nif (h < 12) msg = \"오전\";\nelse if (h < 18) msg = \"오후\";\nelse if (h < 22) msg = \"저녁\";\nconsole.log(msg);",
  "options": [
   "오전",
   "저녁",
   "오후",
   "밤"
  ],
  "answer": 3,
  "exp": "14 < 12는 거짓, 14 < 18은 참이라 \"오후\"가 들어가고 아래는 건너뛰어요.",
  "why": [
   "14는 12보다 커요.",
   "앞의 else if가 먼저 맞아서 저녁까지 가지 않아요.",
   "",
   "맞는 조건이 있어서 처음 값 밤이 바뀌었어요."
  ],
  "check": {}
 },
 {
  "id": "if-11",
  "unit": "if",
  "freq": "mid",
  "subject": 1,
  "topic": "switch case 묶기",
  "q": "출력 결과는?",
  "code": "const m = 2;\nswitch (m) {\n  case 12:\n  case 1:\n  case 2:\n    console.log(\"겨울\");\n    break;\n  case 3:\n    console.log(\"봄\");\n    break;\n  default:\n    console.log(\"기타\");\n}",
  "options": [
   "봄",
   "겨울",
   "기타",
   "겨울\n봄"
  ],
  "answer": 2,
  "exp": "case 12, 1, 2가 한 묶음이라 2는 \"겨울\"을 실행하고 break로 멈춰요.",
  "why": [
   "case 3은 2와 같지 않아요.",
   "",
   "맞는 case가 있어서 default로 가지 않아요.",
   "break가 있어서 봄까지 내려가지 않아요."
  ],
  "check": {}
 },
 {
  "id": "if-12",
  "unit": "if",
  "freq": "low",
  "subject": 1,
  "topic": "switch",
  "q": "출력 결과는?",
  "code": "const n = 7;\nswitch (n % 3) {\n  case 0:\n    console.log(\"나누어떨어짐\");\n    break;\n  case 1:\n    console.log(\"나머지 1\");\n    break;\n  default:\n    console.log(\"나머지 2\");\n}",
  "options": [
   "나누어떨어짐",
   "나머지 2",
   "아무것도 출력되지 않는다",
   "나머지 1"
  ],
  "answer": 4,
  "exp": "7 % 3은 1이라 case 1로 가요.",
  "why": [
   "7은 3으로 나누어떨어지지 않아요.",
   "나머지는 1이에요.",
   "맞는 case 1이 있어요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "if-13",
  "unit": "if",
  "freq": "mid",
  "subject": 1,
  "topic": "조건에 쓰는 값",
  "q": "출력 결과는?",
  "code": "const name = \"\";\nconsole.log(name ? \"안녕, \" + name : \"이름을 넣어 주세요\");",
  "options": [
   "안녕, ",
   "이름을 넣어 주세요",
   "안녕, undefined",
   "false"
  ],
  "answer": 2,
  "exp": "빈 문자열은 거짓 같은 값이라 : 뒤가 골라져요.",
  "why": [
   "빈 문자열은 조건에서 거짓이라 앞 값이 골라지지 않아요.",
   "",
   "name은 undefined가 아니라 빈 문자열이에요.",
   "삼항 연산자는 고른 값을 돌려줘요."
  ],
  "check": {}
 },
 {
  "id": "if-14",
  "unit": "if",
  "freq": "low",
  "subject": 1,
  "topic": "중첩 if",
  "q": "출력 결과는?",
  "code": "const login = true;\nconst admin = false;\nif (login) {\n  if (admin) {\n    console.log(\"관리자\");\n  } else {\n    console.log(\"회원\");\n  }\n} else {\n  console.log(\"손님\");\n}",
  "options": [
   "관리자",
   "손님",
   "회원\n손님",
   "회원"
  ],
  "answer": 4,
  "exp": "바깥 if(login)가 참이라 안으로 들어가고, 안쪽 admin이 거짓이라 \"회원\"이에요.",
  "why": [
   "admin이 false라 관리자는 아니에요.",
   "login이 true라 바깥 else로 가지 않아요.",
   "if와 else 중 하나만 실행돼요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "loop-01",
  "unit": "loop",
  "freq": "high",
  "subject": 1,
  "topic": "반복 횟수",
  "q": "\"안녕\"은 몇 번 출력되는가?",
  "code": "for (let i = 0; i < 5; i++) {\n  console.log(\"안녕\");\n}",
  "options": [
   "4번",
   "6번",
   "5번",
   "0번"
  ],
  "answer": 3,
  "exp": "i가 0, 1, 2, 3, 4일 때 실행되고 5에서 조건이 거짓이 돼요. 5번이에요.",
  "why": [
   "0부터 시작해서 4까지 다섯 번이에요.",
   "i가 5일 때는 실행되지 않아요.",
   "",
   "처음 조건 0 < 5가 참이라 실행돼요."
  ],
  "check": {
   "js": "let n = 0;\nfor (let i = 0; i < 5; i++) n++;\nconsole.log(n + \"번\");"
  }
 },
 {
  "id": "loop-02",
  "unit": "loop",
  "freq": "high",
  "subject": 1,
  "topic": "합계",
  "q": "출력 결과는?",
  "code": "let sum = 0;\nfor (let i = 1; i <= 4; i++) {\n  sum += i;\n}\nconsole.log(sum);",
  "options": [
   "6",
   "10",
   "15",
   "4"
  ],
  "answer": 2,
  "exp": "1 + 2 + 3 + 4 = 10이에요.",
  "why": [
   "<=라서 4까지 더해요.",
   "",
   "5는 더하지 않아요.",
   "sum에 계속 더해 모아요."
  ],
  "check": {}
 },
 {
  "id": "loop-03",
  "unit": "loop",
  "freq": "mid",
  "subject": 1,
  "topic": "for 문 증가",
  "q": "출력 결과는?",
  "code": "let out = \"\";\nfor (let i = 0; i < 10; i += 3) {\n  out += i + \" \";\n}\nconsole.log(out.trim());",
  "options": [
   "0 3 6",
   "0 3 6 9",
   "3 6 9",
   "0 1 2 3"
  ],
  "answer": 2,
  "exp": "i가 3씩 커져서 0, 3, 6, 9예요. 12는 10보다 커서 멈춰요.",
  "why": [
   "9 < 10이라 9까지 실행돼요.",
   "",
   "i는 0부터 시작해요.",
   "i += 3이라 1씩이 아니라 3씩 커져요."
  ],
  "check": {}
 },
 {
  "id": "loop-04",
  "unit": "loop",
  "freq": "high",
  "subject": 1,
  "topic": "while",
  "q": "출력 결과는?",
  "code": "let n = 1;\nlet count = 0;\nwhile (n < 20) {\n  n *= 3;\n  count++;\n}\nconsole.log(n, count);",
  "options": [
   "9 2",
   "27 2",
   "81 4",
   "27 3"
  ],
  "answer": 4,
  "exp": "1 → 3 → 9 → 27로 세 번 곱했어요. 27은 20보다 커서 멈춰요.",
  "why": [
   "9는 아직 20보다 작아서 한 번 더 돌아요.",
   "27이 되기까지 세 번 돌았어요.",
   "27에서 조건이 거짓이라 더 곱하지 않아요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "loop-05",
  "unit": "loop",
  "freq": "mid",
  "subject": 1,
  "topic": "do while",
  "q": "출력 결과는?",
  "code": "let n = 10;\ndo {\n  n++;\n} while (n < 5);\nconsole.log(n);",
  "options": [
   "11",
   "10",
   "5",
   "무한 반복"
  ],
  "answer": 1,
  "exp": "do...while은 조건을 나중에 봐서 한 번은 실행해요. n이 11이 된 뒤 11 < 5가 거짓이라 끝나요.",
  "why": [
   "",
   "조건이 거짓이어도 한 번은 실행돼요.",
   "5까지 줄어드는 코드가 아니에요.",
   "조건이 거짓이라 한 번 뒤에 끝나요."
  ],
  "check": {}
 },
 {
  "id": "loop-06",
  "unit": "loop",
  "freq": "high",
  "subject": 1,
  "topic": "break",
  "q": "출력 결과는?",
  "code": "let out = \"\";\nfor (let i = 1; i <= 10; i++) {\n  if (i % 4 === 0) break;\n  out += i;\n}\nconsole.log(out);",
  "options": [
   "1234",
   "12345678910",
   "4",
   "123"
  ],
  "answer": 4,
  "exp": "i가 4일 때 break로 반복이 끝나요. 4는 더하기 전에 멈췄어요.",
  "why": [
   "break가 out += i보다 먼저라 4는 안 들어가요.",
   "4에서 반복 전체가 끝나요.",
   "break 앞의 1, 2, 3이 들어 있어요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "loop-07",
  "unit": "loop",
  "freq": "high",
  "subject": 1,
  "topic": "continue",
  "q": "출력 결과는?",
  "code": "let sum = 0;\nfor (let i = 1; i <= 6; i++) {\n  if (i % 2 === 0) continue;\n  sum += i;\n}\nconsole.log(sum);",
  "options": [
   "12",
   "21",
   "1",
   "9"
  ],
  "answer": 4,
  "exp": "짝수는 continue로 건너뛰어서 홀수 1 + 3 + 5 = 9만 더해요.",
  "why": [
   "12는 짝수 2 + 4 + 6의 합이에요.",
   "continue는 반복을 끝내지 않고 그 차례만 건너뛰어요.",
   "continue 뒤에도 반복은 계속돼요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "loop-08",
  "unit": "loop",
  "freq": "high",
  "subject": 1,
  "topic": "for...of",
  "q": "출력 결과는?",
  "code": "let s = \"\";\nfor (const ch of \"고양이\") {\n  s = ch + s;\n}\nconsole.log(s);",
  "options": [
   "고양이",
   "고",
   "이",
   "이양고"
  ],
  "answer": 4,
  "exp": "글자를 하나씩 꺼내 앞에 붙여서 거꾸로 된 \"이양고\"가 돼요.",
  "why": [
   "ch + s는 새 글자를 앞에 붙여요.",
   "s에 계속 붙여서 글자 하나가 아니에요.",
   "마지막 글자만 남는 게 아니에요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "loop-09",
  "unit": "loop",
  "freq": "mid",
  "subject": 1,
  "topic": "for...in",
  "q": "출력 결과는?",
  "code": "const stock = { 사과: 3, 배: 0, 귤: 5 };\nlet total = 0;\nfor (const k in stock) total += stock[k];\nconsole.log(total);",
  "options": [
   "8",
   "3",
   "사과배귤",
   "NaN"
  ],
  "answer": 1,
  "exp": "for...in은 키를 꺼내고 stock[k]로 값을 읽어 3 + 0 + 5 = 8이에요.",
  "why": [
   "",
   "모든 키를 돌아서 첫 값만이 아니에요.",
   "키가 아니라 stock[k] 값을 더했어요.",
   "값은 모두 숫자라 NaN이 아니에요."
  ],
  "check": {}
 },
 {
  "id": "loop-10",
  "unit": "loop",
  "freq": "mid",
  "subject": 1,
  "topic": "중첩",
  "q": "\"*\"은 모두 몇 번 출력되는가?",
  "code": "for (let i = 0; i < 3; i++) {\n  for (let j = 0; j < 4; j++) {\n    console.log(\"*\");\n  }\n}",
  "options": [
   "7번",
   "12번",
   "4번",
   "3번"
  ],
  "answer": 2,
  "exp": "바깥이 3번 돌 때마다 안쪽이 4번씩 돌아서 3 × 4 = 12번이에요.",
  "why": [
   "더하기가 아니라 곱하기예요.",
   "",
   "안쪽 횟수만 세면 안 돼요.",
   "바깥 횟수만 세면 안 돼요."
  ],
  "check": {
   "js": "let n = 0;\nfor (let i = 0; i < 3; i++) for (let j = 0; j < 4; j++) n++;\nconsole.log(n + \"번\");"
  }
 },
 {
  "id": "loop-11",
  "unit": "loop",
  "freq": "mid",
  "subject": 1,
  "topic": "for 문 거꾸로",
  "q": "출력 결과는?",
  "code": "let out = \"\";\nfor (let i = 3; i > 0; i--) out += i;\nconsole.log(out + \"발사\");",
  "options": [
   "3210발사",
   "123발사",
   "321발사",
   "발사"
  ],
  "answer": 3,
  "exp": "3, 2, 1에서 실행되고 0이 되면 0 > 0이 거짓이라 멈춰요.",
  "why": [
   "0은 조건 i > 0을 만족하지 않아요.",
   "i--로 줄어드는 순서예요.",
   "",
   "처음 3 > 0이 참이라 반복이 실행돼요."
  ],
  "check": {}
 },
 {
  "id": "loop-12",
  "unit": "loop",
  "freq": "high",
  "subject": 1,
  "topic": "반복 횟수",
  "q": "출력의 마지막 줄은?",
  "code": "const fruits = [\"사과\", \"배\"];\nfor (let i = 0; i <= fruits.length; i++) {\n  console.log(fruits[i]);\n}",
  "options": [
   "배",
   "undefined",
   "사과",
   "오류가 난다"
  ],
  "answer": 2,
  "exp": "<= 때문에 i = 2까지 돌아요. fruits[2]는 없는 칸이라 undefined가 나와요. 배열은 i < length로 돌아요.",
  "why": [
   "i가 2일 때 한 번 더 돌아요.",
   "",
   "사과는 첫 줄이에요.",
   "없는 칸을 읽으면 오류가 아니라 undefined예요."
  ],
  "check": {
   "js": "const fruits = [\"사과\", \"배\"];\nconst out = [];\nfor (let i = 0; i <= fruits.length; i++) out.push(String(fruits[i]));\nconsole.log(out.at(-1));"
  }
 },
 {
  "id": "loop-13",
  "unit": "loop",
  "freq": "low",
  "subject": 1,
  "topic": "while break",
  "q": "출력 결과는?",
  "code": "let n = 0;\nwhile (true) {\n  n += 7;\n  if (n > 30) break;\n}\nconsole.log(n);",
  "options": [
   "35",
   "28",
   "30",
   "무한 반복"
  ],
  "answer": 1,
  "exp": "7, 14, 21, 28, 35에서 35 > 30이라 break로 끝나요.",
  "why": [
   "",
   "28은 아직 30보다 작아서 한 번 더 돌아요.",
   "n은 7의 배수라 30이 될 수 없어요.",
   "break가 있어서 끝나요."
  ],
  "check": {}
 },
 {
  "id": "loop-14",
  "unit": "loop",
  "freq": "low",
  "subject": 1,
  "topic": "for...of와 entries",
  "q": "출력 결과는?",
  "code": "for (const [i, v] of [\"가\", \"나\"].entries()) {\n  console.log(i + \":\" + v);\n}",
  "options": [
   "1:가\n2:나",
   "가:0\n나:1",
   "0\n1",
   "0:가\n1:나"
  ],
  "answer": 4,
  "exp": "entries()는 [번호, 값] 짝을 줘서 구조 분해로 번호와 값을 같이 꺼낼 수 있어요. 번호는 0부터예요.",
  "why": [
   "번호는 0부터 시작해요.",
   "짝의 앞이 번호, 뒤가 값이에요.",
   "값도 함께 꺼냈어요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "loop-15",
  "unit": "loop",
  "freq": "mid",
  "subject": 1,
  "topic": "카운트",
  "q": "출력 결과는?",
  "code": "const word = \"banana\";\nlet count = 0;\nfor (const ch of word) {\n  if (ch === \"a\") count++;\n}\nconsole.log(count);",
  "options": [
   "2",
   "6",
   "3",
   "1"
  ],
  "answer": 3,
  "exp": "banana에서 a는 2, 4, 6번째 글자로 3개예요.",
  "why": [
   "a는 세 번 나와요.",
   "6은 전체 글자 수예요.",
   "",
   "조건에 맞을 때마다 1씩 더해요."
  ],
  "check": {}
 },
 {
  "id": "loop-16",
  "unit": "loop",
  "freq": "mid",
  "subject": 1,
  "topic": "무한",
  "q": "끝나지 않고 계속 도는(무한 반복) 코드는?",
  "options": [
   "let i = 0; while (i < 3) { console.log(i); }",
   "let i = 0; while (i < 3) { i++; }",
   "for (let i = 0; i < 3; i++) {}",
   "let i = 5; while (i < 3) { i--; }"
  ],
  "answer": 1,
  "exp": "i를 바꾸는 코드가 없어서 i < 3이 영원히 참이에요.",
  "why": [
   "",
   "i++로 i가 3이 되면 끝나요.",
   "i++로 세 번 돌고 끝나요.",
   "처음부터 5 < 3이 거짓이라 한 번도 안 돌아요."
  ]
 },
 {
  "id": "fn-01",
  "unit": "fn",
  "freq": "high",
  "subject": 1,
  "topic": "return",
  "q": "출력 결과는?",
  "code": "function area(w, h) {\n  return w * h;\n}\nconsole.log(area(3, 4) + area(1, 2));",
  "options": [
   "12",
   "10",
   "14",
   "34"
  ],
  "answer": 3,
  "exp": "area(3, 4)는 12, area(1, 2)는 2라서 합은 14예요.",
  "why": [
   "두 함수의 결과를 더해요.",
   "곱하기 결과를 돌려줘요.",
   "",
   "돌려받은 값은 숫자라 붙이기가 아니에요."
  ],
  "check": {}
 },
 {
  "id": "fn-02",
  "unit": "fn",
  "freq": "high",
  "subject": 1,
  "topic": "undefined 반환",
  "q": "출력 결과는?",
  "code": "function add(a, b) {\n  const s = a + b;\n}\nconsole.log(add(2, 3));",
  "options": [
   "undefined",
   "5",
   "s",
   "오류가 난다"
  ],
  "answer": 1,
  "exp": "return이 없는 함수는 undefined를 돌려줘요. s는 함수 안에서만 계산되고 버려져요.",
  "why": [
   "",
   "돌려주려면 return s;가 필요해요.",
   "변수 이름이 출력되지 않아요.",
   "return이 없어도 오류는 아니에요."
  ],
  "check": {}
 },
 {
  "id": "fn-03",
  "unit": "fn",
  "freq": "high",
  "subject": 1,
  "topic": "기본값",
  "q": "출력 결과는?",
  "code": "function greet(name = \"친구\", end = \"!\") {\n  return \"안녕 \" + name + end;\n}\nconsole.log(greet(\"민지\"), greet(undefined, \"?\"));",
  "options": [
   "안녕 민지! 안녕 undefined?",
   "안녕 민지undefined 안녕 친구?",
   "안녕 민지! 안녕 친구!",
   "안녕 민지! 안녕 친구?"
  ],
  "answer": 4,
  "exp": "넣지 않은 end는 기본값 \"!\", undefined를 넣은 name도 기본값 \"친구\"가 돼요.",
  "why": [
   "undefined를 넣으면 기본값이 쓰여요.",
   "end를 안 넣으면 기본값 \"!\"이 쓰여요.",
   "두 번째 호출의 end는 \"?\"예요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "fn-04",
  "unit": "fn",
  "freq": "mid",
  "subject": 1,
  "topic": "매개변수",
  "q": "출력 결과는?",
  "code": "function sum(a, b) {\n  return a + b;\n}\nconsole.log(sum(1));",
  "options": [
   "1",
   "NaN",
   "undefined",
   "오류가 난다"
  ],
  "answer": 2,
  "exp": "b를 안 넣어서 b는 undefined예요. 1 + undefined는 NaN이에요.",
  "why": [
   "b가 0이 되지 않아요. undefined예요.",
   "",
   "더하기 결과는 숫자 NaN이에요.",
   "인수를 덜 넣어도 오류는 아니에요."
  ],
  "check": {}
 },
 {
  "id": "fn-05",
  "unit": "fn",
  "freq": "high",
  "subject": 1,
  "topic": "화살표",
  "q": "출력 결과는?",
  "code": "const triple = n => n * 3;\nconst plus = (a, b) => a + b;\nconsole.log(plus(triple(2), 1));",
  "options": [
   "7",
   "9",
   "6",
   "21"
  ],
  "answer": 1,
  "exp": "triple(2)는 6, plus(6, 1)은 7이에요.",
  "why": [
   "",
   "plus(6, 1)이에요. triple(3)이 아니에요.",
   "6에 1을 더해요.",
   "곱하기는 triple에서 한 번뿐이에요."
  ],
  "check": {}
 },
 {
  "id": "fn-06",
  "unit": "fn",
  "freq": "mid",
  "subject": 1,
  "topic": "나머지 매개변수",
  "q": "출력 결과는?",
  "code": "function count(first, ...others) {\n  return others.length;\n}\nconsole.log(count(5, 6, 7, 8));",
  "options": [
   "4",
   "1",
   "8",
   "3"
  ],
  "answer": 4,
  "exp": "첫 인수 5는 first, 나머지 6, 7, 8이 others 배열이라 길이는 3이에요.",
  "why": [
   "first로 하나가 빠져요.",
   "others는 하나가 아니라 나머지 전부예요.",
   "길이(개수)를 돌려줘요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "fn-07",
  "unit": "fn",
  "freq": "high",
  "subject": 1,
  "topic": "콜백",
  "q": "출력 결과는?",
  "code": "function run(fn) {\n  return fn(10);\n}\nconsole.log(run(x => x + 5), run(String) + \"!\");",
  "options": [
   "15 15!",
   "15 10!",
   "x + 5 10!",
   "15 String!"
  ],
  "answer": 2,
  "exp": "run은 받은 함수에 10을 넣어 불러요. 첫째는 15, 둘째는 String(10) = \"10\"에 \"!\"를 붙여요.",
  "why": [
   "두 번째는 String 함수에 10을 넣은 결과예요.",
   "",
   "함수가 실행된 결과가 나와요.",
   "String을 불러서 \"10\"이 돼요."
  ],
  "check": {}
 },
 {
  "id": "fn-08",
  "unit": "fn",
  "freq": "mid",
  "subject": 1,
  "topic": "함수를 반환",
  "q": "출력 결과는?",
  "code": "function times(n) {\n  return x => x * n;\n}\nconst double = times(2);\nconst ten = times(10);\nconsole.log(double(ten(3)));",
  "options": [
   "30",
   "60",
   "6",
   "23"
  ],
  "answer": 2,
  "exp": "ten(3)은 30, double(30)은 60이에요.",
  "why": [
   "ten(3)의 결과 30을 다시 두 배로 해요.",
   "",
   "ten을 먼저 적용해요.",
   "숫자 곱하기라 붙이기가 아니에요."
  ],
  "check": {}
 },
 {
  "id": "fn-09",
  "unit": "fn",
  "freq": "high",
  "subject": 1,
  "topic": "클로저 카운터",
  "q": "출력 결과는?",
  "code": "function makeCounter() {\n  let n = 0;\n  return () => ++n;\n}\nconst c1 = makeCounter();\nconst c2 = makeCounter();\nc1();\nc1();\nc2();\nconsole.log(c1(), c2());",
  "options": [
   "4 4",
   "3 2",
   "3 3",
   "1 1"
  ],
  "answer": 2,
  "exp": "makeCounter를 부를 때마다 새 n이 생겨요. c1은 세 번째라 3, c2는 두 번째라 2예요.",
  "why": [
   "c1과 c2는 서로 다른 n을 기억해요.",
   "",
   "c2는 c1보다 한 번 덜 불렸어요.",
   "n은 부를 때마다 계속 커져요."
  ],
  "check": {}
 },
 {
  "id": "fn-10",
  "unit": "fn",
  "freq": "high",
  "subject": 1,
  "topic": "스코프 가려",
  "q": "출력 결과는?",
  "code": "let x = \"밖\";\nfunction show() {\n  let x = \"안\";\n  return x;\n}\nconsole.log(show(), x);",
  "options": [
   "밖 밖",
   "안 안",
   "안 밖",
   "밖 안"
  ],
  "answer": 3,
  "exp": "함수 안에서 새로 만든 x는 바깥 x를 가릴 뿐 바꾸지 않아요.",
  "why": [
   "함수 안에서는 안쪽 x가 보여요.",
   "안쪽 let x는 새 변수라 바깥 x는 그대로예요.",
   "",
   "순서가 반대예요."
  ],
  "check": {}
 },
 {
  "id": "fn-11",
  "unit": "fn",
  "freq": "mid",
  "subject": 1,
  "topic": "전역",
  "q": "출력 결과는?",
  "code": "let total = 0;\nfunction addPoint(p) {\n  total += p;\n}\naddPoint(5);\naddPoint(3);\nconsole.log(total);",
  "options": [
   "0",
   "8",
   "3",
   "5"
  ],
  "answer": 2,
  "exp": "함수 안에서 바깥 변수 total을 직접 바꿨어요. 5 + 3 = 8이에요.",
  "why": [
   "안에서 let으로 새로 만들지 않아서 바깥 total이 바뀌어요.",
   "",
   "두 번 다 더해졌어요.",
   "마지막 값만 남는 게 아니라 더해 가요."
  ],
  "check": {}
 },
 {
  "id": "fn-12",
  "unit": "fn",
  "freq": "mid",
  "subject": 1,
  "topic": "호이스팅",
  "q": "출력 결과는?",
  "code": "console.log(square(4));\nfunction square(n) {\n  return n * n;\n}",
  "options": [
   "16",
   "ReferenceError 오류",
   "undefined",
   "TypeError 오류"
  ],
  "answer": 1,
  "exp": "function으로 선언한 함수는 통째로 먼저 만들어져서 선언 위에서 불러도 돼요.",
  "why": [
   "",
   "function 선언은 위에서 불러도 오류가 아니에요.",
   "함수가 제대로 실행돼서 16이에요.",
   "함수가 이미 준비돼 있어요."
  ],
  "check": {}
 },
 {
  "id": "fn-13",
  "unit": "fn",
  "freq": "low",
  "subject": 1,
  "topic": "호이스팅",
  "q": "실행하면 어떻게 되는가?",
  "code": "sayHi();\nvar sayHi = function () {\n  console.log(\"hi\");\n};",
  "options": [
   "hi가 출력된다",
   "ReferenceError 오류가 난다",
   "TypeError 오류가 난다",
   "undefined가 출력된다"
  ],
  "answer": 3,
  "exp": "var sayHi는 이름만 먼저 생겨서 그때 값은 undefined예요. undefined를 함수처럼 부르면 TypeError(sayHi is not a function)예요.",
  "why": [
   "함수 표현식은 그 줄이 실행돼야 함수가 들어가요.",
   "var라서 이름은 있어요. 이름 오류가 아니에요.",
   "",
   "undefined를 부르면 출력 대신 오류예요."
  ],
  "check": {
   "err": "TypeError"
  }
 },
 {
  "id": "fn-14",
  "unit": "fn",
  "freq": "mid",
  "subject": 1,
  "topic": "return 뒤",
  "q": "출력 결과는?",
  "code": "function check(n) {\n  if (n < 0) return \"음수\";\n  if (n === 0) return \"영\";\n  return \"양수\";\n}\nconsole.log(check(-3), check(0), check(8));",
  "options": [
   "음수 영 양수",
   "음수 양수 양수",
   "양수 양수 양수",
   "음수 영 영"
  ],
  "answer": 1,
  "exp": "return을 만나면 함수가 바로 끝나요. 그래서 맞는 첫 return의 값이 결과예요.",
  "why": [
   "",
   "0은 두 번째 if에서 \"영\"을 돌려줘요.",
   "앞의 if에서 먼저 돌려주면 마지막 return까지 가지 않아요.",
   "8은 앞 두 조건이 거짓이라 \"양수\"예요."
  ],
  "check": {}
 },
 {
  "id": "fn-15",
  "unit": "fn",
  "freq": "low",
  "subject": 1,
  "topic": "재귀 함수",
  "q": "출력 결과는?",
  "code": "function fact(n) {\n  if (n <= 1) return 1;\n  return n * fact(n - 1);\n}\nconsole.log(fact(4));",
  "options": [
   "10",
   "4",
   "24",
   "1"
  ],
  "answer": 3,
  "exp": "함수가 자기 자신을 불러요(재귀). 4 × 3 × 2 × 1 = 24예요.",
  "why": [
   "더하기가 아니라 곱하기예요.",
   "n * fact(n - 1)로 계속 곱해요.",
   "",
   "1은 맨 끝 단계의 값이에요."
  ],
  "check": {}
 },
 {
  "id": "fn-16",
  "unit": "fn",
  "freq": "mid",
  "subject": 1,
  "topic": "인수",
  "q": "출력 결과는?",
  "code": "function first(a) {\n  return a;\n}\nconsole.log(first(7, 8, 9));",
  "options": [
   "9",
   "7",
   "24",
   "오류가 난다"
  ],
  "answer": 2,
  "exp": "매개변수보다 인수를 많이 넣으면 남는 인수는 무시돼요.",
  "why": [
   "a에는 첫 인수 7이 들어가요.",
   "",
   "인수를 더하지 않아요.",
   "인수가 많아도 오류는 아니에요."
  ],
  "check": {}
 },
 {
  "id": "fn-17",
  "unit": "fn",
  "freq": "high",
  "subject": 1,
  "topic": "콜백 괄호",
  "q": "버튼을 누를 때 hello 함수가 실행되게 하려면?",
  "options": [
   "btn.addEventListener(\"click\", hello());",
   "btn.addEventListener(\"click\", \"hello\");",
   "btn.addEventListener(hello, \"click\");",
   "btn.addEventListener(\"click\", hello);"
  ],
  "answer": 4,
  "exp": "함수를 넘길 땐 괄호 없이 이름만 써요. 그래야 누를 때 브라우저가 불러 줘요.",
  "why": [
   "hello()는 지금 바로 실행되고, 그 결과(undefined)가 넘어가요.",
   "문자열은 함수가 아니에요.",
   "이벤트 이름이 먼저, 함수가 두 번째예요.",
   ""
  ]
 },
 {
  "id": "fn-18",
  "unit": "fn",
  "freq": "mid",
  "subject": 1,
  "topic": "매개변수 인수",
  "q": "다음 코드에서 '인수'는?",
  "code": "function hi(name) {\n  return name + \"님\";\n}\nhi(\"민지\");",
  "options": [
   "name",
   "hi",
   "\"님\"",
   "\"민지\""
  ],
  "answer": 4,
  "exp": "인수는 함수를 부를 때 실제로 넣는 값이에요. name은 받는 쪽 이름인 매개변수예요.",
  "why": [
   "name은 매개변수예요.",
   "hi는 함수 이름이에요.",
   "\"님\"은 함수 안에서 붙이는 글자예요.",
   ""
  ]
 },
 {
  "id": "fn-19",
  "unit": "fn",
  "freq": "low",
  "subject": 1,
  "topic": "즉시 실행",
  "q": "출력 결과는?",
  "code": "const r = (() => {\n  const a = 2;\n  return a * 21;\n})();\nconsole.log(r);",
  "options": [
   "undefined",
   "함수 코드가 그대로 출력된다",
   "오류가 난다",
   "42"
  ],
  "answer": 4,
  "exp": "함수를 만들자마자 끝의 ()로 바로 불러서 42가 r에 들어가요 (즉시 실행 함수).",
  "why": [
   "return이 있어서 42를 돌려줘요.",
   "끝의 ()로 실행했으니 함수가 아니라 결과가 들어가요.",
   "올바른 문법이에요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "fn-20",
  "unit": "fn",
  "freq": "mid",
  "subject": 1,
  "topic": "함수 값",
  "q": "출력 결과는?",
  "code": "const say = () => \"야호\";\nconsole.log(typeof say, typeof say());",
  "options": [
   "string string",
   "function string",
   "function function",
   "object string"
  ],
  "answer": 2,
  "exp": "say는 함수라 \"function\", say()는 불러서 나온 \"야호\"라 \"string\"이에요.",
  "why": [
   "괄호 없는 say는 함수 자체예요.",
   "",
   "say()는 결과 문자열이에요.",
   "함수의 typeof는 \"function\"이에요."
  ],
  "check": {}
 },
 {
  "id": "fn-21",
  "unit": "fn",
  "freq": "low",
  "subject": 1,
  "topic": "기본값",
  "q": "출력 결과는?",
  "code": "function box(w, h = w * 2) {\n  return w + \"x\" + h;\n}\nconsole.log(box(3), box(3, 1));",
  "options": [
   "3xundefined 3x1",
   "3x6 3x6",
   "3x6 3x1",
   "3xNaN 3x1"
  ],
  "answer": 3,
  "exp": "기본값에 앞 매개변수를 쓸 수 있어요. h를 안 넣으면 3 * 2 = 6, 넣으면 그 값 1이에요.",
  "why": [
   "h를 안 넣으면 기본값 w * 2가 쓰여요.",
   "두 번째는 h에 1을 넣었어요.",
   "",
   "w가 3이라 계산이 돼요."
  ],
  "check": {}
 },
 {
  "id": "fn-22",
  "unit": "fn",
  "freq": "mid",
  "subject": 1,
  "topic": "블록 스코프",
  "q": "실행하면 어떻게 되는가?",
  "code": "for (let i = 0; i < 3; i++) {}\nconsole.log(i);",
  "options": [
   "ReferenceError 오류가 난다",
   "3이 출력된다",
   "2가 출력된다",
   "undefined가 출력된다"
  ],
  "answer": 1,
  "exp": "for의 let i는 반복문 안에서만 살아서, 밖에서 쓰면 ReferenceError예요. var였다면 3이 나와요.",
  "why": [
   "",
   "3은 var로 만들었을 때 결과예요.",
   "반복문 밖에서는 i가 없어요.",
   "없는 이름은 undefined가 아니라 오류예요."
  ],
  "check": {
   "err": "ReferenceError"
  }
 },
 {
  "id": "str-01",
  "unit": "str",
  "freq": "high",
  "subject": 2,
  "topic": "템플릿 리터럴",
  "q": "출력 결과는?",
  "code": "const item = \"연필\";\nconst n = 3;\nconsole.log(`${item} ${n}자루는 ${n * 500}원`);",
  "options": [
   "${item} ${n}자루는 ${n * 500}원",
   "연필 3자루는 3 * 500원",
   "item n자루는 1500원",
   "연필 3자루는 1500원"
  ],
  "answer": 4,
  "exp": "백틱 문자열 안의 ${ } 자리에 변수 값이나 계산 결과가 들어가요.",
  "why": [
   "백틱 안의 ${ }는 글자 그대로가 아니라 값으로 바뀌어요.",
   "${ } 안의 식은 계산돼요.",
   "${ } 안의 이름은 변수 값으로 바뀌어요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "str-02",
  "unit": "str",
  "freq": "high",
  "subject": 2,
  "topic": "length 인덱스",
  "q": "출력 결과는?",
  "code": "const s = \"apple\";\nconsole.log(s.length, s[1], s[s.length - 1]);",
  "options": [
   "5 a e",
   "4 p e",
   "5 p e",
   "5 p l"
  ],
  "answer": 3,
  "exp": "글자 수는 5, 번호는 0부터라 s[1]은 두 번째 글자 p, 마지막은 s[4]인 e예요.",
  "why": [
   "s[1]은 두 번째 글자예요. 첫 글자는 s[0]이에요.",
   "length는 글자 수 그대로 5예요.",
   "",
   "s.length - 1 = 4번 자리는 e예요."
  ],
  "check": {}
 },
 {
  "id": "str-03",
  "unit": "str",
  "freq": "mid",
  "subject": 2,
  "topic": "인덱스 없는 칸",
  "q": "출력 결과는?",
  "code": "const s = \"hi\";\nconsole.log(s[5]);",
  "options": [
   "오류가 난다",
   "\"\"",
   "null",
   "undefined"
  ],
  "answer": 4,
  "exp": "없는 번호의 글자를 읽으면 오류가 아니라 undefined예요.",
  "why": [
   "문자열 범위를 넘어 읽어도 오류는 안 나요.",
   "빈 문자열이 아니라 undefined예요.",
   "null이 아니라 undefined예요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "str-04",
  "unit": "str",
  "freq": "high",
  "subject": 2,
  "topic": "slice",
  "q": "출력 결과는?",
  "code": "const s = \"Hello World\";\nconsole.log(s.slice(0, 5), s.slice(6), s.slice(-3));",
  "options": [
   "Hello  World rld",
   "Hell World rld",
   "Hello World Wor",
   "Hello World rld"
  ],
  "answer": 4,
  "exp": "slice(0, 5)는 0~4번, slice(6)은 6번부터 끝까지, slice(-3)은 뒤에서 3글자예요.",
  "why": [
   "5번 칸(빈칸)은 slice(0, 5)에 들어가지 않아요.",
   "끝 번호 5의 바로 앞(4번 o)까지 들어가요.",
   "음수는 뒤에서부터 세서 rld예요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "str-05",
  "unit": "str",
  "freq": "high",
  "subject": 2,
  "topic": "indexOf",
  "q": "출력 결과는?",
  "code": "const s = \"banana\";\nconsole.log(s.indexOf(\"a\"), s.indexOf(\"na\"), s.indexOf(\"x\"));",
  "options": [
   "2 3 0",
   "1 2 -1",
   "1 2 0",
   "0 1 -1"
  ],
  "answer": 2,
  "exp": "indexOf는 처음 나오는 곳의 번호를 줘요. a는 1번, na는 2번에서 시작해요. 없으면 -1이에요.",
  "why": [
   "번호는 0부터 세요. b가 0번이에요.",
   "",
   "없을 때는 0이 아니라 -1이에요.",
   "b가 0번이라 a는 1번이에요."
  ],
  "check": {}
 },
 {
  "id": "str-06",
  "unit": "str",
  "freq": "high",
  "subject": 2,
  "topic": "includes",
  "q": "출력 결과는?",
  "code": "const title = \"JavaScript 기초\";\nconsole.log(title.includes(\"Script\"), title.includes(\"script\"));",
  "options": [
   "true true",
   "true false",
   "false false",
   "false true"
  ],
  "answer": 2,
  "exp": "includes는 대소문자를 구분해요. \"Script\"는 있고 \"script\"는 없어요.",
  "why": [
   "소문자 \"script\"는 들어 있지 않아요.",
   "",
   "\"Script\"는 그대로 들어 있어요.",
   "반대예요."
  ],
  "check": {}
 },
 {
  "id": "str-07",
  "unit": "str",
  "freq": "mid",
  "subject": 2,
  "topic": "startsWith endsWith",
  "q": "출력 결과는?",
  "code": "const file = \"photo.png\";\nconsole.log(file.endsWith(\".png\"), file.startsWith(\"Photo\"));",
  "options": [
   "true true",
   "false false",
   "true false",
   "false true"
  ],
  "answer": 3,
  "exp": "endsWith는 끝이 \".png\"라 true, startsWith는 대문자 P가 달라서 false예요.",
  "why": [
   "대소문자가 달라서 startsWith는 false예요.",
   "끝이 .png라 endsWith는 true예요.",
   "",
   "반대예요."
  ],
  "check": {}
 },
 {
  "id": "str-08",
  "unit": "str",
  "freq": "mid",
  "subject": 2,
  "topic": "trim 대소문자 변환",
  "q": "출력 결과는?",
  "code": "const input = \"  Mia  \";\nconst clean = input.trim().toLowerCase();\nconsole.log(\"[\" + clean + \"]\", input.length);",
  "options": [
   "[mia] 7",
   "[mia] 3",
   "[  mia  ] 7",
   "[MIA] 7"
  ],
  "answer": 1,
  "exp": "trim으로 앞뒤 빈칸을 지우고 소문자로 만든 새 문자열이 clean이에요. 원래 input은 그대로라 길이 7이에요.",
  "why": [
   "",
   "문자열 메서드는 원본을 바꾸지 않아서 input은 7글자 그대로예요.",
   "trim이 앞뒤 빈칸을 지웠어요.",
   "toLowerCase는 소문자로 바꿔요."
  ],
  "check": {}
 },
 {
  "id": "str-09",
  "unit": "str",
  "freq": "high",
  "subject": 2,
  "topic": "split join",
  "q": "출력 결과는?",
  "code": "const date = \"2026-10-27\";\nconst parts = date.split(\"-\");\nconsole.log(parts.length, parts.join(\".\"));",
  "options": [
   "3 2026.10.27",
   "1 2026-10-27",
   "3 20261027",
   "10 2026.10.27"
  ],
  "answer": 1,
  "exp": "\"-\"로 나누면 [\"2026\", \"10\", \"27\"] 3개가 되고, join(\".\")으로 점을 넣어 붙여요.",
  "why": [
   "",
   "\"-\"가 두 개라 세 조각으로 나뉘어요.",
   "join(\".\")은 사이에 점을 넣어요.",
   "length는 조각 수예요."
  ],
  "check": {}
 },
 {
  "id": "str-10",
  "unit": "str",
  "freq": "high",
  "subject": 2,
  "topic": "replace",
  "q": "출력 결과는?",
  "code": "const s = \"1-2-3\";\nconsole.log(s.replace(\"-\", \",\"), s.replaceAll(\"-\", \",\"));",
  "options": [
   "1,2,3 1,2,3",
   "1,2-3 1,2,3",
   "1-2-3 1,2,3",
   "1,2-3 1,2-3"
  ],
  "answer": 2,
  "exp": "replace는 처음 하나만, replaceAll은 전부 바꿔요.",
  "why": [
   "replace는 처음 만난 하나만 바꿔요.",
   "",
   "replace도 하나는 바꿔요.",
   "replaceAll은 모두 바꿔요."
  ],
  "check": {}
 },
 {
  "id": "str-11",
  "unit": "str",
  "freq": "mid",
  "subject": 2,
  "topic": "padStart repeat",
  "q": "출력 결과는?",
  "code": "const min = 5;\nconst sec = 7;\nconsole.log(String(min).padStart(2, \"0\") + \":\" + String(sec).padStart(2, \"0\"), \"=\".repeat(3));",
  "options": [
   "5:7 ===",
   "05:07 ===",
   "50:70 ===",
   "05:07 =3"
  ],
  "answer": 2,
  "exp": "padStart(2, \"0\")은 길이가 2가 될 때까지 앞에 0을 채워요. repeat(3)은 세 번 반복해요.",
  "why": [
   "padStart가 앞에 0을 채워서 두 자리가 돼요.",
   "",
   "padStart는 뒤가 아니라 앞을 채워요.",
   "repeat(3)은 글자를 세 번 이어 붙여요."
  ],
  "check": {}
 },
 {
  "id": "str-12",
  "unit": "str",
  "freq": "mid",
  "subject": 2,
  "topic": "문자열 뒤집기",
  "q": "출력 결과는?",
  "code": "const w = \"level\";\nconst r = w.split(\"\").reverse().join(\"\");\nconsole.log(r === w ? \"회문\" : \"아님\");",
  "options": [
   "회문",
   "아님",
   "level",
   "오류가 난다"
  ],
  "answer": 1,
  "exp": "글자로 나눠 뒤집고 다시 붙이면 \"level\" 그대로라 회문(앞뒤가 같은 말)이에요.",
  "why": [
   "",
   "뒤집어도 level이라 같아요.",
   "삼항 연산자는 고른 문자열을 돌려줘요.",
   "문자열은 split으로 배열로 바꾼 뒤 reverse할 수 있어요."
  ],
  "check": {}
 },
 {
  "id": "str-13",
  "unit": "str",
  "freq": "low",
  "subject": 2,
  "topic": "at(-1) 인덱스",
  "q": "출력 결과는?",
  "code": "const s = \"코딩\";\nconsole.log(s.at(-1), s.at(0), s[-1]);",
  "options": [
   "딩 코 딩",
   "딩 코 undefined",
   "코 딩 undefined",
   "딩 코 오류"
  ],
  "answer": 2,
  "exp": "at(-1)은 뒤에서 첫 글자예요. 하지만 대괄호에 -1을 넣으면 '-1'이라는 이름의 칸을 찾아서 undefined예요.",
  "why": [
   "대괄호에는 음수 번호가 통하지 않아요.",
   "",
   "at(-1)이 마지막 글자, at(0)이 첫 글자예요.",
   "없는 칸을 읽으면 오류가 아니라 undefined예요."
  ],
  "check": {}
 },
 {
  "id": "str-14",
  "unit": "str",
  "freq": "mid",
  "subject": 2,
  "topic": "이스케이프 줄바꿈",
  "q": "출력 결과는?",
  "code": "console.log(\"가\\n나\".length);",
  "options": [
   "4",
   "3",
   "2",
   "5"
  ],
  "answer": 2,
  "exp": "\\n은 두 글자로 쓰지만 줄바꿈 한 글자예요. 가, 줄바꿈, 나로 3글자예요.",
  "why": [
   "\\n은 한 글자로 쳐요.",
   "",
   "줄바꿈도 한 글자라 2가 아니에요.",
   "따옴표는 글자 수에 들어가지 않아요."
  ],
  "check": {}
 },
 {
  "id": "str-15",
  "unit": "str",
  "freq": "low",
  "subject": 2,
  "topic": "문자열 + 비교",
  "q": "출력 결과는?",
  "code": "let s = \"\";\nfor (let i = 0; i < 3; i++) s += i;\nconsole.log(s, typeof s);",
  "options": [
   "3 number",
   "012 number",
   "012 string",
   "3 string"
  ],
  "answer": 3,
  "exp": "빈 문자열에 숫자를 +=하면 붙이기가 돼서 \"012\"예요.",
  "why": [
   "처음 값이 문자열이라 더하기가 아니라 붙이기예요.",
   "s는 계속 문자열이에요.",
   "",
   "붙인 결과는 012예요."
  ],
  "check": {}
 },
 {
  "id": "str-16",
  "unit": "str",
  "freq": "low",
  "subject": 2,
  "topic": "toUpperCase 메서드",
  "q": "출력 결과는?",
  "code": "const name = \"kim\";\nconsole.log(name[0].toUpperCase() + name.slice(1));",
  "options": [
   "KIM",
   "Kim",
   "kim",
   "Kkim"
  ],
  "answer": 2,
  "exp": "첫 글자만 대문자로 바꾸고 나머지(1번부터)를 붙였어요.",
  "why": [
   "첫 글자 하나만 대문자로 바꿨어요.",
   "",
   "name[0]을 대문자로 바꿨어요.",
   "slice(1)은 첫 글자를 빼고 붙여요."
  ],
  "check": {}
 },
 {
  "id": "arr-01",
  "unit": "arr",
  "freq": "high",
  "subject": 2,
  "topic": "배열 인덱스",
  "q": "출력 결과는?",
  "code": "const colors = [\"빨강\", \"초록\", \"파랑\"];\nconsole.log(colors[1], colors.length);",
  "options": [
   "빨강 3",
   "초록 3",
   "초록 2",
   "파랑 3"
  ],
  "answer": 2,
  "exp": "번호는 0부터라 1번은 두 번째 초록이에요. 길이는 3이에요.",
  "why": [
   "0번이 빨강, 1번은 초록이에요.",
   "",
   "길이는 값의 개수 3이에요.",
   "파랑은 2번이에요."
  ],
  "check": {}
 },
 {
  "id": "arr-02",
  "unit": "arr",
  "freq": "high",
  "subject": 2,
  "topic": "push pop",
  "q": "출력 결과는?",
  "code": "const s = [1, 2];\nconst a = s.push(3);\nconst b = s.pop();\nconsole.log(a, b, s.length);",
  "options": [
   "[1,2,3] 3 2",
   "3 2 2",
   "3 3 2",
   "2 3 3"
  ],
  "answer": 3,
  "exp": "push는 새 길이(3)를, pop은 뺀 값(3)을 돌려줘요. 남은 길이는 2예요.",
  "why": [
   "push는 배열이 아니라 새 길이를 돌려줘요.",
   "pop은 마지막 값 3을 빼요.",
   "",
   "push 뒤 길이는 3이에요."
  ],
  "check": {}
 },
 {
  "id": "arr-03",
  "unit": "arr",
  "freq": "mid",
  "subject": 2,
  "topic": "shift unshift",
  "q": "출력 결과는?",
  "code": "const q = [\"b\", \"c\"];\nq.unshift(\"a\");\nconst first = q.shift();\nconsole.log(first, q.join(\"\"));",
  "options": [
   "b ac",
   "a abc",
   "c ab",
   "a bc"
  ],
  "answer": 4,
  "exp": "unshift로 앞에 a를 넣어 [a, b, c], shift로 맨 앞 a를 빼서 [b, c]가 남아요.",
  "why": [
   "shift는 맨 앞(a)을 빼요.",
   "a는 빠졌어요.",
   "c는 맨 끝이라 shift로 빠지지 않아요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "arr-04",
  "unit": "arr",
  "freq": "mid",
  "subject": 2,
  "topic": "배열 바꾸기 length",
  "q": "출력 결과는?",
  "code": "const a = [1, 2, 3, 4, 5];\na.length = 2;\nconsole.log(a.join(\",\"));",
  "options": [
   "1,2",
   "1,2,3,4,5",
   "4,5",
   "오류가 난다"
  ],
  "answer": 1,
  "exp": "length에 더 작은 수를 넣으면 뒤쪽이 잘려 나가요.",
  "why": [
   "",
   "length를 줄이면 실제로 값이 잘려요.",
   "앞에서부터 2개가 남아요.",
   "length는 넣을 수 있는 속성이에요."
  ],
  "check": {}
 },
 {
  "id": "arr-05",
  "unit": "arr",
  "freq": "high",
  "subject": 2,
  "topic": "slice",
  "q": "출력 결과는?",
  "code": "const a = [10, 20, 30, 40];\nconst b = a.slice(1, 3);\nconsole.log(b.join(\",\"), a.length);",
  "options": [
   "20,30,40 4",
   "10,20,30 4",
   "20,30 4",
   "20,30 2"
  ],
  "answer": 3,
  "exp": "slice(1, 3)은 1번부터 3번 바로 앞까지 [20, 30]을 복사해요. 원본은 그대로 4개예요.",
  "why": [
   "끝 번호 3(40)은 들어가지 않아요.",
   "1번부터 시작해요.",
   "",
   "slice는 원본을 바꾸지 않아요."
  ],
  "check": {}
 },
 {
  "id": "arr-06",
  "unit": "arr",
  "freq": "high",
  "subject": 2,
  "topic": "splice",
  "q": "출력 결과는?",
  "code": "const a = [\"가\", \"나\", \"다\", \"라\"];\nconst removed = a.splice(1, 2);\nconsole.log(removed.join(\"\"), a.join(\"\"));",
  "options": [
   "나다 가라",
   "나다 가나다라",
   "나 가다라",
   "가나 다라"
  ],
  "answer": 1,
  "exp": "splice(1, 2)는 1번부터 2개(나, 다)를 원본에서 잘라 내요. 원본에는 가, 라가 남아요.",
  "why": [
   "",
   "splice는 원본을 바꿔요.",
   "두 번째 수 2는 끝 번호가 아니라 개수예요.",
   "1번부터 잘라요. 0번 가는 남아요."
  ],
  "check": {}
 },
 {
  "id": "arr-07",
  "unit": "arr",
  "freq": "mid",
  "subject": 2,
  "topic": "splice 넣기",
  "q": "출력 결과는?",
  "code": "const a = [1, 4];\na.splice(1, 0, 2, 3);\nconsole.log(a.join(\",\"));",
  "options": [
   "1,2,3,4",
   "1,4,2,3",
   "2,3,1,4",
   "1,2,3"
  ],
  "answer": 1,
  "exp": "splice(1, 0, 2, 3)은 1번 자리에서 0개를 지우고 2, 3을 끼워 넣어요.",
  "why": [
   "",
   "끝이 아니라 1번 자리에 넣어요.",
   "맨 앞이 아니라 1번 자리예요.",
   "지운 게 0개라 4는 남아요."
  ],
  "check": {}
 },
 {
  "id": "arr-08",
  "unit": "arr",
  "freq": "high",
  "subject": 2,
  "topic": "includes indexOf",
  "q": "출력 결과는?",
  "code": "const tags = [\"js\", \"html\", \"css\"];\nconsole.log(tags.indexOf(\"css\"), tags.includes(\"HTML\"));",
  "options": [
   "3 false",
   "2 false",
   "2 true",
   "-1 false"
  ],
  "answer": 2,
  "exp": "css는 2번에 있어요. includes는 대소문자를 구분해서 대문자 \"HTML\"은 없어요.",
  "why": [
   "번호는 0부터라 css는 2번이에요.",
   "",
   "대소문자가 달라서 false예요.",
   "css는 있어서 -1이 아니에요."
  ],
  "check": {}
 },
 {
  "id": "arr-09",
  "unit": "arr",
  "freq": "high",
  "subject": 2,
  "topic": "펼치기 합치기",
  "q": "출력 결과는?",
  "code": "const a = [1, 2];\nconst b = [0, ...a, 3];\nconsole.log(b.length, b.join(\"\"));",
  "options": [
   "4 0123",
   "3 0[1,2]3",
   "4 1203",
   "5 0123"
  ],
  "answer": 1,
  "exp": "...a가 1, 2를 낱개로 펼쳐서 [0, 1, 2, 3]이 돼요.",
  "why": [
   "",
   "...은 배열을 통째로가 아니라 낱개로 넣어요.",
   "순서는 0, 1, 2, 3이에요.",
   "값은 4개예요."
  ],
  "check": {}
 },
 {
  "id": "arr-10",
  "unit": "arr",
  "freq": "mid",
  "subject": 2,
  "topic": "구조 분해",
  "q": "출력 결과는?",
  "code": "const [x, , z = 9, w = 7] = [1, 2, 3];\nconsole.log(x, z, w);",
  "options": [
   "1 2 3",
   "1 9 7",
   "1 3 undefined",
   "1 3 7"
  ],
  "answer": 4,
  "exp": "빈 쉼표로 2를 건너뛰고 z는 3이에요. 넷째 값이 없어서 w는 기본값 7이에요.",
  "why": [
   "두 번째 자리는 쉼표로 건너뛰었어요.",
   "z 자리에 값 3이 있어서 기본값 9는 안 쓰여요.",
   "w는 값이 없어서 기본값 7이에요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "arr-11",
  "unit": "arr",
  "freq": "high",
  "subject": 2,
  "topic": "map",
  "q": "출력 결과는?",
  "code": "const nums = [1, 2, 3];\nconst sq = nums.map(n => n * n);\nconsole.log(sq.join(\",\"), nums.join(\",\"));",
  "options": [
   "1,4,9 1,4,9",
   "2,4,6 1,2,3",
   "1,4,9 1,2,3",
   "14 1,2,3"
  ],
  "answer": 3,
  "exp": "map은 각 값을 제곱한 새 배열을 만들고 원본은 그대로예요.",
  "why": [
   "map은 원본을 바꾸지 않아요.",
   "n * n은 제곱이에요.",
   "",
   "map은 배열을 돌려줘요."
  ],
  "check": {}
 },
 {
  "id": "arr-12",
  "unit": "arr",
  "freq": "high",
  "subject": 2,
  "topic": "filter",
  "q": "출력 결과는?",
  "code": "const words = [\"사과\", \"바나나\", \"배\", \"포도\"];\nconsole.log(words.filter(w => w.length >= 2).join(\",\"));",
  "options": [
   "사과,바나나,포도",
   "바나나",
   "사과,바나나,배,포도",
   "배"
  ],
  "answer": 1,
  "exp": "글자 수가 2 이상인 것만 남겨요. \"배\"는 1글자라 빠져요.",
  "why": [
   "",
   "2글자인 사과·포도도 >= 2라 남아요.",
   "배는 1글자라 빠져요.",
   "배는 조건에 맞지 않아 빠져요."
  ],
  "check": {}
 },
 {
  "id": "arr-13",
  "unit": "arr",
  "freq": "high",
  "subject": 2,
  "topic": "reduce",
  "q": "출력 결과는?",
  "code": "const cart = [1200, 800, 2000];\nconst total = cart.reduce((sum, p) => sum + p, 0);\nconsole.log(total);",
  "options": [
   "12008002000",
   "2000",
   "4000",
   "0"
  ],
  "answer": 3,
  "exp": "0부터 시작해서 1200, 800, 2000을 차례로 더해 4000이에요.",
  "why": [
   "값이 숫자라 붙이지 않고 더해요.",
   "마지막 값만이 아니라 모두 더해요.",
   "",
   "초깃값 0에 계속 더해 가요."
  ],
  "check": {}
 },
 {
  "id": "arr-14",
  "unit": "arr",
  "freq": "mid",
  "subject": 2,
  "topic": "reduce 초깃값",
  "q": "출력 결과는?",
  "code": "const r = [\"a\", \"b\", \"c\"].reduce((acc, ch) => ch + acc);\nconsole.log(r);",
  "options": [
   "cba",
   "abc",
   "a",
   "undefinedcba"
  ],
  "answer": 1,
  "exp": "초깃값이 없어서 첫 값 \"a\"가 acc가 되고 b부터 돌아요. \"b\" + \"a\" = \"ba\", \"c\" + \"ba\" = \"cba\"예요.",
  "why": [
   "",
   "새 글자를 앞에 붙여서 거꾸로 돼요.",
   "모든 값을 모았어요.",
   "초깃값이 없으면 첫 값이 초깃값이라 undefined가 붙지 않아요."
  ],
  "check": {}
 },
 {
  "id": "arr-15",
  "unit": "arr",
  "freq": "mid",
  "subject": 2,
  "topic": "메서드 연결",
  "q": "출력 결과는?",
  "code": "const r = [5, 12, 8, 20]\n  .filter(n => n > 6)\n  .map(n => n / 2);\nconsole.log(r.join(\",\"));",
  "options": [
   "2.5,6,4,10",
   "12,8,20",
   "6,10",
   "6,4,10"
  ],
  "answer": 4,
  "exp": "먼저 6보다 큰 12, 8, 20을 고르고, 그다음 반으로 나눠요.",
  "why": [
   "5는 filter에서 먼저 빠져요.",
   "filter 뒤에 map으로 반으로 나눴어요.",
   "8도 6보다 커서 남아요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "arr-16",
  "unit": "arr",
  "freq": "high",
  "subject": 2,
  "topic": "find",
  "q": "출력 결과는?",
  "code": "const nums = [3, 7, 10, 14];\nconsole.log(nums.find(n => n > 5), nums.findIndex(n => n > 5));",
  "options": [
   "10 2",
   "7,10,14 1",
   "7 1",
   "7 2"
  ],
  "answer": 3,
  "exp": "find는 조건에 맞는 첫 값 7, findIndex는 그 번호 1이에요.",
  "why": [
   "처음 맞는 값은 7이에요.",
   "find는 하나만 돌려줘요.",
   "",
   "7의 번호는 1이에요."
  ],
  "check": {}
 },
 {
  "id": "arr-17",
  "unit": "arr",
  "freq": "mid",
  "subject": 2,
  "topic": "some every",
  "q": "출력 결과는?",
  "code": "const scores = [70, 85, 90];\nconsole.log(scores.some(s => s >= 90), scores.every(s => s >= 80));",
  "options": [
   "true false",
   "true true",
   "false false",
   "false true"
  ],
  "answer": 1,
  "exp": "90이 하나 있어서 some은 true, 70이 80 미만이라 every는 false예요.",
  "why": [
   "",
   "70 때문에 every는 false예요.",
   "90은 >= 90이라 some은 true예요.",
   "반대예요."
  ],
  "check": {}
 },
 {
  "id": "arr-18",
  "unit": "arr",
  "freq": "mid",
  "subject": 2,
  "topic": "forEach",
  "q": "출력 결과는?",
  "code": "let s = \"\";\n[\"a\", \"b\", \"c\"].forEach((x, i) => {\n  s += i + x;\n});\nconsole.log(s);",
  "options": [
   "0a1b2c",
   "abc",
   "a0b1c2",
   "012"
  ],
  "answer": 1,
  "exp": "forEach는 (값, 번호)를 넘겨줘요. i + x는 번호 다음 글자라 0a1b2c예요.",
  "why": [
   "",
   "번호 i도 함께 붙였어요.",
   "i + x라서 번호가 먼저예요.",
   "값 x도 붙였어요."
  ],
  "check": {}
 },
 {
  "id": "arr-19",
  "unit": "arr",
  "freq": "high",
  "subject": 2,
  "topic": "sort 비교 함수",
  "q": "출력 결과는?",
  "code": "const a = [3, 20, 100, 5];\nconsole.log(a.sort((x, y) => x - y).join(\",\"));",
  "options": [
   "100,20,3,5",
   "100,20,5,3",
   "3,5,20,100",
   "3,20,100,5"
  ],
  "answer": 3,
  "exp": "x - y 비교 함수로 숫자 크기대로 작은 것부터 정렬해요.",
  "why": [
   "비교 함수가 있어서 글자 순서가 아니에요.",
   "x - y는 작은 것부터(오름차순)예요.",
   "",
   "sort는 순서를 실제로 바꿔요."
  ],
  "check": {}
 },
 {
  "id": "arr-20",
  "unit": "arr",
  "freq": "mid",
  "subject": 2,
  "topic": "reverse",
  "q": "출력 결과는?",
  "code": "const a = [1, 2, 3];\nconst b = a.reverse();\nconsole.log(a.join(\"\"), b.join(\"\"));",
  "options": [
   "321 321",
   "123 321",
   "321 123",
   "123 123"
  ],
  "answer": 1,
  "exp": "reverse는 원본 a를 뒤집고 그 배열을 돌려줘서 a와 b가 같아요.",
  "why": [
   "",
   "reverse는 원본을 바꿔요.",
   "b는 a와 같은 배열이에요.",
   "a도 뒤집혔어요."
  ],
  "check": {}
 },
 {
  "id": "arr-21",
  "unit": "arr",
  "freq": "low",
  "subject": 2,
  "topic": "flat",
  "q": "출력 결과는?",
  "code": "const a = [1, [2, 3], [4, [5]]];\nconsole.log(a.length, a.flat().length);",
  "options": [
   "5 5",
   "3 6",
   "3 4",
   "3 5"
  ],
  "answer": 4,
  "exp": "a의 칸은 3개예요. flat()은 한 단계만 펼쳐서 [1, 2, 3, 4, [5]]로 5칸이 돼요.",
  "why": [
   "a는 겉에서 보면 3칸이에요.",
   "flat()은 한 단계만 펼쳐서 [5]는 그대로 한 칸이에요.",
   "펼치면 5칸이에요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "arr-22",
  "unit": "arr",
  "freq": "mid",
  "subject": 2,
  "topic": "배열 비교",
  "q": "출력 결과는?",
  "code": "const a = [1, 2];\nconst b = [1, 2];\nconsole.log(a === b, a.join() === b.join());",
  "options": [
   "true true",
   "false true",
   "false false",
   "true false"
  ],
  "answer": 2,
  "exp": "배열 ===는 같은 상자인지 봐서 따로 만든 a, b는 false예요. join으로 만든 문자열끼리는 같아서 true예요.",
  "why": [
   "내용이 같아도 다른 배열이라 ===는 false예요.",
   "",
   "join 결과는 둘 다 \"1,2\"라 같아요.",
   "반대예요."
  ],
  "check": {}
 },
 {
  "id": "arr-23",
  "unit": "arr",
  "freq": "low",
  "subject": 2,
  "topic": "2차원 배열",
  "q": "출력 결과는?",
  "code": "const board = [\n  [1, 2, 3],\n  [4, 5, 6],\n];\nconsole.log(board[1][2], board.length, board[0].length);",
  "options": [
   "6 2 3",
   "2 3 2",
   "6 3 2",
   "5 2 3"
  ],
  "answer": 1,
  "exp": "board[1]은 [4, 5, 6], 그중 [2]는 6이에요. 바깥은 2줄, 한 줄은 3칸이에요.",
  "why": [
   "",
   "board[1][2]는 둘째 줄의 셋째 값이에요.",
   "바깥 배열은 2줄이에요.",
   "번호는 0부터라 [1][2]는 6이에요."
  ],
  "check": {}
 },
 {
  "id": "arr-24",
  "unit": "arr",
  "freq": "low",
  "subject": 2,
  "topic": "concat 복사",
  "q": "출력 결과는?",
  "code": "const a = [1, 2];\nconst b = a.concat([3]);\nconst c = [...a];\nc.push(9);\nconsole.log(a.length, b.length, c.length);",
  "options": [
   "3 3 3",
   "2 3 3",
   "2 3 2",
   "4 3 3"
  ],
  "answer": 2,
  "exp": "concat과 [...a]는 새 배열을 만들어서 a는 그대로 2개예요.",
  "why": [
   "concat은 원본 a를 바꾸지 않아요.",
   "",
   "c에 push해서 c는 3개예요.",
   "c는 a의 복사본이라 a에 영향이 없어요."
  ],
  "check": {}
 },
 {
  "id": "obj-01",
  "unit": "obj",
  "freq": "high",
  "subject": 2,
  "topic": "점 표기 대괄호",
  "q": "출력 결과는?",
  "code": "const book = { title: \"어린 왕자\", page: 120 };\nconsole.log(book.title, book[\"page\"]);",
  "options": [
   "title page",
   "어린 왕자 120",
   "undefined 120",
   "어린 왕자 undefined"
  ],
  "answer": 2,
  "exp": "점 표기와 대괄호(따옴표 키) 모두 속성 값을 읽어요.",
  "why": [
   "키가 아니라 값이 나와요.",
   "",
   "book.title은 있는 속성이에요.",
   "대괄호 안 \"page\"로도 읽혀요."
  ],
  "check": {}
 },
 {
  "id": "obj-02",
  "unit": "obj",
  "freq": "high",
  "subject": 2,
  "topic": "대괄호 키 이름",
  "q": "출력 결과는?",
  "code": "const user = { name: \"민지\", key: \"비밀\" };\nconst key = \"name\";\nconsole.log(user[key], user.key);",
  "options": [
   "민지 비밀",
   "비밀 비밀",
   "민지 민지",
   "undefined 비밀"
  ],
  "answer": 1,
  "exp": "user[key]는 변수 key의 값 \"name\"으로 찾고, user.key는 이름이 key인 속성을 찾아요.",
  "why": [
   "",
   "대괄호 안 key는 변수라 \"name\"으로 찾아요.",
   "user.key는 이름 그대로 key 속성이에요.",
   "user[key]는 name 속성을 찾아서 민지예요."
  ],
  "check": {}
 },
 {
  "id": "obj-03",
  "unit": "obj",
  "freq": "mid",
  "subject": 2,
  "topic": "속성 추가 delete",
  "q": "출력 결과는?",
  "code": "const p = { a: 1, b: 2 };\np.c = 3;\ndelete p.a;\nconsole.log(Object.keys(p).join(\",\"), p.a);",
  "options": [
   "a,b,c 1",
   "b,c 1",
   "a,b undefined",
   "b,c undefined"
  ],
  "answer": 4,
  "exp": "c가 새로 생기고 a는 지워져서 키는 b, c예요. 지운 속성을 읽으면 undefined예요.",
  "why": [
   "delete로 a가 없어졌어요.",
   "지운 속성은 값이 없어요.",
   "새로 넣은 c가 있어요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "obj-04",
  "unit": "obj",
  "freq": "mid",
  "subject": 2,
  "topic": "in 연산자",
  "q": "출력 결과는?",
  "code": "const o = { x: undefined };\nconsole.log(\"x\" in o, \"y\" in o, o.x === o.y);",
  "options": [
   "false false true",
   "true false true",
   "true true true",
   "true false false"
  ],
  "answer": 2,
  "exp": "in은 키가 있는지만 봐요. x는 값이 undefined여도 키가 있어서 true예요. o.x와 o.y는 둘 다 undefined라 같아요.",
  "why": [
   "x는 값이 undefined지만 키는 있어요.",
   "",
   "y는 키가 없어요.",
   "o.x도 o.y도 undefined라 ===는 true예요."
  ],
  "check": {}
 },
 {
  "id": "obj-05",
  "unit": "obj",
  "freq": "low",
  "subject": 2,
  "topic": "단축 속성 계산된 키",
  "q": "출력 결과는?",
  "code": "const city = \"부산\";\nconst field = \"zip\";\nconst addr = { city, [field]: \"48000\" };\nconsole.log(addr.city, addr.zip, addr.field);",
  "options": [
   "city 48000 zip",
   "부산 undefined 48000",
   "부산 48000 undefined",
   "부산 48000 zip"
  ],
  "answer": 3,
  "exp": "{ city }는 { city: city }의 줄임, [field]는 변수 값 \"zip\"을 키로 써요. field라는 키는 없어요.",
  "why": [
   "단축 속성은 변수 값을 넣어요.",
   "[field]로 키 이름이 zip이 됐어요.",
   "",
   "field라는 이름의 키는 없어서 undefined예요."
  ],
  "check": {}
 },
 {
  "id": "obj-06",
  "unit": "obj",
  "freq": "high",
  "subject": 2,
  "topic": "메서드 this",
  "q": "출력 결과는?",
  "code": "const acc = {\n  money: 1000,\n  spend(n) {\n    this.money -= n;\n    return this.money;\n  },\n};\nacc.spend(300);\nconsole.log(acc.spend(200));",
  "options": [
   "700",
   "800",
   "500",
   "1000"
  ],
  "answer": 3,
  "exp": "this는 acc라서 money가 1000 → 700 → 500으로 줄어요.",
  "why": [
   "두 번 썼어요. 300과 200이에요.",
   "this.money를 직접 바꿔서 누적돼요.",
   "",
   "spend가 money를 줄였어요."
  ],
  "check": {}
 },
 {
  "id": "obj-07",
  "unit": "obj",
  "freq": "high",
  "subject": 2,
  "topic": "Object.keys",
  "q": "출력 결과는?",
  "code": "const fruit = { 사과: 3, 배: 5, 귤: 2 };\nconsole.log(Object.keys(fruit).length, Object.values(fruit).join(\"+\"));",
  "options": [
   "3 3+5+2",
   "3 사과+배+귤",
   "10 3+5+2",
   "6 3+5+2"
  ],
  "answer": 1,
  "exp": "키는 3개, 값을 \"+\"로 이으면 3+5+2예요. join은 계산하지 않고 붙이기만 해요.",
  "why": [
   "",
   "values는 키가 아니라 값이에요.",
   "keys의 개수는 3이에요.",
   "속성은 3개예요."
  ],
  "check": {}
 },
 {
  "id": "obj-08",
  "unit": "obj",
  "freq": "mid",
  "subject": 2,
  "topic": "Object.entries",
  "q": "출력 결과는?",
  "code": "const price = { 김밥: 3000, 라면: 4000 };\nconst lines = Object.entries(price).map(([k, v]) => k + v / 1000);\nconsole.log(lines.join(\", \"));",
  "options": [
   "김밥3000, 라면4000",
   "3, 4",
   "김밥, 라면",
   "김밥3, 라면4"
  ],
  "answer": 4,
  "exp": "entries는 [키, 값] 짝을 줘요. v / 1000을 먼저 계산(3)한 뒤 키에 붙여요.",
  "why": [
   "v / 1000을 계산해서 3, 4가 돼요.",
   "키도 함께 붙였어요.",
   "값도 계산해서 붙였어요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "obj-09",
  "unit": "obj",
  "freq": "high",
  "subject": 2,
  "topic": "구조 분해",
  "q": "출력 결과는?",
  "code": "const pet = { kind: \"고양이\", age: 2 };\nconst { age, kind: type, name = \"이름 없음\" } = pet;\nconsole.log(type, age, name);",
  "options": [
   "고양이 2 이름 없음",
   "undefined 2 이름 없음",
   "고양이 2 undefined",
   "kind 2 name"
  ],
  "answer": 1,
  "exp": "kind는 type이라는 새 이름으로 꺼냈고, name은 없어서 기본값이 들어가요.",
  "why": [
   "",
   "kind: type은 kind 값을 type 변수에 넣어요.",
   "name이 없으면 기본값 \"이름 없음\"이에요.",
   "키 이름이 아니라 값이 들어가요."
  ],
  "check": {}
 },
 {
  "id": "obj-10",
  "unit": "obj",
  "freq": "mid",
  "subject": 2,
  "topic": "펼치기 합치기",
  "q": "출력 결과는?",
  "code": "const base = { a: 1, b: 2 };\nconst ext = { b: 20, c: 30 };\nconst m = { ...base, ...ext };\nconsole.log(m.a, m.b, m.c);",
  "options": [
   "1 2 30",
   "1 22 30",
   "오류가 난다",
   "1 20 30"
  ],
  "answer": 4,
  "exp": "겹치는 키 b는 뒤에 펼친 ext의 20이 이겨요.",
  "why": [
   "뒤에 쓴 ext가 b를 덮어써요.",
   "값을 더하지 않고 덮어써요.",
   "객체 펼치기는 올바른 문법이에요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "obj-11",
  "unit": "obj",
  "freq": "high",
  "subject": 2,
  "topic": "참조",
  "q": "출력 결과는?",
  "code": "const list = [1, 2];\nconst copy = list;\ncopy.push(3);\nconsole.log(list.length);",
  "options": [
   "2",
   "3",
   "1",
   "오류가 난다"
  ],
  "answer": 2,
  "exp": "copy = list는 같은 배열을 가리켜서 copy에 넣으면 list도 3개예요.",
  "why": [
   "배열은 복사되지 않고 같은 상자를 같이 써요.",
   "",
   "길이는 값의 개수예요.",
   "const 배열에 push는 돼요."
  ],
  "check": {}
 },
 {
  "id": "obj-12",
  "unit": "obj",
  "freq": "mid",
  "subject": 2,
  "topic": "깊은 복사 structuredClone",
  "q": "출력 결과는?",
  "code": "const a = { list: [1, 2] };\nconst b = structuredClone(a);\nb.list.push(3);\nconsole.log(a.list.length, b.list.length);",
  "options": [
   "2 3",
   "3 3",
   "2 2",
   "3 2"
  ],
  "answer": 1,
  "exp": "structuredClone은 안쪽 배열까지 새로 만들어서 b를 바꿔도 a는 그대로예요.",
  "why": [
   "",
   "깊은 복사라 a.list는 따로예요.",
   "b.list에는 3이 들어갔어요.",
   "a는 바뀌지 않았어요."
  ],
  "check": {}
 },
 {
  "id": "obj-13",
  "unit": "obj",
  "freq": "high",
  "subject": 2,
  "topic": "JSON stringify",
  "q": "출력 결과는?",
  "code": "const data = { id: 7, ok: true, tags: [\"a\"] };\nconsole.log(JSON.stringify(data));",
  "options": [
   "{id:7,ok:true,tags:[a]}",
   "[object Object]",
   "{'id':7,'ok':true,'tags':['a']}",
   "{\"id\":7,\"ok\":true,\"tags\":[\"a\"]}"
  ],
  "answer": 4,
  "exp": "JSON은 키와 문자열을 큰따옴표로 감싸고 빈칸 없이 적어요.",
  "why": [
   "JSON의 키에는 큰따옴표가 꼭 있어야 해요.",
   "stringify는 객체를 JSON 글자로 바꿔요.",
   "JSON은 작은따옴표를 쓰지 않아요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "obj-14",
  "unit": "obj",
  "freq": "high",
  "subject": 2,
  "topic": "JSON parse",
  "q": "출력 결과는?",
  "code": "const text = '{\"name\":\"준호\",\"score\":\"90\"}';\nconst o = JSON.parse(text);\nconsole.log(o.name, o.score + 10);",
  "options": [
   "준호 9010",
   "준호 100",
   "undefined NaN",
   "오류가 난다"
  ],
  "answer": 1,
  "exp": "JSON 안의 \"90\"은 따옴표가 있어서 문자열이에요. 그래서 + 10은 붙이기예요.",
  "why": [
   "",
   "score는 문자열 \"90\"이라 더하기가 아니에요.",
   "올바른 JSON이라 잘 읽혀요.",
   "형식이 맞아서 오류가 나지 않아요."
  ],
  "check": {}
 },
 {
  "id": "obj-15",
  "unit": "obj",
  "freq": "mid",
  "subject": 2,
  "topic": "JSON 함수 undefined",
  "q": "출력 결과는?",
  "code": "const o = { a: 1, b: undefined, c: () => 1, d: null };\nconsole.log(JSON.stringify(o));",
  "options": [
   "{\"a\":1,\"d\":null}",
   "{\"a\":1,\"b\":undefined,\"c\":null,\"d\":null}",
   "{\"a\":1,\"b\":null,\"d\":null}",
   "{\"a\":1,\"b\":undefined,\"d\":null}"
  ],
  "answer": 1,
  "exp": "JSON에는 undefined와 함수를 적을 수 없어서 그 속성은 빠져요. null은 그대로 남아요.",
  "why": [
   "",
   "undefined는 JSON 값이 아니에요.",
   "undefined 속성은 null이 아니라 아예 빠져요.",
   "undefined는 JSON에 적히지 않아요."
  ],
  "check": {}
 },
 {
  "id": "obj-16",
  "unit": "obj",
  "freq": "high",
  "subject": 2,
  "topic": "?. 옵셔널",
  "q": "출력 결과는?",
  "code": "const res = { data: null };\nconsole.log(res.data?.items?.length ?? 0);",
  "options": [
   "undefined",
   "0",
   "TypeError 오류",
   "null"
  ],
  "answer": 2,
  "exp": "res.data가 null이라 ?.가 거기서 멈추고 undefined를 줘요. ?? 0으로 0이 돼요.",
  "why": [
   "?? 0이 undefined를 0으로 바꿔요.",
   "",
   "?.를 써서 오류 대신 undefined가 돼요.",
   "?. 결과는 undefined이고 ??로 0이 돼요."
  ],
  "check": {}
 },
 {
  "id": "obj-17",
  "unit": "obj",
  "freq": "mid",
  "subject": 2,
  "topic": "TypeError 속성",
  "q": "실행하면 어떻게 되는가?",
  "code": "const user = {};\nconsole.log(user.profile.name);",
  "options": [
   "undefined가 출력된다",
   "null이 출력된다",
   "TypeError 오류가 난다",
   "\"\"이 출력된다"
  ],
  "answer": 3,
  "exp": "user.profile은 undefined예요. undefined의 속성 name을 읽으려 하면 TypeError예요. user.profile?.name이라면 undefined예요.",
  "why": [
   "user.profile까지는 undefined지만, 그 안을 읽는 순간 오류예요.",
   "null이 나오는 곳이 없어요.",
   "",
   "빈 문자열이 아니라 오류예요."
  ],
  "check": {
   "err": "TypeError"
  }
 },
 {
  "id": "obj-18",
  "unit": "obj",
  "freq": "low",
  "subject": 2,
  "topic": "중첩 객체",
  "q": "출력 결과는?",
  "code": "const school = { name: \"새싹초\", classes: [{ no: 1, kids: 20 }, { no: 2, kids: 22 }] };\nconsole.log(school.classes[1].kids, school.classes.length);",
  "options": [
   "20 2",
   "22 1",
   "22 2",
   "2 22"
  ],
  "answer": 3,
  "exp": "classes[1]은 두 번째 반 { no: 2, kids: 22 }예요. 반은 2개예요.",
  "why": [
   "번호 1은 두 번째예요.",
   "classes에는 반이 2개 있어요.",
   "",
   "순서가 반대예요."
  ],
  "check": {}
 },
 {
  "id": "class-01",
  "unit": "class",
  "freq": "high",
  "subject": 2,
  "topic": "constructor new",
  "q": "출력 결과는?",
  "code": "class Player {\n  constructor(name) {\n    this.name = name;\n    this.hp = 100;\n  }\n}\nconst p = new Player(\"용사\");\nconsole.log(p.name, p.hp);",
  "options": [
   "undefined 100",
   "name hp",
   "용사 undefined",
   "용사 100"
  ],
  "answer": 4,
  "exp": "new로 만들면 constructor가 실행돼서 name과 hp가 채워져요.",
  "why": [
   "constructor에서 name을 넣었어요.",
   "키 이름이 아니라 값이 나와요.",
   "hp도 constructor에서 100을 넣었어요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "class-02",
  "unit": "class",
  "freq": "high",
  "subject": 2,
  "topic": "클래스 메서드",
  "q": "출력 결과는?",
  "code": "class Box {\n  constructor(n) {\n    this.n = n;\n  }\n  add(k) {\n    this.n += k;\n    return this.n;\n  }\n}\nconst b = new Box(1);\nb.add(2);\nconsole.log(b.add(3));",
  "options": [
   "4",
   "6",
   "3",
   "1"
  ],
  "answer": 2,
  "exp": "1에 2를 더해 3, 다시 3을 더해 6이에요.",
  "why": [
   "두 번 더한 누적이에요.",
   "",
   "this.n이 계속 바뀌어요.",
   "add가 n을 바꿨어요."
  ],
  "check": {}
 },
 {
  "id": "class-03",
  "unit": "class",
  "freq": "mid",
  "subject": 2,
  "topic": "인스턴스",
  "q": "출력 결과는?",
  "code": "class Cup {\n  water = 0;\n}\nconst a = new Cup();\nconst b = new Cup();\na.water = 5;\nconsole.log(a.water, b.water);",
  "options": [
   "5 5",
   "0 0",
   "5 0",
   "0 5"
  ],
  "answer": 3,
  "exp": "인스턴스마다 자기 water를 따로 가져요. a를 바꿔도 b는 0이에요.",
  "why": [
   "a와 b는 서로 다른 객체예요.",
   "a는 5로 바꿨어요.",
   "",
   "바꾼 건 a예요."
  ],
  "check": {}
 },
 {
  "id": "class-04",
  "unit": "class",
  "freq": "mid",
  "subject": 2,
  "topic": "new 없이",
  "q": "실행하면 어떻게 되는가?",
  "code": "class Car {}\nconst c = Car();",
  "options": [
   "c에 Car 객체가 들어간다",
   "c에 undefined가 들어간다",
   "TypeError 오류가 난다",
   "ReferenceError 오류가 난다"
  ],
  "answer": 3,
  "exp": "클래스는 new 없이 부르면 TypeError(Class constructor cannot be invoked without 'new')예요.",
  "why": [
   "클래스는 new로만 객체를 만들 수 있어요.",
   "조용히 undefined가 되지 않고 오류예요.",
   "",
   "Car라는 이름은 있어서 ReferenceError가 아니에요."
  ],
  "check": {
   "err": "TypeError"
  }
 },
 {
  "id": "class-05",
  "unit": "class",
  "freq": "high",
  "subject": 2,
  "topic": "extends super",
  "q": "출력 결과는?",
  "code": "class Shape {\n  constructor(name) {\n    this.name = name;\n  }\n  info() {\n    return this.name;\n  }\n}\nclass Square extends Shape {\n  constructor(side) {\n    super(\"정사각형\");\n    this.side = side;\n  }\n  area() {\n    return this.side ** 2;\n  }\n}\nconst s = new Square(3);\nconsole.log(s.info(), s.area());",
  "options": [
   "undefined 9",
   "정사각형 6",
   "Square 9",
   "정사각형 9"
  ],
  "answer": 4,
  "exp": "super(\"정사각형\")으로 부모가 name을 채우고, info는 물려받아요. 넓이는 3 ** 2 = 9예요.",
  "why": [
   "super로 부모 constructor가 name을 넣었어요.",
   "3 ** 2는 9예요.",
   "name은 클래스 이름이 아니라 넣은 값이에요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "class-06",
  "unit": "class",
  "freq": "mid",
  "subject": 2,
  "topic": "super 없이",
  "q": "실행하면 어떻게 되는가?",
  "code": "class A {}\nclass B extends A {\n  constructor() {\n    this.x = 1;\n  }\n}\nnew B();",
  "options": [
   "x가 1인 객체가 만들어진다",
   "아무 일도 일어나지 않는다",
   "SyntaxError로 실행 전에 멈춘다",
   "ReferenceError 오류가 난다"
  ],
  "answer": 4,
  "exp": "자식 클래스의 constructor에서는 super()를 부르기 전에 this를 쓸 수 없어요. ReferenceError가 나요.",
  "why": [
   "super()를 먼저 불러야 this를 쓸 수 있어요.",
   "new B()에서 오류가 나요.",
   "문법은 맞아서 실행은 되고, new B() 순간에 오류가 나요.",
   ""
  ],
  "check": {
   "err": "ReferenceError"
  }
 },
 {
  "id": "class-07",
  "unit": "class",
  "freq": "high",
  "subject": 2,
  "topic": "오버라이드",
  "q": "출력 결과는?",
  "code": "class Animal {\n  speak() {\n    return \"...\";\n  }\n  intro() {\n    return \"소리: \" + this.speak();\n  }\n}\nclass Dog extends Animal {\n  speak() {\n    return \"멍멍\";\n  }\n}\nconsole.log(new Dog().intro());",
  "options": [
   "소리: 멍멍",
   "소리: ...",
   "멍멍",
   "오류가 난다"
  ],
  "answer": 1,
  "exp": "intro는 부모에 있지만 this는 Dog 인스턴스라서 this.speak()는 Dog의 speak를 불러요.",
  "why": [
   "",
   "this가 Dog라서 자식의 speak가 불려요.",
   "intro가 \"소리: \"를 앞에 붙여요.",
   "intro는 부모에게서 물려받아 쓸 수 있어요."
  ],
  "check": {}
 },
 {
  "id": "class-08",
  "unit": "class",
  "freq": "mid",
  "subject": 2,
  "topic": "instanceof",
  "q": "출력 결과는?",
  "code": "class A {}\nclass B extends A {}\nconst a = new A();\nconst b = new B();\nconsole.log(b instanceof A, a instanceof B);",
  "options": [
   "true true",
   "false false",
   "true false",
   "false true"
  ],
  "answer": 3,
  "exp": "B는 A를 물려받아서 b는 A의 인스턴스이기도 해요. 하지만 a는 B가 아니에요.",
  "why": [
   "부모 A로 만든 a는 자식 B가 아니에요.",
   "자식 인스턴스는 부모 instanceof도 true예요.",
   "",
   "반대예요."
  ],
  "check": {}
 },
 {
  "id": "class-09",
  "unit": "class",
  "freq": "mid",
  "subject": 2,
  "topic": "static",
  "q": "출력 결과는?",
  "code": "class Util {\n  static hello() {\n    return \"안녕\";\n  }\n}\nconst u = new Util();\nconsole.log(Util.hello(), typeof u.hello);",
  "options": [
   "안녕 function",
   "안녕 undefined",
   "undefined 안녕",
   "오류가 난다"
  ],
  "answer": 2,
  "exp": "static 메서드는 클래스 이름으로 불러요. 인스턴스에는 없어서 u.hello는 undefined예요.",
  "why": [
   "static 메서드는 인스턴스에 없어요.",
   "",
   "Util.hello()는 \"안녕\"이에요.",
   "typeof는 없는 속성에도 오류 없이 \"undefined\"를 줘요."
  ],
  "check": {}
 },
 {
  "id": "class-10",
  "unit": "class",
  "freq": "mid",
  "subject": 2,
  "topic": "get getter",
  "q": "출력 결과는?",
  "code": "class Temp {\n  constructor(c) {\n    this.c = c;\n  }\n  get f() {\n    return this.c * 9 / 5 + 32;\n  }\n}\nconst t = new Temp(100);\nconsole.log(t.f, typeof t.f);",
  "options": [
   "212 function",
   "undefined number",
   "212 number",
   "100 number"
  ],
  "answer": 3,
  "exp": "get으로 만든 f는 괄호 없이 속성처럼 읽어요. 100 * 9 / 5 + 32 = 212예요.",
  "why": [
   "getter는 읽을 때 값이 나와서 typeof가 number예요.",
   "get f()가 값을 계산해 돌려줘요.",
   "",
   "c가 아니라 f를 읽었어요."
  ],
  "check": {}
 },
 {
  "id": "class-11",
  "unit": "class",
  "freq": "low",
  "subject": 2,
  "topic": "# 비공개",
  "q": "출력 결과는?",
  "code": "class Safe {\n  #code = 1234;\n  check(n) {\n    return n === this.#code;\n  }\n}\nconst s = new Safe();\nconsole.log(s.check(1234), s.code);",
  "options": [
   "true 1234",
   "false undefined",
   "오류가 난다",
   "true undefined"
  ],
  "answer": 4,
  "exp": "#code는 클래스 안에서만 읽을 수 있어요. 밖에서 s.code는 다른 이름이라 undefined예요.",
  "why": [
   "#code는 밖에서 보이지 않아요.",
   "check(1234)는 맞는 번호라 true예요.",
   "s.code는 없는 속성이라 오류 대신 undefined예요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "class-12",
  "unit": "class",
  "freq": "low",
  "subject": 2,
  "topic": "typeof 클래스",
  "q": "출력 결과는?",
  "code": "class Note {}\nconsole.log(typeof Note, typeof new Note());",
  "options": [
   "class object",
   "object object",
   "function object",
   "class class"
  ],
  "answer": 3,
  "exp": "클래스는 사실 특별한 함수라 typeof가 \"function\", new로 만든 인스턴스는 \"object\"예요.",
  "why": [
   "typeof는 \"class\"를 돌려주지 않아요.",
   "클래스 자체는 함수예요.",
   "",
   "\"class\"라는 typeof 결과는 없어요."
  ],
  "check": {}
 },
 {
  "id": "dom-01",
  "unit": "dom",
  "freq": "high",
  "subject": 2,
  "topic": "querySelector",
  "q": "출력 결과는?",
  "html": "<p class=\"msg\">첫째</p>\n<p class=\"msg\">둘째</p>",
  "code": "const p = document.querySelector(\".msg\");\nconsole.log(p.textContent);",
  "options": [
   "둘째",
   "첫째둘째",
   "첫째",
   "null"
  ],
  "answer": 3,
  "exp": "querySelector는 맞는 요소 중 첫 번째 하나만 돌려줘요.",
  "why": [
   "첫 번째에서 멈춰요.",
   "하나만 찾아요.",
   "",
   "class가 msg인 요소가 있어서 null이 아니에요."
  ],
  "check": {}
 },
 {
  "id": "dom-02",
  "unit": "dom",
  "freq": "high",
  "subject": 2,
  "topic": "querySelectorAll",
  "q": "출력 결과는?",
  "html": "<ul>\n  <li>A</li>\n  <li class=\"on\">B</li>\n  <li class=\"on\">C</li>\n</ul>",
  "code": "const on = document.querySelectorAll(\"li.on\");\nconsole.log(on.length, on[1].textContent);",
  "options": [
   "3 B",
   "2 B",
   "1 C",
   "2 C"
  ],
  "answer": 4,
  "exp": "li.on은 class가 on인 li예요. B, C 두 개이고 [1]은 두 번째 C예요.",
  "why": [
   "class가 on인 것만 찾아요.",
   "[1]은 두 번째예요.",
   "on은 두 개예요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "dom-03",
  "unit": "dom",
  "freq": "mid",
  "subject": 2,
  "topic": "없는 요소",
  "q": "실행하면 어떻게 되는가?",
  "html": "<div id=\"box\">상자</div>",
  "code": "const el = document.querySelector(\"#boxx\");\nel.textContent = \"바꿈\";",
  "options": [
   "상자가 바꿈으로 바뀐다",
   "새 요소가 만들어진다",
   "TypeError 오류가 난다",
   "아무 일도 일어나지 않는다"
  ],
  "answer": 3,
  "exp": "id를 잘못 써서 querySelector가 null을 돌려줘요. null의 속성을 바꾸려 하면 TypeError예요.",
  "why": [
   "#boxx는 없어서 상자가 바뀌지 않아요.",
   "querySelector는 요소를 만들지 않아요.",
   "",
   "null에 속성을 넣으면 오류가 나요."
  ],
  "check": {
   "err": "TypeError"
  }
 },
 {
  "id": "dom-04",
  "unit": "dom",
  "freq": "high",
  "subject": 2,
  "topic": "getElementById",
  "q": "id가 title인 요소를 찾는 코드로 틀린 것은?",
  "options": [
   "document.getElementById(\"title\")",
   "document.querySelector(\"#title\")",
   "document.querySelector(\"[id=title]\")",
   "document.getElementById(\"#title\")"
  ],
  "answer": 4,
  "exp": "getElementById에는 id 이름만 써요. #을 붙이면 '#title'이라는 id를 찾아서 null이에요.",
  "why": [
   "getElementById에는 # 없이 쓰는 게 맞아요.",
   "querySelector에는 #을 붙이는 게 맞아요.",
   "속성 선택자 [id=title]도 맞는 선택자예요.",
   ""
  ],
  "check": {
   "js": "const { JSDOM } = require(\"jsdom\");\nconst d = new JSDOM('<h1 id=\"title\">t</h1>').window.document;\nconst ok = [d.getElementById(\"title\"), d.querySelector(\"#title\"), d.querySelector(\"[id=title]\")].every(Boolean);\nconsole.log(ok && d.getElementById(\"#title\") === null ? 'document.getElementById(\"#title\")' : \"?\");"
  }
 },
 {
  "id": "dom-05",
  "unit": "dom",
  "freq": "high",
  "subject": 2,
  "topic": "textContent innerHTML",
  "q": "출력 결과는?",
  "html": "<div id=\"a\"></div>\n<div id=\"b\"></div>",
  "code": "document.querySelector(\"#a\").textContent = \"<i>기울임</i>\";\ndocument.querySelector(\"#b\").innerHTML = \"<i>기울임</i>\";\nconsole.log(document.querySelectorAll(\"i\").length);",
  "options": [
   "2",
   "1",
   "0",
   "오류가 난다"
  ],
  "answer": 2,
  "exp": "textContent는 태그를 글자로 넣어서 i 요소가 안 생겨요. innerHTML만 진짜 i 요소를 만들어서 1개예요.",
  "why": [
   "textContent로 넣은 <i>는 글자일 뿐이에요.",
   "",
   "innerHTML은 HTML로 해석해서 i가 하나 생겨요.",
   "두 방법 모두 오류는 아니에요."
  ],
  "check": {}
 },
 {
  "id": "dom-06",
  "unit": "dom",
  "freq": "high",
  "subject": 2,
  "topic": "classList",
  "q": "출력 결과는?",
  "html": "<div id=\"card\" class=\"box\"></div>",
  "code": "const c = document.querySelector(\"#card\");\nc.classList.add(\"big\");\nc.classList.toggle(\"box\");\nc.classList.toggle(\"dark\");\nconsole.log(c.className);",
  "options": [
   "box big dark",
   "box big",
   "big dark",
   "dark"
  ],
  "answer": 3,
  "exp": "big을 더하고, 있던 box는 toggle로 빠지고, 없던 dark는 toggle로 들어가요.",
  "why": [
   "toggle은 있으면 빼요. box는 빠졌어요.",
   "dark는 없어서 toggle로 생겼어요.",
   "",
   "add한 big도 남아 있어요."
  ],
  "check": {}
 },
 {
  "id": "dom-07",
  "unit": "dom",
  "freq": "mid",
  "subject": 2,
  "topic": "setAttribute getAttribute",
  "q": "출력 결과는?",
  "html": "<a id=\"link\" href=\"a.html\">링크</a>",
  "code": "const a = document.querySelector(\"#link\");\na.setAttribute(\"href\", \"b.html\");\nconsole.log(a.getAttribute(\"href\"), a.getAttribute(\"title\"));",
  "options": [
   "b.html null",
   "a.html null",
   "b.html undefined",
   "b.html \"\""
  ],
  "answer": 1,
  "exp": "setAttribute로 href가 b.html로 바뀌었어요. 없는 속성을 getAttribute하면 null이에요.",
  "why": [
   "",
   "setAttribute로 바뀌었어요.",
   "getAttribute는 없을 때 undefined가 아니라 null이에요.",
   "빈 문자열이 아니라 null이에요."
  ],
  "check": {}
 },
 {
  "id": "dom-08",
  "unit": "dom",
  "freq": "high",
  "subject": 2,
  "topic": "value",
  "q": "입력 칸 두 개에 3과 4를 적었을 때 출력 결과는?",
  "html": "<input id=\"a\" value=\"3\">\n<input id=\"b\" value=\"4\">",
  "code": "const a = document.querySelector(\"#a\").value;\nconst b = document.querySelector(\"#b\").value;\nconsole.log(a + b, Number(a) + Number(b));",
  "options": [
   "7 7",
   "34 34",
   "34 7",
   "7 34"
  ],
  "answer": 3,
  "exp": "value는 항상 문자열이라 a + b는 \"34\"예요. Number로 바꿔야 7이 돼요.",
  "why": [
   "value는 문자열이라 더하기가 아니라 붙이기예요.",
   "Number로 바꾼 뒤에는 더하기예요.",
   "",
   "반대예요."
  ],
  "check": {}
 },
 {
  "id": "dom-09",
  "unit": "dom",
  "freq": "mid",
  "subject": 2,
  "topic": "dataset",
  "q": "출력 결과는?",
  "html": "<button id=\"buy\" data-price=\"1500\" data-item-name=\"연필\">사기</button>",
  "code": "const b = document.querySelector(\"#buy\");\nconsole.log(b.dataset.price * 2, b.dataset.itemName);",
  "options": [
   "15001500 연필",
   "3000 undefined",
   "NaN 연필",
   "3000 연필"
  ],
  "answer": 4,
  "exp": "data-price는 dataset.price, data-item-name은 dataset.itemName(카멜 표기)으로 읽어요. *는 숫자로 바꿔 계산해요.",
  "why": [
   "*는 문자열을 숫자로 바꿔 곱해요.",
   "data-item-name은 itemName으로 읽혀요.",
   "\"1500\"은 숫자로 바뀌어요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "dom-10",
  "unit": "dom",
  "freq": "high",
  "subject": 2,
  "topic": "createElement append",
  "q": "출력 결과는?",
  "html": "<ul id=\"list\"><li>하나</li></ul>",
  "code": "const li = document.createElement(\"li\");\nli.textContent = \"둘\";\nconst count1 = document.querySelectorAll(\"li\").length;\ndocument.querySelector(\"#list\").append(li);\nconsole.log(count1, document.querySelectorAll(\"li\").length);",
  "options": [
   "1 2",
   "2 2",
   "1 1",
   "2 3"
  ],
  "answer": 1,
  "exp": "createElement만 해서는 문서에 없어요. append한 뒤에 li가 2개가 돼요.",
  "why": [
   "",
   "만들기만 하면 아직 문서에 붙지 않았어요.",
   "append로 붙였으니 2개가 됐어요.",
   "처음엔 하나뿐이에요."
  ],
  "check": {}
 },
 {
  "id": "dom-11",
  "unit": "dom",
  "freq": "mid",
  "subject": 2,
  "topic": "remove prepend",
  "q": "출력 결과는?",
  "html": "<div id=\"box\"><b>A</b><b>B</b><b>C</b></div>",
  "code": "const box = document.querySelector(\"#box\");\nbox.querySelector(\"b\").remove();\nconst x = document.createElement(\"b\");\nx.textContent = \"Z\";\nbox.prepend(x);\nconsole.log(box.textContent);",
  "options": [
   "ZABC",
   "BCZ",
   "ZBC",
   "ABCZ"
  ],
  "answer": 3,
  "exp": "첫 b(A)를 지우고, Z를 맨 앞에 붙여서 ZBC예요.",
  "why": [
   "A는 remove로 지워졌어요.",
   "prepend는 앞에 붙여요.",
   "",
   "A가 지워졌고 Z는 앞이에요."
  ],
  "check": {}
 },
 {
  "id": "dom-12",
  "unit": "dom",
  "freq": "high",
  "subject": 2,
  "topic": "addEventListener click",
  "q": "출력 결과는? (`click()`은 버튼을 누른 것처럼 흉내 내요)",
  "html": "<button id=\"btn\">눌러요</button>",
  "code": "let n = 0;\nconst btn = document.querySelector(\"#btn\");\nbtn.addEventListener(\"click\", () => n++);\nbtn.addEventListener(\"click\", () => n += 10);\nbtn.click();\nconsole.log(n);",
  "options": [
   "1",
   "10",
   "11",
   "0"
  ],
  "answer": 3,
  "exp": "한 요소에 여러 함수를 달 수 있고, 누르면 모두 차례대로 실행돼요.",
  "why": [
   "두 번째 함수도 실행돼요.",
   "첫 번째 함수도 실행돼요.",
   "",
   "click()으로 실제로 이벤트가 일어났어요."
  ],
  "check": {}
 },
 {
  "id": "dom-13",
  "unit": "dom",
  "freq": "mid",
  "subject": 2,
  "topic": "event.target 위임",
  "q": "두 번째 버튼을 눌렀을 때 출력 결과는?",
  "html": "<div id=\"menu\">\n  <button data-id=\"1\">하나</button>\n  <button data-id=\"2\">둘</button>\n</div>",
  "code": "document.querySelector(\"#menu\").addEventListener(\"click\", e => {\n  console.log(e.target.dataset.id, e.currentTarget.id);\n});\ndocument.querySelectorAll(\"button\")[1].click();",
  "options": [
   "1 menu",
   "2 menu",
   "2 2",
   "undefined menu"
  ],
  "answer": 2,
  "exp": "버튼 클릭은 부모 div로 전해져요. e.target은 실제로 누른 버튼, e.currentTarget은 함수를 단 div예요.",
  "why": [
   "두 번째 버튼을 눌렀어요.",
   "",
   "currentTarget은 이벤트를 단 요소 div예요.",
   "e.target은 data-id가 있는 버튼이에요."
  ],
  "check": {}
 },
 {
  "id": "dom-14",
  "unit": "dom",
  "freq": "mid",
  "subject": 2,
  "topic": "preventDefault submit",
  "q": "폼 제출(submit) 이벤트에서 `e.preventDefault()`를 부르는 까닭은?",
  "options": [
   "페이지가 새로 고쳐지는 기본 동작을 막고 자바스크립트로 처리하려고",
   "이벤트를 지우려고",
   "입력 칸을 비우려고",
   "다른 폼도 함께 제출하려고"
  ],
  "answer": 1,
  "exp": "폼은 제출하면 페이지를 이동(새로 고침)하는 기본 동작이 있어요. preventDefault는 그걸 막아요.",
  "why": [
   "",
   "이벤트를 떼는 건 removeEventListener예요.",
   "입력 칸 값은 그대로 남아요.",
   "다른 폼과는 상관없어요."
  ]
 },
 {
  "id": "async-01",
  "unit": "async",
  "freq": "high",
  "subject": 2,
  "topic": "try catch",
  "q": "출력 결과는?",
  "code": "try {\n  console.log(\"1\");\n  null.x;\n  console.log(\"2\");\n} catch (e) {\n  console.log(\"3\");\n}\nconsole.log(\"4\");",
  "options": [
   "1\n2\n3\n4",
   "1\n3",
   "1\n3\n4",
   "3\n4"
  ],
  "answer": 3,
  "exp": "null.x에서 오류가 나면 try의 남은 줄(2)은 건너뛰고 catch로 가요. 그다음 4도 실행돼요.",
  "why": [
   "오류가 난 뒤의 2는 실행되지 않아요.",
   "catch로 잡아서 프로그램이 계속돼 4도 나와요.",
   "",
   "오류 전의 1은 이미 실행됐어요."
  ],
  "check": {}
 },
 {
  "id": "async-02",
  "unit": "async",
  "freq": "high",
  "subject": 2,
  "topic": "finally",
  "q": "출력 결과는?",
  "code": "function f() {\n  try {\n    return \"A\";\n  } finally {\n    console.log(\"B\");\n  }\n}\nconsole.log(f());",
  "options": [
   "A\nB",
   "A",
   "B",
   "B\nA"
  ],
  "answer": 4,
  "exp": "return이 있어도 finally가 먼저 실행된 다음 함수가 끝나요. 그래서 B가 먼저, 돌려받은 A가 나중이에요.",
  "why": [
   "finally는 함수가 끝나기 전에 실행돼요.",
   "finally의 B도 출력돼요.",
   "f()가 돌려준 A도 출력돼요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "async-03",
  "unit": "async",
  "freq": "mid",
  "subject": 2,
  "topic": "throw",
  "q": "출력 결과는?",
  "code": "function check(age) {\n  if (age < 0) throw new Error(\"나이 오류\");\n  return \"OK\";\n}\ntry {\n  console.log(check(5));\n  console.log(check(-1));\n} catch (e) {\n  console.log(e.message);\n}",
  "options": [
   "OK",
   "나이 오류",
   "OK\n나이 오류",
   "OK\nOK"
  ],
  "answer": 3,
  "exp": "check(5)는 OK, check(-1)은 throw로 오류를 던져서 catch가 메시지를 보여 줘요.",
  "why": [
   "두 번째 호출에서 오류가 던져져 catch로 가요.",
   "첫 호출의 OK는 이미 출력됐어요.",
   "",
   "-1은 오류를 던져요."
  ],
  "check": {}
 },
 {
  "id": "async-04",
  "unit": "async",
  "freq": "mid",
  "subject": 2,
  "topic": "오류 종류",
  "q": "없는 변수 이름을 썼을 때 나는 오류는?",
  "options": [
   "TypeError",
   "SyntaxError",
   "ReferenceError",
   "RangeError"
  ],
  "answer": 3,
  "exp": "ReferenceError는 '그런 이름이 없어요'라는 뜻이에요.",
  "why": [
   "TypeError는 값의 종류가 맞지 않을 때(undefined의 속성 읽기 등)예요.",
   "SyntaxError는 문법이 틀렸을 때예요.",
   "",
   "RangeError는 허용 범위를 넘었을 때예요."
  ],
  "check": {
   "assert": "const assert = require('assert');\nassert.throws(() => notDefinedName, ReferenceError);"
  }
 },
 {
  "id": "async-05",
  "unit": "async",
  "freq": "high",
  "subject": 2,
  "topic": "setTimeout 실행 순서",
  "q": "출력 결과는?",
  "code": "setTimeout(() => console.log(\"가\"), 100);\nsetTimeout(() => console.log(\"나\"), 0);\nconsole.log(\"다\");",
  "options": [
   "가\n나\n다",
   "나\n가\n다",
   "다\n가\n나",
   "다\n나\n가"
  ],
  "answer": 4,
  "exp": "지금 코드(다)가 먼저, 그다음 짧은 타이머(나), 마지막에 100밀리초 타이머(가)예요.",
  "why": [
   "타이머는 지금 코드가 다 끝난 뒤에 실행돼요.",
   "0초 타이머라도 다보다 늦어요.",
   "시간이 짧은 나가 가보다 먼저예요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "async-06",
  "unit": "async",
  "freq": "mid",
  "subject": 2,
  "topic": "clearTimeout",
  "q": "출력 결과는?",
  "code": "const id = setTimeout(() => console.log(\"알람\"), 50);\nclearTimeout(id);\nconsole.log(\"취소함\");",
  "options": [
   "취소함\n알람",
   "알람\n취소함",
   "알람",
   "취소함"
  ],
  "answer": 4,
  "exp": "clearTimeout으로 타이머를 취소해서 알람은 실행되지 않아요.",
  "why": [
   "타이머가 취소되어 알람은 안 나와요.",
   "알람은 취소돼서 나오지 않아요.",
   "취소함은 바로 출력돼요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "async-07",
  "unit": "async",
  "freq": "low",
  "subject": 2,
  "topic": "setInterval",
  "q": "출력 결과는?",
  "code": "let n = 0;\nconst id = setInterval(() => {\n  n++;\n  if (n === 3) {\n    clearInterval(id);\n    console.log(\"끝\", n);\n  }\n}, 10);",
  "options": [
   "끝 1",
   "끝 3",
   "끝 0",
   "아무것도 출력되지 않는다"
  ],
  "answer": 2,
  "exp": "10밀리초마다 n이 1씩 커지고, 3이 되면 멈추며 출력해요.",
  "why": [
   "n이 3일 때 출력해요.",
   "",
   "반복할 때마다 n++를 해요.",
   "세 번째에 조건이 맞아서 출력돼요."
  ],
  "check": {}
 },
 {
  "id": "async-08",
  "unit": "async",
  "freq": "high",
  "subject": 2,
  "topic": "Promise then",
  "q": "출력 결과는?",
  "code": "const p = new Promise(resolve => resolve(5));\np.then(v => v * 2).then(v => console.log(\"값:\", v));\nconsole.log(\"먼저\");",
  "options": [
   "값: 10\n먼저",
   "먼저\n값: 5",
   "먼저\n값: 10",
   "값: 5\n먼저"
  ],
  "answer": 3,
  "exp": "then은 지금 코드가 끝난 뒤 실행돼서 먼저가 먼저예요. 첫 then이 돌려준 10이 다음 then으로 가요.",
  "why": [
   "then은 바로 실행되지 않아요.",
   "첫 then에서 2를 곱했어요.",
   "",
   "then은 \"먼저\" 다음에 실행돼요."
  ],
  "check": {}
 },
 {
  "id": "async-09",
  "unit": "async",
  "freq": "high",
  "subject": 2,
  "topic": "reject",
  "q": "출력 결과는?",
  "code": "Promise.reject(new Error(\"실패\"))\n  .then(() => console.log(\"성공\"))\n  .catch(e => console.log(\"잡음:\", e.message))\n  .then(() => console.log(\"다음\"));",
  "options": [
   "성공\n잡음: 실패",
   "잡음: 실패\n다음",
   "잡음: 실패",
   "성공\n다음"
  ],
  "answer": 2,
  "exp": "실패한 Promise는 then을 건너뛰고 catch로 가요. catch가 처리한 뒤에는 다음 then이 정상적으로 실행돼요.",
  "why": [
   "실패라서 \"성공\" then은 건너뛰어요.",
   "",
   "catch 뒤의 then도 실행돼요.",
   "실패한 Promise라 성공 then은 안 돌아요."
  ],
  "check": {}
 },
 {
  "id": "async-10",
  "unit": "async",
  "freq": "mid",
  "subject": 2,
  "topic": "Promise.all",
  "q": "출력 결과는?",
  "code": "const wait = (ms, v) => new Promise(r => setTimeout(() => r(v), ms));\nPromise.all([wait(30, \"A\"), wait(10, \"B\"), \"C\"]).then(r => console.log(r.join(\"\")));",
  "options": [
   "ABC",
   "BAC",
   "CBA",
   "BCA"
  ],
  "answer": 1,
  "exp": "Promise.all은 끝난 순서와 상관없이 넣은 순서대로 결과를 줘요. Promise가 아닌 \"C\"도 그대로 들어가요.",
  "why": [
   "",
   "먼저 끝난 순서가 아니라 넣은 순서예요.",
   "넣은 순서는 A, B, C예요.",
   "B가 먼저 끝나도 결과 순서는 그대로예요."
  ],
  "check": {}
 },
 {
  "id": "async-11",
  "unit": "async",
  "freq": "high",
  "subject": 2,
  "topic": "async 함수 반환",
  "q": "출력 결과는?",
  "code": "async function getScore() {\n  return 90;\n}\nconst r = getScore();\nconsole.log(r instanceof Promise);\nr.then(v => console.log(v + 1));",
  "options": [
   "true\n91",
   "false\n91",
   "true\n90",
   "91\ntrue"
  ],
  "answer": 1,
  "exp": "async 함수는 무엇을 return해도 Promise를 돌려줘요. then으로 꺼낸 값은 90이라 91이 나와요.",
  "why": [
   "",
   "async 함수의 결과는 늘 Promise예요.",
   "v + 1이라 91이에요.",
   "then은 나중에 실행돼서 true가 먼저예요."
  ],
  "check": {}
 },
 {
  "id": "async-12",
  "unit": "async",
  "freq": "high",
  "subject": 2,
  "topic": "await",
  "q": "출력 결과는?",
  "code": "const wait = ms => new Promise(r => setTimeout(r, ms));\nasync function main() {\n  console.log(\"시작\");\n  await wait(20);\n  console.log(\"20ms 뒤\");\n}\nmain();\nconsole.log(\"main 밖\");",
  "options": [
   "시작\n20ms 뒤\nmain 밖",
   "시작\nmain 밖\n20ms 뒤",
   "main 밖\n시작\n20ms 뒤",
   "시작\nmain 밖"
  ],
  "answer": 2,
  "exp": "await는 main 안에서만 기다려요. 그동안 바깥 코드(main 밖)가 먼저 실행돼요.",
  "why": [
   "await는 함수 밖의 코드를 멈추지 않아요.",
   "",
   "main() 안의 시작은 바로 실행돼요.",
   "20ms 뒤에 마지막 줄도 실행돼요."
  ],
  "check": {}
 },
 {
  "id": "async-13",
  "unit": "async",
  "freq": "mid",
  "subject": 2,
  "topic": "await 오류",
  "q": "출력 결과는?",
  "code": "async function load() {\n  try {\n    const v = await Promise.reject(new Error(\"끊김\"));\n    return v;\n  } catch (e) {\n    return \"기본값\";\n  }\n}\nload().then(console.log);",
  "options": [
   "끊김",
   "undefined",
   "오류가 난다",
   "기본값"
  ],
  "answer": 4,
  "exp": "await한 Promise가 실패하면 그 자리에서 오류가 나고 catch가 받아요. 그래서 \"기본값\"을 돌려줘요.",
  "why": [
   "catch가 받아서 기본값을 돌려줬어요.",
   "return v는 실행되지 않았어요.",
   "try/catch로 잡았어요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "async-14",
  "unit": "async",
  "freq": "low",
  "subject": 2,
  "topic": "순차 병렬",
  "q": "a와 b를 각각 100ms 걸리는 함수라고 할 때, 더 빨리 끝나는 쪽은?",
  "code": "// (가)\nconst x = await a();\nconst y = await b();\n// (나)\nconst [x2, y2] = await Promise.all([a(), b()]);",
  "options": [
   "(가) 약 100ms",
   "둘 다 약 200ms",
   "둘 다 약 100ms",
   "(나) 약 100ms"
  ],
  "answer": 4,
  "exp": "(가)는 a를 다 기다린 뒤 b를 시작해서 약 200ms, (나)는 둘을 한꺼번에 시작해서 약 100ms예요.",
  "why": [
   "(가)는 하나씩 차례로 기다려서 200ms쯤 걸려요.",
   "(나)는 동시에 기다려서 100ms쯤이에요.",
   "(가)는 200ms쯤이에요.",
   ""
  ]
 },
 {
  "id": "async-15",
  "unit": "async",
  "freq": "high",
  "subject": 2,
  "topic": "fetch json()",
  "q": "fetch로 받은 JSON 데이터를 객체로 꺼내는 코드로 알맞은 것은?",
  "options": [
   "const data = fetch(url).json();",
   "const data = JSON.parse(fetch(url));",
   "const data = await fetch(url).data;",
   "const data = await (await fetch(url)).json();"
  ],
  "answer": 4,
  "exp": "fetch도, res.json()도 Promise라서 두 번 기다려야 해요.",
  "why": [
   "fetch(url)은 Promise라 바로 .json()을 부를 수 없어요.",
   "fetch의 결과는 글자가 아니라 Promise라 parse할 수 없어요.",
   "`.data`가 await보다 먼저 Promise에 붙어서 undefined가 돼요. 응답을 기다린 뒤 res.json()을 불러야 해요.",
   ""
  ],
  "check": {
   "js": "fetch = async () => ({ json: async () => ({ ok: 1 }) });\n(async () => {\n  const url = \"x\";\n  const data = await (await fetch(url)).json();\n  let bad = 0;\n  try { fetch(url).json(); } catch (e) { bad++; }\n  try { JSON.parse(await fetch(url)); } catch (e) { bad++; }\n  if ((await fetch(url).data) === undefined) bad++;\n  console.log(data.ok === 1 && bad === 3 ? \"const data = await (await fetch(url)).json();\" : \"?\");\n})();"
  }
 },
 {
  "id": "async-16",
  "unit": "async",
  "freq": "mid",
  "subject": 2,
  "topic": "fetch response",
  "q": "출력 결과는? (아래 주소는 { \"name\": \"민지\" }를 돌려준다고 할게요)",
  "code": "async function getName() {\n  const res = await fetch(\"https://example.com/me\");\n  const user = await res.json();\n  return user.name;\n}\ngetName().then(n => console.log(n + \"님\"));\nconsole.log(\"요청 보냄\");",
  "options": [
   "요청 보냄\n민지님",
   "민지님\n요청 보냄",
   "요청 보냄\nundefined님",
   "민지님"
  ],
  "answer": 1,
  "exp": "fetch는 기다리는 일이라 바깥의 \"요청 보냄\"이 먼저 나오고, 응답이 오면 \"민지님\"이 나와요.",
  "why": [
   "",
   "fetch를 기다리는 동안 바깥 코드가 먼저 실행돼요.",
   "json()으로 꺼낸 user.name은 민지예요.",
   "\"요청 보냄\"도 출력돼요."
  ],
  "check": {
   "mock": {
    "https://example.com/me": {
     "name": "민지"
    }
   }
  }
 },
 {
  "id": "async-17",
  "unit": "async",
  "freq": "low",
  "subject": 2,
  "topic": "비동기",
  "q": "자바스크립트에서 '비동기'로 처리하는 까닭으로 알맞은 것은?",
  "options": [
   "코드를 더 짧게 쓰려고",
   "오래 걸리는 일(서버 응답, 타이머)을 기다리는 동안 화면이 멈추지 않게 하려고",
   "오류가 절대 나지 않게 하려고",
   "변수를 숨기려고"
  ],
  "answer": 2,
  "exp": "기다리는 일을 뒤로 미루고 다른 일을 먼저 해서, 버튼 누르기 같은 반응이 멈추지 않아요.",
  "why": [
   "비동기 코드가 꼭 짧아지는 건 아니에요.",
   "",
   "비동기에서도 오류는 나요. try/catch나 catch로 처리해요.",
   "변수를 숨기는 건 클로저나 #필드예요."
  ]
 },
 {
  "id": "t01-1",
  "unit": "op",
  "freq": "mid",
  "subject": 1,
  "trap": "t01",
  "topic": "=== 비교",
  "q": "출력 결과는?",
  "code": "console.log(1 === \"1\", 1 == \"1\");",
  "options": [
   "true true",
   "false true",
   "false false",
   "true false"
  ],
  "answer": 2,
  "exp": "===는 숫자 1과 문자열 \"1\"의 종류가 달라서 false, ==는 \"1\"을 숫자로 바꿔 비교해서 true예요.",
  "why": [
   "===는 종류까지 같아야 해서 숫자와 문자열은 false예요.",
   "",
   "==는 문자열을 숫자로 바꿔서 비교하므로 true예요.",
   "순서가 반대예요. 엄격한 쪽(===)이 false예요."
  ],
  "check": {}
 },
 {
  "id": "t01-2",
  "unit": "op",
  "freq": "mid",
  "subject": 1,
  "trap": "t01",
  "topic": "== 비교",
  "q": "결과가 true인 것은?",
  "options": [
   "null === undefined",
   "null == 0",
   "NaN == NaN",
   "null == undefined"
  ],
  "answer": 4,
  "exp": "null과 undefined는 ==로 비교할 때만 서로 같다고 정해져 있어요.",
  "why": [
   "===는 종류가 달라서 false예요.",
   "null은 ==로 비교해도 null·undefined 말고는 같은 게 없어요. 0과도 false예요.",
   "NaN은 ==나 ===로는 자기 자신과도 같지 않아요.",
   ""
  ],
  "check": {
   "assert": "const assert = require('assert');\nassert(null == undefined);\nassert(!(null === undefined) && !(null == 0) && !(NaN == NaN));"
  }
 },
 {
  "id": "t01-3",
  "unit": "op",
  "freq": "mid",
  "subject": 1,
  "trap": "t01",
  "topic": "== 비교",
  "q": "출력 결과는?",
  "code": "console.log(\"0\" == false, \"0\" ? \"참\" : \"거짓\");",
  "options": [
   "false 참",
   "true 거짓",
   "false 거짓",
   "true 참"
  ],
  "answer": 4,
  "exp": "== 비교에서는 \"0\"과 false가 둘 다 숫자 0으로 바뀌어 true예요. 그런데 조건에서는 \"0\"이 빈 문자열이 아닌 문자열이라 참 같은 값이에요. 같은 값인데 상황마다 다르게 봐서 헷갈리니 ===를 쓰는 거예요.",
  "why": [
   "\"0\" == false는 둘 다 숫자 0으로 바뀌어 true예요.",
   "조건에서 \"0\"은 글자가 하나 있는 문자열이라 참이에요.",
   "둘 다 틀렸어요. ==는 true, 조건은 참이에요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "t02-1",
  "unit": "type",
  "freq": "mid",
  "subject": 1,
  "trap": "t02",
  "topic": "+ 연산 형 변환",
  "q": "출력 결과는?",
  "code": "console.log(\"7\" + 1, \"7\" - 1);",
  "options": [
   "8 6",
   "71 71",
   "8 NaN",
   "71 6"
  ],
  "answer": 4,
  "exp": "+는 문자열 \"7\"에 1을 붙여 \"71\", -는 \"7\"을 숫자로 바꿔 6이에요.",
  "why": [
   "+는 문자열이 있으면 더하지 않고 붙여요.",
   "-는 붙이지 않고 숫자 계산을 해요.",
   "\"7\"은 숫자로 바꿀 수 있어서 NaN이 아니에요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "t02-2",
  "unit": "type",
  "freq": "mid",
  "subject": 1,
  "trap": "t02",
  "topic": "+ 연산 형 변환",
  "q": "출력 결과는?",
  "code": "console.log(2 + 3 + \"4\" + 5);",
  "options": [
   "545",
   "95",
   "2345",
   "14"
  ],
  "answer": 1,
  "exp": "왼쪽부터 계산해요. 2 + 3 = 5(숫자), 5 + \"4\" = \"54\"(문자열), \"54\" + 5 = \"545\"예요.",
  "why": [
   "",
   "\"54\"가 된 뒤에는 문자열이라 5를 더하지 않고 붙여요.",
   "처음 2 + 3은 둘 다 숫자라 먼저 5가 돼요.",
   "\"4\"가 문자열이라 끝까지 숫자로 더해지지 않아요."
  ],
  "check": {}
 },
 {
  "id": "t02-3",
  "unit": "type",
  "freq": "mid",
  "subject": 1,
  "trap": "t02",
  "topic": "자동 변환",
  "q": "출력 결과는?",
  "code": "const a = \"10\";\nconst b = \"2\";\nconsole.log(a * b + a);",
  "options": [
   "2010",
   "30",
   "40",
   "102"
  ],
  "answer": 1,
  "exp": "*는 숫자로 바꿔서 10 * 2 = 20이에요. 그다음 20 + \"10\"은 한쪽이 문자열이라 붙여서 \"2010\"이에요.",
  "why": [
   "",
   "20 + \"10\"은 더하기가 아니라 붙이기예요.",
   "곱셈을 먼저 해서 20이 되고, 그 뒤 문자열 \"10\"을 붙여요.",
   "*는 문자열을 붙이지 않고 숫자로 곱해요."
  ],
  "check": {}
 },
 {
  "id": "t03-1",
  "unit": "op",
  "freq": "mid",
  "subject": 1,
  "trap": "t03",
  "topic": "소수 계산",
  "q": "출력 결과는?",
  "code": "console.log(0.1 + 0.2 === 0.3);",
  "options": [
   "false",
   "true",
   "0.3",
   "오류가 난다"
  ],
  "answer": 1,
  "exp": "0.1 + 0.2는 0.30000000000000004라서 0.3과 같지 않아 false예요.",
  "why": [
   "",
   "소수를 2진수로 저장할 때 생기는 아주 작은 오차 때문에 같지 않아요.",
   "===는 true/false를 돌려줘요.",
   "소수 비교는 오류 없이 실행돼요."
  ],
  "check": {}
 },
 {
  "id": "t03-2",
  "unit": "op",
  "freq": "mid",
  "subject": 1,
  "trap": "t03",
  "topic": "소수 계산",
  "q": "출력 결과는?",
  "code": "console.log((0.1 + 0.2).toFixed(1), typeof (0.1).toFixed(1));",
  "options": [
   "0.3 number",
   "0.30000000000000004 number",
   "0.3 boolean",
   "0.3 string"
  ],
  "answer": 4,
  "exp": "toFixed(1)은 소수 첫째 자리까지 반올림한 '문자열'을 돌려줘요.",
  "why": [
   "toFixed의 결과는 숫자가 아니라 문자열이에요.",
   "toFixed(1)로 자릿수를 정리해서 긴 오차가 안 보여요.",
   "toFixed는 글자를 돌려줘요. 불리언이 아니에요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "t03-3",
  "unit": "op",
  "freq": "mid",
  "subject": 1,
  "trap": "t03",
  "topic": "소수 계산",
  "q": "가격 0.1달러짜리 3개의 합을 정확히 0.3으로 비교하려고 한다. true가 나오는 것은?",
  "options": [
   "(10 + 10 + 10) / 100 === 0.3",
   "0.1 + 0.1 + 0.1 === 0.3",
   "0.1 * 3 === 0.3",
   "(0.1 + 0.1 + 0.1).toFixed(1) === 0.3"
  ],
  "answer": 1,
  "exp": "센트 단위 정수(10)로 더한 뒤 마지막에 한 번만 나누면 오차가 생기지 않아 30 / 100 = 0.3이에요.",
  "why": [
   "",
   "소수를 여러 번 더하면 오차가 쌓여 0.30000000000000004가 돼요.",
   "0.1 * 3도 0.30000000000000004라서 false예요.",
   "toFixed는 문자열 \"0.3\"을 돌려줘서 숫자 0.3과 ===로 비교하면 false예요."
  ],
  "check": {
   "assert": "const assert = require('assert');\nassert((10 + 10 + 10) / 100 === 0.3);\nassert(!(0.1 + 0.1 + 0.1 === 0.3));\nassert(!(0.1 * 3 === 0.3));\nassert(!((0.1 + 0.1 + 0.1).toFixed(1) === 0.3));"
  }
 },
 {
  "id": "t04-1",
  "unit": "type",
  "freq": "mid",
  "subject": 1,
  "trap": "t04",
  "topic": "typeof",
  "q": "출력 결과는?",
  "code": "console.log(typeof null);",
  "options": [
   "null",
   "undefined",
   "object",
   "number"
  ],
  "answer": 3,
  "exp": "typeof null은 \"object\"예요. 자바스크립트 초기의 실수가 고쳐지지 않고 남은 거예요.",
  "why": [
   "typeof는 \"null\"이라는 결과를 돌려주지 않아요.",
   "\"undefined\"는 값을 안 넣었을 때의 typeof 결과예요.",
   "",
   "null은 숫자가 아니에요."
  ],
  "check": {}
 },
 {
  "id": "t04-2",
  "unit": "arr",
  "freq": "mid",
  "subject": 2,
  "trap": "t04",
  "topic": "Array.isArray",
  "q": "변수 x가 배열인지 바르게 확인하는 것은?",
  "options": [
   "typeof x === \"array\"",
   "typeof x === \"object\"",
   "Array.isArray(x)",
   "x === []"
  ],
  "answer": 3,
  "exp": "Array.isArray(x)는 배열일 때만 true예요.",
  "why": [
   "typeof는 \"array\"를 돌려주지 않아요. 배열은 \"object\"예요.",
   "객체와 null도 \"object\"라서 배열인지 구별할 수 없어요.",
   "",
   "배열 ===는 같은 상자인지를 봐서, 새로 만든 []와는 항상 false예요."
  ],
  "check": {
   "assert": "const assert = require('assert');\nconst x = [1];\nassert(Array.isArray(x));\nassert(typeof x !== 'array');\nassert(typeof {} === 'object' && typeof null === 'object');\nassert(!(x === []));"
  }
 },
 {
  "id": "t04-3",
  "unit": "type",
  "freq": "mid",
  "subject": 1,
  "trap": "t04",
  "topic": "typeof",
  "q": "출력 결과는?",
  "code": "const list = [typeof NaN, typeof [], typeof null, typeof (() => 1)];\nconsole.log(list.join(\",\"));",
  "options": [
   "NaN,array,null,function",
   "number,object,object,function",
   "number,array,object,object",
   "undefined,object,null,function"
  ],
  "answer": 2,
  "exp": "NaN은 '숫자가 아님'이라는 뜻이지만 종류는 number예요. 배열과 null은 object, 화살표 함수도 function이에요.",
  "why": [
   "typeof는 \"NaN\", \"array\", \"null\"을 돌려주지 않아요.",
   "",
   "배열은 \"object\", 함수는 \"function\"이에요.",
   "NaN의 typeof는 \"number\"예요."
  ],
  "check": {}
 },
 {
  "id": "t05-1",
  "unit": "type",
  "freq": "mid",
  "subject": 1,
  "trap": "t05",
  "topic": "NaN",
  "q": "출력 결과는?",
  "code": "const n = Number(\"abc\");\nconsole.log(n === NaN, Number.isNaN(n));",
  "options": [
   "true true",
   "false false",
   "true false",
   "false true"
  ],
  "answer": 4,
  "exp": "NaN은 자기 자신과도 같지 않아서 === NaN은 false예요. 확인은 Number.isNaN으로 해요.",
  "why": [
   "n === NaN은 n이 NaN이어도 false예요.",
   "Number.isNaN(n)은 n이 NaN이라 true예요.",
   "순서가 반대예요. ===가 false, isNaN이 true예요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "t05-2",
  "unit": "type",
  "freq": "mid",
  "subject": 1,
  "trap": "t05",
  "topic": "NaN",
  "q": "출력 결과는?",
  "code": "const total = 10 + Number(\"\") + Number(\"5원\");\nconsole.log(total);",
  "options": [
   "15",
   "10",
   "105원",
   "NaN"
  ],
  "answer": 4,
  "exp": "Number(\"\")는 0이지만 Number(\"5원\")은 NaN이에요. NaN이 섞인 계산은 NaN이에요.",
  "why": [
   "\"5원\"은 숫자로 바꿀 수 없어서 5가 아니라 NaN이에요.",
   "NaN이 하나라도 섞이면 결과는 NaN이에요.",
   "Number()를 썼으니 붙이기가 아니라 숫자 계산이에요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "t05-3",
  "unit": "arr",
  "freq": "mid",
  "subject": 2,
  "trap": "t05",
  "topic": "includes",
  "q": "출력 결과는?",
  "code": "const a = [1, NaN, 3];\nconsole.log(a.indexOf(NaN), a.includes(NaN));",
  "options": [
   "-1 true",
   "1 true",
   "-1 false",
   "1 false"
  ],
  "answer": 1,
  "exp": "indexOf는 ===로 비교해서 NaN을 못 찾아 -1이에요. includes는 NaN을 특별히 같은 것으로 봐서 true예요.",
  "why": [
   "",
   "indexOf는 === 비교라 NaN을 찾지 못해요.",
   "includes는 NaN도 찾아 줘요.",
   "indexOf는 못 찾고 includes는 찾아요."
  ],
  "check": {}
 },
 {
  "id": "t06-1",
  "unit": "type",
  "freq": "mid",
  "subject": 1,
  "trap": "t06",
  "topic": "falsy",
  "q": "조건에서 거짓으로 취급되는 값은?",
  "options": [
   "\"0\"",
   "[] (빈 배열)",
   "\"\" (빈 문자열)",
   "\" \" (빈칸 한 개)"
  ],
  "answer": 3,
  "exp": "글자가 하나도 없는 빈 문자열만 거짓 같은 값이에요.",
  "why": [
   "\"0\"은 글자 '0'이 있는 문자열이라 참이에요.",
   "빈 배열도 객체라서 참이에요.",
   "",
   "빈칸도 글자 하나라서 참이에요."
  ],
  "check": {
   "assert": "const assert = require('assert');\nassert(!Boolean(''));\nassert(Boolean('0') && Boolean([]) && Boolean(' '));"
  }
 },
 {
  "id": "t06-2",
  "unit": "if",
  "freq": "mid",
  "subject": 1,
  "trap": "t06",
  "topic": "조건에 쓰는 값",
  "q": "출력 결과는?",
  "code": "const cart = [];\nif (cart) {\n  console.log(\"담김\");\n} else {\n  console.log(\"비었음\");\n}",
  "options": [
   "비었음",
   "undefined",
   "담김",
   "오류가 난다"
  ],
  "answer": 3,
  "exp": "빈 배열도 참 같은 값이라 if가 실행돼요. 비었는지 보려면 cart.length === 0으로 확인해요.",
  "why": [
   "빈 배열은 거짓이 아니라서 else로 가지 않아요.",
   "if 문은 둘 중 하나의 console.log를 실행해요.",
   "",
   "빈 배열을 조건에 쓰는 건 오류가 아니에요."
  ],
  "check": {}
 },
 {
  "id": "t06-3",
  "unit": "type",
  "freq": "mid",
  "subject": 1,
  "trap": "t06",
  "topic": "falsy",
  "q": "출력 결과는?",
  "code": "const vals = [0, \"0\", null, [], NaN, \"false\", -1];\nconsole.log(vals.filter(Boolean).length);",
  "options": [
   "3",
   "2",
   "5",
   "4"
  ],
  "answer": 4,
  "exp": "filter(Boolean)은 참 같은 값만 남겨요. \"0\", [], \"false\", -1 네 개가 남아요. 0, null, NaN은 빠져요.",
  "why": [
   "-1도 0이 아닌 숫자라 참이에요.",
   "\"0\"과 \"false\"는 문자열이라 참이에요.",
   "NaN은 거짓 같은 값이라 빠져요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "t07-1",
  "unit": "op",
  "freq": "mid",
  "subject": 1,
  "trap": "t07",
  "topic": "?? 널 병합",
  "q": "출력 결과는?",
  "code": "const score = 0;\nconsole.log(score || 50, score ?? 50);",
  "options": [
   "50 0",
   "0 0",
   "50 50",
   "0 50"
  ],
  "answer": 1,
  "exp": "||는 0을 거짓으로 봐서 50, ??는 0이 null·undefined가 아니라서 0을 그대로 써요.",
  "why": [
   "",
   "||는 0을 거짓 같은 값으로 봐서 오른쪽 50을 써요.",
   "??는 0을 그대로 살려요.",
   "순서가 반대예요. ||가 50, ??가 0이에요."
  ],
  "check": {}
 },
 {
  "id": "t07-2",
  "unit": "op",
  "freq": "mid",
  "subject": 1,
  "trap": "t07",
  "topic": "?? 널 병합",
  "q": "사용자가 저장한 볼륨 v(0~10, 0도 가능, 저장 안 했으면 undefined)에 기본값 5를 주는 코드로 알맞은 것은?",
  "options": [
   "const vol = v || 5;",
   "const vol = v && 5;",
   "const vol = v ?? 5;",
   "const vol = v ? v : 5;"
  ],
  "answer": 3,
  "exp": "볼륨 0도 올바른 값이라 null·undefined일 때만 기본값을 쓰는 ??가 맞아요.",
  "why": [
   "||는 v가 0이면 5로 바꿔 버려요.",
   "&&는 v가 참이면 5, 거짓이면 v를 돌려줘서 기본값이 아니에요.",
   "",
   "삼항 연산자도 0을 거짓으로 봐서 5가 돼요."
  ],
  "check": {
   "assert": "const assert = require('assert');\nfor (const v of [0, 3, undefined]) {\n  const want = v === undefined ? 5 : v;\n  assert((v ?? 5) === want);\n}\nassert((0 || 5) !== 0);\nassert((0 ? 0 : 5) !== 0);\nassert((3 && 5) !== 3);"
  }
 },
 {
  "id": "t07-3",
  "unit": "op",
  "freq": "mid",
  "subject": 1,
  "trap": "t07",
  "topic": "논리 대입",
  "q": "출력 결과는?",
  "code": "const cfg = { size: 0, name: \"\" };\ncfg.size ||= 10;\ncfg.name ??= \"기본\";\nconsole.log(cfg.size, \"[\" + cfg.name + \"]\");",
  "options": [
   "0 [기본]",
   "10 []",
   "10 [기본]",
   "0 []"
  ],
  "answer": 2,
  "exp": "`a ||= b`는 a가 거짓 같으면 b를 넣어요. size 0은 거짓이라 10이 돼요. `a ??= b`는 a가 null·undefined일 때만 넣어서 빈 문자열은 그대로예요.",
  "why": [
   "size 0은 거짓 같은 값이라 ||=로 10이 들어가요.",
   "",
   "??=는 빈 문자열을 null·undefined로 보지 않아요.",
   "size는 10, name은 빈 문자열 그대로예요."
  ],
  "check": {}
 },
 {
  "id": "t08-1",
  "unit": "arr",
  "freq": "mid",
  "subject": 2,
  "trap": "t08",
  "topic": "const 배열",
  "q": "출력 결과는?",
  "code": "const nums = [1, 2];\nnums.push(3);\nnums[0] = 9;\nconsole.log(nums.join(\",\"));",
  "options": [
   "1,2",
   "9,2,3",
   "오류가 난다",
   "1,2,3"
  ],
  "answer": 2,
  "exp": "const 배열이라도 push와 칸 바꾸기는 돼요. 그래서 [9, 2, 3]이에요.",
  "why": [
   "push와 nums[0] = 9가 실제로 배열을 바꿔요.",
   "",
   "다시 넣기(nums = ...)가 아니라서 오류가 나지 않아요.",
   "nums[0] = 9로 첫 칸도 바뀌었어요."
  ],
  "check": {}
 },
 {
  "id": "t08-2",
  "unit": "var",
  "freq": "mid",
  "subject": 1,
  "trap": "t08",
  "topic": "const",
  "q": "오류가 나는 코드는?",
  "options": [
   "const a = [1]; a.push(2);",
   "const a = { n: 1 }; a.n = 2;",
   "const a = { n: 1 }; delete a.n;",
   "const a = 1; a = 2;"
  ],
  "answer": 4,
  "exp": "const 변수에 새 값을 다시 넣는 것만 TypeError예요.",
  "why": [
   "배열 안에 넣기는 다시 넣기가 아니라 오류가 아니에요.",
   "객체 속성 바꾸기는 돼요.",
   "속성 지우기도 돼요.",
   ""
  ],
  "check": {
   "assert": "const assert = require('assert');\nassert.throws(() => { const a = 1; eval('a = 2'); }, TypeError);\nconst b = [1]; b.push(2);\nconst c = { n: 1 }; c.n = 2; delete c.n;"
  }
 },
 {
  "id": "t08-3",
  "unit": "obj",
  "freq": "mid",
  "subject": 2,
  "trap": "t08",
  "topic": "freeze",
  "q": "출력 결과는?",
  "code": "const team = Object.freeze({ name: \"파랑\", members: [\"민지\"] });\nteam.name = \"빨강\";\nteam.members.push(\"준호\");\nconsole.log(team.name, team.members.length);",
  "options": [
   "빨강 2",
   "파랑 2",
   "파랑 1",
   "빨강 1"
  ],
  "answer": 2,
  "exp": "freeze는 겉 객체만 얼려서 name은 안 바뀌어요. 하지만 members 배열은 얼지 않아서 push가 돼요.",
  "why": [
   "freeze된 객체의 name은 바뀌지 않아요.",
   "",
   "freeze는 안쪽 배열까지 얼리지 않아서 push가 돼요.",
   "name은 그대로지만 members는 2명이 돼요."
  ],
  "check": {}
 },
 {
  "id": "t09-1",
  "unit": "fn",
  "freq": "mid",
  "subject": 1,
  "trap": "t09",
  "topic": "클로저",
  "q": "출력 결과는?",
  "code": "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}",
  "options": [
   "0\n1\n2",
   "2\n2\n2",
   "3\n3\n3",
   "1\n2\n3"
  ],
  "answer": 3,
  "exp": "타이머는 반복이 다 끝난 뒤 실행돼요. var i는 하나뿐이고 그때 값이 3이라 3이 세 번 나와요.",
  "why": [
   "0, 1, 2가 나오려면 let으로 차례마다 새 i가 있어야 해요.",
   "i가 2일 때 i++로 3이 된 뒤 조건이 거짓이 되어 끝나요. 마지막 값은 3이에요.",
   "",
   "var i가 하나라서 모두 같은 값이에요."
  ],
  "check": {}
 },
 {
  "id": "t09-2",
  "unit": "fn",
  "freq": "mid",
  "subject": 1,
  "trap": "t09",
  "topic": "클로저",
  "q": "출력 결과는?",
  "code": "for (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}",
  "options": [
   "3\n3\n3",
   "2\n2\n2",
   "0\n0\n0",
   "0\n1\n2"
  ],
  "answer": 4,
  "exp": "let은 반복할 때마다 새 i를 만들어서 각 타이머가 자기 차례의 i를 기억해요.",
  "why": [
   "let이라서 마지막 값 하나만 보이지 않아요.",
   "각 타이머는 0, 1, 2를 각각 기억해요.",
   "i는 차례마다 1씩 커져요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "t09-3",
  "unit": "fn",
  "freq": "mid",
  "subject": 1,
  "trap": "t09",
  "topic": "클로저",
  "q": "출력 결과는?",
  "code": "const fns = [];\nfor (var i = 0; i < 3; i++) {\n  fns.push(() => i * 10);\n}\nlet j = 0;\nconst gs = [];\nwhile (j < 3) {\n  const k = j;\n  gs.push(() => k * 10);\n  j++;\n}\nconsole.log(fns[0](), gs[0]());",
  "options": [
   "0 0",
   "30 30",
   "0 30",
   "30 0"
  ],
  "answer": 4,
  "exp": "fns의 함수들은 하나뿐인 var i를 같이 보는데 반복이 끝난 뒤 i는 3이라 30이에요. gs는 반복마다 새로 만든 const k를 기억해서 첫 함수는 0이에요.",
  "why": [
   "var i는 하나라 fns[0]도 지금의 i(3)를 봐요.",
   "k는 반복마다 새로 만든 변수라 첫 번째는 0을 기억해요.",
   "반대예요. var 쪽이 30, const k 쪽이 0이에요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "t10-1",
  "unit": "fn",
  "freq": "mid",
  "subject": 1,
  "trap": "t10",
  "topic": "호이스팅",
  "q": "출력 결과는?",
  "code": "console.log(a);\nvar a = 1;",
  "options": [
   "1",
   "undefined",
   "ReferenceError 오류",
   "null"
  ],
  "answer": 2,
  "exp": "var 선언은 이름만 먼저 만들어지고 값은 그 줄에서 들어가요. 그래서 위에서 읽으면 undefined예요.",
  "why": [
   "값 1은 var a = 1 줄이 실행돼야 들어가요.",
   "",
   "var는 오류 대신 undefined예요. 오류는 let·const예요.",
   "아무 값도 안 들어간 변수는 null이 아니라 undefined예요."
  ],
  "check": {}
 },
 {
  "id": "t10-2",
  "unit": "fn",
  "freq": "mid",
  "subject": 1,
  "trap": "t10",
  "topic": "TDZ",
  "q": "실행하면 어떻게 되는가?",
  "code": "console.log(b);\nlet b = 1;",
  "options": [
   "undefined가 출력된다",
   "ReferenceError 오류가 난다",
   "1이 출력된다",
   "null이 출력된다"
  ],
  "answer": 2,
  "exp": "let은 선언 줄 전까지 쓸 수 없는 구간(TDZ)이 있어서 ReferenceError예요.",
  "why": [
   "undefined는 var일 때의 결과예요.",
   "",
   "선언 줄이 실행되기 전이라 값이 없어요.",
   "null이 나오는 경우는 없어요."
  ],
  "check": {
   "err": "ReferenceError"
  }
 },
 {
  "id": "t10-3",
  "unit": "fn",
  "freq": "mid",
  "subject": 1,
  "trap": "t10",
  "topic": "호이스팅",
  "q": "출력 결과는?",
  "code": "console.log(typeof hello, typeof bye);\nfunction hello() {}\nvar bye = () => {};",
  "options": [
   "function undefined",
   "function function",
   "undefined undefined",
   "undefined function"
  ],
  "answer": 1,
  "exp": "function 선언은 통째로 먼저 만들어져서 function이에요. bye는 var라 이름만 있고 아직 값(화살표 함수)이 안 들어가서 undefined예요.",
  "why": [
   "",
   "bye는 화살표 함수를 넣는 줄이 아직 실행되지 않았어요.",
   "hello는 함수 선언이라 위에서도 쓸 수 있어요.",
   "반대예요. 선언(hello)이 function, var(bye)가 undefined예요."
  ],
  "check": {}
 },
 {
  "id": "t11-1",
  "unit": "arr",
  "freq": "mid",
  "subject": 2,
  "trap": "t11",
  "topic": "sort",
  "q": "출력 결과는?",
  "code": "console.log([5, 25, 100, 1].sort().join(\",\"));",
  "options": [
   "1,5,25,100",
   "100,25,5,1",
   "5,25,100,1",
   "1,100,25,5"
  ],
  "answer": 4,
  "exp": "글자로 비교하면 \"1\" < \"100\" < \"25\" < \"5\" 순서예요. 첫 글자부터 비교하기 때문이에요.",
  "why": [
   "숫자 크기 순서가 되려면 (a, b) => a - b가 필요해요.",
   "기본 sort는 작은 것부터(오름차순) 정렬해요. 글자 기준일 뿐이에요.",
   "sort는 실제로 순서를 바꿔요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "t11-2",
  "unit": "arr",
  "freq": "mid",
  "subject": 2,
  "trap": "t11",
  "topic": "비교 함수",
  "q": "점수 배열을 큰 것부터 정렬하는 코드는?",
  "options": [
   "scores.sort((a, b) => a - b)",
   "scores.sort((a, b) => b - a)",
   "scores.sort()",
   "scores.sort((a, b) => a > b)"
  ],
  "answer": 2,
  "exp": "b - a가 양수면 b가 앞으로 가서 큰 수부터(내림차순) 정렬돼요.",
  "why": [
   "a - b는 작은 것부터(오름차순)예요.",
   "",
   "아무것도 안 넣으면 글자 순서라 숫자가 엉켜요.",
   "비교 함수는 true/false가 아니라 음수·0·양수를 돌려줘야 해요."
  ],
  "check": {
   "assert": "const assert = require('assert');\nconst s = [3, 20, 100, 9];\nassert.strictEqual([...s].sort((a, b) => b - a).join(), '100,20,9,3');\nassert.notStrictEqual([...s].sort((a, b) => a - b).join(), '100,20,9,3');\nassert.notStrictEqual([...s].sort().join(), '100,20,9,3');\nassert.notStrictEqual([...s].sort((a, b) => a > b).join(), '100,20,9,3');"
  }
 },
 {
  "id": "t11-3",
  "unit": "arr",
  "freq": "mid",
  "subject": 2,
  "trap": "t11",
  "topic": "sort",
  "q": "출력 결과는?",
  "code": "const a = [3, 1, 2];\nconst b = a.sort((x, y) => x - y);\nb.push(4);\nconsole.log(a.join(\",\"), a === b);",
  "options": [
   "3,1,2 false",
   "1,2,3 false",
   "3,1,2,4 true",
   "1,2,3,4 true"
  ],
  "answer": 4,
  "exp": "sort는 새 배열이 아니라 원본 a를 정렬해서 그대로 돌려줘요. 그래서 b와 a는 같은 배열이고 b에 넣은 4도 a에 보여요.",
  "why": [
   "sort는 원본을 바꾸고, a와 b는 같은 상자예요.",
   "b.push(4)는 같은 배열 a에도 보여요.",
   "a도 정렬된 상태예요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "t12-1",
  "unit": "obj",
  "freq": "mid",
  "subject": 2,
  "trap": "t12",
  "topic": "참조",
  "q": "출력 결과는?",
  "code": "const a = { n: 1 };\nconst b = a;\nb.n = 5;\nconsole.log(a.n);",
  "options": [
   "1",
   "undefined",
   "5",
   "오류가 난다"
  ],
  "answer": 3,
  "exp": "b = a는 같은 상자를 가리키게 해요. b.n을 바꾸면 a.n도 5예요.",
  "why": [
   "객체는 복사되지 않고 참조(위치)만 복사돼요.",
   "a.n은 있어요. b를 통해 5로 바뀌었어요.",
   "",
   "const 객체의 속성 바꾸기는 오류가 아니에요."
  ],
  "check": {}
 },
 {
  "id": "t12-2",
  "unit": "obj",
  "freq": "mid",
  "subject": 2,
  "trap": "t12",
  "topic": "얕은 복사",
  "q": "출력 결과는?",
  "code": "const a = { n: 1, inner: { m: 1 } };\nconst b = { ...a };\nb.n = 2;\nb.inner.m = 2;\nconsole.log(a.n, a.inner.m);",
  "options": [
   "2 2",
   "1 2",
   "1 1",
   "2 1"
  ],
  "answer": 2,
  "exp": "펼치기 복사는 겉 상자만 새로 만들어서 n은 따로지만, inner는 같은 상자라 m은 같이 바뀌어요.",
  "why": [
   "겉 속성 n은 복사돼서 a.n은 1 그대로예요.",
   "",
   "inner는 같은 상자를 같이 써서 a.inner.m도 2가 돼요.",
   "반대예요. n은 그대로, inner.m은 바뀌어요."
  ],
  "check": {}
 },
 {
  "id": "t12-3",
  "unit": "obj",
  "freq": "mid",
  "subject": 2,
  "trap": "t12",
  "topic": "함수에 객체",
  "q": "출력 결과는?",
  "code": "function reset(user) {\n  user.score = 0;\n  user = { score: 100 };\n  return user.score;\n}\nconst me = { score: 50 };\nconsole.log(reset(me), me.score);",
  "options": [
   "100 100",
   "0 0",
   "100 0",
   "100 50"
  ],
  "answer": 3,
  "exp": "user.score = 0은 받은 상자(me)를 바꿔요. 그다음 user = {...}는 매개변수 이름표만 새 상자로 옮길 뿐 me는 그대로예요. 그래서 반환은 100, me.score는 0이에요.",
  "why": [
   "user에 새 객체를 넣어도 바깥 변수 me가 그 객체로 바뀌지는 않아요.",
   "user = { score: 100 } 뒤의 user.score는 100이에요.",
   "",
   "user.score = 0이 me 상자를 직접 바꿨어요."
  ],
  "check": {}
 },
 {
  "id": "t13-1",
  "unit": "obj",
  "freq": "mid",
  "subject": 2,
  "trap": "t13",
  "topic": "화살표 함수와 this",
  "q": "출력 결과는?",
  "code": "const pet = {\n  name: \"콩\",\n  a() { return this.name; },\n  b: () => this.nick,\n  nick: \"콩이\",\n};\nconsole.log(pet.a(), pet.b());",
  "options": [
   "콩 undefined",
   "콩 콩",
   "undefined 콩",
   "undefined undefined"
  ],
  "answer": 1,
  "exp": "a는 일반 메서드라 this가 pet이에요. b는 화살표 함수라 this가 pet이 아니라 바깥의 this예요. 바깥에는 nick이 없어서 undefined예요.",
  "why": [
   "",
   "화살표 함수 b의 this는 pet이 아니라서 pet.nick을 읽지 못해요.",
   "일반 메서드 a는 pet.a()로 불러서 this가 pet이에요.",
   "a는 제대로 \"콩\"을 돌려줘요."
  ],
  "check": {}
 },
 {
  "id": "t13-2",
  "unit": "obj",
  "freq": "mid",
  "subject": 2,
  "trap": "t13",
  "topic": "this",
  "q": "출력 결과는?",
  "code": "const timer = {\n  sec: 3,\n  start() {\n    return [1, 2].map(n => this.sec + n).join(\",\");\n  },\n};\nconsole.log(timer.start());",
  "options": [
   "4,5",
   "NaN,NaN",
   "1,2",
   "오류가 난다"
  ],
  "answer": 1,
  "exp": "map 안의 화살표 함수는 바깥(start)의 this를 그대로 써요. start를 timer.start()로 불렀으니 this.sec은 3이에요.",
  "why": [
   "",
   "화살표 함수가 바깥 this를 써서 this.sec은 3이에요.",
   "n에 this.sec을 더해요.",
   "올바른 코드라 오류가 나지 않아요."
  ],
  "check": {}
 },
 {
  "id": "t13-3",
  "unit": "obj",
  "freq": "mid",
  "subject": 2,
  "trap": "t13",
  "topic": "this",
  "q": "출력 결과는?",
  "code": "const user = {\n  name: \"민지\",\n  hi() { return \"안녕 \" + this?.name; },\n};\nconst f = user.hi;\nconst other = { name: \"준호\", hi: user.hi };\nconsole.log(other.hi(), user.hi());",
  "options": [
   "안녕 민지 안녕 민지",
   "안녕 준호 안녕 준호",
   "안녕 undefined 안녕 민지",
   "안녕 준호 안녕 민지"
  ],
  "answer": 4,
  "exp": "this는 함수를 만든 곳이 아니라 부를 때 점 앞의 객체예요. other.hi()는 준호, user.hi()는 민지예요.",
  "why": [
   "other.hi()의 this는 other라서 준호예요.",
   "user.hi()의 this는 user라서 민지예요.",
   "other.hi()는 점 앞에 other가 있어서 this가 undefined가 아니에요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "t14-1",
  "unit": "loop",
  "freq": "mid",
  "subject": 1,
  "trap": "t14",
  "topic": "for...in",
  "q": "출력 결과는?",
  "code": "const arr = [\"가\", \"나\"];\nfor (const i in arr) {\n  console.log(i + 1);\n}",
  "options": [
   "1\n2",
   "가1\n나1",
   "01\n11",
   "0\n1"
  ],
  "answer": 3,
  "exp": "for...in이 주는 번호는 문자열 \"0\", \"1\"이라 + 1이 붙이기가 돼서 \"01\", \"11\"이에요.",
  "why": [
   "번호가 문자열이라 더하기가 아니라 붙이기예요.",
   "for...in은 값이 아니라 번호(키)를 꺼내요.",
   "",
   "+ 1이 있어서 \"0\", \"1\" 그대로가 아니에요."
  ],
  "check": {}
 },
 {
  "id": "t14-2",
  "unit": "loop",
  "freq": "mid",
  "subject": 1,
  "trap": "t14",
  "topic": "for...of",
  "q": "출력 결과는?",
  "code": "let s = \"\";\nfor (const x of [\"a\", \"b\", \"c\"]) s += x;\nfor (const k in { p: 1, q: 2 }) s += k;\nconsole.log(s);",
  "options": [
   "012pq",
   "abcpq",
   "abc12",
   "012pq12"
  ],
  "answer": 2,
  "exp": "for...of는 배열 값 a, b, c를, for...in은 객체 키 p, q를 꺼내요.",
  "why": [
   "for...of는 번호가 아니라 값을 꺼내요.",
   "",
   "for...in은 객체의 값이 아니라 키를 꺼내요.",
   "각 반복은 한 가지씩만 꺼내요."
  ],
  "check": {}
 },
 {
  "id": "t14-3",
  "unit": "loop",
  "freq": "mid",
  "subject": 1,
  "trap": "t14",
  "topic": "for...of",
  "q": "실행하면 어떻게 되는가?",
  "code": "const obj = { a: 1, b: 2 };\nfor (const v of obj) {\n  console.log(v);\n}",
  "options": [
   "TypeError 오류가 난다",
   "1과 2가 출력된다",
   "a와 b가 출력된다",
   "아무것도 출력되지 않는다"
  ],
  "answer": 1,
  "exp": "보통 객체는 for...of로 돌 수 없어서 TypeError(obj is not iterable)가 나요. Object.values(obj)나 for...in을 써요.",
  "why": [
   "",
   "값을 꺼내려면 for (const v of Object.values(obj))처럼 써야 해요.",
   "키를 꺼내는 건 for...in이에요.",
   "조용히 넘어가지 않고 오류가 나요."
  ],
  "check": {
   "err": "TypeError"
  }
 },
 {
  "id": "t15-1",
  "unit": "if",
  "freq": "mid",
  "subject": 1,
  "trap": "t15",
  "topic": "break 없음",
  "q": "출력 결과는?",
  "code": "const grade = \"B\";\nswitch (grade) {\n  case \"A\":\n    console.log(\"최고\");\n  case \"B\":\n    console.log(\"좋음\");\n  case \"C\":\n    console.log(\"보통\");\n    break;\n  default:\n    console.log(\"기타\");\n}",
  "options": [
   "좋음",
   "좋음\n보통",
   "좋음\n보통\n기타",
   "최고\n좋음\n보통"
  ],
  "answer": 2,
  "exp": "\"B\" case부터 시작해서 break가 있는 \"C\"까지 실행해요. default는 break 뒤라 실행되지 않아요.",
  "why": [
   "\"B\" case에 break가 없어서 \"C\"까지 내려가요.",
   "",
   "\"C\"의 break에서 멈춰서 default는 실행 안 돼요.",
   "\"A\"는 맞지 않아서 그 위부터 시작하지 않아요."
  ],
  "check": {}
 },
 {
  "id": "t15-2",
  "unit": "if",
  "freq": "mid",
  "subject": 1,
  "trap": "t15",
  "topic": "switch",
  "q": "출력 결과는?",
  "code": "const input = \"2\";\nswitch (input) {\n  case 2:\n    console.log(\"둘\");\n    break;\n  default:\n    console.log(\"모름\");\n}",
  "options": [
   "둘",
   "모름",
   "둘\n모름",
   "아무것도 출력되지 않는다"
  ],
  "answer": 2,
  "exp": "switch는 ===로 비교해서 문자열 \"2\"와 숫자 2는 달라요. 그래서 default로 가요.",
  "why": [
   "\"2\" === 2는 false라 case 2로 가지 않아요.",
   "",
   "case 2는 실행되지 않았어요.",
   "맞는 case가 없으면 default가 실행돼요."
  ],
  "check": {}
 },
 {
  "id": "t15-3",
  "unit": "if",
  "freq": "mid",
  "subject": 1,
  "trap": "t15",
  "topic": "default",
  "q": "출력 결과는?",
  "code": "function label(n) {\n  let s = \"\";\n  switch (true) {\n    case n > 10:\n      s += \"큰\";\n    case n > 5:\n      s += \"중간\";\n      break;\n    default:\n      s += \"작은\";\n  }\n  return s;\n}\nconsole.log(label(20), label(7), label(1));",
  "options": [
   "큰 중간 작은",
   "큰중간 중간작은 작은",
   "큰중간 중간 작은",
   "큰중간작은 중간 작은"
  ],
  "answer": 3,
  "exp": "switch (true)는 처음으로 true인 case부터 실행해요. 20은 '큰'에서 break가 없어 '중간'까지, 7은 '중간'만, 1은 default '작은'이에요.",
  "why": [
   "n > 10 case에 break가 없어서 20은 '큰중간'이에요.",
   "7은 n > 5 case의 break에서 멈춰 '작은'이 붙지 않아요.",
   "",
   "20은 n > 5의 break에서 멈춰 default까지 가지 않아요."
  ],
  "check": {}
 },
 {
  "id": "t16-1",
  "unit": "async",
  "freq": "mid",
  "subject": 2,
  "trap": "t16",
  "topic": "실행 순서",
  "q": "출력 결과는?",
  "code": "console.log(\"A\");\nsetTimeout(() => console.log(\"B\"), 0);\nPromise.resolve().then(() => console.log(\"C\"));\nconsole.log(\"D\");",
  "options": [
   "A\nB\nC\nD",
   "A\nD\nB\nC",
   "A\nD\nC\nB",
   "A\nC\nD\nB"
  ],
  "answer": 3,
  "exp": "지금 코드 A, D가 먼저, 그다음 급한 줄의 Promise C, 마지막으로 타이머 B예요.",
  "why": [
   "타이머와 then은 지금 코드가 다 끝난 뒤에 실행돼요.",
   "Promise의 then이 setTimeout보다 먼저예요.",
   "",
   "then은 D보다 늦게, 지금 코드가 끝난 다음 실행돼요."
  ],
  "check": {}
 },
 {
  "id": "t16-2",
  "unit": "async",
  "freq": "mid",
  "subject": 2,
  "trap": "t16",
  "topic": "Promise",
  "q": "출력 결과는?",
  "code": "new Promise(resolve => {\n  console.log(\"1\");\n  resolve();\n}).then(() => console.log(\"2\"));\nconsole.log(\"3\");",
  "options": [
   "3\n1\n2",
   "1\n2\n3",
   "1\n3\n2",
   "3\n2\n1"
  ],
  "answer": 3,
  "exp": "new Promise에 넘긴 함수는 그 자리에서 바로 실행돼서 1이 먼저예요. then은 지금 코드(3)가 끝난 뒤예요.",
  "why": [
   "new Promise 안의 함수는 기다리지 않고 바로 실행돼요.",
   "then은 바로 실행되지 않고 지금 코드가 끝난 뒤에 실행돼요.",
   "",
   "1이 가장 먼저 출력돼요."
  ],
  "check": {}
 },
 {
  "id": "t16-3",
  "unit": "async",
  "freq": "mid",
  "subject": 2,
  "trap": "t16",
  "topic": "await",
  "q": "출력 결과는?",
  "code": "async function f() {\n  console.log(\"a\");\n  await null;\n  console.log(\"b\");\n}\nsetTimeout(() => console.log(\"t\"), 0);\nf();\nconsole.log(\"c\");",
  "options": [
   "a\nb\nc\nt",
   "a\nc\nb\nt",
   "c\na\nb\nt",
   "a\nc\nt\nb"
  ],
  "answer": 2,
  "exp": "f()를 부르면 await 전의 a는 바로 출력돼요. await 뒤(b)는 급한 줄로 미뤄져 c 다음, 타이머 t보다 먼저예요.",
  "why": [
   "await를 만나면 함수 밖의 코드(c)가 먼저 실행돼요.",
   "",
   "f() 안의 a는 c보다 먼저 실행돼요.",
   "await 뒤의 코드는 setTimeout보다 먼저예요."
  ],
  "check": {}
 },
 {
  "id": "t17-1",
  "unit": "arr",
  "freq": "mid",
  "subject": 2,
  "trap": "t17",
  "topic": "map",
  "q": "출력 결과는?",
  "code": "console.log([\"1\", \"2\", \"3\"].map(Number).join(\",\"));",
  "options": [
   "1,NaN,NaN",
   "123",
   "1,2,3",
   "NaN,NaN,NaN"
  ],
  "answer": 3,
  "exp": "Number는 첫 번째 값만 써서 문자열을 그대로 숫자로 바꿔요.",
  "why": [
   "1, NaN, NaN은 parseInt를 바로 넘겼을 때의 결과예요.",
   "join(\",\")으로 쉼표를 넣어 붙였어요.",
   "",
   "\"1\", \"2\", \"3\"은 숫자로 바꿀 수 있어요."
  ],
  "check": {}
 },
 {
  "id": "t17-2",
  "unit": "arr",
  "freq": "mid",
  "subject": 2,
  "trap": "t17",
  "topic": "map",
  "q": "출력 결과는?",
  "code": "console.log([\"10\", \"10\", \"10\"].map(parseInt).join(\",\"));",
  "options": [
   "10,NaN,2",
   "10,10,10",
   "10,NaN,NaN",
   "NaN,NaN,NaN"
  ],
  "answer": 1,
  "exp": "parseInt(\"10\", 0)은 진법 0을 '알아서'로 봐서 10, parseInt(\"10\", 1)은 1진법이 없어 NaN, parseInt(\"10\", 2)는 2진수 10이라 2예요.",
  "why": [
   "",
   "map이 번호를 두 번째 인수로 넘겨서 진법이 0, 1, 2로 바뀌어요.",
   "세 번째는 2진법으로 읽어서 2예요.",
   "첫 번째는 진법 0 = 기본(10진법)이라 10이에요."
  ],
  "check": {}
 },
 {
  "id": "t17-3",
  "unit": "fn",
  "freq": "mid",
  "subject": 1,
  "trap": "t17",
  "topic": "콜백",
  "q": "map(fn)을 썼을 때 fn이 받는 인수를 차례대로 바르게 쓴 것은?",
  "options": [
   "번호, 값",
   "값, 번호, 배열 전체",
   "값 하나만",
   "배열 전체, 값, 번호"
  ],
  "answer": 2,
  "exp": "map, forEach, filter 같은 메서드는 콜백에 (값, 번호, 배열)을 넘겨요. 쓰지 않는 값은 매개변수를 안 적으면 그만이에요.",
  "why": [
   "값이 첫 번째, 번호가 두 번째예요.",
   "",
   "값만 쓰는 경우가 많지만 실제로는 세 개를 넘겨줘요.",
   "배열 전체는 세 번째예요."
  ],
  "check": {
   "assert": "const assert = require('assert');\nconst seen = [];\n['x'].map((...a) => seen.push(a));\nassert.strictEqual(seen[0][0], 'x');\nassert.strictEqual(seen[0][1], 0);\nassert(Array.isArray(seen[0][2]) && seen[0].length === 3);"
  }
 },
 {
  "id": "t18-1",
  "unit": "fn",
  "freq": "mid",
  "subject": 1,
  "trap": "t18",
  "topic": "객체 반환",
  "q": "출력 결과는?",
  "code": "const make = () => { name: \"민지\" };\nconsole.log(make());",
  "options": [
   "[object Object]",
   "민지",
   "undefined",
   "오류가 난다"
  ],
  "answer": 3,
  "exp": "=> 뒤의 { }가 함수 본문으로 읽혀서 return이 없는 함수가 돼요. 그래서 undefined예요. (안의 name:은 이름표(label) 문법으로 읽혀서 오류는 안 나요.)",
  "why": [
   "객체가 만들어지지 않았어요. 중괄호가 본문이에요.",
   "객체를 돌려주려면 ({ name: \"민지\" })처럼 소괄호가 필요해요.",
   "",
   "문법상 오류는 없고 undefined를 돌려줘요."
  ],
  "check": {}
 },
 {
  "id": "t18-2",
  "unit": "fn",
  "freq": "mid",
  "subject": 1,
  "trap": "t18",
  "topic": "화살표",
  "q": "{ id: 1 }을 돌려주는 화살표 함수는?",
  "options": [
   "() => { id: 1 }",
   "() => { { id: 1 } }",
   "() => ({ id: 1 })",
   "() => [id: 1]"
  ],
  "answer": 3,
  "exp": "소괄호로 감싸면 중괄호가 객체로 읽혀요.",
  "why": [
   "중괄호가 본문으로 읽혀 undefined를 돌려줘요.",
   "본문 안에 블록을 하나 더 만든 것이고 return이 없어요.",
   "",
   "배열 안에 id: 1은 쓸 수 없는 문법이에요."
  ],
  "check": {
   "assert": "const assert = require('assert');\nassert.strictEqual((() => ({ id: 1 }))().id, 1);\nassert.strictEqual((() => { id: 1 })(), undefined);\nassert.strictEqual((() => { { id: 1 } })(), undefined);"
  }
 },
 {
  "id": "t18-3",
  "unit": "arr",
  "freq": "mid",
  "subject": 2,
  "trap": "t18",
  "topic": "map",
  "q": "출력 결과는?",
  "code": "const nums = [1, 2, 3];\nconst a = nums.map(n => { n * 2; });\nconst b = nums.map(n => n * 2);\nconsole.log(a[0], b[0]);",
  "options": [
   "undefined 2",
   "2 2",
   "undefined undefined",
   "2 undefined"
  ],
  "answer": 1,
  "exp": "a의 콜백은 중괄호 본문에 return이 없어서 매번 undefined를 돌려줘요. b는 식을 바로 돌려줘서 2예요.",
  "why": [
   "",
   "a의 콜백은 return이 없어요.",
   "b는 n * 2를 바로 돌려줘요.",
   "반대예요. return이 빠진 쪽은 a예요."
  ],
  "check": {}
 },
 {
  "id": "t19-1",
  "unit": "arr",
  "freq": "mid",
  "subject": 2,
  "trap": "t19",
  "topic": "forEach",
  "q": "출력 결과는?",
  "code": "const r = [1, 2, 3].forEach(n => n * 2);\nconsole.log(r);",
  "options": [
   "undefined",
   "2,4,6",
   "6",
   "1,2,3"
  ],
  "answer": 1,
  "exp": "forEach는 돌려주는 값이 없어서 r은 undefined예요.",
  "why": [
   "",
   "두 배 배열이 필요하면 map을 써야 해요.",
   "마지막 값을 돌려주지도 않아요.",
   "원래 배열을 돌려주지도 않아요."
  ],
  "check": {}
 },
 {
  "id": "t19-2",
  "unit": "arr",
  "freq": "mid",
  "subject": 2,
  "trap": "t19",
  "topic": "forEach",
  "q": "출력 결과는?",
  "code": "let s = \"\";\n[1, 2, 3, 4].forEach(n => {\n  if (n === 2) return;\n  s += n;\n});\nconsole.log(s);",
  "options": [
   "1",
   "1234",
   "34",
   "134"
  ],
  "answer": 4,
  "exp": "forEach 안의 return은 그 차례(n = 2)만 건너뛰고 나머지는 계속 돌아요. continue처럼 동작해요.",
  "why": [
   "return이 반복 전체를 멈추지는 않아요.",
   "n === 2인 차례는 return으로 건너뛰었어요.",
   "1은 return 전에 이미 더해졌어요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "t19-3",
  "unit": "loop",
  "freq": "mid",
  "subject": 1,
  "trap": "t19",
  "topic": "break",
  "q": "배열에서 처음 음수를 만나면 반복을 완전히 멈추려 한다. 알맞은 것은?",
  "options": [
   "for (const n of arr) { if (n < 0) break; }",
   "arr.forEach(n => { if (n < 0) break; });",
   "arr.forEach(n => { if (n < 0) return; });",
   "arr.map(n => { if (n < 0) continue; });"
  ],
  "answer": 1,
  "exp": "break는 for, for...of, while 같은 반복문 안에서만 쓸 수 있어요.",
  "why": [
   "",
   "forEach 콜백 안에서 break는 문법 오류(SyntaxError)예요.",
   "forEach 안의 return은 그 차례만 끝내고 다음 값으로 계속 가요.",
   "콜백 안에서 continue도 문법 오류예요."
  ],
  "check": {
   "assert": "const assert = require('assert');\nassert.throws(() => new Function('arr.forEach(n => { if (n < 0) break; });'), SyntaxError);\nassert.throws(() => new Function('arr.map(n => { if (n < 0) continue; });'), SyntaxError);\nlet seen = 0;\n[1, -1, 2].forEach(n => { if (n < 0) return; seen++; });\nassert.strictEqual(seen, 2);\nseen = 0;\nfor (const n of [1, -1, 2]) { if (n < 0) break; seen++; }\nassert.strictEqual(seen, 1);"
  }
 },
 {
  "id": "t20-1",
  "unit": "op",
  "freq": "mid",
  "subject": 1,
  "trap": "t20",
  "topic": "문자열 비교",
  "q": "출력 결과는?",
  "code": "console.log(\"25\" > \"100\", 25 > 100);",
  "options": [
   "false false",
   "true false",
   "true true",
   "false true"
  ],
  "answer": 2,
  "exp": "문자열은 첫 글자부터 비교해요. \"2\"가 \"1\"보다 뒤라서 \"25\" > \"100\"은 true예요. 숫자로는 25 > 100이 false예요.",
  "why": [
   "문자열 비교는 숫자 크기가 아니라 글자 순서예요.",
   "",
   "숫자 25는 100보다 작아요.",
   "문자열 쪽이 true, 숫자 쪽이 false예요."
  ],
  "check": {}
 },
 {
  "id": "t20-2",
  "unit": "str",
  "freq": "mid",
  "subject": 2,
  "trap": "t20",
  "topic": "불변",
  "q": "출력 결과는?",
  "code": "let word = \"dog\";\nword[0] = \"f\";\nword.toUpperCase();\nconsole.log(word);",
  "options": [
   "fog",
   "DOG",
   "FOG",
   "dog"
  ],
  "answer": 4,
  "exp": "문자열 글자는 바꿀 수 없어서 word[0] = \"f\"는 효과가 없어요. toUpperCase도 새 문자열을 돌려줄 뿐 word는 그대로예요.",
  "why": [
   "문자열의 한 글자를 직접 바꿀 수는 없어요.",
   "toUpperCase의 결과를 word에 다시 넣지 않았어요.",
   "두 줄 모두 word를 바꾸지 못했어요.",
   ""
  ],
  "check": {}
 },
 {
  "id": "t20-3",
  "unit": "arr",
  "freq": "mid",
  "subject": 2,
  "trap": "t20",
  "topic": "sort",
  "q": "출력 결과는?",
  "code": "const names = [\"bob\", \"Alice\", \"carl\", \"Ben\"];\nconsole.log(names.sort().join(\",\"));",
  "options": [
   "Alice,Ben,bob,carl",
   "Alice,bob,Ben,carl",
   "bob,carl,Alice,Ben",
   "Alice,Ben,carl,bob"
  ],
  "answer": 1,
  "exp": "기본 정렬은 글자 코드 순서라 대문자(A~Z)가 소문자(a~z)보다 먼저예요. 그래서 Alice, Ben 뒤에 bob, carl이에요.",
  "why": [
   "",
   "대문자가 소문자보다 앞이라 Ben이 bob보다 먼저예요.",
   "기본 정렬은 대문자를 먼저 놓아요.",
   "b가 c보다 앞이라 bob이 carl보다 먼저예요."
  ],
  "check": {}
 }
];
