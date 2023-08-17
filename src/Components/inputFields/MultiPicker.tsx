import { MultiSelect, MultiSelectProps } from "@uc-react-ui/multiselect";
import { useState } from "react";

const MultiPicker = () => {
  const [value, setValue] = useState(["Mobile"]);
  const props: MultiSelectProps = {
    label: "",
    name: "tags",
    size: "small",
    optionList: [{ label: "PC" }, { label: "Mobile" }, { label: "Tab" }],
    placeholder: "Add tags",
    value: value,
    valueChange: setValue,
  };
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Pick Device</span>
      </label>
      <div className="">
        <div className="-mt-2">
          <MultiSelect {...props} />
        </div>
      </div>
    </div>
  );
};

export default MultiPicker;
