import { useDispatch } from "react-redux";
import { remove } from "../../Redux/actions";
import styled from "styled-components";

const Div = styled.div`

    width: 35%;
    height: 70%;
    padding: 10px;
    margin-bottom: 20px;
    background-color: rgba(203, 218,225, 0.5);
    display: flex;
    flex-direction: column;
    @media (max-width: 800px) {
        heigtht:max-content;
        width:max-content;
        display:inline-flex;
        flex-direction: column;
        
    }
   
    box-shadow: 5px 5px 7px rgba(33,33,33,1);
    transform:rotate(-3deg);
      
`;


const Button = styled.button`
    width: 20px;
    height: 20px;
    align-self: flex-end;
    background-color: rgb(0,35,247);
    border-radius:50%;
    @media (max-width: 800px) {
   
        border-radius:50%;
    }

`;

const DivBody = styled.div`
    width: 50%;
    margin: auto;
    text-align: center;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
`;

const DivContain = styled.div`
    display: flex;
    flex-direction: row;
`;

const Span = styled.span`
    display: block;
    font-weight: 600;
    font-size: 20px;
`;
const DivHead= styled.div`
    color:black
`


function  Card  ({name, country, main, icon, temp, id,humidity}){
    console.log('hola soy props',name, country, main, icon, temp, id,humidity) 
    const dispatch = useDispatch();



    const img = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(remove(id))
    }

    return (
        <Div>
            <Button onClick={handleClick}/>
            <DivHead>
                <h1>{name}</h1>
                <h3>{country}</h3>
             </DivHead>
            <DivContain>
                <DivBody>
                    <Img src={img} alt={main} />
                </DivBody>
                <DivBody>
                    <span> {main} </span>
                    <Span>Temp:{Math.ceil(temp/32)} ° C</Span>
                    <Span>Humedad:{humidity}</Span>
                </DivBody>

            </DivContain>
        </Div>
    )
}

export default Card;