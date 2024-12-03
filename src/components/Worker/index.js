import styled from "styled-components";

const Div = styled.div `
    width: 280px;

    .header {
        background-color: #F0F0F0;
        border-radius: 10px 10px 0 0;

        img {
            width: 100px;
            border-radius: 50%;
            position: relative;
            bottom: -50px;
        }
    }

    .footer {
        background-color: #FFFFFF;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.8);
        border-radius: 0px 0px 10px 10px;
        padding-top: 90px;
        padding-bottom: 40px;

        h4 {
            color: #6278F7;
            font-size: 18px;
            line-height: 22px;
            font-weight: bold;
            margin-bottom: 8px;
        }

        h5 {
            font-size: 18px;
            line-height: 22px;
            color: #212121;
            padding: 0 16px;
        }
    }

`

export default function Worker({name, image, role, cardColor }) {
    return (
        <Div>
            <div className="header" style={{ backgroundColor: cardColor }}>
                <img src={image} alt={name}/>
            </div>
            <div className="footer">
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </Div>
    )   
}