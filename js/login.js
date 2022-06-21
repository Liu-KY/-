check();
function check() {
  console.log(111);
  Ajax({
    url: "http://127.0.0.1/php/authCode.php",
    success(res) {
      const span = document.getElementById("captchaSpan");
      span.innerHTML = res + "=?";
      sessionStorage.setItem("captcha", res);
    },
  });
}

const form = document.querySelector("body > div > form");

form.addEventListener("submit", (e) => {
  e = e || window.event;
  e.preventDefault();
  const username = document.querySelector(
    "body > div > form > div:nth-child(1) > div.col-6 > input"
  ).value;
  const password = document.querySelector(
    "body > div > form > div:nth-child(2) > div.col-6 > input"
  ).value;
  const verify = document.querySelector(
    "body > div > form > div:nth-child(3) > div.col-4 > input"
  ).value;

  //   非空判断
  if (!username || !password || !verify) return alert("请输入完整内容");

  //获取验证码
  let sum = sessionStorage.getItem("captcha").split("+");
  sum = +sum[0] + +sum[1];
  //判断验证码是否正确
  if (verify != sum) {
    alert("小学数学都不会吗");
    check();
    return;
  }

  Ajax({
    url: "http://127.0.0.1/php/login.php",
    data: { username, password },
    success(res) {
      if (res == "账号密码错误") {
        check();
        alert("账号密码错误请重新输入");
      } else {
        setCookie("login", 1);
        sessionStorage.setItem("message", res);
        location.href = "./home.html"
      }
    },
    type: "POST",
  });
});
