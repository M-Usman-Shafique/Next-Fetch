// src/app/fetch/CSR/page.js
"use client";
import Link from "next/link";
import useSWR from "swr";
// import React, { useState, useEffect } from 'react'

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function UserPage() {
    
  // ⁡⁣⁢⁣Optimized way of fetching data using SWR:⁡

  const { data, error } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);

  if (error) return <h1>Error occured</h1>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <div>
<ul>
  {data.map((user) => (
      <Link href={`/fetch/CSR/${user.id}`} key={user.id} style={{color: 'white'}}>
        <div>{user.username}</div>
      </Link>
    ))}
</ul>
</div>
);
}

  // ⁡⁣⁢⁡⁣⁢⁣Normal way of fetching data:⁡

  // const [users, setUsers] = useState([])
  // useEffect(() => {
  //     const fetchUsers = async () => {
  //         const data = await fetch("https://jsonplaceholder.typicode.com/users")
  //         setUsers(await data.json())
  //     }
  //     fetchUsers();
  // }, [])

  // return (
  //   <div>
  //     <ul>
  //           {users.map((user) => (
  //               <Link href={`/fetch/CSR/${user.id}`} key={user.id} style={{color: 'white'}}>
  //                   <div>
  //                   {user.username}
  //                   </div>
  //               </Link>
  //           ))}
  //       </ul>
  //       </div>
  //         );
  //       }

export default UserPage;
