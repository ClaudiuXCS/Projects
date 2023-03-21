
import {Maincontainer} from '../components/Styles';
import React, { useState } from "react";
import { Container, BoxUpload, ImagePreview, Title, Textbox } from "../components/Styles-Browse";
import "../components/Styles-fetching2.css";
import FolderIcon from "../images/folder.png";
import CloseIcon from "../images/Close.svg";
import DropDown, {BackShapeDropDown} from '../components/DropDown';




export const Admin = () => {
    return (
      <div>
      <Maincontainer><h1 className="adminpanel">ADMIN CONTROL PANEL</h1></Maincontainer>
  </div>
    )
}

export const Homee = () => {
  return (
    <div>
    <Maincontainer><h1 className="adminpanel">BINE AI REVENIT</h1></Maincontainer>
</div>
  )
}

export const AddClothes   = () => {
        const [image, setImage] = useState("");
        const [isUploaded, setIsUploaded] = useState(false);
        const [typeFile, setTypeFile] = useState("");
      
        function handleImageChange(e) {
          if (e.target.files && e.target.files[0]) {
            setTypeFile(e.target.files[0].type);
            let reader = new FileReader();
      
            reader.onload = function (e) {
              setImage(e.target.result);
              setIsUploaded(true);
            };
      
            reader.readAsDataURL(e.target.files[0]);
          }
        }
      
        return (
            <Maincontainer>
            <Container>
              <Title>Upload your image</Title>
                <p>Should be a image with clothes</p>
              <BoxUpload>
                <div className="image-upload">
                  {!isUploaded ? (
                    <>
                      <label htmlFor="upload-input">
                        <img
                          src={FolderIcon}
                          draggable={"false"}
                          alt="placeholder"
                          style={{ width: 100, height: 100 }}
                        />
                        <p style={{ color: "#444" }}><b>Upload</b>  your clothes from here</p>
                      </label>
      
                      <input
                        id="upload-input"
                        type="file"
                        accept=".jpg,.jpeg,.gif,.png,.mov"
                        onChange={handleImageChange}
                      />
                    </>
                  ) : (
                    <ImagePreview>
                      <img
                        className="close-icon"
                        src={CloseIcon}
                        alt="CloseIcon"
                        onClick={() => {
                          setIsUploaded(false);
                          setImage(null);
                        }}
                      />
                      {typeFile.includes("video") ? (
                        <video
                          id="uploaded-image"
                          src={image}
                          draggable={false}
                          controls
                          autoPlay
                          alt="uploaded-img"
                        />
                      ) : (
                        <img
                          id="uploaded-image"
                          src={image}
                          draggable={false}
                          alt="uploaded-img"
                        />
                      )}
                    </ImagePreview>
                  )}
                </div>
              </BoxUpload>
      
              {isUploaded ? <h2>Your image is {typeFile}</h2> : null}
      
            </Container>
            <Textbox type="text" placeholder="Type a name..."/>

    <BackShapeDropDown> <DropDown /></BackShapeDropDown>
            </Maincontainer>
        );
      
}

export const RemoveClothes = () => {
    return (
    <div>
        <Maincontainer><h1 style={{ color: "#fff" }}>REMOVE CLOTHES</h1></Maincontainer>
    </div>
    )
}

export const UpdateClothes = () => {
    return (
    <div>
        <Maincontainer><h1 style={{ color: "#fff" }}>UPDATE CLOTHES</h1></Maincontainer>
    </div>
    )
}

export const AddItems = () => {
    return (
    <div>
        <Maincontainer><h1 style={{ color: "#fff" }}>ADD ITEMS</h1></Maincontainer>
    </div>
    )
}