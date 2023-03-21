import React, { Component } from 'react';
import styled from 'styled-components'
import {
    colors
} from "./Styles";

class DropDown extends Component {
    constructor() {
        super();
        this.state = {
            Cat1: [],
            Cat2: [],
            selectcat1:'',
        };
    }

    componentDidMount() {
        this.setState({
            Cat1: [
                { name: 'Head', Cat2:['Hats'] },
                { name: 'Body', Cat2:['Tops', 'Bottoms', 'Underwears'] },
                { name: 'Feet', Cat2:['Shoes', 'Socks'] },
                { name: 'Accessory', Cat2:['Belt', 'Bracelet', 'Glasses', 'Watch'] },
            ]
        });
    }
        selectChange(e) {
            this.setState({selectcat1: e.target.value});
            this.setState({Cat2: this.state.Cat1.find(x=>x.name === e.target.value).Cat2});
        }
   
    render() {
        return (
           <center> 
               <div>
            
            <DesignSelect  value={this.state.selectcat1} onChange={this.selectChange.bind(this)}>
            <option>Select Category</option>
            {
                this.state.Cat1.map(x => {
                return <option>{x.name}</option>
            })}
            </DesignSelect >
            </div>
            <div>
            <DesignSelect >
                <option selected disabled>Choose the part</option>
                { 
                this.state.Cat2.map(x => {
                    return <option>{x}</option>
                })}
            </DesignSelect >
           
            </div>

            <ButtonD to="#">
              Add Clothes
            </ButtonD>
            </center>
        )
    }
}

export const BackShapeDropDown = styled.div`
    background-color: rgba(250, 250, 250, 0.75);
    padding: 15px 15px;
    transition: ease-in-out 0.3s;
    margin-left:400px;
    margin-top:-170px;
    position: fixed;
    &:hover {
    padding: 16px 16px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.28);

    }
    
`;

export const DesignSelect = styled.select`
   background-image: none;
   flex: 1;
   padding: 0 .5em;
   color:#fff;
   cursor:pointer;
   font-size: 1em;
   position: relative;
   display: flex;
   width: 20em;
   height: 3em;
   line-height: 3;
   background: #5c6664;
   overflow: hidden;
   border-radius: .25em;
    margin-bottom:100px;
`;

export const ButtonD = styled.button`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 15px;
    border: 3px solid ${colors.light2};
    background-color: ${colors.light2}; 
    border-radius: 25px;
    color: ${colors.dark1};
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;
    justify-content: space-around;

    &:hover{
        background-color: ${colors.myred}; 
        border: 2px solid ${colors.myred};
        color: ${colors.light1};
        cursor: pointer;
        letter-spacing: 2px;
    }
`;


export default DropDown;