import Axios from 'axios'

const RegisterDb = (name, password, setStatusReg) => {
  if (name && password) {
    Axios.post("http://localhost:8080/db/register", {
      username: name,
      userpassword: password,
    }).then((response) => {
      if (response.data)
        setStatusReg(response.data);
    })
  } else {
    if (name === "")
      setStatusReg("Invalid username");
    else
      setStatusReg("Invalid password");
  }
};

export default RegisterDb;