import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { Maincontainer, MODAL_STYLESCATEGORY } from '../components/Styles';
import {
  FaRegEdit,
} from 'react-icons/fa';



Modal.setAppElement('#root');

function Category() {

  const tableCategory = (users) => {
    return (<>
      <div className="modal">
        <Modal
          isOpen={modal2IsOpen}
          shouldCloseOnOverlayClick={false}
          onRequestClose={() => setModal2IsOpen(false)}
          style={MODAL_STYLESCATEGORY
          }>
          <center>
            <h5 style={{ color: 'black', marginTop: '63px' }}>Please insert your category name</h5>
            <input className="inn" type="text" placeholder="Category name" onChange={onCategoryChange} required /> <br /><br />
            <div className="size">
              <div className="button4"> <button style={{ height: '40px', width: '200px' }} onClick={addUser} >Add Category</button></div>
              <div className="button5"><button onClick={() => setModal2IsOpen(false)}>Cancel</button>
              </div>
            </div>
          </center>
        </Modal>
      </div>
      <div className="TABEL">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((item, i) =>
                <tr key={i}>
                  <td>{item.category}</td>
                      <td><div className="button1"><button onClick={() => selectUser(item.id)}><FaRegEdit size="1.1em" style={{marginTop: '3px'}}/></button></div></td>
                </tr>
              )
            }
            <td colspan="2"><div className="button2" onClick={() => setModal2IsOpen(true)}><button>Add Category</button></div></td>
          </tbody>
        </table>
        <div className="modal">
          <Modal
            isOpen={modalIsOpen}
            shouldCloseOnOverlayClick={false}
            onRequestClose={() => setModalIsOpen(false)}
            style={
              {
                overlay: {
                  backgroundColor: 'rgba(0,0,0,.8)',
                  position: 'fixed',
                  top: '8.3%',
                  left: '13%',
                  right: 0,
                  bottom: 0,
                  zIndex: 1000

                },
                content: {
                  width: '400px',
                  height: '400px',
                  color: 'black',
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%,-50%)',
                  padding: '50px',
                  justifyContent: "space-evenly",
                  backgroundColor: 'rgb(255,255,255)',
                  zIndex: 1000
                }
              }
            }>

            <center>
              <h5 style={{ marginTop: '63px' }}>Change the new category name</h5>
              <input className="inn" type="text" value={category} onChange={(e) => { setCategory(e.target.value) }}/> <br /><br />
              <div className="size">
                <div className="button4"> <button style={{ height: '40px', width: '200px' }} onClick={updateUser}>Update Category</button></div>
                <div className="button5"><button onClick={() => setModalIsOpen(false)}>Cancel</button>
                </div>
              </div>
            </center>
          </Modal>
        </div>
      </div>
    </>);
  };

  const pageNumbers = () => {
    return (
      <div className="pageNumbersPosition">
        <ul className="pageNumbers">
          <li >
            <button
              onClick={handlePrevbtn}
              disabled={hasPrevious ? false : true}
            >
              Prev
            </button>
          </li>
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}

          <li>
            <button
              onClick={handleNextbtn}
              disabled={hasNext ? false : true}
            >
              Next
            </button>
          </li>
        </ul></div>
    );
  };


  // pt adaugare user in modal

  const onCategoryChange = e => setCategory(e.target.value);

  // modal update
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // modal add
  const [modal2IsOpen, setModal2IsOpen] = useState(false);
  const [users, setUser] = useState([])
  const [category, setCategory] = useState("");
  const [userId, setUserId] = useState(null)
  var keyCount;
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const [hasPrevious, setHasPrevious] = useState(false);
  var data;



  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
    setPageIndex(Number(event.target.id));
    getUsers(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users;

  const [currentItems2, setCurrentItems2] = useState(users);

  const renderPageNumbers = pages.map((number) => {
    return (
      <li
        key={number}
        id={number}
        onClick={handleClick}
        className={currentPage == number ? "active" : null}
      >
        {number}
      </li>
    );
  });

  useEffect(() => {
    getUsers(pageIndex);
  }, [])
  function getUsers(pageIndex) {
    fetch(`http://localhost:1338/api/ItemType/Category/?pageNumber=${pageIndex}&pageSize=10`
    ).then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp.data);
        setTotalPages(resp.totalPages);
        setHasNext(resp.hasNextPage);
        setHasPrevious(resp.hasPreviousPage);
        console.log('hasnext  ' + resp.hasNextPage + ' hasprevious: ' + resp.hasPreviousPage);

        setCategory(resp.data[0].category)
        setUserId(resp.data[0].id)
        //console.log(users[0].category);
        console.log(resp);
      })
    })

  }

  const handleNextbtn = () => {

    setPageIndex(pageIndex + 1);
    setcurrentPage(pageIndex + 1);
    setCurrentItems2(users);
    getUsers(pageIndex + 1)
  };


  const handlePrevbtn = () => {
    setPageIndex(pageIndex - 1);
    setcurrentPage(pageIndex - 1);
    setCurrentItems2(users);
    getUsers(pageIndex - 1)
  };



  let pageIncrementBtn = null;
  if (hasNext == true) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (hasPrevious == true) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }




  function deleteUser(id) {
    fetch(`http://localhost:1338/api/ItemType/Category/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers(pageIndex)
      })
    })
  }

  function addUser() {
    const data = { category };
    fetch("http://localhost:1338/api/ItemType/Category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(res => {
        getUsers(pageIndex)
        setModal2IsOpen(false)
      });
  };

  function selectUser(userId) {
    keyCount = Object.keys(users).length;
    for (let i = 0; i < keyCount; i++) {
      if (userId == users[i].id) {
        setCategory(users[i].category)
        setUserId(users[i].id)

      }
      setModalIsOpen(true);

    }
    console.log(keyCount)
  }
  function updateUser() {
    let id = userId;
    let item = { id, category }
    console.warn("item", item)
    console.log(userId)
    fetch(`http://localhost:1338/api/ItemType/Category/${userId}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, category })
    }).then((result) => {
      console.warn(result)
      getUsers(pageIndex)
      setModalIsOpen(false)
    })
  }
  return (

    <Maincontainer>
      {tableCategory(users)}
      {pageNumbers()}
    </Maincontainer>
  );
}
//      <input type="text" value={userId}  onChange={(e)=>{setUserId(e.target.value)}} /> <br /><br /> 
export default Category;