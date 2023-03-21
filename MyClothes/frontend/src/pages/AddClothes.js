import React, {
  useEffect,
  useState
} from 'react'
import Modal from 'react-modal';
import "../components/Styles-fetching2.css";
import {
  Maincontainer,
  MODAL_STYLES,
  MODAL_STYLES2
} from '../components/Styles';
import { useAlert } from 'react-alert';
import {
  FaRegEdit,
  FaTshirt
} from 'react-icons/fa';
import {
  AiFillDelete,
  AiFillHeart
} from 'react-icons/ai';
import {
  IoMdColorFilter
} from 'react-icons/io';
import {
  MdInvertColors
} from 'react-icons/md';
import { HexColorPicker, RgbaColorPicker } from "react-colorful";
import { MdInfo }
  from 'react-icons/md';

Modal.setAppElement('#root');

function AddClothes() {

  // const [baseURL, setBaseURL] = useState("http://localhost:1338/api/Season/");
  let baseURL = "http://localhost:1338/api/clothes/body/Bottom/";
  let baseURL2 = 'http://localhost:1338/api/Occasion/';



const allData = (users) => {
  return (
  <>

        <div className="modal">
          <Modal
            isOpen={modal3IsOpen}
            shouldCloseOnOverlayClick={true}
            onRequestClose={() => setModal3IsOpen(false)}
            style={MODAL_STYLES2
            }>
              <div className="infoLeft" >
              <img alt='tric' style={{ height:'200px',width:'150px',marginTop:'30px',marginLeft:'110px'}}
          src={'https://freepngimg.com/thumb/jeans/13-2-jeans-png.png'}/>
              </div>
              <div className="infoRight" >
              <div className="infoDown"><div className="buttonX"><button style={{marginLeft:'130px'}} onClick={() => setModal3IsOpen(false)}>X</button></div></div>
              <h4>Item name:  {itemName}</h4>
              <h4>Little Description: {itemDescription} </h4>

              <h4 >Brand: {itemBrand}</h4>

              <h4 >Size: {itemSize}</h4>

              <h4 >Color: <FaTshirt size="3em" color={itemColor}/></h4>
              </div>
          </Modal>
        </div>



        <div className="modal">
          <Modal
            isOpen={modal2IsOpen}
            shouldCloseOnOverlayClick={false}
            onRequestClose={() => setModal2IsOpen(false)}
            style={MODAL_STYLES
            }>
            <center>
              <h5>Please insert item name</h5>
              <input className="inn" type="text" placeholder="Item name" onChange={(e) => { setItemName(e.target.value) }} required /> <br /><br />
              <h5>Favorite</h5>
              <input type="checkbox" id="favorite" name="fav" defaultChecked={itemFavorite} onChange={changeAddCheckBox} />
              <h5 style={{ marginTop: '5px' }}>Little Description</h5>
              <input className="inn" type="text" placeholder="Description" onChange={(e) => { setItemDescription(e.target.value) }} required /> <br /><br />
              <h5 style={{ marginTop: '5px' }}>Brand</h5>
              <input className="inn" type="text" placeholder="Brand" onChange={(e) => { setItemBrand(e.target.value) }} required /> <br /><br />
              <h5 style={{ marginTop: '5px' }}>Color</h5>
              <section className="custom-layout example">
                <HexColorPicker color={Pcolor} onChange={setColor} />
              </section>
              <h5>Choice: </h5><IoMdColorFilter size="2em" color={Pcolor} /> <br /><br />
              <h5 style={{ marginTop: '5px' }}>Size</h5>
              <input className="inn" type="text" placeholder="Size" onChange={(e) => { setItemSize(e.target.value) }} required /> <br /><br />
              <h5 style={{ marginTop: '3px', marginBottom: '10px' }}>Please choose item season</h5>
              <div class="select" selectedIndex={3} style={{ marginBottom: '20px' }}><select onChange={(e) => { setSelectValueSeason(e.target.value) }}>
                <option key="0" id="0" disabled selected>Choose</option>
                {
                  seasonNames.map((item, i) =>
                    <option key={i} >{item.name}</option>
                  )}
              </select></div>
              <h5 style={{ marginTop: '3px', marginBottom: '10px' }}>Please choose occasionn</h5>
              <div class="select" style={{ marginBottom: '20px' }}><select onChange={(e) => { setSelectValueOccasion(e.target.value) }}>
                <option key="1" disabled selected>Choose</option>
                {
                  occasionNames.map((item, i) =>
                    <option key={i} >{item.name}</option>
                  )}
              </select></div>
              <h5 style={{ marginTop: '3px', marginBottom: '10px' }}>The type of item</h5>
              <div class="select" style={{ marginBottom: '20px' }}><select onChange={(e) => { setSelectValueItemType(e.target.value) }}>
                <option key="1" disabled selected>Choose</option>
                {
                  itemTypeNames.map((item, i) =>
                    <option key={i} >{item.name}</option>
                  )}
              </select></div>
              <div className="size">
              <div className="button2"> <button style={{ height: '40px', width: '200px', marginBottom:'25px' }} onClick={addItem} >Upload</button></div>
                <div className="button4"> <button style={{ height: '40px', width: '200px' }} onClick={addItem} >Add Item</button></div>
                <div className="button5"><button onClick={() => CancelAdd()}>Cancel</button>
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
            style={MODAL_STYLES}>
            <center>
              <h5>Change name, description, brand, color</h5>
              <input className="inn" type="text" value={itemName} onChange={(e) => { setItemName(e.target.value) }} /> <br /><br />
              <input className="inn" type="text" value={itemDescription} onChange={(e) => { setItemDescription(e.target.value) }} /> <br /><br />
              <input className="inn" type="text" value={itemBrand} onChange={(e) => { setItemBrand(e.target.value) }} /> <br /><br />
              <section className="custom-layout example">
                <HexColorPicker color={itemColor} onChange={setColor} />
              </section>
              <h5>Choice: </h5><IoMdColorFilter size="1.1em" color={Pcolor} /> <br /><br />

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
            <option>Bottom</option>
            <option>Top</option>
            <option>SecondLayerTop</option>
            <option>OuterWear</option>
            <option>UnderWear</option>
            <option>Shoes</option>
            <option>Socks</option>
            <option>Hat</option>
          </select></div></div>
          <table class="table">

            <thead>

              <tr>
                <th><input type="checkbox" id="favorite" name="fav" defaultChecked={itemFavorite} onChange={event => changeCheckBox(event.target.value)} /></th>
                <th>Item Name</th>
                <th>Brand</th>
                <th>Color</th>
                <th>Season</th>
                <th>ItemType</th>
                <th>Category</th>
                <th>Delete</th>
                <th>Update</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((item, i) =>
                  <tr key={i}>
                    <td>{item.favorite ? <AiFillHeart className="heart" size="1em"/> : ""}</td>
                    <td>{item.name}</td>
                    <td>{item.brand}</td>
                    <td><MdInvertColors className="col" color={item.color} /></td>
                    <td>{item.season.name}</td>
                    <td>{item.itemType.name}</td>
                    <td>{item.itemType.itemTypeCategory.category}</td>
                    <td><div className="button3"><button onClick={() => deleteUser(item.id)}><AiFillDelete size="1.1em" style={{ marginTop: '3px' }} /></button></div></td>
                    <td><div className="button1"><button onClick={() => openModal(item.id)}><FaRegEdit size="1.1em" style={{ marginTop: '3px' }} /></button></div></td>
                    <td><MdInfo className="info" onClick={() => openModal3(item.id)} /></td>
                  </tr>
                )
              }
              <td colspan="8"><div className="button2" onClick={() => setModal2IsOpen(true)}><button>Add Item</button></div></td>
              <td colspan="2"><input type="text" class="input-search" id="input-search" onChange={event => Search(event.target.value)} placeholder />
                <label class="search" for="input-search">
                </label></td>
            </tbody>
          </table>
        </div>
      </>);
}


  const tableCategory = (users) => {
    if (selectValue === "Bottom") {
      baseURL = "http://localhost:1338/api/clothes/body/Bottom/";
      return (<> {allData(users)}</> );
    }
     else  if (selectValue === "Top") {
      baseURL = "http://localhost:1338/api/clothes/body/Top/";
      return (<> {allData(users)}</> );
    }
     else  if (selectValue === "UnderWear") {
      baseURL = "http://localhost:1338/api/clothes/body/UnderWear/";
      return (<> {allData(users)}</> );
    }
    else  if (selectValue === "Hat") {
      baseURL = "http://localhost:1338/api/clothes/head/Hat/";
      return (<> {allData(users)}</> );
    }
    else  if (selectValue === "SecondLayerTop") {
      baseURL = "http://localhost:1338/api/clothes/body/SecondLayerTop/";
      return (<> {allData(users)}</> );
    }
     else  if (selectValue === "OuterWear") {
      baseURL = "http://localhost:1338/api/clothes/body/OuterWear/";
      return (<> {allData(users)}</> );
    }
    else  if (selectValue === "Shoes") {
      baseURL = "http://localhost:1338/api/clothes/feet/Shoes/";
      return (<> {allData(users)}</> );
    }
    else  if (selectValue === "Socks") {
      baseURL = "http://localhost:1338/api/clothes/feet/Socks/";
      return (<> {allData(users)}</> );
    }
  };

  // resetare termeni la cancel
const CancelAdd = () => {
  setAddItemFavorite(false);
  setColor("#aabbcc");
  setModal2IsOpen(false);
}

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

  // open modal
  const openModal = (asd) => {
    selectUser(asd);
    setModalIsOpen(true);

  }

  const openModal3 = (asd) => {
    selectUser(asd);
    setModal3IsOpen(true);

  }

  // alert
  const alert = useAlert();

  //colorpicker
  const [Pcolor, setColor] = useState("#aabbcc");

  //memoreaza valoarea din select
  const [selectValue, setSelectValue] = useState("Bottom");
  const [selectValueOccasion, setSelectValueOccasion] = useState("");
  const [selectValueSeason, setSelectValueSeason] = useState("");
  const [selectValueItemType, setSelectValueItemType] = useState("");

  // eveniment select
  const handleSelect = (event) => {
    setSelectValue(event.target.value)
  }

  // add checkbox
  const changeAddCheckBox = () => {
    itemAddFavorite ? setAddItemFavorite(false) : setAddItemFavorite(true);
    console.log(itemAddFavorite);
  }

  // evenimente checkbox tabel
  const changeCheckBox = () => {
    itemFavorite ? Da() : Nu();
  }

  const Da = () => {
    const newResults = origCryptosCount;
    setUser(newResults);
    setItemFavorite(false);
    setListaSearch(origCryptosCount2);
    inc=1;
  }

  const Nu = () => {
    const newResults = origCryptosCount.filter(crypto => crypto.favorite == true );
    setUser(newResults);
    setItemFavorite(true);
    setListaSearch(newResults);
    inc=2;
  }

 var inc=0;
  // search for
  const [origCryptosCount, setOrigCryptosCount] = useState([]);
  const [origCryptosCount2, setOrigCryptosCount2] = useState([]);
  
  // lista pt search in caz ca favorite
  const [listaSearch, setListaSearch] = useState([]);

  // modal update
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);
  const [modal3IsOpen, setModal3IsOpen] = useState(false);

  // colecteaza toate datele de la get
  const [users, setUser] = useState([])

  // memoreaza id-ul curent si numele pt seasonName
  const [itemId, setItemId] = useState(null);
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemBrand, setItemBrand] = useState("");
  const [itemColor, setItemColor] = useState("");
  const [itemSize, setItemSize] = useState("");
  const [itemFavorite, setItemFavorite] = useState(false);
  const [itemAddFavorite, setAddItemFavorite] = useState(null);

  // constante necesare pt a prelua id occ,sea si itemtype
  const [seasonNames, setSeasonNames] = useState([]);
  const [occasionNames, setOccasionNames] = useState([]);
  const [itemTypeNames, setItemTypeNames] = useState([]);
  const [itemTypeId, setItemTypeId] = useState("");
  const [itemOccasionId, setOccasionId] = useState("");
  const [itemSeasonId, setSeasonId] = useState("");

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
        //fav button
        setOrigCryptosCount(resp.data);
        //search button
//        setListaSearch(resp.data);

        // preluare date necesare la occasionid,seasonid si itemtypeid 
        getData();
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

  // preluare informatii de la occasion,season si itemtype
  function getData() {
    fetch('http://localhost:1338/api/Season?pageNumber=1&pageSize=100'
    ).then((result) => {
      result.json().then((resp) => {
        setSeasonNames(resp.data);
      })
    });
    fetch('http://localhost:1338/api/Occasion?pageNumber=1&pageSize=100'
    ).then((result) => {
      result.json().then((resp) => {
        setOccasionNames(resp.data);
      })
    });
    fetch(`http://localhost:1338/api/ItemType?pageNumber=1&pageSize=100&category=${selectValue}`
    ).then((result) => {
      result.json().then((resp) => {
        setItemTypeNames(resp.data);
        console.log(itemTypeNames);
        
      })
    });
    fetch(baseURL + `?pageNumber=1&pageSize=100`
    ).then((result) => {
      result.json().then((resp) => {
        setOrigCryptosCount2(resp.data);
        setListaSearch(resp.data);
      })
    });


  }


  // adaugarea unui nou item
  function addItem() {
    let name = itemName;
    let description = itemDescription;
    let brand = itemBrand;
    let color = Pcolor;
    let size = itemSize;
    let favorite = itemAddFavorite;
    let occasionId;
    let seasonId;
    let itemTypeId;


    keyCount = Object.keys(occasionNames).length;
    for (let i = 0; i < keyCount; i++) {
      if (selectValueOccasion == occasionNames[i].name) {
        occasionId = occasionNames[i].id;
      }
    }
    keyCount = Object.keys(seasonNames).length;
    for (let i = 0; i < keyCount; i++) {
      if (selectValueSeason == seasonNames[i].name) {
        seasonId = seasonNames[i].id;
      }
    }
    keyCount = Object.keys(itemTypeNames).length;
    for (let i = 0; i < keyCount; i++) {
      if (selectValueItemType == itemTypeNames[i].name) {
        itemTypeId = itemTypeNames[i].id;
      }
    }

    console.log("name: " + name + " /ndesc: " + description + "   brand:" + brand);
    console.log("color: " + color + " size: " + size + "   favorite: " + favorite);
    console.log("oc id: " + occasionId + "   sezid: " + seasonId + "  it id " + itemTypeId);

    fetch(baseURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, brand, color, size, favorite, occasionId, seasonId, itemTypeId })
    })
      .then(response => response.json())
      .then(res => {
        getUsers(pageIndex)
        // resetare
        setModal2IsOpen(false)
        setAddItemFavorite(false);
        setColor("#aabbcc");
        
        // mesaj
        alert.success('Added succsefully!');
      });
  };

  // functie pentru preluare informatii pt update
  function selectUser(itemId) {
    keyCount = Object.keys(users).length;
    for (let i = 0; i < keyCount; i++) {
      if (itemId == users[i].id) {
        setItemId(users[i].id);
        setItemName(users[i].name);
        setItemDescription(users[i].description);
        setItemColor(users[i].color);
        setItemBrand(users[i].brand);
        setItemTypeId(users[i].itemType.id);
        setOccasionId(users[i].occasion.id);
        setSeasonId(users[i].season.id);
      }
    }
  }

  // update data
  function updateUser() {
    let id = itemId;
    let name = itemName;
    let color = Pcolor;
    let brand = itemBrand;
    let description = itemDescription;
    let Favorite = itemFavorite;
    let size = itemSize;
    let occasionId = itemOccasionId;
    let seasonId = itemSeasonId;
    fetch(baseURL + `${itemId}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, name, description, brand, color, size, Favorite, occasionId, seasonId, itemTypeId })
    }).then((result) => {
      console.warn(result)
      getUsers(pageIndex)
      setModalIsOpen(false)
      alert.show('updated succsefully!');
    })
  }

  // search folosit cu filter
  const Search = key => {
    const newResults = listaSearch.filter(crypto => crypto.name.includes(key));
    console.log('newResults', newResults);

    keyCount = Object.keys(newResults).length;
    if(keyCount>=10)
    {
      setUser([newResults[0],newResults[1],newResults[2],newResults[3],newResults[4],newResults[5],newResults[6],newResults[7],newResults[8],newResults[9]]);
    }
    else {
      setUser(newResults);
    }
    if(key==="")
    {
      if(inc===1) {
      setUser(origCryptosCount);
      console.log(origCryptosCount + "    " + key + "   " + inc);  
    }
    }

  };




  // returnarea tuturor informatiilor
  return (
    <Maincontainer>
      {tableCategory(users)}
      {pageNumbers()}
    </Maincontainer>
  );
}
export default AddClothes;
