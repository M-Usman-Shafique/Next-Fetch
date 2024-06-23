import Link from "next/link";
import React from "react";
import CheckName from "./checkName";

const fetchData = async () => {
  let data = await fetch("https://jsonplaceholder.typicode.com/users");
  return data.json();
};

async function UserPage() {
  let data = fetchData();
  let users = await data;
  return (
    <div>
      <ul className="users">
        {users.map((user) => (
          <div className="user">
            <Link href={`/fetch/SSR/${user.id}`} key={user.id} style={{color: 'white'}}>
              <div>{user.username}</div>
            </Link>
            <CheckName name={user.name}/>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default UserPage;
