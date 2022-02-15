
async function init(){
  try{
  let [employees, roles] = await Promise.all([ 
    fecthJson("http://localhost:3000/employees"), 
    fecthJson("http://localhost:3000/roles"),
  ]);
    let table = renderTable(employees, roles);
    document.getElementById("app").innerHTML = table;
  }catch(erro){
    showError(erro);
  }
}
init();

function renderTable(employees, roles){
  let rows = employees.map(employee => {
    let role = roles.find(role => role.id == employee.role_id);
    return `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${role.name}</td></tr>`;
  });
  return `<table>${rows.join("")}</table>`;
}

function showError(error){
  document.getElementById("app").innerHTML = "Erro ao carregar dados";
  console.log(error);
}
