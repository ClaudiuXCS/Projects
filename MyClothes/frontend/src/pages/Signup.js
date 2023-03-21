import React  from "react";
import {
    BackShapeLogin,
    ShapeLogin,
    colors,
    Img,
    BigText
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
import { FiCalendar} from 'react-icons/fi';
import * as Yup from 'yup';
import logo from '../images/dress2.png';

// auth & redux
import { connect } from "react-redux";
import { signupUser } from "./../authentification/actions/userActions";
import { useHistory } from "react-router-dom";

// Loader
import Loader from "react-loader-spinner";

const Signup = ({ signupUser }) => {

  
    const history = useHistory();
    return (
        <div>
            <BackShapeLogin>
                <ShapeLogin>
                    <center><Img image={logo} /></center>
                    <BigText size={13} color={colors.dark}>REGISTER YOUR ACCOUNT</BigText>
                    <Formik
                        initialValues={{
                            email: "",
                            username: "",
                            password: "",
                            confirmpassword: "",
                        }}
                        validationSchema={
                            Yup.object({
                                email: Yup.string()
                                    .email("Ivalid email address")
                                    .required("Email required"),
                                password: Yup.string()
                                    .min(8, "Password is too short(min 8)")
                                    .max(25, "Password is too long(max 25)")
                                    .matches(
                                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                        "Provide one uppercase, number and special character"
                                      )
                                    .required("Password required"),
                                confirmpassword: Yup.string()
                                    .required("Repeat password required")
                                    .oneOf([Yup.ref("password")], "Passwords must match"),
                                username: Yup.string().required("Name Required"),
                            })}
                        onSubmit={(values, { setSubmitting, setFieldError }) => {
                            signupUser(values, history, setFieldError, setSubmitting);
                        }}>
                            <Form>
                                <TypeText
                                    name="username" type="username"
                                    label="Username"
                                    placeholder="claw123"
                                    icon={<SiMinutemailer />}
                                />
                                <TypeText
                                    name="email" type="text"
                                    label="Email Address"
                                    placeholder="clau1s@yahoo.com"
                                    icon={<SiMinutemailer />}
                                />

                                <TypeText
                                    name="password" type="password"
                                    label="Password"
                                    placeholder="*********"
                                    icon={<SiKeepassxc />}
                                />
                                <TypeText
                                    name="confirmpassword" type="password"
                                    label="Confirm Password"
                                    placeholder="*********"
                                    icon={<SiKeepassxc />}
                                />
                                <ButtonSpace>  
                                    <ButtonShape type="submit">Register</ButtonShape>
                                </ButtonSpace>
                            </Form>
                    </Formik>
                    <ExtraMessage>Go back to <HyperText  to="/login">Login</HyperText>
                    </ExtraMessage>
                </ShapeLogin>
            </BackShapeLogin>
        </div>
    )
}

export default connect(null, { signupUser })(Signup);