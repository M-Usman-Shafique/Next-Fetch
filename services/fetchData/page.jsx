// services/page.js
const fetchData = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/users", {next: {revalidate: 60}})
    return data.json();
  };

  export default fetchData;