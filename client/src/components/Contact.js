import axios from "axios";
import { useEffect, useState } from "react";

const Contact = () => {
  const [use, setUsers] = useState([]);
  useEffect(() => {
    async function demo() {
      const res = await axios.get("http://localhost:5000/all");
      setUsers(res.data.users);
    }
    demo();
  }, []);
  return (
    <>
      {use.map((elem, index) => (
        <div className="div" key={index}>
          <h1 className="text h1">{elem.email}</h1>
        </div>
      ))}
    </>
  );
};

export default Contact;
