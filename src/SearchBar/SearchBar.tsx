import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./searchBar.scss";

function SearchBar({
  length,
  action,
  value,
}: {
  length: number;
  value: string;
  action: (e: React.FormEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="search_bar">
      <label>
        <Input placeholder="поиск" prefix={<SearchOutlined />} onChange={action} value={value} />
        <p>
          Найдено:
          {length}
        </p>
      </label>
    </div>
  );
}

export default SearchBar;
