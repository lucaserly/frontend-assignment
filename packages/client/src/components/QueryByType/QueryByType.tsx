import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import queryService from '../../services/queryService';
import InputBar from '../InputBar';
import TablePokemons from '../TablePokemons';
import helperFuncs from '../../utils/helperFuncs';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import './QueryByType.css';

const QueryByType = (): JSX.Element => {
  const [type, setType] = useState('');
  const [limit, setLimit] = useState(5);

  const queryByType = queryService.GET_POKEMONS_BY_TYPE(type, limit);
  const { loading, error, data } = useQuery(queryByType);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const onSearch = (value: string): void => {
    const formattedInput = value === '' ? '' : helperFuncs.queryInputFormatter(value);
    setType(formattedInput);
  };

  const onClick = (): void => {
    setType('');
    setLimit(5);
  };

  const loadMoreResults = () => {
    setLimit((prevLimit) => prevLimit += 5);
  };

  return (
    <div className="bytype_container">
      <div className="search_bar">
        <InputBar onSearch={onSearch} placeholderText='search by type' onClick={onClick} />
        {data.pokemonsByType.pageInfo.hasNextPage ? <Button type="primary" style={buttonStyle} onClick={loadMoreResults}>Load More Results</Button> : <></>}
      </div>
      {type === '' ?
        <></> :
        <TablePokemons pokemons={data.pokemonsByType} />}
    </div>
  );
};

const buttonStyle = {
  'backgroundColor': 'rgb(249, 76, 67)',
  'font-weight': 'bold',
  'border': 'none',
};

export default QueryByType;