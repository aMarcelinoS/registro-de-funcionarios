function fecthJson(url, options){
  return fetch(url, options)
  .then((r) => {
    if(r.ok){
      return r.json();
    }else{
      throw new Error(r.statusText);
    }
  });
}

function listEmployees(){
  return fecthJson("http://localhost:3000/employees");
}

function listRoles(){
  return fecthJson("http://localhost:3000/roles");
}

function updateEmployee(id, employee){
  return fecthJson(`http://localhost:3000/employees/${id}`,{
    method: "PUT",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(employee),
  });
}

function createEmployee(employee){
  return fecthJson(`http://localhost:3000/employees`,{
    method: "POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(employee),
  });
}