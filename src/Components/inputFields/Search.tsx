import { GlobalProps } from "@/Types/GlobalProps";
import { useState, FC, ChangeEvent } from "react";

const Search: FC<GlobalProps> = ({ setSearchValue }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleBlur = () => {
    if (inputValue) {
      setSearchValue!((prevValues: any) => [...prevValues, inputValue]);
      setInputValue("");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Search</span>
      </label>
      <div className="input-group">
        <input
          type="text"
          placeholder="Type Here..."
          onBlur={handleBlur}
          onChange={handleChange}
          className="input input-bordered focus:border-[#323232] w-full focus:outline-none"
        />
        <button className="btn btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Search;
