// 공부 탭: 파이썬을 처음 보는 사람을 위한 강의 (시험 흐름 순서, g는 묶음 이름)
// 필드: id, g, title, sum(한 줄 요약), parts[{t: 설명, c?: 코드, o?: 실행 결과}]
// 한 강의의 코드는 위에서부터 이어서 실행되며, python3 check.py가 c를 실제로 실행해 o와 같은지 확인합니다.
// 저작권: 모든 설명과 예제는 새로 작성했습니다.
window.AICE_LESSONS = [
  {
    "id": "l01",
    "g": "파이썬 기초",
    "title": "파이썬과 시험 환경",
    "sum": "파이썬이 뭔지, 시험에서 코드를 어디에 쓰고 어떻게 실행하는지",
    "parts": [
      {
        "t": "파이썬은 컴퓨터에게 일을 시키는 언어예요. 영어 단어와 기호로 '이 파일을 읽어', '평균을 구해'처럼 명령을 적으면 컴퓨터가 위에서 아래로 한 줄씩 실행해요."
      },
      {
        "t": "AICE 시험은 주피터 노트북(Jupyter Notebook)이라는 화면에서 봐요. 네모난 칸(셀)에 코드를 적고 Shift + Enter를 누르면 그 칸이 실행되고, 결과가 바로 아래에 나와요. 앞 칸에서 만든 것은 뒤 칸에서 그대로 쓸 수 있어요."
      },
      {
        "t": "print()는 괄호 안의 값을 화면에 보여 주는 명령이에요. 글자는 따옴표로 감싸고, 숫자는 그대로 써요.",
        "c": "print('안녕하세요')\nprint(3 + 4)",
        "o": "안녕하세요\n7"
      },
      {
        "t": "# 뒤에 쓴 글은 주석이라 실행되지 않아요. 코드에 메모를 남길 때 써요. 주피터에서는 칸의 마지막 줄 값은 print 없이도 결과로 보여 줘요.",
        "c": "# 이 줄은 실행되지 않아요\nprint(10 * 2)  # 곱하기는 *",
        "o": "20"
      },
      {
        "t": "시험의 큰 흐름은 이 순서예요. 이 순서대로 공부하면 돼요.\n1) 도구(라이브러리) 불러오기 → 2) 데이터 읽기 → 3) 그래프로 살펴보기 → 4) 빈 값·필요 없는 열 정리 → 5) 글자를 숫자로 바꾸기 → 6) 학습용·검증용 나누기 → 7) 머신러닝 → 8) 딥러닝 → 9) 성능 평가"
      }
    ]
  },
  {
    "id": "l02",
    "g": "파이썬 기초",
    "title": "변수와 자료형",
    "sum": "값에 이름 붙이기, 숫자·글자·참거짓",
    "parts": [
      {
        "t": "변수는 값에 붙이는 이름표예요. = 는 '같다'가 아니라 '오른쪽 값을 왼쪽 이름에 넣어라'라는 뜻이에요.",
        "c": "age = 25\nname = '민지'\nprint(name, age)",
        "o": "민지 25"
      },
      {
        "t": "변수끼리 계산할 수 있어요. + - * / 는 사칙연산, ** 는 거듭제곱이에요. / 로 나누면 결과가 소수(실수)로 나와요.",
        "c": "a = 10\nb = 4\nprint(a + b, a - b, a * b, a / b, a ** 2)",
        "o": "14 6 40 2.5 100"
      },
      {
        "t": "값에는 종류(자료형)가 있어요. 정수 int, 소수 float, 글자 str, 참·거짓 bool이에요. type()으로 확인해요.",
        "c": "print(type(25).__name__, type(2.5).__name__, type('민지').__name__, type(True).__name__)",
        "o": "int float str bool"
      },
      {
        "t": "비교하면 참(True)이나 거짓(False)이 나와요. 같은지 비교할 때는 = 를 두 번 써서 == 로 써요. 다르다는 != 예요.",
        "c": "print(age > 20, age == 30, age != 30)",
        "o": "True False True"
      },
      {
        "t": "글자로 된 숫자는 계산이 안 돼요. int(), float()로 숫자로 바꿔요. 시험 데이터에서 숫자가 글자로 읽혀 바꿔야 하는 경우가 자주 나와요.",
        "c": "price = '1500'\nprint(int(price) + 500)",
        "o": "2000"
      }
    ]
  },
  {
    "id": "l03",
    "g": "파이썬 기초",
    "title": "리스트와 딕셔너리",
    "sum": "여러 값을 한 번에 담기, 0부터 세는 번호, 자르기",
    "parts": [
      {
        "t": "리스트는 여러 값을 순서대로 담는 상자예요. 대괄호 [ ] 안에 쉼표로 나열해요.",
        "c": "scores = [70, 85, 90, 60]\nprint(len(scores))  # len: 개수",
        "o": "4"
      },
      {
        "t": "리스트의 번호(인덱스)는 0부터 시작해요. 첫 번째는 [0], 두 번째는 [1]이에요. [-1]은 맨 뒤 값이에요.",
        "c": "print(scores[0], scores[1], scores[-1])",
        "o": "70 85 60"
      },
      {
        "t": "[시작:끝]으로 잘라 낼 수 있어요. 끝 번호는 포함되지 않아요. [1:3]은 1번, 2번만이에요. 이 규칙은 판다스 iloc에서도 똑같아요.",
        "c": "print(scores[1:3])\nprint(scores[:2])  # 처음부터 2개",
        "o": "[85, 90]\n[70, 85]"
      },
      {
        "t": "딕셔너리는 '이름: 값' 짝을 담는 상자예요. 중괄호 { } 를 쓰고, 이름(키)으로 값을 꺼내요. 판다스에서 표를 만들거나 값을 바꿀 때 자주 써요.",
        "c": "person = {'name': '민지', 'age': 25}\nprint(person['age'])",
        "o": "25"
      },
      {
        "t": "튜플은 소괄호 ( ) 로 묶은, 바꿀 수 없는 리스트예요. 표의 크기 (행 수, 열 수)나 input_shape=(10,) 처럼 쓰여요. 값이 하나인 튜플은 (10,)처럼 쉼표를 꼭 붙여요.",
        "c": "size = (100, 5)\nrows, cols = size  # 두 변수에 나눠 담기\nprint(rows, cols)",
        "o": "100 5"
      }
    ]
  },
  {
    "id": "l04",
    "g": "파이썬 기초",
    "title": "함수, 인자, 메서드",
    "sum": "괄호 ( ) 와 점 . 읽는 법, 이름=값 인자",
    "parts": [
      {
        "t": "함수는 이름 뒤에 괄호를 붙여 실행하는 명령이에요. 괄호 안에 넣는 값을 인자라고 해요. len, print, max, round도 함수예요.",
        "c": "print(max([3, 9, 4]), round(3.14159, 2))",
        "o": "9 3.14"
      },
      {
        "t": "인자는 '이름=값'으로도 줄 수 있어요(키워드 인자). 시험 코드에 정말 많이 나와요. test_size=0.2, axis=1, activation='relu' 모두 이 방식이에요.",
        "c": "print(round(number=2.567, ndigits=1))",
        "o": "2.6"
      },
      {
        "t": "메서드는 값 뒤에 점(.)을 찍고 쓰는 함수예요. '이 값의 기능'이라고 생각하면 돼요. df.head(), df.drop(...), model.fit(...)이 모두 메서드예요.",
        "c": "word = 'python'\nprint(word.upper())  # 대문자로\nnums = [3, 1, 2]\nnums.append(5)       # 리스트 끝에 추가\nprint(nums)",
        "o": "PYTHON\n[3, 1, 2, 5]"
      },
      {
        "t": "괄호가 없는 점(.) 뒤 이름은 속성이에요. 값을 가진 정보일 뿐 실행하는 게 아니에요. df.shape, df.columns, model.feature_importances_ 같은 것들이에요."
      },
      {
        "t": "def로 함수를 직접 만들 수도 있고, 한 줄짜리는 lambda로 써요. 판다스 apply에서 lambda를 자주 써요.",
        "c": "def double(x):\n    return x * 2\nprint(double(4))\nprint((lambda x: x + 1)(4))",
        "o": "8\n5"
      }
    ]
  },
  {
    "id": "l05",
    "g": "파이썬 기초",
    "title": "조건문과 반복문",
    "sum": "if와 for, 들여쓰기",
    "parts": [
      {
        "t": "if는 조건이 참일 때만 실행해요. 조건 뒤에 콜론(:)을 쓰고, 실행할 줄은 들여써요(스페이스 4칸). 파이썬은 들여쓰기로 범위를 구분해요.",
        "c": "score = 85\nif score >= 80:\n    print('합격')\nelse:\n    print('불합격')",
        "o": "합격"
      },
      {
        "t": "for는 리스트 안의 값을 하나씩 꺼내 반복해요.",
        "c": "for s in [60, 80, 90]:\n    print(s >= 80)",
        "o": "False\nTrue\nTrue"
      },
      {
        "t": "시험에서는 반복문을 직접 쓸 일이 많지 않아요. 판다스와 넘파이가 표 전체를 한 번에 계산해 주기 때문이에요. 다만 읽을 줄은 알아야 해요."
      }
    ]
  },
  {
    "id": "l06",
    "g": "파이썬 기초",
    "title": "라이브러리와 import",
    "sum": "도구 상자 불러오기, as로 별칭 붙이기",
    "parts": [
      {
        "t": "라이브러리는 다른 사람들이 만들어 둔 도구 상자예요. 표 다루기, 그래프, 머신러닝 같은 기능이 이미 들어 있어서 import로 불러와 쓰기만 하면 돼요."
      },
      {
        "t": "import 이름 as 별칭 으로 불러와요. 별칭은 짧게 부르려고 붙이는 이름이고, 다들 쓰는 관례가 정해져 있어요.",
        "c": "import numpy as np\nimport pandas as pd\nprint(np.__name__, pd.__name__)",
        "o": "numpy pandas"
      },
      {
        "t": "시험에서 쓰는 도구 상자는 이렇게 정리돼요.\n· numpy(np): 숫자 계산\n· pandas(pd): 엑셀 같은 표 다루기\n· matplotlib.pyplot(plt), seaborn(sns): 그래프\n· scikit-learn(sklearn): 머신러닝 (전처리, 모델, 평가)\n· tensorflow.keras: 딥러닝"
      },
      {
        "t": "큰 도구 상자 안의 도구 하나만 꺼낼 때는 from 상자 import 도구 로 써요. 사이킷런은 이렇게 불러요.",
        "c": "from sklearn.model_selection import train_test_split\nprint(train_test_split.__name__)",
        "o": "train_test_split"
      }
    ]
  },
  {
    "id": "l07",
    "g": "데이터 도구",
    "title": "numpy: 숫자 계산 도구",
    "sum": "배열, 한 번에 계산하기, shape, 평균과 argmax",
    "parts": [
      {
        "t": "넘파이(numpy)는 숫자를 빠르게 계산하는 도구예요. 핵심은 배열(array)이에요. 리스트와 비슷하지만, 안의 숫자 전체를 한 번에 계산할 수 있어요.",
        "c": "import numpy as np\narr = np.array([1, 2, 3, 4])\nprint(arr * 10)",
        "o": "[10 20 30 40]"
      },
      {
        "t": "리스트에 * 10 을 하면 리스트가 10번 반복되지만, 배열은 숫자마다 곱해져요. 이 차이 때문에 데이터 계산에는 넘파이를 써요.",
        "c": "print([1, 2] * 2)\nprint(np.array([1, 2]) * 2)",
        "o": "[1, 2, 1, 2]\n[2 4]"
      },
      {
        "t": "배열은 표처럼 2차원(행과 열)이 될 수 있어요. shape는 (행 수, 열 수)예요. 머신러닝에 넣는 X는 보통 2차원이에요.",
        "c": "m = np.array([[1, 2, 3],\n              [4, 5, 6]])\nprint(m.shape)",
        "o": "(2, 3)"
      },
      {
        "t": "평균, 합계, 최댓값을 함수 하나로 구해요. argmax는 가장 큰 값이 '몇 번째'에 있는지 알려 줘요. 딥러닝 예측 결과에서 가장 확률이 큰 클래스를 고를 때 써요.",
        "c": "x = np.array([0.1, 0.7, 0.2])\nprint(x.mean().round(2), x.max(), x.argmax())",
        "o": "0.33 0.7 1"
      },
      {
        "t": "비교하면 True/False 배열이 나오고, astype(int)로 1/0으로 바꿀 수 있어요. 확률을 0.5 기준으로 0과 1로 바꿀 때 이렇게 써요.",
        "c": "prob = np.array([0.2, 0.8, 0.6])\nprint((prob > 0.5).astype(int))",
        "o": "[0 1 1]"
      },
      {
        "t": "reshape는 배열 모양을 바꿔요. 숫자 하나씩 담긴 1차원을 열 하나짜리 2차원으로 바꿀 때 reshape(-1, 1)을 써요. -1은 '알아서 맞춰'라는 뜻이에요.",
        "c": "print(np.array([5, 6, 7]).reshape(-1, 1).shape)",
        "o": "(3, 1)"
      }
    ]
  },
  {
    "id": "l08",
    "g": "데이터 도구",
    "title": "pandas 1: 표 만들고 읽기",
    "sum": "DataFrame과 Series, read_csv, head·shape·info",
    "parts": [
      {
        "t": "판다스(pandas)는 엑셀 같은 표를 다루는 도구예요. 표 전체를 DataFrame(데이터프레임), 표의 열 하나를 Series(시리즈)라고 불러요. 보통 표를 df라는 이름에 담아요."
      },
      {
        "t": "딕셔너리로 표를 만들 수 있어요. 키가 열 이름, 리스트가 그 열의 값이에요. 왼쪽 0, 1, 2는 행 번호(인덱스)예요.",
        "c": "import pandas as pd\ndf = pd.DataFrame({'name': ['A', 'B', 'C'],\n                   'age': [23, 35, 41],\n                   'city': ['Seoul', 'Busan', 'Seoul']})\nprint(df)",
        "o": "  name  age   city\n0    A   23  Seoul\n1    B   35  Busan\n2    C   41  Seoul"
      },
      {
        "t": "시험에서는 CSV 파일을 읽어 표를 만들어요. CSV는 쉼표로 칸을 나눈 글자 파일이에요.\ndf = pd.read_csv('파일이름.csv')"
      },
      {
        "t": "표를 처음 받으면 크기부터 봐요. shape는 (행 수, 열 수), columns는 열 이름 목록이에요.",
        "c": "print(df.shape)\nprint(list(df.columns))",
        "o": "(3, 3)\n['name', 'age', 'city']"
      },
      {
        "t": "head(n)은 앞 n행, tail(n)은 뒤 n행만 보여 줘요. 데이터가 수만 행이어도 생김새를 빠르게 볼 수 있어요.",
        "c": "print(df.head(2))",
        "o": "  name  age   city\n0    A   23  Seoul\n1    B   35  Busan"
      },
      {
        "t": "info()는 열마다 빈 값이 아닌 개수와 자료형을, describe()는 숫자 열의 평균·최솟값·최댓값 같은 통계를 보여 줘요. 둘 다 데이터를 처음 볼 때 꼭 실행해요."
      }
    ]
  },
  {
    "id": "l09",
    "g": "데이터 도구",
    "title": "pandas 2: 열과 행 고르기",
    "sum": "df['열'], 조건으로 거르기, loc·iloc",
    "parts": [
      {
        "t": "열 하나는 df['열이름']으로 꺼내요. 결과는 Series예요. tolist()로 리스트로 바꿔 볼 수 있어요.",
        "c": "import pandas as pd\ndf = pd.DataFrame({'name': ['A', 'B', 'C', 'D'],\n                   'age': [23, 35, 41, 29],\n                   'city': ['Seoul', 'Busan', 'Seoul', 'Daegu']})\nprint(df['age'].tolist())",
        "o": "[23, 35, 41, 29]"
      },
      {
        "t": "여러 열은 열 이름 리스트를 넣어요. 그래서 대괄호가 두 겹이 돼요.",
        "c": "print(df[['name', 'age']].shape)",
        "o": "(4, 2)"
      },
      {
        "t": "조건으로 행을 거를 수 있어요. 대괄호 안에 조건을 넣으면 조건이 참인 행만 남아요.",
        "c": "print(df[df['age'] >= 30]['name'].tolist())",
        "o": "['B', 'C']"
      },
      {
        "t": "조건 두 개는 &(그리고), |(또는)로 잇고, 조건마다 괄호를 쳐요. and, or를 쓰면 오류가 나요.",
        "c": "print(df[(df['age'] >= 30) & (df['city'] == 'Seoul')]['name'].tolist())",
        "o": "['C']"
      },
      {
        "t": "iloc[행 번호, 열 번호]는 위치로, loc[행 이름, 열 이름]은 이름으로 골라요. iloc는 리스트처럼 끝 번호를 빼고, loc는 끝 이름까지 포함해요.",
        "c": "print(df.iloc[0, 1])        # 0번째 행, 1번째 열\nprint(df.loc[1, 'city'])    # 1번 행, city 열\nprint(len(df.iloc[0:2]), len(df.loc[0:2]))",
        "o": "23\nBusan\n2 3"
      }
    ]
  },
  {
    "id": "l10",
    "g": "데이터 도구",
    "title": "pandas 3: 정리하고 요약하기",
    "sum": "빈 값, 열 지우기, 값 세기, 그룹별 평균, 새 열",
    "parts": [
      {
        "t": "빈 칸은 판다스에서 NaN(결측치)으로 나와요. isnull().sum()으로 열마다 빈 칸이 몇 개인지 세요.",
        "c": "import pandas as pd\nimport numpy as np\ndf = pd.DataFrame({'age': [23, np.nan, 41, 29],\n                   'city': ['Seoul', 'Busan', None, 'Seoul'],\n                   'id': [1, 2, 3, 4]})\nprint(df.isnull().sum().tolist())",
        "o": "[1, 1, 0]"
      },
      {
        "t": "빈 칸은 fillna(값)으로 채우거나 dropna()로 그 행을 지워요. 결과를 다시 df에 넣어야(대입) 바뀐 게 남아요.",
        "c": "df['age'] = df['age'].fillna(df['age'].mean())\nprint(df['age'].tolist())",
        "o": "[23.0, 31.0, 41.0, 29.0]"
      },
      {
        "t": "필요 없는 열은 drop으로 지워요. 열을 지울 때는 axis=1을 꼭 붙여요. axis=0은 행, axis=1은 열이라는 뜻이에요.",
        "c": "df = df.drop('id', axis=1)\nprint(list(df.columns))",
        "o": "['age', 'city']"
      },
      {
        "t": "value_counts()는 값마다 몇 개인지 세요. 많은 순서로 나오고 빈 칸은 세지 않아요.",
        "c": "print(df['city'].value_counts().to_dict())",
        "o": "{'Seoul': 2, 'Busan': 1}"
      },
      {
        "t": "groupby는 '~별로 묶어서'예요. 도시별 평균 나이처럼 그룹마다 요약할 때 써요.",
        "c": "print(df.groupby('city')['age'].mean().to_dict())",
        "o": "{'Busan': 31.0, 'Seoul': 26.0}"
      },
      {
        "t": "새 열은 df['새 이름'] = 계산식 으로 만들어요. 열끼리의 계산은 행마다 자동으로 돼요.",
        "c": "df['age2'] = df['age'] * 2\nprint(df['age2'].tolist())",
        "o": "[46.0, 62.0, 82.0, 58.0]"
      }
    ]
  },
  {
    "id": "l11",
    "g": "데이터 도구",
    "title": "그래프: matplotlib과 seaborn",
    "sum": "그래프 종류와 언제 쓰는지",
    "parts": [
      {
        "t": "matplotlib은 그래프의 기본 도구, seaborn은 그 위에서 표(df)를 넣으면 예쁜 그래프를 한 줄로 그려 주는 도구예요. 시험에서는 주로 seaborn으로 그리고 plt.show()로 화면에 띄워요."
      },
      {
        "t": "seaborn 함수는 data=표, x=열 이름 형태로 써요.",
        "c": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\ndf = pd.DataFrame({'age': [23, 35, 41, 29, 52], 'churn': [0, 1, 0, 0, 1]})\nsns.countplot(data=df, x='churn')\nplt.show()\nprint('그래프를 그렸어요')",
        "o": "그래프를 그렸어요"
      },
      {
        "t": "어떤 그래프를 쓸지 이렇게 고르면 돼요.\n· countplot: 범주별 개수 (0/1이 몇 개씩인지)\n· histplot: 숫자 하나의 분포 (어느 구간에 많은지)\n· boxplot: 이상치 찾기 (상자 밖 점)\n· scatterplot: 숫자 두 개의 관계 (점 찍기)\n· heatmap: 상관계수 표를 색으로"
      },
      {
        "t": "상관계수는 두 숫자 열이 함께 움직이는 정도예요. 1에 가까우면 같이 커지고, -1에 가까우면 반대로 움직이고, 0이면 직선 관계가 없어요. corr()로 구하고 heatmap으로 그려요.",
        "c": "print(round(df['age'].corr(df['churn']), 2))",
        "o": "0.61"
      }
    ]
  },
  {
    "id": "m01",
    "g": "전처리",
    "title": "결측치(빈 칸) 처리",
    "sum": "빈 칸 찾기, 지우기, 채우기, 언제 무엇을 쓰는지",
    "parts": [
      {
        "t": "결측치는 값이 비어 있는 칸이에요. 판다스는 보통 NaN으로 보여 줘요(버전·열 종류에 따라 None이나 <NA>로 보이기도 해요). 대부분의 모델은 빈 칸이 있으면 오류가 나서(ValueError) 먼저 처리해야 해요."
      },
      {
        "t": "isnull()은 칸마다 비었는지 True/False로 알려 주고, sum()을 붙이면 열마다 빈 칸 수가 나와요. True를 1로 세기 때문이에요.",
        "c": "import pandas as pd\nimport numpy as np\ndf = pd.DataFrame({'age': [20, np.nan, 40, np.nan],\n                   'job': ['A', 'B', None, 'B'],\n                   'income': [100, 200, 300, 400]})\nprint(df.isnull().sum().to_dict())",
        "o": "{'age': 2, 'job': 1, 'income': 0}"
      },
      {
        "t": "방법 1. 지우기: dropna()는 빈 칸이 하나라도 있는 행을 지워요. subset=['열']을 주면 그 열이 빈 행만 지워요.",
        "c": "print(len(df.dropna()), len(df.dropna(subset=['job'])))",
        "o": "1 3"
      },
      {
        "t": "방법 2. 채우기: fillna(값)으로 채워요. 숫자 열은 평균(mean)이나 중앙값(median), 글자 열은 가장 많이 나온 값(mode()[0])으로 채우는 경우가 많아요. 평균은 빈 칸을 빼고 계산해요.",
        "c": "df['age'] = df['age'].fillna(df['age'].mean())\ndf['job'] = df['job'].fillna(df['job'].mode()[0])\nprint(df['age'].tolist(), df['job'].tolist())",
        "o": "[20.0, 30.0, 40.0, 30.0] ['A', 'B', 'B', 'B']"
      },
      {
        "t": "어떻게 고를까요?\n· 빈 칸이 아주 적다 → 그 행 지우기\n· 빈 칸이 꽤 있다 → 평균·중앙값·최빈값으로 채우기\n· 열의 대부분이 비었다 → 그 열 자체를 지우기\n· 이상치가 많은 숫자 열 → 평균보다 중앙값이 안전해요"
      },
      {
        "t": "꼭 결과를 다시 대입해요. df.fillna(0)만 쓰면 채운 결과가 버려지고 df는 그대로예요. df = df.fillna(0)처럼 써야 해요."
      }
    ]
  },
  {
    "id": "m02",
    "g": "전처리",
    "title": "이상치와 잘못된 값",
    "sum": "튀는 값 찾기(IQR), 잘못 입력된 값 고치기",
    "parts": [
      {
        "t": "이상치는 다른 값들과 동떨어진 값이에요. 나이 200세, 월급 -100원처럼 잘못 들어간 값일 수도 있고, 진짜 드문 값일 수도 있어요. boxplot을 그리면 상자 밖의 점으로 보여요."
      },
      {
        "t": "IQR 방법: 값을 크기순으로 세워 25% 지점(Q1)과 75% 지점(Q3)을 구해요. IQR = Q3 - Q1이고, Q1 - 1.5×IQR보다 작거나 Q3 + 1.5×IQR보다 크면 이상치로 봐요.",
        "c": "import pandas as pd\ns = pd.Series([10, 12, 13, 14, 15, 90])\nq1, q3 = s.quantile(0.25), s.quantile(0.75)\niqr = q3 - q1\nprint(q1, q3, iqr)\nprint(s[s > q3 + 1.5 * iqr].tolist())",
        "o": "12.25 14.75 2.5\n[90]"
      },
      {
        "t": "이상치를 빼려면 정상 범위 조건으로 행을 거르고 다시 대입해요.",
        "c": "s = s[s <= q3 + 1.5 * iqr]\nprint(s.tolist())",
        "o": "[10, 12, 13, 14, 15]"
      },
      {
        "t": "잘못 적힌 글자는 replace(이전, 새 값)로 고쳐요.",
        "c": "g = pd.Series(['M', 'F', 'Male', 'F'])\nprint(g.replace('Male', 'M').tolist())",
        "o": "['M', 'F', 'M', 'F']"
      },
      {
        "t": "숫자 열에 공백 ' ' 같은 글자가 섞이면 열 전체가 글자로 읽혀요. pd.to_numeric(..., errors='coerce')는 숫자로 못 바꾸는 값을 NaN으로 바꿔 줘요. 그다음 결측치처럼 처리해요.",
        "c": "t = pd.Series(['100', ' ', '300'])\nprint(pd.to_numeric(t, errors='coerce').tolist())",
        "o": "[100.0, nan, 300.0]"
      }
    ]
  },
  {
    "id": "m03",
    "g": "전처리",
    "title": "인코딩: 글자를 숫자로",
    "sum": "원-핫 인코딩, 라벨 인코딩, map",
    "parts": [
      {
        "t": "모델은 숫자만 계산할 수 있어요. 'Seoul', '남' 같은 글자 열은 숫자로 바꿔야 해요. 이걸 인코딩이라고 해요."
      },
      {
        "t": "원-핫 인코딩: 범주마다 열을 하나씩 만들고, 해당하면 1(True), 아니면 0(False)을 넣어요. 서울·부산처럼 순서가 없는 범주에 써요. pd.get_dummies로 해요.",
        "c": "import pandas as pd\ndf = pd.DataFrame({'fee': [30, 50, 40], 'city': ['Seoul', 'Busan', 'Daegu']})\nd = pd.get_dummies(df, columns=['city'])\nprint(list(d.columns))\nprint(d.astype(int).values.tolist())",
        "o": "['fee', 'city_Busan', 'city_Daegu', 'city_Seoul']\n[[30, 0, 0, 1], [50, 1, 0, 0], [40, 0, 1, 0]]"
      },
      {
        "t": "drop_first=True를 주면 첫 범주 열을 빼요. 나머지가 모두 0이면 빠진 범주라는 걸 알 수 있어서 정보는 그대로예요. 열이 하나 줄어요.",
        "c": "print(list(pd.get_dummies(df, columns=['city'], drop_first=True).columns))",
        "o": "['fee', 'city_Daegu', 'city_Seoul']"
      },
      {
        "t": "라벨 인코딩: 범주에 0, 1, 2… 번호를 붙여요. 사이킷런 LabelEncoder는 가나다(알파벳)순으로 번호를 붙여요.",
        "c": "from sklearn.preprocessing import LabelEncoder\nle = LabelEncoder()\nprint(le.fit_transform(['Seoul', 'Busan', 'Daegu']).tolist())",
        "o": "[2, 0, 1]"
      },
      {
        "t": "두 값뿐이거나 순서가 있는 범주는 map에 딕셔너리를 줘서 직접 번호를 정해요. 딕셔너리에 없는 값은 NaN이 되니 빠짐없이 적어요.",
        "c": "size = pd.Series(['S', 'L', 'M'])\nprint(size.map({'S': 0, 'M': 1, 'L': 2}).tolist())",
        "o": "[0, 2, 1]"
      }
    ]
  },
  {
    "id": "m04",
    "g": "전처리",
    "title": "데이터 나누기와 스케일링",
    "sum": "train_test_split의 인자들, StandardScaler와 MinMaxScaler",
    "parts": [
      {
        "t": "train_test_split(X, y, ...)은 데이터를 섞은 뒤 학습용과 검증용으로 나눠요. 돌려주는 순서는 X_train, X_test, y_train, y_test예요(X 둘, y 둘)."
      },
      {
        "t": "자주 쓰는 인자예요.\n· test_size=0.2: 검증용 20% (안 쓰면 25%)\n· random_state=42: 매번 똑같이 나뉘게 고정 (숫자는 아무거나)\n· stratify=y: 0과 1의 비율을 학습·검증에 (거의) 똑같이 유지",
        "c": "import numpy as np\nfrom sklearn.model_selection import train_test_split\nX = np.arange(20).reshape(10, 2)\ny = np.array([0] * 8 + [1] * 2)\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.5, stratify=y, random_state=1)\nprint(X_train.shape, X_test.shape, y_test.sum())",
        "o": "(5, 2) (5, 2) 1"
      },
      {
        "t": "스케일링은 숫자 열들의 크기를 비슷하게 맞추는 거예요. 나이(20~60)와 연봉(2000~9000)을 그대로 쓰면 큰 숫자가 결과를 좌우할 수 있어요.\n· StandardScaler: 평균 0, 표준편차 1로\n· MinMaxScaler: 최솟값 0, 최댓값 1로",
        "c": "from sklearn.preprocessing import StandardScaler, MinMaxScaler\ndata = [[10], [20], [30]]\nprint(MinMaxScaler().fit_transform(data).ravel().tolist())\nprint(StandardScaler().fit_transform(data).ravel().round(2).tolist())",
        "o": "[0.0, 0.5, 1.0]\n[-1.22, 0.0, 1.22]"
      },
      {
        "t": "가장 중요한 규칙: 기준은 학습 데이터로만 정해요(fit). 검증 데이터는 그 기준으로 바꾸기만 해요(transform). 검증 데이터에 다시 fit하면 학습 때와 다른 기준으로 바뀌어 결과가 틀어져요. 또 나누기 전에 전체 데이터로 fit하면 검증 데이터 정보가 학습에 섞여(데이터 누수) 성능이 실제보다 좋게 나와요.",
        "c": "sc = MinMaxScaler()\ntrain = sc.fit_transform([[0], [10]])\ntest = sc.transform([[5], [20]])\nprint(test.ravel().tolist())",
        "o": "[0.5, 2.0]"
      },
      {
        "t": "검증 값 20이 2.0이 된 것처럼 0~1을 벗어날 수 있어요. 학습 데이터 기준으로 바꿨기 때문이고 정상이에요."
      }
    ]
  },
  {
    "id": "l12",
    "g": "머신러닝",
    "title": "머신러닝 기본 개념",
    "sum": "X와 y, 분류와 회귀, 학습용·검증용 데이터",
    "parts": [
      {
        "t": "머신러닝은 데이터에서 규칙을 스스로 찾게 하는 방법이에요. 예를 들어 고객 정보(나이, 요금, 가입 기간)를 보고 '이 고객이 떠날까?'를 맞히게 해요."
      },
      {
        "t": "맞히려는 열을 타깃 y(정답), 맞히는 데 쓰는 나머지 열을 X(문제)라고 해요. X는 대문자, y는 소문자로 쓰는 게 관례예요.",
        "c": "import pandas as pd\ndf = pd.DataFrame({'age': [23, 35, 41, 29], 'fee': [30, 50, 70, 40], 'churn': [0, 1, 1, 0]})\nX = df.drop('churn', axis=1)\ny = df['churn']\nprint(list(X.columns), y.tolist())",
        "o": "['age', 'fee'] [0, 1, 1, 0]"
      },
      {
        "t": "정답이 범주(이탈 여부, 합격/불합격)면 분류, 정답이 숫자(가격, 판매량)면 회귀예요. 트리·랜덤 포레스트·KNN 같은 모델은 이름이 분류는 ~Classifier, 회귀는 ~Regressor로 끝나요. (예외: LogisticRegression은 분류, LinearRegression은 회귀)"
      },
      {
        "t": "모델이 정말 잘 맞히는지 보려면 공부에 안 쓴 데이터로 시험을 봐야 해요. 그래서 데이터를 학습용(train)과 검증용(test)으로 나눠요. 보통 8:2로 나눠요.",
        "c": "from sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.5, random_state=0)\nprint(len(X_train), len(X_test))",
        "o": "2 2"
      },
      {
        "t": "과대적합은 학습 데이터만 외워서 새 데이터에서는 못 맞히는 상태예요. 학습 점수는 높은데 검증 점수가 낮으면 과대적합이에요. 시험에 자주 나오는 말이에요."
      }
    ]
  },
  {
    "id": "l13",
    "g": "머신러닝",
    "title": "scikit-learn: 머신러닝 도구",
    "sum": "전처리 → 모델 fit → predict → 평가",
    "parts": [
      {
        "t": "사이킷런(scikit-learn)은 머신러닝 도구 상자예요. 어떤 모델이든 사용법이 같아요. 만들고 → fit(공부) → predict(예측)."
      },
      {
        "t": "모델은 숫자만 받아요. 글자 열은 숫자로 바꿔야 해요(인코딩). pd.get_dummies는 범주마다 0/1 열을 만들어 줘요.",
        "c": "import pandas as pd\ndf = pd.DataFrame({'city': ['Seoul', 'Busan', 'Seoul']})\nprint(list(pd.get_dummies(df).columns))",
        "o": "['city_Busan', 'city_Seoul']"
      },
      {
        "t": "숫자 크기가 제각각이면(나이 20~60, 소득 1000~9000) 크기를 맞춰 주는 스케일링을 해요. MinMaxScaler는 0~1로 바꿔요. 학습 데이터로 fit_transform, 검증 데이터는 transform만 해요.",
        "c": "from sklearn.preprocessing import MinMaxScaler\nsc = MinMaxScaler()\nprint(sc.fit_transform([[20], [40], [60]]).ravel().tolist())",
        "o": "[0.0, 0.5, 1.0]"
      },
      {
        "t": "모델을 만들고 fit(X, y)으로 공부시키고 predict(X)로 예측해요. 아래는 결정 트리(질문을 이어 가며 나누는 모델)예요.",
        "c": "from sklearn.tree import DecisionTreeClassifier\nX = [[1], [2], [8], [9]]\ny = [0, 0, 1, 1]\nmodel = DecisionTreeClassifier(random_state=0)\nmodel.fit(X, y)\nprint(model.predict([[1.5], [8.5]]).tolist())",
        "o": "[0, 1]"
      },
      {
        "t": "예측이 얼마나 맞았는지 평가해요. 정확도(accuracy)는 전체 중 맞힌 비율이에요.",
        "c": "from sklearn.metrics import accuracy_score\nprint(accuracy_score([0, 1, 1, 0], [0, 1, 0, 0]))",
        "o": "0.75"
      },
      {
        "t": "자주 쓰는 모델은 이렇게 기억해요.\n· LogisticRegression: 분류 (이름에 Regression이 있어도 분류!)\n· DecisionTree: 질문을 이어 가며 나누는 나무\n· RandomForest: 나무 여러 그루의 투표\n· LinearRegression: 숫자 예측(회귀)"
      }
    ]
  },
  {
    "id": "m05",
    "g": "머신러닝",
    "title": "머신러닝 모델 종류",
    "sum": "로지스틱 회귀, 결정 트리, 랜덤 포레스트, KNN, 부스팅, 선형 회귀",
    "parts": [
      {
        "t": "모든 사이킷런 모델은 쓰는 법이 같아요. model = 모델이름(설정) → model.fit(X_train, y_train) → model.predict(X_test). 분류 모델은 보통 Classifier, 회귀 모델은 Regressor로 끝나요(LogisticRegression·LinearRegression은 예외)."
      },
      {
        "t": "로지스틱 회귀(LogisticRegression): 이름에 Regression이 있지만 분류 모델이에요. 각 클래스일 확률을 계산해 0/1을 정해요. 간단하고 빨라서 기준 모델로 많이 써요."
      },
      {
        "t": "결정 트리(DecisionTreeClassifier): '나이 > 30?' 같은 질문을 이어 가며 데이터를 나눠요. max_depth로 질문 깊이를 제한해요. 너무 깊으면 학습 데이터를 외워 과대적합돼요.",
        "c": "from sklearn.tree import DecisionTreeClassifier\nX = [[20], [25], [45], [50]]\ny = [0, 0, 1, 1]\ntree = DecisionTreeClassifier(max_depth=2, random_state=0).fit(X, y)\nprint(tree.predict([[30], [48]]).tolist())",
        "o": "[0, 1]"
      },
      {
        "t": "랜덤 포레스트(RandomForestClassifier): 데이터를 조금씩 다르게 뽑아 트리를 여러 그루(n_estimators, 기본 100) 만들고 그 결과를 모아(투표·확률 평균) 정해요. 트리 하나보다 안정적이라 시험에서 가장 많이 써요. feature_importances_로 어떤 열이 중요했는지 볼 수 있어요.",
        "c": "from sklearn.ensemble import RandomForestClassifier\nrf = RandomForestClassifier(n_estimators=10, random_state=0).fit(X, y)\nprint(len(rf.estimators_), rf.feature_importances_.tolist())",
        "o": "10 [1.0]"
      },
      {
        "t": "KNN(KNeighborsClassifier): 새 데이터와 가장 가까운 이웃 k개(n_neighbors)를 보고 다수결로 정해요. 거리를 재기 때문에 스케일링이 중요해요."
      },
      {
        "t": "부스팅(XGBoost, LightGBM, GradientBoosting): 트리를 하나씩 순서대로 만들면서 앞 트리가 틀린 부분을 다음 트리가 고쳐요. 성능이 좋아 대회에서 많이 써요."
      },
      {
        "t": "선형 회귀(LinearRegression): 숫자를 예측하는 회귀 모델이에요. 데이터에 가장 잘 맞는 직선을 찾아요.",
        "c": "from sklearn.linear_model import LinearRegression\nlr = LinearRegression().fit([[1], [2], [3]], [10, 20, 30])\nprint(lr.predict([[4]]).round(1).tolist())",
        "o": "[40.0]"
      },
      {
        "t": "predict_proba는 클래스별 확률을 줘요. [:, 1]은 '1일 확률' 열만 꺼내는 표현이에요.",
        "c": "print(tree.predict_proba([[48]])[:, 1].tolist())",
        "o": "[1.0]"
      }
    ]
  },
  {
    "id": "m06",
    "g": "머신러닝",
    "title": "분류 평가: 정확도, 정밀도, 재현율",
    "sum": "오차 행렬과 지표들, 불균형 데이터에서 조심할 점",
    "parts": [
      {
        "t": "분류 결과는 네 가지로 나뉘어요. 실제 1을 1로 맞힘(TP), 실제 0을 0으로 맞힘(TN), 실제 0인데 1이라고 함(FP), 실제 1인데 0이라고 함(FN). 이 개수를 표로 만든 것이 오차 행렬이에요."
      },
      {
        "t": "사이킷런 confusion_matrix는 행이 실제, 열이 예측이에요. [[TN, FP], [FN, TP]] 모양이에요.",
        "c": "from sklearn.metrics import confusion_matrix\ny_true = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0]\ny_pred = [1, 1, 1, 0, 1, 0, 0, 0, 0, 0]\nprint(confusion_matrix(y_true, y_pred).tolist())",
        "o": "[[5, 1], [1, 3]]"
      },
      {
        "t": "· 정확도(accuracy): 전체 중 맞힌 비율 = (TP + TN) / 전체\n· 정밀도(precision): 1이라고 한 것 중 진짜 1 = TP / (TP + FP)\n· 재현율(recall): 진짜 1 중 찾아낸 것 = TP / (TP + FN)\n· F1: 정밀도와 재현율의 조화평균, 둘 다 높아야 높아요",
        "c": "from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score\nprint(accuracy_score(y_true, y_pred), precision_score(y_true, y_pred), recall_score(y_true, y_pred), f1_score(y_true, y_pred))",
        "o": "0.8 0.75 0.75 0.75"
      },
      {
        "t": "언제 무엇이 중요할까요?\n· 환자를 놓치면 안 되는 암 진단 → 재현율\n· 정상 메일을 스팸으로 막으면 안 되는 스팸 필터 → 정밀도\n· 둘 다 중요 → F1"
      },
      {
        "t": "불균형 데이터 주의: 0이 95%인 데이터에서는 무조건 0이라고만 해도 정확도가 95%예요. 그래서 정확도만 보면 안 되고 재현율과 F1도 함께 봐요.",
        "c": "print(accuracy_score([0] * 95 + [1] * 5, [0] * 100))",
        "o": "0.95"
      },
      {
        "t": "classification_report(y_test, pred)를 print하면 클래스별 정밀도, 재현율, F1을 표로 한 번에 보여 줘요."
      }
    ]
  },
  {
    "id": "m07",
    "g": "머신러닝",
    "title": "회귀 평가: MAE, MSE, RMSE, R²",
    "sum": "숫자 예측이 얼마나 빗나갔는지 재는 법",
    "parts": [
      {
        "t": "회귀는 숫자를 맞히는 문제라 '얼마나 빗나갔나(오차)'로 평가해요. 오차 = 실제값 - 예측값이에요."
      },
      {
        "t": "· MAE: 오차의 절댓값 평균. 평균적으로 몇 만큼 틀렸는지\n· MSE: 오차를 제곱해서 평균. 크게 틀린 것을 더 크게 벌줘요\n· RMSE: MSE에 제곱근. 원래 단위로 돌아와 읽기 쉬워요\n· 셋 다 작을수록 좋아요",
        "c": "import numpy as np\nfrom sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score\ny_true = [100, 200, 300]\ny_pred = [110, 190, 330]\nmse = mean_squared_error(y_true, y_pred)\nprint(mean_absolute_error(y_true, y_pred), mse, np.sqrt(mse))",
        "o": "16.666666666666668 366.6666666666667 19.148542155126762"
      },
      {
        "t": "R²(결정계수)는 1에 가까울수록 좋아요. 1이면 완벽하고, 평균값으로 찍는 것보다 못하면 음수가 될 수도 있어요.",
        "c": "print(round(r2_score(y_true, y_pred), 3))",
        "o": "0.945"
      },
      {
        "t": "사이킷런 회귀 모델의 model.score(X, y)는 R²를, 분류 모델의 score는 정확도를 돌려줘요."
      }
    ]
  },
  {
    "id": "l14",
    "g": "딥러닝",
    "title": "딥러닝: TensorFlow와 Keras",
    "sum": "신경망, 층과 뉴런, compile → fit → predict",
    "parts": [
      {
        "t": "딥러닝은 뇌의 신경세포를 흉내 낸 신경망으로 학습하는 머신러닝이에요. 텐서플로(TensorFlow)는 딥러닝 도구이고, 케라스(Keras)는 그 안에서 신경망을 쉽게 쌓게 해 주는 부분이에요."
      },
      {
        "t": "신경망은 층(layer)을 쌓아서 만들어요. Sequential은 층을 순서대로 쌓는 틀, Dense는 숫자 계산을 하는 층, Dense(16)의 16은 그 층의 뉴런(계산 칸) 수예요. Input(shape=(2,))는 입력 열이 2개라는 뜻이에요. Input은 입력 모양만 알려 주는 것이라 층 수(model.layers)에는 들어가지 않아요. 그래서 결과가 2예요.",
        "c": "from tensorflow.keras import Sequential, Input\nfrom tensorflow.keras.layers import Dense\nmodel = Sequential([\n    Input(shape=(2,)),\n    Dense(16, activation='relu'),\n    Dense(1, activation='sigmoid')\n])\nprint(len(model.layers))",
        "o": "2"
      },
      {
        "t": "마지막 층은 문제에 맞춰요. 0/1 분류는 Dense(1, activation='sigmoid')로 0~1 사이 확률을, 숫자 예측은 Dense(1)로 값을 그대로 내요."
      },
      {
        "t": "compile로 학습 방법을 정해요. optimizer는 고치는 방법, loss는 줄일 오차, metrics는 지켜볼 점수예요. 그다음 fit으로 학습해요. epochs는 데이터 전체를 몇 번 반복할지예요.",
        "c": "import numpy as np\nX = np.array([[0, 0], [0, 1], [1, 0], [1, 1]] * 25, dtype='float32')\ny = np.array([0, 0, 0, 1] * 25)\nmodel.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])\nhistory = model.fit(X, y, epochs=3, verbose=0)\nprint(len(history.history['loss']))",
        "o": "3"
      },
      {
        "t": "predict는 확률을 돌려줘요. 0.5보다 크면 1로 바꿔 최종 답을 정해요.",
        "c": "prob = model.predict(X[:2], verbose=0)\nprint(prob.shape, ((prob > 0.5).astype(int) <= 1).all())",
        "o": "(2, 1) True"
      },
      {
        "t": "다음 강의부터 층과 활성화 함수, 학습 설정, 학습 곡선을 하나씩 자세히 볼게요."
      }
    ]
  },
  {
    "id": "m08",
    "g": "딥러닝",
    "title": "딥러닝 1: 층, 뉴런, 활성화 함수",
    "sum": "Dense 층, relu·sigmoid·softmax, 출력층과 손실 함수 짝, 파라미터 수",
    "parts": [
      {
        "t": "신경망은 숫자가 층을 차례로 지나가며 계산되는 구조예요. 입력층(데이터 열들) → 은닉층(중간 계산) → 출력층(답)이에요. Dense는 앞 층의 모든 뉴런과 연결된 층이에요."
      },
      {
        "t": "활성화 함수는 뉴런이 계산한 값을 한 번 더 바꿔 주는 함수예요.\n· relu: 0보다 작으면 0, 크면 그대로. 은닉층에 거의 항상 써요\n· sigmoid: 0~1 사이로. 0/1 분류의 출력층\n· softmax: 여러 출력의 합이 1인 확률로. 다중 분류의 출력층",
        "c": "import numpy as np\nz = np.array([-2.0, 0.0, 3.0])\nprint(np.maximum(0, z).tolist())                 # relu\nprint((1 / (1 + np.exp(-z))).round(2).tolist())  # sigmoid\nprint((np.exp(z) / np.exp(z).sum()).round(2).tolist())  # softmax",
        "o": "[0.0, 0.0, 3.0]\n[0.12, 0.5, 0.95]\n[0.01, 0.05, 0.95]"
      },
      {
        "t": "출력층과 손실 함수는 짝으로 외워요.\n· 0/1 분류: Dense(1, activation='sigmoid') + loss='binary_crossentropy'\n· 여러 클래스 분류: Dense(클래스 수, activation='softmax') + loss='sparse_categorical_crossentropy'(정답이 0, 1, 2 숫자일 때) 또는 'categorical_crossentropy'(정답이 원-핫일 때)\n· 숫자 예측(회귀): Dense(1) + loss='mse'"
      },
      {
        "t": "파라미터는 학습으로 바뀌는 숫자(가중치와 편향)예요. Dense 층 하나의 파라미터 수 = (입력 수 + 1) × 뉴런 수예요. +1은 뉴런마다 하나씩 있는 편향이에요. model.summary()로 확인해요.",
        "c": "from tensorflow.keras import Sequential, Input\nfrom tensorflow.keras.layers import Dense, Dropout\nmodel = Sequential([\n    Input(shape=(4,)),\n    Dense(8, activation='relu'),    # (4 + 1) x 8 = 40\n    Dropout(0.2),                   # 0\n    Dense(1, activation='sigmoid')  # (8 + 1) x 1 = 9\n])\nprint(model.count_params())",
        "o": "49"
      }
    ]
  },
  {
    "id": "m09",
    "g": "딥러닝",
    "title": "딥러닝 2: 학습 설정과 콜백",
    "sum": "compile, epochs와 batch_size, 검증 데이터, Dropout, EarlyStopping, ModelCheckpoint",
    "parts": [
      {
        "t": "compile은 학습 방법을 정하는 단계예요.\n· optimizer: 가중치를 고치는 방법. 보통 'adam'\n· loss: 줄여 나갈 오차(손실 함수)\n· metrics: 학습 중 지켜볼 점수, 예: ['accuracy']"
      },
      {
        "t": "fit의 주요 인자예요.\n· epochs: 데이터 전체를 몇 번 반복해 공부할지\n· batch_size: 한 번에 몇 개씩 보고 가중치를 고칠지 (예: 32)\n· validation_split=0.2 또는 validation_data=(X_val, y_val): 검증 데이터. 에포크마다 val_loss를 계산해요\n· callbacks=[...]: 학습 중에 자동으로 할 일들",
        "c": "import math\nn, batch = 1000, 32\nprint(math.ceil(n / batch))  # 한 에포크에 가중치를 고치는 횟수",
        "o": "32"
      },
      {
        "t": "Dropout(0.2)는 학습할 때 매번 무작위로 20%의 뉴런 출력을 꺼요. 특정 뉴런에만 기대지 않게 해서 과대적합을 줄여요. 학습할 때만 작동하고, 예측(predict·evaluate)할 때는 Dropout이 꺼져서 모든 뉴런을 다 써요."
      },
      {
        "t": "EarlyStopping은 검증 성적이 더 나아지지 않으면 학습을 일찍 멈춰요. patience는 몇 번까지 참을지예요. restore_best_weights=True면 가장 좋았던 때로 되돌려요.\nModelCheckpoint는 가장 좋았던 모델을 파일로 저장해요. 둘 다 fit의 callbacks 리스트로 넘겨야 동작해요. 시험 환경 버전에 따라 파일 이름을 'best_model.h5'처럼 .h5로 쓰기도 해요. 둘 다 모델 저장 파일이에요.",
        "c": "from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint\nes = EarlyStopping(monitor='val_loss', patience=5, restore_best_weights=True)\nmc = ModelCheckpoint('best.keras', monitor='val_loss', save_best_only=True)\nprint(es.patience, mc.save_best_only)",
        "o": "5 True"
      },
      {
        "t": "전체 흐름은 이래요.\nmodel.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])\nhistory = model.fit(X_train, y_train, epochs=100, batch_size=32,\n                    validation_data=(X_test, y_test), callbacks=[es, mc])"
      }
    ]
  },
  {
    "id": "m10",
    "g": "딥러닝",
    "title": "딥러닝 3: 학습 곡선과 예측",
    "sum": "history 읽기, 과대적합·과소적합 판단, predict 결과 바꾸기",
    "parts": [
      {
        "t": "fit이 돌려주는 history의 history 속성은 딕셔너리예요. 에포크마다의 loss, accuracy, 그리고 검증 결과 val_loss, val_accuracy가 리스트로 들어 있어요.",
        "c": "h = {'loss': [0.7, 0.5, 0.4, 0.35, 0.3],\n     'val_loss': [0.72, 0.55, 0.50, 0.53, 0.58]}  # history.history 예시\nprint(h['val_loss'].index(min(h['val_loss'])) + 1)  # 검증 손실이 가장 낮은 에포크",
        "o": "3"
      },
      {
        "t": "그래프로 그려 보면 상태를 알 수 있어요.\nplt.plot(history.history['loss'], label='loss')\nplt.plot(history.history['val_loss'], label='val_loss')\nplt.legend(); plt.show()"
      },
      {
        "t": "읽는 법이에요.\n· 둘 다 함께 내려가며 차이가 작음 → 잘 학습됨\n· loss는 계속 내려가는데 val_loss가 다시 올라감 → 과대적합. 위 예시는 3에포크 뒤부터 과대적합이에요. EarlyStopping, Dropout으로 막아요\n· 둘 다 높은 채로 잘 안 내려감 → 과소적합. 모델을 키우거나 더 오래 학습해요"
      },
      {
        "t": "predict는 확률을 돌려줘요. sigmoid 출력이면 0.5보다 클 때 1, softmax 출력이면 argmax(axis=1)로 가장 큰 확률의 클래스를 골라요.",
        "c": "import numpy as np\nbinary = np.array([[0.9], [0.3]])\nmulti = np.array([[0.1, 0.7, 0.2], [0.6, 0.3, 0.1]])\nprint((binary > 0.5).astype(int).ravel().tolist(), multi.argmax(axis=1).tolist())",
        "o": "[1, 0] [1, 0]"
      },
      {
        "t": "model.evaluate(X_test, y_test)는 compile에서 정한 손실과 점수를 돌려주고, model.save('model.keras')로 모델을 저장해요."
      }
    ]
  },
  {
    "id": "l15",
    "g": "부록",
    "title": "오류 메시지 읽는 법",
    "sum": "자주 보는 오류 4가지와 고치는 법",
    "parts": [
      {
        "t": "코드가 틀리면 빨간 오류 메시지가 나와요. 맨 마지막 줄이 핵심이에요. '오류 이름: 설명' 형태예요."
      },
      {
        "t": "NameError: 없는 이름을 썼어요. 오타이거나, 위 칸을 아직 실행하지 않았거나, import를 빠뜨린 경우예요.",
        "c": "try:\n    print(scoer)\nexcept NameError as e:\n    print(type(e).__name__)",
        "o": "NameError"
      },
      {
        "t": "KeyError: 표에 없는 열 이름을 썼어요. 열 이름 오타이거나, drop에서 axis=1을 빠뜨린 경우가 많아요.",
        "c": "import pandas as pd\ndf = pd.DataFrame({'age': [1, 2]})\ntry:\n    df.drop('age')\nexcept KeyError as e:\n    print(type(e).__name__)",
        "o": "KeyError"
      },
      {
        "t": "ValueError: 값이 맞지 않아요. 글자를 숫자로 바꾸려 하거나, 모델에 글자 열·빈 칸을 그대로 넣은 경우예요.",
        "c": "try:\n    int('abc')\nexcept ValueError as e:\n    print(type(e).__name__)",
        "o": "ValueError"
      },
      {
        "t": "TypeError: 종류가 다른 값끼리 계산했어요. 예를 들어 글자와 숫자를 더하면 나요.",
        "c": "try:\n    '10' + 5\nexcept TypeError as e:\n    print(type(e).__name__)",
        "o": "TypeError"
      },
      {
        "t": "IndentationError는 들여쓰기가 맞지 않을 때 나요. 같은 범위의 줄은 들여쓰기 칸 수를 똑같이 맞춰요."
      }
    ]
  },
  {
    "id": "m11",
    "g": "부록",
    "title": "용어 사전",
    "sum": "시험 문제에 나오는 낯선 단어를 한 줄씩",
    "parts": [
      {
        "t": "· 데이터프레임(DataFrame): 판다스의 표\n· 시리즈(Series): 표의 열 하나\n· 인덱스(index): 행 번호나 이름\n· 결측치(NaN): 빈 칸\n· 이상치: 다른 값들과 동떨어진 값\n· 자료형(dtype): int(정수), float(소수), object·str(글자), bool(참거짓)"
      },
      {
        "t": "· 특성(feature, X): 맞히는 데 쓰는 열들\n· 타깃(target, y, 레이블): 맞히려는 정답 열\n· 분류: 범주를 맞힘 / 회귀: 숫자를 맞힘\n· 학습(fit): 데이터로 규칙을 찾는 일 / 예측(predict): 새 데이터에 답하기\n· 학습 데이터(train) / 검증·테스트 데이터(test)"
      },
      {
        "t": "· 인코딩: 글자를 숫자로 / 원-핫: 범주마다 0·1 열\n· 스케일링(정규화·표준화): 숫자 크기 맞추기\n· 데이터 누수: 검증 데이터 정보가 학습에 섞이는 실수\n· 하이퍼파라미터: 사람이 정하는 설정값 (max_depth, n_estimators, epochs, batch_size)\n· 교차 검증: 데이터를 여러 조각으로 나눠 번갈아 검증"
      },
      {
        "t": "· 과대적합: 학습 데이터만 외워 새 데이터를 못 맞힘\n· 과소적합: 덜 배워 학습 데이터도 못 맞힘\n· 앙상블: 여러 모델을 합침 (랜덤 포레스트, 부스팅)\n· 에포크(epoch): 데이터 전체를 한 번 다 보는 것\n· 배치(batch): 한 번에 보는 데이터 묶음\n· 손실(loss): 모델이 틀린 정도, 줄일수록 좋음\n· 활성화 함수: 뉴런 값을 바꾸는 함수 (relu, sigmoid, softmax)\n· 콜백(callback): 학습 중 자동으로 하는 일 (EarlyStopping 등)"
      }
    ]
  }
];
