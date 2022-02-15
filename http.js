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
  fecthJson("http://localhost:3000/employees");
}

function listRoles(){
  fecthJson("http://localhost:3000/roles");
}