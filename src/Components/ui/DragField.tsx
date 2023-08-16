import { DragEvent } from "react";
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
  ];

  const handleOnDrag = (e: DragEvent, inputType: any) => {
    e.dataTransfer.setData("inputType", inputType);
  };

  return (
    <section className="xl:col-span-5 col-span-12 bg-[#dedede] p-8">
      <div className=" grid grid-cols-2 gap-4 ">
        {inputs.map((input, idx) => (
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
      <div
        className="flex items-center gap-2 bg-[#F6F6F6] rounded-md lg:h-12 h-20 px-8 mt-4 justify-center"
        draggable
        onDragStart={(e) => handleOnDrag(e, "section")}
      >
        <span>
          <BsLayoutTextSidebarReverse />
        </span>
        New Section
      </div>
    </section>
  );
};

export default DragField;
