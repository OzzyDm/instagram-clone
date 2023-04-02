import { modalState } from "@/atom/modalAtom";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
import { CameraIcon } from "@heroicons/react/outline";
import { useRef } from "react";

function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);
  const filePickerRef = useRef(null);

  return (
    <div>
      {open && (
        <Modal
          className="max-w-lg w-[90%] p-6 h-[300px] absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
          isOpen={open}
          onRequestClose={() => setOpen(false)}
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            <CameraIcon
              onClick={() => filePickerRef.current.click()}
              className="cursor-pointer h-14 bg-red-200 p-2 rounded-full border-2 text-red-500"
            />
            <input type="file" hidden ref={filePickerRef} />
            <input
              type="text"
              maxLength="150"
              placeholder="Please enter your caption..."
              className="m-4 border-none text-center w-full focus:ring-0"
            />
            <button
              disabled
              className="w-full bg-red-600 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100"
            >
              Upload Post
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default UploadModal;
