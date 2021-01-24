import React from 'react';
import './TablePokemons.css';
import { Pokemon } from '../../services/queryService/queryServiceInterfaces';
import { Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Button } from 'antd';

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
    title: 'name',
    key: 'name',
    dataIndex: 'name',
    render: (text: string) => <a>{text}</a>
  },
  {
    title: 'types',
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
    title: 'classification',
    key: 'classification',
    dataIndex: 'classification',
  }
];

const TablePokemons = (props: { pokemons: Data; }): JSX.Element => {
  const { pokemons } = props;
  const data: Pokemon[] = pokemons.edges.map((pokemon: Node) => pokemon.node);
  return (
    <div className="table_container">
      {pokemons.pageInfo.hasNextPage ? <Button type="primary" style={buttonStyle}>Load More Results</Button> : <></>}
      <Table columns={columns} dataSource={data} rowKey={pokemon => pokemon.id} />
    </div>
  );
};

const buttonStyle = {
  width: "20%"
};

export default TablePokemons;