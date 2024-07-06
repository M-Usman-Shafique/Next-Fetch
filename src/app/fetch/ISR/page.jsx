// src/app/fetch/SSG/page.js
import Link from "next/link";

const fetchData = async () => {
  let data = await fetch("https://jsonplaceholder.typicode.com/users", {next: {revalidate: 60}})
  return data.json();
};

async function UserPage() {
  let users = await fetchData();
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