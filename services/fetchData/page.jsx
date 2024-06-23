// services/page.js
const fetchData = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/users");
    return data.json();
  };

  export default fetchData;