const TextArea = () => {
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
};

export default TextArea;
