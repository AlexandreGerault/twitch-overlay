import { useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../core/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAudio = (filename: string) => {
  useEffect(() => {
    const audio = new Audio(`../../../assets/sounds/${filename}`);
    audio.play();
  }, []);
};
