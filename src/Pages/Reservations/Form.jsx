import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
import Calendar from "./Calendar.jsx";

//components
import Input from "./Input.jsx";

const Form = ({ getSubmissions }) => {
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputNumber, setInputNumber] = useState("");
    const [inputGuest, setInputGuest] = useState("");
    const [inputDate, setInputDate] = useState("");

    const inputNameOnChange = (e) => {
        setInputName(e.target.value);
    };
    const inputEmailOnChange = (e) => {
        setInputEmail(e.target.value);
    };
    const inputNumberOnChange = (e) => {
        setInputNumber(e.target.value);
    };
    const inputGuestOnChange = (e) => {
        setInputGuest(e.target.value);
    };
    const inputDateOnChange = (e) => {
        setInputDate(e.target.value);
    };

    const restForm = () => {
        setInputName("");
        setInputEmail("");
        setInputNumber("");
        setInputGuest("");
        setInputDate("");
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const postData = {
            id: uuid(),
            name: inputName,
            email: inputEmail,
            phonenumber: inputNumber,
        };

        await axios.post("http://localhost:4059/submissions", postData);

        getSubmissions();
    };

    // form
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
            <Input
                id="phonenumber"
                labelText="Phone number"
                onChange={inputNumberOnChange}
                value={inputNumber}
            />
            <Input
                id="#ofguest"
                labelText="How many guests"
                onChange={inputGuestOnChange}
                value={inputGuest}
            />

            <Calendar inputType="date" id="date" labelText="Date" />

            <ButtonWrapperStyled>
                <div>
                    <button type="submit">Send</button>
                </div>

                <div>
                    <button type="button" onClick={restForm}>
                        Reset
                    </button>
                </div>
            </ButtonWrapperStyled>
        </FormStyled>
    );
};

export default Form;

// prop-types
Form.propTypes = {
    getSubmissions: PropTypes.func.isRequired,
};

const ButtonWrapperStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 24px;
`;

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
        background-color: white;
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

        border: none;
        outline: none;
        border-radius: 40px;

        /* margin-right: 24px; */

        display: block;
        width: 100%;

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
