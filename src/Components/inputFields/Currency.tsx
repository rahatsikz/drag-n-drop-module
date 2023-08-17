import { GlobalProps } from "@/Types/GlobalProps";
import { useState, FC, ChangeEvent } from "react";
const Currency: FC<GlobalProps> = ({ setCurrencyValue }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleBlur = () => {
    if (inputValue) {
      setCurrencyValue!((prevValues: any) => [...prevValues, inputValue]);
      setInputValue("");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Enter Currency</span>
      </label>
      <label className="input-group">
        <input
          type="text"
          placeholder="100"
          onBlur={handleBlur}
          onChange={handleChange}
          className="input input-bordered focus:border-[#323232] focus:outline-none w-full"
        />
        <span>USD</span>
      </label>
    </div>
  );
};

export default Currency;
