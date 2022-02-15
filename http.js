function fecthJson(url){
  return fetch(url)
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