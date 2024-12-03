import { useState } from "react";
import Button from "../Button";
import DropDownList from "../DropDownList";
import TextField from "../TextField";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin: 80px 0;

  form {
    max-width: 80%;
    background-color: #f2f2f2;
    border-radius: 20px;
    padding: 36px 64px;
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.08);
  }
`;

export default function Forms(props) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  function onSave(event) {
    event.preventDefault();
    props.workerAdded({
      name,
      role,
      image,
      team,
    });
    setName('');
    setRole('');
    setImage('');
    setTeam('');
  }

  return (
    <Section>
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          onType={(value) => setName(value)}
        />
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={role}
          onType={(value) => setRole(value)}
        />
        <TextField
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
          onType={(value) => setImage(value)}
        />
        <DropDownList
          required={true}
          label="Time"
          items={props.teams}
          value={team}
          onType={(value) => setTeam(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </Section>
  );
}
