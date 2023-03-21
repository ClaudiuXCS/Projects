import styled from 'styled-components';
import { useField } from 'formik';
import { useState } from 'react';
import {
    SIcons,
    colors
} from "./Styles";
import { Link } from 'react-router-dom';
import { FiEyeOff, FiEye } from 'react-icons/fi';


//LOGIN Components
export const LabelShape = styled.p`
    text-align: left;
    font-weight: bold;
    font-size: 13px;
    margin-bottom:-2px;
    transition: ease-in-out 0.1s;

    &:hover {
        text-shadow: 0.6px 0.6px 0.6px ${colors.dark2};
    }
`;

export const TextShape = styled.input`
    width: 280px;
    padding: 16px;
    padding-left: 45px;
    font-size: 16px;
    letter-spacing: 1px;
    border: 0;
    background-color: ${colors.primary};
    display:block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;

    ${(props) => props.invalid && `background-color: ${colors.invalid}; 
    color: ${colors.primary};`}

    &:focus {
        background-color: ${colors.dark2}; 
        color: ${colors.primary};
    }
`;

export const ButtonShape = styled.button`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 20px;
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
        border: 3px solid ${colors.myred};
        color: ${colors.light1};
        cursor: pointer;
        letter-spacing: 2px;
    }
`;

export const ButtonSpace = styled.div`
    display: flex;
    margin-top: 25px;
    flex-direction: row;
    justify-content: space-around;
`;

export const ValidationMessage = styled.div`
    font-size: 11px;
    color: ${colors.myred};
    margin-top:-6px;
    margin-bottom: 10px;
    text-align: left;
`;

export const ExtraMessage = styled.p`
    font-size: ${props => props.size}px;
    text-align: center;
    color: ${props => (props.color ? props.color : colors.dark)};
    padding: 2px;
    padding-top: 20px;
    margin-bottom: -5px;

`;

export const HyperText = styled(Link)`
    text-decoration:none;
    color: ${colors.myred};
    transition: ease-in-out 0.3s;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
        letter-spacing: 2px;
    }
`;

// schelet pentru textfield
export const TypeText = ({ icon, ...props }) => {
    const [field, meta] = useField(props);
    const [show, setShow] = useState(false);

    return (
        <div style={{ position: "relative" }}>
            <LabelShape htmlFor={props.name}>
                {props.label}
            </LabelShape>

            {props.type !== "password" && (<TextShape
                invalid={meta.touched && meta.error}
                {...field} {...props} />)}

            {props.type === "password" && (
                <TextShape
                    invalid={meta.touched && meta.error}
                    {...field} {...props}
                    type={show ? "text" : "password"}
                />
            )}
            <SIcons>{icon}</SIcons>

            {props.type === "password" && (
                <SIcons onClick={() => setShow(!show)} right>
                    {show && <FiEye />}
                    {!show && <FiEyeOff />}
                </SIcons>
            )}
            {meta.touched && meta.error ? (
                <ValidationMessage>{meta.error}</ValidationMessage>
            ) : (<ValidationMessage style={{ visibility: "hidden" }}>.</ValidationMessage>
            )}
        </div>
    );
};
