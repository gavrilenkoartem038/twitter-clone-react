export const getExpirationDate = (jwtToken: string) => {
  if (!jwtToken) {
    return null;
  }
  let jwt;
  try {
    jwt = JSON.parse(atob(jwtToken.split(".")[1]));
  } catch (e) {
    return null;
  }

  return (jwt && jwt.exp && jwt.exp * 1000) || null;
};

export const isExpired = (exp: string | number) => {
  if (!exp || exp === 'null' || exp === 'undefined') {
    return false;
  }
  return Date.now() > exp;
};

export const getUserId = (jwtToken: string) => {
  if (!jwtToken) {
    return null;
  }
  let jwt;
  try {
    jwt = JSON.parse(atob(jwtToken.split(".")[1]));
  } catch (e) {
    return null;
  }

  return jwt?.id || null;
};

export const getToken = () => {
  if (
    !localStorage.getItem("app_token") ||
    isExpired(getExpirationDate(localStorage.getItem("app_token")!))
  ) {
    return null;
  }
  return localStorage.getItem("app_token");
};

const getHeaders = async (headers: Headers) => {
  if (
    localStorage.getItem("app_token") &&
    getExpirationDate(localStorage.getItem("app_token") || "")
  )
    headers.set(
      "Authorization",
      localStorage.getItem("app_token")
        ? "Bearer " + (await getToken())
        : ""
    );
  return headers;
};

export default getHeaders;
