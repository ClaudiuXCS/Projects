import axios from "axios";
import { sessionService } from "redux-react-session";
import {useAlert} from 'react-alert';


export const loginUser = ( credentials,
  history,
  setFieldError,
  setSubmitting
) => {
  // Make checks and get some data

  return () => {


  axios
    .post(
      "http://localhost:1338/api/Auth/login",
      credentials,
      {
        headers: {
          "Content-Type": "application/json",
          
        },
      }
    )
    .then((response) => {
      const { data } = response;

      if (data.succeded === false) {
        const { message } = data.errors;

        // check for specific error
        if (message.includes("credentials")) {
          setFieldError("email", message);
          setFieldError("password", message);
        } else if (message.includes("password")) {
          setFieldError("password", message);
        }
      } else if (data.succeeded === true) {
        const userData = data.data.id;
        console.warn(userData);
        const token = data.jwtToken;

        sessionService
          .saveSession(token)
          .then(() => {
            sessionService
              .saveUser(userData)
              .then(() => {
                history.push("/home");
              })
              .catch((err) => console.error(err));
          })
          .catch((err) => console.log(err));
      }

      //complete submission
      setSubmitting(false);
    })
    .catch((err) => setSubmitting(false) );


}
};




export const signupUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {

  return (dispatch) => {
    axios
      .post(
        "http://localhost:1338/api/Auth/register",
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const { data } = response;
        console.warn(data);
        if (data.succeeded == false) {
          const { message } = data.errors;
  
          // checking for specific error
          if (message.includes("taken")) {
            setFieldError("name", message);
          }
          // complete submission
          setSubmitting(false);
          console.warn(message)
          console.log('FAIL!')
        } else if (data.succeeded === true) {
          console.log('SUCCESS!')
          // Login user after successful signup
          const { email, password } = credentials;
  
          dispatch(
           loginUser({ email, password }, history, setFieldError, setSubmitting)
        );
        }
      })
      .catch((err) => console.warn(err));
  
  }
  };

export const logoutUser = (history) => {
    return () => {
        sessionService.deleteSession();
        sessionService.deleteUser();
        
    }
};

export const infoMessage = (history) => {
  return () => {
    console.log("am intrat in functie");
      
  }
};
