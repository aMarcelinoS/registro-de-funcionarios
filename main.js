let employees = [];
let roles = [];
let selectedItem;
const listEl = document.querySelector("ul");
const formEl = document.querySelector("form");
const bdelete = document.getElementById("bdelete");
const bcancel = document.getElementById("bcancel");
const bsubmit = document.getElementById("bsubmit")

async function init(){
  try{
    [employees, roles] = await Promise.all([listEmployees(), listRoles()]);
    renderData();
    bcancel.addEventListener("click", clearSelection);
  }catch(erro){
    showError(erro);
  }
}
init();

//Seleciona item na lista
function selectItem(employee, li){
  clearSelection();
  selectedItem =employee
  li.classList.add("selected");
  formEl.name.value = employee.name;
  formEl.salary.valueAsNumber = employee.salary;
  formEl.role_id.value = employee.role_id;
}

function clearSelection(){
  selectedItem = undefined;
  const li = listEl.querySelector(".selected");
  if(li != null){
    li.classList.remove("selected");
  }
  formEl.name.value = "";
  formEl.salary.value = "";
  formEl.role_id.value = "";
  bdelete.style.display = "none";
  bcancel.style.display = "none";
}

//Gera a lista de funcionários
function renderData(){
   for(const employee of employees){
    let role = roles.find((role) => role.id == employee.role_id);
    const li = document.createElement("li");
    const divName = document.createElement("div");
    divName.textContent = employee.name;
    const divRole = document.createElement("div");
    divRole.textContent = role.name;
    li.appendChild(divName);
    li.appendChild(divRole);
    listEl.appendChild(li);

    li.addEventListener("click", () => selectItem(employee, li));
  }
}

function showError(error){
  document.getElementById("errors").textContent = "Erro ao carregar dados";
  console.error(error);
}
