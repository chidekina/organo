import styled from "styled-components";

const DropDown = styled.div`
  label {
    display: block;
    font-size: 24px;
    margin-bottom: 8px;
  }

  select {
    background-color: #fff;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width: 100%;
    border: none;
    font-size: 24px;
    padding: 24px;
    box-sizing: border-box;
  }
`;

export default function DropDownList(props) {
  return (
    <DropDown>
      <label>{props.label}</label>
      <select
        onChange={(event) => props.onType(event.target.value)}
        required={props.required}
        value={props.value}
      >
        <option value=''></option>
        {props.items.map((item) => {
            return <option key={item}>{item}</option>
            })}
      </select>
    </DropDown>
  );
}
