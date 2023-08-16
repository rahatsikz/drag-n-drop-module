import { MultiSelect, MultiSelectProps } from "@uc-react-ui/multiselect";
import { DragEvent, useState } from "react";
import { BsPersonBoundingBox, BsPersonCircle } from "react-icons/bs";

const DragTarget = () => {
  const [inputField, setInputField] = useState<string[]>([]);

  const handleOnDrop = (e: DragEvent) => {
    const inputType = e.dataTransfer.getData("inputType");
    console.log("inputType", inputType);
    setInputField([...inputField, inputType]);
    console.log(e.dataTransfer);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };
  const [inputFieldTwo, setInputFieldTwo] = useState<string[]>([]);

  const handleOnDropTwo = (e: DragEvent) => {
    const inputType2 = e.dataTransfer.getData("inputType");
    console.log("inputType", inputType2);
    setInputFieldTwo([...inputFieldTwo, inputType2]);
    // console.log(e.dataTransfer);
  };

  // console.log({ inputFieldTwo, inputField });

  const handleDragOverTwo = (e: DragEvent) => {
    e.preventDefault();
  };
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
            className="input input-bordered focus:outline-none w-full"
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
            className="input input-bordered focus:outline-none w-full"
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
            className="input input-bordered focus:outline-none w-full"
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
            className="file-input file-input-bordered focus:outline-none w-full"
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
    } else if (type === "email") {
      return (
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Type here"
            className="input input-bordered focus:outline-none w-full"
          />
        </div>
      );
    } else if (type === "phone") {
      return (
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered focus:outline-none w-full"
          />
        </div>
      );
    } else if (type === "user") {
      return (
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">User</span>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            className="input input-bordered focus:outline-none w-full"
          />
        </div>
      );
    } else if (type === "search") {
      return (
        <div className="form-control">
          <label className="label">
            <span className="label-text">Search</span>
          </label>
          <div className="input-group">
            <input
              type="text"
              placeholder="Type Here..."
              className="input input-bordered w-full focus:outline-none"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      );
    } else if (type === "textarea") {
      return (
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Text Area</span>
          </label>
          <textarea
            className="textarea textarea-bordered focus:outline-none h-12"
            placeholder="Enter Text"
          ></textarea>
        </div>
      );
    } else if (type === "multisearch") {
      return (
        <div className="form-control">
          <label className="label">
            <span className="label-text">Multi Select Search</span>
          </label>
          <div className="input-group">
            <select className="select select-bordered focus:outline-none">
              <option defaultValue={"all"}>Gender</option>
              <option value={"male"}>Male</option>
              <option value={"female"}>Female</option>
            </select>
            <input
              type="text"
              placeholder="Type Here..."
              className="input input-bordered focus:outline-none w-full"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      );
    } else if (type === "picker") {
      return (
        <div className="form-control">
          <label className="label">
            <span className="label-text">Pick List</span>
          </label>
          <div className="input-group">
            <select className="select select-bordered focus:outline-none w-full">
              <option defaultValue={"all"}>Choose Your Marital Status</option>
              <option value={"married"}>Married</option>
              <option value={"single"}>Single</option>
              <option value={"divorced"}>Divorced</option>
            </select>
          </div>
        </div>
      );
    } else if (type === "multipicker") {
      return (
        // <div className="p-2 !font-normal">
        //   <MultiSelect {...props} />
        // </div>
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
    } else if (type === "currency") {
      return (
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Currency</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="100"
              className="input input-bordered focus:outline-none w-full"
            />
            <span>USD</span>
          </label>
        </div>
      );
    } else if (type === "file") {
      return (
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">File Upload</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered focus:outline-none w-full"
          />
        </div>
      );
    } else if (type === "url") {
      return (
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Link</span>
          </label>
          <input
            type="url"
            placeholder="Enter Link"
            className="input input-bordered focus:outline-none w-full"
          />
        </div>
      );
    }
    // Handle other input types here
    return null;
  };

  const renderSection = (type: string) => {
    if (type === "section") {
      return (
        <div
          className="xl:col-span-7 col-span-12 h-fit min-h-[20vh] w-full grid lg:grid-cols-2 gap-8"
          onDrop={handleOnDropTwo}
          onDragOver={handleDragOver}
        >
          {inputFieldTwo.slice(1).map((input, idx) => (
            <div key={idx}>{renderInput(input)}</div>
          ))}
          <div className="py-8"></div>
        </div>
      );
    }
  };

  return (
    <section className="xl:col-span-7 col-span-12">
      <div className="border-4 rounded-lg">
        <div
          className={`flex items-center gap-2 px-8 pt-4 ${
            !inputField.length && "justify-center"
          }`}
        >
          <div className="text-3xl">
            <BsPersonCircle />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Title of Content</h3>
            <p className="text-slate-500">Description</p>
          </div>
        </div>
        <div
          className="xl:col-span-7 col-span-12  h-fit min-h-[20vh] grid lg:grid-cols-2 gap-8 px-8 py-2"
          onDrop={handleOnDrop}
          onDragOver={handleDragOver}
        >
          {inputField.length &&
          inputField.filter((input: any) => input.type !== "section") ? (
            inputField.map((input, idx) => (
              <div key={idx}>{renderInput(input)}</div>
            ))
          ) : (
            <div className="col-span-12">
              <p className="text-center text-base mt-4 ">
                Drag and Drop your fields here
              </p>
              <p className="text-center text-4xl col-span-12 bg-[#DEDEDE] w-96 mx-auto mt-8 pt-1 pb-3">
                +
              </p>
            </div>
          )}
          <div className="py-8"></div>
        </div>
      </div>
      <br />
      <div className="border-4 rounded-lg">
        <div
          className={`flex items-center gap-2 px-8 pt-4 ${
            inputFieldTwo.length ? "justify-normal" : "hidden"
          }`}
        >
          <div className="text-3xl">
            <BsPersonCircle />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Title of Content</h3>
            <p className="text-slate-500">Description</p>
          </div>
        </div>
        <div
          className="xl:col-span-7 col-span-12  h-fit min-h-[10vh] gap-8 py-2 px-8 "
          onDrop={handleOnDropTwo}
          onDragOver={handleDragOverTwo}
        >
          {inputFieldTwo.length ? (
            inputFieldTwo.map((input, idx) => (
              <div key={idx}>{renderSection(input)}</div>
            ))
          ) : (
            <div className="col-span-12">
              <p className="text-center text-lg mt-4">
                Drag and Drop New Section for adding A New Section
              </p>
              <p className="text-center text-4xl  bg-[#DEDEDE] w-96 mx-auto mt-8 pt-1 pb-3">
                +
              </p>
            </div>
          )}
          <div className="py-8"></div>
        </div>
      </div>
    </section>
  );
};

export default DragTarget;
