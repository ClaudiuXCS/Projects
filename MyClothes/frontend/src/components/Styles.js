import styled from 'styled-components';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import background from './../images/home.png';
import bgpagini from './../images/home.png';


// LOGIN Shapes
export const BackgroundLogin = styled.div`
    background: linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${background});
    background-size: cover;
    background-attachment: fixed;
    margin: 0;
    min-height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`;

export const ShapeLogin = styled.div`
    background-color: ${props => props.bg || colors.light1};
    text-align: center;
    padding: 45px 60px;
`;

export const BackShapeLogin = styled.div`
    background-color: rgba(25,25,25, 0.4);
    padding: 15px 15px;
    transition: ease-in-out 0.3s;
    &:hover {
    padding: 16px 16px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.28);
    }
`;


// animatie login-register
export const BackDrop = styled(motion.div)`
  width: 300%;
  height: 1000px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(6deg);
  top: -570px;
  left: -250px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  z-index: 1;
`;

export const backdropVariants = {
    expanded: {
        width: "230%",
        height: "1700px",
        borderRadius: "30%",
        transform: "rotate(4deg)"

    },
    collapsed: {
        width: "230%",
        height: "550px",
        borderRadius: "30%",
        transform: "rotate(4deg)"
    },
};

export const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
}


// HOME
export const BackgroundDashboard = styled.div`
    background: linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${background});
    background-size: cover;
    background-attachment: fixed;
    margin: 0;
    min-height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ShapeDashboard = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.bg || colors.light1};
    position: relative;
    overflow: hidden;
`;

// Nav de sus
export const MyText = styled.h5`
    font-size: ${(props) => props.size}px;
    color: ${(props) => props.color ? props.color : colors.primary};
    text-align: right;
    margin-left: 950px;
    transition: ease-in-out 0.2s;

    &:hover {
        letter-spacing: 2px;
    }
`;


// Extra styled components
export const colors = {
    primary: "#fff",
    myred: "#FA2742",
    dark: "#373833",
    dark1: "#12151F",
    dark2: "#9CA3AF",
    light: "#E8EAE3",
    light1: "#F3F4F5",
    light2: "#E5E7E5",
    invalid: "#ffa5b1",
    ok: "#cdffda"
}

export const SIcons = styled.p`
    color: ${colors.dark};
    position: absolute;
    font-size: 20px;
    top: 33px;
    ${props => props.right && `right: 15px;`}
    ${props => !props.right && `left: 15px;`}
`;

export const BigText = styled.h2`
    font-size: ${(props) => props.size}px;
    color: ${(props) => props.color ? props.color : colors.primary};
    text-align: center;
    padding: 5px;
    margin-bottom: 25px;

    &:hover {
        text-shadow: 0.6px 0.6px 0.6px ${colors.dark2};
    }
`;

export const SmallText = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.primary};
    padding: 5px;
    margin-bottom: 20px;
`;

export const Img = styled.div`
    width: 200px;
    height: 64px;
    background-image: url(${props => props.image});
`;


export const BoxContainer2 = styled.div`
    position: relative;
    overflow: hidden;
`;

export const Maincontainer = styled.div`
  background: url(${bgpagini});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  float:right;
  width: 87%;
  flex-direction: column;
`;

export const MODAL_STYLES = {
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
      width: '450px',
      height: '780px',
      color: 'black',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      padding: '10px',
      justifyContent: "space-evenly",
      backgroundColor: 'rgb(255,255,255)',
      zIndex: 1000
    }
  }

  export const MODAL_STYLES2 = {
    overlay: {
      backgroundColor: 'rgba(25,25,25,.01)',
      position: 'fixed',
      top: '8.3%',
      left: '13%',
      right: 0,
      bottom: 0,
      zIndex: 1000
    },
    content: {
      width: '800px',
      height: '320px',
      color: 'black',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      padding: '10px',
      borderRadius: '15px',
      justifyContent: "space-evenly",
      backgroundColor: 'rgba(25,25,25,.99)',
      border: '5px solid rgba(25,25,25,.92)',
      zIndex: 1000,
      boxshadow: '10px 10px #888888'
    }
  }

  export const MODAL_STYLES3 = {
    overlay: {
      backgroundColor: 'rgba(25,25,25,.01)',
      position: 'fixed',
      top: '8.3%',
      left: '13%',
      right: 0,
      bottom: 0,
      zIndex: 1
    },
    content: {
      width: '1367px',
      height: '750px',
      color: 'gray',
      position: 'relative',
      left: '50%',
      top: '55%',
      transform: 'translate(-50%,-50%)',
      padding: '10px',
      borderRadius: '15px',
      justifyContent: "space-evenly",
      backgroundColor: 'rgba(25,25,25,.99)',
      border: '5px solid rgba(25,25,25,.92)',
      zIndex: 1000,
      boxshadow: '10px 10px #888888'
    }
  }

  export const MODAL_STYLES4 = {
    overlay: {
      backgroundColor: 'rgba(25,25,25,.9)',
      position: 'fixed',
      top: '8.3%',
      left: '13%',
      right: 0,
      bottom: 0,
      zIndex: 1000
    },
    content: {
      width: '520px',
      height: '350px',
      color: 'black',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      padding: '10px',
      borderRadius: '15px',
      justifyContent: "space-evenly",
      backgroundColor: 'white',
      border: '5px solid rgba(25,25,25,.92)',
      zIndex: 1000,
      boxshadow: '10px 10px #888888',
      transition: 'ease-in-out 1s',
    }
  }
  
  export const MODAL_STYLES5 = {
    overlay: {
      backgroundColor: 'rgba(25,25,25,.01)',
      position: 'fixed',
      top: '8.3%',
      left: '13%',
      right: 0,
      bottom: 0,
      zIndex: 1
    },
    content: {
      width: '707px',
      height: '600px',
      color: 'gray',
      position: 'relative',
      left: '72%',
      top: '40%',
      transform: 'translate(-50%,-50%)',
      padding: '10px',
      borderRadius: '15px',
      justifyContent: "space-evenly",
      background: 'linear-gradient(0deg, rgba(41, 41, 41, 0), rgba(41, 41, 41,0.4))',
      border: 'none',
      zIndex: 1000,
      
    }
  }

  export const MODAL_STYLESCATEGORY = {
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
      width: '400px',
      height: '400px',
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

  export const LOGOUT_STYLES = {
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
        width: '400px',
        height: '400px',
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