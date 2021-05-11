import { AUTH, LOGOUT } from "../actionTypes";
import * as api from "../../api/auth";
import { message } from "antd";

export const signin = (formData, router) => async (dispatch) => {
  try {
    console.log("signin");
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    router.push("/post/create");
    message.success("Login successfully!");
  } catch (error) {
    console.log(error);
    message.error("Something went wrong, try again!");
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    console.log("signup");
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    router.push("/login");
  } catch (error) {
    console.log(error);
    message.error("This email has already been used.");
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
