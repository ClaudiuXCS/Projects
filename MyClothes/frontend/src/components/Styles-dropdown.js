import styled from 'styled-components';
import {colors} from '../components/Styles';

export const Lista1 = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  margin-top:-600px;
`;

export const Lista2 = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
`;

export const DDWrapper = styled.div`
  display: flex;
  height: 120px;
  width: 400px;
  flex-wrap: wrap;
  position: fixed;
  align-items: center;
  

  .dd-header {
    background-color: rgba(250,250,250,0.6);
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    width: 400px;
    height:40px;
    padding: 0 20px;
    position: fixed;
    transition: ease-in-out 0.3s;
    &:hover {
          margin-left: 1px;
          background-color: rgba(250,250,250,0.8);
          box-shadow: 10px 10px 5px 0px rgba(10, 15, 10, 0.1);
        }

    &__title--bold {
      font-weight: bold;
    }

    
  }


  .dd-list {
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075) !important;
    padding: 0;
    margin: 0;
    width: 400px;
    margin-top: 85px;

    li {
      list-style-type: none;
      button {
        display: flex;
        justify-content: space-between;
        background-color: rgba(250,250,250,0.9);
        font-size: 16px;
        padding: 15px 20px 15px 20px;
        border: 0;
        border-bottom: 1px solid #ccc;
        width: 100%;
        text-align: left;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        transition: ease-in-out 0.3s;

        &:hover, &:focus {
          cursor: pointer;
          font-weight: bold;
          background-color: #ccc;
          letter-spacing: 1px;
        }
      }
    }
  }
`;