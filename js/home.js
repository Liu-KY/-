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

//退出登录框显示和隐藏
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
let leftUl = document.querySelector(
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

//tbody
let tbody = document.querySelector(
  "body > main > div.b-example-divider > div:nth-child(3) > div.col-10 > table > tbody"
);
//thead下面的tr
let theadTr = document.querySelector("body > main > div.b-example-divider > div:nth-child(3) > div.col-10 > table > thead > tr")
console.log(theadTr);

//点击左边的ul
leftUl.addEventListener("click", (e) => {
  if (e.target.nodeName == "A") {
    samsunglink(leftLis, "active", true);
    e.target.classList.add("active");
    crumbs.innerHTML = e.target.innerHTML;
    if(e.target.dataset.message == "YGxx"){
      console.log("员工信息");
    }


    if(e.target.dataset.message == "YGgz"){
      theadTr.innerHTML=`<th scope="col">姓名</th>
      <th scope="col">工资</th>
      <th scope="col">职位</th>
      <th scope="col">编辑</th>`

      let sql = "select * from role"
      
      Ajax({
        url: "http://127.0.0.1/php/query.php",
        data:{sql},
        success(res) {
          //设置sessionStorage 储存数据
          setSession(res);
          res = JSON.parse(res);
          let arr = [
            "R_name",
            "R_salary",
            "R_position",
          ];
          let str = `
          <td>
              <button type="button" class="btn btn-warning btn-sm">修改</button>
              <button type="button" class="btn btn-danger btn-sm">删除</button>
              </button>
          </td>`;
          // 将需要的内容模板储存到Storage
          sessionStorage.setItem("arr", arr);
          // 将默认按钮模板储存到Storage
          sessionStorage.setItem("str", str);
          dateTrtd(res.splice(0, 10), arr, str);
          //渲染进度条
          progressBarWidth();
          // 渲染右上页码
          rightpageNumber();
        },
      })
    }

    if(e.target.dataset.message == "YGzw"){
      console.log("员工职位");
    }
    if(e.target.dataset.message == "Cd"){
      console.log("菜单");
    }
    if(e.target.dataset.message == "CPzl"){
      console.log("菜品种类");
    }
    if(e.target.dataset.message == "Fd"){
      console.log("分店");
    }
    if(e.target.dataset.message == "DYye"){
      console.log("店营业额");
    }
  }
});



// 打开页面加载默认的员工信息数据
Ajax({
  url: "http://127.0.0.1/php/queryStaffMessage.php",
  success(res) {
    //设置sessionStorage 储存数据
    setSession(res);
    res = JSON.parse(res);
    let arr = [
      "S_jobNumber",
      "S_username",
      "S_password",
      "S_name",
      "S_gender",
      "S_stat",
    ];
    let str = `
    <td>
        <button type="button" class="btn btn-warning btn-sm">修改</button>
        <button type="button" class="btn btn-danger btn-sm">删除</button>
        </button>
    </td>`;
    // 将需要的内容模板储存到Storage
    sessionStorage.setItem("arr", arr);
    // 将默认按钮模板储存到Storage
    sessionStorage.setItem("str", str);
    dateTrtd(res.splice(0, 10), arr, str);
    //渲染进度条
    progressBarWidth();
    // 渲染右上页码
    rightpageNumber();
  },
});




// 获取分页的ul
let padingUl = document.querySelector(
  "body > main > div.b-example-divider > div:nth-child(4) > div.col-3 > ul"
);

// 分页
padingUl.addEventListener("click", (e) => {
  //首页
  if (e.target.dataset.index == "home") {
    let index = 1;
    let res = JSON.parse(sessionStorage.getItem("data"));
    sessionStorage.setItem("atPagination", index);
    progressBarWidth();
    dateTrtd(res.splice(--index * 10, 10));
    rightpageNumberIndex();
  }
  //上一页
  if (e.target.dataset.index == "previousPage") {
    console.log(222);
    let index = sessionStorage.getItem("atPagination");
    if (index <= 1) return alert("前面没有了");
    sessionStorage.setItem("atPagination", --index);
    progressBarWidth();
    let res = JSON.parse(sessionStorage.getItem("data"));
    dateTrtd(res.splice(--index * 10, 10));
    rightpageNumberIndex();
  }
  //下一页
  if (e.target.dataset.index == "nextPage") {
    let index = sessionStorage.getItem("atPagination");
    if (index == sessionStorage.getItem("sumPagination"))
      return alert("最后了");
    let res = JSON.parse(sessionStorage.getItem("data"));
    dateTrtd(res.splice(index * 10, 10));
    sessionStorage.setItem("atPagination", ++index);
    progressBarWidth();
    rightpageNumberIndex();
  }
  //尾页
  if (e.target.dataset.index == "trailerPage") {
    let index = sessionStorage.getItem("sumPagination");
    let res = JSON.parse(sessionStorage.getItem("data"));
    sessionStorage.setItem("atPagination", index);
    progressBarWidth();
    dateTrtd(res.splice(--index * 10, 10));
    rightpageNumberIndex();
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

//设置sessionStorage
function setSession(data) {
  sessionStorage.setItem("data", data);
  data = JSON.parse(data);
  sessionStorage.setItem("sumPagination", Math.ceil(data.length / 10));
  sessionStorage.setItem("atPagination", 1);
}

//渲染表格
function dateTrtd(data) {
  tbody.innerHTML = "";
  // 获取需要的内容模板
  let arr = sessionStorage.getItem("arr");
  // 获取需要的默认按钮模板
  let str = sessionStorage.getItem("str");
  // 遍历传进来的数据
  arr = arr.split(',')
    for (let k in data) {
    let tr = document.createElement("tr");
    arr.forEach(item=>{
      let td = document.createElement("td");
      td.innerHTML = data[k][item];
      tr.appendChild(td);
    })
    tr.innerHTML += str;
    tbody.appendChild(tr);
  }
}

//渲染右上页码
function rightpageNumber() {
  let rightpageNumber = document.querySelector(
    "body > main > div.b-example-divider > div:nth-child(2) > div:nth-child(4) > select"
  );
  rightpageNumber.innerHTML = "";
  let index = sessionStorage.getItem("sumPagination");
  for (i = 1; i <= index; i++) {
    let option = document.createElement("option");
    option.innerHTML = i;
    option.dataset.index = i;
    rightpageNumber.appendChild(option);
  }
}

//把当前所在的页面渲染到左上角页码上
function rightpageNumberIndex() {
  let rightpageNumber = document.querySelector(
    "body > main > div.b-example-divider > div:nth-child(2) > div:nth-child(4) > select"
  );
  rpageNumber.selectedIndex = sessionStorage.getItem("atPagination") - 1;
}

//渲染右上进度条
function progressBarWidth() {
  let progressBar = document.querySelector(
    "body > main > div.b-example-divider > div:nth-child(3) > div.col-10 > div > div"
  );
  progressBar.style.width = `${
    (sessionStorage.getItem("atPagination") /
      sessionStorage.getItem("sumPagination")) *
    100
  }%`;
}

// 左上角页码
let rpageNumber = document.querySelector(
  "body > main > div.b-example-divider > div:nth-child(2) > div:nth-child(4) > select"
);
//点击左上角页码切换
rpageNumber.onchange = function () {
  var index = rpageNumber.selectedIndex + 1;
  let res = JSON.parse(sessionStorage.getItem("data"));
  sessionStorage.setItem("atPagination", index);
  dateTrtd(res.splice(--index * 10, 10));
  progressBarWidth();
};



