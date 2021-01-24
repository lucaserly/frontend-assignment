import React from 'react';
import './TablePokemons.css';
import { Pokemon } from '../../services/queryService/queryServiceInterfaces';
import { Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';

interface Node {
  node: Pokemon;
}

interface Data {
  edges: Node[],
  pageInfo: {
    hasNextPage: boolean,
  };
}

const columns: ColumnsType<Pokemon> = [
  {
    title: 'NAME',
    key: 'name',
    dataIndex: 'name',
    render: (text: string) => <a style={{ color: 'red' }}>{text}</a>
  },
  {
    title: 'TYPES',
    key: 'types',
    dataIndex: 'types',
    render: (types: string[]) => (
      <>
        {types.map((type, index) => {
          return (
            <Tag key={index}>
              {type.toUpperCase()}
            </Tag>
          );
        })}
      </>
    )
  },
  {
    title: 'CLASS',
    key: 'classification',
    dataIndex: 'classification',
  }
];

const TablePokemons = (props: { pokemons: Data; }): JSX.Element => {
  const { pokemons } = props;
  const data: Pokemon[] = pokemons.edges.map((pokemon: Node) => pokemon.node);
  return (
    <div className="table_container">
      <Table columns={columns} dataSource={data} rowKey={pokemon => pokemon.id} />
    </div>
  );
};

export default TablePokemons;