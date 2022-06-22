// 头像标签
let my = document.querySelector("#dropdownUser2");

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
let theadTr = document.querySelector(
  "body > main > div.b-example-divider > div:nth-child(3) > div.col-10 > table > thead > tr"
);

//点击左边的ul
leftUl.addEventListener("click", (e) => {
  if (e.target.nodeName == "A") {
    samsunglink(leftLis, "active", true);
    e.target.classList.add("active");
    crumbs.innerHTML = e.target.innerHTML;

    if (e.target.dataset.message == "YGxx") {
      theadTr.innerHTML = ` <th scope="col">工号</th>
      <th scope="col">账号</th>
      <th scope="col">密码</th>
      <th scope="col">名字</th>
      <th scope="col">性别</th>
      <th scope="col">状态</th>
      <th scope="col">编辑</th>`;
      sessionStorage.setItem("1111", "工号,账号,密码,名字,性别,状态");
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
        <button type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#myModal">修改</button>
        <button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#myModal">删除</button>
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
    }

    if (e.target.dataset.message == "YGgz") {
      theadTr.innerHTML = `<th scope="col">姓名</th>
      <th scope="col">工资</th>
      <th scope="col">职位</th>
      <th scope="col">编辑</th>`;

      let sql = "select * from role";

      Ajax({
        url: "http://127.0.0.1/php/query.php",
        data: { sql },
        success(res) {
          //设置sessionStorage 储存数据
          setSession(res);
          res = JSON.parse(res);
          let arr = ["R_name", "R_salary", "R_position"];
          let str = `
          <td>
              <button type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#myModal">修改</button>
              <button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#myModal">删除</button>
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
    }

    if (e.target.dataset.message == "Cd") {
      theadTr.innerHTML = `<th scope="col">菜名</th>
      <th scope="col">菜类</th>
      <th scope="col">菜价</th>
      <th scope="col">编辑</th>`;

      let sql = "select * from menu;";

      Ajax({
        url: "http://127.0.0.1/php/query.php",
        data: { sql },
        success(res) {
          //设置sessionStorage 储存数据
          setSession(res);
          res = JSON.parse(res);
          let arr = ["M_dishName", "M_kind", "M_price"];
          let str = `
          <td>
              <button type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#myModal">修改</button>
              <button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#myModal">删除</button>
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
    }

    if (e.target.dataset.message == "CPzl") {
      theadTr.innerHTML = `<th scope="col">菜类</th>
      <th scope="col">所有的菜品</th>
      <th scope="col">编辑</th>`;

      let sql = "select * from kind;";

      Ajax({
        url: "http://127.0.0.1/php/query.php",
        data: { sql },
        success(res) {
          //设置sessionStorage 储存数据
          setSession(res);
          res = JSON.parse(res);
          let arr = ["K_kind"];
          let str = `
          <td>
              <button type="button" class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#myModal">查看所有的菜品</button>
          </td>
          <td>
              <button type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#myModal">修改</button>
              <button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#myModal">删除</button>
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
    }

    if (e.target.dataset.message == "Fd") {
      theadTr.innerHTML = `<th scope="col">店名</th>
      <th scope="col">地址</th>
      <th scope="col">成立时间</th>
      <th scope="col">店长</th>
      <th scope="col">编辑</th>`;

      let sql = `select * from outlet inner join role where D_serial = R_serial  and R_position ="店长"`;

      Ajax({
        url: "http://127.0.0.1/php/query.php",
        data: { sql },
        success(res) {
          //设置sessionStorage 储存数据
          setSession(res);
          res = JSON.parse(res);
          let arr = ["D_name", "D_address", "D_date","R_name"];
          let str = `
          <td>
              <button type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#myModal">修改</button>
              <button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#myModal">删除</button>
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
    }

    if (e.target.dataset.message == "DYye") {
      theadTr.innerHTML = `<th scope="col">店名</th>
      <th scope="col">店长</th>
      <th scope="col">日期</th>
      <th scope="col">营业额(W)</th>
      <th scope="col">编辑</th>`;

      let sql = `select * from outlet inner join business where D_serial = B_shop `;

      Ajax({
        url: "http://127.0.0.1/php/query.php",
        data: { sql },
        success(res) {
          //设置sessionStorage 储存数据
          setSession(res);
          res = JSON.parse(res);
          let arr = ["D_name", "D_address", "B_date","B_totalPrices"];
          let str = `
          <td>
              <button type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#myModal">修改</button>
              <button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#myModal"  >删除</button>
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
        <button type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#myModal">修改</button>
        <button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#myModal">删除</button>
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
  arr = arr.split(",");
  for (let k in data) {
    let tr = document.createElement("tr");
    tr.dataset.id=data[k]["Id"]
    arr.forEach((item) => {
      let td = document.createElement("td");
      td.innerHTML = data[k][item];
      tr.appendChild(td);
    });
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

//添加按钮
let tjan = document.querySelector("body > main > div.b-example-divider > div:nth-child(2) > div:nth-child(2) > button")

//添加按钮确认事件
tjan.addEventListener("click",function fn(){
    console.log(111);
    let ntkbt =document.querySelector("#myModal > div > div > div.modal-header > h4")
    console.log(ntkbt);
    ntkbt.innerHTML="添加"+crumbs.innerText.trim();
  let ntknr = document.querySelector("#myModal > div > div > div.modal-body")
  
})


//模态框确认按钮
let ntkqd =document.querySelector("#myModal > div > div > div.modal-footer > button:nth-child(1)")

ntkqd.addEventListener("click",()=>{




 let ntkinp = document.querySelectorAll("#myModal > div > div > div.modal-body input")
 let arr = []
 ntkinp.forEach((item)=>{
    arr.push(item.value)
 })
 let sql = `insert into staff value(${arr[0]},${arr[1]},${arr[2]},${arr[3]},'${arr[4]}','${arr[5]}','${arr[6]}'); insert into role value(null,'${arr[0]}',null,null,null)`
  console.log(sql);
})

//渲染模态框
// function xlmtk(){
  
// }

