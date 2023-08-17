import { GlobalProps } from "@/Types/GlobalProps";
import { useState, FC, ChangeEvent } from "react";

const EmailField: FC<GlobalProps> = ({ setEmailValue }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleBlur = () => {
    if (inputValue) {
      setEmailValue!((prevValues: any) => [...prevValues, inputValue]);
      setInputValue("");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input
        type="email"
        placeholder="Type here"
        onBlur={handleBlur}
        onChange={handleChange}
        className="input input-bordered focus:border-[#323232] focus:outline-none w-full"
      />
    </div>
  );
};

export default EmailField;
