// src/app/fetch/CSR/[id]/page.js
"use client";
import useSWR from "swr";
// import React, {useState, useEffect } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function UserInfoPage({ params }) {
  const id = params.id;

  // ⁡⁣⁢⁡⁣⁢⁣Optimized way of fetching data:⁡

  const { data, error } = useSWR(`https://jsonplaceholder.typicode.com/users/${id}`, fetcher);

  if (error) return <h1>Error occurred: {error.message}</h1>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{data.id}</h1>
      <h1>{data.username}</h1>
      <p>{data.email}</p>
    </div>
  );
}

// // ⁡⁣⁢⁡⁣⁢⁣Normal way of fetching data:⁡

//   const [userInfo, setUserInfo] = useState(null);
//   useEffect(() => {
//       if (id) {
//           const getUserById = async () => {
//               let data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//               data = await data.json();
//               setUserInfo(data);
//           };
//           getUserById();
//       }
//   }, [id]);

//   if (!userInfo) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>{userInfo.id}</h1>
//       <h1>{userInfo.username}</h1>
//       <p>{userInfo.email}</p>
//     </div>
//   );

// }

export default UserInfoPage;