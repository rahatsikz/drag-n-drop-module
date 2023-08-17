import { GlobalProps } from "@/Types/GlobalProps";
import { useState, FC, ChangeEvent } from "react";

const User: FC<GlobalProps> = ({ setUserValue }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleBlur = () => {
    if (inputValue) {
      setUserValue!((prevValues: any) => [...prevValues, inputValue]);
      setInputValue("");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">User</span>
      </label>
      <input
        type="text"
        placeholder="Enter Username"
        onBlur={handleBlur}
        onChange={handleChange}
        className="input input-bordered focus:border-[#323232] focus:outline-none w-full"
      />
    </div>
  );
};

export default User;
