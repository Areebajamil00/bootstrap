// function myfun() {
//   console.log("areeba");
//   var fnamecount = document.getElementById("fname").value.length;
//   var emailcount = document.getElementById("email").value.length;
//   var input = document.getElementById("birthday").value;
//   var input1 = document.getElementById("selection").value;
//   let data = "dd/mm/yyyy";
//   let x = data.split(6, 9);
//   console.log(fnamecount);
//   if (fnamecount > 5) {
//     document.getElementById("fname").innerHTML = "Character Limit Exceeds";
//   }
//   if (fnamecount <= 0) {
//     document.getElementById("fname").innerHTML = "name can not be null";
//   }

//   if (emailcount <= 0) {
//     input.innerHTML =
//       "<span style='color: red;'>" + "email cannot be empty</span>";
//   }
//   var data1 = document.getElementById("email").value;
//   //   if (!data.find("@")) {
//   //     "<span style='color: red;'>" + "invalid email</span>";
//   //   }
//   if (input == " " || input == null) {
//     "<span style='color: red;'>" + "DOB cannot be empty </span>";
//   }
//   if (input1 == "" || input1 == null) {
//     // <span style="color:red">Please select the value to proceed</span>;
//     document.getElementById("input1").innerHTML =
//       "<span style='color: red;'>" +
//       "Please select the value to proceed</span>";
//   }
// }

var name = document.getElementById("fname");
var email = document.getElementById("email");
var bdy = document.getElementById("birhday");
var form = document.getElementById("form");
const errorele = document.getElementById("error");
function myfun() {
  let msg = [];
  console.log(name.value.length);
  if (name.value === "" || name.value === null) {
    document.getElementById("error").innerHTML = "name can not be null";
    // msg.push("name can not be null");
  }
  if (msg.length > 0) {
    errorele.innerText = msg.join(",");
  }
}
// form.addEventListener("submit", (e) => {
//   let msg = [];
//   if (name.value === "" || name.value === null) {
//     msg.push("name can not be null");
//   }
// });
