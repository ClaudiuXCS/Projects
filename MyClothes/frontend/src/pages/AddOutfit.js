import React, {
  useEffect,
  useState
} from 'react';
import Modal from 'react-modal';
import "../components/Styles-fetching2.css";
import {
  Maincontainer,
  MODAL_STYLESCATEGORY
} from '../components/Styles';
import {
  FaTshirt
} from 'react-icons/fa';
import {useAlert} from 'react-alert';


function AddOutfit() {
  let baseURL = "http://localhost:1338/api/clothes/body/Bottom/";

const tableCategory = (users) => {
  if (selectValue === "Bottom") {
    baseURL = "http://localhost:1338/api/clothes/body/Bottom/";
    return (<>
      {
        users.map((item, i) =>
      <div className='card-container2' onClick={() =>   handleBottom(item)}> <center>
         <img alt='tric' style={{ height:'140px',width:'110px'}}
          src={'https://freepngimg.com/thumb/jeans/13-2-jeans-png.png'}/>
            <h3>{item.name}</h3>
            <h5>{item.itemType.name}</h5>
            <h5>{item.itemType.itemTypeCategory.category}</h5>
            </center> </div>
        )
      }
</>);
  }
   else  if (selectValue === "Top") {
    baseURL = "http://localhost:1338/api/clothes/body/Top/";
    return (<>
      {
        users.map((item, i) =>
      <div className='card-container2' onClick={() =>   handleTop(item)}> <center>
          <img alt='tric' style={{ height:'140px',width:'110px'}}
          src={'https://www.freepnglogos.com/uploads/t-shirt-png/gildan-premium-cotton-adult-shirt-23.png'}/>
            <h3>{item.name}</h3>
            <h5>{item.itemType.name}</h5>
            <h5>{item.itemType.itemTypeCategory.category}</h5>
            </center> </div>
        )
      }
</>);
  }
   else  if (selectValue === "UnderWear") {
    baseURL = "http://localhost:1338/api/clothes/body/UnderWear/";
    return (<>
      {
        users.map((item, i) =>
      <div className='card-container2' onClick={() =>   handleUnderWear(item)}> <center>
         <img alt='tric' style={{ height:'140px',width:'110px'}}
          src={'https://img2.pngio.com/boxers-trunk-tommy-hilfiger-mens-underwear-denim-dream-e-pood-tommy-hilfiger-boxers-png-1200_1820.png'}/>
            <h3>{item.name}</h3>
            <h5>{item.itemType.name}</h5>
            <h5>{item.itemType.itemTypeCategory.category}</h5>
            </center> </div>
        )
      }
</>);
  }
  else  if (selectValue === "Hat") {
    baseURL = "http://localhost:1338/api/clothes/head/Hat/";
    return (<>
      {
        users.map((item, i) =>
      <div className='card-container2' onClick={() =>   handleHat(item)}> <center>
         <img alt='tric' style={{ height:'140px',width:'110px'}}
          src={'https://upload.wikimedia.org/wikipedia/commons/4/49/Leprechaun_Hat.png'}/>
            <h3>{item.name}</h3>
            <h5>{item.itemType.name}</h5>
            <h5>{item.itemType.itemTypeCategory.category}</h5>
            </center> </div>
        )
      }
</>);
  }
  else  if (selectValue === "Second Top") {
    baseURL = "http://localhost:1338/api/clothes/body/SecondLayerTop/";
    return (<>
      {
        users.map((item, i) =>
      <div className='card-container2' onClick={() =>   handleSecondLayerTop(item)}> <center>
         <img alt='tric' style={{ height:'140px',width:'110px'}}
          src={'https://pngimg.com/uploads/sweater/sweater_PNG75.png'}/>
            <h3>{item.name}</h3>
            <h5>{item.itemType.name}</h5>
            <h5>{item.itemType.itemTypeCategory.category}</h5>
            </center> </div>
        )
      }
</>);
  }
   else  if (selectValue === "OuterWear") {
    baseURL = "http://localhost:1338/api/clothes/body/OuterWear/";
    return (<>
      {
        users.map((item, i) =>
      <div className='card-container2' onClick={() =>   handleOuterWear(item)}> <center>
          <img alt='tric' style={{ height:'140px',width:'110px'}}
          src={'https://cdn.picpng.com/jacket/icon-jacket-30388.png'}/>
            <h3>{item.name}</h3>
            <h5>{item.itemType.name}</h5>
            <h5>{item.itemType.itemTypeCategory.category}</h5>
            </center> </div>
        )
      }
</>);
  }
  else  if (selectValue === "Shoes") {
    baseURL = "http://localhost:1338/api/clothes/feet/Shoes/";
    return (<>
      {
        users.map((item, i) =>
      <div className='card-container2' onClick={() =>   handleShoes(item)}> <center>
         <img alt='tric' style={{ height:'140px',width:'110px'}}
          src={'http://www.pngplay.com/wp-content/uploads/4/Converse-No-Background.png'}/>
            <h3>{item.name}</h3>
            <h5>{item.itemType.name}</h5>
            <h5>{item.itemType.itemTypeCategory.category}</h5>
            </center> </div>
        )
      }
</>);
  }
  else  if (selectValue === "Socks") {
    baseURL = "http://localhost:1338/api/clothes/feet/Socks/";
    return (<>
      {
        users.map((item, i) =>
      <div className='card-container2' onClick={() =>   handleSocks(item)}> <center>
         <img alt='tric' style={{ height:'140px',width:'110px'}}
          src={'https://www.pngkey.com/png/full/236-2361811_adidas-golf-single-crew-socks-ae6222-white-sock.png'}/>
            <h3>{item.name}</h3>
            <h5>{item.itemType.name}</h5>
            <h5>{item.itemType.itemTypeCategory.category}</h5>
            </center> </div>
        )
      }
</>);
  }
};

  // alert
  const alert = useAlert();

// mesaje + inregistrare termeni
const handleBottom = (event) => {
  if(selectValueBottom==="") {
  alert.success("Bottom item registered!");
  } else {
    alert.info("Bottom item updated!");
  }
  setSelectValueBottom(event.name);
  setSelectIdValueBottom(event.id);
}
const handleUnderWear = (event) => {
  if(selectValueBottom==="") {
  alert.success("UnderWear item registered!");
  } else {
    alert.info("UnderWear item updated!");
  }
  setSelectValueUnderWear(event.name);
  setSelectIdValueUnderWear(event.id);
}
const handleTop = (event) => {
  if(selectValueTop==="") {
  alert.success("Top item registered!");
  } else {
    alert.info("Top item updated!");
  }
  setSelectValueTop(event.name);
  setSelectIdValueTop(event.id)
}
const handleSecondLayerTop = (event) => {
  if(selectValueSecondLayerTop==="") {
  alert.success("Second Top item registered!");
  } else {
    alert.info("Second Top item updated!");
  }
  setSelectValueSecondLayerTop(event.name);
  setSelectIdValueSecondLayerTop(event.id);
}
const handleOuterWear = (event) => {
  if(selectValueBottom==="") {
  alert.success("OuterWear item registered!");
  } else {
    alert.info("OuterWear item updated!");
  }
  setSelectValueOuterWear(event.name);
  setSelectIdValueOuterWear(event.id);
}
const handleHat = (event) => {
  if(selectValueBottom==="") {
  alert.success("Hat item registered!");
  } else {
    alert.info("Hat item updated!");
  }
  setSelectValueHat(event.name);
  setSelectIdValueHat(event.id);
}
const handleShoes = (event) => {
  if(selectValueBottom==="") {
  alert.success("Shoes item registered!");
  } else {
    alert.info("Shoes item updated!");
  }
  setSelectValueShoes(event.name);
  setSelectIdValueShoes(event.id);
}
const handleSocks = (event) => {
  if(selectValueSocks==="") {
  alert.success("Socks item registered!");
  } else {
    alert.info("Socks item updated!");
  }
  setSelectValueSocks(event.name);
  setSelectIdValueSocks(event.id);
}

 // eveniment select
 const handleSelect = (event) => {
  setSelectValue(event.target.value);
  
}

  // select
  const handleClickSelect = (event) => {
    getUsers(1);
  };


  //memoreaza valoarea din select
  const [selectValue, setSelectValue] = useState("");

// modal update
const [modalIsOpen, setModalIsOpen] = useState(true);

// search lista
const [listaSearch, setListaSearch] = useState([]);

// add outfit
const [selectValueBottom, setSelectValueBottom] = useState("");
const [selectValueTop, setSelectValueTop] = useState("");
const [selectValueShoes, setSelectValueShoes] = useState("");
const [selectValueSocks, setSelectValueSocks] = useState("");
const [selectValueSecondLayerTop, setSelectValueSecondLayerTop] = useState("");
const [selectValueOuterWear, setSelectValueOuterWear] = useState("");
const [selectValueUnderWear, setSelectValueUnderWear] = useState("");
const [selectValueHat, setSelectValueHat] = useState("");
const [selectIdValueBottom, setSelectIdValueBottom] = useState("");
const [selectIdValueTop, setSelectIdValueTop] = useState("");
const [selectIdValueShoes, setSelectIdValueShoes] = useState("");
const [selectIdValueSocks, setSelectIdValueSocks] = useState("");
const [selectIdValueSecondLayerTop, setSelectIdValueSecondLayerTop] = useState("");
const [selectIdValueOuterWear, setSelectIdValueOuterWear] = useState("");
const [selectIdValueUnderWear, setSelectIdValueUnderWear] = useState("");
const [selectIdValueHat, setSelectIdValueHat] = useState("");


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
const [itemCategoryName,setCategoryName] = useState("");
var keyCount;

// modal 
const [modal2IsOpen, setModal2IsOpen] = useState(false);

// nume si description outfit
const [description, setDescription] = useState("");
const [outfitName, setOutfitName] = useState("");


// FETCHING DATA - CRUD OPERATIONS

// actualizare get
useEffect(() => {
  getUsers();

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
      setCategoryName(users[i].itemType.itemTypeCategory.category);
    }
  }
}

function addOutfit() {
  let name = outfitName;
  let hatId = selectIdValueHat;
  let bottomId = selectIdValueBottom;
  let topId = selectIdValueTop;
  let outerWearId = selectIdValueOuterWear;
  let secondLayerTopId = selectIdValueSecondLayerTop;
  let shoesId = selectIdValueShoes;
  let socksId = selectIdValueSocks;
  let underWearId = selectIdValueUnderWear;
  fetch("https://localhost:1337/api/Outfits", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, description, hatId,topId,outerWearId,secondLayerTopId,bottomId,underWearId,shoesId,socksId})
  })
    .then(response => response.json())
    .then(res => {
     setModal2IsOpen(false);
      alert.success('Added succsefully!');
      setSelectValueBottom("");
setSelectValueTop("");
setSelectValueShoes("");
setSelectValueSocks("");
setSelectValueSecondLayerTop("");
setSelectValueOuterWear("");
setSelectValueUnderWear("");
setSelectValueHat("");

    });
};

const Search = key => {
  const newResults = listaSearch.filter(crypto => crypto.name.includes(key));
  console.log('newResults', newResults);
    setUser(newResults);
    
};


// returnarea tuturor informatiilor
return (

  <Maincontainer>

      <div className="modal-clothesOutfit">
           <div className="selectSearch2"> <input type="text" class="input-search" id="input-search" onChange={event => Search(event.target.value)} placeholder />
                <label class="search" for="input-search">
                </label></div>
       {tableCategory(users)}
      </div>
        <div className="humanimage">
        <div className="selectAddOutfit"><div class="select" ><select onChange={handleSelect} onClick={handleClickSelect}>
            <option disabled selected>Head</option>
            <option>Hat</option>
          </select></div></div>

          <div className="selectAddOutfit"><div class="select" ><select onChange={handleSelect} onClick={handleClickSelect}>
          <option disabled selected>Body</option>
            <option>Top</option>
            <option>Second Top</option>
            <option>OuterWear</option>
          </select></div></div>

        <div className="selectAddOutfit"><div class="select" ><select onChange={handleSelect} onClick={handleClickSelect}>
          <option disabled selected>Bottom</option>
            <option>Bottom</option>
            <option>UnderWear</option>
          </select></div></div>

        <div className="selectAddOutfit"><div class="select" ><select onChange={handleSelect} onClick={handleClickSelect}>
          <option disabled selected>Feet</option>
            <option>Shoes</option>
            <option>Socks</option>
          </select></div></div>

    </div> 
    <h3 className="OutfitElements"><FaTshirt/>Outfit Elements:[&nbsp;{selectValueHat}&nbsp;{selectValueTop}&nbsp;{selectValueSecondLayerTop}&nbsp;
        {selectValueOuterWear}&nbsp;{selectValueBottom}&nbsp;{selectValueUnderWear}&nbsp;{selectValueShoes}
        &nbsp;{selectValueSocks}]</h3>
       <div className="AddOutfit"><div className="button1"> <button style={{ height: '40px', width: '200px' }}  onClick={() => setModal2IsOpen(true)}>Add Outfit</button></div></div>

       <Modal
              isOpen={modal2IsOpen}
              shouldCloseOnOverlayClick={false}
              onRequestClose={() => setModal2IsOpen(false)}
              style={MODAL_STYLESCATEGORY
              }>
              <center>
              <p style={{ marginTop: '-30px',marginBottom:'10px' }} ><FaTshirt/>Outfit Elements:[&nbsp;{selectValueHat}&nbsp;{selectValueTop}&nbsp;{selectValueSecondLayerTop}&nbsp;
        {selectValueOuterWear}&nbsp;{selectValueBottom}&nbsp;{selectValueUnderWear}&nbsp;{selectValueShoes}
        &nbsp;{selectValueSocks}]</p>
                <h5 >Please insert your outfit name</h5>
                <input className="inn" type="text" placeholder="Outfit name" onChange={(e) => { setOutfitName(e.target.value) }} required /> <br /><br />
                <h5 style={{ marginTop: '5px' }}>Description</h5>
                <input className="inn" type="text" placeholder="Description" onChange={(e) => { setDescription(e.target.value) }} required /> <br /><br />
                <div className="size">
                  <div className="button4"> <button style={{ height: '40px', width: '200px' }} onClick={addOutfit} >Add Outfit</button></div>
                  <div className="button5"><button style={{ marginTop: '20px' }} onClick={() => setModal2IsOpen(false)}>Cancel</button>
                  </div>
                </div>
              </center>
            </Modal>
  </Maincontainer>
);
  }
export default AddOutfit;
