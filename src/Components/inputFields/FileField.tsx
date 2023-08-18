import { useEffect } from "react";
import useDrivePicker from "react-google-drive-picker";

const FileField = () => {
  const [openPicker, authResponse] = useDrivePicker();
  // const customViewsArray = [new google.picker.DocsView()]; // custom view
  const handleOpenPicker = () => {
    openPicker({
      clientId:
        "259577035764-o9e9iigrhqgdp6ac59bumljic5m1alo9.apps.googleusercontent.com",
      developerKey: "AIzaSyCsKBzPiSu-mhv-7AqxqoMO_vSp2aa0yQ0",
      viewId: "DOCS",
      // token: token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === "cancel") {
          console.log("User clicked cancel/close button");
        }
        console.log(data);
      },
    });
  };

  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">File Upload</span>
      </label>
      <input
        type="file"
        className="file-input file-input-bordered focus:border-[#323232] focus:outline-none w-full"
        onClick={() => handleOpenPicker()}
      />
    </div>
  );
};

export default FileField;
