import React, {
  useEffect,
  useState
} from 'react'
import Modal from 'react-modal';
import "../components/Styles-fetching2.css";
import {
  Maincontainer,
  MODAL_STYLES3
} from '../components/Styles';
import { useAlert } from 'react-alert';
import {
  AiFillDelete,
} from 'react-icons/ai';
import {
  TiInputChecked
} from 'react-icons/ti';

import { MdInfo }
  from 'react-icons/md';

Modal.setAppElement('#root');

function Outfits() {

  // const [baseURL, setBaseURL] = useState("http://localhost:1338/api/Season/");
  let baseURL = "https://localhost:1337/api/Outfits";



  const allData = (users) => {
    return (
      <>
        <div className="modal">
          <Modal
            isOpen={modal3IsOpen}
            shouldCloseOnOverlayClick={true}
            onRequestClose={() => setModal3IsOpen(false)}
            style={MODAL_STYLES3
            }>
            <div className="elements" >
            <div className="buttonX"><button style={{marginLeft:'1250px', backgroundColor:'transparent'}} onClick={() => setModal3IsOpen(false)}>X</button></div>
              <h1 style={{marginTop:'-30px',marginBottom:"25px"}}>Outfit name: {itemName}&nbsp;&nbsp;&nbsp;&nbsp;Description: {itemDescription}</h1>
              {itemHat ?   <div className='card-container' > <center>
              <img alt='tric' style={{ height:'300px',width:'200px'}}
              src={'https://upload.wikimedia.org/wikipedia/commons/4/49/Leprechaun_Hat.png'}/> <h2>{itemHat}</h2> </center> </div>: ""}

              {itemTop ?   <div className='card-container' > <center>
              <img alt='tric' style={{ height:'300px',width:'200px'}}
              src={'https://www.freepnglogos.com/uploads/t-shirt-png/gildan-premium-cotton-adult-shirt-23.png'}/> <h2>{itemTop}</h2> </center> </div>: ""}

              {itemSecondLayerTop ?   <div className='card-container' > <center>
              <img alt='tric' style={{ height:'300px',width:'200px'}}
              src={'https://pngimg.com/uploads/sweater/sweater_PNG75.png'}/> <h2>{itemSecondLayerTop}</h2> </center> </div>: ""}

              {itemOuterWear ?   <div className='card-container' > <center>
              <img alt='tric' style={{ height:'300px',width:'200px'}}
              src={'https://cdn.picpng.com/jacket/icon-jacket-30388.png'}/> <h2>{itemOuterWear}</h2> </center> </div>: ""}
              {itemBottom ?   <div className='card-container' > <center>
              <img alt='tric' style={{ height:'300px',width:'200px'}}
              src={'https://freepngimg.com/thumb/jeans/13-2-jeans-png.png'}/> <h2>{itemBottom}</h2> </center> </div>: ""}

             {itemUnderWear ?   <div className='card-container' > <center>
              <img alt='tric' style={{ height:'300px',width:'200px'}}
              src={'https://img2.pngio.com/boxers-trunk-tommy-hilfiger-mens-underwear-denim-dream-e-pood-tommy-hilfiger-boxers-png-1200_1820.png'}/> <h2>{itemUnderWear}</h2> </center> </div>: ""}

              {itemSocks ?   <div className='card-container' > <center>
              <img alt='tric' style={{ height:'300px',width:'200px'}}
              src={'https://www.pngkey.com/png/full/236-2361811_adidas-golf-single-crew-socks-ae6222-white-sock.png'}/> <h2>{itemSocks}</h2> </center> </div>: ""}

            {itemShoes ?   <div className='card-container' > <center>
              <img alt='tric' style={{ height:'300px',width:'200px'}}
              src={'http://www.pngplay.com/wp-content/uploads/4/Converse-No-Background.png'}/> <h2>{itemShoes}</h2> </center> </div>: ""}
            </div>
          </Modal>
        </div>
        <div className="TABEL">
          <table class="table">

            <thead>

              <tr>
                <th>Outfit Name</th>
                <th>Hat</th>
                <th>Top</th>
                <th>Second Top</th>
                <th>OuterWear</th>
                <th>Bottom</th>
                <th>UnderWear</th>
                <th>Shoes</th>
                <th>Socks</th>
                <th>Delete</th>
                <th>Show Clothes</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((item, i) =>
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.hat ? <TiInputChecked size="1.3em" color="#65e98e"/> : ""} </td>
                    <td>{item.top ? <TiInputChecked size="1.3em" color="#65e98e"/> : ""} </td>
                    <td>{item.secondLayerTop ? <TiInputChecked size="1.3em" color="#65e98e"/> : ""} </td>
                    <td>{item.outerWear ? <TiInputChecked size="1.3em" color="#65e98e"/> : ""} </td>
                    <td>{item.bottom ? <TiInputChecked size="1.3em" color="#65e98e"/> : ""} </td>
                    <td>{item.underWear ? <TiInputChecked size="1.3em" color="#65e98e"/> : ""} </td>
                    <td>{item.shoes ? <TiInputChecked size="1.3em" color="#65e98e"/> : ""} </td>
                    <td>{item.socks ? <TiInputChecked size="1.3em" color="#65e98e"/> : ""} </td>
                    <td><div className="button3"><button onClick={() => deleteUser(item.id)}><AiFillDelete size="1.1em" style={{ marginTop: '3px' }} /></button></div></td>
                    <td><MdInfo className="info" onClick={() => openModal3(item.name)} /></td>
                  </tr>
                )
              }
               <td colspan="7"></td>
              <td colspan="4"><input type="text" class="input-search" id="input-search" onChange={event => Search(event.target.value)} placeholder />
                <label class="search" for="input-search">
                </label></td>
            </tbody>
          </table>
        </div>
      </>);
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
  const openModal3 = (asd) => {
    selectClothe(asd);
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

  // search for
  const [origCryptosCount, setOrigCryptosCount] = useState([]);

  // lista pt search in caz ca favorite
  const [listaSearch, setListaSearch] = useState([]);

  // modal update
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);
  const [modal3IsOpen, setModal3IsOpen] = useState(false);

  // colecteaza toate datele de la get
  const [users, setUser] = useState([])

  // memoreaza id-ul curent si numele pt seasonName
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemBottom, setItemBottom] = useState("");
  const [itemHat, setItemHat] = useState("");
  const [itemUnderWear, setItemUnderWear] = useState("");
  const [itemTop, setItemTop] = useState("");
  const [itemSecondLayerTop, setItemSecondLayerTop] = useState("");
  const [itemOuterWear, setItemOuterWear] = useState("");
  const [itemShoes, setItemShoes] = useState("");
  const [itemSocks, setItemSocks] = useState("");

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


  // pt paginare, event de modificare a paginii
  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
    setPageIndex(Number(event.target.id));
    getClothes(Number(event.target.id));
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
    getClothes(pageIndex + 1)
  };

  // buton prev
  const handlePrevbtn = () => {
    setPageIndex(pageIndex - 1);
    setcurrentPage(pageIndex - 1);
    setcurrentItems(users);
    getClothes(pageIndex - 1)
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
    getClothes(pageIndex);
  }, [])

  function getClothes(pageIndex) {
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
        getClothes(pageIndex);
        alert.error('Outfit Removed!');
      })
    })
  }


  // functie pentru preluare informatii pt update
  function selectClothe(itemId) {
    keyCount = Object.keys(users).length;
    for (let i = 0; i < keyCount; i++) {
      if (itemId == users[i].name) {
        setItemName(users[i].name);
        setItemDescription(users[i].description);
        setItemHat(users[i].hat ? users[i].hat.name : "");
        setItemBottom(users[i].bottom ? users[i].bottom.name : "");
        setItemUnderWear(users[i].underWear ? users[i].underWear.name : "");
        setItemTop(users[i].top ? users[i].top.name : "");
        setItemSecondLayerTop(users[i].secondLayerTop ? users[i].secondLayerTop.name : "");
        setItemOuterWear(users[i].outerWear ? users[i].outerWear.name : "");
        setItemShoes(users[i].shoes ? users[i].shoes.name : "");
        setItemSocks(users[i].socks  ?users[i].socks.name : "");
      }
    }
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
      {allData(users)}
      {pageNumbers()}
    </Maincontainer>
  );
}
export default Outfits;
