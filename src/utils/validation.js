export const checkEmail = (email) => {
  const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}$/;
  if (regExp.test(email)) {
    return true;
  } else {
    return false;
  }
}

export const checkPw = (pw) => {
  const regExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  console.log('pwTest=', regExp.test(pw)); //test
  if (regExp.test(pw)) {
    return true;
  } else {
    return false;
  }
}

export const checkPwConfirm = (pw, pwConfirm) => {
  if (pw === pwConfirm && pwConfirm.length > 0) {
    return true;
  } else {
    return false;
  }
}