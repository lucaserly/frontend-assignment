import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import queryService from '../../services/queryService';
import InputBar from '../InputBar';
import TablePokemons from '../TablePokemons';
import 'antd/dist/antd.css';
import helperFuncs from '../../utils/helperFuncs';

const QueryByName = (): JSX.Element => {
  const [name, setName] = useState('');
  const queryByName = queryService.GET_POKEMON_BY_NAME(name, 1000);
  const { loading, error, data } = useQuery(queryByName);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const onSearch = (value: string): void => {
    const formattedInput = value === '' ? '' : helperFuncs.queryInputFormatter(value);
    setName(formattedInput);
  };

  const onClick = (): void => {
    setName('');
  };

  return (
    <>
      <InputBar onSearch={onSearch} placeholderText='search by name' onClick={onClick} />
      {name === '' ?
        <></> :
        <TablePokemons pokemons={data.pokemons.edges} />}
    </>
  );
};

export default QueryByName;
;
