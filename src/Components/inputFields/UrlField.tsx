import { GlobalProps } from "@/Types/GlobalProps";
import { useState, FC, ChangeEvent } from "react";

const UrlField: FC<GlobalProps> = ({ setUrlValue }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleBlur = () => {
    if (inputValue) {
      setUrlValue!((prevValues: any) => [...prevValues, inputValue]);
      setInputValue("");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">Link</span>
      </label>
      <input
        type="url"
        placeholder="Enter Link"
        onBlur={handleBlur}
        onChange={handleChange}
        className="input input-bordered focus:border-[#323232] focus:outline-none  w-full"
      />
    </div>
  );
};

export default UrlField;
