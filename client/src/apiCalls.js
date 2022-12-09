import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/auth/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

export const constellationCall = async (constellation) => {
  try {
    const today = await axios.post(
      `https://aztro.sameerkumar.website?sign=${constellation}&day=today`
    );
    const yesterday = await axios.post(
      `https://aztro.sameerkumar.website?sign=${constellation}&day=yesterday`
    );
    return {
      today: today.data.description,
      yesterday: yesterday.data.description,
    };
  } catch (err) {
    return err;
  }
};
//get all the users
export const fetchAllUsers = async () => {
  try {
    const res = await axios.get("/Users/allUsers");
    return res.data;
  } catch (err) {
    return err;
  }
};
