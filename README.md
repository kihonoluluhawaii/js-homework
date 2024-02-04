네이버 로그인 페이지 구현

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.

 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

첫걸음

email과 password 의 input 값을 받는 함수를 각각 만들어주고 그안에 정규식을 사용하여 사용자가 입력한 값이 정규식안에 포함이 되면 error-message가 제거되게 만들어줌.

테스트를 진행해보니 password input 란에 숫자가 들어가지 않으면 error-message가 제거되지않음.
여러가지 방법을 시도해 보았지만 답을 찾지못해 결국 error-message를 수정하여 사용자가 숫자도 입력해야 된다는것을 알려주도록 수정함.
이렇게 email과 password input 값을 받아 조건이 성립하면 error-message를 지우고 다음단계인 로그인함수 handleSubmit()에 조건을 검.

문제 발생
여기서 문제가 발생. 분명 userEmail.value 와 userPassword.value 가 user.id, user.pw 와 각각 일치 하는데도 페이지 이동이 안되고 에러페이지가 뜸. 조건문의 값들도 바꿔보고 형식을 아무리 바꿔봐도 에러페이지가 뜸.

테스트 진행
(userEmail.value === user.id) 조건만 걸거나 (userPassword.value === user.pw) 조건만 걸면 정상적으로 페이지가 이동됨. if 문안에 if 문 , OR 연산자 등 몇가지 조건을 바꿔가며 두가지 조건이 모두 성립하는 값을 넣으면 에러페이지.

입력값을 반환하여 변수에 저장해서 사용해도 위와 마찬가지 상황.

여기서 의문인점은 에러페이지로 넘어가기 직전 console.log 에는 조건이 성립했을 때 띄워주는 문구가 정상적으로 뜨는것을 확인. loginerror-ezgif com-optimize 에러페이지 해결법을 찾아 쿠키 와 캐시데이터도 삭제해봤지만 해결이 되지않음.
![loginerror-ezgif com-optimize](https://github.com/kihonoluluhawaii/js-homework/assets/153144213/1da133c7-1773-420f-88e5-3d59458c9df9)
원인을 찾아보자,,,,,,,

플랜 B
페이지를 이동시키는 다른 방법을 찾아보다 window.open("./welcome.html", "_blank"); 을 사용했더니 새 페이지에서 정상적으로 웰컴문구를 볼 수 있음. 기존페이지에는 여전히 에러페이지가 뜨는 상태. 그럼 조건문 성립에는 이상이 없다는 걸까? 왜 window.location.href 가 작동하지 않는 것인지를 찾아보니 브라우저의 확장 기능이 페이지 이동을 차단했을 가능성이 농후. 그렇다면 왜 로그인 조건을 하나만 걸면 작동되고 두 조건을 비교했을때는 넘어가지 않는 것일까?

공부할게 넘 많다.

추가기능
IP 보안 버튼을 클릭시 넘어가는 페이지 주소를 갱신해서 넣어줌
