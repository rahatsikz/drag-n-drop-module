import { GlobalProps } from "@/Types/GlobalProps";
import { useState, FC, ChangeEvent } from "react";

const MultiSearch: FC<GlobalProps> = ({ setMultiSearchValue }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectValue, setSelectValue] = useState<string>("");

  const handleBlur = () => {
    if (inputValue) {
      setMultiSearchValue!((prevValues: any) => [
        ...prevValues,
        { selectValue, inputValue },
      ]);
      setInputValue("");
    }
  };

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleSelectChange = (e: any) => {
    setSelectValue(e.target.value);
  };

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Multi Select Search</span>
      </label>
      <div className="input-group">
        <select
          name="select"
          onChange={handleSelectChange}
          className="select select-bordered focus:outline-none"
        >
          <option value={"all"}>Gender</option>
          <option value={"male"}>Male</option>
          <option value={"female"}>Female</option>
        </select>
        <input
          type="text"
          placeholder="Type Here..."
          onBlur={handleBlur}
          onChange={handleChange}
          className="input input-bordered focus:border-[#323232] focus:outline-none w-full"
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

export default MultiSearch;
