import { GlobalProps } from "@/Types/GlobalProps";
import { useState, FC, ChangeEvent, useEffect } from "react";

const Picker: FC<GlobalProps> = ({ setPickerValue }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const [closeModal, setCloseModal] = useState<string | null>("Rahat");

  const [textLabel, setTextLabel] = useState("Label");

  const handleEdit = (e: any) => {
    e.preventDefault();
    const label = e.target.name.value;
    setTextLabel(label);
    console.log({ label });
    setCloseModal(null);
  };

  const handleBlur = () => {
    if (inputValue) {
      setPickerValue!((prevValues: any) => [
        ...prevValues,
        { [textLabel]: inputValue },
      ]);
      setInputValue("");
    }
  };

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [option5, setOption5] = useState("");

  const [rowNumber, setRowNumber] = useState(2);

  console.log(rowNumber);

  console.log(option1);

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text"> {textLabel} </span>
        <label htmlFor="my_modal_10" className="cursor-pointer">
          ...
        </label>
        {closeModal && (
          <>
            <input type="checkbox" id="my_modal_10" className="modal-toggle" />
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
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Number of Rows</span>
                    </label>
                    <select
                      name="row"
                      id=""
                      onChange={(e) => setRowNumber(parseInt(e.target.value))}
                      className="select select-bordered focus:outline-none w-full"
                    >
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </div>

                  {rowNumber === 3 && (
                    <>
                      {/* 1 */}
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Option One</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Type option"
                          name="one"
                          onBlur={(e) => setOption1(e.target.value)}
                          className="input input-bordered focus:border-[#323232] focus:outline-none w-full"
                        />
                      </div>

                      {/* 2 */}
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Option Two</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Type option"
                          name="two"
                          onBlur={(e) => setOption2(e.target.value)}
                          className="input input-bordered focus:border-[#323232] focus:outline-none w-full"
                        />
                      </div>

                      {/* 3 */}
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Option Three</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Type option"
                          name="three"
                          onBlur={(e) => setOption3(e.target.value)}
                          className="input input-bordered focus:border-[#323232] focus:outline-none w-full"
                        />
                      </div>
                    </>
                  )}

                  {rowNumber === 4 && (
                    <>
                      {/* 1 */}
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Option One</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Type option"
                          name="one"
                          onBlur={(e) => setOption1(e.target.value)}
                          className="input input-bordered focus:border-[#323232] focus:outline-none w-full"
                        />
                      </div>

                      {/* 2 */}
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Option Two</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Type option"
                          name="two"
                          onBlur={(e) => setOption2(e.target.value)}
                          className="input input-bordered focus:border-[#323232] focus:outline-none w-full"
                        />
                      </div>

                      {/* 3 */}
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Option Three</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Type option"
                          name="three"
                          onBlur={(e) => setOption3(e.target.value)}
                          className="input input-bordered focus:border-[#323232] focus:outline-none w-full"
                        />
                      </div>

                      {/* 4 */}
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Option Four</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Type option"
                          name="three"
                          onBlur={(e) => setOption4(e.target.value)}
                          className="input input-bordered focus:border-[#323232] focus:outline-none w-full"
                        />
                      </div>
                    </>
                  )}

                  {rowNumber === 5 && (
                    <>
                      {/* 1 */}
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Option One</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Type option"
                          name="one"
                          onBlur={(e) => setOption1(e.target.value)}
                          className="input input-bordered focus:border-[#323232] focus:outline-none w-full"
                        />
                      </div>

                      {/* 2 */}
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Option Two</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Type option"
                          name="two"
                          onBlur={(e) => setOption2(e.target.value)}
                          className="input input-bordered focus:border-[#323232] focus:outline-none w-full"
                        />
                      </div>

                      {/* 3 */}
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Option Three</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Type option"
                          name="three"
                          onBlur={(e) => setOption3(e.target.value)}
                          className="input input-bordered focus:border-[#323232] focus:outline-none w-full"
                        />
                      </div>

                      {/* 4 */}
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Option Four</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Type option"
                          name="three"
                          onBlur={(e) => setOption4(e.target.value)}
                          className="input input-bordered focus:border-[#323232] focus:outline-none w-full"
                        />
                      </div>

                      {/* 5 */}
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Option Five</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Type option"
                          name="three"
                          onBlur={(e) => setOption5(e.target.value)}
                          className="input input-bordered focus:border-[#323232] focus:outline-none w-full"
                        />
                      </div>
                    </>
                  )}
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
      <div className="input-group">
        <select
          className="select select-bordered focus:outline-none w-full"
          onBlur={handleBlur}
          onChange={handleChange}
        >
          {/* <option value={"all"}> {textLabel} </option> */}
          {rowNumber === 3 && (
            <>
              <option value={`${option1}`}>{option1} </option>
              <option value={`${option2}`}>{option2} </option>
              <option value={`${option3}`}>{option3} </option>
            </>
          )}
          {rowNumber === 4 && (
            <>
              <option value={`${option1}`}>{option1} </option>
              <option value={`${option2}`}>{option2} </option>
              <option value={`${option3}`}>{option3} </option>
              <option value={`${option4}`}>{option4} </option>
            </>
          )}
          {rowNumber === 5 && (
            <>
              <option value={`${option1}`}>{option1} </option>
              <option value={`${option2}`}>{option2} </option>
              <option value={`${option3}`}>{option3} </option>
              <option value={`${option4}`}>{option4} </option>
              <option value={`${option5}`}>{option5} </option>
            </>
          )}
        </select>
      </div>
    </div>
  );
};

export default Picker;
