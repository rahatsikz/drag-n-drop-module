import { GlobalProps } from "@/Types/GlobalProps";
import { useState, FC, ChangeEvent } from "react";

const Text: FC<GlobalProps> = ({ setTextValue }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const [closeModal, setCloseModal] = useState<string | null>("Rahat");

  const [textLabel, setTextLabel] = useState("Single Line Text");

  const handleEdit = (e: any) => {
    e.preventDefault();
    const label = e.target.name.value;
    setTextLabel(label);
    console.log({ label });
    setCloseModal(null);
  };

  const handleBlur = () => {
    if (inputValue) {
      setTextValue!((prevValues: any) => [
        ...prevValues,
        { [textLabel]: inputValue },
      ]);
      setInputValue("");
    }
  };

  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{textLabel}</span>
        <label htmlFor="my_modal_8" className="cursor-pointer">
          ...
        </label>
        {closeModal && (
          <>
            <input type="checkbox" id="my_modal_8" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <form action="" onSubmit={handleEdit}>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Label Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Label Name"
                      name="name"
                      className="input input-bordered focus:border-[#323232] focus:outline-none w-full"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-neutral btn-block mt-4"
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </label>
      <input
        type="text"
        placeholder="Type here"
        // value={inputValue}
        onBlur={handleBlur}
        onChange={handleChange}
        className="input input-bordered focus:border-[#323232] focus:outline-none w-full"
      />
    </div>
  );
};

export default Text;
