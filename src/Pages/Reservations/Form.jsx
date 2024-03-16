import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

//components
import Input from "./Input.jsx";
import TextArea from "./TextArea.jsx";

const Form = ({ getSubmissions }) => {
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputMessage, setInputMessage] = useState("");

    const inputNameOnChange = (e) => {
        setInputName(e.target.value);
    };
    const inputEmailOnChange = (e) => {
        setInputEmail(e.target.value);
    };
    const inputMessageOnChange = (e) => {
        setInputMessage(e.target.value);
    };

    const restForm = () => {
        setInputName("");
        setInputEmail("");
        setInputMessage("");
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const postData = {
            id: uuid(),
            name: inputName,
            email: inputEmail,
            message: inputMessage,
        };

        await axios.post("http://localhost:4059/submissions", postData);

        getSubmissions();
    };

    return (
        <FormStyled onSubmit={onSubmit}>
            <Input
                id="name"
                labelText="Name"
                onChange={inputNameOnChange}
                value={inputName}
            />
            <Input
                id="email"
                labelText="Email"
                inputType="email"
                onChange={inputEmailOnChange}
                value={inputEmail}
            />
            <TextArea
                id="message"
                labelText="Message"
                onChange={inputMessageOnChange}
                value={inputMessage}
            />

            <button type="submit">Send</button>
            <button type="button" onClick={restForm}>
                Reset
            </button>
        </FormStyled>
    );
};

export default Form;

// prop-types
Form.propTypes = {
    getSubmissions: PropTypes.func.isRequired,
};

const FormStyled = styled.form`
    .input-group {
        margin-bottom: 20px;
    }

    label {
        font-weight: bold;
        display: block;
        margin-bottom: 5px;
    }

    input,
    textarea {
        font-size: 14px;
        padding: 10px;
        width: 100%;
        background-color: #eee;
        border: solid 1px #999;
        border-radius: 4px;
    }

    &:focus {
        background-color: #fff;
    }

    button {
        background-color: #452516;
        padding: 10px 5px;
        color: white;
        width: 150px;
        border: none;
        outline: none;
        border-radius: 40px;

        cursor: pointer;

        &:hover,
        &:focus {
            background-color: #e78451;
        }

        &:active {
            background-color: #452516;
        }
    }
`;
