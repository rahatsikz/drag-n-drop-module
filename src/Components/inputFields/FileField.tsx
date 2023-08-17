const FileField = () => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">File Upload</span>
      </label>
      <input
        type="file"
        className="file-input file-input-bordered focus:border-[#323232] focus:outline-none w-full"
      />
    </div>
  );
};

export default FileField;
