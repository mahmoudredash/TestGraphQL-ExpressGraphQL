# comund {npm run dev:server and  npm run json:server}
# comund {node server.js and json-server --watch data.json }
# test won
{
#   format get al data
  customers{
    id,
    name,
    email,
    age
  }
  
#   format get data of id 
  customer(id:"1"){
    name,
    email,
    age
  }
}


#add data

mutation{
  addcustomer(name:"mahmoud",email:"mahmoud@gmail.com",age:24){
   id,name,email,age 
  }
}
#delete data 

mutation{
  deletecustomer(id:"1"){
    id
  }
}


# edit data
mutation{
  editcustomer(id:"P4pxggT",age:23){
    name,id,age
  }
}

# nots in doc : == {} OR !== inclued