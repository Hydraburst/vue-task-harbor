import axiosInstance from "./index";
import { useNoteStore } from "../../stores/noteStore";

interface userInterface {
  identifier: string;
  password: string;
}

const noteStore = useNoteStore();

export const loginUser = (payload: userInterface): Promise => {
    return axiosInstance.post("auth/local", payload);
};
