//var learn = [`konsisten`, `mandiri`];

//learn.push(`haha`);

//console.log(learn);
function cari() {
  var name = `moren`;
  var age = `14`;
  var job = `NBA player`;

  var datas = [name, age, job];

  var target = job;

  for (let data of datas) {
    if (data === target) {
      alert(`found ` + data);
      break;
    }
  }
}

function dialog() {
  const container = document.querySelector(".dialog");
  container.innerHTML += `<h1 class="dialog-trigger" id="text">i love you.</h1>`;

  const view = document.querySelector(`#text`);
  view.scrollIntoView({ behavior: "smooth" });
}
