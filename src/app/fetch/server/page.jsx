import Link from "next/link";
import React from "react";
import Gender from "./gender";

const fetchData = async () => {
  let data = await fetch("https://dummyjson.com/users");
  data = await data.json();
  return data.users;
};

async function UserPage() {
  let users = await fetchData();
  return (
    <div>
      <ul className="users">
        {users.map((user) => (
          <div className="user">
            <Link href={`/fetch/server/${user.id}`} key={user.id} style={{color: 'white'}}>
              <div>{user.firstName}</div>
            </Link>
            <Gender gender={user.gender}/>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default UserPage;
