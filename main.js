let employees = [];
let roles = [];
const listEl = document.querySelector("ul");
const formEl = document.querySelector("form");

async function init(){
  try{
    [employees, roles] = await Promise.all([listEmployees(), listRoles()]);
    renderData();
  }catch(erro){
    showError(erro);
  }
}
init();

function renderData(){
  let items = employees.map((employee) => {
    let role = roles.find((role) => role.id == employee.role_id)
    return `<li>${employee.name}<br>${role.name}</li>`;
  });
  listEl.innerHTML = items.join("");
}

function showError(error){
  document.getElementById("app").innerHTML = "Erro ao carregar dados";
  console.error(error);
}
