const ImageField = () => {
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
};

export default ImageField;
