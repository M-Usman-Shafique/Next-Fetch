// src/app/fetch/SSG/[id]/page.js
import fetchData from '../../../../../services/fetchData/page'

export default async function UserInfoPage({ params }) {
  let users = await fetchData();
  const id = params.id;
  let userInfo = users[id - 1]  // because index starts from 0

  return (
    <div>
    <h1>{userInfo.firstName} {userInfo.lastName}</h1>
    <p>{userInfo.email}</p>
  </div>
  );
};

export async function generateStaticParams() {
  let users = await fetchData();

  return users.map((user) => {
    id: user.id.toString()
  })
}