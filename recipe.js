let rec_input = document.querySelector(".rec-input");
let btn1 = document.querySelector(".btn1");
let title1 = document.querySelector(".title");
let ingre_info = document.querySelector(".ingre-info");
let inst_info = document.querySelector(".inst-info");

let api_key = "9ztiL+Kl4JTbGyDeqju/yg==ntrbFVaDozwZlxQb";
let option = {
  method: "GET",
  headers: { "X-Api-Key": api_key },
};

async function getrecipe(title) {
  let url = `https://api.api-ninjas.com/v1/recipe?query=${title}`;
  let rec = await fetch(url, option);
  let data = await rec.json();

  console.log(data[0]);

  title1.innerHTML = data[0].title;
  ingre_info.innerHTML = data[0].ingredients;

  inst_info.innerHTML = data[0].instructions;
}

btn1.addEventListener("click", () => {
  getrecipe(rec_input.value);
});
