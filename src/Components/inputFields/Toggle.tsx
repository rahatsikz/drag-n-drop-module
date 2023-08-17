import { GlobalProps } from "@/Types/GlobalProps";
import { useState, FC, ChangeEvent } from "react";

const Toggle: FC<GlobalProps> = ({ setToggleValue }) => {
  const [inputValue, setInputValue] = useState<boolean>(false);

  const handleBlur = () => {
    setToggleValue!((prevValues: any) => [...prevValues, inputValue]);
    setInputValue(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.checked);
  };

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Yes or No</span>
      </label>
      <input
        type="checkbox"
        className="toggle mt-2 ml-1"
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </div>
  );
};

export default Toggle;
