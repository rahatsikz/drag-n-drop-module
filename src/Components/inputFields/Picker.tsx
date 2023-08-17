import { GlobalProps } from "@/Types/GlobalProps";
import { useState, FC, ChangeEvent } from "react";

const Picker: FC<GlobalProps> = ({ setPickerValue }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleBlur = () => {
    if (inputValue) {
      setPickerValue!((prevValues: any) => [...prevValues, inputValue]);
      setInputValue("");
    }
  };

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Pick List</span>
      </label>
      <div className="input-group">
        <select
          className="select select-bordered focus:outline-none w-full"
          onBlur={handleBlur}
          onChange={handleChange}
        >
          <option value={"all"}>Choose Your Marital Status</option>
          <option value={"married"}>Married</option>
          <option value={"single"}>Single</option>
          <option value={"divorced"}>Divorced</option>
        </select>
      </div>
    </div>
  );
};

export default Picker;
