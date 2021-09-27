export default function authHeader() {
  const obj = JSON.parse(localStorage.getItem("authUser"))

  if (obj && obj.jwt) {
    return { Authorization: obj.jwt }
  } else {
    return {}
  }
}
