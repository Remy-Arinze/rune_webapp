"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/index";
import { closeModal } from "@/store/ui_slice";

export default function CustomModal() {
  const { isModalOpen, modalContent } = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch();

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={() => dispatch(closeModal())}
    >
      <div
        className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {modalContent}
      </div>
    </div>
  );
}
