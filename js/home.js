// 头像标签
let my = document.querySelector("#dropdownUser2");

// let header = document.querySelector(
//   "body > main > div.b-example-divider > header"
// );

//设置退出登录的ul
let myUl = document.querySelector(
  "body > main > div.b-example-divider > header > div > div.d-flex.align-items-center > div.flex-shrink-0.dropdown > ul"
);
// 欢迎标签
let mySpan = document.querySelector("#dropdownUser2 > span");
//个人信息的json数据
let message = JSON.parse(sessionStorage.getItem("message"));
// 设置登录后的欢迎语
mySpan.innerHTML = "欢迎您" + message.A_name + "!";

my.addEventListener("click", () => {
  myUl.classList.toggle("activate");
});

myUl.addEventListener("click", (e) => {
  myUl.classList.remove("activate");
  if (e.target.className.indexOf("myProfile") != -1) {
    console.log(111);
  }
  if (e.target.className.indexOf("changePassword") != -1) {
    console.log(222);
  }
  // 退出登录
  if (e.target.className.indexOf("logout") != -1) {
    location.href = "./login.html";
    delCookie("login");
    sessionStorage.removeItem("message");
  }
});

// 右边ul
let leftul = document.querySelector(
  "body > main > div.d-flex.flex-column.flex-shrink-0.p-3.text-white.bg-dark > ul"
);
// 右边ul的全部儿子
let leftLis = document.querySelectorAll(
  "body > main > div.d-flex.flex-column.flex-shrink-0.p-3.text-white.bg-dark > ul > li"
);
// 面包屑
let crumbs = document.querySelector(
  "body > main > div.b-example-divider > header > div > div.dropdown > ul > li > a"
);

leftul.addEventListener("click", (e) => {
  if (e.target.nodeName == "A") {
    samsunglink(leftLis, "active", true);
    e.target.classList.add("active");
    crumbs.innerHTML = e.target.innerHTML;
  }
});

// 排他
function samsunglink(data, style, son) {
  if (son) {
    data.forEach((item) => {
      item.firstElementChild.classList.remove(style);
    });
  } else {
    data.forEach((item) => {
      item.classList.remove(style);
    });
  }
}

//tbody
let tbody = document.querySelector(
  "body > main > div.b-example-divider > div:nth-child(3) > div.col-10 > table > tbody"
);



// 获取数据
Ajax({
  url: "http://127.0.0.1/php/queryStaffMessage.php",
  success(res) {
    //设置sessionStorage
    setSession(res);
    res = JSON.parse(res);
    let arr = [
      "S_gender",
      "S_jobNumber",
      "S_name",
      "S_password",
      "S_stat",
      "S_username",
    ];
    let str = `
    <td>
        <button type="button" class="btn btn-warning btn-sm">修改</button>
        <button type="button" class="btn btn-danger btn-sm">删除</button>
        </button>
    </td>`;
    dateTrtd(res.splice(0, 10), arr, str);
  },
});



//设置sessionStorage
function setSession(data) {
  sessionStorage.setItem("data", data);
  data = JSON.parse(data);
  sessionStorage.setItem("sumPagination", Math.ceil(data.length / 10));
  sessionStorage.setItem("atPagination", 1);
}


//渲染表格
function dateTrtd(data, arr, str) {
  tbody.innerHTML = "";
  let tr = document.createElement("tr");
  for (let k in data) {
    let tr = document.createElement("tr");
    for (let key in data[k]) {
      if (arr.indexOf(key) != -1) {
        let td = document.createElement("td");
        td.innerHTML = data[k][key];
        tr.appendChild(td);
      }
    }
    tr.innerHTML += str;
    tbody.appendChild(tr);
  }
}
