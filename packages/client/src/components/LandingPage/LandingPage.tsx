import React, { useState } from 'react';
import './LandingPage.css';
import QueryByType from '../QueryByType';
import QueryByName from '../QueryByName';
import { Button } from 'antd';
import { useQuery } from '@apollo/client';
import queryService from '../../services/queryService';
import TablePokemons from '../TablePokemons';

export const LandingPage = (): JSX.Element => {
  const [flag, setFlag] = useState(false);
  const queryByName = queryService.GET_POKEMON_BY_NAME('', 1000);
  const { loading, error, data } = useQuery(queryByName);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const showAllPokemons = (): void => {
    flag ? setFlag(false) : setFlag(true);
  };

  const buttonTitle = flag ? 'Hide list' : 'List all Pokemons';

  return (
    <div className="landing_page_container">
      <Button type="primary" style={buttonStyle} onClick={showAllPokemons}>{buttonTitle}</Button>
      {flag ? <TablePokemons pokemons={data.pokemons} loadMoreResults={() => { }} /> : <></>}
      <QueryByType />
      <QueryByName />
    </div>
  );
};

const buttonStyle = {
  'marginBottom': '2%',
  'marginLeft': '2%'
};