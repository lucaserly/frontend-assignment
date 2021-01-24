import React, { MouseEvent } from 'react';
import { Input, Space } from 'antd';
import { Button } from 'antd';
import './InputBar.css';

interface OnSearch {
  (value: string): void;
}

interface OnClick {
  (e: MouseEvent): void;
}

const InputBar = (props: { onSearch: OnSearch; placeholderText: string; onClick: OnClick; }): JSX.Element => {
  const { Search } = Input;
  const { onSearch, placeholderText, onClick } = props;

  return (
    <div className="input">
      <Space direction="vertical">
        <Search placeholder={placeholderText} onSearch={onSearch} enterButton />
      </Space>
      <Button type="primary" className="button" onClick={onClick}>Clear Search</Button>
    </div>
  );
};

export default InputBar;