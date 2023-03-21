import React, { useEffect, useState } from 'react'
function Fetching() {
  const [users, setUser] = useState([])
  const [category, setCategory] = useState("");
  const [userId,setUserId]=useState(null)
  var keyCount;
  useEffect(() => {
    getUsers();
  }, [])
  function getUsers() {
    fetch("http://localhost:5000/api/ItemType/Category").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp.data)
        setCategory(resp.data[0].category)
        setUserId(resp.data[0].id)
       //console.log(users[0].category);
       console.log(resp);
      })
    })
  }

  function deleteUser(id) {
    fetch(`http://localhost:5000/api/ItemType/Category/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  function selectUser(userId)
  {
    keyCount  = Object.keys(users).length;
    for(let i=0; i< keyCount; i++) {
        if(userId == users[i].id) {
            setCategory(users[i].category)
            setUserId(users[i].id)
            
        }
        
    }
    console.log(keyCount)
  }
  function updateUser()
  {
      let id = userId;
    let item={id, category}
    console.warn("item",item)
    console.log(userId)
    fetch(`http://localhost:5000/api/ItemType/Category/${userId}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({id,category})
    }).then((result) => {
        console.warn(result)
        getUsers()
    })
  }
  return (
    <div className="drop-down">
      <h1>Update User Data With API </h1>
      <table border="1" style={{ float: 'left' }}>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
          </tr>
          {
            users.map((item, i) =>
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.category}</td>
                <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>
                <td><button onClick={() => selectUser(item.id)}>Update</button></td>
              </tr>
            )
          }
        </tbody>
      </table>
      <div>
      <input type="text" value={category} onChange={(e)=>{setCategory(e.target.value)}} /> <br /><br />
        <button onClick={updateUser} >Update User</button>  
      </div>
    </div>
  );
}
//      <input type="text" value={userId}  onChange={(e)=>{setUserId(e.target.value)}} /> <br /><br /> 
export default Fetching;