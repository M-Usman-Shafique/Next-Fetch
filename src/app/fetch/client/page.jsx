"use client";
import Link from "next/link";
import useSWR from "swr";
// import React, { useState, useEffect } from 'react'

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function UserPage() {
    
  // ⁡⁣⁢⁣Optimized way of fetching data:⁡

  const { data, error } = useSWR("https://dummyjson.com/users", fetcher);

  if (error) return <h1>Error occured</h1>;
  if (!data) return <h1>Loading...</h1>;

  // ⁡⁣⁢⁣Normal way of fetching data:⁡

  // const [users, setUsers] = useState([])
  // useEffect(() => {
  //     const fetchUsers = async () => {
  //         const data = await fetch("https://dummyjson.com/users")
  //         setUsers(await data.json())
  //     }
  //     fetchUsers();
  // }, [])

  return (
    <div>
      {/* <ul>
            {users && users.users && users.users.map((user) => (
                <Link href={`/fetch/users/${user.id}`} key={user.id}>
                    <div>
                    {user.firstName}
                    </div>
                </Link>
            ))}
        </ul> */}

      <ul>
        {data.users &&
          data.users.map((user) => (
            <Link href={`/fetch/client/${user.id}`} key={user.id} style={{color: 'white'}}>
              <div>{user.firstName}</div>
            </Link>
          ))}
      </ul>
    </div>
  );
}

export default UserPage;
