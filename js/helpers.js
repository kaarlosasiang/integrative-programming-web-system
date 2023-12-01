export const storeToLocalStorage = (title, value) => {
  localStorage.setItem(title, value);
};

export const getDataLocalStorage = (title) => {
  return localStorage.getItem(title);
};

export const deleteDataLocalStorage = (title) => {
  localStorage.removeItem(title);
};

export const checkLogin = () => {
  const isLogin = localStorage.getItem("uid");

  if (isLogin !== "" && typeof isLogin === "string") {
    return true;
  } else {
    return false;
  }
};
