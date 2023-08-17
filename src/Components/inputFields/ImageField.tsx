import { GlobalProps } from "@/Types/GlobalProps";
import { useState, FC, ChangeEvent } from "react";

const ImageField: FC<GlobalProps> = ({ setImgValue }) => {
  const [inputValue, setInputValue] = useState("");

  const handleBlur = () => {
    if (inputValue) {
      // setImgValue!((prevValues: any) => [...prevValues, inputValue]);
      imgUpload();
      setInputValue("");
    }
  };

  const handleChange = (event: any) => {
    setInputValue(event.target.files[0]);
  };

  const imgUpload = () => {
    const imgbbApi = process.env.NEXT_PUBLIC_IMGBB;

    // console.log({ imgbbApi });
    const url = `https://api.imgbb.com/1/upload?key=${imgbbApi}`;
    const formdata = new FormData();
    formdata.append("image", inputValue);
    // console.log(formdata);

    fetch(url, {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          console.log(data.data.url);
          setImgValue!((prevValues: any) => [...prevValues, data.data.url]);
        }
      });
  };

  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">Image</span>
      </label>
      <input
        type="file"
        className="file-input file-input-bordered focus:border-[#323232] focus:outline-none w-full"
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </div>
  );
};

export default ImageField;
