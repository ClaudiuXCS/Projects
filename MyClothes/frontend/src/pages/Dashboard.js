import React, { useState } from 'react';
import Modal from 'react-modal';
import "../components/Styles-fetching2.css";
import { fetchWeather } from '../api/keyapi';
import { MODAL_STYLES3 } from '../components/Styles';
import { Maincontainer, City, Info, Citytemp, Search, Cityicon,Country,Cels, Cityname, P1} from '../components/Styles-Dashboard';
import {
    ButtonShape,
  } from "../components/Styles-Login";

const Dashboard= () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [users, setUser] = useState([]);
    const [id, setUser2] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modal2IsOpen, setModal2IsOpen] = useState(false);
    const [temperature, setTemperature] = useState(24);
    

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

    const search = async (e) => {

            const data = await fetchWeather(query);

            setWeather(data);
            setQuery('');

            setTemperature(Math.round(data.main.temp));
            console.log("TEMPERATURE = " +Math.round(data.main.temp));
            fetch("http://localhost:1338/api/Outfits/generate", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({temperature})
            })
            .then((result) => {
            result.json().then((resp) => {
              setUser2(resp.data.id);
              console.log("raspuns user2:" + resp.data.id);
            });
        })
      
              fetch(`http://localhost:1338/api/Outfits/${id}`
              ).then((result) => {
                result.json().then((resp) => {
                  setUser(resp.data);
      
                      setItemName(users.name);
                      setItemDescription(users.description);
                      setItemHat(users.hat ? users.hat.name : "");
                      setItemBottom(users.bottom ? users.bottom.name : "");
                      setItemUnderWear(users.underWear ? users.underWear.name : "");
                      setItemTop(users.top ? users.top.name : "");
                      setItemSecondLayerTop(users.secondLayerTop ? users.secondLayerTop.name : "");
                      setItemOuterWear(users.outerWear ? users.outerWear.name : "");
                      setItemShoes(users.shoes ? users.shoes.name : "");
                      setItemSocks(users.socks  ?users.socks.name : "");
              
          //          }
         //         }
      
                })
              })
    }
var keyCount;

    function getData() {

      fetch("http://localhost:1338/api/Outfits/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({temperature})
      })
      .then((result) => {
      result.json().then((resp) => {
        setUser2(resp.data.id);
        console.log("raspuns user2:" + resp.data.id);
      });
  })

        fetch(`http://localhost:1338/api/Outfits/${id}`
        ).then((result) => {
          result.json().then((resp) => {
            setUser(resp.data);

                setItemName(users.name);
                setItemDescription(users.description);
                setItemHat(users.hat ? users.hat.name : "");
                setItemBottom(users.bottom ? users.bottom.name : "");
                setItemUnderWear(users.underWear ? users.underWear.name : "");
                setItemTop(users.top ? users.top.name : "");
                setItemSecondLayerTop(users.secondLayerTop ? users.secondLayerTop.name : "");
                setItemOuterWear(users.outerWear ? users.outerWear.name : "");
                setItemShoes(users.shoes ? users.shoes.name : "");
                setItemSocks(users.socks  ?users.socks.name : "");
        
    //          }
   //         }

          })
        })
        setModal2IsOpen(true);
      }
    
      function getData2() {
        fetch("http://localhost:1338/api/Outfits/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({temperature})
        })
        .then((result) => {
        result.json().then((resp) => {
          setUser2(resp.data.id);
          console.log("raspuns user2:" + resp.data.id);
        });
    })
  
          fetch(`http://localhost:1338/api/Outfits/${id}`
          ).then((result) => {
            result.json().then((resp) => {
              setUser(resp.data);
  
                  setItemName(users.name);
                  setItemDescription(users.description);
                  setItemHat(users.hat ? users.hat.name : "");
                  setItemBottom(users.bottom ? users.bottom.name : "");
                  setItemUnderWear(users.underWear ? users.underWear.name : "");
                  setItemTop(users.top ? users.top.name : "");
                  setItemSecondLayerTop(users.secondLayerTop ? users.secondLayerTop.name : "");
                  setItemOuterWear(users.outerWear ? users.outerWear.name : "");
                  setItemShoes(users.shoes ? users.shoes.name : "");
                  setItemSocks(users.socks  ?users.socks.name : "");
          
      //          }
     //         }
  
            })
          })
        setModalIsOpen(true);
        setModal2IsOpen(false);
      }
    return (<>
    
          <div className="modal">
          <Modal
            isOpen={modalIsOpen}
            shouldCloseOnOverlayClick={true}
            onRequestClose={() => setModalIsOpen(false)}
            style={MODAL_STYLES3
            }>
            <div className="elements" >
            <div className="buttonX"><button style={{marginLeft:'1250px', backgroundColor:'transparent'}} onClick={() => setModalIsOpen(false)}>X</button></div>
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
        <div className="modal">
          <Modal
            isOpen={modal2IsOpen}
            shouldCloseOnOverlayClick={true}
            onRequestClose={() => setModal2IsOpen(false)}
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
                  width: '300px',
                  height: '145px',
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
                <div className="button4"> <button style={{ height: '40px', width: '200px'}} onClick={getData2}>Generate Outfit NOW</button></div>
            </center>
          </Modal>
        </div>
        <div className="dashboard">
        <Maincontainer>
            
            <Search type="text" placeholder="Type a location..."value={query}onChange={(e) => setQuery(e.target.value)}onClick={search}/>
            {weather.main  && ( 
                <City>
                    <h2>
                        <Cityname>{weather.name}</Cityname>
                        <Country>{weather.sys.country}</Country>
                    </h2>
                    <Citytemp>
                        {Math.round(weather.main.temp)}
                        <Cels>&deg;C</Cels>
                    </Citytemp>
                    <Info>
                        <Cityicon  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <P1>-{weather.weather[0].description}-</P1>
                        <ButtonShape onClick={() => getData()} style={{marginTop:'30px',width:'330px'}}>Generate Random Clothes</ButtonShape>
                    </Info>
                </City>
                
            ) }
                       
        </Maincontainer>
        </div>
        
    </>);
}

export default Dashboard;