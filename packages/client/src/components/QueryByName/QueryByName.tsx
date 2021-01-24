import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import queryService from '../../services/queryService';
import InputBar from '../InputBar';
import TablePokemons from '../TablePokemons';
import 'antd/dist/antd.css';
import helperFuncs from '../../utils/helperFuncs';
import './QueryByName.css';

const QueryByName = (): JSX.Element => {
  const [name, setName] = useState('');
  const [limit, setLimit] = useState(5);

  const queryByName = queryService.GET_POKEMON_BY_NAME(name, limit);
  const { loading, error, data } = useQuery(queryByName);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const onSearch = (value: string): void => {
    const formattedInput = value === '' ? '' : helperFuncs.queryInputFormatter(value);
    setName(formattedInput);
  };

  const onClick = (): void => {
    setName('');
    setLimit(5);
  };

  return (
    <div className="byname_container">
      <div className="search_bar">
        <InputBar onSearch={onSearch} placeholderText='search by name' onClick={onClick} />
      </div>
      {name === '' ?
        <></> :
        <TablePokemons pokemons={data.pokemons} />}
    </div>
  );
};

export default QueryByName;
;
