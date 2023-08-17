import { GlobalProps } from "@/Types/GlobalProps";
import { useState, FC, ChangeEvent } from "react";

const TextArea: FC<GlobalProps> = ({ setTextAreaValue }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleBlur = () => {
    if (inputValue) {
      setTextAreaValue!((prevValues: any) => [...prevValues, inputValue]);
      setInputValue("");
    }
  };

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">Text Area</span>
      </label>
      <textarea
        className="textarea textarea-bordered focus:border-[#323232] focus:outline-none h-12"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Enter Text"
      ></textarea>
    </div>
  );
};

export default TextArea;
