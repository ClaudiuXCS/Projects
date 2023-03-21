import React from "react";
import {
    BackShapeLogin,
    ShapeLogin,
    colors,
    Img,
    BigText,
    BoxContainer2,
    BackDrop,
    expandingTransition,
    backdropVariants
} from '../components/Styles';
import {
    TypeText,
    ButtonShape,
    ButtonSpace,
    ExtraMessage,
    HyperText,
} from "../components/Styles-Login";
import {
    Formik,
    Form
} from 'formik';
import {
    SiMinutemailer,
    SiKeepassxc
} from 'react-icons/si';
import * as Yup from 'yup';
import logo from '../images/dress2.png';


// auth & redux
import { connect } from "react-redux";
import { loginUser } from "./../authentification/actions/userActions";
import { useHistory } from "react-router-dom";

// Loader
import Loader from "react-loader-spinner";

 const Login = ({ loginUser }) => {
   
    const history = useHistory();
    return (
        <div>
            <BackShapeLogin>
                <ShapeLogin>
                    <center><Img image={logo} /></center>
                    <BigText size={13} color={colors.dark}>LOGIN TO YOUR ACCOUNT</BigText>
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        validationSchema={
                            Yup.object({
                                email: Yup.string()
                                    .email("Ivalid email address")
                                    .required("Email required"),
                                password: Yup.string()
                                    .min(8, "Password is too short(min 8)")
                                    .max(25, "Password is too long(max 25)")
                                    .required("Password required"),
                                })}
                                onSubmit={(values, { setSubmitting, setFieldError }) => {
                                  console.log(values);
                                  loginUser(values, history, setFieldError, setSubmitting);
                                }}>
                        {({ isSubmitting }) => (
                            <Form>
                                <TypeText
                                    name="email" type="text"
                                    label="Email Address"
                                    placeholder="clau1s@example.com"
                                    icon={<SiMinutemailer />}
                                />

                                <TypeText
                                    name="password" type="password"
                                    label="Password"
                                    placeholder="*********"
                                    icon={<SiKeepassxc />}
                                />
                                <ButtonSpace> {!isSubmitting && (
                                    <ButtonShape type="submit">Login</ButtonShape>
                                )}

                                    {isSubmitting && (
                                        <Loader
                                            type="ThreeDots"
                                            color={colors.myred}
                                            height={49}
                                            width={100}
                                        />
                                    )}
                                </ButtonSpace>
                            </Form>
                        )}
                    </Formik>
                    <ExtraMessage>New here?  <HyperText  to="/signup" >SignUp Now</HyperText>
                    </ExtraMessage>
                </ShapeLogin>
            </BackShapeLogin>
        </div>
    );
};

export default connect(null, { loginUser })(Login);