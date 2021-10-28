import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCity } from '../../Redux/actions';
import Card from '../card/Card';

const Div = styled.div`
    padding: 7% 4%;
    width: 80%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    @media (max-width: 800px) {
    width: 100%;
    }
`;

const DivCard = styled.div`
    pading:3px;
    justify-content: center;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

const Input = styled.input`
   margin:5px;
    width: 75%;
    height: 30px;
    background-color: rgb(213,253,240 ,0.5);
    border: 1px
    margin-bottom: 7%;
    box-sizing: border-box;
    padding: 2% 4%;
    font-size: 18px;
`;
const ButtonSerch=styled.button`
      height:40px;
      font-size: 18px;
`

const SearchBar = () => {
    const dispatch = useDispatch();
    const cities = useSelector(state => state.city);
    console.log('hola soy', cities)
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getCity(search));
        setSearch('');
    }

    return(
        <Div>
            <div>
                <form onSubmit={handleSubmit}>
                    <Input type="text" 
                    name="search" 
                    placeholder="Busca tu Ciudad.." 
                    onChange={(e) => handleChange(e)}
                    value={search} />
                    <ButtonSerch >Buscar</ButtonSerch>
                </form>
            </div>
            <DivCard>
                {cities && cities.map( c => {
                    return (
                        <Card 
                        key={c.id}
                        name={c.name} 
                        country={c.sys.country} 
                        main={c.weather[0].main} 
                        icon={c.weather[0].icon}
                        temp={c.main.temp}
                        humidity={c.main.humidity}
                        id={c.id}
                        />
                    )
                })}
            </DivCard>
        </Div>
    )
}

export default SearchBar;