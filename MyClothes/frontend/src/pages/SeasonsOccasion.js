import React, {
  useEffect,
  useState
} from 'react'
import Modal from 'react-modal';
import "../components/Styles-fetching2.css";
import {
  Maincontainer,
  MODAL_STYLESCATEGORY
} from '../components/Styles';
import { useAlert } from 'react-alert';
import {
  FaRegEdit,
} from 'react-icons/fa';
import {
  AiFillDelete,
} from 'react-icons/ai';


Modal.setAppElement('#root');

function SeasonOccasion() {

 // const [baseURL, setBaseURL] = useState("http://localhost:1338/api/Season/");
 // let baseURL;
  let baseURL = "http://localhost:1338/api/Season/";
  let baseURL2 = 'http://localhost:1338/api/Occasion/';

  const tableCategory = (users) => {
      if (selectValue === "Season") {
        baseURL = "http://localhost:1338/api/Season/";
        return (<>
          <div className="modal">
            <Modal
              isOpen={modal2IsOpen}
              shouldCloseOnOverlayClick={false}
              onRequestClose={() => setModal2IsOpen(false)}
              style={MODAL_STYLESCATEGORY
              }>
              <center>
                <h5>Please insert season name</h5>
                <input className="inn" type="text" placeholder="Season name" onChange={(e) => { setSeasonName(e.target.value) }} required /> <br /><br />
                <h5 style={{ marginTop: '5px' }}>Start Date</h5>
                <input className="inn" type="text" placeholder="Start date" onChange={(e) => { setSeasonStartDate(e.target.value) }} required /> <br /><br />
                <h5 style={{ marginTop: '5px' }}>End Date</h5>
                <input className="inn" type="text" placeholder="End date" onChange={(e) => { setSeasonEndDate(e.target.value) }} required /> <br /><br />
                <div className="size">
                  <div className="button4"> <button style={{ height: '40px', width: '200px' }} onClick={addItem} >Add Season</button></div>
                  <div className="button5"><button onClick={() => setModal2IsOpen(false)}>Cancel</button>
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
                <h5>Change season name, startDate, endDate</h5>
                <input className="inn" type="text" value={seasonName} onChange={(e) => { setSeasonName(e.target.value) }} /> <br /><br />
                <input className="inn" type="text" value={seasonStartDate} onChange={(e) => { setSeasonStartDate(e.target.value) }} /> <br /><br />
                <input className="inn" type="text" value={seasonEndDate} onChange={(e) => { setSeasonEndDate(e.target.value) }} /> <br /><br />
                <div className="size">
                  <div className="button4"> <button style={{ height: '40px', width: '200px' }} onClick={updateUser}>Update Season</button></div>
                  <div className="button5"><button onClick={() => setModalIsOpen(false)}>Cancel</button>
                  </div>
                </div>
              </center>
            </Modal>
          </div>
          <div className="TABEL">
          <div className="positionSelect"><div class="select"><select onChange={handleSelect} onClick={handleClickSelect}>
              <option>Season</option>
              <option>Occasion</option>
            </select></div></div>
            <table class="table">
                
              <thead>
              
                <tr>
                  <th>Occasion Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Delete</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((item, i) =>
                    <tr key={i}>
                      <td>{item.name}</td>
                      <td>{item.startDate}</td>
                      <td>{item.endDate}</td>
                      <td><div className="button3"><button onClick={() => deleteUser(item.id)}><AiFillDelete size="1.1em" style={{marginTop: '3px'}}/></button></div></td>
                      <td><div className="button1"><button onClick={() => selectUser(item.id)}><FaRegEdit size="1.1em" style={{marginTop: '3px'}}/></button></div></td>
                    </tr>
                  )
                }
                <td colspan="3"><div className="button2" onClick={() => setModal2IsOpen(true)}><button>Add Season</button></div></td>
                <td colspan="2"><input type="text" class="input-search" id="input-search" onChange={event => Search(event.target.value)} placeholder/>
<label class="search" for="input-search">
</label></td>
              </tbody>
            </table>
          </div>
        </>);
      } else {
        baseURL = "http://localhost:1338/api/Occasion/";
        return (
        <>
          <div className="modal">
            <Modal
              isOpen={modal2IsOpen}
              shouldCloseOnOverlayClick={false}
              onRequestClose={() => setModal2IsOpen(false)}
              style={MODAL_STYLESCATEGORY
              }>
              <center>
                <h5>Please insert occasion name</h5>
                <input className="inn" type="text" placeholder="Occasion name" onChange={(e) => { setSeasonName(e.target.value) }} required /> <br /><br />
                <div className="size">
                  <div className="button4"> <button style={{ height: '40px', width: '200px' }} onClick={addItem} >Add Occasion</button></div>
                  <div className="button5"><button onClick={() => setModal2IsOpen(false)}>Cancel</button>
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
                <h5>Change occasion name</h5>
                <input className="inn" type="text" value={seasonName} onChange={(e) => { setSeasonName(e.target.value) }} /> <br /><br />
                <div className="size">
                  <div className="button4"> <button style={{ height: '40px', width: '200px' }} onClick={updateUser}>Update Occasion</button></div>
                  <div className="button5"><button onClick={() => setModalIsOpen(false)}>Cancel</button>
                  </div>
                </div>
              </center>
            </Modal>
          </div>
    
          <div className="TABEL">
          <div className="positionSelect"><div class="select"><select onChange={handleSelect} onClick={handleClickSelect}>
              <option>Season</option>
              <option>Occasion</option>
            </select></div></div>
            <table class="table">
           
              <thead>
                <tr>
                  <th>Occasion Name</th>
                  <th>Delete</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((item, i) =>
                    <tr key={i}>
                      <td>{item.name}</td>
                      <td><div className="button3"><button onClick={() => deleteUser(item.id)}><AiFillDelete size="1.1em" style={{marginTop: '3px'}}/></button></div></td>
                      <td><div className="button1"><button onClick={() => selectUser(item.id)}><FaRegEdit size="1.1em" style={{marginTop: '3px'}}/></button></div></td>
                    </tr>
                  )
                }
                <td colspan="2"><div className="button2" onClick={() => setModal2IsOpen(true)}><button>Add Occasion</button></div></td>
                <td colspan="1"><input type="text" class="input-search" id="input-search" onChange={event => Search(event.target.value)} placeholder/>
<label class="search" for="input-search">
</label></td>
              </tbody>
            </table>
          </div>
        </>);
      }
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

//memoreaza valoarea din select
const [selectValue, setSelectValue] = useState("Season");

// eveniment select
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

  // memoreaza id-ul curent si numele pt seasonName
  const [seasonId, setSeasonId] = useState(null);
  const [seasonName, setSeasonName] = useState("");
  const [seasonStartDate, setSeasonStartDate] = useState("");
  const [seasonEndDate, setSeasonEndDate] = useState("");

  // constante importante pt preluare date din json
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const [hasPrevious, setHasPrevious] = useState(false);


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

  // select
  const handleClickSelect = (event) => {
    setcurrentPage(1);
    setPageIndex(1);
    getUsers(1);
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
        setTotalPages(resp.totalPages);
        setHasNext(resp.hasNextPage);
        setHasPrevious(resp.hasPreviousPage);
        //search button
        setOrigCryptosCount(resp.data);
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

  // adaugarea unui nou seasonName
  function addItem() {
    let name = seasonName;
    let startDate = seasonStartDate;
    let endDate = seasonEndDate;
    fetch(baseURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, startDate, endDate })
    })
      .then(response => response.json())
      .then(res => {
        getUsers(pageIndex)
        setModal2IsOpen(false)
        alert.success('Added succsefully!');
      });
  };

  // functie pentru preluare informatii pt update
  function selectUser(seasonId) {
    keyCount = Object.keys(users).length;
    for (let i = 0; i < keyCount; i++) {
      if (seasonId == users[i].id) {
        setSeasonId(users[i].id);
        setSeasonName(users[i].name);
        setSeasonStartDate(users[i].startDate);
        setSeasonEndDate(users[i].endDate);
      }
      setModalIsOpen(true); // deschidere modal
    }
  }

  // update data
  function updateUser() {
    let id = seasonId;
    let name = seasonName;
    let startDate = seasonStartDate;
    let endDate = seasonEndDate;
    fetch(baseURL + `${seasonId}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, name, startDate, endDate })
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

export default SeasonOccasion;
