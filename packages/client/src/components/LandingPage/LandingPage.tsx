import React, { useState } from 'react';
import './LandingPage.css';
import QueryByType from '../QueryByType';
import QueryByName from '../QueryByName';
import { Button } from 'antd';
import { useQuery } from '@apollo/client';
import queryService from '../../services/queryService';
import TablePokemons from '../TablePokemons';

const LandingPage = (): JSX.Element => {
  const [flag, setFlag] = useState(false);
  const queryByName = queryService.GET_POKEMON_BY_NAME('', 1000);
  const { loading, error, data } = useQuery(queryByName);

  if (loading) return <p></p>;
  if (error) return <p>Error :(</p>;

  const showAllPokemons = (): void => {
    flag ? setFlag(false) : setFlag(true);
  };

  const buttonTitle = flag ? 'Hide list' : 'List all Pokemons';

  return (
    <div className="landing_page_container">
      <div className="title_container">
        <div className="title">#pokemon browser</div>
      </div>
      <div className="all_pokemons_container">
        <Button type="primary" style={buttonStyle} onClick={showAllPokemons}>{buttonTitle}</Button>
      </div>
      {flag ? <TablePokemons pokemons={data.pokemons} /> : <></>}
      <QueryByType />
      <QueryByName />
    </div>
  );
};

const buttonStyle = {
  'marginBottom': '2%',
  'marginLeft': '0.5%',
  'backgroundColor': 'rgb(249, 76, 67)',
  'font-weight': 'bold',
  'border': 'none',
};

export default LandingPage;