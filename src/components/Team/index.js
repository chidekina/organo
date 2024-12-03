import styled from "styled-components";
import Worker from "../Worker";

const Section = styled.section`
  text-align: center;
  padding: 32px;

  h3 {
    font-size: 32px;
    border-bottom: 4px solid;
    display: inline-block;
    padding-bottom: 8px;
  }

  .workers {
    display: flex;
    justify-content: space-around;
    margin-top: 32px;
    flex-wrap: wrap;
  }
`;

export default function Team(props) {
  const css = {
    backgroundColor: props.secondaryColor,
  };

  return (
    props.workers.length > 0 ? 
    <Section style={css}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <div className="workers">
        {props.workers.map((worker) => (
          <Worker cardColor={worker.primaryColor} key={worker.name} name={worker.name} role={worker.role} image={worker.image} />
        ))}
      </div>
    </Section> : ''
  );
}
