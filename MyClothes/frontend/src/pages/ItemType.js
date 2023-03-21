import React, {
  useEffect,
  useState,
} from 'react'
import Modal from 'react-modal';
import "../components/Styles-fetching2.css";
import {
  Maincontainer,
  colors,
  MODAL_STYLESCATEGORY
} from '../components/Styles';
import {
  FaRegEdit,
} from 'react-icons/fa';
import {
  AiFillDelete,
} from 'react-icons/ai';
import { useAlert } from 'react-alert';


Modal.setAppElement('#root');

function ItemType() {

  const baseURL = 'http://localhost:1338/api/ItemType/';


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
            <h5 >Please insert item name</h5>
            <input className="inn" type="text" placeholder="Item name" onChange={onCategoryChange} required /> <br /><br />
            <h5 style={{ marginTop: '3px', marginBottom: '10px'}}>Please choose item category</h5>
            <div class="select" style={{ marginBottom: '20px'}}><select onChange={handleSelect}>
              <option disabled selected>Choose</option>
              {
                categoryName.map((item, i) =>
                  <option key={i} >{item.category}</option>
                )}
            </select></div>
            <div className="size">
              <div className="button4"> <button style={{ height: '40px', width: '200px', marginBottom: '-20px'}} onClick={addItem} >Add ItemType</button></div>
              <div className="button5" style={{marginTop:'-20px'}}><button onClick={() => setModal2IsOpen(false)}>Cancel</button>
              </div>
            </div>
          </center>
        </Modal>
      </div>

      <div className="modal">
        <Modal
          isOpen={modalIsOpen}
          shouldCloseOnOverlayClick={false}
          onRequestClose={() => setModalIsOpen(false)}
          style={MODAL_STYLESCATEGORY}>
          <center>
            <h5 style={{ marginTop: '63px' }}>Change the new item name</h5>
            <input className="inn" type="text" value={itemType} onChange={(e) => { setItemType(e.target.value) }} /> <br /><br />
            <div className="size">
              <div className="button4"> <button style={{ height: '40px', width: '200px' }} onClick={updateUser}>Update Category</button></div>
              <div className="button5"><button onClick={() => setModalIsOpen(false)}>Cancel</button>
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
              <th>Category</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((item, i) =>
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.itemTypeCategory.category}</td>
                  <td><div className="button3"><button onClick={() => deleteUser(item.id)}><AiFillDelete size="1.1em" style={{marginTop: '3px'}}/></button></div></td>
                      <td><div className="button1"><button onClick={() => selectUser(item.id)}><FaRegEdit size="1.1em" style={{marginTop: '3px'}}/></button></div></td>
                </tr>
              )
            }
            <td colspan="2"><div className="button2" onClick={() => setModal2IsOpen(true)}><button>Add New Item</button></div></td>
            <td colspan="2"><input type="text" class="input-search" id="input-search" onChange={event => Search(event.target.value)} placeholder/>
<label class="search" for="input-search">
</label></td>
          </tbody>
        </table>
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

  // alert
const alert = useAlert();

  // pt adaugare user in modal
  const onCategoryChange = e => setCategory(e.target.value);

  const handleSelect = (event) => {
    setSelectValue(event.target.value)
  }

  // search for
  const [origCryptosCount, setOrigCryptosCount] = useState([]);

  // modal update
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);

  // colecteaza toate datele de la get
  const [users, setUser] = useState([])

  // memoreaza datele curente
  const [category, setCategory] = useState("");

  //memoreaza numele categoriei si id pentru utlizare ulterioara
  const [categoryName, setCategoryName] = useState([])
  const [categoryId, setCategoryId] = useState("");

  // memoreaza id-ul curent si numele pt itemType
  const [itemId, setitemId] = useState(null);
  const [itemType, setItemType] = useState("");

  // constante importante pt preluare date din json
  const [totalPages, setTotalPages] = useState(7);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const [hasPrevious, setHasPrevious] = useState(false);

  //memoreaza valoarea din select
  const [selectValue, setSelectValue] = useState("");

  // afisarea datelor pt fiecare pagina
  const [currentItems, setcurrentItems] = useState(users);

  // variabila folosita pt a inregistra totalcount
  var keyCount;

  // variabila in care retin prima oara datele
  var data;

  // pt paginare, event de modificare a paginii
  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
    setPageIndex(Number(event.target.id));
    getUsers(Number(event.target.id));
  };

  // pt paginare, impartirea paginilor in functie de json si elemente
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  // afisarea paginilor
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

  // buton next
  const handleNextbtn = () => {

    setPageIndex(pageIndex + 1);
    setcurrentPage(pageIndex + 1);
    setcurrentItems(users);
    getUsers(pageIndex + 1)
  };

  // buton prev
  const handlePrevbtn = () => {
    setPageIndex(pageIndex - 1);
    setcurrentPage(pageIndex - 1);
    setcurrentItems(users);
    getUsers(pageIndex - 1)
  };


  // incrementarea paginilor ...
  let pageIncrementBtn = null;
  if (hasNext == true) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  // decrementarea paginilor ...
  let pageDecrementBtn = null;
  if (hasPrevious == true) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  // FETCHING DATA - CRUD OPERATIONS

  // actualizare get
  useEffect(() => {
    getUsers(pageIndex);
  }, [])
  function getUsers(pageIndex) {
    fetch(baseURL + `?pageNumber=${pageIndex}&pageSize=10`
    ).then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp.data);
 //       setTotalPages(resp.totalPages);
        setHasNext(resp.hasNextPage);
        setHasPrevious(resp.hasPreviousPage);
        setCategoryId(resp.data[0].itemTypeCategory.id);
        setCategory(resp.data[0].itemTypeCategory.category)
        setitemId(resp.data[0].id)
        //numele la obiectul din categorie - de ex bluza
        setItemType(resp.data[0].name)
        //console.log(users[0].itemTypeCategory.category);
        console.log(resp.data[0].itemTypeCategory.category);
        getCategories();
        setOrigCryptosCount(resp.data);
      })
    })

  }

  // get pentru informatii despre categorii
  function getCategories() {
    fetch(baseURL + `Category/?pageNumber=1&pageSize=100`
    ).then((result) => {
      result.json().then((resp) => {
        setCategoryName(resp.data);
      })
    })

  }

  // delete 
  function deleteUser(id) {
    fetch(baseURL + `${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers(pageIndex);
        alert.error('Item Removed!');
      })
    })
  }

  // adaugarea unui nou itemtype
  function addItem() {
    let name = category;
    let itemTypeCategoryId;
    console.log('totalcount' + categoryName)
    keyCount = Object.keys(categoryName).length;
    for (let i = 0; i < keyCount; i++) {
      if (selectValue == categoryName[i].category) {
        itemTypeCategoryId = categoryName[i].id;
      }
    }
    console.log(name + 'categoryid: ' + selectValue + '   -   ' + itemTypeCategoryId);
    fetch(baseURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, itemTypeCategoryId })
    })
      .then(response => response.json())
      .then(res => {
        getUsers(pageIndex)
        setModal2IsOpen(false)
        alert.success('Added succsefully!');
      })
      .catch(err => {alert.error(err)});
  };

  // functie pentru preluare informatii pt update
  function selectUser(itemId) {
    keyCount = Object.keys(users).length;
    for (let i = 0; i < keyCount; i++) {
      if (itemId == users[i].id) {
        setCategoryId(users[i].itemTypeCategory.id);
        setitemId(users[i].id);
        setItemType(users[i].name);
      }
      setModalIsOpen(true); // deschidere modal
    }
  }

  // update data
  function updateUser() {
    let id = itemId;
    let name = itemType;
    let itemTypeCategoryId = categoryId;
    let item = { id, name, itemTypeCategoryId };
    console.warn("item", item)
    console.log("item" + id + '   name=' + name + ' itemtypecategoryid=' + itemTypeCategoryId);

    fetch(baseURL + `${itemId}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, name, itemTypeCategoryId })
    }).then((result) => {
      console.warn(result)
      getUsers(pageIndex)
      setModalIsOpen(false)
      alert.show('updated succsefully!');
    })
  }

  // search folosit cu filter
  const Search = key => {
    const newResults = origCryptosCount.filter(crypto => crypto.name.includes(key));
    console.log('newResults', newResults);
    setUser(newResults);
  };

  // returnarea tuturor informatiilor
  return (
    <Maincontainer>
      {tableCategory(users)}
      {pageNumbers()}
    </Maincontainer>
  );
}

export default ItemType;