const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

//querySelector

const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const submit = document.querySelector("#btn");

//evnetListener

function handleCheckId() {
  if (emailReg(this.value)) {
    // 조건 수정확인 필요
    console.log("success");
    userEmail.classList.remove("is--invalid");
  } else {
    console.log("올바른 형식으로 입력하세요!");
    userEmail.classList.add("is--invalid");
  }
}

function handleCheckPw() {
  if (pwReg(this.value)) {
    // 조건 아리까리함
    console.log("great!!");
    userPassword.classList.remove("is--invalid");
  } else {
    console.log("nono");
    userPassword.classList.add("is--invalid");
  }
}

function handleSubmit(e) {
  if (userEmail.value === user.id && userPassword.value === user.pw) {
    console.log(
      "제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발"
    );
    window.location.href = "welcome.html";
  } else {
    e.preventDefault();
    console.log("실패");
  }
}

userEmail.addEventListener("input", handleCheckId);
userPassword.addEventListener("input", handleCheckPw);
submit.addEventListener("click", handleSubmit);
//classList

//preventDefault
