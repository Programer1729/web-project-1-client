import jwtDecode from "jwt-decode";

export function getCurrentUser() {
  try {
    const token = localStorage.getItem("x-auth-token");
    const jwt = jwtDecode(token);
    console.log(jwt);
    return jwt;
  } catch (error) {
    return null;
  }
}

export default { getCurrentUser };
