import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import styled from "styled-components";
import { getMedellin } from "../../Redux/actions";


const Div = styled.div`
    width: 20%;
    height: auto;
    background-color: rgba(0,30,247, 0.3);
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 800px) {
        width: 100%;
       
    }
    color:rgba(227,228,230);
`;

const Span = styled.span`
    margin: 15% 0%;
`;

const DivFlex = styled.div`
    display: flex;
    flex-direction: row;
`;

const DivOther = styled.div`
    display: flex;
    height: auto;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 10px;
`;

const DivTitle = styled.div`
    font-size: 30px;
    font-weight: 600;
    box-sizing: border-box;
    margin: 10% 0%;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
`;

const P = styled.p`
    font-size: 30px;
    font-weight: 600;
`;

const DivBody= styled.div`
    width: 50%;
    margin: auto;
    text-align: center;
`;

const Cards= () => {
    const dispatch = useDispatch();
    const medellin = useSelector(state => state.copyCity);
    console.log('hola soy la copia',medellin )
    const img = `http://openweathermap.org/img/wn/${medellin.weather && medellin.weather[0].icon}@2x.png`;
    
  

    useEffect(()=>{
      dispatch(getMedellin('Medellin'))
    },[dispatch])
  
    
    return(
        <>
        { medellin.name ?(<Div>
            {console.log('soy el name de return',medellin.name)}
            <h1> Current medellin </h1>
            <DivTitle>
                {medellin.name}, {medellin.sys.country}
            </DivTitle>
            <DivFlex>
                <DivBody>
                    <Img src={img} alt={medellin.weather[0].main} />
                </DivBody>
                <DivBody>
                    <P>{Math.floor(medellin.main.temp/32)}°C</P>
                    <p>{medellin.weather[0].main}</p>
                </DivBody>
            </DivFlex>
            <DivFlex>
                <DivOther>
                    <Span> Temp_Min:{Math.floor(medellin.main.temp_min/32)}°C</Span>
                    <Span>Temp_Max:{Math.floor(medellin.main.temp_max/32)}°C</Span>
                    <Span> Feels_Like:{Math.floor(medellin.main.feels_like)}°C</Span>
                    <Span>Humedad:{medellin.main.humidity}%</Span>
                </DivOther>
              
            </DivFlex>
        </Div>):<div>Espera</div>}
        </>
    )
}

export default Cards;