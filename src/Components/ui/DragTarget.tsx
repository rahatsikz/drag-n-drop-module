import { DragEvent, useState } from "react";
import { BsPersonBoundingBox, BsPersonCircle } from "react-icons/bs";
import Text from "../inputFields/Text";
import Number from "../inputFields/Number";
import DateTime from "../inputFields/DateTime";
import ImageField from "../inputFields/ImageField";
import Toggle from "../inputFields/Toggle";
import EmailField from "../inputFields/EmailField";
import Phone from "../inputFields/Phone";
import User from "../inputFields/User";
import Search from "../inputFields/Search";
import TextArea from "../inputFields/TextArea";
import MultiSearch from "../inputFields/MultiSearch";
import Picker from "../inputFields/Picker";
import MultiPicker from "../inputFields/MultiPicker";
import Currency from "../inputFields/Currency";
import FileField from "../inputFields/FileField";
import UrlField from "../inputFields/UrlField";

const DragTarget = () => {
  const [inputField, setInputField] = useState<string[]>([]);

  const handleOnDrop = (e: DragEvent) => {
    const inputType = e.dataTransfer.getData("inputType");
    console.log("inputType", inputType);
    setInputField([...inputField, inputType]);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };
  const [inputFieldTwo, setInputFieldTwo] = useState<string[]>([]);

  const handleOnDropTwo = (e: DragEvent) => {
    const inputType2 = e.dataTransfer.getData("inputType");
    console.log("inputType", inputType2);
    setInputFieldTwo([...inputFieldTwo, inputType2]);
  };

  // console.log({ inputFieldTwo, inputField });

  const handleDragOverTwo = (e: DragEvent) => {
    e.preventDefault();
  };

  const [textValue, setTextValue] = useState<string[]>([]);
  const [numberValue, setNumberValue] = useState<number[]>([]);
  const [dateValue, setDateValue] = useState<string[]>([]);
  const [toggleValue, setToggleValue] = useState([]);
  const [emailValue, setEmailValue] = useState<string[]>([]);
  const [phoneValue, setPhoneValue] = useState<number[]>([]);
  const [userValue, setUserValue] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string[]>([]);
  const [textAreaValue, setTextAreaValue] = useState<string[]>([]);
  const [multiSearchValue, setMultiSearchValue] = useState<string[]>([]);
  const [pickerValue, setPickerValue] = useState<string[]>([]);
  const [currencyValue, setCurrencyValue] = useState<string[]>([]);
  const [multipickerValue, setMultiPickerValue] = useState<string[]>([]);
  const [urlValue, setUrlValue] = useState<string[]>([]);

  console.log({ textValue });
  console.log({ numberValue });
  console.log({ dateValue });
  console.log({ toggleValue });
  console.log({ emailValue });
  console.log({ phoneValue });
  console.log({ userValue });
  console.log({ searchValue });
  console.log({ textAreaValue });
  console.log({ multiSearchValue });
  console.log({ pickerValue });
  console.log({ currencyValue });
  console.log({ multipickerValue });
  console.log({ urlValue });

  const renderInput = (type: string) => {
    if (type === "text") {
      return <Text setTextValue={setTextValue} />;
    } else if (type === "number") {
      return <Number setNumberValue={setNumberValue} />;
    } else if (type === "date") {
      return <DateTime setDateValue={setDateValue} />;
    } else if (type === "image") {
      return <ImageField />;
    } else if (type === "toggle") {
      return <Toggle setToggleValue={setToggleValue} />;
    } else if (type === "email") {
      return <EmailField setEmailValue={setEmailValue} />;
    } else if (type === "phone") {
      return <Phone setPhoneValue={setPhoneValue} />;
    } else if (type === "user") {
      return <User setUserValue={setUserValue} />;
    } else if (type === "search") {
      return <Search setSearchValue={setSearchValue} />;
    } else if (type === "textarea") {
      return <TextArea setTextAreaValue={setTextAreaValue} />;
    } else if (type === "multisearch") {
      return <MultiSearch setMultiSearchValue={setMultiSearchValue} />;
    } else if (type === "picker") {
      return <Picker setPickerValue={setPickerValue} />;
    } else if (type === "multipicker") {
      return <MultiPicker setMultiPickerValue={setMultiPickerValue} />;
    } else if (type === "currency") {
      return <Currency setCurrencyValue={setCurrencyValue} />;
    } else if (type === "file") {
      return <FileField />;
    } else if (type === "url") {
      return <UrlField setUrlValue={setUrlValue} />;
    }
    // Handle other input types here
    return null;
  };

  const renderSection = (type: string) => {
    if (type === "section") {
      return (
        <div
          className="xl:col-span-7 col-span-12 h-fit min-h-[20vh] w-full grid lg:grid-cols-2 gap-x-8 gap-y-4"
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
      <div className="border-4 rounded-lg bg-[#f9f9f9]">
        <div
          className={` px-8 pt-4  ${
            inputField.length ? "justify-normal" : "hidden"
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="text-3xl">
              <BsPersonCircle />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Title of Content</h3>
              <p className="text-slate-500">Description</p>
            </div>
          </div>
          <p className="mt-4 font-semibold">Untitled information</p>
        </div>
        <div
          className="xl:col-span-7 col-span-12  h-fit min-h-[20vh] grid lg:grid-cols-2 gap-x-8 gap-y-4 px-8 py-2"
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
      <div
        className={` rounded-lg  ${
          inputFieldTwo.length && "bg-[#f9f9f9] border-4"
        }`}
      >
        <div
          className={` px-8 pt-4  ${
            inputFieldTwo.length ? "justify-normal" : "hidden"
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="text-3xl">
              <BsPersonCircle />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Title of Content</h3>
              <p className="text-slate-500">Description</p>
            </div>
          </div>
          <p className="mt-4 font-semibold">Untitled information</p>
        </div>
        <div
          className="xl:col-span-7 col-span-12  h-fit min-h-[10vh] gap-x-8 gap-y-4 py-2 px-8 "
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
