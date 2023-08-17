import { MultiSelect, MultiSelectProps } from "@uc-react-ui/multiselect";
import { GlobalProps } from "@/Types/GlobalProps";
import { useState, FC, ChangeEvent, useEffect } from "react";

const MultiPicker: FC<GlobalProps> = ({ setMultiPickerValue }) => {
  const [value, setValue] = useState<string[]>([]);

  const handleBlur = () => {
    if (value.length) {
      setMultiPickerValue!((prevValues: string[]) => [...prevValues, value]);
      setValue([]);
    }
  };
  const handleValueChange = (newValue: string[]) => {
    // Use a Set to ensure uniqueness of values
    const uniqueValues = Array.from(new Set(newValue));
    setValue(uniqueValues);
  };

  const props: MultiSelectProps = {
    label: "",
    name: "tags",
    size: "small",
    optionList: [{ label: "PC" }, { label: "Mobile" }, { label: "Tab" }],
    placeholder: "Add tags",
    value: value,
    valueChange: handleValueChange,
  };

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Pick Device</span>
      </label>
      <div className="">
        <div className="-mt-2" onBlur={handleBlur}>
          <MultiSelect {...props} />
        </div>
      </div>
    </div>
  );
};

export default MultiPicker;
