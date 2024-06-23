const fetchUserData = async (id) => {
  const response = await fetch(`https://dummyjson.com/users/${id}`);
  const data = await response.json();
  return data;
};

const UserInfoPage = async ({ params }) => {
  const id = params.id;
  const user = await fetchUserData(id);

  return (
    <div>
    <h1>{user.firstName} {user.lastName}</h1>
    <p>{user.email}</p>
  </div>
  );
};

export default UserInfoPage;
