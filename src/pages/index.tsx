import { DragEvent, useState } from "react";
import {
  BsInputCursorText,
  BsSortNumericDown,
  BsFillCalendarDayFill,
  BsFillImageFill,
  BsToggleOn,
} from "react-icons/bs";

const HomePage = () => {
  const [inputField, setInputField] = useState<string[]>([]);

  const handleOnDrag = (e: DragEvent, inputType: any) => {
    e.dataTransfer.setData("inputType", inputType);
  };

  const handleOnDrop = (e: DragEvent) => {
    const inputType = e.dataTransfer.getData("inputType");
    console.log("inputType", inputType);
    setInputField([...inputField, inputType]);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  const inputs = [
    {
      name: "Single Line Text",
      type: "text",
      icons: <BsInputCursorText />,
    },
    {
      name: "Number",
      type: "number",
      icons: <BsSortNumericDown />,
    },
    {
      name: "Date and Time",
      type: "date",
      icons: <BsFillCalendarDayFill />,
    },
    {
      name: "Image Upload",
      type: "image",
      icons: <BsFillImageFill />,
    },
    {
      name: "Yes / No",
      type: "toggle",
      icons: <BsToggleOn />,
    },
  ];

  const renderInput = (type: string) => {
    if (type === "text") {
      return (
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Single Line Text</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
      );
    } else if (type === "number") {
      return (
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Number</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
      );
    } else if (type === "date") {
      return (
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Date and Time</span>
          </label>
          <input
            type="datetime-local"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
      );
    } else if (type === "image") {
      return (
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full"
          />
        </div>
      );
    } else if (type === "toggle") {
      return (
        <div className="form-control">
          <label className="label">
            <span className="label-text">Yes or No</span>
          </label>
          <input type="checkbox" className="toggle mt-2 ml-1" />
        </div>
      );
    }
    // Handle other input types here
    return null;
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-12 mt-12">
        <div className="grid grid-cols-2 gap-4 bg-[#dedede] p-8">
          {inputs.map((input, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-[#F6F6F6] rounded-md h-12 px-8"
              draggable
              onDragStart={(e) => handleOnDrag(e, input.type)}
            >
              <span>{input.icons}</span>
              {input.name}
            </div>
          ))}

          {/* <div
            className="flex items-center gap-2 border-2 h-12 px-8"
            draggable
            onDragStart={(e) => handleOnDrag(e, "number")}
          >
            <span>
              <BsSortNumericDown />
            </span>
            Number
          </div> */}
        </div>
        <div
          className="border-4 h-fit min-h-[20vh] grid grid-cols-2 gap-8 px-8 py-4"
          onDrop={handleOnDrop}
          onDragOver={handleDragOver}
        >
          {inputField.length
            ? inputField.map((input, idx) => (
                <div key={idx}>{renderInput(input)}</div>
              ))
            : "Drag and drop your fields here"}
          <div className="py-8"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
