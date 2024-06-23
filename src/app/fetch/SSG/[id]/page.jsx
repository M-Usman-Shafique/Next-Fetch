// src/app/fetch/SSG/[id]/page.js
import fetchData from "../../../../../services/fetchData/page";

export default async function UserInfoPage({ params }) {
  let data = fetchData();
  let users = await data;
  const userId = params.id;
  let userInfo = users[userId - 1]; // because index starts from 0

  return (
    <div>
      <h1>{userInfo.id}</h1>
      <h1>{userInfo.username}</h1>
      <p>{userInfo.email}</p>
    </div>
  );
}

export async function generateStaticParams() {
  let data = fetchData();
  let users = await data;

  return users.map((user) => {
    id: user.id.toString() 
  });
}
