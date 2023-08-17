import { useState, FC, ChangeEvent } from "react";

interface TextProps {
  setTextValue: (newValue: any) => void;
}

const Text: FC<TextProps> = ({ setTextValue }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleBlur = () => {
    if (inputValue) {
      setTextValue((prevValues: any) => [...prevValues, inputValue]);
      setInputValue("");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">Single Line Text</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        value={inputValue}
        onBlur={handleBlur}
        onChange={handleChange}
        className="input input-bordered focus:outline-none w-full"
      />
    </div>
  );
};

export default Text;
