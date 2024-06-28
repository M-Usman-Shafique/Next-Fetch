// src/app/fetch/SSG/page.js
import Link from "next/link";
import React from "react";
import fetchData from '../../../../services/fetchData/page'


async function UserPage() {
  let data = fetchData();
  let users = await data;
  return (
    <div>
      <ul className="users">
        {users.map((user) => (
          <div className="user">
            <Link href={`/fetch/SSG/${user.id}`} key={user.id} style={{color: 'white'}}>
              <div>{user.username}</div>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default UserPage;