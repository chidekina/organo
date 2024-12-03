import styled from "styled-components";

const TextInput = styled.div `
    margin: 24px 0;

    label {
        display: block;
        font-size: 24px;
        margin-bottom: 8px;
    }

    input {
        background-color: #FFF;
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
        width: 100%;
        border: none;
        font-size: 24px;
        padding: 24px;
        box-sizing: border-box;
    }
`
export default function TextField(props) {

    const placeholderModified = `${props.placeholder}...`;


    function onType(event) {
        props.onType(event.target.value);
    }
    
    return (
    <TextInput>
        <label>
            {props.label}
        </label>
        <input value={props.value} onChange={onType} required={props.required} placeholder={placeholderModified} />
    </TextInput>
)
};