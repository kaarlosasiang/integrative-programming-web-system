export const StoreUserDetails = (id, token = "") => {
  localStorage.setItem("uid", id);
};

export const checkLogin = () => {
  const isLogin = localStorage.getItem("uid");

  if (isLogin !== "" && typeof isLogin === "string") {
    return true;
  } else {
    return false;
  }
};
