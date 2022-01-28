import axios from "axios"

export async function authWithEmailAndPasswordAxios({email, password}) {
  const apiKey = "AIzaSyA1kzfb4qbZdgDEKLcjoFVhxKmWtOKefDY"

  const data = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
    {email, password, returnSecureToken: true}
    ).then(res => res.data).catch(e => {
    return new Promise((res, rej) => rej(e))
  })

  return data
}
