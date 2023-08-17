import { DragEvent, ReactElement, useEffect, useState } from "react";
import {
  BsInputCursorText,
  BsSortNumericDown,
  BsFillCalendarDayFill,
  BsFillImageFill,
  BsToggleOn,
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
  BsPersonCircle,
  BsSearch,
  BsChatRightText,
  BsArrowDownShort,
  BsArrowDownUp,
  BsCurrencyBitcoin,
  BsFileEarmarkArrowUp,
  BsLink45Deg,
  BsLayoutTextSidebarReverse,
} from "react-icons/bs";

const DragField = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const inputs: Iinput[] = [
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
    {
      name: "Email",
      type: "email",
      icons: <BsFillEnvelopeFill />,
    },
    {
      name: "Phone Number",
      type: "phone",
      icons: <BsFillTelephoneFill />,
    },
    {
      name: "User",
      type: "user",
      icons: <BsPersonCircle />,
    },
    {
      name: "Search Box",
      type: "search",
      icons: <BsSearch />,
    },
    {
      name: "Text Area",
      type: "textarea",
      icons: <BsChatRightText />,
    },
    {
      name: "Multi Select Search Box",
      type: "multisearch",
      icons: <BsSearch />,
    },
    {
      name: "Pick List",
      type: "picker",
      icons: <BsArrowDownShort />,
    },
    {
      name: "Multi Pick List",
      type: "multipicker",
      icons: <BsArrowDownUp />,
    },
    {
      name: "Currency",
      type: "currency",
      icons: <BsCurrencyBitcoin />,
    },
    {
      name: "File Upload",
      type: "file",
      icons: <BsFileEarmarkArrowUp />,
    },
    {
      name: "Link",
      type: "url",
      icons: <BsLink45Deg />,
    },
    {
      name: "New Section",
      type: "section",
      icons: <BsLayoutTextSidebarReverse />,
    },
  ];

  interface Iinput {
    name: string;
    type: string;
    icons: ReactElement;
  }

  const handleOnDrag = (e: DragEvent, inputType: any) => {
    e.dataTransfer.setData("inputType", inputType);
  };

  const [fieldInputs, setFieldInputs] = useState<Iinput[]>(inputs);

  // Reset to original data when search input is empty
  // useEffect(() => {
  //   setFieldInputs(inputs);
  // }, [fieldInputs, inputs]);

  const handleSearch = (e: { target: { value: any } }) => {
    const fieldName = e.target.value;
    console.log({ fieldName });
    console.log(fieldInputs);
    if (fieldName === "") {
      setFieldInputs(inputs); // Reset to original data when search input is empty
    } else {
      const filtered = inputs.filter((data) => {
        // console.log("Data Name:", data.name);
        return data.name.toLowerCase().includes(fieldName.toLowerCase());
      });
      setFieldInputs(filtered);

      // setFields(fields);

      // const mapped = inputs.map((data) => data.name);
      // console.log(mapped);
    }
  };

  return (
    <section className="xl:col-span-5 col-span-12 bg-[#dedede] p-8">
      <h2 className="font-semibold text-xl">Build your own Module </h2>
      <p className="my-4 max-w-sm">
        You can create personalised modules by using fields as per your
        requirement
      </p>
      <h2 className="font-semibold text-xl mb-4">New Fields </h2>

      <div className="form-control mb-4">
        {/* <label className="label">
          <span className="label-text">Search</span>
        </label> */}
        <div className="input-group">
          <input
            type="text"
            placeholder="Search Fields..."
            onChange={handleSearch}
            className="input input-bordered focus:border-[#323232] w-full focus:outline-none"
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

      <div className=" grid grid-cols-2 gap-4 ">
        {fieldInputs.slice(0, 16).map((input, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 bg-[#F6F6F6] rounded-md lg:h-12 h-20 px-8"
            draggable
            onDragStart={(e) => handleOnDrag(e, input.type)}
          >
            <span>{input.icons}</span>
            {input.name}
          </div>
        ))}
      </div>
      <div>
        {fieldInputs.slice(16).map((input, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 bg-[#F6F6F6] rounded-md lg:h-12 h-20 px-8 mt-4 justify-center"
            draggable
            onDragStart={(e) => handleOnDrag(e, input.type)}
          >
            <span>{input.icons}</span>
            {input.name}
          </div>
        ))}
      </div>
      {/* <div
        className="flex items-center gap-2 bg-[#F6F6F6] rounded-md lg:h-12 h-20 px-8 mt-4 justify-center"
        draggable
        onDragStart={(e) => handleOnDrag(e, "section")}
      >
        <span>
          <BsLayoutTextSidebarReverse />
        </span>
        New Section
      </div> */}
    </section>
  );
};

export default DragField;
