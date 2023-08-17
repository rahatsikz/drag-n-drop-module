import { GlobalProps } from "@/Types/GlobalProps";
import { useState, FC, ChangeEvent } from "react";

const Phone: FC<GlobalProps> = ({ setPhoneValue }) => {
  const [inputValue, setInputValue] = useState<number>(0);

  const handleBlur = () => {
    if (inputValue) {
      setPhoneValue!((prevValues: any) => [...prevValues, inputValue]);
      setInputValue(0);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(parseInt(event.target.value));
  };

  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">Phone</span>
      </label>
      <input
        type="number"
        placeholder="Enter Number here"
        onBlur={handleBlur}
        onChange={handleChange}
        className="input input-bordered focus:border-[#323232] focus:outline-none w-full"
      />
    </div>
  );
};

export default Phone;
