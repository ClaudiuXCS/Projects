import React, {useState} from 'react';
import {
    BigText,
    SmallText,
    Avatar,
    Img,
    colors,
    Maincontainer,
    LOGOUT_STYLES
  } from "../components/Styles";

  import Modal from 'react-modal';

  import {
    ButtonShape,
    ButtonSpace,
  } from "../components/Styles-Login";

  import "../components/Styles-fetching2.css";
  

  
  //logo
  import Logo from "./../images/dress2.png";
  
  // auth & redux
  import { connect } from "react-redux";
  import { logoutUser } from "../authentification/actions/userActions";
  
  // React router
  import { useHistory } from "react-router-dom";
  
  const Logout = ({ logoutUser, user }) => {
    const history = useHistory();
      // modal update
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const email = "claudiusandar@yahoo.com";

  function updatePassword(user) {
    let id = user;
    let password = newPassword;
    let confirmPassword = newPassword;
    fetch(`http://localhost:1338/api/Users/${user}/password`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, email, password, confirmPassword })
    }).then((result) => {
      console.warn(result)
      setModalIsOpen(false)
    })
  }

    return (
      <div>
        <Maincontainer>
          <center>
          <BigText style={{marginTop:'250px'}} size={65}>Iti multumim ca ne-ai vizitat!</BigText>
          <SmallText color={colors.light1} ></SmallText><Img style={{marginBottom:'80px'}} image={Logo} />
          <ButtonSpace>
            <ButtonShape to="#" onClick={() => logoutUser(history)}>
              Logout
            </ButtonShape>
          </ButtonSpace>
         <ButtonShape onClick={() => setModalIsOpen(true) } style={{marginTop:'100px',width:'300px'}}>Change your Password</ButtonShape>
          <div className="modal">
          <Modal
            isOpen={modalIsOpen}
            shouldCloseOnOverlayClick={false}
            onRequestClose={() => setModalIsOpen(false)}
            style={
              LOGOUT_STYLES
            }>

            <center>
              <h5 style={{ marginTop: '63px' }}>Change your password</h5>
              <input className="inn" type="text" placeholder="New password"   onChange={(e) => {setNewPassword(e.target.value)}}/> <br /><br />
              <div className="size">
                <div className="button4"> <button style={{ height: '40px', width: '200px' }} onClick={() => updatePassword(user)} >Update Password</button></div>
                <div className="button5"><button onClick={() => setModalIsOpen(false)}>Cancel</button>
                </div>
              </div>
            </center>
          </Modal>
        </div></center>
       </Maincontainer>
      </div>
    );
  };
  
  const mapStateToProps = ({ session }) => ({
    user: session.user,
  });
  
  export default connect(mapStateToProps, { logoutUser })(Logout);
  