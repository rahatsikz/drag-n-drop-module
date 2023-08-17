import { GlobalProps } from "@/Types/GlobalProps";
import { useState, FC, ChangeEvent } from "react";

const Number: FC<GlobalProps> = ({ setNumberValue }) => {
  const [inputValue, setInputValue] = useState<number>(0);

  const handleBlur = () => {
    if (inputValue) {
      setNumberValue!((prevValues: any) => [...prevValues, inputValue]);
      setInputValue(0);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(parseInt(event.target.value));
  };
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">Number</span>
      </label>
      <input
        type="number"
        placeholder="Type here"
        // value={inputValue}
        onBlur={handleBlur}
        onChange={handleChange}
        className="input input-bordered focus:border-[#323232] focus:outline-none w-full"
      />
    </div>
  );
};

export default Number;
