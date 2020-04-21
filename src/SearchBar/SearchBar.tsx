import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./searchBar.scss";

function SearchBar({ length, action }: { length: number; action: (e: React.FormEvent<HTMLInputElement>) => void }) {
  return (
    <div className="search_bar">
      Поиск:
      <label>
        <Input placeholder="default size" prefix={<SearchOutlined />} onChange={action} />
        <p>
          Найдено:
          {length}
        </p>
      </label>
    </div>
  );
}

export default SearchBar;
