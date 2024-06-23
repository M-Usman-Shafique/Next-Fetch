// services/page.js
const fetchData = async () => {
    let data = await fetch("https://dummyjson.com/users");
    data = await data.json();
    return data.users;
  };

  export default fetchData;