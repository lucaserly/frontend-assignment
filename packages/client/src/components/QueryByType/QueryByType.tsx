import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import queryService from '../../services/queryService';
import InputBar from '../InputBar';
import TablePokemons from '../TablePokemons';
import helperFuncs from '../../utils/helperFuncs';
import 'antd/dist/antd.css';

const QueryByType = (): JSX.Element => {
  const [type, setType] = useState('');
  const queryByType = queryService.GET_POKEMONS_BY_TYPE(type, 5);
  const { loading, error, data } = useQuery(queryByType);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const onSearch = (value: string): void => {
    const formattedInput = value === '' ? '' : helperFuncs.queryInputFormatter(value);
    setType(formattedInput);
  };

  const onClick = (): void => {
    setType('');
  };

  return (
    <>
      {console.log('data-->', data)}
      <InputBar placeholderText='search by type' onSearch={onSearch} onClick={onClick} />
      {type === '' ?
        <></> :
        <TablePokemons pokemons={data.pokemonsByType} />}
    </>
  );
};

export default QueryByType;