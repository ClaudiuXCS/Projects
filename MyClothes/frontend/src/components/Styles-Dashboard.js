import styled from 'styled-components';
import {
  colors
} from "./Styles";
import background from '../images/home.png';

export const Maincontainer = styled.div`
  background: url(${background});
  background-size: cover;
  background-position: center;
  display: flex;
  height: 100vh;
  font-size: 3rem;
  float:right;
  justify-content: center;
  align-items: center;
  width: 87%;
  align-items: left;
  flex-direction: column;
`;

export const Search = styled.input`
 // height:50px;
//  width:400px;
 // margin-left:50px;
 // margin-top:20px;
  outline: none;
  padding: 20px 3%;
  border: none;
  margin-bottom: 5%;
  background: rgba(250, 250, 250, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(10, 15, 10, 0.1);
`;

export const City = styled.div`
//  height:400px;
//  width:600px;
//  margin-left:50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px 8%;
  background: rgba(250, 250, 250, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(10, 15, 10, 0.1);
`;
export const Citytemp = styled.div`
  font-size: 5rem;
  font-weight: bold;
  margin-top: 20px;
  color:  ${colors.dark1};
  text-align: center;
  transition: ease-in-out 0.3s;

  &:hover {
    padding: 0em 0.3em;
    margin-left: 0.2em;
    border-radius: 30px;
    color: #fff;
    background: ${colors.dark1};
    }
`;

export const Country = styled.sup`
    font-size: 0.5em;
    padding: 0.2em 0.6em;
    margin-left: 0.2em;
    border-radius: 30px;
    color: #fff;
    background: ${colors.myred};
`;

export const Cels = styled.sup`
    font-size: 0.35em;
    padding: 0.2em 0.6em;
    margin-left: 0.2em;
    border-radius: 30px;
    color: #fff;
    background: ${colors.dark1};;
`;

export const P1 = styled.p`
    font-size: 0.5em;
    text-decoration:none;
    color: ${colors.dark1};
    transition: ease-in-out 0.3s;

    &:hover {
        letter-spacing: 2px;
        font-weight: bold;
    }
    
`;

export const Cityname = styled.span`
    font-size: 1em;
    font-weight: bold;
    text-decoration:none;
    color: ${colors.dark};
    transition: ease-in-out 0.3s;
    text-transform: uppercase;

    &:hover {
    padding: 0.1em 0.3em;
    margin-left: 0.2em;
    border-radius: 30px;
    color: #fff;
    background: #232323;
    }
    
`;

export const Cityicon = styled.img`
  margin-top: 10px;
  width: 100px;
  height: 100px;
  `;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;