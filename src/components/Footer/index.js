import styled from "styled-components";

const Section = styled.footer`
    background-color: #6278F7;
    color: #FFFFFF;
    display: flex;
    padding: 80px;
    justify-content: space-between;
    align-items: center;

        ul li {
            display: inline-block;
            margin-right: 32px;

            &:last-child {
            margin-right: 0px;
            }
        }
`;

export default function Footer() {
  return (
    <Section>
      <section className="logos">
        <ul>
          <li>
            <a href="www.facebook.com" target="_blank">
              <img src="/imgs/fb.png" alt="Facebook logo" />
            </a>
          </li>
          <li>
            <a href="www.x.com" target="_blank">
              <img src="/imgs/tw.png" alt="Twitter logo" />
            </a>
          </li>
          <li>
            <a href="www.instagram.com" target="_blank">
              <img src="/imgs/ig.png" alt="Instagram logo" />
            </a>
          </li>
        </ul>
      </section>

      <section>
        <img src="/imgs/logo.png" alt="Organo logo" />
      </section>

      <section>
        <p>Desenvolvido por Cesar Hideki</p>
      </section>
    </Section>
  );
}
