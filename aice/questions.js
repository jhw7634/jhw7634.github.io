// AICE Associate 문제은행: 연습, 함정(trap), 실전 모의고사 1·2 (exam: 1 또는 2)
// 필드: id, exam?(실전 회차), trap?(함정 id), unit(대제목), freq(출제빈도 high/mid/low, 추정), subject(1 데이터 분석·전처리, 2 모델링·평가),
//       topic, q, code?(보여 줄 파이썬 코드), options(보기 4개), answer(정답 번호 1~4), exp(해설),
//       why(보기별 풀이 4칸, options와 같은 순서, 정답 칸은 빈 문자열),
//       check?(정답 검증용 파이썬 코드, 앱은 쓰지 않음. python3 check.py로 실행하면 출력이 정답 보기와 같아야 함)
// 저작권: 모든 문제·보기·해설은 새로 작성했습니다. 기출·교재·공식 샘플 문장을 옮겨 오지 않습니다.
window.AICE_UNITS = [
  {
    "id": "load",
    "subject": 1,
    "freq": "high",
    "title": "라이브러리·데이터 불러오기",
    "desc": "import와 별칭, read_csv, shape·info·describe, value_counts, 합치기와 저장"
  },
  {
    "id": "pick",
    "subject": 1,
    "freq": "mid",
    "title": "데이터 선택·가공",
    "desc": "열 선택, 조건 필터, loc·iloc, 정렬, groupby 집계, map·apply, 중복 제거"
  },
  {
    "id": "viz",
    "subject": 1,
    "freq": "high",
    "title": "시각화·상관관계",
    "desc": "countplot·histplot·boxplot·scatterplot, heatmap과 상관계수, 그래프 해석"
  },
  {
    "id": "clean",
    "subject": 1,
    "freq": "high",
    "title": "결측치·이상치·불필요한 열",
    "desc": "isnull, dropna, fillna, drop과 axis, IQR 이상치, 잘못된 값 바꾸기"
  },
  {
    "id": "prep",
    "subject": 1,
    "freq": "high",
    "title": "인코딩·데이터 분리·스케일링",
    "desc": "get_dummies, LabelEncoder, train_test_split과 stratify, StandardScaler·MinMaxScaler"
  },
  {
    "id": "ml",
    "subject": 2,
    "freq": "high",
    "title": "머신러닝 모델",
    "desc": "분류와 회귀, fit·predict, 의사결정나무·랜덤 포레스트·KNN·부스팅, 하이퍼파라미터"
  },
  {
    "id": "eval",
    "subject": 2,
    "freq": "high",
    "title": "모델 성능 평가",
    "desc": "정확도, 오차 행렬, 정밀도·재현율·F1, MAE·MSE·RMSE·R², 과대적합"
  },
  {
    "id": "dl",
    "subject": 2,
    "freq": "high",
    "title": "딥러닝 모델 만들기",
    "desc": "Sequential과 Dense, 출력층과 손실 함수, 파라미터 수, compile·fit, Dropout, 콜백"
  },
  {
    "id": "curve",
    "subject": 2,
    "freq": "mid",
    "title": "학습 곡선·예측",
    "desc": "history, 손실 곡선 해석, predict 결과를 클래스로 바꾸기, evaluate, 모델 저장"
  }
];

window.AICE_QUESTIONS = [
  {
    "id": "clean-01",
    "unit": "clean",
    "freq": "high",
    "subject": 1,
    "topic": "결측치 확인",
    "q": "열마다 결측치가 몇 개인지 세는 코드는?",
    "options": [
      "df.dropna().sum()",
      "df.isnull().count()",
      "df.notnull().sum()",
      "df.isnull().sum()"
    ],
    "answer": 4,
    "exp": "isnull()은 결측이면 True인 표를 만들고, sum()이 True를 1로 더해 열마다 결측 개수가 됩니다. isna()도 같은 함수입니다.",
    "why": [
      "결측 행을 지운 뒤 남은 값을 더한 합계라 결측 개수와 관계없습니다.",
      "count()는 True·False 상관없이 값의 개수를 세서 모든 열에 전체 행 수가 나옵니다.",
      "notnull()은 결측이 아닌 값이 True라, 결측이 아닌 값의 개수가 나옵니다.",
      ""
    ]
  },
  {
    "id": "clean-02",
    "unit": "clean",
    "freq": "high",
    "subject": 1,
    "topic": "결측치 확인",
    "q": "다음 코드의 실행 결과는?",
    "code": "df = pd.DataFrame({'a': [1, None, 3, None],\n                   'b': [None, 2, 3, 4],\n                   'c': ['x', 'y', None, 'z']})\nfor k, v in df.isnull().sum().items():\n    print(k, v)",
    "options": [
      "a 2, b 1, c 0",
      "a 2, b 1, c 1",
      "a 1, b 1, c 1",
      "a 2, b 2, c 1"
    ],
    "answer": 2,
    "exp": "a는 None이 2개, b는 1개, c는 1개입니다. 문자열 열의 None도 결측으로 셉니다.",
    "why": [
      "c 열의 None도 결측치로 셉니다.",
      "",
      "a 열에는 None이 두 번 있습니다.",
      "b 열의 None은 첫 번째 값 하나뿐입니다."
    ],
    "check": {
      "py": "df = pd.DataFrame({'a': [1, None, 3, None], 'b': [None, 2, 3, 4], 'c': ['x', 'y', None, 'z']})\nprint(', '.join(f'{k} {v}' for k, v in df.isnull().sum().items()))"
    }
  },
  {
    "id": "clean-03",
    "unit": "clean",
    "freq": "high",
    "subject": 1,
    "topic": "결측치 삭제",
    "q": "위 데이터(a: 1, NaN, 3, NaN / b: NaN, 2, 3, 4 / c: x, y, NaN, z)에 df.dropna()를 실행하면 남는 행 수는?",
    "code": "df = pd.DataFrame({'a': [1, None, 3, None],\n                   'b': [None, 2, 3, 4],\n                   'c': ['x', 'y', None, 'z']})\nprint(len(df.dropna()))",
    "options": [
      "0",
      "1",
      "2",
      "4"
    ],
    "answer": 1,
    "exp": "dropna()는 기본으로 결측이 하나라도 있는 행(how='any', axis=0)을 지웁니다. 네 행 모두 어딘가에 결측이 있어 0행이 남습니다.",
    "why": [
      "",
      "결측이 없는 행이 하나도 없습니다. 0행째는 b, 1행째는 a, 2행째는 c, 3행째는 a가 결측입니다.",
      "a 열만 기준으로 지우면 2행이 남습니다. 그러려면 dropna(subset=['a'])를 써야 합니다.",
      "dropna()는 결측이 있는 행을 지우므로 행 수가 줄어듭니다."
    ],
    "check": {
      "py": "df = pd.DataFrame({'a': [1, None, 3, None], 'b': [None, 2, 3, 4], 'c': ['x', 'y', None, 'z']})\nprint(len(df.dropna()))"
    }
  },
  {
    "id": "clean-04",
    "unit": "clean",
    "freq": "high",
    "subject": 1,
    "topic": "결측치 삭제",
    "q": "'age' 열이 비어 있는 행만 지우는 코드는?",
    "options": [
      "df = df.drop('age', axis=1)",
      "df = df.dropna(axis=1)",
      "df = df.dropna(subset=['age'])",
      "df = df.dropna(how='all')"
    ],
    "answer": 3,
    "exp": "subset에 열 이름을 주면 그 열에 결측이 있는 행만 지웁니다.",
    "why": [
      "age 열 자체를 지우는 코드입니다.",
      "axis=1이면 행이 아니라 결측이 있는 열 전체를 지웁니다.",
      "",
      "how='all'은 모든 열이 결측인 행만 지웁니다."
    ]
  },
  {
    "id": "clean-05",
    "unit": "clean",
    "freq": "high",
    "subject": 1,
    "topic": "결측치 채우기",
    "q": "'age' 열의 결측치를 age의 평균으로 채우는 코드는?",
    "options": [
      "df['age'] = df['age'].fillna('mean')",
      "df['age'] = df['age'].fillna(df['age'].mean())",
      "df['age'] = df['age'].replace(None, df['age'].mean())",
      "df['age'].fillna(df.mean)"
    ],
    "answer": 2,
    "exp": "fillna(값)은 결측을 그 값으로 채운 새 Series를 돌려줍니다. 평균 대신 중앙값(median)이나 최빈값(mode()[0])으로 채우기도 합니다.",
    "why": [
      "문자열 'mean'이 그대로 들어가 숫자 열에 글자가 섞입니다.",
      "",
      "결측치를 채울 때는 fillna를 씁니다. replace(None, 값)은 결측을 찾는 뜻으로 해석되지 않고 TypeError가 납니다.",
      "df.mean은 괄호가 없어 함수 자체이고, 결과를 다시 대입하지 않아 df도 바뀌지 않습니다."
    ]
  },
  {
    "id": "clean-06",
    "unit": "clean",
    "freq": "high",
    "subject": 1,
    "topic": "결측치 채우기",
    "q": "다음 코드의 실행 결과는?",
    "code": "df = pd.DataFrame({'a': [1, None, 3, None],\n                   'b': [None, 2, 3, 4],\n                   'c': ['x', 'y', None, 'z']})\nprint(df['a'].fillna(df['a'].mean()).tolist())",
    "options": [
      "[1.0, 1.0, 3.0, 3.0]",
      "[1.0, 0.0, 3.0, 0.0]",
      "[1.0, 2.0, 3.0, 2.0]",
      "[1.0, 1.0, 3.0, 1.0]"
    ],
    "answer": 3,
    "exp": "mean()은 결측을 빼고 계산합니다. (1 + 3) ÷ 2 = 2.0이라 두 결측이 2.0으로 채워집니다.",
    "why": [
      "바로 앞 값으로 채우는 ffill()의 결과입니다.",
      "결측을 0으로 채운 결과입니다. fillna(0)일 때입니다.",
      "",
      "평균은 1이 아니라 결측을 뺀 (1 + 3) ÷ 2 = 2입니다."
    ],
    "check": {
      "py": "df = pd.DataFrame({'a': [1, None, 3, None], 'b': [None, 2, 3, 4], 'c': ['x', 'y', None, 'z']})\nprint(df['a'].fillna(df['a'].mean()).tolist())"
    }
  },
  {
    "id": "clean-07",
    "unit": "clean",
    "freq": "mid",
    "subject": 1,
    "topic": "결측치 채우기",
    "q": "범주형 열 'job'의 결측치를 가장 많이 나온 값(최빈값)으로 채우는 코드는?",
    "options": [
      "df['job'] = df['job'].fillna(df['job'].max())",
      "df['job'] = df['job'].fillna(df['job'].mode())",
      "df['job'] = df['job'].fillna(df['job'].mean())",
      "df['job'] = df['job'].fillna(df['job'].mode()[0])"
    ],
    "answer": 4,
    "exp": "mode()는 최빈값을 Series로 돌려줍니다(동률이면 여러 개). 그래서 [0]으로 첫 번째 값을 꺼내 넣습니다.",
    "why": [
      "max()는 사전순으로 가장 뒤의 값이지 가장 많이 나온 값이 아닙니다.",
      "mode()는 Series라 그대로 넣으면 인덱스끼리 맞춰 채워져서, 0번 행 하나만 채워지는 등 원하는 대로 되지 않습니다.",
      "문자열 범주에는 평균을 구할 수 없어 오류가 납니다.",
      ""
    ]
  },
  {
    "id": "clean-08",
    "unit": "clean",
    "freq": "high",
    "subject": 1,
    "topic": "불필요한 열 삭제",
    "q": "분석에 쓰지 않을 'id' 열을 df에서 지우는 코드로 옳은 것은?",
    "options": [
      "df = df.drop('id', axis=1)",
      "df = df.drop('id')",
      "df.drop('id', axis=1)",
      "df = df.drop('id', axis=0)"
    ],
    "answer": 1,
    "exp": "열을 지우려면 axis=1(또는 columns='id')을 줘야 하고, 결과를 df에 다시 대입하거나 inplace=True를 써야 원본이 바뀝니다.",
    "why": [
      "",
      "axis 기본값이 0(행)이라 'id'라는 이름의 행을 찾다가 KeyError가 납니다.",
      "열을 지운 새 데이터프레임을 만들기만 하고 대입하지 않아 df는 그대로입니다.",
      "axis=0은 행 방향이라 'id'라는 행 인덱스를 찾습니다."
    ]
  },
  {
    "id": "clean-09",
    "unit": "clean",
    "freq": "mid",
    "subject": 1,
    "topic": "불필요한 열 삭제",
    "q": "inplace=True에 대한 설명으로 옳은 것은?",
    "options": [
      "inplace=True를 쓰면 원본은 그대로 두고 복사본을 돌려준다",
      "원본을 바로 바꾸고 None을 돌려주므로 df = df.drop(..., inplace=True)라고 쓰면 df가 None이 된다",
      "inplace=True는 drop에서만 쓸 수 있다",
      "inplace=True를 쓰면 실행 속도가 항상 두 배 빨라진다"
    ],
    "answer": 2,
    "exp": "inplace=True는 원본을 직접 바꾸고 반환값은 None입니다. 그래서 대입과 함께 쓰면 안 됩니다. 요즘은 inplace 대신 결과를 대입하는 방식을 권장합니다.",
    "why": [
      "반대입니다. inplace=False(기본값)일 때 원본은 그대로 두고 새 객체를 돌려줍니다.",
      "",
      "fillna, dropna, rename, reset_index 등 여러 메서드에서 쓸 수 있습니다.",
      "속도가 크게 빨라진다는 보장은 없습니다."
    ]
  },
  {
    "id": "clean-10",
    "unit": "clean",
    "freq": "mid",
    "subject": 1,
    "topic": "이상치",
    "q": "IQR 방법으로 이상치를 정할 때 아래쪽 경계는?",
    "options": [
      "Q1 - 1.5 × IQR",
      "Q1 - 3 × 표준편차",
      "중앙값 - 1.5 × IQR",
      "최솟값 - 1.5 × IQR"
    ],
    "answer": 1,
    "exp": "IQR = Q3 - Q1입니다. Q1 - 1.5×IQR보다 작거나 Q3 + 1.5×IQR보다 큰 값을 이상치로 봅니다. boxplot의 수염 끝도 같은 기준입니다.",
    "why": [
      "",
      "표준편차를 쓰는 방법(평균 ± 3σ)과 섞였습니다. IQR 방법은 Q1에서 IQR의 1.5배를 뺍니다.",
      "기준점은 중앙값이 아니라 1사분위수(Q1)입니다.",
      "최솟값보다 작은 값은 데이터에 없으므로 이상치를 찾을 수 없습니다."
    ]
  },
  {
    "id": "clean-11",
    "unit": "clean",
    "freq": "mid",
    "subject": 1,
    "topic": "이상치",
    "q": "다음 코드의 실행 결과는?",
    "code": "s = pd.Series([1, 2, 3, 4, 5, 100])\nq1, q3 = s.quantile(0.25), s.quantile(0.75)\niqr = q3 - q1\nout = s[(s < q1 - 1.5 * iqr) | (s > q3 + 1.5 * iqr)]\nprint(out.tolist())",
    "options": [
      "[2, 3, 4, 5, 100]",
      "[]",
      "[1, 100]",
      "[100]"
    ],
    "answer": 4,
    "exp": "quantile은 기본으로 값 사이를 선형 보간해 Q1 = 2.25, Q3 = 4.75입니다. IQR = 2.5라 위쪽 경계는 4.75 + 3.75 = 8.5, 아래쪽 경계는 2.25 - 3.75 = -1.5이고, 100만 경계를 넘습니다.",
    "why": [
      "경계 밖의 값만 고르는 조건이라 정상 범위의 값은 나오지 않습니다.",
      "100은 위쪽 경계 8.5를 훨씬 넘으므로 이상치입니다.",
      "아래쪽 경계는 2.25 - 3.75 = -1.5라 1은 이상치가 아닙니다.",
      ""
    ],
    "check": {
      "py": "s = pd.Series([1, 2, 3, 4, 5, 100])\nq1, q3 = s.quantile(0.25), s.quantile(0.75)\niqr = q3 - q1\nprint(s[(s < q1 - 1.5 * iqr) | (s > q3 + 1.5 * iqr)].tolist())"
    }
  },
  {
    "id": "clean-12",
    "unit": "clean",
    "freq": "mid",
    "subject": 1,
    "topic": "잘못된 값",
    "q": "'TotalCharge' 열에 숫자 대신 공백 문자 ' '가 섞여 문자열로 읽혔습니다. 공백을 결측치로 바꾸며 숫자로 변환하는 코드는?",
    "options": [
      "df['TotalCharge'] = pd.to_numeric(df['TotalCharge'], errors='raise')",
      "df['TotalCharge'] = df['TotalCharge'].astype(float)",
      "df['TotalCharge'] = pd.to_numeric(df['TotalCharge'], errors='coerce')",
      "df['TotalCharge'] = df['TotalCharge'].fillna(0)"
    ],
    "answer": 3,
    "exp": "to_numeric의 errors='coerce'는 숫자로 바꿀 수 없는 값을 NaN으로 만듭니다. 그다음 fillna나 dropna로 처리합니다.",
    "why": [
      "errors='raise'(기본값)는 바꿀 수 없는 값을 만나면 오류를 냅니다.",
      "공백 ' '는 실수로 바꿀 수 없어 ValueError가 납니다.",
      "",
      "공백 문자는 결측(NaN)이 아니라 문자열이라 fillna가 채우지 않고, 자료형도 그대로 문자열입니다."
    ]
  },
  {
    "id": "clean-13",
    "unit": "clean",
    "freq": "mid",
    "subject": 1,
    "topic": "값 바꾸기",
    "q": "'gender' 열의 오타 'Mael'을 'Male'로 고치는 코드는?",
    "options": [
      "df['gender'].drop('Mael')",
      "df['gender'] = df['gender'].fillna('Male')",
      "df['gender'] = df['gender'].rename('Mael', 'Male')",
      "df['gender'] = df['gender'].replace('Mael', 'Male')"
    ],
    "answer": 4,
    "exp": "replace(이전 값, 새 값)은 일치하는 값을 바꿉니다. 여러 개는 딕셔너리 {'Mael': 'Male', 'Femal': 'Female'}처럼 줄 수 있습니다.",
    "why": [
      "drop은 인덱스 라벨로 행을 지우는 함수라 'Mael'이라는 인덱스를 찾다가 오류가 납니다.",
      "fillna는 결측치만 채웁니다. 'Mael'은 결측이 아닙니다.",
      "rename은 값이 아니라 Series의 이름이나 인덱스를 바꿉니다.",
      ""
    ]
  },
  {
    "id": "curve-01",
    "unit": "curve",
    "freq": "high",
    "subject": 2,
    "topic": "학습 기록",
    "q": "history = model.fit(..., validation_data=(X_val, y_val))로 학습하고 compile에서 metrics=['accuracy']를 줬습니다. history.history에 들어 있는 키가 아닌 것은?",
    "options": [
      "val_loss",
      "loss",
      "test_loss",
      "val_accuracy"
    ],
    "answer": 3,
    "exp": "history.history는 에포크마다의 값을 담은 딕셔너리로, 학습 쪽은 loss·accuracy, 검증 쪽은 앞에 val_이 붙은 val_loss·val_accuracy가 들어 있습니다.",
    "why": [
      "검증 데이터를 줬으므로 검증 손실이 기록됩니다.",
      "학습 데이터의 손실로 항상 들어 있습니다.",
      "",
      "metrics에 accuracy를 넣고 검증 데이터를 줬으므로 기록됩니다."
    ]
  },
  {
    "id": "curve-02",
    "unit": "curve",
    "freq": "high",
    "subject": 2,
    "topic": "학습 곡선",
    "q": "학습 손실과 검증 손실을 한 그래프에 그리는 코드로 옳은 것은?",
    "options": [
      "plt.plot(history.history['loss'], label='train')\nplt.plot(history.history['val_loss'], label='val')\nplt.legend()",
      "plt.plot(history['loss'])\nplt.plot(history['val_loss'])",
      "plt.plot(model.history['loss'], model.history['val_loss'])",
      "sns.countplot(history.history['loss'])"
    ],
    "answer": 1,
    "exp": "fit이 돌려준 History 객체의 history 속성(딕셔너리)에서 키로 꺼내 그립니다. label과 legend로 어떤 선인지 표시합니다.",
    "why": [
      "",
      "History 객체 자체는 딕셔너리가 아니라서 history['loss']처럼 쓸 수 없습니다. history.history['loss']로 꺼냅니다.",
      "model.history도 History 객체라 대괄호로 꺼낼 수 없습니다. 또 plot에 목록 두 개를 한 번에 넣으면 x와 y로 해석되어 두 개의 선이 그려지지 않습니다.",
      "countplot은 범주의 개수를 세는 그래프라 에포크별 손실 변화를 보여 주지 못합니다."
    ]
  },
  {
    "id": "curve-03",
    "unit": "curve",
    "freq": "high",
    "subject": 2,
    "topic": "학습 곡선",
    "q": "학습 손실은 계속 줄어드는데 검증 손실은 10에포크부터 다시 올라갑니다. 알맞은 해석은?",
    "options": [
      "과소적합이라 에포크를 더 늘려야 한다",
      "10에포크 이후 과대적합이 시작되었다",
      "학습이 잘되고 있으니 그대로 둔다",
      "검증 데이터에 결측치가 생겼다"
    ],
    "answer": 2,
    "exp": "학습 데이터에는 점점 더 잘 맞지만 새 데이터에는 나빠지는 것이 과대적합의 신호입니다. EarlyStopping으로 그 무렵 멈추거나 Dropout, 층·뉴런 줄이기로 대처합니다.",
    "why": [
      "과소적합이면 학습 손실도 높게 머뭅니다. 에포크를 늘리면 과대적합이 더 심해집니다.",
      "",
      "검증 성능이 나빠지고 있어 그대로 두면 안 됩니다.",
      "결측치가 있으면 손실이 nan이 되지, 점점 올라가는 모양이 되지는 않습니다."
    ]
  },
  {
    "id": "curve-04",
    "unit": "curve",
    "freq": "high",
    "subject": 2,
    "topic": "예측",
    "q": "sigmoid 출력의 이진 분류 모델에서 model.predict(X_test) 결과를 0/1 클래스로 바꾸는 코드는?",
    "options": [
      "pred = model.predict_classes(X_test, 0.5)",
      "pred = model.predict(X_test).argmax(axis=1)",
      "pred = (model.predict(X_test) > 0.5).astype(int)",
      "pred = round(model.predict(X_test))"
    ],
    "answer": 3,
    "exp": "sigmoid 출력은 클래스 1일 확률이라 0.5보다 크면 1, 아니면 0으로 바꿉니다. 임계값은 상황에 따라 조정할 수 있습니다.",
    "why": [
      "predict_classes는 이전 버전에서 쓰였다가 삭제된 메서드라 지금은 오류가 납니다.",
      "출력 열이 1개라 argmax를 하면 모든 값이 0이 됩니다. argmax는 softmax처럼 클래스마다 열이 있을 때 씁니다.",
      "",
      "파이썬 round는 숫자 하나만 받아 배열에 쓰면 오류가 납니다."
    ]
  },
  {
    "id": "curve-05",
    "unit": "curve",
    "freq": "high",
    "subject": 2,
    "topic": "예측",
    "q": "다음 코드의 실행 결과는?",
    "code": "import numpy as np\nprob = np.array([[0.2, 0.7, 0.1],\n                 [0.6, 0.3, 0.1],\n                 [0.1, 0.1, 0.8]])\nprint(prob.argmax(axis=1).tolist())",
    "options": [
      "[1, 0, 2]",
      "[2, 0, 1]",
      "[0, 1, 2]",
      "[0.7, 0.6, 0.8]"
    ],
    "answer": 1,
    "exp": "softmax 출력은 행마다 클래스별 확률이라 argmax(axis=1)로 가장 큰 확률의 위치(클래스 번호)를 고릅니다.",
    "why": [
      "",
      "가장 작은 값의 위치를 고른 결과에 가깝습니다. argmax는 가장 큰 값의 위치입니다.",
      "행 번호가 아니라 각 행에서 가장 큰 값의 열 번호입니다.",
      "argmax는 최댓값 자체가 아니라 그 위치를 돌려줍니다. 값은 max입니다."
    ],
    "check": {
      "py": "import numpy as np\nprob = np.array([[0.2, 0.7, 0.1], [0.6, 0.3, 0.1], [0.1, 0.1, 0.8]])\nprint(prob.argmax(axis=1).tolist())"
    }
  },
  {
    "id": "curve-06",
    "unit": "curve",
    "freq": "mid",
    "subject": 2,
    "topic": "예측",
    "q": "다음 코드의 실행 결과는?",
    "code": "import numpy as np\np = np.array([0.2, 0.51, 0.5, 0.9])\nprint((p > 0.5).astype(int).tolist())",
    "options": [
      "[0, 1, 1, 1]",
      "[0, 1, 0, 1]",
      "[1, 0, 1, 0]",
      "[0, 0, 0, 1]"
    ],
    "answer": 2,
    "exp": "0.5보다 큰 값만 1이 됩니다. 0.5는 '크다'가 아니라 같으므로 0입니다.",
    "why": [
      "세 번째 값 0.5는 0.5보다 크지 않아서 0입니다.",
      "",
      "조건이 거꾸로 적용되었습니다.",
      "두 번째 값 0.51도 0.5보다 커서 1입니다."
    ],
    "check": {
      "py": "import numpy as np\nprint((np.array([0.2, 0.51, 0.5, 0.9]) > 0.5).astype(int).tolist())"
    }
  },
  {
    "id": "curve-07",
    "unit": "curve",
    "freq": "mid",
    "subject": 2,
    "topic": "평가",
    "q": "케라스 모델을 검증 데이터로 평가해 손실과 정확도를 얻는 코드는?",
    "options": [
      "loss, acc = model.fit(X_test, y_test)",
      "loss, acc = model.predict(X_test, y_test)",
      "loss, acc = model.score(X_test, y_test)",
      "loss, acc = model.evaluate(X_test, y_test)"
    ],
    "answer": 4,
    "exp": "evaluate는 입력과 정답을 받아 compile에서 정한 loss와 metrics 값을 돌려줍니다.",
    "why": [
      "fit은 학습을 하는 함수라 검증 데이터로 실행하면 그 데이터로 학습해 버립니다.",
      "predict는 입력만 받아 예측값을 돌려줍니다.",
      "score는 사이킷런 모델의 메서드라 케라스 모델에는 없습니다.",
      ""
    ]
  },
  {
    "id": "curve-08",
    "unit": "curve",
    "freq": "mid",
    "subject": 2,
    "topic": "학습 곡선",
    "q": "EarlyStopping(monitor='val_loss', patience=3)으로 학습했더니 val_loss가 아래처럼 바뀌다가 멈췄습니다. 몇 에포크까지 학습했나요?",
    "code": "에포크:   1     2     3     4     5     6     7\nval_loss: 0.60  0.50  0.45  0.40  0.42  0.41  0.43",
    "options": [
      "5에포크",
      "4에포크",
      "7에포크",
      "10에포크"
    ],
    "answer": 3,
    "exp": "가장 좋은 val_loss는 4에포크의 0.40입니다. 그 뒤 5, 6, 7에포크 세 번 연속 나아지지 않아 patience=3을 채우고 7에포크에서 멈춥니다.",
    "why": [
      "한 번 나빠졌다고 바로 멈추지 않습니다. patience만큼 기다립니다.",
      "4에포크가 최저점이지만, 멈추는 것은 그 뒤 3번을 더 기다린 다음입니다.",
      "",
      "7에포크에서 이미 멈추므로 10에포크까지 가지 않습니다."
    ],
    "check": {
      "py": "import os; os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'\nfrom tensorflow.keras.callbacks import EarlyStopping\nclass M: stop_training = False\nes = EarlyStopping(monitor='val_loss', patience=3); m = M(); es.set_model(m); es.on_train_begin()\nfor e, v in enumerate([0.60, 0.50, 0.45, 0.40, 0.42, 0.41, 0.43, 0.39, 0.38, 0.37], 1):\n    es.on_epoch_end(e - 1, {'val_loss': v})\n    if m.stop_training: print(f'{e}에포크'); break"
    }
  },
  {
    "id": "curve-09",
    "unit": "curve",
    "freq": "mid",
    "subject": 2,
    "topic": "학습 곡선",
    "q": "학습 손실과 검증 손실이 모두 높은 값에서 거의 줄지 않습니다. 시도해 볼 만한 것은?",
    "options": [
      "학습 데이터를 절반으로 줄인다",
      "Dropout 비율을 더 높인다",
      "EarlyStopping의 patience를 1로 줄인다",
      "층이나 뉴런을 늘리거나 에포크를 늘린다"
    ],
    "answer": 4,
    "exp": "두 손실이 모두 높으면 모델이 데이터의 규칙을 충분히 배우지 못한 과소적합입니다. 모델을 키우거나 더 오래 학습하거나, 학습률·입력 처리를 점검합니다.",
    "why": [
      "데이터가 줄면 배울 거리가 줄어듭니다.",
      "Dropout은 과대적합을 막는 방법이라 과소적합을 더 심하게 만듭니다.",
      "더 일찍 멈추게 되어 학습이 덜 됩니다.",
      ""
    ]
  },
  {
    "id": "curve-10",
    "unit": "curve",
    "freq": "low",
    "subject": 2,
    "topic": "모델 저장",
    "q": "학습한 케라스 모델을 파일로 저장하고 다시 불러오는 코드로 옳은 것은?",
    "options": [
      "model.save('my_model.keras')\nm = load_model('my_model.keras')",
      "joblib.save(model)\nm = joblib.open()",
      "model.to_csv('my_model.csv')\nm = pd.read_csv('my_model.csv')",
      "model.dump('my_model')\nm = model.load('my_model')"
    ],
    "answer": 1,
    "exp": "케라스 모델은 model.save(경로)로 구조와 가중치를 함께 저장하고 tensorflow.keras.models.load_model로 불러옵니다.",
    "why": [
      "",
      "joblib에는 save, open 함수가 없습니다. joblib은 dump·load를 쓰며 주로 사이킷런 모델에 씁니다.",
      "to_csv는 데이터프레임을 표로 저장하는 메서드라 모델에는 없습니다.",
      "케라스 모델에는 dump나 load 메서드가 없습니다."
    ]
  },
  {
    "id": "curve-11",
    "unit": "curve",
    "freq": "low",
    "subject": 2,
    "topic": "학습 곡선",
    "q": "history.history['val_accuracy']가 [0.70, 0.78, 0.81, 0.80]일 때 검증 정확도가 가장 높았던 에포크 번호(1부터 셈)를 구하는 코드는?",
    "options": [
      "max(history.history['val_accuracy'])",
      "np.argmax(history.history['val_accuracy']) + 1",
      "np.argmax(history.history['val_accuracy'])",
      "len(history.history['val_accuracy'])"
    ],
    "answer": 2,
    "exp": "argmax는 0부터 센 위치(2)를 돌려주므로 1을 더해 3에포크가 됩니다.",
    "why": [
      "최고 정확도 값(0.81) 자체입니다.",
      "",
      "0부터 센 위치라 2가 나옵니다. 에포크는 1부터 세므로 1을 더해야 합니다.",
      "기록된 에포크 수(4)입니다."
    ]
  },
  {
    "id": "dl-01",
    "unit": "dl",
    "freq": "high",
    "subject": 2,
    "topic": "모델 만들기",
    "q": "케라스로 층을 순서대로 쌓는 모델을 만드는 코드는?",
    "options": [
      "model = Dense()",
      "model = Sequential()",
      "model = Model.stack()",
      "model = keras.layers()"
    ],
    "answer": 2,
    "exp": "Sequential은 층을 한 줄로 차례차례 쌓는 모델입니다. model.add(Dense(...))로 층을 더하거나 Sequential([층, 층, ...])처럼 리스트로 한 번에 넣습니다.",
    "why": [
      "Dense는 모델이 아니라 모델에 쌓는 완전연결층 하나입니다.",
      "",
      "케라스에 Model.stack이라는 함수는 없습니다.",
      "keras.layers는 층들이 모여 있는 모듈이라 호출할 수 없습니다."
    ]
  },
  {
    "id": "dl-02",
    "unit": "dl",
    "freq": "high",
    "subject": 2,
    "topic": "모델 만들기",
    "q": "입력 변수가 10개인 표 데이터를 받는 첫 Dense 층으로 알맞은 코드는?",
    "options": [
      "Dense(input_shape=(10,))",
      "Dense(10, activation='relu', input_shape=(64,))",
      "Dense(64, activation='relu', input_shape=10)",
      "Dense(64, activation='relu', input_shape=(10,))"
    ],
    "answer": 4,
    "exp": "첫 번째 인자는 이 층의 뉴런(유닛) 수이고, input_shape=(변수 개수,)로 입력 모양을 알려 줍니다. 튜플이라 쉼표가 필요합니다. Input(shape=(10,)) 층을 먼저 넣는 방식도 같으며, Keras 3에서는 이 방식을 권장합니다(input_shape 인자를 쓰면 경고가 나지만 동작합니다).",
    "why": [
      "Dense에는 뉴런 수(units)가 꼭 필요합니다.",
      "뉴런 수와 입력 크기가 바뀌었습니다. 입력 변수가 10개이면 input_shape=(10,)입니다.",
      "input_shape는 정수가 아니라 튜플 (10,)로 줘야 합니다.",
      ""
    ]
  },
  {
    "id": "dl-03",
    "unit": "dl",
    "freq": "high",
    "subject": 2,
    "topic": "출력층",
    "q": "이진 분류(0/1) 모델의 출력층과 손실 함수의 짝으로 옳은 것은?",
    "options": [
      "Dense(1, activation='softmax')와 loss='categorical_crossentropy'",
      "Dense(2, activation='relu')와 loss='mse'",
      "Dense(1, activation='sigmoid')와 loss='binary_crossentropy'",
      "Dense(1)과 loss='binary_crossentropy'"
    ],
    "answer": 3,
    "exp": "이진 분류는 뉴런 1개에 sigmoid로 0~1 확률을 내고, binary_crossentropy로 학습합니다.",
    "why": [
      "뉴런 1개에 softmax를 쓰면 출력이 항상 1이 되어 학습이 되지 않습니다.",
      "relu는 0 이상 아무 값이나 내서 확률이 아니고, mse는 회귀용 손실입니다.",
      "",
      "활성화 함수가 없으면 출력이 0~1 범위를 벗어나 확률로 해석할 수 없습니다."
    ]
  },
  {
    "id": "dl-04",
    "unit": "dl",
    "freq": "high",
    "subject": 2,
    "topic": "출력층",
    "q": "클래스가 3개인 다중 분류에서 y가 0, 1, 2 같은 정수 라벨일 때 알맞은 짝은?",
    "options": [
      "Dense(3, activation='softmax')와 loss='sparse_categorical_crossentropy'",
      "Dense(3, activation='softmax')와 loss='binary_crossentropy'",
      "Dense(1, activation='sigmoid')와 loss='sparse_categorical_crossentropy'",
      "Dense(3, activation='sigmoid')와 loss='mse'"
    ],
    "answer": 1,
    "exp": "다중 분류는 클래스 수만큼 뉴런을 두고 softmax로 확률 합이 1이 되게 합니다. 라벨이 정수면 sparse_categorical_crossentropy, 원-핫이면 categorical_crossentropy를 씁니다.",
    "why": [
      "",
      "binary_crossentropy는 이진 분류용입니다.",
      "뉴런이 1개면 클래스 3개의 확률을 낼 수 없습니다.",
      "mse는 회귀용 손실이고, 다중 분류 확률에는 softmax가 맞습니다."
    ]
  },
  {
    "id": "dl-05",
    "unit": "dl",
    "freq": "high",
    "subject": 2,
    "topic": "출력층",
    "q": "집값처럼 연속된 숫자를 예측하는 회귀 모델의 출력층과 손실 함수로 알맞은 것은?",
    "options": [
      "Dense(1, activation='softmax')와 loss='mae'",
      "Dense(1, activation='sigmoid')와 loss='binary_crossentropy'",
      "Dense(10, activation='softmax')와 loss='mse'",
      "Dense(1)과 loss='mse'"
    ],
    "answer": 4,
    "exp": "회귀는 뉴런 1개에 활성화 함수 없이(linear) 값을 그대로 내고, mse나 mae를 손실로 씁니다.",
    "why": [
      "뉴런 1개에 softmax를 쓰면 출력이 항상 1입니다.",
      "sigmoid는 0~1로 눌러 버려 큰 집값을 표현하지 못하고, 손실도 분류용입니다.",
      "softmax는 여러 클래스의 확률을 내는 분류용 활성화 함수입니다.",
      ""
    ]
  },
  {
    "id": "dl-06",
    "unit": "dl",
    "freq": "high",
    "subject": 2,
    "topic": "파라미터 수",
    "q": "다음 모델의 model.summary()에 나오는 전체 파라미터(Total params) 수는?",
    "code": "model = Sequential([\n    Input(shape=(5,)),\n    Dense(32, activation='relu'),\n    Dense(8, activation='relu'),\n    Dense(1, activation='sigmoid')\n])",
    "options": [
      "465",
      "424",
      "201",
      "46"
    ],
    "answer": 1,
    "exp": "Dense 층의 파라미터 수는 (입력 수 + 1) × 뉴런 수입니다. +1은 뉴런마다 하나씩 있는 편향입니다. (5 + 1) × 32 = 192, (32 + 1) × 8 = 264, (8 + 1) × 1 = 9를 더해 465입니다.",
    "why": [
      "",
      "편향을 빼고 가중치만 센 값(160 + 256 + 8)입니다. 뉴런마다 편향이 하나씩 더 있습니다.",
      "가운데 Dense(8) 층의 264개를 빠뜨렸습니다.",
      "입력과 뉴런의 개수를 더한 값입니다. 파라미터는 연결선(가중치)과 편향의 개수입니다."
    ],
    "check": {
      "py": "import os; os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'\nfrom tensorflow.keras import Sequential, Input\nfrom tensorflow.keras.layers import Dense\nmodel = Sequential([\n    Input(shape=(5,)),\n    Dense(32, activation='relu'),\n    Dense(8, activation='relu'),\n    Dense(1, activation='sigmoid')\n])\nprint(model.count_params())"
    }
  },
  {
    "id": "dl-07",
    "unit": "dl",
    "freq": "high",
    "subject": 2,
    "topic": "컴파일",
    "q": "이진 분류 모델을 컴파일하는 코드로 옳은 것은?",
    "options": [
      "model.fit(optimizer='adam', loss='binary_crossentropy')",
      "model.compile(optimizer='binary_crossentropy', loss='adam', metrics=['accuracy'])",
      "model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])",
      "model.compile(loss='accuracy', metrics=['adam'])"
    ],
    "answer": 3,
    "exp": "compile에서 optimizer(가중치를 고치는 방법), loss(줄일 손실), metrics(지켜볼 지표)를 정합니다.",
    "why": [
      "fit은 학습을 실행하는 함수라 이런 인자를 받지 않습니다. 설정은 compile에서 합니다.",
      "optimizer와 loss 자리가 바뀌었습니다.",
      "",
      "accuracy는 손실 함수가 아니라 지표이고, adam은 지표가 아니라 옵티마이저입니다."
    ]
  },
  {
    "id": "dl-08",
    "unit": "dl",
    "freq": "high",
    "subject": 2,
    "topic": "학습",
    "q": "다음 학습 코드에 대한 설명으로 옳은 것은?",
    "code": "model.fit(X_train, y_train, epochs=50, batch_size=32,\n          validation_split=0.2)",
    "options": [
      "전체 데이터를 20번 반복 학습한다",
      "학습 데이터의 20%를 검증용으로 떼어 매 에포크 끝에 val_loss를 계산한다",
      "한 번에 50%의 데이터를 학습한다",
      "검증 데이터로도 가중치를 학습한다"
    ],
    "answer": 2,
    "exp": "validation_split=0.2는 학습 데이터 끝쪽 20%를 검증용으로 떼어 놓고, 에포크마다 val_loss·val_accuracy를 계산합니다. epochs=50은 50번 반복, batch_size=32는 한 번에 32개씩입니다.",
    "why": [
      "20은 반복 횟수가 아닙니다. 반복 횟수는 epochs=50입니다.",
      "",
      "batch_size=32는 한 번에 32개 샘플씩 가중치를 고친다는 뜻입니다.",
      "검증 데이터는 평가만 하고 가중치 학습에는 쓰지 않습니다."
    ]
  },
  {
    "id": "dl-09",
    "unit": "dl",
    "freq": "high",
    "subject": 2,
    "topic": "학습",
    "q": "학습 샘플이 1,000개이고 batch_size=100, epochs=10일 때 가중치는 모두 몇 번 갱신되나요?",
    "options": [
      "10번",
      "100번",
      "1,000번",
      "10,000번"
    ],
    "answer": 2,
    "exp": "에포크마다 1,000 ÷ 100 = 10번 갱신하고, 10에포크면 10 × 10 = 100번입니다.",
    "why": [
      "한 에포크의 갱신 횟수(10번)이거나 에포크 수입니다. 에포크마다 10번씩 갱신됩니다.",
      "",
      "샘플 하나마다 갱신하는 경우입니다. 배치 단위로 묶어 갱신합니다.",
      "샘플 수 × 에포크 수입니다. 배치 100개를 한 번에 처리합니다."
    ]
  },
  {
    "id": "dl-10",
    "unit": "dl",
    "freq": "high",
    "subject": 2,
    "topic": "Dropout",
    "q": "Dense 층 사이에 Dropout(0.3)을 넣었을 때의 동작으로 옳은 것은?",
    "options": [
      "학습 데이터의 30%를 버린다",
      "학습과 예측 모두에서 뉴런의 30%를 영구히 삭제한다",
      "학습할 때 매 단계 무작위로 30%의 뉴런 출력을 0으로 만들어 과대적합을 줄인다",
      "학습률을 30% 줄인다"
    ],
    "answer": 3,
    "exp": "Dropout은 학습 중에만 무작위 뉴런을 꺼서 특정 뉴런에 의존하지 않게 만듭니다. 예측(추론)할 때는 모든 뉴런을 씁니다. 0.3은 끄는 비율입니다.",
    "why": [
      "데이터가 아니라 뉴런 출력을 끕니다.",
      "예측할 때는 Dropout이 동작하지 않고, 뉴런을 영구히 지우지도 않습니다.",
      "",
      "학습률은 옵티마이저의 learning_rate로 정합니다."
    ]
  },
  {
    "id": "dl-11",
    "unit": "dl",
    "freq": "high",
    "subject": 2,
    "topic": "콜백",
    "q": "검증 손실이 5에포크 동안 좋아지지 않으면 학습을 멈추고 가장 좋았던 가중치로 되돌리는 코드는?",
    "options": [
      "EarlyStopping(monitor='val_loss', patience=5, restore_best_weights=True)",
      "EarlyStopping(monitor='loss', patience=5)",
      "ModelCheckpoint(monitor='val_loss', patience=5)",
      "EarlyStopping(monitor='val_loss', epochs=5)"
    ],
    "answer": 1,
    "exp": "EarlyStopping은 monitor 값이 patience 에포크 동안 나아지지 않으면 멈춥니다. restore_best_weights=True면 가장 좋았던 시점의 가중치로 돌아갑니다. fit의 callbacks=[es]로 넘깁니다.",
    "why": [
      "",
      "학습 손실(loss)은 계속 줄어드는 경향이라 과대적합을 잡지 못하고, 가중치도 되돌리지 않습니다.",
      "ModelCheckpoint는 모델을 파일로 저장하는 콜백이라 patience 인자가 없고 학습을 멈추지 않습니다.",
      "기다릴 에포크 수 인자는 epochs가 아니라 patience입니다."
    ]
  },
  {
    "id": "dl-12",
    "unit": "dl",
    "freq": "mid",
    "subject": 2,
    "topic": "콜백",
    "q": "검증 손실이 가장 낮았던 모델만 파일로 저장하는 콜백 코드는?",
    "options": [
      "model.save('best.keras', monitor='val_loss')",
      "ModelCheckpoint('best.keras', monitor='val_loss', patience=3)",
      "EarlyStopping('best.keras', save_best_only=True)",
      "ModelCheckpoint('best.keras', monitor='val_loss', save_best_only=True)"
    ],
    "answer": 4,
    "exp": "ModelCheckpoint는 에포크마다 monitor 값을 보고 save_best_only=True면 최고 기록이 나올 때만 저장합니다.",
    "why": [
      "model.save는 지금의 모델을 한 번 저장할 뿐 monitor 인자가 없습니다.",
      "patience는 EarlyStopping의 인자입니다.",
      "EarlyStopping은 저장 기능이 없고 파일 경로를 받지 않습니다.",
      ""
    ]
  },
  {
    "id": "dl-13",
    "unit": "dl",
    "freq": "mid",
    "subject": 2,
    "topic": "활성화 함수",
    "q": "은닉층에 가장 많이 쓰는 활성화 함수로, 0보다 작으면 0, 크면 그대로 내보내는 함수는?",
    "options": [
      "sigmoid",
      "relu",
      "softmax",
      "linear"
    ],
    "answer": 2,
    "exp": "ReLU는 max(0, x)로 계산이 빠르고 기울기 소실이 적어 은닉층의 기본으로 씁니다.",
    "why": [
      "sigmoid는 0~1로 누르는 함수로 주로 이진 분류 출력층에 씁니다.",
      "",
      "softmax는 여러 출력을 합이 1인 확률로 바꾸는 다중 분류 출력층용입니다.",
      "linear는 입력을 그대로 내보내 주로 회귀 출력층에 씁니다."
    ]
  },
  {
    "id": "dl-14",
    "unit": "dl",
    "freq": "mid",
    "subject": 2,
    "topic": "옵티마이저",
    "q": "Adam 옵티마이저의 학습률을 0.001로 지정해 컴파일하는 코드는?",
    "options": [
      "model.fit(X, y, optimizer=Adam(0.001))",
      "model.compile(optimizer='adam(0.001)', loss='mse')",
      "model.compile(optimizer='adam', lr=0.001, loss='mse')",
      "model.compile(optimizer=Adam(learning_rate=0.001), loss='mse')"
    ],
    "answer": 4,
    "exp": "학습률을 바꾸려면 문자열 대신 Adam 객체를 만들어 learning_rate를 줍니다. 'adam' 문자열을 쓰면 기본 학습률(0.001)이 쓰입니다.",
    "why": [
      "옵티마이저는 fit이 아니라 compile에서 정합니다.",
      "문자열 안에 괄호를 쓰면 그런 이름의 옵티마이저를 찾지 못해 오류가 납니다.",
      "compile에는 lr 인자가 없습니다.",
      ""
    ]
  },
  {
    "id": "dl-15",
    "unit": "dl",
    "freq": "mid",
    "subject": 2,
    "topic": "딥러닝 입력",
    "q": "딥러닝 모델에 표 데이터를 넣기 전 처리로 가장 거리가 먼 것은?",
    "options": [
      "범주형 열을 원-핫 인코딩한다",
      "결측치를 처리한다",
      "숫자 열을 모두 문자열로 바꾼다",
      "숫자 열을 스케일링한다"
    ],
    "answer": 3,
    "exp": "신경망은 숫자 텐서만 받으므로 결측 처리, 범주 인코딩, 스케일링을 거쳐 숫자 입력을 만듭니다.",
    "why": [
      "문자열 범주를 숫자 열로 바꿔야 입력할 수 있습니다.",
      "결측치(NaN)가 있으면 손실이 nan이 되어 학습이 망가집니다.",
      "",
      "값의 범위가 제각각이면 학습이 불안정해서 스케일링이 도움이 됩니다."
    ]
  },
  {
    "id": "dl-16",
    "unit": "dl",
    "freq": "low",
    "subject": 2,
    "topic": "모델 확인",
    "q": "만든 모델의 층 구성, 출력 모양, 파라미터 수를 표로 보여 주는 코드는?",
    "options": [
      "model.summary()",
      "model.info()",
      "model.describe()",
      "print(model.layers)"
    ],
    "answer": 1,
    "exp": "summary()는 층마다 Output Shape와 Param #을, 마지막에 전체 파라미터 수를 보여 줍니다.",
    "why": [
      "",
      "info()는 판다스 데이터프레임의 메서드입니다.",
      "describe()는 판다스의 기술 통계 메서드입니다.",
      "층 객체 목록만 출력되어 모양과 파라미터 수가 보이지 않습니다."
    ]
  },
  {
    "id": "eval-01",
    "unit": "eval",
    "freq": "high",
    "subject": 2,
    "topic": "정확도",
    "q": "다음 코드의 실행 결과는?",
    "code": "from sklearn.metrics import *\ny_true = [1, 0, 1, 1, 0, 1, 0, 0]\ny_pred = [1, 0, 0, 1, 1, 1, 0, 0]\nprint(accuracy_score(y_true, y_pred))",
    "options": [
      "0.875",
      "0.5",
      "0.625",
      "0.75"
    ],
    "answer": 4,
    "exp": "8개 중 6개를 맞혔으므로 정확도는 6 ÷ 8 = 0.75입니다.",
    "why": [
      "7개를 맞힌 경우의 값입니다.",
      "4개만 맞힌 경우의 값입니다. 다시 세어 보면 3번째와 5번째 두 개만 틀렸습니다.",
      "5개를 맞힌 경우의 값입니다.",
      ""
    ],
    "check": {
      "py": "from sklearn.metrics import *\ny_true = [1, 0, 1, 1, 0, 1, 0, 0]\ny_pred = [1, 0, 0, 1, 1, 1, 0, 0]\nprint(accuracy_score(y_true, y_pred))"
    }
  },
  {
    "id": "eval-02",
    "unit": "eval",
    "freq": "high",
    "subject": 2,
    "topic": "오차 행렬",
    "q": "다음 코드의 실행 결과는?",
    "code": "from sklearn.metrics import *\ny_true = [1, 0, 1, 1, 0, 1, 0, 0]\ny_pred = [1, 0, 0, 1, 1, 1, 0, 0]\nprint(confusion_matrix(y_true, y_pred).tolist())",
    "options": [
      "[[3, 1], [1, 3]]",
      "[[3, 1], [3, 1]]",
      "[[1, 3], [3, 1]]",
      "[[4, 0], [0, 4]]"
    ],
    "answer": 1,
    "exp": "sklearn의 confusion_matrix는 행이 실제값, 열이 예측값이고 0, 1 순서입니다. [[TN, FP], [FN, TP]] = [[3, 1], [1, 3]]입니다.",
    "why": [
      "",
      "두 번째 행은 실제 1인 4개 중 0으로 예측한 것 1개, 1로 예측한 것 3개입니다.",
      "대각선이 맞힌 개수입니다. 6개를 맞혔으니 대각선의 합이 6이어야 합니다.",
      "모두 맞힌 경우의 오차 행렬입니다. 2개를 틀렸습니다."
    ],
    "check": {
      "py": "from sklearn.metrics import *\ny_true = [1, 0, 1, 1, 0, 1, 0, 0]\ny_pred = [1, 0, 0, 1, 1, 1, 0, 0]\nprint(confusion_matrix(y_true, y_pred).tolist())"
    }
  },
  {
    "id": "eval-03",
    "unit": "eval",
    "freq": "high",
    "subject": 2,
    "topic": "정밀도와 재현율",
    "q": "정밀도(precision)의 정의는?",
    "options": [
      "실제 양성 중 양성으로 맞힌 비율, TP / (TP + FN)",
      "양성으로 예측한 것 중 실제 양성의 비율, TP / (TP + FP)",
      "전체 중 맞힌 비율, (TP + TN) / 전체",
      "실제 음성 중 음성으로 맞힌 비율, TN / (TN + FP)"
    ],
    "answer": 2,
    "exp": "정밀도는 모델이 양성이라고 한 것이 얼마나 정확한지(예측 기준), 재현율은 실제 양성을 얼마나 놓치지 않았는지(실제 기준)입니다.",
    "why": [
      "재현율(recall, 민감도)의 정의입니다.",
      "",
      "정확도(accuracy)의 정의입니다.",
      "특이도(specificity)의 정의입니다."
    ]
  },
  {
    "id": "eval-04",
    "unit": "eval",
    "freq": "high",
    "subject": 2,
    "topic": "정밀도와 재현율",
    "q": "암 진단처럼 실제 환자를 놓치면 큰일 나는 문제에서 특히 높여야 하는 지표는?",
    "options": [
      "특이도(specificity)",
      "정밀도(precision)",
      "재현율(recall)",
      "결정계수(R²)"
    ],
    "answer": 3,
    "exp": "실제 양성(환자)을 음성으로 놓치는 FN을 줄여야 하므로 TP / (TP + FN)인 재현율이 중요합니다.",
    "why": [
      "특이도는 실제 음성을 음성으로 맞히는 비율이라 환자를 놓치는 것과 관계가 적습니다.",
      "정밀도는 양성이라고 한 것이 틀리는 FP를 줄일 때 중요합니다. 스팸 메일 분류처럼 정상 메일을 스팸으로 막으면 곤란한 경우입니다.",
      "",
      "R²는 회귀 모델의 지표입니다."
    ]
  },
  {
    "id": "eval-05",
    "unit": "eval",
    "freq": "high",
    "subject": 2,
    "topic": "정밀도와 재현율",
    "q": "다음 코드의 실행 결과는?",
    "code": "from sklearn.metrics import *\ny_true = [1, 0, 1, 1, 0, 1, 0, 0]\ny_pred = [1, 0, 0, 1, 1, 1, 0, 0]\nprint(precision_score(y_true, y_pred), recall_score(y_true, y_pred))",
    "options": [
      "1.0 0.75",
      "0.75 0.6",
      "0.6 0.75",
      "0.75 0.75"
    ],
    "answer": 4,
    "exp": "1로 예측한 4개 중 실제 1은 3개라 정밀도 3/4 = 0.75, 실제 1인 4개 중 맞힌 것은 3개라 재현율 3/4 = 0.75입니다.",
    "why": [
      "1로 예측한 것 중 하나(5번째)는 실제 0이라 정밀도가 1.0이 아닙니다.",
      "재현율을 다시 세어 보면 실제 1인 4개 중 3개를 맞혀 0.75입니다.",
      "정밀도는 1로 예측한 4개 중 3개가 맞아 0.75입니다.",
      ""
    ],
    "check": {
      "py": "from sklearn.metrics import *\ny_true = [1, 0, 1, 1, 0, 1, 0, 0]\ny_pred = [1, 0, 0, 1, 1, 1, 0, 0]\nprint(precision_score(y_true, y_pred), recall_score(y_true, y_pred))"
    }
  },
  {
    "id": "eval-06",
    "unit": "eval",
    "freq": "high",
    "subject": 2,
    "topic": "F1 점수",
    "q": "F1 점수에 대한 설명으로 옳은 것은?",
    "options": [
      "정확도와 재현율의 산술평균이다",
      "정밀도와 재현율의 조화평균이다",
      "값이 작을수록 좋은 모델이다",
      "회귀 모델의 오차를 나타낸다"
    ],
    "answer": 2,
    "exp": "F1 = 2 × 정밀도 × 재현율 / (정밀도 + 재현율)입니다. 둘 중 하나라도 낮으면 F1도 낮아져 불균형 데이터 평가에 자주 씁니다.",
    "why": [
      "정확도가 아니라 정밀도와 재현율을 쓰고, 산술평균이 아니라 조화평균입니다.",
      "",
      "0~1 사이 값이며 클수록 좋습니다.",
      "분류 모델의 지표입니다. 회귀 오차는 MAE, MSE 같은 지표로 봅니다."
    ]
  },
  {
    "id": "eval-07",
    "unit": "eval",
    "freq": "mid",
    "subject": 2,
    "topic": "분류 리포트",
    "q": "클래스별 정밀도, 재현율, F1, 샘플 수(support)를 표로 한 번에 보여 주는 함수는?",
    "options": [
      "accuracy_score(y_test, pred)",
      "confusion_matrix(y_test, pred)",
      "classification_report(y_test, pred)",
      "mean_squared_error(y_test, pred)"
    ],
    "answer": 3,
    "exp": "classification_report는 클래스마다 precision, recall, f1-score, support와 전체 accuracy, 평균값을 문자열 표로 보여 줍니다.",
    "why": [
      "정확도 숫자 하나만 돌려줍니다.",
      "오차 행렬은 맞고 틀린 개수만 보여 줍니다.",
      "",
      "회귀 지표인 평균제곱오차입니다."
    ]
  },
  {
    "id": "eval-08",
    "unit": "eval",
    "freq": "high",
    "subject": 2,
    "topic": "회귀 지표",
    "q": "다음 코드의 실행 결과는?",
    "code": "from sklearn.metrics import mean_absolute_error, mean_squared_error\ny_true = [2, 4, 6, 8]\ny_pred = [3, 3, 9, 5]\nprint(mean_absolute_error(y_true, y_pred), mean_squared_error(y_true, y_pred))",
    "options": [
      "2.0 5.0",
      "5.0 2.0",
      "2.0 2.24",
      "0.0 5.0"
    ],
    "answer": 1,
    "exp": "오차는 1, -1, 3, -3입니다. MAE는 절댓값의 평균 (1 + 1 + 3 + 3) ÷ 4 = 2.0, MSE는 제곱의 평균 (1 + 1 + 9 + 9) ÷ 4 = 5.0입니다.",
    "why": [
      "",
      "MAE와 MSE의 순서가 바뀌었습니다. 코드는 MAE를 먼저 출력합니다.",
      "2.24는 MSE의 제곱근인 RMSE입니다. mean_squared_error는 제곱근을 씌우지 않습니다.",
      "오차를 절댓값 없이 그냥 평균 내면 양수와 음수가 상쇄되어 0이 됩니다. MAE는 절댓값을 씌워 평균 냅니다."
    ],
    "check": {
      "py": "from sklearn.metrics import mean_absolute_error, mean_squared_error\ny_true = [2, 4, 6, 8]\ny_pred = [3, 3, 9, 5]\nprint(mean_absolute_error(y_true, y_pred), mean_squared_error(y_true, y_pred))"
    }
  },
  {
    "id": "eval-09",
    "unit": "eval",
    "freq": "high",
    "subject": 2,
    "topic": "회귀 지표",
    "q": "RMSE를 구하는 코드로 옳은 것은?",
    "options": [
      "mean_absolute_error(y_test, pred) / len(y_test)",
      "mean_squared_error(y_test, pred) ** 2",
      "np.sqrt(mean_absolute_error(y_test, pred))",
      "np.sqrt(mean_squared_error(y_test, pred))"
    ],
    "answer": 4,
    "exp": "RMSE는 MSE에 제곱근을 씌운 값이라 원래 타깃과 같은 단위로 오차를 읽을 수 있습니다. 사이킷런 1.4 이상에는 root_mean_squared_error 함수도 있습니다.",
    "why": [
      "MAE는 이미 평균이라 다시 나누면 의미 없는 값이 됩니다.",
      "제곱근이 아니라 제곱을 한 번 더 했습니다.",
      "MAE에 제곱근을 씌운 값은 RMSE가 아닙니다.",
      ""
    ]
  },
  {
    "id": "eval-10",
    "unit": "eval",
    "freq": "high",
    "subject": 2,
    "topic": "회귀 지표",
    "q": "결정계수 R²에 대한 설명으로 옳은 것은?",
    "options": [
      "항상 0 이상이다",
      "작을수록 좋은 지표다",
      "1에 가까울수록 모델이 타깃의 변동을 잘 설명한다",
      "분류 모델의 정확도와 같은 값이다"
    ],
    "answer": 3,
    "exp": "R² = 1 - (모델 오차 제곱합 / 평균으로 예측했을 때의 오차 제곱합)입니다. 1이면 완벽하고, 평균으로만 찍는 것보다 못하면 음수가 될 수도 있습니다.",
    "why": [
      "평균으로 예측하는 것보다 못한 모델이면 음수가 나옵니다.",
      "오차 지표(MAE, MSE)는 작을수록 좋지만 R²는 클수록 좋습니다.",
      "",
      "R²는 회귀 모델의 지표이고 r2_score로 구합니다."
    ]
  },
  {
    "id": "eval-11",
    "unit": "eval",
    "freq": "mid",
    "subject": 2,
    "topic": "과대적합",
    "q": "학습 데이터 정확도는 0.99인데 검증 데이터 정확도는 0.70입니다. 가장 알맞은 해석과 대처는?",
    "options": [
      "과대적합이므로 max_depth를 줄이는 등 모델을 단순하게 만든다",
      "과소적합이므로 트리를 더 깊게 만든다",
      "좋은 모델이므로 그대로 쓴다",
      "검증 데이터를 학습 데이터에 합쳐 다시 평가한다"
    ],
    "answer": 1,
    "exp": "학습 데이터만 외워 새 데이터에서 성능이 떨어지는 과대적합입니다. 모델 복잡도를 낮추거나(깊이 제한, 규제), 데이터를 늘리거나, 딥러닝이면 Dropout·EarlyStopping을 씁니다.",
    "why": [
      "",
      "과소적합은 학습 데이터 성능부터 낮은 경우입니다. 트리를 더 깊게 하면 과대적합이 더 심해집니다.",
      "검증 성능이 훨씬 낮아 새 데이터에서 잘 맞히지 못하는 모델입니다.",
      "검증 데이터로 학습하면 평가할 데이터가 사라져 성능을 제대로 알 수 없습니다(데이터 누수)."
    ]
  },
  {
    "id": "eval-12",
    "unit": "eval",
    "freq": "mid",
    "subject": 2,
    "topic": "모델 점수",
    "q": "사이킷런 분류 모델의 model.score(X_test, y_test)가 돌려주는 값은?",
    "options": [
      "F1 점수",
      "정확도(accuracy)",
      "재현율",
      "R²"
    ],
    "answer": 2,
    "exp": "분류 모델(Classifier)의 score는 정확도, 회귀 모델(Regressor)의 score는 R²를 돌려줍니다.",
    "why": [
      "F1은 f1_score로 따로 구해야 합니다.",
      "",
      "재현율은 recall_score로 따로 구합니다.",
      "R²는 회귀 모델의 score가 돌려주는 값입니다."
    ]
  },
  {
    "id": "eval-13",
    "unit": "eval",
    "freq": "mid",
    "subject": 2,
    "topic": "ROC AUC",
    "q": "ROC 곡선 아래 면적(AUC)에 대한 설명으로 옳은 것은?",
    "options": [
      "0에 가까울수록 좋은 모델이다",
      "1에 가까울수록 양성과 음성을 잘 구분하고, 0.5는 무작위 수준이다",
      "회귀 모델의 오차를 나타낸다",
      "predict로 얻은 0/1 값만으로 계산하는 것이 가장 정확하다"
    ],
    "answer": 2,
    "exp": "AUC는 임계값을 바꿔 가며 그린 ROC 곡선의 아래 면적입니다. roc_auc_score(y_test, model.predict_proba(X_test)[:, 1])처럼 확률을 넣어 구하는 것이 일반적입니다.",
    "why": [
      "0.5보다 작으면 무작위보다 못한 것이라 좋은 모델이 아닙니다.",
      "",
      "분류 모델의 지표입니다.",
      "0/1 예측만 넣으면 임계값이 하나뿐이라 곡선의 정보가 대부분 사라집니다. 확률을 넣습니다."
    ]
  },
  {
    "id": "load-01",
    "unit": "load",
    "freq": "high",
    "subject": 1,
    "topic": "라이브러리 불러오기",
    "q": "판다스를 관례대로 pd라는 이름으로 불러오는 코드는?",
    "options": [
      "include pandas as pd",
      "import pd as pandas",
      "from pandas import pd",
      "import pandas as pd"
    ],
    "answer": 4,
    "exp": "import 모듈 as 별칭 형태로 씁니다. 판다스는 pd, 넘파이는 np, 시본은 sns, 맷플롯립의 pyplot은 plt가 관례입니다.",
    "why": [
      "include는 파이썬 문법이 아닙니다. 파이썬은 import로 모듈을 불러옵니다.",
      "순서가 뒤바뀌었습니다. import 다음에는 실제 모듈 이름(pandas), as 다음에 별칭(pd)이 옵니다.",
      "pandas 안에 pd라는 이름의 객체는 없습니다. from 모듈 import 이름은 모듈 안의 함수나 클래스를 가져올 때 씁니다.",
      ""
    ]
  },
  {
    "id": "load-02",
    "unit": "load",
    "freq": "high",
    "subject": 1,
    "topic": "라이브러리 불러오기",
    "q": "시각화에 쓰는 matplotlib의 pyplot 모듈을 plt로 불러오는 코드는?",
    "options": [
      "import matplotlib.pyplot as plt",
      "import matplotlib as plt",
      "import pyplot as plt",
      "from matplotlib import plt"
    ],
    "answer": 1,
    "exp": "pyplot은 matplotlib 패키지 안의 모듈이라 matplotlib.pyplot으로 지정합니다. from matplotlib import pyplot as plt도 같은 뜻입니다.",
    "why": [
      "",
      "matplotlib 패키지 전체를 plt로 부르게 되어 plt.plot 같은 그리기 함수를 바로 쓸 수 없습니다.",
      "pyplot은 독립 패키지가 아니라 matplotlib 안에 있어서 이렇게는 찾지 못하고 오류가 납니다.",
      "matplotlib 안에 plt라는 이름은 없습니다. plt는 우리가 붙이는 별칭일 뿐입니다."
    ]
  },
  {
    "id": "load-03",
    "unit": "load",
    "freq": "high",
    "subject": 1,
    "topic": "CSV 불러오기",
    "q": "작업 폴더의 data.csv 파일을 데이터프레임 df로 읽어 오는 코드는?",
    "options": [
      "df = pd.DataFrame('data.csv')",
      "df = pd.load_csv('data.csv')",
      "df = pd.read_csv('data.csv')",
      "df = pd.read_excel('data.csv')"
    ],
    "answer": 3,
    "exp": "CSV 파일은 pd.read_csv(경로)로 읽습니다. 결과는 DataFrame입니다.",
    "why": [
      "DataFrame에 파일 이름 문자열을 넣으면 파일을 읽지 않습니다. 파일은 read_ 계열 함수로 읽습니다.",
      "판다스에 load_csv라는 함수는 없습니다.",
      "",
      "read_excel은 .xlsx 같은 엑셀 파일을 읽는 함수라 CSV에는 맞지 않습니다."
    ]
  },
  {
    "id": "load-04",
    "unit": "load",
    "freq": "mid",
    "subject": 1,
    "topic": "CSV 불러오기",
    "q": "한글이 들어간 CSV를 read_csv로 읽었더니 UnicodeDecodeError가 났습니다. 윈도우 엑셀에서 저장한 파일일 때 가장 먼저 시도할 코드는?",
    "options": [
      "pd.read_csv('data.csv', sep='cp949')",
      "pd.read_csv('data.csv', encoding='cp949')",
      "pd.read_csv('data.csv', header='cp949')",
      "pd.read_csv('data.csv', index_col='cp949')"
    ],
    "answer": 2,
    "exp": "글자 인코딩이 맞지 않을 때 나는 오류라 encoding 인자를 바꿉니다. 윈도우에서 만든 한글 파일은 cp949(또는 euc-kr)인 경우가 많습니다.",
    "why": [
      "sep은 칸을 나누는 구분자(쉼표, 탭 등)를 정하는 인자라 인코딩 오류와 관계없습니다.",
      "",
      "header는 몇 번째 줄을 열 이름으로 쓸지 정하는 인자입니다.",
      "index_col은 어떤 열을 행 인덱스로 쓸지 정하는 인자입니다."
    ]
  },
  {
    "id": "load-05",
    "unit": "load",
    "freq": "high",
    "subject": 1,
    "topic": "데이터 훑어보기",
    "q": "다음 코드의 실행 결과는?",
    "code": "df = pd.DataFrame({'a': [1, 2, 3, 4],\n                   'b': [5, 6, 7, 8],\n                   'c': [9, 10, 11, 12]})\nprint(df.shape)",
    "options": [
      "4",
      "(3, 4)",
      "12",
      "(4, 3)"
    ],
    "answer": 4,
    "exp": "shape는 (행 수, 열 수) 튜플입니다. 행 4개, 열 3개이므로 (4, 3)입니다.",
    "why": [
      "행 수만 구하는 것은 len(df)입니다.",
      "순서가 바뀌었습니다. shape는 행 수가 먼저, 열 수가 나중입니다.",
      "전체 칸 수(4×3)는 df.size입니다.",
      ""
    ],
    "check": {
      "py": "df = pd.DataFrame({'a': [1, 2, 3, 4], 'b': [5, 6, 7, 8], 'c': [9, 10, 11, 12]})\nprint(df.shape)"
    }
  },
  {
    "id": "load-06",
    "unit": "load",
    "freq": "high",
    "subject": 1,
    "topic": "데이터 훑어보기",
    "q": "데이터프레임의 열마다 결측이 아닌 값의 개수와 자료형(dtype)을 한 번에 확인하는 함수는?",
    "options": [
      "df.head()",
      "df.describe()",
      "df.info()",
      "df.shape"
    ],
    "answer": 3,
    "exp": "info()는 행 수, 열 이름, 열마다 Non-Null Count와 Dtype, 메모리 사용량을 보여 줍니다.",
    "why": [
      "head()는 앞쪽 몇 행의 실제 값을 보여 줄 뿐입니다.",
      "describe()는 숫자 열의 개수·평균·표준편차·사분위수 같은 기술 통계를 보여 줍니다. 자료형은 나오지 않습니다.",
      "",
      "shape는 (행 수, 열 수)만 알려 줍니다."
    ]
  },
  {
    "id": "load-07",
    "unit": "load",
    "freq": "high",
    "subject": 1,
    "topic": "데이터 훑어보기",
    "q": "df.describe()의 결과에서 50% 행이 뜻하는 값은?",
    "options": [
      "중앙값",
      "평균",
      "최빈값",
      "결측치 비율"
    ],
    "answer": 1,
    "exp": "describe()의 25%, 50%, 75%는 사분위수입니다. 50% 지점은 값을 크기순으로 세웠을 때 가운데 값, 곧 중앙값입니다.",
    "why": [
      "",
      "평균은 mean 행에 따로 나옵니다.",
      "최빈값은 describe()의 숫자 열 결과에 나오지 않습니다. 문자 열이면 top 행에 나옵니다.",
      "describe()는 결측치 비율을 보여 주지 않습니다. count가 전체 행 수보다 작으면 결측이 있다는 것만 알 수 있습니다."
    ]
  },
  {
    "id": "load-08",
    "unit": "load",
    "freq": "mid",
    "subject": 1,
    "topic": "데이터 훑어보기",
    "q": "df.head()를 인자 없이 실행하면 몇 행을 보여 주나요?",
    "options": [
      "5행",
      "3행",
      "10행",
      "전체 행"
    ],
    "answer": 1,
    "exp": "head()와 tail()은 기본값 n=5로 앞(뒤) 5행을 보여 줍니다. df.head(10)처럼 개수를 바꿀 수 있습니다.",
    "why": [
      "",
      "기본값은 3이 아니라 5입니다.",
      "10행을 보려면 df.head(10)처럼 직접 지정해야 합니다.",
      "전체 행은 df 자체를 출력할 때 보이며, 행이 많으면 중간이 생략됩니다."
    ]
  },
  {
    "id": "load-09",
    "unit": "load",
    "freq": "high",
    "subject": 1,
    "topic": "값 세기",
    "q": "다음 코드의 실행 결과로 출력되는 값의 순서는?",
    "code": "s = pd.Series(['A', 'B', 'B', None, 'C', 'B', 'A'])\nfor k, v in s.value_counts().items():\n    print(k, v)",
    "options": [
      "A 2, B 3, C 1",
      "B 3, A 2, C 1",
      "C 1, A 2, B 3",
      "A 2, B 3, C 1, NaN 1"
    ],
    "answer": 2,
    "exp": "value_counts()는 값마다 개수를 세어 많은 순(내림차순)으로 정렬합니다. 결측치(NaN)는 기본으로 세지 않습니다.",
    "why": [
      "알파벳순이 아니라 개수가 많은 순으로 정렬됩니다. 알파벳순으로 보려면 sort_index()를 이어서 씁니다.",
      "",
      "기본은 오름차순이 아니라 내림차순입니다. 적은 순으로 보려면 ascending=True를 줍니다.",
      "value_counts()는 기본값 dropna=True라 NaN을 세지 않습니다. NaN까지 보려면 dropna=False를 줍니다."
    ],
    "check": {
      "py": "s = pd.Series(['A', 'B', 'B', None, 'C', 'B', 'A'])\nprint(', '.join(f'{k} {v}' for k, v in s.value_counts().items()))"
    }
  },
  {
    "id": "load-10",
    "unit": "load",
    "freq": "high",
    "subject": 1,
    "topic": "값 세기",
    "q": "범주형 열 'gender'에 서로 다른 값이 몇 종류인지 숫자 하나로 구하는 코드는?",
    "options": [
      "df['gender'].count()",
      "df['gender'].unique()",
      "df['gender'].nunique()",
      "df['gender'].value_counts()"
    ],
    "answer": 3,
    "exp": "nunique()는 고유값의 개수를 숫자로 돌려줍니다(NaN 제외).",
    "why": [
      "count()는 결측이 아닌 값의 전체 개수입니다. 같은 값이 여러 번 있어도 모두 셉니다.",
      "unique()는 고유값의 목록(배열)을 돌려줍니다. 개수는 len을 한 번 더 씌워야 합니다.",
      "",
      "value_counts()는 값마다 몇 번 나왔는지를 Series로 돌려줍니다. 숫자 하나가 아닙니다."
    ]
  },
  {
    "id": "load-11",
    "unit": "load",
    "freq": "mid",
    "subject": 1,
    "topic": "열 다루기",
    "q": "다음 코드의 실행 결과는?",
    "code": "df = pd.DataFrame({'age': [20, 30], 'income': [100, 200], 'target': [0, 1]})\nprint(list(df.columns))",
    "options": [
      "3",
      "['age', 'income']",
      "['target']",
      "['age', 'income', 'target']"
    ],
    "answer": 4,
    "exp": "columns는 열 이름 목록입니다. list()로 감싸면 파이썬 리스트로 바뀝니다.",
    "why": [
      "열의 개수는 len(df.columns) 또는 df.shape[1]입니다.",
      "열 이름을 모두 보여 주므로 target도 들어갑니다.",
      "마지막 열 하나만 보는 코드가 아닙니다.",
      ""
    ],
    "check": {
      "py": "df = pd.DataFrame({'age': [20, 30], 'income': [100, 200], 'target': [0, 1]})\nprint(list(df.columns))"
    }
  },
  {
    "id": "load-12",
    "unit": "load",
    "freq": "mid",
    "subject": 1,
    "topic": "자료형",
    "q": "숫자로 된 열 'price'가 문자열(object)로 읽혔습니다. 정수형으로 바꾸는 코드는?",
    "options": [
      "df['price'] = df['price'].astype(int)",
      "df['price'] = df['price'].dtype(int)",
      "df['price'].to_int()",
      "df['price'] = int(df['price'])"
    ],
    "answer": 1,
    "exp": "열의 자료형은 astype(자료형)으로 바꾸고, 결과를 다시 그 열에 넣어야 반영됩니다. 쉼표 같은 문자가 섞여 있으면 먼저 지워야 합니다.",
    "why": [
      "",
      "dtype은 자료형을 알려 주는 속성이지 바꾸는 함수가 아닙니다.",
      "Series에 to_int라는 메서드는 없습니다.",
      "파이썬 int()는 값 하나만 바꿀 수 있어서 Series 전체에 쓰면 오류가 납니다."
    ]
  },
  {
    "id": "load-13",
    "unit": "load",
    "freq": "mid",
    "subject": 1,
    "topic": "데이터 합치기",
    "q": "다음 코드의 실행 결과는?",
    "code": "a = pd.DataFrame({'x': [1, 2], 'y': [3, 4]})\nb = pd.DataFrame({'x': [5, 6], 'y': [7, 8]})\nprint(pd.concat([a, b]).shape)",
    "options": [
      "(4, 4)",
      "(2, 4)",
      "(2, 2)",
      "(4, 2)"
    ],
    "answer": 4,
    "exp": "concat은 기본값 axis=0으로 위아래(행 방향)로 이어 붙입니다. 열 이름이 같으니 2행 + 2행 = 4행, 열은 2개 그대로입니다.",
    "why": [
      "열 이름이 같아서 열은 늘어나지 않습니다.",
      "옆으로 붙이려면 axis=1을 줘야 합니다. 그때 결과가 (2, 4)입니다.",
      "두 데이터프레임을 합쳤으므로 행이 늘어납니다.",
      ""
    ],
    "check": {
      "py": "a = pd.DataFrame({'x': [1, 2], 'y': [3, 4]})\nb = pd.DataFrame({'x': [5, 6], 'y': [7, 8]})\nprint(pd.concat([a, b]).shape)"
    }
  },
  {
    "id": "load-14",
    "unit": "load",
    "freq": "mid",
    "subject": 1,
    "topic": "데이터 합치기",
    "q": "다음 코드의 실행 결과 행 수는?",
    "code": "a = pd.DataFrame({'id': [1, 2, 3], 'age': [20, 30, 40]})\nb = pd.DataFrame({'id': [2, 3, 4], 'score': [70, 80, 90]})\nm = pd.merge(a, b, on='id')\nprint(len(m))",
    "options": [
      "3",
      "2",
      "4",
      "1"
    ],
    "answer": 2,
    "exp": "merge의 기본값은 how='inner'라 두 표에 모두 있는 키(id 2, 3)만 남습니다.",
    "why": [
      "왼쪽 표의 행을 모두 남기는 how='left'일 때 3행입니다.",
      "",
      "양쪽 키를 모두 남기는 how='outer'일 때 id 1, 2, 3, 4로 4행입니다.",
      "공통 키는 2와 3 두 개입니다."
    ],
    "check": {
      "py": "a = pd.DataFrame({'id': [1, 2, 3], 'age': [20, 30, 40]})\nb = pd.DataFrame({'id': [2, 3, 4], 'score': [70, 80, 90]})\nprint(len(pd.merge(a, b, on='id')))"
    }
  },
  {
    "id": "load-15",
    "unit": "load",
    "freq": "low",
    "subject": 1,
    "topic": "데이터 저장",
    "q": "전처리한 df를 인덱스 번호 없이 result.csv로 저장하는 코드는?",
    "options": [
      "pd.save_csv(df, 'result.csv')",
      "df.to_csv('result.csv')",
      "df.to_csv('result.csv', index=False)",
      "df.write_csv('result.csv', index=False)"
    ],
    "answer": 3,
    "exp": "to_csv는 기본으로 행 인덱스(0, 1, 2 …)도 첫 열로 저장합니다. index=False를 주면 빠집니다.",
    "why": [
      "판다스에 save_csv라는 함수는 없습니다. 저장은 데이터프레임의 to_csv 메서드로 합니다.",
      "인덱스가 첫 열로 함께 저장되어, 다시 읽으면 Unnamed: 0 같은 열이 생깁니다.",
      "",
      "write_csv라는 메서드는 없습니다."
    ]
  },
  {
    "id": "ml-01",
    "unit": "ml",
    "freq": "high",
    "subject": 2,
    "topic": "분류와 회귀",
    "q": "고객의 이탈 여부(0 또는 1)를 예측하는 문제에 알맞은 모델은?",
    "options": [
      "KMeans",
      "LinearRegression",
      "RandomForestRegressor",
      "RandomForestClassifier"
    ],
    "answer": 4,
    "exp": "정답이 범주(0/1)이면 분류 문제라 이름이 Classifier인 모델을 씁니다. 숫자(가격, 수요량)를 맞히면 회귀 문제라 Regressor를 씁니다.",
    "why": [
      "KMeans는 정답 없이 비슷한 데이터끼리 묶는 비지도 군집 모델입니다.",
      "LinearRegression은 연속된 숫자를 예측하는 회귀 모델입니다.",
      "Regressor는 회귀용이라 0과 1 사이의 소수 같은 연속값을 내놓습니다.",
      ""
    ]
  },
  {
    "id": "ml-02",
    "unit": "ml",
    "freq": "high",
    "subject": 2,
    "topic": "분류와 회귀",
    "q": "이름과 달리 분류 모델인 것은?",
    "options": [
      "LogisticRegression",
      "LinearRegression",
      "Ridge",
      "DecisionTreeRegressor"
    ],
    "answer": 1,
    "exp": "로지스틱 회귀는 이름에 Regression이 들어가지만, 시그모이드 함수로 클래스 확률을 계산하는 분류 모델입니다.",
    "why": [
      "",
      "선형 회귀는 연속값을 예측하는 회귀 모델입니다.",
      "Ridge는 규제를 더한 선형 회귀 모델입니다.",
      "Regressor라는 이름 그대로 회귀용 트리 모델입니다."
    ]
  },
  {
    "id": "ml-03",
    "unit": "ml",
    "freq": "high",
    "subject": 2,
    "topic": "모델 학습",
    "q": "사이킷런 모델을 학습시키고 검증 데이터로 예측하는 코드로 옳은 것은?",
    "options": [
      "model.fit(X_test, y_test)\npred = model.predict(X_train)",
      "model.fit(X_train, y_train)\npred = model.predict(X_test)",
      "model.train(X_train, y_train)\npred = model.predict(X_test)",
      "model.fit(X_train)\npred = model.predict(X_test, y_test)"
    ],
    "answer": 2,
    "exp": "fit(입력, 정답)으로 학습하고 predict(입력)으로 예측합니다. 예측할 때는 정답을 주지 않습니다.",
    "why": [
      "학습은 학습 데이터로, 평가는 검증 데이터로 해야 합니다. 거꾸로 했습니다.",
      "",
      "사이킷런 모델의 학습 메서드는 train이 아니라 fit입니다.",
      "지도학습 모델은 fit에 정답 y가 필요하고, predict에는 입력만 줍니다."
    ]
  },
  {
    "id": "ml-04",
    "unit": "ml",
    "freq": "high",
    "subject": 2,
    "topic": "모델 학습",
    "q": "의사결정나무 분류 모델을 깊이 5로 만드는 코드는?",
    "options": [
      "DecisionTreeClassifier(n_estimators=5)",
      "DecisionTreeClassifier(depth=5)",
      "DecisionTreeClassifier(max_depth=5, random_state=42)",
      "DecisionTreeRegressor(max_depth=5)"
    ],
    "answer": 3,
    "exp": "트리의 최대 깊이는 max_depth로 정합니다. 깊이를 제한하면 과대적합을 줄일 수 있습니다.",
    "why": [
      "n_estimators는 랜덤포레스트처럼 나무를 여러 그루 쓰는 앙상블 모델의 나무 개수입니다.",
      "depth라는 인자는 없어 오류가 납니다.",
      "",
      "Regressor는 회귀 모델이라 분류 문제에 맞지 않습니다."
    ]
  },
  {
    "id": "ml-05",
    "unit": "ml",
    "freq": "high",
    "subject": 2,
    "topic": "랜덤 포레스트",
    "q": "RandomForestClassifier의 n_estimators 인자가 뜻하는 것은?",
    "options": [
      "분류할 클래스의 개수",
      "각 트리의 최대 깊이",
      "학습 반복 횟수(에포크)",
      "만들 결정 트리의 개수"
    ],
    "answer": 4,
    "exp": "랜덤 포레스트는 데이터와 변수를 무작위로 뽑아 여러 트리를 만들고 투표(평균)합니다. n_estimators가 그 트리 수이고 기본값은 100입니다.",
    "why": [
      "클래스 수는 y에서 자동으로 정해집니다.",
      "트리의 깊이는 max_depth입니다.",
      "에포크는 딥러닝에서 데이터 전체를 몇 번 반복해 학습할지입니다.",
      ""
    ]
  },
  {
    "id": "ml-06",
    "unit": "ml",
    "freq": "mid",
    "subject": 2,
    "topic": "랜덤 포레스트",
    "q": "랜덤 포레스트에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "트리 하나만 쓰므로 의사결정나무보다 과대적합이 심하다",
      "여러 트리의 예측을 모아 결정하는 앙상블 모델이다",
      "feature_importances_로 변수 중요도를 볼 수 있다",
      "random_state를 고정하면 결과를 재현할 수 있다"
    ],
    "answer": 1,
    "exp": "랜덤 포레스트는 많은 트리를 묶어(배깅) 단일 트리보다 과대적합이 덜하고 성능이 안정적입니다.",
    "why": [
      "",
      "옳은 설명입니다. 분류는 다수결, 회귀는 평균으로 합칩니다.",
      "옳은 설명입니다. 트리 기반 모델은 변수 중요도를 제공합니다.",
      "옳은 설명입니다. 무작위 추출을 쓰므로 random_state로 고정해야 같은 결과가 나옵니다."
    ]
  },
  {
    "id": "ml-07",
    "unit": "ml",
    "freq": "mid",
    "subject": 2,
    "topic": "모델 학습",
    "q": "학습된 분류 모델에서 각 샘플이 클래스 1일 확률만 뽑는 코드는?",
    "options": [
      "model.predict_proba(X_test)[1]",
      "model.predict(X_test)[:, 1]",
      "model.predict_proba(X_test)[:, 1]",
      "model.score(X_test)[:, 1]"
    ],
    "answer": 3,
    "exp": "predict_proba는 (샘플 수, 클래스 수) 모양으로 클래스별 확률을 돌려줍니다. [:, 1]은 모든 행의 1번 열, 곧 클래스 1의 확률입니다.",
    "why": [
      "[1]은 두 번째 샘플 한 개의 클래스별 확률입니다.",
      "predict는 확률이 아니라 0/1 같은 예측 클래스를 1차원으로 돌려줘서 [:, 1]로 자를 수 없습니다.",
      "",
      "score는 정확도 같은 점수 하나를 돌려주며 정답 y도 필요합니다."
    ]
  },
  {
    "id": "ml-08",
    "unit": "ml",
    "freq": "mid",
    "subject": 2,
    "topic": "KNN",
    "q": "KNeighborsClassifier(n_neighbors=5)의 동작으로 옳은 것은?",
    "options": [
      "데이터를 5개 군집으로 나눈다",
      "새 데이터와 가장 가까운 학습 데이터 5개의 다수결로 클래스를 정한다",
      "트리를 5개 만들어 투표한다",
      "5번 반복 학습한다"
    ],
    "answer": 2,
    "exp": "KNN은 거리 기반 모델이라 가까운 이웃 k개의 클래스를 보고 다수결로 예측합니다. 거리를 쓰므로 스케일링이 중요합니다.",
    "why": [
      "데이터를 k개 묶음으로 나누는 것은 KMeans입니다.",
      "",
      "트리를 여러 개 만드는 것은 랜덤 포레스트입니다.",
      "KNN은 반복 학습을 하지 않고 학습 데이터를 저장해 두었다가 예측할 때 거리를 계산합니다."
    ]
  },
  {
    "id": "ml-09",
    "unit": "ml",
    "freq": "mid",
    "subject": 2,
    "topic": "부스팅",
    "q": "XGBoost, LightGBM 같은 부스팅 모델의 특징으로 옳은 것은?",
    "options": [
      "회귀 문제에는 쓸 수 없다",
      "트리들을 서로 독립적으로 동시에 만든 뒤 평균 낸다",
      "트리를 쓰지 않는 선형 모델이다",
      "앞 트리가 틀린 부분을 다음 트리가 보완하며 순서대로 학습한다"
    ],
    "answer": 4,
    "exp": "부스팅은 약한 모델을 순차적으로 더해 이전 모델의 오차를 줄여 갑니다. learning_rate로 한 번에 고치는 정도를 조절합니다.",
    "why": [
      "XGBRegressor, LGBMRegressor처럼 회귀용 모델도 있습니다.",
      "독립적으로 만들어 평균 내는 것은 배깅(랜덤 포레스트)입니다.",
      "XGBoost와 LightGBM은 결정 트리를 기본 모델로 씁니다.",
      ""
    ]
  },
  {
    "id": "ml-10",
    "unit": "ml",
    "freq": "mid",
    "subject": 2,
    "topic": "변수 중요도",
    "q": "학습된 랜덤 포레스트 모델에서 변수 중요도를 확인하는 속성은?",
    "options": [
      "model.coef_",
      "model.feature_importances_",
      "model.importance()",
      "model.n_features"
    ],
    "answer": 2,
    "exp": "트리 기반 모델은 feature_importances_ 속성으로 변수별 중요도(합 1)를 제공합니다. 학습(fit) 뒤에만 생기는 속성이라 이름 끝에 _가 붙습니다.",
    "why": [
      "coef_는 선형 회귀·로지스틱 회귀 같은 선형 모델의 계수입니다.",
      "",
      "importance()라는 메서드는 없습니다.",
      "학습에 쓴 변수 개수는 n_features_in_이고, 중요도가 아닙니다."
    ]
  },
  {
    "id": "ml-11",
    "unit": "ml",
    "freq": "mid",
    "subject": 2,
    "topic": "하이퍼파라미터",
    "q": "GridSearchCV에 대한 설명으로 옳은 것은?",
    "options": [
      "결측치를 자동으로 채워 준다",
      "학습 데이터와 검증 데이터를 나눠 주는 함수다",
      "지정한 하이퍼파라미터 조합을 모두 교차 검증해 가장 좋은 조합을 찾는다",
      "딥러닝 모델의 층을 자동으로 쌓아 준다"
    ],
    "answer": 3,
    "exp": "param_grid의 모든 조합을 cv번 교차 검증해 비교하고, best_params_로 가장 좋은 조합, best_estimator_로 그 모델을 얻습니다.",
    "why": [
      "결측치를 채우는 것은 fillna나 SimpleImputer입니다.",
      "데이터를 나누는 것은 train_test_split입니다.",
      "",
      "신경망 구조를 자동으로 만들지 않습니다."
    ]
  },
  {
    "id": "ml-12",
    "unit": "ml",
    "freq": "mid",
    "subject": 2,
    "topic": "교차 검증",
    "q": "cross_val_score(model, X, y, cv=5)의 결과는?",
    "options": [
      "데이터를 5조각으로 나눠 번갈아 검증한 점수 5개",
      "5번째 샘플의 예측 점수 하나",
      "학습 데이터 정확도 5개를 평균한 값 하나",
      "5개 모델을 앙상블한 예측값"
    ],
    "answer": 1,
    "exp": "K-폴드 교차 검증은 데이터를 k조각으로 나눠 한 조각씩 검증용으로 쓰며 k번 학습·평가합니다. 점수 배열의 평균(.mean())으로 성능을 봅니다.",
    "why": [
      "",
      "특정 샘플 하나의 점수가 아니라 조각마다의 점수가 나옵니다.",
      "검증 조각의 점수 5개가 배열로 나오고, 평균은 직접 구해야 합니다.",
      "예측값이 아니라 평가 점수를 돌려줍니다."
    ]
  },
  {
    "id": "ml-13",
    "unit": "ml",
    "freq": "mid",
    "subject": 2,
    "topic": "선형 회귀",
    "q": "다음 코드의 실행 결과는?",
    "code": "from sklearn.linear_model import LinearRegression\nX = [[1], [2], [3], [4]]\ny = [3, 5, 7, 9]\nm = LinearRegression().fit(X, y)\nprint(m.predict([[10]]).round(1).tolist())",
    "options": [
      "[21.0]",
      "[20.0]",
      "[10.0]",
      "[2.0]"
    ],
    "answer": 1,
    "exp": "학습 데이터가 y = 2x + 1 직선 위에 있어 선형 회귀가 기울기 2, 절편 1을 찾습니다. x = 10이면 21입니다.",
    "why": [
      "",
      "절편 1을 빠뜨린 값입니다.",
      "입력 x 값 그대로입니다.",
      "기울기(coef_) 값입니다. predict는 예측값을 돌려줍니다."
    ],
    "check": {
      "py": "from sklearn.linear_model import LinearRegression\nm = LinearRegression().fit([[1], [2], [3], [4]], [3, 5, 7, 9])\nprint(m.predict([[10]]).round(1).tolist())"
    }
  },
  {
    "id": "ml-14",
    "unit": "ml",
    "freq": "low",
    "subject": 2,
    "topic": "모델 저장",
    "q": "학습한 사이킷런 모델을 파일로 저장했다가 다시 불러올 때 많이 쓰는 라이브러리는?",
    "options": [
      "matplotlib",
      "seaborn",
      "joblib (joblib.dump, joblib.load)",
      "pd.read_csv"
    ],
    "answer": 3,
    "exp": "joblib.dump(model, 'model.pkl')로 저장하고 joblib.load('model.pkl')로 불러옵니다. 케라스 모델은 model.save()로 저장합니다.",
    "why": [
      "matplotlib은 그래프를 그리는 라이브러리입니다.",
      "seaborn은 시각화 라이브러리입니다.",
      "",
      "read_csv는 표 데이터를 읽는 함수라 모델을 불러오지 못합니다."
    ]
  },
  {
    "id": "pick-01",
    "unit": "pick",
    "freq": "high",
    "subject": 1,
    "topic": "열 선택",
    "q": "데이터프레임 df에서 'age'와 'city' 두 열만 골라 데이터프레임으로 얻는 코드는?",
    "options": [
      "df['age', 'city']",
      "df[['age', 'city']]",
      "df('age', 'city')",
      "df.select('age', 'city')"
    ],
    "answer": 2,
    "exp": "여러 열을 고를 때는 열 이름 리스트를 대괄호 안에 넣습니다. 그래서 대괄호가 두 겹이 됩니다.",
    "why": [
      "대괄호 한 겹에 이름 두 개를 쓰면 ('age', 'city')라는 튜플 이름의 열 하나를 찾게 되어 KeyError가 납니다.",
      "",
      "데이터프레임은 함수처럼 괄호로 호출할 수 없습니다.",
      "판다스 DataFrame에는 select 메서드가 없습니다."
    ]
  },
  {
    "id": "pick-02",
    "unit": "pick",
    "freq": "high",
    "subject": 1,
    "topic": "조건 필터",
    "q": "다음 코드의 실행 결과는?",
    "code": "df = pd.DataFrame({'name': ['A', 'B', 'C', 'D', 'E'],\n                   'age': [23, 35, 41, 29, 52],\n                   'city': ['서울', '부산', '서울', '대구', '서울']})\nprint(len(df[(df['city'] == '서울') & (df['age'] >= 30)]))",
    "options": [
      "5",
      "3",
      "1",
      "2"
    ],
    "answer": 4,
    "exp": "여러 조건은 각각 괄호로 감싸고 &(그리고)로 잇습니다. 서울이면서 30세 이상인 사람은 C(41), E(52) 두 명입니다.",
    "why": [
      "전체 행 수입니다. 조건으로 걸러진 뒤의 수를 묻고 있습니다.",
      "서울인 사람은 3명이지만 그중 A는 23세라 빠집니다.",
      "C와 E 두 명이 조건을 모두 만족합니다.",
      ""
    ],
    "check": {
      "py": "df = pd.DataFrame({'name': list('ABCDE'), 'age': [23, 35, 41, 29, 52], 'city': ['서울', '부산', '서울', '대구', '서울']})\nprint(len(df[(df['city'] == '서울') & (df['age'] >= 30)]))"
    }
  },
  {
    "id": "pick-03",
    "unit": "pick",
    "freq": "high",
    "subject": 1,
    "topic": "조건 필터",
    "q": "판다스에서 두 조건을 '또는'으로 묶어 행을 거르는 올바른 코드는?",
    "options": [
      "df[df['age'] < 25 or df['age'] > 50]",
      "df[(df['age'] < 25) | (df['age'] > 50)]",
      "df[(df['age'] < 25) or (df['age'] > 50)]",
      "df[df['age'] < 25 | df['age'] > 50]"
    ],
    "answer": 2,
    "exp": "판다스 조건은 파이썬의 and/or가 아니라 &, |를 쓰고, 연산 순서 때문에 조건마다 괄호를 칩니다.",
    "why": [
      "파이썬 or는 Series 전체의 참·거짓을 하나로 판단하려 해서 'truth value of a Series is ambiguous' 오류가 납니다.",
      "",
      "괄호는 맞지만 or를 써서 같은 오류가 납니다. Series끼리는 |를 써야 합니다.",
      "|가 비교 연산자보다 먼저 계산되어 25 | df['age']가 먼저 묶이므로 원하는 결과가 나오지 않거나 오류가 납니다."
    ]
  },
  {
    "id": "pick-04",
    "unit": "pick",
    "freq": "high",
    "subject": 1,
    "topic": "loc와 iloc",
    "q": "다음 코드의 실행 결과는?",
    "code": "df = pd.DataFrame({'name': ['A', 'B', 'C', 'D', 'E'],\n                   'age': [23, 35, 41, 29, 52],\n                   'city': ['서울', '부산', '서울', '대구', '서울']})\nprint(len(df.loc[1:3]))",
    "options": [
      "3",
      "2",
      "4",
      "오류"
    ],
    "answer": 1,
    "exp": "loc는 이름(라벨) 기준이고 끝 라벨을 포함합니다. 인덱스가 0~4인 표에서 loc[1:3]은 1, 2, 3번 행으로 3행입니다.",
    "why": [
      "",
      "iloc[1:3]처럼 위치로 자르면 끝을 빼서 2행이지만, loc는 끝을 포함합니다.",
      "1부터 3까지라 3행입니다.",
      "인덱스 1~3이 모두 있어 오류가 나지 않습니다."
    ],
    "check": {
      "py": "df = pd.DataFrame({'name': list('ABCDE'), 'age': [23, 35, 41, 29, 52], 'city': ['서울', '부산', '서울', '대구', '서울']})\nprint(len(df.loc[1:3]))"
    }
  },
  {
    "id": "pick-05",
    "unit": "pick",
    "freq": "high",
    "subject": 1,
    "topic": "loc와 iloc",
    "q": "다음 코드의 실행 결과는?",
    "code": "df = pd.DataFrame({'name': ['A', 'B', 'C', 'D', 'E'],\n                   'age': [23, 35, 41, 29, 52],\n                   'city': ['서울', '부산', '서울', '대구', '서울']})\nprint(df.iloc[1, 1])",
    "options": [
      "29",
      "41",
      "B",
      "35"
    ],
    "answer": 4,
    "exp": "iloc[행 위치, 열 위치]는 0부터 셉니다. 1번 행은 B, 1번 열은 age라 35입니다.",
    "why": [
      "3번 행(D)의 나이입니다.",
      "2번 행(C)의 나이입니다. 위치는 0부터 셉니다.",
      "0번 열(name)의 값입니다. 1번 열은 age입니다.",
      ""
    ],
    "check": {
      "py": "df = pd.DataFrame({'name': list('ABCDE'), 'age': [23, 35, 41, 29, 52], 'city': ['서울', '부산', '서울', '대구', '서울']})\nprint(df.iloc[1, 1])"
    }
  },
  {
    "id": "pick-06",
    "unit": "pick",
    "freq": "mid",
    "subject": 1,
    "topic": "정렬",
    "q": "나이(age)가 많은 사람부터 보이도록 정렬하는 코드는?",
    "options": [
      "df.sort_index('age', ascending=False)",
      "df.sort_values('age')",
      "df.sort_values('age', ascending=False)",
      "df.sort('age', reverse=True)"
    ],
    "answer": 3,
    "exp": "sort_values(열, ascending=False)로 내림차순 정렬합니다. 기본값은 ascending=True(오름차순)입니다.",
    "why": [
      "sort_index는 값이 아니라 행 인덱스를 기준으로 정렬합니다.",
      "기본이 오름차순이라 나이가 적은 사람부터 나옵니다.",
      "",
      "판다스에는 sort 메서드가 없고, reverse는 파이썬 리스트 정렬의 인자입니다."
    ]
  },
  {
    "id": "pick-07",
    "unit": "pick",
    "freq": "high",
    "subject": 1,
    "topic": "그룹 집계",
    "q": "다음 코드의 실행 결과는?",
    "code": "df = pd.DataFrame({'name': ['A', 'B', 'C', 'D', 'E'],\n                   'age': [23, 35, 41, 29, 52],\n                   'city': ['서울', '부산', '서울', '대구', '서울']})\nm = df.groupby('city')['age'].mean()\nprint(f\"{m['서울']:.2f}\")",
    "options": [
      "36.00",
      "35.00",
      "41.00",
      "38.67"
    ],
    "answer": 4,
    "exp": "groupby('city')로 도시별로 묶고 age 평균을 구합니다. 서울은 23, 41, 52의 평균이라 116 ÷ 3 = 38.67입니다.",
    "why": [
      "전체 5명의 평균(180 ÷ 5)입니다. 도시별로 묶었습니다.",
      "부산(35)의 평균입니다.",
      "서울의 중앙값입니다. mean은 평균을 구합니다.",
      ""
    ],
    "check": {
      "py": "df = pd.DataFrame({'name': list('ABCDE'), 'age': [23, 35, 41, 29, 52], 'city': ['서울', '부산', '서울', '대구', '서울']})\nprint(f\"{df.groupby('city')['age'].mean()['서울']:.2f}\")"
    }
  },
  {
    "id": "pick-08",
    "unit": "pick",
    "freq": "mid",
    "subject": 1,
    "topic": "그룹 집계",
    "q": "도시별 사람 수와 평균 나이를 한 번에 구하는 코드는?",
    "options": [
      "df.groupby('city')['age'].count().mean()",
      "df.groupby('city')['age'].agg(['count', 'mean'])",
      "df['age'].agg(['count', 'mean'])",
      "df.groupby(['count', 'mean'])['age']"
    ],
    "answer": 2,
    "exp": "agg에 함수 이름 리스트를 주면 그룹마다 여러 집계를 열로 나란히 구합니다.",
    "why": [
      "도시별 사람 수를 구한 뒤 그 수들의 평균을 구해, 숫자 하나만 나옵니다.",
      "",
      "도시로 묶지 않아서 전체에 대한 개수와 평균만 나옵니다.",
      "'count'와 'mean'이라는 열로 묶으려 해서 KeyError가 납니다."
    ]
  },
  {
    "id": "pick-09",
    "unit": "pick",
    "freq": "mid",
    "subject": 1,
    "topic": "값 바꾸기",
    "q": "'gender' 열의 '남'을 0, '여'를 1로 바꾸는 코드로 알맞은 것은?",
    "options": [
      "df['gender'].rename({'남': 0, '여': 1})",
      "df['gender'] = df['gender'].astype({'남': 0, '여': 1})",
      "df['gender'] = df['gender'].map({'남': 0, '여': 1})",
      "df['gender'] = df['gender'].sort_values({'남': 0, '여': 1})"
    ],
    "answer": 3,
    "exp": "map에 딕셔너리를 주면 키에 해당하는 값으로 바꿉니다. 딕셔너리에 없는 값은 NaN이 되니 주의합니다. replace도 같은 일을 할 수 있습니다.",
    "why": [
      "rename은 값이 아니라 인덱스(라벨) 이름을 바꿉니다. 결과를 대입하지도 않았습니다.",
      "astype은 자료형을 바꾸는 함수라 값을 다른 값으로 대응시키지 못합니다.",
      "",
      "sort_values는 정렬 함수입니다."
    ]
  },
  {
    "id": "pick-10",
    "unit": "pick",
    "freq": "mid",
    "subject": 1,
    "topic": "중복 제거",
    "q": "다음 코드의 실행 결과는?",
    "code": "df = pd.DataFrame({'x': [1, 1, 2, 1], 'y': ['a', 'a', 'a', 'b']})\nprint(len(df.drop_duplicates()))",
    "options": [
      "3",
      "4",
      "2",
      "5"
    ],
    "answer": 1,
    "exp": "drop_duplicates()는 모든 열 값이 같은 행 중 첫 번째만 남깁니다. (1, a)가 두 번이라 하나가 빠져 3행이 남습니다.",
    "why": [
      "",
      "(1, a) 행이 완전히 같아 하나가 지워집니다.",
      "x 값만 보면 1과 2 두 종류지만, y까지 비교하므로 (1, b)는 다른 행입니다.",
      "원래 행 수는 4입니다."
    ],
    "check": {
      "py": "df = pd.DataFrame({'x': [1, 1, 2, 1], 'y': ['a', 'a', 'a', 'b']})\nprint(len(df.drop_duplicates()))"
    }
  },
  {
    "id": "pick-11",
    "unit": "pick",
    "freq": "mid",
    "subject": 1,
    "topic": "새 열 만들기",
    "q": "'height'(cm)와 'weight'(kg) 열로 BMI 열을 새로 만드는 코드는?",
    "options": [
      "df.add('bmi', df['weight'] / (df['height'] / 100) ** 2)",
      "df.bmi = df.weight / (df.height / 100) ** 2",
      "df['bmi'] = df['weight'] / (df['height'] / 100) ** 2",
      "df['bmi'] == df['weight'] / (df['height'] / 100) ** 2"
    ],
    "answer": 3,
    "exp": "df['새 열'] = 계산식처럼 대괄호로 대입하면 새 열이 생깁니다. 열끼리의 연산은 행마다 자동으로 계산됩니다.",
    "why": [
      "DataFrame.add는 값을 더하는 함수라 열을 만드는 용도가 아닙니다.",
      "점(.)으로 대입하면 새 열이 아니라 데이터프레임 객체의 속성만 생기고 경고가 납니다. 새 열은 대괄호로 만듭니다.",
      "",
      "==는 비교 연산자라 대입이 일어나지 않고, 'bmi' 열이 없어서 KeyError가 납니다."
    ]
  },
  {
    "id": "pick-12",
    "unit": "pick",
    "freq": "low",
    "subject": 1,
    "topic": "apply",
    "q": "다음 코드의 실행 결과는?",
    "code": "df = pd.DataFrame({'name': ['A', 'B', 'C', 'D', 'E'],\n                   'age': [23, 35, 41, 29, 52],\n                   'city': ['서울', '부산', '서울', '대구', '서울']})\ndf['old'] = df['age'].apply(lambda x: 1 if x >= 30 else 0)\nprint(df['old'].tolist())",
    "options": [
      "[0, 1, 1, 0, 1]",
      "[1, 0, 0, 1, 0]",
      "[0, 0, 1, 0, 1]",
      "[23, 35, 41, 29, 52]"
    ],
    "answer": 1,
    "exp": "apply는 함수를 각 값에 적용합니다. 30 이상이면 1, 아니면 0이라 23, 35, 41, 29, 52는 0, 1, 1, 0, 1입니다.",
    "why": [
      "",
      "조건이 거꾸로 적용된 결과입니다.",
      "35도 30 이상이라 1입니다.",
      "apply 결과를 저장했으므로 원래 나이가 아니라 0과 1이 나옵니다."
    ],
    "check": {
      "py": "df = pd.DataFrame({'name': list('ABCDE'), 'age': [23, 35, 41, 29, 52], 'city': ['서울', '부산', '서울', '대구', '서울']})\ndf['old'] = df['age'].apply(lambda x: 1 if x >= 30 else 0)\nprint(df['old'].tolist())"
    }
  },
  {
    "id": "pick-13",
    "unit": "pick",
    "freq": "mid",
    "subject": 1,
    "topic": "구간 나누기",
    "q": "나이를 0~19, 20~39, 40~59세의 세 구간으로 나눠 범주 열을 만들 때 쓰는 판다스 함수는?",
    "options": [
      "pd.merge",
      "pd.melt",
      "pd.pivot",
      "pd.cut"
    ],
    "answer": 4,
    "exp": "pd.cut(값, bins=[경계들], labels=[이름들])은 연속된 숫자를 구간 범주로 바꿉니다. 같은 개수씩 나누려면 pd.qcut을 씁니다.",
    "why": [
      "merge는 두 표를 키로 합치는 함수입니다.",
      "melt는 넓은 표를 긴 표로 바꾸는 함수입니다.",
      "pivot은 긴 표를 넓은 표로 재배치하는 함수입니다.",
      ""
    ]
  },
  {
    "id": "pick-14",
    "unit": "pick",
    "freq": "low",
    "subject": 1,
    "topic": "인덱스",
    "q": "필터링한 뒤 0, 2, 5처럼 띄엄띄엄 남은 행 인덱스를 0부터 다시 매기는 코드는?",
    "options": [
      "df = df.reset_index()",
      "df = df.reset_index(drop=True)",
      "df = df.set_index(0)",
      "df = df.sort_index()"
    ],
    "answer": 2,
    "exp": "reset_index(drop=True)는 인덱스를 0부터 다시 매기고 예전 인덱스는 버립니다.",
    "why": [
      "drop=True가 없으면 예전 인덱스가 'index'라는 새 열로 남습니다.",
      "",
      "set_index는 어떤 열을 인덱스로 지정하는 함수이고, 0이라는 열은 없습니다.",
      "sort_index는 인덱스 순서대로 정렬할 뿐 번호를 새로 매기지 않습니다."
    ]
  },
  {
    "id": "prep-01",
    "unit": "prep",
    "freq": "high",
    "subject": 1,
    "topic": "원-핫 인코딩",
    "q": "범주형 열 'city'를 원-핫 인코딩해 숫자 열로 바꾸는 판다스 코드는?",
    "options": [
      "df['city'] = df['city'].astype(int)",
      "df = pd.one_hot(df, columns=['city'])",
      "df = pd.get_dummies(df, columns=['city'])",
      "df = pd.dummies(df['city'])"
    ],
    "answer": 3,
    "exp": "pd.get_dummies는 범주 값마다 열을 만들고 해당하면 1(True), 아니면 0(False)을 넣습니다. columns로 바꿀 열을 정합니다.",
    "why": [
      "'서울' 같은 문자열은 정수로 바꿀 수 없어 오류가 납니다.",
      "판다스에 one_hot이라는 함수는 없습니다.",
      "",
      "판다스 함수 이름은 dummies가 아니라 get_dummies입니다."
    ]
  },
  {
    "id": "prep-02",
    "unit": "prep",
    "freq": "high",
    "subject": 1,
    "topic": "원-핫 인코딩",
    "q": "다음 코드의 실행 결과 열 이름 목록은?",
    "code": "df = pd.DataFrame({'age': [20, 30, 40], 'city': ['서울', '부산', '대구']})\nprint(list(pd.get_dummies(df, columns=['city']).columns))",
    "options": [
      "['age', 'city_대구', 'city_부산', 'city_서울']",
      "['age', 'city']",
      "['age', '대구', '부산', '서울']",
      "['city_대구', 'city_부산', 'city_서울']"
    ],
    "answer": 1,
    "exp": "get_dummies는 원래 열을 지우고 '열이름_값' 형태의 열을 값의 정렬 순서대로 붙입니다. 숫자 열 age는 그대로 남습니다.",
    "why": [
      "",
      "city 열은 원-핫 열들로 바뀌며 사라집니다.",
      "새 열 이름 앞에는 원래 열 이름이 접두어(prefix)로 붙습니다.",
      "인코딩하지 않는 숫자 열 age는 그대로 남습니다."
    ],
    "check": {
      "py": "df = pd.DataFrame({'age': [20, 30, 40], 'city': ['서울', '부산', '대구']})\nprint(list(pd.get_dummies(df, columns=['city']).columns))"
    }
  },
  {
    "id": "prep-03",
    "unit": "prep",
    "freq": "mid",
    "subject": 1,
    "topic": "원-핫 인코딩",
    "q": "값이 3종류인 범주 열에 pd.get_dummies(..., drop_first=True)를 쓰면 만들어지는 열 개수는?",
    "options": [
      "3개",
      "2개",
      "1개",
      "4개"
    ],
    "answer": 2,
    "exp": "drop_first=True는 첫 번째 범주 열을 빼서 k개 범주를 k-1개 열로 표현합니다. 나머지 열이 모두 0이면 빠진 범주라는 뜻이라 정보가 사라지지 않습니다.",
    "why": [
      "drop_first를 주지 않았을 때의 개수입니다.",
      "",
      "첫 번째 범주 하나만 뺍니다.",
      "원-핫 인코딩은 범주 수보다 많은 열을 만들지 않습니다."
    ]
  },
  {
    "id": "prep-04",
    "unit": "prep",
    "freq": "mid",
    "subject": 1,
    "topic": "라벨 인코딩",
    "q": "다음 코드의 실행 결과는?",
    "code": "from sklearn.preprocessing import LabelEncoder\nle = LabelEncoder()\nprint(le.fit_transform(['cherry', 'apple', 'banana', 'apple']).tolist())",
    "options": [
      "[0, 2, 1, 2]",
      "[0, 1, 2, 1]",
      "[1, 0, 2, 0]",
      "[2, 0, 1, 0]"
    ],
    "answer": 4,
    "exp": "LabelEncoder는 범주를 정렬한 순서(apple, banana, cherry)대로 0, 1, 2를 붙입니다. cherry는 2, apple은 0, banana는 1입니다.",
    "why": [
      "apple이 정렬 순서상 가장 앞이라 0입니다.",
      "처음 나온 순서대로 번호를 붙인 결과입니다. LabelEncoder는 값을 정렬한 순서로 번호를 붙입니다.",
      "cherry는 정렬 순서상 마지막이라 2입니다.",
      ""
    ],
    "check": {
      "py": "from sklearn.preprocessing import LabelEncoder\nprint(LabelEncoder().fit_transform(['cherry', 'apple', 'banana', 'apple']).tolist())"
    }
  },
  {
    "id": "prep-05",
    "unit": "prep",
    "freq": "mid",
    "subject": 1,
    "topic": "인코딩 선택",
    "q": "'학력'(초졸 < 중졸 < 고졸 < 대졸)처럼 순서가 있는 범주에 대한 설명으로 가장 알맞은 것은?",
    "options": [
      "반드시 열을 삭제해야 한다",
      "순서가 있는 범주는 인코딩하지 않아도 모델이 문자열 그대로 학습한다",
      "원-핫 인코딩만 쓸 수 있다",
      "순서대로 0, 1, 2, 3을 매기는 순서 인코딩이 의미를 살리기 좋다"
    ],
    "answer": 4,
    "exp": "순서형 범주는 크기 관계를 숫자에 담는 순서 인코딩이 자연스럽습니다. 단, LabelEncoder는 값을 가나다(사전)순으로 번호를 매기므로(고졸 0, 대졸 1, 중졸 2, 초졸 3) 실제 순서를 살리려면 map({'초졸': 0, '중졸': 1, '고졸': 2, '대졸': 3})처럼 직접 지정합니다. 순서가 없는 범주(도시, 색깔)는 원-핫 인코딩이 안전합니다.",
    "why": [
      "유용한 정보일 수 있는 열을 지울 이유가 없습니다.",
      "사이킷런 모델은 문자열을 그대로 받지 못해 숫자로 바꿔야 합니다.",
      "원-핫도 가능하지만 순서 정보가 사라집니다. 순서형에는 순서대로 숫자를 매기는 인코딩을 많이 씁니다.",
      ""
    ]
  },
  {
    "id": "prep-06",
    "unit": "prep",
    "freq": "high",
    "subject": 1,
    "topic": "데이터 분리",
    "q": "X, y를 학습용 80%, 검증용 20%로 나누는 코드로 옳은 것은?",
    "options": [
      "X_train, y_train, X_test, y_test = train_test_split(X, y, test_size=0.2, random_state=42)",
      "X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)",
      "X_train, X_test, y_train, y_test = train_test_split(X, y, train_size=0.2, random_state=42)",
      "X_train, X_test = train_test_split(X, y, test_size=0.2)"
    ],
    "answer": 2,
    "exp": "train_test_split은 X_train, X_test, y_train, y_test 순서로 돌려줍니다. test_size=0.2가 검증 20%입니다. random_state를 고정하면 매번 같은 결과로 나뉩니다.",
    "why": [
      "반환 순서가 틀렸습니다. X를 먼저 학습·검증으로, 그다음 y를 학습·검증으로 돌려줍니다.",
      "",
      "train_size=0.2면 학습 데이터가 20%가 되어 반대로 나뉩니다.",
      "X와 y 두 개를 넣으면 네 개를 돌려주므로 두 변수로 받으면 오류가 납니다."
    ]
  },
  {
    "id": "prep-07",
    "unit": "prep",
    "freq": "high",
    "subject": 1,
    "topic": "데이터 분리",
    "q": "다음 코드의 실행 결과는?",
    "code": "import numpy as np\nfrom sklearn.model_selection import train_test_split\nX = np.arange(100).reshape(100, 1)\ny = np.arange(100) % 2\nX_train, X_test, y_train, y_test = train_test_split(X, y, random_state=0)\nprint(len(X_train), len(X_test))",
    "options": [
      "70 30",
      "80 20",
      "75 25",
      "50 50"
    ],
    "answer": 3,
    "exp": "test_size와 train_size를 모두 생략하면 test_size 기본값 0.25가 적용되어 75 : 25로 나뉩니다.",
    "why": [
      "test_size=0.3일 때의 결과입니다.",
      "test_size=0.2를 줬을 때의 결과입니다. 기본값은 0.25입니다.",
      "",
      "기본 비율은 반반이 아닙니다."
    ],
    "check": {
      "py": "import numpy as np\nfrom sklearn.model_selection import train_test_split\nX = np.arange(100).reshape(100, 1); y = np.arange(100) % 2\na, b, c, d = train_test_split(X, y, random_state=0)\nprint(len(a), len(b))"
    }
  },
  {
    "id": "prep-08",
    "unit": "prep",
    "freq": "high",
    "subject": 1,
    "topic": "데이터 분리",
    "q": "train_test_split에 stratify=y를 주는 이유는?",
    "options": [
      "학습용과 검증용에 y의 클래스 비율이 원본과 같게 유지되도록",
      "학습 데이터를 섞지 않고 순서대로 자르기 위해",
      "매번 같은 방식으로 나뉘도록 고정하기 위해",
      "y의 결측치를 자동으로 지우기 위해"
    ],
    "answer": 1,
    "exp": "stratify는 층화 추출로, 0과 1의 비율이 원본과 같도록 나눕니다. 클래스가 불균형할 때 특히 중요합니다.",
    "why": [
      "",
      "섞지 않고 자르는 것은 shuffle=False입니다.",
      "결과를 고정하는 것은 random_state입니다.",
      "train_test_split은 결측치를 처리하지 않습니다."
    ]
  },
  {
    "id": "prep-09",
    "unit": "prep",
    "freq": "high",
    "subject": 1,
    "topic": "X와 y 나누기",
    "q": "데이터프레임 df에서 타깃 'Churn'을 y로, 나머지 열을 X로 나누는 코드는?",
    "options": [
      "X = df.drop('Churn', axis=1)\ny = df['Churn']",
      "X = df['Churn']\ny = df.drop('Churn', axis=1)",
      "X = df.drop('Churn')\ny = df['Churn']",
      "X = df\ny = df['Churn']"
    ],
    "answer": 1,
    "exp": "X는 타깃을 뺀 입력 열들, y는 맞힐 타깃 열입니다. 열을 빼므로 axis=1이 필요합니다.",
    "why": [
      "",
      "X와 y가 바뀌었습니다. X가 입력, y가 정답(타깃)입니다.",
      "axis를 주지 않으면 행에서 'Churn'을 찾아 KeyError가 납니다.",
      "X에 정답 열이 그대로 들어가 모델이 정답을 보고 맞히는 꼴이 됩니다(데이터 누수)."
    ]
  },
  {
    "id": "prep-10",
    "unit": "prep",
    "freq": "high",
    "subject": 1,
    "topic": "스케일링",
    "q": "StandardScaler로 학습·검증 데이터를 스케일링하는 올바른 순서는?",
    "options": [
      "scaler.fit_transform(X_test) 후 scaler.transform(X_train)",
      "scaler.fit_transform(X_train) 후 scaler.transform(X_test)",
      "scaler.fit_transform(X_train) 후 scaler.fit_transform(X_test)",
      "scaler.transform(X_train) 후 scaler.transform(X_test)"
    ],
    "answer": 2,
    "exp": "기준(평균·표준편차)은 학습 데이터로만 정하고(fit), 검증 데이터는 그 기준으로 변환(transform)만 합니다. 검증 데이터로 다시 fit하면 정보가 새고 기준이 달라집니다.",
    "why": [
      "기준은 검증 데이터가 아니라 학습 데이터로 정해야 합니다.",
      "",
      "검증 데이터에 다시 fit하면 학습 때와 다른 기준으로 바뀌어 두 데이터가 같은 잣대로 변환되지 않습니다.",
      "fit을 하지 않은 스케일러로 transform하면 NotFittedError가 납니다."
    ]
  },
  {
    "id": "prep-11",
    "unit": "prep",
    "freq": "high",
    "subject": 1,
    "topic": "스케일링",
    "q": "다음 코드의 실행 결과는?",
    "code": "from sklearn.preprocessing import MinMaxScaler\nX = [[10], [20], [50]]\nprint(MinMaxScaler().fit_transform(X).ravel().tolist())",
    "options": [
      "[10.0, 20.0, 50.0]",
      "[-1.0, 0.0, 1.0]",
      "[0.0, 0.5, 1.0]",
      "[0.0, 0.25, 1.0]"
    ],
    "answer": 4,
    "exp": "MinMaxScaler는 (x - 최솟값) / (최댓값 - 최솟값)으로 0~1 사이로 바꿉니다. (20 - 10) / (50 - 10) = 0.25입니다.",
    "why": [
      "fit_transform 결과는 변환된 값입니다. 원래 값이 그대로 나오지 않습니다.",
      "평균을 0으로 맞추는 StandardScaler의 결과와 비슷한 모양입니다. MinMaxScaler는 0~1로 바꿉니다.",
      "가운데 값 20은 최솟값과 최댓값의 정중앙(30)이 아니라서 0.5가 아닙니다.",
      ""
    ],
    "check": {
      "py": "from sklearn.preprocessing import MinMaxScaler\nprint(MinMaxScaler().fit_transform([[10], [20], [50]]).ravel().tolist())"
    }
  },
  {
    "id": "prep-12",
    "unit": "prep",
    "freq": "high",
    "subject": 1,
    "topic": "스케일링",
    "q": "StandardScaler를 적용한 뒤 학습 데이터 각 열의 특징은?",
    "options": [
      "모든 값이 양수가 된다",
      "최솟값이 0, 최댓값이 1이 된다",
      "평균이 0, 표준편차가 1이 된다",
      "이상치가 자동으로 제거된다"
    ],
    "answer": 3,
    "exp": "StandardScaler는 (x - 평균) / 표준편차로 바꿔 평균 0, 표준편차 1인 분포로 만듭니다.",
    "why": [
      "평균보다 작은 값은 음수가 됩니다.",
      "0~1로 맞추는 것은 MinMaxScaler입니다.",
      "",
      "스케일링은 값의 크기만 바꿀 뿐 이상치를 지우지 않습니다."
    ]
  },
  {
    "id": "prep-13",
    "unit": "prep",
    "freq": "mid",
    "subject": 1,
    "topic": "스케일링",
    "q": "스케일링이 필요 없는(결과에 거의 영향이 없는) 모델은?",
    "options": [
      "의사결정나무(DecisionTree)",
      "K-최근접 이웃(KNN)",
      "딥러닝(신경망)",
      "로지스틱 회귀"
    ],
    "answer": 1,
    "exp": "트리 계열 모델은 한 변수 안에서 기준값으로 나누기만 해서 값의 크기 단위에 영향을 거의 받지 않습니다. 거리·기울기를 쓰는 모델은 스케일링이 중요합니다.",
    "why": [
      "",
      "KNN은 거리를 계산하므로 단위가 큰 변수가 결과를 좌우합니다.",
      "신경망은 경사하강법으로 학습해 입력 크기가 고르지 않으면 학습이 불안정합니다.",
      "로지스틱 회귀도 경사하강 계열 최적화와 규제를 써서 스케일링의 영향을 받습니다."
    ]
  },
  {
    "id": "prep-14",
    "unit": "prep",
    "freq": "mid",
    "subject": 1,
    "topic": "데이터 누수",
    "q": "다음 중 데이터 누수(data leakage)에 해당하는 것은?",
    "options": [
      "학습 데이터로만 결측치 평균을 구해 검증 데이터도 그 값으로 채웠다",
      "전체 데이터로 스케일러를 fit한 뒤 학습·검증으로 나누었다",
      "random_state=42로 데이터를 나누었다",
      "타깃 열을 X에서 뺐다"
    ],
    "answer": 2,
    "exp": "검증 데이터의 정보(평균, 최댓값 등)가 학습 과정에 섞이면 데이터 누수입니다. 성능이 실제보다 좋게 나옵니다. 나누기 → 학습 데이터로 fit → 양쪽 transform 순서가 안전합니다.",
    "why": [
      "학습 데이터에서 구한 값으로 검증 데이터를 처리했으므로 누수가 아닙니다.",
      "",
      "random_state는 나누는 방식을 고정할 뿐 정보가 새지 않습니다.",
      "타깃을 X에서 빼는 것은 누수를 막는 올바른 처리입니다."
    ]
  },
  {
    "id": "viz-01",
    "unit": "viz",
    "freq": "high",
    "subject": 1,
    "topic": "시본 그래프",
    "q": "범주형 열 'churn'(이탈 여부 0/1)의 범주별 개수를 세어 막대로 그리는 데 가장 알맞은 시본(seaborn) 함수는?",
    "options": [
      "sns.heatmap(df['churn'])",
      "sns.histplot(data=df, x='churn', kde=True)",
      "sns.countplot(data=df, x='churn')",
      "sns.lineplot(data=df, x='churn')"
    ],
    "answer": 3,
    "exp": "countplot은 범주마다 행 수를 세어 막대로 그립니다. 타깃 값의 비율(불균형)을 확인할 때 자주 씁니다.",
    "why": [
      "heatmap은 상관계수 행렬처럼 2차원 표의 값을 색으로 표현합니다.",
      "histplot은 연속형 숫자의 분포(구간별 빈도)를 그릴 때 쓰고, kde는 분포 곡선을 덧그립니다. 0/1 범주 개수 비교에는 countplot이 맞습니다.",
      "",
      "lineplot은 시간 흐름처럼 순서가 있는 값의 변화를 선으로 이어 그립니다."
    ]
  },
  {
    "id": "viz-02",
    "unit": "viz",
    "freq": "high",
    "subject": 1,
    "topic": "시본 그래프",
    "q": "연속형 열 'age'의 분포 모양(어느 구간에 많이 몰려 있는지)을 보기에 가장 알맞은 그래프는?",
    "options": [
      "sns.barplot(data=df, x='age')",
      "sns.countplot(data=df, x='age')",
      "sns.heatmap(data=df, x='age')",
      "sns.histplot(data=df, x='age')"
    ],
    "answer": 4,
    "exp": "histplot(히스토그램)은 연속형 값을 구간으로 나눠 빈도를 막대로 보여 줍니다.",
    "why": [
      "barplot은 범주별 평균 같은 집계값을 막대로 보여 주는 그래프라, x만 주면 age 평균 막대 하나만 그려져 분포 모양을 볼 수 없습니다.",
      "countplot은 값마다 막대를 하나씩 그려서, 나이처럼 값의 종류가 많은 연속형 열은 막대가 너무 많아집니다.",
      "heatmap은 2차원 행렬을 색으로 칠하는 그래프라 열 하나의 분포에는 맞지 않습니다.",
      ""
    ]
  },
  {
    "id": "viz-03",
    "unit": "viz",
    "freq": "high",
    "subject": 1,
    "topic": "시본 그래프",
    "q": "'income' 열에서 이상치가 있는지 사분위수 기준으로 한눈에 확인하기 좋은 그래프는?",
    "options": [
      "sns.lineplot(data=df, y='income')",
      "sns.countplot(data=df, x='income')",
      "sns.boxplot(data=df, y='income')",
      "sns.heatmap(df[['income']].corr())"
    ],
    "answer": 3,
    "exp": "boxplot은 상자(1~3사분위수)와 수염을 그리고, 수염(1.5×IQR) 밖의 값을 점으로 따로 찍어 이상치 후보를 보여 줍니다.",
    "why": [
      "lineplot은 순서에 따른 변화를 보는 그래프입니다.",
      "countplot은 값의 개수를 세는 그래프라 이상치 판단 기준이 표시되지 않습니다.",
      "",
      "열 하나의 상관계수는 자기 자신과의 1뿐이라 이상치를 알 수 없습니다."
    ]
  },
  {
    "id": "viz-04",
    "unit": "viz",
    "freq": "high",
    "subject": 1,
    "topic": "상관관계",
    "q": "숫자 열들 사이의 상관계수를 색과 숫자로 함께 보여 주는 코드는?",
    "options": [
      "sns.heatmap(df, annot=True)",
      "sns.heatmap(df.corr(numeric_only=True), annot=True)",
      "sns.pairplot(df.corr(), annot=True)",
      "plt.plot(df.corr(), annot=True)"
    ],
    "answer": 2,
    "exp": "corr()로 상관계수 행렬을 만든 뒤 heatmap으로 칠합니다. annot=True면 칸마다 숫자가 적힙니다. 문자 열이 섞여 있으면 numeric_only=True로 숫자 열만 계산합니다.",
    "why": [
      "원본 데이터를 그대로 칠하면 상관계수가 아니라 각 칸의 값이 그려지고, 문자 열이 있으면 오류가 납니다.",
      "",
      "pairplot은 원본 데이터의 열 쌍마다 산점도를 그리는 함수이고 annot 인자가 없습니다.",
      "plt.plot은 선 그래프 함수라 행렬을 색으로 보여 주지 못하고 annot 인자도 없습니다."
    ]
  },
  {
    "id": "viz-05",
    "unit": "viz",
    "freq": "high",
    "subject": 1,
    "topic": "상관관계",
    "q": "상관계수에 대한 설명으로 옳은 것은?",
    "options": [
      "상관계수가 크면 한 변수가 다른 변수의 원인이다",
      "0이면 두 변수는 어떤 관계도 전혀 없다",
      "값의 범위는 0부터 1까지다",
      "-1에 가까울수록 한 값이 커질 때 다른 값은 작아지는 경향이 강하다"
    ],
    "answer": 4,
    "exp": "피어슨 상관계수는 -1~1 사이 값입니다. 1에 가까우면 함께 커지고, -1에 가까우면 반대로 움직이며, 0에 가까우면 직선 관계가 약합니다.",
    "why": [
      "상관은 함께 움직인다는 것일 뿐 원인과 결과를 뜻하지 않습니다.",
      "0은 직선(선형) 관계가 없다는 뜻일 뿐, 곡선 같은 다른 관계는 있을 수 있습니다.",
      "음수도 나옵니다. 범위는 -1부터 1까지입니다.",
      ""
    ]
  },
  {
    "id": "viz-06",
    "unit": "viz",
    "freq": "high",
    "subject": 1,
    "topic": "상관관계",
    "q": "다음 코드의 실행 결과는?",
    "code": "df = pd.DataFrame({'x': [1, 2, 3, 4], 'y': [8, 6, 4, 2]})\nprint(round(df['x'].corr(df['y']), 2))",
    "options": [
      "-1.0",
      "1.0",
      "0.0",
      "-0.5"
    ],
    "answer": 1,
    "exp": "x가 1 늘 때마다 y가 2씩 일정하게 줄어드는 직선(y = 10 - 2x) 관계라 상관계수는 -1입니다.",
    "why": [
      "",
      "x가 커질수록 y는 작아지므로 음의 상관입니다.",
      "완벽한 직선 관계라 0이 아니라 -1입니다.",
      "점이 한 직선 위에 모두 있으면 상관계수의 크기는 1입니다."
    ],
    "check": {
      "py": "df = pd.DataFrame({'x': [1, 2, 3, 4], 'y': [8, 6, 4, 2]})\nprint(round(df['x'].corr(df['y']), 2))"
    }
  },
  {
    "id": "viz-07",
    "unit": "viz",
    "freq": "mid",
    "subject": 1,
    "topic": "시본 그래프",
    "q": "'age'와 'income' 두 연속형 변수의 관계를 점으로 찍어 보는 그래프는?",
    "options": [
      "sns.countplot(data=df, x='age', hue='income')",
      "sns.scatterplot(data=df, x='age', y='income')",
      "sns.boxplot(data=df, x='age')",
      "sns.histplot(data=df, x='income')"
    ],
    "answer": 2,
    "exp": "산점도(scatterplot)는 두 연속형 변수를 x, y축에 놓고 행마다 점을 찍어 관계를 보여 줍니다.",
    "why": [
      "countplot은 개수를 세는 그래프이고, 연속형 income을 hue로 넣으면 색이 너무 많아집니다.",
      "",
      "boxplot은 한 변수의 분포를 보여 줄 뿐 두 변수의 관계를 보여 주지 않습니다.",
      "histplot은 한 변수의 분포만 보여 줍니다."
    ]
  },
  {
    "id": "viz-08",
    "unit": "viz",
    "freq": "mid",
    "subject": 1,
    "topic": "시본 그래프",
    "q": "countplot에서 이탈 여부(churn)별로 막대 색을 나눠 성별(gender) 막대를 그리는 인자는?",
    "options": [
      "sns.countplot(data=df, x='gender', hue='churn')",
      "sns.countplot(data=df, x='gender', color='churn')",
      "sns.countplot(data=df, x='gender', y='churn')",
      "sns.countplot(data=df, x='gender', col='churn')"
    ],
    "answer": 1,
    "exp": "hue는 다른 범주형 열 값에 따라 색을 나눠 그립니다. 성별마다 이탈/유지 막대가 나란히 그려집니다.",
    "why": [
      "",
      "color는 모든 막대에 쓸 색 하나를 지정하는 인자라 열 이름을 받지 않습니다.",
      "countplot에 x와 y를 동시에 주면 오류가 납니다. 개수가 y축이기 때문입니다.",
      "col은 그래프를 여러 칸으로 나누는 catplot의 인자로, countplot에는 없습니다."
    ]
  },
  {
    "id": "viz-09",
    "unit": "viz",
    "freq": "mid",
    "subject": 1,
    "topic": "그래프 해석",
    "q": "타깃 'churn'의 countplot을 그렸더니 0이 9,000건, 1이 1,000건이었습니다. 이 결과로 알 수 있는 것은?",
    "options": [
      "두 값의 차이가 크므로 churn 열은 모델 입력에서 빼야 한다",
      "1이 적으므로 1인 행을 모두 지워야 한다",
      "클래스가 불균형하므로 데이터를 나눌 때 stratify로 비율을 유지하는 것이 좋다",
      "정확도 90%면 매우 좋은 모델이다"
    ],
    "answer": 3,
    "exp": "한쪽 클래스가 훨씬 많은 불균형 데이터입니다. 학습·검증 데이터에도 같은 비율이 들어가도록 train_test_split에 stratify=y를 주고, 정확도 외에 재현율·F1도 봐야 합니다.",
    "why": [
      "churn은 예측할 타깃이라 원래 입력(X)에 넣지 않습니다. 불균형과는 관계없는 이야기입니다.",
      "1은 예측하려는 소수 클래스라 지우면 모델이 1을 배울 수 없습니다.",
      "",
      "모두 0이라고만 답해도 정확도가 90%라서 정확도만으로는 좋은 모델인지 알 수 없습니다."
    ]
  },
  {
    "id": "viz-10",
    "unit": "viz",
    "freq": "mid",
    "subject": 1,
    "topic": "그래프 해석",
    "q": "타깃이 연속형 'price'일 때, 각 입력 변수와 price의 관계를 빠르게 비교하는 방법으로 가장 알맞은 것은?",
    "options": [
      "df.head()로 처음 5행을 본다",
      "sns.countplot(data=df, x='price')로 개수를 본다",
      "df['price'].value_counts()로 값마다 개수를 센다",
      "df.corr(numeric_only=True)['price']로 상관계수를 정렬해 본다"
    ],
    "answer": 4,
    "exp": "타깃과의 상관계수 열을 뽑아 sort_values로 정렬하면 어떤 변수가 price와 강하게 관련되는지 한 번에 비교할 수 있습니다.",
    "why": [
      "5행만으로 변수 사이의 관계를 판단할 수 없습니다.",
      "연속형 price를 countplot으로 그리면 값마다 막대가 생겨 의미 있는 비교가 어렵고, 다른 변수와의 관계도 보이지 않습니다.",
      "price 자체의 값 분포만 알 뿐 다른 변수와의 관계는 알 수 없습니다.",
      ""
    ]
  },
  {
    "id": "viz-11",
    "unit": "viz",
    "freq": "mid",
    "subject": 1,
    "topic": "그래프 꾸미기",
    "q": "matplotlib 그래프에 제목을 달고 화면에 보여 주는 코드는?",
    "options": [
      "plt.label('나이 분포'); plt.display()",
      "plt.name('나이 분포'); plt.show()",
      "plt.title = '나이 분포'; plt.show()",
      "plt.title('나이 분포'); plt.show()"
    ],
    "answer": 4,
    "exp": "plt.title()로 제목을, plt.xlabel()·plt.ylabel()로 축 이름을 달고 plt.show()로 그립니다.",
    "why": [
      "plt.label이나 plt.display라는 함수는 없습니다. 축 이름은 xlabel, ylabel입니다.",
      "plt에 name이라는 함수는 없습니다.",
      "plt.title을 문자열로 덮어써 버려서 이후 plt.title() 함수를 쓸 수 없게 됩니다.",
      ""
    ]
  },
  {
    "id": "viz-12",
    "unit": "viz",
    "freq": "low",
    "subject": 1,
    "topic": "시본 그래프",
    "q": "여러 숫자 열의 쌍마다 산점도를, 대각선에는 각 열의 분포를 한꺼번에 그려 주는 시본 함수는?",
    "options": [
      "sns.heatmap(df)",
      "sns.pairplot(df)",
      "sns.jointplot(df)",
      "sns.countplot(df)"
    ],
    "answer": 2,
    "exp": "pairplot은 숫자 열들의 모든 쌍에 대해 산점도 행렬을 그립니다. 열이 많으면 오래 걸리므로 필요한 열만 골라 넣습니다.",
    "why": [
      "heatmap은 표의 값을 색으로 칠할 뿐 산점도를 그리지 않습니다.",
      "",
      "jointplot은 x, y 두 열 한 쌍만 산점도와 분포로 그립니다.",
      "countplot은 한 범주형 열의 개수를 세는 막대그래프입니다."
    ]
  },
  {
    "id": "t01-1",
    "trap": "t01",
    "unit": "pick",
    "freq": "high",
    "subject": 1,
    "topic": "loc와 iloc",
    "q": "다음 코드의 실행 결과는?",
    "code": "df = pd.DataFrame({'v': [10, 20, 30, 40, 50]}, index=[0, 1, 2, 3, 4])\nprint(df.loc[1:3, 'v'].tolist(), df.iloc[1:3, 0].tolist())",
    "options": [
      "[20, 30, 40] [20, 30]",
      "[20, 30] [20, 30]",
      "[20, 30, 40] [20, 30, 40]",
      "[20, 30] [20, 30, 40]"
    ],
    "answer": 1,
    "exp": "loc[1:3]은 라벨 1~3을 끝까지 포함해 3개, iloc[1:3]은 위치 1~2만 가져와 2개입니다.",
    "why": [
      "",
      "loc는 끝 라벨 3까지 포함하므로 40도 나옵니다.",
      "iloc는 파이썬 슬라이스처럼 끝 위치 3을 빼므로 40이 빠집니다.",
      "둘의 결과가 서로 바뀌었습니다."
    ],
    "check": {
      "py": "df = pd.DataFrame({'v': [10, 20, 30, 40, 50]}, index=[0, 1, 2, 3, 4])\nprint(df.loc[1:3, 'v'].tolist(), df.iloc[1:3, 0].tolist())"
    }
  },
  {
    "id": "t01-2",
    "trap": "t01",
    "unit": "pick",
    "freq": "high",
    "subject": 1,
    "topic": "loc와 iloc",
    "q": "인덱스가 0부터 시작하는 df에서 처음 3행을 가져오는 코드가 아닌 것은?",
    "options": [
      "df.head(3)",
      "df.iloc[0:3]",
      "df.loc[0:3]",
      "df.loc[0:2]"
    ],
    "answer": 3,
    "exp": "loc[0:3]은 끝 라벨 3을 포함해 0, 1, 2, 3으로 4행을 가져옵니다.",
    "why": [
      "앞에서 3행을 보여 줍니다.",
      "위치 0, 1, 2를 가져와 처음 3행입니다.",
      "",
      "라벨 0~2를 끝까지 포함하므로 처음 3행입니다."
    ]
  },
  {
    "id": "t02-1",
    "trap": "t02",
    "unit": "clean",
    "freq": "high",
    "subject": 1,
    "topic": "대입",
    "q": "다음 코드의 실행 결과는?",
    "code": "df = pd.DataFrame({'id': [1, 2], 'x': [3, 4]})\ndf.drop('id', axis=1)\nprint(df.shape[1])",
    "options": [
      "1",
      "2",
      "None",
      "오류"
    ],
    "answer": 2,
    "exp": "drop은 바뀐 새 데이터프레임을 돌려줄 뿐 대입하지 않으면 df는 그대로라 열이 2개입니다.",
    "why": [
      "결과를 df에 다시 넣지 않아 id 열이 남아 있습니다.",
      "",
      "inplace=True를 쓰지도 대입하지도 않았으므로 df는 그대로 데이터프레임입니다.",
      "id 열이 있고 axis=1을 줬으므로 drop 자체는 오류 없이 실행됩니다."
    ],
    "check": {
      "py": "df = pd.DataFrame({'id': [1, 2], 'x': [3, 4]})\ndf.drop('id', axis=1)\nprint(df.shape[1])"
    }
  },
  {
    "id": "t02-2",
    "trap": "t02",
    "unit": "clean",
    "freq": "high",
    "subject": 1,
    "topic": "대입",
    "q": "다음 코드를 실행한 뒤 print(df)의 결과는?",
    "code": "df = pd.DataFrame({'a': [1, None, 3]})\ndf = df.dropna(inplace=True)\nprint(df)",
    "options": [
      "빈 데이터프레임",
      "결측 행이 지워진 데이터프레임",
      "원래 데이터프레임 그대로",
      "None"
    ],
    "answer": 4,
    "exp": "inplace=True면 원본을 바꾸고 None을 돌려줍니다. 그 None을 df에 대입했으므로 df는 None이 됩니다.",
    "why": [
      "빈 데이터프레임이 아니라 None 값 자체입니다.",
      "inplace=True의 반환값 None을 대입해서 데이터프레임이 사라졌습니다.",
      "df 이름에 None이 들어가 원래 데이터프레임도 볼 수 없습니다.",
      ""
    ],
    "check": {
      "py": "df = pd.DataFrame({'a': [1, None, 3]})\ndf = df.dropna(inplace=True)\nprint(df)"
    }
  },
  {
    "id": "t03-1",
    "trap": "t03",
    "unit": "clean",
    "freq": "high",
    "subject": 1,
    "topic": "drop과 axis",
    "q": "다음 코드의 실행 결과는?",
    "code": "df = pd.DataFrame({'id': [1, 2], 'x': [3, 4]})\ntry:\n    print(list(df.drop('id').columns))\nexcept KeyError:\n    print('KeyError')",
    "options": [
      "[]",
      "['x']",
      "['id', 'x']",
      "KeyError"
    ],
    "answer": 4,
    "exp": "axis를 주지 않으면 행 인덱스에서 'id'를 찾습니다. 인덱스는 0, 1뿐이라 KeyError가 납니다.",
    "why": [
      "열이 모두 지워지는 코드가 아닙니다.",
      "열을 지우려면 axis=1이 필요합니다. 기본은 행입니다.",
      "오류가 나서 결과가 출력되지 않습니다.",
      ""
    ],
    "check": {
      "py": "df = pd.DataFrame({'id': [1, 2], 'x': [3, 4]})\ntry:\n    print(list(df.drop('id').columns))\nexcept KeyError:\n    print('KeyError')"
    }
  },
  {
    "id": "t03-2",
    "trap": "t03",
    "unit": "clean",
    "freq": "mid",
    "subject": 1,
    "topic": "dropna와 axis",
    "q": "다음 코드의 실행 결과는?",
    "code": "df = pd.DataFrame({'a': [1, None], 'b': [3, 4]})\nprint(list(df.dropna(axis=1).columns))",
    "options": [
      "['a', 'b']",
      "['b']",
      "['a']",
      "[]"
    ],
    "answer": 2,
    "exp": "axis=1이면 결측이 있는 행이 아니라 열을 지웁니다. a 열에 NaN이 있어 a가 지워지고 b만 남습니다.",
    "why": [
      "a 열에 결측이 있어 지워집니다.",
      "",
      "결측이 있는 a 열이 지워지고 결측이 없는 b가 남습니다.",
      "b 열은 결측이 없어 남습니다."
    ],
    "check": {
      "py": "df = pd.DataFrame({'a': [1, None], 'b': [3, 4]})\nprint(list(df.dropna(axis=1).columns))"
    }
  },
  {
    "id": "t04-1",
    "trap": "t04",
    "unit": "pick",
    "freq": "high",
    "subject": 1,
    "topic": "조건 필터",
    "q": "다음 중 오류 없이 '나이 20 이상이고 소득 300 이상'인 행을 고르는 코드는?",
    "options": [
      "df[(df['age'] >= 20) & (df['income'] >= 300)]",
      "df[(df['age'] >= 20) and (df['income'] >= 300)]",
      "df[df['age'] >= 20 & df['income'] >= 300]",
      "df[df['age'] >= 20, df['income'] >= 300]"
    ],
    "answer": 1,
    "exp": "조건마다 괄호로 감싸고 &로 잇습니다.",
    "why": [
      "",
      "and는 Series 전체를 참·거짓 하나로 판단하려 해서 ValueError가 납니다.",
      "&가 >=보다 먼저 계산되어 20 & df['income']이 먼저 묶이므로 의도와 다른 비교가 되거나 오류가 납니다.",
      "쉼표로 나열하면 튜플 키로 열을 찾게 되어 오류가 납니다."
    ]
  },
  {
    "id": "t04-2",
    "trap": "t04",
    "unit": "pick",
    "freq": "high",
    "subject": 1,
    "topic": "조건 필터",
    "q": "다음 코드의 실행 결과는?",
    "code": "df = pd.DataFrame({'age': [15, 30, 55, 60]})\nprint(len(df[(df['age'] < 20) | (df['age'] > 50)]))",
    "options": [
      "4",
      "1",
      "3",
      "2"
    ],
    "answer": 3,
    "exp": "|는 '또는'입니다. 나이 20 미만(15) 또는 50 초과(55, 60)인 행은 3개입니다.",
    "why": [
      "30은 두 조건 모두 해당하지 않습니다.",
      "두 조건을 모두 만족하는 행은 없습니다. |는 하나만 만족해도 됩니다.",
      "",
      "55와 60 모두 50을 넘습니다."
    ],
    "check": {
      "py": "df = pd.DataFrame({'age': [15, 30, 55, 60]})\nprint(len(df[(df['age'] < 20) | (df['age'] > 50)]))"
    }
  },
  {
    "id": "t05-1",
    "trap": "t05",
    "unit": "load",
    "freq": "high",
    "subject": 1,
    "topic": "값 세기",
    "q": "다음 코드의 실행 결과는?",
    "code": "s = pd.Series(['a', 'b', None, 'a', 'c'])\nprint(s.count(), len(s))",
    "options": [
      "5 5",
      "4 5",
      "4 4",
      "5 4"
    ],
    "answer": 2,
    "exp": "count()는 결측이 아닌 값 4개를 세고, len은 결측을 포함한 전체 길이 5입니다.",
    "why": [
      "count()는 None을 세지 않아 4입니다.",
      "",
      "len은 결측까지 포함한 전체 길이라 5입니다.",
      "두 값의 순서가 바뀌었습니다."
    ],
    "check": {
      "py": "s = pd.Series(['a', 'b', None, 'a', 'c'])\nprint(s.count(), len(s))"
    }
  },
  {
    "id": "t05-2",
    "trap": "t05",
    "unit": "load",
    "freq": "mid",
    "subject": 1,
    "topic": "값 세기",
    "q": "다음 코드의 실행 결과는?",
    "code": "s = pd.Series(['a', 'b', None, 'a', 'c'])\nprint(len(s.value_counts()))",
    "options": [
      "5",
      "4",
      "2",
      "3"
    ],
    "answer": 4,
    "exp": "value_counts()는 기본으로 NaN을 빼고 세므로 a, b, c 세 종류의 개수만 나옵니다.",
    "why": [
      "전체 원소 개수입니다. value_counts는 종류별로 한 줄씩입니다.",
      "NaN까지 세려면 dropna=False를 줘야 합니다.",
      "a는 두 번 나왔지만 한 줄로 셉니다. 종류는 a, b, c 3개입니다.",
      ""
    ],
    "check": {
      "py": "s = pd.Series(['a', 'b', None, 'a', 'c'])\nprint(len(s.value_counts()))"
    }
  },
  {
    "id": "t06-1",
    "trap": "t06",
    "unit": "clean",
    "freq": "high",
    "subject": 1,
    "topic": "결측치와 평균",
    "q": "다음 코드의 실행 결과는?",
    "code": "s = pd.Series([10, None, 30, None])\nprint(s.mean())",
    "options": [
      "20.0",
      "13.33",
      "10.0",
      "nan"
    ],
    "answer": 1,
    "exp": "mean()은 NaN을 건너뛰고 10, 30의 평균 20.0을 구합니다.",
    "why": [
      "",
      "합계 40을 3으로 나눈 값입니다. mean은 결측 두 개를 모두 빼고 남은 두 값으로 나눕니다.",
      "결측을 0으로 채우고 4개로 나눈 값입니다. mean은 결측을 개수에서도 뺍니다.",
      "판다스 mean은 기본값 skipna=True라 NaN이 있어도 계산합니다."
    ],
    "check": {
      "py": "s = pd.Series([10, None, 30, None])\nprint(s.mean())"
    }
  },
  {
    "id": "t06-2",
    "trap": "t06",
    "unit": "clean",
    "freq": "mid",
    "subject": 1,
    "topic": "결측치와 평균",
    "q": "다음 코드의 실행 결과는?",
    "code": "s = pd.Series([10, None, 30, None])\nprint(s.fillna(0).mean())",
    "options": [
      "13.33",
      "20.0",
      "10.0",
      "nan"
    ],
    "answer": 3,
    "exp": "fillna(0)로 결측을 0으로 바꾼 뒤 평균을 내면 (10 + 0 + 30 + 0) ÷ 4 = 10.0입니다. 결측을 0으로 채우면 평균이 낮아집니다.",
    "why": [
      "4개 값의 합 40을 3으로 나눈 값입니다.",
      "0으로 채우지 않았을 때의 평균입니다.",
      "",
      "결측이 0으로 채워졌으므로 계산이 됩니다."
    ],
    "check": {
      "py": "s = pd.Series([10, None, 30, None])\nprint(s.fillna(0).mean())"
    }
  },
  {
    "id": "t07-1",
    "trap": "t07",
    "unit": "clean",
    "freq": "high",
    "subject": 1,
    "topic": "최빈값",
    "q": "다음 코드의 실행 결과는?",
    "code": "s = pd.Series(['A', None, 'B', 'B'])\nprint(s.fillna(s.mode()[0]).tolist())",
    "options": [
      "['A', None, 'B', 'B']",
      "['A', 'B', 'B', 'B']",
      "['A', 'A', 'B', 'B']",
      "오류"
    ],
    "answer": 2,
    "exp": "mode()는 Series를 돌려주고, [0]으로 꺼낸 첫 최빈값 'B'로 결측을 채웁니다.",
    "why": [
      "mode()[0]은 값 하나라서 결측이 그 값으로 채워집니다.",
      "",
      "바로 앞 값으로 채우는 ffill()의 결과입니다. 최빈값은 두 번 나온 'B'입니다.",
      "mode()[0]으로 값 하나를 꺼냈으므로 오류 없이 채워집니다."
    ],
    "check": {
      "py": "s = pd.Series(['A', None, 'B', 'B'])\nprint(s.fillna(s.mode()[0]).tolist())"
    }
  },
  {
    "id": "t07-2",
    "trap": "t07",
    "unit": "clean",
    "freq": "mid",
    "subject": 1,
    "topic": "최빈값",
    "q": "범주형 열의 결측치를 최빈값으로 채우는 코드로 옳은 것은?",
    "options": [
      "df['c'] = df['c'].fillna(df['c'].value_counts())",
      "df['c'] = df['c'].fillna(df['c'].mode)",
      "df['c'] = df['c'].fillna(df['c'].mode()[0])",
      "df['c'] = df['c'].fillna(df['c'].mean())"
    ],
    "answer": 3,
    "exp": "mode()는 Series를 돌려주므로 [0]으로 값 하나를 꺼내 넣습니다.",
    "why": [
      "value_counts()는 값별 개수 Series라 인덱스(값 이름)와 행 번호가 맞지 않아 채워지지 않습니다.",
      "괄호 없이 쓴 mode는 함수 자체라, 오류 없이 그 함수 객체가 결측 칸에 값으로 들어가 버립니다. mode()[0]처럼 호출해서 값을 꺼내야 합니다.",
      "",
      "문자 범주에는 평균을 구할 수 없습니다."
    ]
  },
  {
    "id": "t08-1",
    "trap": "t08",
    "unit": "prep",
    "freq": "high",
    "subject": 1,
    "topic": "원-핫 인코딩",
    "q": "다음 코드의 실행 결과는?",
    "code": "df = pd.DataFrame({'grade': [1, 2, 3], 'city': ['서울', '부산', '서울']})\nprint(list(pd.get_dummies(df).columns))",
    "options": [
      "['grade', 'city_부산', 'city_서울']",
      "['grade_1', 'grade_2', 'grade_3', 'city_부산', 'city_서울']",
      "['grade', 'city']",
      "['city_부산', 'city_서울']"
    ],
    "answer": 1,
    "exp": "columns를 주지 않으면 문자 열(city)만 원-핫으로 바뀌고 숫자 열(grade)은 그대로 남습니다.",
    "why": [
      "",
      "숫자 열 grade까지 바꾸려면 columns=['grade', 'city']처럼 직접 지정해야 합니다.",
      "문자 열 city는 원-핫 열로 바뀝니다.",
      "숫자 열 grade는 지워지지 않고 그대로 남습니다."
    ],
    "check": {
      "py": "df = pd.DataFrame({'grade': [1, 2, 3], 'city': ['서울', '부산', '서울']})\nprint(list(pd.get_dummies(df).columns))"
    }
  },
  {
    "id": "t08-2",
    "trap": "t08",
    "unit": "prep",
    "freq": "mid",
    "subject": 1,
    "topic": "원-핫 인코딩",
    "q": "숫자 1, 2, 3으로 저장된 범주 열 'grade'도 원-핫 인코딩하려면?",
    "options": [
      "df['grade'].astype(float)",
      "pd.get_dummies(df)",
      "pd.get_dummies(df, drop_first=True)",
      "pd.get_dummies(df, columns=['grade'])"
    ],
    "answer": 4,
    "exp": "숫자 열은 자동으로 바뀌지 않으므로 columns에 직접 적거나, 먼저 문자열로 바꾼 뒤 get_dummies를 씁니다.",
    "why": [
      "실수형으로 바꾸면 여전히 숫자 하나짜리 열입니다.",
      "columns를 주지 않으면 숫자 열 grade는 그대로 남습니다.",
      "drop_first는 첫 범주 열을 뺄지 정할 뿐 숫자 열을 대상으로 만들지 않습니다.",
      ""
    ]
  },
  {
    "id": "t09-1",
    "trap": "t09",
    "unit": "prep",
    "freq": "high",
    "subject": 1,
    "topic": "데이터 분리",
    "q": "다음 코드의 실행 결과는?",
    "code": "import numpy as np\nfrom sklearn.model_selection import train_test_split\nX = np.zeros((100, 3)); y = np.zeros(100)\nr = train_test_split(X, y, test_size=0.2, random_state=1)\nprint(*[a.shape for a in r])",
    "options": [
      "(80, 3) (80,) (20, 3) (20,)",
      "(80, 3) (20, 3) (80,) (20,)",
      "(75, 3) (25, 3) (75,) (25,)",
      "(20, 3) (80, 3) (20,) (80,)"
    ],
    "answer": 2,
    "exp": "반환 순서는 X_train, X_test, y_train, y_test입니다. test_size=0.2라 100개가 80 : 20으로 나뉩니다.",
    "why": [
      "X를 먼저 학습·검증으로 돌려주고, 그다음 y를 돌려줍니다.",
      "",
      "test_size를 생략했을 때(기본 0.25)의 결과입니다.",
      "학습용이 먼저 나옵니다."
    ],
    "check": {
      "py": "import numpy as np\nfrom sklearn.model_selection import train_test_split\nX = np.zeros((100, 3)); y = np.zeros(100)\nr = train_test_split(X, y, test_size=0.2, random_state=1)\nprint(*[a.shape for a in r])"
    }
  },
  {
    "id": "t09-2",
    "trap": "t09",
    "unit": "prep",
    "freq": "mid",
    "subject": 1,
    "topic": "데이터 분리",
    "q": "X_train, y_train, X_test, y_test = train_test_split(X, y, test_size=0.2)로 받으면 어떻게 되나요?",
    "options": [
      "y_test에 학습용 y가 들어갈 뿐 문제가 없다",
      "자동으로 순서를 맞춰 준다",
      "바로 오류가 나서 실행되지 않는다",
      "오류 없이 실행되지만 y_train에 검증용 X가 들어가 학습이 잘못된다"
    ],
    "answer": 4,
    "exp": "함수는 X_train, X_test, y_train, y_test 순서로 돌려주고, 변수 이름은 보지 않습니다. 이름이 어긋나면 y_train에 X_test가 들어가 이후 학습에서 모양 오류가 나거나 엉뚱하게 학습됩니다.",
    "why": [
      "y_test에는 y_test가 맞게 들어가지만 가운데 두 변수가 서로 바뀌었습니다.",
      "판다스나 사이킷런은 변수 이름을 보고 순서를 바꿔 주지 않습니다.",
      "네 개를 돌려주고 네 변수로 받으므로 그 줄 자체는 오류가 나지 않습니다.",
      ""
    ]
  },
  {
    "id": "t10-1",
    "trap": "t10",
    "unit": "prep",
    "freq": "high",
    "subject": 1,
    "topic": "데이터 분리",
    "q": "다음 코드의 실행 결과는?",
    "code": "import numpy as np\nfrom sklearn.model_selection import train_test_split\nX = np.arange(16).reshape(16, 1)\ny = np.array([0] * 8 + [1] * 8)\na, b, c, d = train_test_split(X, y, test_size=4, stratify=y, random_state=0)\nprint((d == 0).sum(), (d == 1).sum())",
    "options": [
      "2 2",
      "4 0",
      "3 1",
      "0 4"
    ],
    "answer": 1,
    "exp": "stratify=y면 원본의 0 : 1 = 1 : 1 비율이 검증 데이터에도 유지되어 4개 중 0과 1이 2개씩입니다.",
    "why": [
      "",
      "한쪽 클래스만 몰리는 것을 막는 것이 stratify입니다.",
      "원본 비율이 반반이라 검증 데이터도 반반입니다.",
      "1만 모이는 일도 stratify가 막습니다."
    ],
    "check": {
      "py": "import numpy as np\nfrom sklearn.model_selection import train_test_split\nX = np.arange(16).reshape(16, 1)\ny = np.array([0] * 8 + [1] * 8)\na, b, c, d = train_test_split(X, y, test_size=4, stratify=y, random_state=0)\nprint((d == 0).sum(), (d == 1).sum())"
    }
  },
  {
    "id": "t10-2",
    "trap": "t10",
    "unit": "prep",
    "freq": "mid",
    "subject": 1,
    "topic": "데이터 분리",
    "q": "train_test_split을 실행할 때마다 같은 데이터로 나뉘게 하려면 어떤 인자를 고정해야 하나요?",
    "options": [
      "test_size",
      "stratify",
      "random_state",
      "shuffle"
    ],
    "answer": 3,
    "exp": "random_state에 정수를 주면 섞는 방식이 고정되어 매번 같은 결과가 나옵니다.",
    "why": [
      "test_size는 나누는 비율만 정합니다.",
      "stratify는 클래스 비율을 유지할 뿐, 어떤 행이 뽑힐지는 매번 달라집니다.",
      "",
      "shuffle=False로 섞지 않으면 순서대로 잘려 같아지기는 하지만, 데이터가 정렬되어 있으면 한쪽으로 치우칩니다. 재현용으로는 random_state를 씁니다."
    ]
  },
  {
    "id": "t11-1",
    "trap": "t11",
    "unit": "prep",
    "freq": "high",
    "subject": 1,
    "topic": "스케일링",
    "q": "다음 코드의 실행 결과는?",
    "code": "from sklearn.preprocessing import MinMaxScaler\nsc = MinMaxScaler()\nsc.fit_transform([[0], [5], [10]])\nprint(sc.transform([[20]]).ravel().tolist())",
    "options": [
      "[2.0]",
      "[1.0]",
      "[0.0]",
      "[0.5]"
    ],
    "answer": 1,
    "exp": "스케일러는 학습 데이터(0~10)로 기준을 정했으므로 검증 값 20은 (20 - 0) ÷ (10 - 0) = 2.0이 됩니다. 검증 값은 0~1을 벗어날 수 있고, 이것이 정상입니다.",
    "why": [
      "",
      "검증 데이터로 다시 fit했을 때처럼 최댓값을 1로 맞춘 결과입니다. transform만 했으므로 학습 기준이 쓰입니다.",
      "검증 데이터만으로 fit하면 값이 하나뿐이라 0이 됩니다. 그렇게 하면 안 됩니다.",
      "20을 0~20 범위의 중간처럼 계산한 값입니다. 기준은 학습 데이터의 0~10입니다."
    ],
    "check": {
      "py": "from sklearn.preprocessing import MinMaxScaler\nsc = MinMaxScaler()\nsc.fit_transform([[0], [5], [10]])\nprint(sc.transform([[20]]).ravel().tolist())"
    }
  },
  {
    "id": "t11-2",
    "trap": "t11",
    "unit": "prep",
    "freq": "high",
    "subject": 1,
    "topic": "스케일링",
    "q": "스케일링 코드에서 잘못된 줄은?",
    "code": "from sklearn.preprocessing import StandardScaler\nsc = StandardScaler()\nX_train = sc.fit_transform(X_train)\nX_test = sc.fit_transform(X_test)",
    "options": [
      "X_train = sc.fit_transform(X_train)",
      "sc = StandardScaler()",
      "X_test = sc.fit_transform(X_test)",
      "from sklearn.preprocessing import StandardScaler"
    ],
    "answer": 3,
    "exp": "검증 데이터에는 transform만 써야 합니다. 다시 fit하면 검증 데이터의 평균·표준편차로 기준이 바뀝니다.",
    "why": [
      "학습 데이터로 기준을 정하고 변환하는 올바른 줄입니다.",
      "스케일러 객체를 만드는 올바른 줄입니다.",
      "",
      "StandardScaler를 불러오는 올바른 줄입니다."
    ]
  },
  {
    "id": "t12-1",
    "trap": "t12",
    "unit": "ml",
    "freq": "high",
    "subject": 2,
    "topic": "분류와 회귀",
    "q": "다음 중 분류 모델이 아닌 것은?",
    "options": [
      "LogisticRegression",
      "LinearRegression",
      "DecisionTreeClassifier",
      "KNeighborsClassifier"
    ],
    "answer": 2,
    "exp": "LinearRegression은 연속값을 예측하는 회귀 모델입니다. LogisticRegression은 이름과 달리 분류 모델입니다.",
    "why": [
      "로지스틱 회귀는 클래스 확률을 계산하는 분류 모델입니다.",
      "",
      "Classifier가 붙은 분류 모델입니다.",
      "Classifier가 붙은 분류 모델입니다."
    ]
  },
  {
    "id": "t12-2",
    "trap": "t12",
    "unit": "ml",
    "freq": "high",
    "subject": 2,
    "topic": "분류와 회귀",
    "q": "다음 코드의 실행 결과는?",
    "code": "from sklearn.linear_model import LogisticRegression\nX = [[1], [2], [8], [9]]\ny = [0, 0, 1, 1]\nm = LogisticRegression().fit(X, y)\nprint(m.predict(X).tolist())",
    "options": [
      "[1, 1, 0, 0]",
      "[0.0, 0.33, 0.67, 1.0]",
      "[0.1, 0.2, 0.8, 0.9]",
      "[0, 0, 1, 1]"
    ],
    "answer": 4,
    "exp": "LogisticRegression은 분류 모델이라 predict가 클래스(0 또는 1)를 돌려줍니다. 확률은 predict_proba로 얻습니다.",
    "why": [
      "작은 x는 0, 큰 x는 1로 학습되었으므로 반대가 아닙니다.",
      "연속값이 아니라 클래스 라벨이 나옵니다.",
      "확률이 아니라 클래스가 나옵니다. 확률은 predict_proba입니다.",
      ""
    ],
    "check": {
      "py": "from sklearn.linear_model import LogisticRegression\nm = LogisticRegression().fit([[1], [2], [8], [9]], [0, 0, 1, 1])\nprint(m.predict([[1], [2], [8], [9]]).tolist())"
    }
  },
  {
    "id": "t13-1",
    "trap": "t13",
    "unit": "eval",
    "freq": "high",
    "subject": 2,
    "topic": "정확도의 함정",
    "q": "다음 코드의 실행 결과는?",
    "code": "from sklearn.metrics import accuracy_score, recall_score\ny_true = [0] * 95 + [1] * 5\ny_pred = [0] * 100\nprint(accuracy_score(y_true, y_pred), recall_score(y_true, y_pred))",
    "options": [
      "0.05 0.0",
      "0.95 0.95",
      "0.95 0.0",
      "1.0 0.0"
    ],
    "answer": 3,
    "exp": "모두 0으로 예측해도 100개 중 95개를 맞혀 정확도는 0.95지만, 실제 1인 5개를 하나도 찾지 못해 재현율은 0입니다.",
    "why": [
      "0인 95개를 맞혔으므로 정확도는 높습니다.",
      "재현율은 실제 1 중 찾아낸 비율이라 0입니다.",
      "",
      "1인 5개를 틀렸으므로 정확도가 1.0이 아닙니다."
    ],
    "check": {
      "py": "from sklearn.metrics import accuracy_score, recall_score\ny_true = [0] * 95 + [1] * 5\ny_pred = [0] * 100\nprint(accuracy_score(y_true, y_pred), recall_score(y_true, y_pred, zero_division=0))"
    }
  },
  {
    "id": "t13-2",
    "trap": "t13",
    "unit": "eval",
    "freq": "mid",
    "subject": 2,
    "topic": "정확도의 함정",
    "q": "사기 거래가 1%뿐인 데이터로 만든 모델의 정확도가 99%입니다. 가장 알맞은 판단은?",
    "options": [
      "정확도 99%면 사기를 거의 다 잡는 모델이다",
      "모두 정상이라고만 해도 99%이므로 재현율과 F1을 확인해야 한다",
      "정확도가 높으니 과대적합이다",
      "검증 데이터가 너무 많다는 뜻이다"
    ],
    "answer": 2,
    "exp": "불균형 데이터에서는 다수 클래스만 말해도 정확도가 높게 나옵니다. 소수 클래스를 얼마나 찾는지(재현율)와 F1을 봐야 합니다.",
    "why": [
      "정확도만으로는 사기를 하나라도 잡는지 알 수 없습니다.",
      "",
      "과대적합은 학습과 검증 성능의 차이로 판단합니다.",
      "검증 데이터의 양과는 관계없는 이야기입니다."
    ]
  },
  {
    "id": "t14-1",
    "trap": "t14",
    "unit": "eval",
    "freq": "high",
    "subject": 2,
    "topic": "오차 행렬",
    "q": "confusion_matrix(y_true, y_pred)가 [[50, 10], [5, 35]]일 때 FN(실제 1인데 0으로 예측)은?",
    "options": [
      "50",
      "10",
      "35",
      "5"
    ],
    "answer": 4,
    "exp": "행이 실제, 열이 예측이므로 [[TN, FP], [FN, TP]]입니다. 두 번째 행 첫 칸 5가 FN입니다.",
    "why": [
      "50은 실제 0을 0으로 맞힌 TN입니다.",
      "10은 실제 0인데 1로 예측한 FP입니다.",
      "35는 실제 1을 1로 맞힌 TP입니다.",
      ""
    ]
  },
  {
    "id": "t14-2",
    "trap": "t14",
    "unit": "eval",
    "freq": "mid",
    "subject": 2,
    "topic": "오차 행렬",
    "q": "다음 코드의 실행 결과는?",
    "code": "from sklearn.metrics import confusion_matrix\ny_true = [0, 0, 1, 1]\ny_pred = [0, 0, 0, 1]\nprint(confusion_matrix(y_true, y_pred).tolist())",
    "options": [
      "[[2, 0], [1, 1]]",
      "[[2, 1], [0, 1]]",
      "[[1, 1], [0, 2]]",
      "[[1, 0], [1, 2]]"
    ],
    "answer": 1,
    "exp": "실제 0인 두 개는 모두 0으로 맞혀 첫 행이 [2, 0], 실제 1인 두 개 중 하나는 0, 하나는 1로 예측해 둘째 행이 [1, 1]입니다.",
    "why": [
      "",
      "행과 열을 바꿔 읽은 결과입니다. 사이킷런은 행이 실제입니다.",
      "클래스 순서는 0, 1입니다. 0이 첫 행입니다.",
      "맞힌 개수(대각선)는 2와 1입니다."
    ],
    "check": {
      "py": "from sklearn.metrics import confusion_matrix\nprint(confusion_matrix([0, 0, 1, 1], [0, 0, 0, 1]).tolist())"
    }
  },
  {
    "id": "t15-1",
    "trap": "t15",
    "unit": "eval",
    "freq": "high",
    "subject": 2,
    "topic": "정밀도와 재현율",
    "q": "TP=30, FP=10, FN=20일 때 정밀도와 재현율은?",
    "options": [
      "정밀도 0.75, 재현율 0.6",
      "정밀도 0.6, 재현율 0.75",
      "정밀도 0.75, 재현율 0.75",
      "정밀도 0.6, 재현율 0.6"
    ],
    "answer": 1,
    "exp": "정밀도 = 30 ÷ (30 + 10) = 0.75, 재현율 = 30 ÷ (30 + 20) = 0.6입니다.",
    "why": [
      "",
      "두 값이 바뀌었습니다. 정밀도는 FP, 재현율은 FN을 씁니다.",
      "재현율은 FN 20을 넣어 30 ÷ 50 = 0.6입니다.",
      "정밀도는 FP 10을 넣어 30 ÷ 40 = 0.75입니다."
    ],
    "check": {
      "py": "from sklearn.metrics import precision_score, recall_score\ny_true = [1] * 30 + [0] * 10 + [1] * 20\ny_pred = [1] * 30 + [1] * 10 + [0] * 20\nprint(f'정밀도 {precision_score(y_true, y_pred):g}, 재현율 {recall_score(y_true, y_pred):g}')"
    }
  },
  {
    "id": "t15-2",
    "trap": "t15",
    "unit": "eval",
    "freq": "mid",
    "subject": 2,
    "topic": "정밀도와 재현율",
    "q": "정상 메일을 스팸으로 잘못 막으면 큰 손해인 스팸 필터에서 특히 높여야 하는 지표는?",
    "options": [
      "재현율",
      "정밀도",
      "특이도를 낮춘 값",
      "MSE"
    ],
    "answer": 2,
    "exp": "스팸이라고 예측한 것 중 진짜 스팸의 비율(정밀도)이 높아야 정상 메일을 잘못 막는 FP가 줄어듭니다.",
    "why": [
      "재현율은 스팸을 놓치는 FN을 줄일 때 중요합니다.",
      "",
      "특이도는 정상을 정상으로 맞히는 비율이라 낮추면 정상 메일을 더 막게 됩니다.",
      "MSE는 회귀 지표입니다."
    ]
  },
  {
    "id": "t16-1",
    "trap": "t16",
    "unit": "dl",
    "freq": "high",
    "subject": 2,
    "topic": "출력층",
    "q": "다음 중 출력층과 손실 함수의 짝이 잘못된 것은?",
    "options": [
      "회귀: Dense(1)과 mse",
      "이진 분류: Dense(1, activation='sigmoid')와 binary_crossentropy",
      "다중 분류(5개 클래스): Dense(1, activation='softmax')와 sparse_categorical_crossentropy",
      "다중 분류(5개 클래스): Dense(5, activation='softmax')와 categorical_crossentropy(원-핫 라벨)"
    ],
    "answer": 3,
    "exp": "다중 분류는 클래스 수만큼 뉴런을 둬야 합니다. 뉴런 1개에 softmax를 쓰면 출력이 항상 1입니다.",
    "why": [
      "회귀의 올바른 짝입니다.",
      "이진 분류의 올바른 짝입니다.",
      "",
      "라벨이 원-핫이면 categorical_crossentropy가 맞습니다."
    ]
  },
  {
    "id": "t16-2",
    "trap": "t16",
    "unit": "dl",
    "freq": "mid",
    "subject": 2,
    "topic": "출력층",
    "q": "다음 코드의 실행 결과는?",
    "code": "import numpy as np\nz = np.array([0.5])            # 출력 뉴런 1개\nprint(round(float((np.exp(z) / np.exp(z).sum())[0]), 4))  # softmax",
    "options": [
      "2.0",
      "0.5",
      "0.6225",
      "1.0"
    ],
    "answer": 4,
    "exp": "softmax는 출력들을 합이 1인 확률로 바꿉니다. 뉴런이 하나면 그 값이 항상 1.0이라 다중 분류도, 이진 분류도 되지 않습니다.",
    "why": [
      "확률이라 1을 넘을 수 없습니다.",
      "0.5는 sigmoid(0)의 값입니다.",
      "0.6225는 sigmoid(0.5)의 값입니다. softmax 출력 하나는 항상 1입니다.",
      ""
    ],
    "check": {
      "py": "import numpy as np\nz = np.array([0.5])\nprint(round(float((np.exp(z) / np.exp(z).sum())[0]), 4))"
    }
  },
  {
    "id": "t17-1",
    "trap": "t17",
    "unit": "dl",
    "freq": "high",
    "subject": 2,
    "topic": "손실 함수",
    "q": "y_train이 [0, 2, 1, 2, 0]처럼 정수 라벨이고 출력층이 Dense(3, activation='softmax')일 때 알맞은 손실 함수는?",
    "options": [
      "sparse_categorical_crossentropy",
      "categorical_crossentropy",
      "binary_crossentropy",
      "mse"
    ],
    "answer": 1,
    "exp": "정수 라벨은 sparse_categorical_crossentropy를 씁니다. to_categorical로 원-핫으로 바꿨다면 categorical_crossentropy를 씁니다.",
    "why": [
      "",
      "원-핫 라벨용이라 정수 라벨을 넣으면 모양이 맞지 않아 오류가 납니다.",
      "이진 분류용입니다.",
      "회귀용 손실입니다."
    ]
  },
  {
    "id": "t17-2",
    "trap": "t17",
    "unit": "dl",
    "freq": "mid",
    "subject": 2,
    "topic": "손실 함수",
    "q": "다음 코드의 실행 결과는?",
    "code": "from tensorflow.keras.utils import to_categorical\nprint(to_categorical([2, 0], num_classes=3).tolist())",
    "options": [
      "[[0.0, 1.0, 0.0], [1.0, 0.0, 0.0]]",
      "[[2], [0]]",
      "[[0.0, 0.0, 1.0], [1.0, 0.0, 0.0]]",
      "[[1.0, 0.0, 0.0], [0.0, 0.0, 1.0]]"
    ],
    "answer": 3,
    "exp": "to_categorical은 정수 라벨을 원-핫으로 바꿉니다. 2는 [0, 0, 1], 0은 [1, 0, 0]입니다. 이렇게 바꾼 라벨에는 categorical_crossentropy를 씁니다.",
    "why": [
      "2는 세 번째 자리가 1입니다.",
      "정수 라벨 그대로가 아니라 원-핫 배열로 바뀝니다.",
      "",
      "두 행의 순서가 바뀌었습니다. 첫 라벨이 2입니다."
    ],
    "check": {
      "py": "import os; os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'\nfrom tensorflow.keras.utils import to_categorical\nprint(to_categorical([2, 0], num_classes=3).tolist())"
    }
  },
  {
    "id": "t18-1",
    "trap": "t18",
    "unit": "dl",
    "freq": "high",
    "subject": 2,
    "topic": "파라미터 수",
    "q": "다음 모델의 전체 파라미터 수는?",
    "code": "model = Sequential([\n    Input(shape=(10,)),\n    Dense(16, activation='relu'),\n    Dropout(0.2),\n    Dense(1, activation='sigmoid')\n])",
    "options": [
      "209",
      "176",
      "160",
      "193"
    ],
    "answer": 4,
    "exp": "(10 + 1) × 16 = 176, Dropout은 0, (16 + 1) × 1 = 17이라 합계 193입니다.",
    "why": [
      "Dropout은 학습할 가중치가 없어 파라미터가 0개입니다. 따로 더하면 안 됩니다.",
      "첫 Dense 층만 센 값입니다.",
      "편향 없이 10 × 16만 센 값입니다.",
      ""
    ],
    "check": {
      "py": "import os; os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'\nfrom tensorflow.keras import Sequential, Input\nfrom tensorflow.keras.layers import Dense, Dropout\nmodel = Sequential([\n    Input(shape=(10,)),\n    Dense(16, activation='relu'),\n    Dropout(0.2),\n    Dense(1, activation='sigmoid')\n])\nprint(model.count_params())"
    }
  },
  {
    "id": "t18-2",
    "trap": "t18",
    "unit": "dl",
    "freq": "mid",
    "subject": 2,
    "topic": "파라미터 수",
    "q": "Dense(32) 층 다음에 Dense(4) 층이 이어질 때, Dense(4) 층의 파라미터 수는?",
    "options": [
      "128",
      "132",
      "36",
      "160"
    ],
    "answer": 2,
    "exp": "(입력 32 + 편향 1) × 뉴런 4 = 132입니다.",
    "why": [
      "편향 4개를 빠뜨렸습니다.",
      "",
      "32 + 4로 더하면 안 되고, 연결선 수인 32 × 4에 편향 4를 더합니다.",
      "(32 + 8) × 4처럼 계산한 값입니다. 편향은 뉴런마다 1개입니다."
    ],
    "check": {
      "py": "import os; os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'\nfrom tensorflow.keras import Sequential, Input\nfrom tensorflow.keras.layers import Dense\nm = Sequential([Input(shape=(8,)), Dense(32), Dense(4)])\nprint(m.layers[1].count_params())"
    }
  },
  {
    "id": "t19-1",
    "trap": "t19",
    "unit": "dl",
    "freq": "high",
    "subject": 2,
    "topic": "Dropout",
    "q": "Dropout(0.3)에 대한 설명으로 옳은 것은?",
    "options": [
      "학습 중에만 무작위로 30%의 출력을 0으로 만든다",
      "학습 중 70%의 출력을 0으로 만든다",
      "예측할 때도 30%의 뉴런을 끈다",
      "파라미터 30%를 영구히 지운다"
    ],
    "answer": 1,
    "exp": "숫자는 끄는 비율이고, 학습 단계에서만 동작합니다.",
    "why": [
      "",
      "0.3은 남기는 비율이 아니라 끄는 비율입니다.",
      "predict나 evaluate에서는 모든 뉴런을 씁니다.",
      "Dropout은 가중치를 지우지 않고 매 단계 출력만 잠시 끕니다."
    ]
  },
  {
    "id": "t19-2",
    "trap": "t19",
    "unit": "dl",
    "freq": "mid",
    "subject": 2,
    "topic": "Dropout",
    "q": "다음 코드의 실행 결과는?",
    "code": "import numpy as np\nfrom tensorflow.keras.layers import Dropout\nx = np.ones((1, 4), dtype='float32')\nprint(Dropout(0.5)(x, training=False).numpy().ravel().tolist())",
    "options": [
      "[0.5, 0.5, 0.5, 0.5]",
      "[0.0, 0.0, 0.0, 0.0]",
      "[1.0, 1.0, 1.0, 1.0]",
      "[2.0, 2.0, 2.0, 2.0]"
    ],
    "answer": 3,
    "exp": "training=False(예측 모드)에서는 Dropout이 아무것도 하지 않아 입력이 그대로 나옵니다. 학습 모드에서는 일부를 0으로 만들고 남은 값을 1 ÷ (1 - 0.5) = 2배로 키웁니다.",
    "why": [
      "예측 모드에서 값을 줄이지 않습니다.",
      "예측 모드에서는 값을 끄지 않습니다.",
      "",
      "남은 값을 2배로 키우는 것은 학습 모드(training=True)일 때입니다."
    ],
    "check": {
      "py": "import os; os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'\nimport numpy as np\nfrom tensorflow.keras.layers import Dropout\nx = np.ones((1, 4), dtype='float32')\nprint(Dropout(0.5)(x, training=False).numpy().ravel().tolist())"
    }
  },
  {
    "id": "t20-1",
    "trap": "t20",
    "unit": "curve",
    "freq": "high",
    "subject": 2,
    "topic": "콜백",
    "q": "EarlyStopping을 만들었는데 학습이 전혀 일찍 멈추지 않습니다. 가장 흔한 원인은?",
    "options": [
      "patience를 5로 줬다",
      "model.fit에 callbacks=[es]를 넘기지 않았다",
      "monitor='val_loss'로 줬다",
      "validation_split=0.2를 줬다"
    ],
    "answer": 2,
    "exp": "콜백은 만들기만 하면 동작하지 않고 fit(..., callbacks=[es])로 넘겨야 합니다.",
    "why": [
      "patience 5는 흔한 설정입니다. 5에포크 동안 좋아지지 않으면 멈춥니다.",
      "",
      "검증 손실을 지켜보는 올바른 설정입니다.",
      "val_loss를 계산하려면 검증 데이터가 있어야 하므로 오히려 필요한 설정입니다."
    ]
  },
  {
    "id": "t20-2",
    "trap": "t20",
    "unit": "curve",
    "freq": "high",
    "subject": 2,
    "topic": "콜백",
    "q": "EarlyStopping(monitor='val_loss', patience=2)로 학습했을 때 val_loss가 아래와 같았습니다. 멈추는 에포크는?",
    "code": "에포크:   1     2     3     4     5     6\nval_loss: 0.50  0.40  0.30  0.32  0.31  0.29",
    "options": [
      "6에포크",
      "3에포크",
      "4에포크",
      "5에포크"
    ],
    "answer": 4,
    "exp": "최저점은 3에포크(0.30)입니다. 4, 5에포크 두 번 연속 나아지지 않아 patience=2를 채우고 5에포크에서 멈춥니다.",
    "why": [
      "5에포크에서 이미 멈춥니다.",
      "3에포크가 최저점이지만, 멈추는 것은 그 뒤 2번 더 지켜본 다음입니다.",
      "한 번 나빠진 4에포크에서는 아직 기다립니다.",
      ""
    ],
    "check": {
      "py": "import os; os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'\nfrom tensorflow.keras.callbacks import EarlyStopping\nclass M: stop_training = False\nes = EarlyStopping(monitor='val_loss', patience=2); m = M(); es.set_model(m); es.on_train_begin()\nfor e, v in enumerate([0.50, 0.40, 0.30, 0.32, 0.31, 0.29], 1):\n    es.on_epoch_end(e - 1, {'val_loss': v})\n    if m.stop_training: print(f'{e}에포크'); break"
    }
  },
  {
    "id": "x1-01",
    "exam": 1,
    "unit": "load",
    "freq": "high",
    "subject": 1,
    "topic": "라이브러리 불러오기",
    "q": "넘파이를 관례대로 np라는 이름으로 불러오는 코드는?",
    "options": [
      "import numpy.np",
      "import np as numpy",
      "from numpy import np",
      "import numpy as np"
    ],
    "answer": 4,
    "exp": "import 모듈 as 별칭 형태입니다. 넘파이는 np로 부르는 것이 관례입니다.",
    "why": [
      "numpy.np라는 하위 모듈은 없습니다.",
      "모듈 이름과 별칭의 순서가 바뀌었습니다.",
      "numpy 안에 np라는 이름은 없습니다.",
      ""
    ]
  },
  {
    "id": "x1-02",
    "exam": 1,
    "unit": "load",
    "freq": "high",
    "subject": 1,
    "topic": "CSV 불러오기",
    "q": "탭(\\t)으로 칸이 나뉜 telecom.tsv 파일을 읽는 코드는?",
    "options": [
      "pd.read_csv('telecom.tsv', header='\\t')",
      "pd.read_csv('telecom.tsv', encoding='\\t')",
      "pd.read_csv('telecom.tsv', sep='\\t')",
      "pd.read_table('telecom.tsv', sep=',')"
    ],
    "answer": 3,
    "exp": "read_csv의 sep 인자로 구분자를 정합니다. 탭이면 '\\t'입니다.",
    "why": [
      "header는 열 이름으로 쓸 줄 번호를 정하는 인자입니다.",
      "encoding은 글자 인코딩(utf-8, cp949 등)을 정하는 인자입니다.",
      "",
      "read_table은 기본이 탭 구분인데 sep=','로 바꿔 쉼표로 나누게 되어 칸이 나뉘지 않습니다."
    ]
  },
  {
    "id": "x1-03",
    "exam": 1,
    "unit": "load",
    "freq": "high",
    "subject": 1,
    "topic": "데이터 훑어보기",
    "q": "다음 코드의 실행 결과는?",
    "code": "df = pd.DataFrame({'tenure': [12, None, 30, 5]})\nprint(df['tenure'].count())",
    "options": [
      "3",
      "4",
      "2",
      "5"
    ],
    "answer": 1,
    "exp": "info()에서 보이는 Non-Null Count처럼, count()는 결측이 아닌 값만 셉니다. 4명 중 1명이 결측이라 3입니다.",
    "why": [
      "",
      "전체 행 수는 4이지만 결측 1개를 빼고 셉니다.",
      "결측은 하나뿐입니다.",
      "행이 4개뿐이라 5가 나올 수 없습니다."
    ],
    "check": {
      "py": "df = pd.DataFrame({'tenure': [12, None, 30, 5]})\nprint(df['tenure'].count())"
    }
  },
  {
    "id": "x1-04",
    "exam": 1,
    "unit": "viz",
    "freq": "high",
    "subject": 1,
    "topic": "시각화",
    "q": "요금제(contract) 종류별 이탈(churn 0/1) 고객 수를 나란히 비교하는 그래프 코드는?",
    "options": [
      "sns.histplot(data=df, x='churn')",
      "sns.countplot(data=df, x='contract', hue='churn')",
      "sns.heatmap(data=df, x='contract')",
      "sns.scatterplot(data=df, x='contract', y='churn')"
    ],
    "answer": 2,
    "exp": "countplot에 x로 요금제를, hue로 이탈 여부를 주면 요금제마다 이탈·유지 막대가 나란히 그려집니다.",
    "why": [
      "churn 하나의 분포만 보여 줘서 요금제별 비교가 안 됩니다.",
      "",
      "heatmap은 행렬 값을 색으로 칠하는 그래프라 이런 인자를 받지 않습니다.",
      "두 범주형 변수를 점으로 찍으면 점들이 겹쳐 개수를 비교할 수 없습니다."
    ]
  },
  {
    "id": "x1-05",
    "exam": 1,
    "unit": "viz",
    "freq": "high",
    "subject": 1,
    "topic": "상관관계",
    "q": "다음 코드의 실행 결과는?",
    "code": "df = pd.DataFrame({'tenure': [1, 5, 10, 20, 30, 40],\n                   'charge': [90, 85, 70, 40, 30, 20],\n                   'calls':  [3, 1, 4, 1, 5, 2],\n                   'churn':  [1, 1, 1, 0, 0, 0]})\nc = df.corr()['churn'].drop('churn').abs()\nprint(c.idxmax())",
    "options": [
      "churn",
      "tenure",
      "calls",
      "charge"
    ],
    "answer": 4,
    "exp": "churn과의 상관계수 절댓값이 가장 큰 열을 고릅니다. 자기 자신(churn, 1.0)을 뺀 뒤 비교해야 합니다. charge는 churn과 거의 같은 방향으로 움직입니다.",
    "why": [
      "자기 자신과의 상관계수 1.0은 drop으로 뺐습니다.",
      "tenure는 churn과 반대 방향이지만 charge보다 관계가 약합니다.",
      "calls는 churn과 관계가 가장 약합니다.",
      ""
    ],
    "check": {
      "py": "df = pd.DataFrame({'tenure': [1, 5, 10, 20, 30, 40], 'charge': [90, 85, 70, 40, 30, 20], 'calls': [3, 1, 4, 1, 5, 2], 'churn': [1, 1, 1, 0, 0, 0]})\nc = df.corr()['churn'].drop('churn').abs()\nprint(c.idxmax())"
    }
  },
  {
    "id": "x1-06",
    "exam": 1,
    "unit": "clean",
    "freq": "high",
    "subject": 1,
    "topic": "불필요한 열 삭제",
    "q": "고객 번호 'customerID'와 가입일 'joinDate' 두 열을 지우는 코드는?",
    "options": [
      "df = df.drop(['customerID', 'joinDate'])",
      "df = df.drop('customerID', 'joinDate', axis=1)",
      "df = df.drop(['customerID', 'joinDate'], axis=1)",
      "df.drop(columns=['customerID', 'joinDate'])"
    ],
    "answer": 3,
    "exp": "여러 열은 리스트로 묶어 axis=1과 함께 넘기고, 결과를 다시 대입합니다.",
    "why": [
      "axis를 주지 않으면 행에서 찾다가 KeyError가 납니다.",
      "두 이름을 따로 넘기면 두 번째 이름이 axis 자리로 들어가 오류가 납니다.",
      "",
      "columns=로 열을 지정한 것은 맞지만 결과를 대입하지 않아 df가 그대로입니다."
    ]
  },
  {
    "id": "x1-07",
    "exam": 1,
    "unit": "clean",
    "freq": "high",
    "subject": 1,
    "topic": "결측치 처리",
    "q": "다음 코드의 실행 결과는?",
    "code": "s = pd.Series([50, None, 70, None])\nprint(s.fillna(s.median()).tolist())",
    "options": [
      "[50.0, 60.0, 70.0, 60.0]",
      "[50.0, 0.0, 70.0, 0.0]",
      "[50.0, 70.0]",
      "[50.0, 50.0, 70.0, 70.0]"
    ],
    "answer": 1,
    "exp": "median()은 결측을 빼고 50, 70의 중앙값 60을 구하고, fillna가 결측 자리를 60으로 채웁니다.",
    "why": [
      "",
      "0으로 채운 결과입니다.",
      "결측 행을 지운 dropna()의 결과입니다.",
      "바로 앞 값으로 채운 ffill()의 결과입니다."
    ],
    "check": {
      "py": "s = pd.Series([50, None, 70, None])\nprint(s.fillna(s.median()).tolist())"
    }
  },
  {
    "id": "x1-08",
    "exam": 1,
    "unit": "clean",
    "freq": "mid",
    "subject": 1,
    "topic": "결측치 처리",
    "q": "결측치가 전체의 70%인 'coupon' 열을 어떻게 처리하는 것이 가장 알맞은가요?",
    "options": [
      "결측이 있는 행을 모두 지운다",
      "정보가 거의 없으므로 열을 삭제한다",
      "모두 0으로 채우고 그대로 쓴다",
      "결측 비율과 상관없이 평균으로 채운다"
    ],
    "answer": 2,
    "exp": "결측이 대부분인 열은 채워도 만들어 낸 값이 대부분이라 의미가 적어, 열을 지우는 경우가 많습니다. 결측이 조금이면 행 삭제나 대푯값 채우기를 씁니다.",
    "why": [
      "70%의 행을 지우면 데이터 대부분을 잃습니다.",
      "",
      "근거 없는 0이 대부분을 차지해 모델이 잘못 배울 수 있습니다.",
      "70%를 같은 값으로 채우면 그 열은 사실상 의미 없는 상수가 됩니다."
    ]
  },
  {
    "id": "x1-09",
    "exam": 1,
    "unit": "prep",
    "freq": "high",
    "subject": 1,
    "topic": "원-핫 인코딩",
    "q": "다음 코드의 실행 결과는?",
    "code": "df = pd.DataFrame({'fee': [30, 50, 70],\n                   'contract': ['월', '1년', '2년']})\nprint(pd.get_dummies(df, columns=['contract'], drop_first=True).shape)",
    "options": [
      "(3, 2)",
      "(3, 4)",
      "(3, 3)",
      "(4, 3)"
    ],
    "answer": 3,
    "exp": "contract 값 3종류 중 drop_first=True로 첫 범주를 빼면 2개 열이 생기고, 숫자 열 fee가 남아 3열입니다. 행 수는 그대로 3입니다.",
    "why": [
      "숫자 열 fee도 그대로 남습니다.",
      "drop_first가 없을 때의 열 수입니다.",
      "",
      "인코딩은 행 수를 바꾸지 않습니다."
    ],
    "check": {
      "py": "df = pd.DataFrame({'fee': [30, 50, 70], 'contract': ['월', '1년', '2년']})\nprint(pd.get_dummies(df, columns=['contract'], drop_first=True).shape)"
    }
  },
  {
    "id": "x1-10",
    "exam": 1,
    "unit": "prep",
    "freq": "high",
    "subject": 1,
    "topic": "X와 y 나누기",
    "q": "다음 코드의 실행 결과는?",
    "code": "df = pd.DataFrame({'a': [1, 2, 3, 4], 'b': [5, 6, 7, 8], 'churn': [0, 1, 0, 1]})\nX = df.drop('churn', axis=1)\ny = df['churn']\nprint(X.shape, y.shape)",
    "options": [
      "(2, 4) (4,)",
      "(4, 3) (4,)",
      "(4, 2) (4, 1)",
      "(4, 2) (4,)"
    ],
    "answer": 4,
    "exp": "타깃 churn을 뺀 X는 2열이고, y는 열 하나를 고른 Series라 1차원 (4,)입니다.",
    "why": [
      "shape는 (행, 열) 순서입니다.",
      "X에서 churn 열을 뺐으므로 3열이 아닙니다.",
      "df['churn']은 1차원 Series입니다. df[['churn']]처럼 대괄호를 두 겹 써야 (4, 1) 데이터프레임이 됩니다.",
      ""
    ],
    "check": {
      "py": "df = pd.DataFrame({'a': [1, 2, 3, 4], 'b': [5, 6, 7, 8], 'churn': [0, 1, 0, 1]})\nX = df.drop('churn', axis=1); y = df['churn']\nprint(X.shape, y.shape)"
    }
  },
  {
    "id": "x1-11",
    "exam": 1,
    "unit": "prep",
    "freq": "high",
    "subject": 1,
    "topic": "데이터 분리",
    "q": "이탈 고객이 적은 데이터를 학습 70%, 검증 30%로 나누면서 이탈 비율을 유지하는 코드는?",
    "options": [
      "train_test_split(X, y, test_size=0.3, stratify=y, random_state=42)",
      "train_test_split(X, y, test_size=0.7, stratify=y, random_state=42)",
      "train_test_split(X, y, test_size=0.3, shuffle=False)",
      "train_test_split(X, y, test_size=0.3, stratify=X, random_state=42)"
    ],
    "answer": 1,
    "exp": "검증 30%는 test_size=0.3, 클래스 비율 유지는 stratify=y입니다.",
    "why": [
      "",
      "test_size=0.7이면 검증 데이터가 70%가 됩니다.",
      "섞지 않고 잘라서 비율 유지가 보장되지 않습니다.",
      "비율을 맞출 기준은 타깃 y입니다."
    ]
  },
  {
    "id": "x1-12",
    "exam": 1,
    "unit": "prep",
    "freq": "high",
    "subject": 1,
    "topic": "스케일링",
    "q": "다음 코드의 실행 결과는?",
    "code": "from sklearn.preprocessing import StandardScaler\nprint(StandardScaler().fit_transform([[10], [30]]).ravel().tolist())",
    "options": [
      "[0.0, 1.0]",
      "[-1.0, 1.0]",
      "[-1.0, 0.0]",
      "[10.0, 30.0]"
    ],
    "answer": 2,
    "exp": "StandardScaler는 학습 데이터의 평균 20, 표준편차 10으로 (x - 20) ÷ 10을 계산합니다. 10은 -1, 30은 1입니다.",
    "why": [
      "0~1로 바꾸는 것은 MinMaxScaler입니다.",
      "",
      "30은 평균보다 표준편차 하나만큼 커서 1입니다.",
      "변환된 값이 출력됩니다."
    ],
    "check": {
      "py": "from sklearn.preprocessing import StandardScaler\nprint(StandardScaler().fit_transform([[10], [30]]).ravel().tolist())"
    }
  },
  {
    "id": "x1-13",
    "exam": 1,
    "unit": "ml",
    "freq": "high",
    "subject": 2,
    "topic": "모델 학습",
    "q": "랜덤 포레스트로 이탈 여부를 학습하는 코드로 옳은 것은?",
    "options": [
      "rf = RandomForestClassifier(n_estimators=100, random_state=42)\nrf.fit(X_train, y_train)",
      "rf = RandomForestRegressor(n_estimators=100)\nrf.fit(X_train, y_train)",
      "rf = RandomForestClassifier(n_estimators=100)\nrf.fit(X_train)",
      "rf = RandomForestClassifier(max_depth=100)\nrf.predict(X_train, y_train)"
    ],
    "answer": 1,
    "exp": "분류 문제이므로 Classifier를 쓰고, fit(X_train, y_train)으로 학습합니다.",
    "why": [
      "",
      "이탈 여부는 범주라 Regressor가 아니라 Classifier를 씁니다.",
      "지도학습이라 fit에 정답 y_train이 필요합니다.",
      "학습은 predict가 아니라 fit으로 합니다."
    ]
  },
  {
    "id": "x1-14",
    "exam": 1,
    "unit": "eval",
    "freq": "high",
    "subject": 2,
    "topic": "성능 평가",
    "q": "다음 코드의 실행 결과는?",
    "code": "from sklearn.metrics import f1_score\ny_true = [1, 1, 1, 0, 0]\ny_pred = [1, 1, 0, 0, 0]\nprint(round(f1_score(y_true, y_pred), 2))",
    "options": [
      "0.83",
      "0.67",
      "0.8",
      "1.0"
    ],
    "answer": 3,
    "exp": "f1 = 2 × 정밀도 × 재현율 ÷ (정밀도 + 재현율)입니다. 정밀도 2/2 = 1.0, 재현율 2/3이라 F1 = 2 × 1 × 0.667 ÷ 1.667 = 0.8입니다.",
    "why": [
      "정밀도와 재현율의 산술평균 (1 + 0.667) ÷ 2입니다. F1은 조화평균입니다.",
      "재현율(2/3) 값입니다. F1은 정밀도와 재현율을 함께 씁니다.",
      "",
      "1로 예측한 2개가 모두 맞아 정밀도가 1.0이지만, 실제 1 하나를 놓쳤으므로 F1은 1.0이 아닙니다."
    ],
    "check": {
      "py": "from sklearn.metrics import f1_score\nprint(round(f1_score([1, 1, 1, 0, 0], [1, 1, 0, 0, 0]), 2))"
    }
  },
  {
    "id": "x1-15",
    "exam": 1,
    "unit": "ml",
    "freq": "mid",
    "subject": 2,
    "topic": "모델 학습",
    "q": "학습된 모델 rf로 검증 데이터의 이탈 확률을 구한 뒤 0.3보다 크면 이탈로 보는 코드는?",
    "options": [
      "pred = rf.predict(X_test, threshold=0.3)",
      "pred = (rf.predict(X_test) > 0.3).astype(int)",
      "pred = rf.predict_proba(X_test)[:, 0] > 0.3",
      "pred = (rf.predict_proba(X_test)[:, 1] > 0.3).astype(int)"
    ],
    "answer": 4,
    "exp": "predict_proba의 1번 열이 이탈(1)일 확률입니다. 기준을 0.3으로 낮추면 이탈을 더 많이 잡아 재현율이 올라갑니다.",
    "why": [
      "predict에는 threshold 인자가 없습니다.",
      "predict는 이미 0/1 클래스라 0.3과 비교해도 기준이 바뀌지 않습니다.",
      "0번 열은 유지(0)일 확률입니다.",
      ""
    ]
  },
  {
    "id": "x1-16",
    "exam": 1,
    "unit": "dl",
    "freq": "high",
    "subject": 2,
    "topic": "모델 만들기",
    "q": "입력 변수 20개로 이탈 여부를 예측하는 딥러닝 모델로 알맞은 것은?",
    "options": [
      "Sequential([Input(shape=(20,)), Dense(64, activation='relu'), Dense(2, activation='sigmoid')])",
      "Sequential([Input(shape=(20,)), Dense(64, activation='relu'), Dropout(0.2), Dense(1, activation='sigmoid')])",
      "Sequential([Input(shape=(64,)), Dense(20, activation='relu'), Dense(1, activation='softmax')])",
      "Sequential([Input(shape=(20,)), Dense(64, activation='relu'), Dense(1)])"
    ],
    "answer": 2,
    "exp": "입력은 Input(shape=(20,)), 은닉층은 relu, 이진 분류 출력은 Dense(1, sigmoid)입니다. Dropout으로 과대적합을 줄입니다.",
    "why": [
      "뉴런 2개에 sigmoid를 쓰면 binary_crossentropy와 라벨 모양이 맞지 않습니다. 이진 분류는 뉴런 1개입니다.",
      "",
      "입력 모양은 변수 개수 20이어야 하고, 뉴런 1개에 softmax를 쓰면 출력이 항상 1입니다.",
      "활성화 함수가 없는 출력은 회귀용이라 확률이 나오지 않습니다."
    ]
  },
  {
    "id": "x1-17",
    "exam": 1,
    "unit": "dl",
    "freq": "high",
    "subject": 2,
    "topic": "컴파일",
    "q": "위 모델을 학습하기 전 compile 코드로 알맞은 것은?",
    "options": [
      "model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])",
      "model.compile(optimizer='adam', loss='mse', metrics=['mae'])",
      "model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])",
      "model.compile(optimizer='sigmoid', loss='binary_crossentropy')"
    ],
    "answer": 3,
    "exp": "sigmoid 출력의 이진 분류는 binary_crossentropy가 짝입니다.",
    "why": [
      "categorical_crossentropy는 원-핫 라벨을 쓰는 다중 분류용입니다.",
      "mse와 mae는 회귀용 손실과 지표입니다.",
      "",
      "sigmoid는 활성화 함수이지 옵티마이저가 아닙니다."
    ]
  },
  {
    "id": "x1-18",
    "exam": 1,
    "unit": "dl",
    "freq": "high",
    "subject": 2,
    "topic": "학습",
    "q": "EarlyStopping과 함께 학습하는 코드로 옳은 것은?",
    "options": [
      "es = EarlyStopping(monitor='val_loss', patience=5)\nhistory = model.fit(X_train, y_train, epochs=100, callbacks=es)",
      "es = EarlyStopping(monitor='val_loss', patience=5)\nhistory = model.fit(X_train, y_train, epochs=100, validation_data=(X_test, y_test), callbacks=[es])",
      "es = EarlyStopping(monitor='val_loss', patience=5)\nhistory = model.fit(X_train, y_train, epochs=100)",
      "es = EarlyStopping(monitor='val_loss', patience=5)\nhistory = model.compile(X_train, y_train, callbacks=[es])"
    ],
    "answer": 2,
    "exp": "val_loss를 보려면 검증 데이터(validation_data 또는 validation_split)가 있어야 하고, 콜백은 리스트로 callbacks에 넘깁니다.",
    "why": [
      "검증 데이터(validation_data나 validation_split)가 없어 val_loss를 계산할 수 없으므로 EarlyStopping이 제대로 동작하지 않습니다. 콜백은 callbacks=[es]처럼 리스트로 넘기는 것이 관례입니다.",
      "",
      "콜백을 넘기지 않아 EarlyStopping이 동작하지 않습니다.",
      "학습은 compile이 아니라 fit으로 합니다."
    ]
  },
  {
    "id": "x1-19",
    "exam": 1,
    "unit": "curve",
    "freq": "high",
    "subject": 2,
    "topic": "학습 곡선",
    "q": "history의 정확도 그래프에서 val_accuracy가 계속 오르다가 일정해졌고, accuracy와 거의 겹칩니다. 알맞은 해석은?",
    "options": [
      "검증 데이터가 학습에 쓰였다",
      "과대적합이 심하다",
      "학습이 전혀 되지 않았다",
      "과대적합 없이 안정적으로 학습되었다"
    ],
    "answer": 4,
    "exp": "학습과 검증 성능이 함께 오르고 차이가 작으면 일반화가 잘된 것입니다. 과대적합은 학습 성능만 계속 오르고 검증 성능이 떨어지며 벌어지는 모양입니다.",
    "why": [
      "두 곡선이 비슷하다는 것만으로 데이터 누수라고 볼 수 없습니다.",
      "두 곡선이 겹쳐 있어 과대적합의 신호가 없습니다.",
      "정확도가 올라갔으므로 학습이 되었습니다.",
      ""
    ]
  },
  {
    "id": "x1-20",
    "exam": 1,
    "unit": "curve",
    "freq": "mid",
    "subject": 2,
    "topic": "예측",
    "q": "다음 코드의 실행 결과는?",
    "code": "import numpy as np\nprob = np.array([[0.91], [0.08], [0.5], [0.62]])  # model.predict 결과\nprint(int((prob > 0.5).sum()))",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "answer": 1,
    "exp": "sigmoid 출력 확률 중 0.5보다 큰 것(0.91, 0.62)만 이탈로 세어 2명입니다.",
    "why": [
      "",
      "0.5는 0.5보다 크지 않아 이탈로 세지 않습니다.",
      "0.62도 0.5보다 크므로 이탈입니다.",
      "0.08과 0.5는 이탈이 아닙니다."
    ],
    "check": {
      "py": "import numpy as np\nprob = np.array([[0.91], [0.08], [0.5], [0.62]])\nprint(int((prob > 0.5).sum()))"
    }
  },
  {
    "id": "x2-01",
    "exam": 2,
    "unit": "load",
    "freq": "high",
    "subject": 1,
    "topic": "라이브러리 불러오기",
    "q": "시본(seaborn)을 관례대로 불러오는 코드는?",
    "options": [
      "import seaborn as sns",
      "import seaborn as sb.plot",
      "from seaborn import sns",
      "import sns"
    ],
    "answer": 1,
    "exp": "seaborn은 sns라는 별칭으로 부르는 것이 관례입니다.",
    "why": [
      "",
      "별칭에는 점(.)을 쓸 수 없어 문법 오류가 납니다.",
      "seaborn 안에 sns라는 이름은 없습니다.",
      "sns라는 이름의 패키지는 없습니다. 실제 이름은 seaborn입니다."
    ]
  },
  {
    "id": "x2-02",
    "exam": 2,
    "unit": "load",
    "freq": "high",
    "subject": 1,
    "topic": "데이터 훑어보기",
    "q": "다음 코드의 실행 결과는?",
    "code": "df = pd.DataFrame({'brand': ['K', 'H', 'K'],\n                   'price': [1500, 2300, 900],\n                   'km': [5.2, 1.1, 9.8]})\nprint(len(df.describe().columns))",
    "options": [
      "3",
      "2",
      "4",
      "1"
    ],
    "answer": 2,
    "exp": "describe()는 기본으로 숫자 열만 요약합니다. 숫자 열은 price, km 두 개입니다.",
    "why": [
      "문자 열 brand는 기본 describe()에 포함되지 않습니다. include='all'을 줘야 나옵니다.",
      "",
      "describe 결과의 열은 원래 숫자 열의 개수입니다. 통계 항목(행) 수와 헷갈리면 안 됩니다.",
      "숫자 열이 두 개입니다."
    ],
    "check": {
      "py": "df = pd.DataFrame({'brand': ['K', 'H', 'K'], 'price': [1500, 2300, 900], 'km': [5.2, 1.1, 9.8]})\nprint(len(df.describe().columns))"
    }
  },
  {
    "id": "x2-03",
    "exam": 2,
    "unit": "pick",
    "freq": "mid",
    "subject": 1,
    "topic": "그룹 집계",
    "q": "다음 코드의 실행 결과는?",
    "code": "df = pd.DataFrame({'brand': ['K', 'H', 'K'], 'price': [1500, 2300, 900]})\nm = df.groupby('brand')['price'].mean().sort_values(ascending=False)\nprint(m.index[0], m.iloc[0])",
    "options": [
      "K 1200.0",
      "K 2300.0",
      "H 1200.0",
      "H 2300.0"
    ],
    "answer": 4,
    "exp": "brand별 평균 가격은 H 2300, K (1500 + 900) ÷ 2 = 1200입니다. 내림차순 정렬 뒤 첫 줄은 H 2300.0입니다.",
    "why": [
      "K의 평균은 1200이 맞지만 내림차순이라 H가 먼저 나옵니다.",
      "2300은 H 브랜드의 평균입니다.",
      "1200은 K 브랜드의 평균입니다.",
      ""
    ],
    "check": {
      "py": "df = pd.DataFrame({'brand': ['K', 'H', 'K'], 'price': [1500, 2300, 900]})\nm = df.groupby('brand')['price'].mean().sort_values(ascending=False)\nprint(m.index[0], m.iloc[0])"
    }
  },
  {
    "id": "x2-04",
    "exam": 2,
    "unit": "viz",
    "freq": "high",
    "subject": 1,
    "topic": "시각화",
    "q": "주행거리(km)와 가격(price)의 관계를 점으로 찍어 보는 코드는?",
    "options": [
      "sns.boxplot(data=df, x='price')",
      "sns.countplot(data=df, x='km')",
      "sns.scatterplot(data=df, x='km', y='price')",
      "sns.histplot(data=df, x='km', y='price', bins=1)"
    ],
    "answer": 3,
    "exp": "두 연속형 변수의 관계는 산점도로 봅니다. 주행거리가 늘수록 가격이 내려가는지 확인할 수 있습니다.",
    "why": [
      "boxplot은 가격 하나의 분포만 보여 줍니다.",
      "countplot은 값마다 개수를 세는 그래프입니다.",
      "",
      "bins=1이면 모든 값이 한 칸에 들어가 관계를 볼 수 없습니다."
    ]
  },
  {
    "id": "x2-05",
    "exam": 2,
    "unit": "viz",
    "freq": "mid",
    "subject": 1,
    "topic": "그래프 해석",
    "q": "가격(price)의 히스토그램이 오른쪽으로 꼬리가 길게 늘어진 모양입니다. 알맞은 설명은?",
    "options": [
      "평균과 중앙값이 반드시 같다",
      "대부분이 비싼 차이고 소수가 아주 싸다",
      "가격이 모든 구간에 고르게 퍼져 있다",
      "대부분은 낮은 가격대이고 소수의 아주 비싼 차가 있다"
    ],
    "answer": 4,
    "exp": "오른쪽 꼬리가 긴 분포는 값이 왼쪽(낮은 쪽)에 몰리고 큰 값이 드물게 있는 모양입니다. 이때 평균이 중앙값보다 커지는 경향이 있고, 로그 변환을 하기도 합니다.",
    "why": [
      "한쪽으로 치우치면 큰 값들이 평균을 끌어올려 평균과 중앙값이 달라집니다.",
      "왼쪽으로 꼬리가 긴 분포의 설명입니다.",
      "고르게 퍼져 있으면 히스토그램이 평평합니다.",
      ""
    ]
  },
  {
    "id": "x2-06",
    "exam": 2,
    "unit": "clean",
    "freq": "high",
    "subject": 1,
    "topic": "결측치 확인",
    "q": "다음 코드의 실행 결과는?",
    "code": "df = pd.DataFrame({'brand': ['K', 'H', 'K'],\n                   'price': [1500, 2300, 900],\n                   'km': [5.2, None, None]})\nprint((df.isnull().sum() > 0).sum())",
    "options": [
      "1",
      "2",
      "3",
      "0"
    ],
    "answer": 1,
    "exp": "isnull().sum()으로 열별 결측 수를 구하고 0보다 큰 열의 수를 셉니다. 결측이 있는 열은 km 하나입니다.",
    "why": [
      "",
      "price에는 결측이 없습니다.",
      "열은 모두 3개지만 결측이 있는 열은 하나입니다.",
      "km 열에 None이 있습니다."
    ],
    "check": {
      "py": "df = pd.DataFrame({'brand': ['K', 'H', 'K'], 'price': [1500, 2300, 900], 'km': [5.2, None, None]})\nprint((df.isnull().sum() > 0).sum())"
    }
  },
  {
    "id": "x2-07",
    "exam": 2,
    "unit": "clean",
    "freq": "high",
    "subject": 1,
    "topic": "이상치",
    "q": "가격이 0 이하인 잘못된 행을 지우는 코드는?",
    "options": [
      "df = df.drop(df['price'] <= 0)",
      "df = df[df['price'] <= 0]",
      "df = df[df['price'] > 0]",
      "df = df.dropna(subset=['price'] > 0)"
    ],
    "answer": 3,
    "exp": "남길 조건(price > 0)으로 행을 걸러 다시 대입합니다.",
    "why": [
      "drop은 라벨을 받는데 True/False Series를 넣으면 의도대로 동작하지 않습니다. 지우려면 인덱스를 넘겨야 합니다.",
      "잘못된 행만 남기는 반대 조건입니다.",
      "",
      "subset에는 열 이름 리스트를 줘야 하고, dropna는 결측만 지웁니다."
    ]
  },
  {
    "id": "x2-08",
    "exam": 2,
    "unit": "clean",
    "freq": "mid",
    "subject": 1,
    "topic": "자료형",
    "q": "다음 코드의 실행 결과는?",
    "code": "s = pd.Series(['1500', '문의', '900'])\nprint(pd.to_numeric(s, errors='coerce').tolist())",
    "options": [
      "[1500, 0, 900]",
      "[1500.0, nan, 900.0]",
      "오류",
      "[1500.0, 900.0]"
    ],
    "answer": 2,
    "exp": "errors='coerce'는 숫자로 바꿀 수 없는 '문의'를 NaN으로 바꿉니다. NaN이 섞여 실수형이 됩니다.",
    "why": [
      "바꿀 수 없는 값은 0이 아니라 NaN이 됩니다.",
      "",
      "coerce를 줬으므로 오류 대신 NaN이 들어갑니다.",
      "행을 지우지는 않습니다. 지우려면 이어서 dropna를 씁니다."
    ],
    "check": {
      "py": "s = pd.Series(['1500', '문의', '900'])\nprint(pd.to_numeric(s, errors='coerce').tolist())"
    }
  },
  {
    "id": "x2-09",
    "exam": 2,
    "unit": "prep",
    "freq": "high",
    "subject": 1,
    "topic": "라벨 인코딩",
    "q": "LabelEncoder로 'fuel' 열을 숫자로 바꾸는 코드로 옳은 것은?",
    "options": [
      "le = LabelEncoder()\ndf['fuel'] = le.fit_transform(df['fuel'])",
      "df['fuel'] = LabelEncoder(df['fuel'])",
      "le = LabelEncoder()\ndf['fuel'] = le.transform(df['fuel'])",
      "df['fuel'] = pd.get_dummies(df['fuel']).fit()"
    ],
    "answer": 1,
    "exp": "LabelEncoder 객체를 만든 뒤 fit_transform으로 범주를 배우고 숫자로 바꿉니다.",
    "why": [
      "",
      "LabelEncoder는 생성할 때 데이터를 받지 않습니다.",
      "fit을 하지 않은 인코더로 transform하면 오류가 납니다.",
      "get_dummies 결과에는 fit 메서드가 없습니다."
    ]
  },
  {
    "id": "x2-10",
    "exam": 2,
    "unit": "prep",
    "freq": "high",
    "subject": 1,
    "topic": "데이터 분리",
    "q": "다음 코드의 실행 결과는?",
    "code": "df = pd.DataFrame({'brand': [0, 1, 0], 'price': [1500, 2300, 900], 'km': [5.2, 1.1, 9.8]})\ny = df['price']\nX = df.drop('price', axis=1)\nprint(y.tolist(), list(X.columns))",
    "options": [
      "[1500, 2300, 900] ['brand', 'price', 'km']",
      "[1500, 2300, 900] ['brand', 'km']",
      "['brand', 'km'] [1500, 2300, 900]",
      "[] ['brand', 'km']"
    ],
    "answer": 2,
    "exp": "y는 타깃 price 열의 값이고, X는 price를 뺀 나머지 열입니다.",
    "why": [
      "X에서 타깃 price를 뺐습니다.",
      "",
      "print 순서가 y 다음 X입니다.",
      "y는 price 열 값 세 개입니다."
    ],
    "check": {
      "py": "df = pd.DataFrame({'brand': [0, 1, 0], 'price': [1500, 2300, 900], 'km': [5.2, 1.1, 9.8]})\ny = df['price']; X = df.drop('price', axis=1)\nprint(y.tolist(), list(X.columns))"
    }
  },
  {
    "id": "x2-11",
    "exam": 2,
    "unit": "prep",
    "freq": "high",
    "subject": 1,
    "topic": "데이터 분리",
    "q": "회귀 문제에서 train_test_split에 stratify=y를 주면 어떻게 되나요?",
    "options": [
      "아무 영향이 없다",
      "가격대 비율이 자동으로 맞춰진다",
      "가격처럼 거의 모든 값이 다르면 한 번만 나오는 값이 있어 오류가 난다",
      "검증 데이터가 비게 된다"
    ],
    "answer": 3,
    "exp": "stratify는 y의 각 값(클래스)을 비율대로 나누는데, 연속형 가격은 값마다 1개씩이라 'least populated class has only 1 member' 오류가 납니다. 회귀에서는 보통 쓰지 않습니다.",
    "why": [
      "클래스마다 최소 2개가 필요해 오류가 납니다.",
      "연속값을 구간으로 나눠 주는 기능은 없습니다.",
      "",
      "검증 데이터가 비는 것이 아니라 함수가 실행되지 않습니다."
    ],
    "check": {
      "py": "import numpy as np\nfrom sklearn.model_selection import train_test_split\ntry:\n    train_test_split(np.zeros((10, 1)), np.arange(10) * 100.0, test_size=0.2, stratify=np.arange(10) * 100.0)\n    print('된다')\nexcept ValueError:\n    print('가격처럼 거의 모든 값이 다르면 한 번만 나오는 값이 있어 오류가 난다')"
    }
  },
  {
    "id": "x2-12",
    "exam": 2,
    "unit": "prep",
    "freq": "high",
    "subject": 1,
    "topic": "스케일링",
    "q": "MinMaxScaler로 학습·검증 데이터를 바꾸는 코드로 옳은 것은?",
    "options": [
      "mm = MinMaxScaler(X_train)\nX_test = mm.transform(X_test)",
      "mm = MinMaxScaler()\nX_train = mm.fit_transform(X_train)\nX_test = mm.fit_transform(X_test)",
      "mm = MinMaxScaler()\nX_train = mm.transform(X_train)\nX_test = mm.transform(X_test)",
      "mm = MinMaxScaler()\nX_train = mm.fit_transform(X_train)\nX_test = mm.transform(X_test)"
    ],
    "answer": 4,
    "exp": "학습 데이터로만 fit하고 검증 데이터에는 같은 기준으로 transform만 합니다.",
    "why": [
      "스케일러는 생성할 때 데이터를 받지 않습니다.",
      "검증 데이터에 다시 fit하면 기준이 바뀌고 정보가 샙니다.",
      "fit 없이 transform하면 NotFittedError가 납니다.",
      ""
    ]
  },
  {
    "id": "x2-13",
    "exam": 2,
    "unit": "ml",
    "freq": "high",
    "subject": 2,
    "topic": "모델 고르기",
    "q": "중고차 가격(연속값)을 예측하는 모델로 알맞은 것은?",
    "options": [
      "RandomForestRegressor",
      "RandomForestClassifier",
      "LogisticRegression",
      "KNeighborsClassifier"
    ],
    "answer": 1,
    "exp": "가격은 연속된 숫자라 회귀 모델(Regressor)을 씁니다.",
    "why": [
      "",
      "Classifier는 범주를 예측하는 분류 모델입니다.",
      "로지스틱 회귀는 분류 모델입니다.",
      "KNeighborsClassifier는 분류용입니다. 회귀는 KNeighborsRegressor입니다."
    ]
  },
  {
    "id": "x2-14",
    "exam": 2,
    "unit": "ml",
    "freq": "mid",
    "subject": 2,
    "topic": "하이퍼파라미터",
    "q": "GridSearchCV로 찾은 가장 좋은 하이퍼파라미터 조합을 확인하는 코드는?",
    "options": [
      "grid.params()",
      "grid.best_score",
      "grid.best_params_",
      "grid.cv_results"
    ],
    "answer": 3,
    "exp": "fit이 끝난 GridSearchCV는 best_params_에 가장 좋은 조합, best_score_에 그 점수, best_estimator_에 그 모델을 담습니다.",
    "why": [
      "params()라는 메서드는 없습니다. 설정값은 get_params()입니다.",
      "끝의 밑줄(_)이 빠졌고, 점수일 뿐 조합이 아닙니다.",
      "",
      "전체 결과는 cv_results_이고 밑줄이 붙습니다. 가장 좋은 조합만 보려면 best_params_입니다."
    ]
  },
  {
    "id": "x2-15",
    "exam": 2,
    "unit": "eval",
    "freq": "high",
    "subject": 2,
    "topic": "회귀 지표",
    "q": "다음 코드의 실행 결과는?",
    "code": "import numpy as np\nfrom sklearn.metrics import mean_squared_error\ny_true = [1000, 2000, 3000, 4000]\ny_pred = [1100, 1900, 3100, 3900]\nprint(np.sqrt(mean_squared_error(y_true, y_pred)))",
    "options": [
      "10000.0",
      "100.0",
      "0.0",
      "-100.0"
    ],
    "answer": 2,
    "exp": "오차가 모두 100 또는 -100이라 제곱의 평균(MSE)은 10000, 그 제곱근인 RMSE는 100.0입니다.",
    "why": [
      "제곱근을 씌우기 전의 MSE입니다.",
      "",
      "오차가 상쇄되는 것은 부호를 그대로 평균 냈을 때입니다. 제곱하면 모두 양수입니다.",
      "제곱근 값이라 음수가 나오지 않습니다."
    ],
    "check": {
      "py": "import numpy as np\nfrom sklearn.metrics import mean_squared_error\nprint(float(np.sqrt(mean_squared_error([1000, 2000, 3000, 4000], [1100, 1900, 3100, 3900]))))"
    }
  },
  {
    "id": "x2-16",
    "exam": 2,
    "unit": "dl",
    "freq": "high",
    "subject": 2,
    "topic": "모델 만들기",
    "q": "가격 회귀용 딥러닝 모델의 출력층과 compile로 알맞은 것은?",
    "options": [
      "Dense(2, activation='relu')\nmodel.compile(optimizer='adam', loss='categorical_crossentropy')",
      "Dense(1, activation='sigmoid')\nmodel.compile(optimizer='adam', loss='binary_crossentropy')",
      "Dense(1, activation='softmax')\nmodel.compile(optimizer='adam', loss='mse')",
      "Dense(1)\nmodel.compile(optimizer='adam', loss='mse', metrics=['mae'])"
    ],
    "answer": 4,
    "exp": "회귀는 활성화 함수 없는 뉴런 1개로 값을 그대로 내고, mse로 학습하며 mae를 지표로 봅니다.",
    "why": [
      "다중 분류용 손실이고, 출력 뉴런도 하나여야 합니다.",
      "sigmoid는 0~1로 눌러 가격을 표현하지 못하고, 손실도 분류용입니다.",
      "뉴런 1개에 softmax를 쓰면 출력이 항상 1입니다.",
      ""
    ]
  },
  {
    "id": "x2-17",
    "exam": 2,
    "unit": "dl",
    "freq": "high",
    "subject": 2,
    "topic": "파라미터 수",
    "q": "다음 모델의 전체 파라미터 수는?",
    "code": "model = Sequential([\n    Input(shape=(16,)),\n    Dense(64, activation='relu'),\n    Dense(1)\n])",
    "options": [
      "65",
      "1088",
      "1024",
      "1153"
    ],
    "answer": 4,
    "exp": "(16 + 1) × 64 = 1088, (64 + 1) × 1 = 65를 더해 1153입니다.",
    "why": [
      "출력층 (64 + 1) × 1만 센 값입니다.",
      "첫 Dense 층만 센 값입니다. 출력층의 65개도 더해야 합니다.",
      "첫 층의 가중치 16 × 64만 센 값입니다. 편향과 출력층이 빠졌습니다.",
      ""
    ],
    "check": {
      "py": "import os; os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'\nfrom tensorflow.keras import Sequential, Input\nfrom tensorflow.keras.layers import Dense\nmodel = Sequential([Input(shape=(16,)), Dense(64, activation='relu'), Dense(1)])\nprint(model.count_params())"
    }
  },
  {
    "id": "x2-18",
    "exam": 2,
    "unit": "dl",
    "freq": "mid",
    "subject": 2,
    "topic": "콜백",
    "q": "학습 중 val_loss가 가장 낮았던 모델을 best.keras로 저장하는 콜백을 fit에 넘기는 코드는?",
    "options": [
      "mc = ModelCheckpoint('best.keras', save_best_only=True)\nmodel.compile(callbacks=[mc])",
      "mc = ModelCheckpoint('best.keras', monitor='val_loss', save_best_only=True)\nmodel.fit(X_train, y_train, epochs=50, callbacks=[mc])",
      "mc = ModelCheckpoint('best.keras', monitor='val_loss', save_best_only=True)\nmodel.fit(X_train, y_train, validation_split=0.2, epochs=50, callbacks=[mc])",
      "mc = EarlyStopping('best.keras', monitor='val_loss')\nmodel.fit(X_train, y_train, validation_split=0.2, callbacks=[mc])"
    ],
    "answer": 3,
    "exp": "val_loss를 보려면 검증 데이터가 필요하고, ModelCheckpoint를 callbacks 리스트로 fit에 넘깁니다.",
    "why": [
      "콜백은 compile이 아니라 fit에 넘깁니다.",
      "검증 데이터가 없어 val_loss가 계산되지 않습니다.",
      "",
      "EarlyStopping은 모델을 저장하지 않고 파일 경로도 받지 않습니다."
    ]
  },
  {
    "id": "x2-19",
    "exam": 2,
    "unit": "curve",
    "freq": "high",
    "subject": 2,
    "topic": "학습 곡선",
    "q": "다음 코드의 실행 결과는?",
    "code": "import numpy as np\nval_loss = [0.50, 0.30, 0.20, 0.22, 0.25]  # history.history['val_loss']\nprint(int(np.argmin(val_loss)) + 1)",
    "options": [
      "5",
      "3",
      "1",
      "4"
    ],
    "answer": 2,
    "exp": "np.argmin은 가장 작은 값(0.20)의 위치를 0부터 세어 2를 돌려주고, 1을 더해 3에포크가 됩니다.",
    "why": [
      "마지막 에포크 번호입니다. 손실은 마지막이 가장 작지 않습니다.",
      "",
      "첫 에포크는 손실이 가장 큽니다.",
      "4에포크의 0.22는 3에포크의 0.20보다 큽니다."
    ],
    "check": {
      "py": "import numpy as np\nprint(int(np.argmin([0.50, 0.30, 0.20, 0.22, 0.25])) + 1)"
    }
  },
  {
    "id": "x2-20",
    "exam": 2,
    "unit": "curve",
    "freq": "mid",
    "subject": 2,
    "topic": "평가",
    "q": "회귀 딥러닝 모델을 compile(loss='mse', metrics=['mae'])로 만들었습니다. model.evaluate(X_test, y_test)가 돌려주는 값은?",
    "options": [
      "[검증 데이터의 mse, mae]",
      "[정확도, 손실]",
      "예측값 배열",
      "학습 데이터의 mse 하나"
    ],
    "answer": 1,
    "exp": "evaluate는 compile에서 정한 손실과 지표를 순서대로 돌려줍니다.",
    "why": [
      "",
      "회귀 모델이라 정확도는 계산하지 않고, 손실이 먼저입니다.",
      "예측값은 predict가 돌려줍니다.",
      "넣어 준 검증 데이터로 손실과 지표를 모두 계산합니다."
    ]
  }
];

// 함정: 시험 직전에 훑는 요약과 함정마다 2문제 (trap 필드로 연결)
window.AICE_TRAPS = [
  {
    "id": "t01",
    "title": "loc는 끝 포함, iloc는 끝 제외",
    "body": "loc는 라벨(이름) 기준이라 슬라이스의 끝 라벨까지 포함해요. iloc는 위치(0부터) 기준이라 파이썬 리스트처럼 끝을 빼요.",
    "ex": "df.loc[1:3]   → 1, 2, 3행 (3행)\ndf.iloc[1:3]  → 1, 2행 (2행)"
  },
  {
    "id": "t02",
    "title": "대입하지 않으면 원본은 그대로",
    "body": "drop, fillna, dropna, replace는 바뀐 새 데이터를 돌려줄 뿐 원본을 바꾸지 않아요. 결과를 다시 대입하세요. inplace=True는 None을 돌려주니 대입과 같이 쓰면 안 돼요.",
    "ex": "df.drop('id', axis=1)          → df 그대로\ndf = df.drop('id', axis=1)     → 반영\ndf = df.dropna(inplace=True)   → df가 None"
  },
  {
    "id": "t03",
    "title": "열을 지울 때는 axis=1",
    "body": "drop의 기본은 axis=0(행)이에요. 열 이름으로 지우려면 axis=1이나 columns=를 써야 해요. dropna도 기본은 행을 지워요.",
    "ex": "df.drop('id')            → KeyError (행에서 찾음)\ndf.drop('id', axis=1)    → id 열 삭제\ndf.drop(columns=['id'])  → id 열 삭제"
  },
  {
    "id": "t04",
    "title": "판다스 조건은 &, |와 괄호",
    "body": "여러 조건은 and, or 대신 &, |를 쓰고 조건마다 괄호로 감싸요. and를 쓰면 'truth value of a Series is ambiguous' 오류가 나요.",
    "ex": "df[(df.age > 30) & (df.city == '서울')]   ← 정답\ndf[df.age > 30 and df.city == '서울']     ← 오류"
  },
  {
    "id": "t05",
    "title": "value_counts와 count는 NaN을 빼고 센다",
    "body": "value_counts()는 결측을 세지 않고 많은 순으로 정렬해요. count()도 결측이 아닌 값만 세요. 결측 개수는 isnull().sum()으로 구해요.",
    "ex": "s.value_counts()              → NaN 없음\ns.value_counts(dropna=False)  → NaN 포함\ndf.isnull().sum()             → 열별 결측 수"
  },
  {
    "id": "t06",
    "title": "평균·합계는 결측을 빼고 계산",
    "body": "mean(), sum()은 NaN을 건너뛰고 계산해요. 그래서 [1, NaN, 3]의 평균은 2예요. 결측을 0으로 치면 결과가 달라져요.",
    "ex": "pd.Series([1, None, 3]).mean()   → 2.0\npd.Series([1, None, 3]).fillna(0).mean() → 1.33"
  },
  {
    "id": "t07",
    "title": "최빈값은 mode()[0]",
    "body": "mode()는 값 하나가 아니라 Series를 돌려줘요. 결측치를 최빈값으로 채울 때는 [0]으로 첫 값을 꺼내야 해요.",
    "ex": "df['job'].fillna(df['job'].mode()[0])  ← 정답\ndf['job'].fillna(df['job'].mode())     ← 0번 행만 채워질 수 있음"
  },
  {
    "id": "t08",
    "title": "get_dummies는 문자 열만 바꾼다",
    "body": "columns를 주지 않으면 문자(object)·범주(category) 열만 원-핫으로 바뀌고 숫자 열은 그대로예요. 숫자로 된 범주(등급 1, 2, 3)를 바꾸려면 columns에 직접 적어요.",
    "ex": "pd.get_dummies(df)                     → 문자 열만\npd.get_dummies(df, columns=['grade'])  → grade도 변환"
  },
  {
    "id": "t09",
    "title": "train_test_split 반환 순서",
    "body": "X_train, X_test, y_train, y_test 순서예요. X 둘이 먼저, y 둘이 나중이에요. test_size를 안 주면 25%가 검증용이에요.",
    "ex": "X_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, stratify=y, random_state=42)"
  },
  {
    "id": "t10",
    "title": "stratify와 random_state는 다른 일",
    "body": "stratify=y는 학습·검증에 클래스 비율을 똑같이 맞추고, random_state는 나누는 방식을 고정해 매번 같은 결과가 나오게 해요.",
    "ex": "stratify=y        → 0:1 비율 유지\nrandom_state=42  → 재현 가능\nshuffle=False    → 섞지 않고 자름"
  },
  {
    "id": "t11",
    "title": "스케일러는 학습 데이터에만 fit",
    "body": "fit_transform은 학습 데이터에만, 검증·테스트 데이터에는 transform만 써요. 검증 데이터에 다시 fit하면 기준이 바뀌고 정보가 새요.",
    "ex": "X_train = sc.fit_transform(X_train)\nX_test  = sc.transform(X_test)      ← fit 다시 하지 않기"
  },
  {
    "id": "t12",
    "title": "LogisticRegression은 분류 모델",
    "body": "이름에 Regression이 있어도 로지스틱 회귀는 분류 모델이에요. 이름에 Classifier가 붙으면 분류, Regressor가 붙으면 회귀예요.",
    "ex": "분류: LogisticRegression, RandomForestClassifier\n회귀: LinearRegression, RandomForestRegressor"
  },
  {
    "id": "t13",
    "title": "불균형 데이터의 높은 정확도",
    "body": "0이 95%인 데이터에서는 전부 0이라고만 해도 정확도가 95%예요. 이럴 때는 재현율, 정밀도, F1을 함께 봐야 해요.",
    "ex": "실제: 0이 95개, 1이 5개\n모두 0으로 예측 → 정확도 0.95, 재현율 0"
  },
  {
    "id": "t14",
    "title": "오차 행렬은 행이 실제, 열이 예측",
    "body": "사이킷런의 confusion_matrix는 행이 실제값, 열이 예측값이에요. 이진 분류면 [[TN, FP], [FN, TP]] 모양이에요.",
    "ex": "        예측0  예측1\n실제0  [[ TN,   FP ],\n실제1   [ FN,   TP ]]"
  },
  {
    "id": "t15",
    "title": "정밀도는 예측 기준, 재현율은 실제 기준",
    "body": "정밀도 = 양성이라고 예측한 것 중 진짜 양성(TP / (TP + FP)). 재현율 = 진짜 양성 중 찾아낸 것(TP / (TP + FN)). 놓치면 안 되는 문제는 재현율이 중요해요.",
    "ex": "정밀도 = TP / (TP + FP)\n재현율 = TP / (TP + FN)\nF1 = 둘의 조화평균"
  },
  {
    "id": "t16",
    "title": "출력층과 손실 함수의 짝",
    "body": "이진 분류는 Dense(1, sigmoid) + binary_crossentropy, 다중 분류는 Dense(클래스 수, softmax) + categorical 계열, 회귀는 Dense(1) + mse예요.",
    "ex": "이진: Dense(1, 'sigmoid')  / binary_crossentropy\n다중: Dense(3, 'softmax')  / sparse_categorical_crossentropy\n회귀: Dense(1)             / mse"
  },
  {
    "id": "t17",
    "title": "sparse_categorical과 categorical",
    "body": "y가 0, 1, 2 같은 정수면 sparse_categorical_crossentropy, [0, 1, 0]처럼 원-핫이면 categorical_crossentropy예요. 바꿔 쓰면 모양 오류가 나요.",
    "ex": "y = [2, 0, 1]             → sparse_categorical_crossentropy\ny = [[0,0,1],[1,0,0],...] → categorical_crossentropy"
  },
  {
    "id": "t18",
    "title": "Dense 파라미터 수 = (입력 + 1) × 뉴런",
    "body": "뉴런마다 입력 수만큼의 가중치와 편향 1개가 있어요. 그래서 (입력 수 + 1) × 뉴런 수예요. Dropout 층은 파라미터가 0개예요.",
    "ex": "입력 10 → Dense(16)  : (10 + 1) × 16 = 176\nDense(16) → Dense(1) : (16 + 1) × 1 = 17"
  },
  {
    "id": "t19",
    "title": "Dropout은 학습할 때만, 숫자는 끄는 비율",
    "body": "Dropout(0.2)는 학습 중 매번 무작위로 20%의 출력을 0으로 만들어요. 예측할 때는 모든 뉴런을 써요. 남기는 비율이 아니라 끄는 비율이에요.",
    "ex": "Dropout(0.2) → 학습 중 20% 끔, 예측 땐 끄지 않음"
  },
  {
    "id": "t20",
    "title": "EarlyStopping은 val_loss와 patience",
    "body": "monitor='val_loss'로 검증 손실을 지켜보고, patience 에포크 동안 나아지지 않으면 멈춰요. 가장 좋던 가중치로 돌아가려면 restore_best_weights=True가 필요해요.",
    "ex": "EarlyStopping(monitor='val_loss', patience=5,\n              restore_best_weights=True)\nmodel.fit(..., callbacks=[es])"
  }
];

// 파이썬 코드 요약: 시험 순서대로 꼭 알아야 할 코드 (check.py가 code를 이어 붙여 예시 데이터로 실행)
window.AICE_NOTES = [
  {
    "id": "n01",
    "unit": "load",
    "title": "라이브러리 불러오기",
    "body": "시험 첫 문제로 자주 나와요. 별칭(as 뒤 이름)은 관례대로 써요.",
    "code": "import numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\nimport seaborn as sns",
    "tips": [
      "pyplot은 matplotlib 안의 모듈이라 matplotlib.pyplot으로 불러요.",
      "사이킷런은 필요한 것만 from sklearn.○○ import ○○로 불러요."
    ]
  },
  {
    "id": "n02",
    "unit": "load",
    "title": "데이터 불러오고 살펴보기",
    "body": "읽은 뒤 크기, 자료형, 결측, 타깃 비율부터 확인해요.",
    "code": "df = pd.read_csv('data.csv')      # 한글 깨짐 오류면 encoding='cp949'\ndf.head()                         # 앞 5행\ndf.shape                          # (행 수, 열 수)\ndf.info()                         # 열별 Non-Null 개수와 자료형\ndf.describe()                     # 숫자 열 통계 (50% = 중앙값)\ndf['churn'].value_counts()        # 값별 개수, 많은 순, NaN 제외\ndf.isnull().sum()                 # 열별 결측 개수",
    "tips": [
      "value_counts()와 count()는 결측을 세지 않아요.",
      "describe()는 기본으로 숫자 열만 요약해요."
    ]
  },
  {
    "id": "n03",
    "unit": "viz",
    "title": "시각화와 상관관계",
    "body": "범주는 countplot, 연속값 분포는 histplot, 이상치는 boxplot, 두 연속값 관계는 scatterplot, 상관관계는 heatmap이에요.",
    "code": "sns.countplot(data=df, x='contract', hue='churn')   # 범주별 개수\nplt.show()\nsns.histplot(data=df, x='age', bins=20)             # 분포\nplt.show()\nsns.boxplot(data=df, y='monthly')                   # 이상치 (수염 밖 점)\nplt.show()\nsns.scatterplot(data=df, x='age', y='monthly')      # 두 연속값 관계\nplt.show()\ncorr = df.corr(numeric_only=True)                   # 상관계수 -1 ~ 1\nsns.heatmap(corr, annot=True)                       # annot=True: 숫자 표시\nplt.show()\ncorr['churn'].sort_values()                         # 타깃과의 상관 순서",
    "tips": [
      "상관계수 0은 직선 관계가 없다는 뜻일 뿐이에요.",
      "타깃이 한쪽으로 몰려 있으면(불균형) 나눌 때 stratify=y를 써요."
    ]
  },
  {
    "id": "n04",
    "unit": "clean",
    "title": "불필요한 열·결측치·잘못된 값",
    "body": "고치고 나면 꼭 다시 대입해요. 열을 지울 때는 axis=1이에요.",
    "code": "df = df.drop('customerID', axis=1)                       # 열 삭제\ndf['total'] = pd.to_numeric(df['total'], errors='coerce') # ' ' 같은 값 → NaN\ndf['total'] = df['total'].fillna(df['total'].median())     # 중앙값으로 채우기\ndf['gender'] = df['gender'].fillna(df['gender'].mode()[0]) # 최빈값은 [0]\ndf = df.dropna(subset=['age'])                             # age 결측 행만 삭제\ndf['contract'] = df['contract'].replace('월간', '월')       # 값 바꾸기\nq1, q3 = df['monthly'].quantile([0.25, 0.75])\niqr = q3 - q1\ndf = df[df['monthly'] <= q3 + 1.5 * iqr]                   # IQR 위쪽 이상치 제거",
    "tips": [
      "df.drop('id')처럼 axis를 빼면 행에서 찾아 KeyError가 나요.",
      "inplace=True는 None을 돌려줘요. df = df.dropna(inplace=True)는 df를 None으로 만들어요.",
      "결측이 대부분인 열은 채우기보다 지우는 편이 나아요."
    ]
  },
  {
    "id": "n05",
    "unit": "prep",
    "title": "인코딩",
    "body": "모델은 숫자만 받아요. 순서 없는 범주는 원-핫, 두 값이나 순서 있는 범주는 숫자로 바꿔요.",
    "code": "df['gender'] = df['gender'].map({'M': 0, 'F': 1})   # 두 값을 0/1로\ndf = pd.get_dummies(df, columns=['contract'], drop_first=True)   # 원-핫\nfrom sklearn.preprocessing import LabelEncoder\nle = LabelEncoder()                                  # 정렬 순서대로 0, 1, 2 …\ncodes = le.fit_transform(['b', 'a', 'c'])            # [1, 0, 2]",
    "tips": [
      "get_dummies에 columns를 주지 않으면 문자 열만 바뀌고 숫자 열은 그대로예요.",
      "map에 없는 값은 NaN이 돼요."
    ]
  },
  {
    "id": "n06",
    "unit": "prep",
    "title": "X·y 나누기와 데이터 분리",
    "body": "타깃을 뺀 열이 X, 타깃이 y예요. 반환 순서는 X 둘, y 둘이에요.",
    "code": "from sklearn.model_selection import train_test_split\nX = df.drop('churn', axis=1)\ny = df['churn']\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, stratify=y, random_state=42)",
    "tips": [
      "test_size를 안 주면 25%가 검증용이에요.",
      "stratify=y는 클래스 비율 유지, random_state는 결과 고정이에요.",
      "회귀(가격 같은 연속값)에는 stratify를 쓰지 않아요."
    ]
  },
  {
    "id": "n07",
    "unit": "prep",
    "title": "스케일링",
    "body": "기준은 학습 데이터로만 정해요. 검증 데이터는 transform만 해요.",
    "code": "from sklearn.preprocessing import StandardScaler, MinMaxScaler\nsc = StandardScaler()                 # 평균 0, 표준편차 1 (MinMaxScaler는 0 ~ 1)\nX_train = sc.fit_transform(X_train)\nX_test = sc.transform(X_test)         # 다시 fit하지 않기!",
    "tips": [
      "트리 모델은 스케일링 영향이 거의 없고, KNN·로지스틱 회귀·딥러닝은 영향이 커요.",
      "스케일링 결과는 넘파이 배열이라 열 이름이 사라져요."
    ]
  },
  {
    "id": "n08",
    "unit": "ml",
    "title": "머신러닝 모델",
    "body": "범주를 맞히면 Classifier, 숫자를 맞히면 Regressor예요. 사용법은 모두 fit → predict예요.",
    "code": "from sklearn.linear_model import LogisticRegression     # 이름과 달리 분류\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.ensemble import RandomForestClassifier\nlr = LogisticRegression().fit(X_train, y_train)\ndt = DecisionTreeClassifier(max_depth=5, random_state=42).fit(X_train, y_train)\nrf = RandomForestClassifier(n_estimators=100, random_state=42)\nrf.fit(X_train, y_train)\npred = rf.predict(X_test)                    # 0/1 클래스\nproba = rf.predict_proba(X_test)[:, 1]       # 1일 확률\nrf.feature_importances_                      # 변수 중요도\n# 회귀라면: RandomForestRegressor, LinearRegression 등",
    "tips": [
      "max_depth는 트리 깊이, n_estimators는 트리 개수예요.",
      "학습 정확도만 높고 검증 정확도가 낮으면 과대적합이에요."
    ]
  },
  {
    "id": "n09",
    "unit": "eval",
    "title": "성능 평가",
    "body": "분류는 정확도·정밀도·재현율·F1, 회귀는 MAE·MSE·RMSE·R²로 평가해요.",
    "code": "from sklearn.metrics import (accuracy_score, precision_score, recall_score,\n    f1_score, confusion_matrix, classification_report)\naccuracy_score(y_test, pred)\nconfusion_matrix(y_test, pred)        # 행=실제, 열=예측 [[TN, FP], [FN, TP]]\nprecision_score(y_test, pred)         # TP / (TP + FP)\nrecall_score(y_test, pred)            # TP / (TP + FN)\nf1_score(y_test, pred)                # 정밀도·재현율의 조화평균\nprint(classification_report(y_test, pred))\nfrom sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score\n# 회귀: mean_absolute_error(y, p), np.sqrt(mean_squared_error(y, p)) = RMSE, r2_score(y, p)",
    "tips": [
      "불균형 데이터에서는 정확도만 보면 속아요. 재현율과 F1을 같이 봐요.",
      "분류 모델의 score()는 정확도, 회귀 모델의 score()는 R²예요."
    ]
  },
  {
    "id": "n10",
    "unit": "dl",
    "title": "딥러닝 모델 만들고 학습하기",
    "body": "출력층과 손실 함수의 짝이 핵심이에요. 콜백은 fit의 callbacks 리스트로 넘겨요.",
    "code": "from tensorflow.keras import Sequential, Input\nfrom tensorflow.keras.layers import Dense, Dropout\nfrom tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint\nmodel = Sequential([\n    Input(shape=(X_train.shape[1],)),\n    Dense(64, activation='relu'),\n    Dropout(0.2),                       # 학습 때만 20% 끔\n    Dense(32, activation='relu'),\n    Dense(1, activation='sigmoid')      # 이진 분류\n])\nmodel.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])\nes = EarlyStopping(monitor='val_loss', patience=5, restore_best_weights=True)\nmc = ModelCheckpoint('best.keras', monitor='val_loss', save_best_only=True)\nhistory = model.fit(X_train, y_train, epochs=100, batch_size=32,\n                    validation_data=(X_test, y_test), callbacks=[es, mc])\n# 다중 분류: Dense(클래스 수, activation='softmax') + 'sparse_categorical_crossentropy'(정수 라벨)\n# 회귀:     Dense(1) + loss='mse', metrics=['mae']",
    "tips": [
      "Dense 파라미터 수 = (입력 수 + 1) × 뉴런 수, Dropout은 0개예요.",
      "원-핫 라벨이면 categorical_crossentropy, 정수 라벨이면 sparse_categorical_crossentropy예요.",
      "model.summary()로 층과 파라미터 수를 확인해요."
    ]
  },
  {
    "id": "n11",
    "unit": "curve",
    "title": "학습 곡선·예측·저장",
    "body": "history.history에 에포크별 loss, val_loss가 있어요. 검증 손실이 다시 오르면 과대적합이에요.",
    "code": "plt.plot(history.history['loss'], label='loss')\nplt.plot(history.history['val_loss'], label='val_loss')\nplt.xlabel('epoch')\nplt.legend()\nplt.show()\nloss, acc = model.evaluate(X_test, y_test)          # compile의 loss, metrics 순\nprob = model.predict(X_test)                         # sigmoid 확률\npred_dl = (prob > 0.5).astype(int).ravel()           # 0/1로\n# 다중 분류(softmax)라면: prob.argmax(axis=1)\nmodel.save('model.keras')",
    "tips": [
      "history 자체가 아니라 history.history가 딕셔너리예요.",
      "학습·검증 손실이 둘 다 높으면 과소적합이에요. 모델을 키우거나 더 학습해요."
    ]
  }
];
