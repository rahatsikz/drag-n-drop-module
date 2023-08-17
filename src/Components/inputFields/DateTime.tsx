import { GlobalProps } from "@/Types/GlobalProps";
import { useState, FC, ChangeEvent } from "react";

const DateTime: FC<GlobalProps> = ({ setDateValue }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleBlur = () => {
    if (inputValue) {
      setDateValue!((prevValues: any) => [...prevValues, inputValue]);
      setInputValue("");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">Date and Time</span>
      </label>
      <input
        type="datetime-local"
        placeholder="Type here"
        onBlur={handleBlur}
        onChange={handleChange}
        className="input input-bordered focus:border-[#323232] focus:outline-none w-full"
      />
    </div>
  );
};

export default DateTime;
