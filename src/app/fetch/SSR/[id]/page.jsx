const fetchData = async () => {
  let data = await fetch("https://jsonplaceholder.typicode.com/users");
  return data.json();
};

const UserInfoPage = async ({ params }) => {
  let data = fetchData();
  let users = await data;
  const userId = params.id;
  let userInfo = users[userId - 1];

  return (
    <div>
    <h1>{userInfo.id}</h1>
    <h1>{userInfo.username}</h1>
    <p>{userInfo.email}</p>
  </div>
  );
};

export default UserInfoPage;
