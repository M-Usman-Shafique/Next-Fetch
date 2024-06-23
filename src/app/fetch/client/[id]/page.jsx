"use client";
import useSWR from "swr";
// import { usePathname } from "next/navigation";
// import React, {useState, useEffect } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function UserInfoPage({ params }) {
  // const pathname = usePathname();
  // const id = pathname.split("/").pop();   // uncomment this & remove params stuff.
  const id = params.id;

  // ⁡⁣⁢⁡⁣⁢⁣Optimized way of fetching data:⁡

  const { data, error } = useSWR(`https://dummyjson.com/users/${id}`, fetcher);

  if (error) return <h1>Error occurred: {error.message}</h1>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{data.firstName}</h1>
      <p>{data.email}</p>
    </div>
  );

// ⁡⁣⁢⁡⁣⁢⁣Normal way of fetching data:⁡

  // const [userInfo, setUserInfo] = useState(null);
  // useEffect(() => {
  //     if (id) {
  //         const getUserById = async () => {
  //             let data = await fetch(`https://dummyjson.com/users/${id}`);
  //             data = await data.json();
  //             setUserInfo(data);
  //         };
  //         getUserById();
  //     }
  // }, [id]);

  // if (!userInfo) return <div>Loading...</div>;

  // return (
  //   <div>
  //     <h1>{userInfo.firstName}</h1>
  //     <p>{userInfo.email}</p>
  //   </div>
  // );

}

export default UserInfoPage;






// "use client";
// import { useRouter } from "next/navigation";
// import React, { useState, useEffect } from "react";

// function UserInfoPage() {
//   const [userInfo, setUserInfo] = useState();
//   const router = useRouter();

//   useEffect(() => {
//     const id = router.query.id;
//     async function getUserById(id) {
//       const data = await fetch(`https://dummyjson.com/users/${id}`);
//       setUserInfo(await data.json());
//     };
//     getUserById(id);
//   }, [router.query.id]);

//   return (
//     <div>
//       <h1>{userInfo?.firstName}</h1>
//       <p>{userInfo?.email}</p>
//     </div>
//   );
// }

// export default UserInfoPage;
