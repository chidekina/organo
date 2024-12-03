import styled from "styled-components";

export default function Banner() {
    const Header = styled.header`
        header {
        background-color: #6278F7;
        text-align: center;
        }
        img {
            max-width: 100%;
        }
    ` 
    return (
        <Header>
            <header>
                <img src="/imgs/banner.png" alt = "Banner principal da pagina do Organo"/>
            </header>
        </Header>
    )
}