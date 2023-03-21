import React, {
  useEffect,
  useState
} from 'react';
import Modal from 'react-modal';
import "../components/Styles-fetching2.css";
import {
  Maincontainer,
  MODAL_STYLES4
} from '../components/Styles';
import {
  FaTshirt
} from 'react-icons/fa';


function Clothes() {
  let baseURL = "http://localhost:1338/api/clothes/body/Bottom/";

  const allData = (users) => {
    return (<>

 <div className="modal">
          <Modal
            isOpen={modal2IsOpen}
            shouldCloseOnOverlayClick={true}
            onRequestClose={() => setModal2IsOpen(false)}
            style={MODAL_STYLES4
            }>
              <div className="infoLeft" >
              <img alt='tric' style={{ height:'300px',width:'200px'}}
              src={'https://www.cropp.com/media/catalog/product/2/6/2678E-99X-050_5.jpg'}/>
              </div>
              <div className="infoRight" >
              <div className="infoDown"><div className="buttonX"><button onClick={() => setModal2IsOpen(false)}>X</button></div></div>
              <h3>Item name:  {itemName}</h3>
              <h3>Little Description: {itemDescription} </h3>

              <h3 >Brand: {itemBrand}</h3>

              <h3 >Size: {itemSize}</h3>

              <h3 >Color: <FaTshirt size="3em" color={itemColor}/></h3>
              </div>
          </Modal>
        </div>

          {
            users.map((item, i) =>
          <div className='card-container' onClick={() => openModal(item.id)}> <center>
              <img alt='tric' style={{ height:'300px',width:'200px'}}
              src={'https://cdn.picpng.com/jacket/icon-jacket-30388.png'}/>
             
             
                <h2>{item.name}</h2>
    
                <p>{item.itemType.name}</p>
                <p>{item.itemType.itemTypeCategory.category}</p>
                </center> </div>
            )
          }
 
</>
)
};

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
  else  if (selectValue === "Second Top") {
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


  // eveniment select
  const handleSelect = (event) => {
    setSelectValue(event.target.value)
  }

    // select
    const handleClickSelect = (event) => {
      getUsers(1);
    };

  //memoreaza valoarea din select
  const [selectValue, setSelectValue] = useState("Bottom");

// modal update
const [modalIsOpen, setModalIsOpen] = useState(true);
// modal update
const [modal2IsOpen, setModal2IsOpen] = useState(false);

// search lista
const [listaSearch, setListaSearch] = useState([]);

// colecteaza toate datele de la get
const [users, setUser] = useState([]);
const [itemId, setItemId]= useState("");
const [itemName, setItemName]= useState("");
const [itemDescription, setItemDescription]= useState("");
const [itemColor, setItemColor]= useState("");
const [itemSize, setItemSize]= useState("");
const [itemBrand,setItemBrand]= useState("");
const [itemTypeId, setItemTypeId]= useState("");
const [itemOccasionId, setOccasionId]= useState("");
const [itemSeasonId,setSeasonId]= useState("");
var keyCount;

// constante importante pt preluare date din json
const [totalPages, setTotalPages] = useState(1);
const [currentPage, setcurrentPage] = useState(1);
const [itemsPerPage, setitemsPerPage] = useState(10);
const [pageIndex, setPageIndex] = useState(1);
const [hasNext, setHasNext] = useState(true);
const [hasPrevious, setHasPrevious] = useState(false);


// FETCHING DATA - CRUD OPERATIONS

// actualizare get
useEffect(() => {
  getUsers();
  console.log("imp");


}, [])
function getUsers() {
  fetch(baseURL + "?pageNumber=1&pageSize=100"
  ).then((result) => {
    result.json().then((resp) => {
      // console.warn(resp)
      setUser(resp.data);
      setListaSearch(resp.data);
    })
  })

}

function selectUser(itemId) {
  keyCount = Object.keys(users).length;
  for (let i = 0; i < keyCount; i++) {
    if (itemId == users[i].id) {
      setItemId(users[i].id);
      setItemName(users[i].name);
      setItemDescription(users[i].description);
      setItemColor(users[i].color);
      setItemBrand(users[i].brand);
      setItemSize(users[i].size);
      setItemTypeId(users[i].itemType.id);
      setOccasionId(users[i].occasion.id);
      setSeasonId(users[i].season.id);
    }
  }
}

const openModal = (asd) => {
  selectUser(asd);
  setModal2IsOpen(true);

}

const Search = key => {
  const newResults = listaSearch.filter(crypto => crypto.name.includes(key));
  console.log('newResults', newResults);
    setUser(newResults);
};


// returnarea tuturor informatiilor
return (

  <Maincontainer>
     <div className="selectCard"><div class="select" ><select onChange={handleSelect} onClick={handleClickSelect}>
            <option>Bottom</option>
            <option>Top</option>
            <option>Second Top</option>
            <option>OuterWear</option>
            <option>UnderWear</option>
            <option>Shoes</option>
            <option>Socks</option>
            <option>Hat</option>
          </select></div></div>

    <div className="modal">
      <div className="modal-clothes">
      <div className="selectSearch"> <input type="text" class="input-search" id="input-search" onChange={event => Search(event.target.value)} placeholder />
                <label class="search" for="input-search">
                </label></div>
       {tableCategory(users)}

      </div>
    </div>
  </Maincontainer>
);
  }
export default Clothes;
