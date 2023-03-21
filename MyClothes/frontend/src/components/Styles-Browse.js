import styled from 'styled-components'
import { colors } from './Styles';

export const Layout = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    background: #F5F8FF;
`

export const Container = styled.div`
    height: 500px;
    width:445px;
    display: flex;
    flex-direction: column;
    padding: 36px 48px;
    background: rgba(250, 250, 250, 0.75);
    transition: ease-in-out 0.3s;
    text-align: center;
    margin-left:-700px;
    p {
        margin-top: -10px;
        color: #777;
    }

    &:hover {
    box-shadow: 10px 10px 10px 0px rgba(10, 15, 10, 0.1);
    }
`


export const BoxUpload = styled.div`
    display: grid;
    margin-top: 20px;
    place-items: center;
    border: 1px dashed #799CD9;
    /* padding: 36px 48px; */
    position: relative;
    height: 350px;
    width: 350px;
    background: rgba(250, 250, 250, 0.5);
    border-radius: 20px;
    .image-upload {
        display: flex;
        flex-wrap:wrap;
        label {
            cursor: pointer;
            transition: ease-in-out 0.3s;
        
            :hover {
                opacity: 0.7;
            }
        }
        >input {
            display: none;
        }
    }
`

export const Title = styled.h1`
    color: ${colors.dark1};
    margin-bottom:10px;
    transition: ease-in-out 0.3s;

    &:hover {
    padding: 0em 0.3em;
    letter-spacing: 1px;
    border-radius: 30px;
    color: #fff;
    }
`;

export const ImagePreview = styled.div`
    position: relative;
    /* cursor: pointer; */
    #uploaded-image{
        height: 350px;
        width: 350px;
        object-fit: cover;
        border-radius: 20px;
    }
    .close-icon{
        background: #000;
        border-radius: 5px;
        opacity: .8;
        position: absolute;
        z-index: 10;
        right: 15px;
        top: 20px;
        cursor: pointer;
        :hover {
            opacity: 1;
        }   
    }
`;

export const Textbox = styled.input`
 // height:50px;
//  width:400px;
 // margin-left:50px;
 // margin-top:20px;
  outline: none;
  padding: 20px 3%;
  border: none;
  margin-bottom: 5%;
  margin-top:2%;
  background: rgba(250, 250, 250, 0.75);
  margin-left:-700px;
  transition: ease-in-out 0.3s;

  &:hover {
    box-shadow: 10px 10px 10px 0px rgba(10, 15, 10, 0.1);
    }
`;