// import axios from "axios";
// import { React, useEffect, useState } from "react";

// const ListItem = () => {
//   const [data, setData] = useState([]);

//   const header = { "Access-Control-Allow-origin": "'" };

//   const url = "https://jsonplaceholder.typicode.com/todos";
//   //const url = "http://localhost:3000/todos";
//   const getData = () => {
//     axios.get(url).then((res) => {
//       console.log(res.data);
//       setData(res.data);
//     });
//   };

//   const handleDelete = (id) => {
//     axios.delete(`url/${id}`).then((res) => {
//       getData();
//     });
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   //getData();
//   const editbtn = () => {};

//   return (
//     <div>
//       {data.map((eachData) => {
//         return (
//           <>
//             <li>
//               <label htmlFor="">
//                 <input type="checkbox" id="" />
//                 {eachData.title}
//               </label>
//               <button onClick={editbtn()}>Edit</button>

//               <button id="delete" onClick={handleDelete(eachData.id)}>
//                 Delete
//               </button>
//             </li>
//           </>
//         );
//       })}

//       {/* <div className="row">
//         <label htmlFor="all">
//           <input type="checkbox" name="all" id="all" onClick={deleteAll()} />
//           ALL
//         </label>
//         <p>You have 0 task</p>
//         <button id="delete" onClick={handleDelete()}>
//           Delete
//         </button>
//       </div> */}
//     </div>
//   );
// };

// export default ListItem;
