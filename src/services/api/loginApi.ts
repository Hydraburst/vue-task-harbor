import axiosInstance from "./index";
import { useNoteStore } from "../../stores/noteStore";
import { AxiosPromise } from "axios";

interface userInterface {
  identifier: string;
  password: string;
}

const noteStore = useNoteStore();

export const loginUser = (payload: userInterface): AxiosPromise => {
    return axiosInstance.post("auth/local", payload);
};
