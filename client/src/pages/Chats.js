import axios from "axios";
import { useEffect } from "react";

const Chats = () => {
  useEffect(() => {
    const apiServerDataUrl = `http://localhost:5070/api/user/chats`;
    const fetchData = async () => {
      axios.get(apiServerDataUrl).then(({ data }) => {
        console.log(data);
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-4xl">S Chats</h1>
    </div>
  );
};

export default Chats;
