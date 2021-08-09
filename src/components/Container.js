import React, { useState } from "react";
import CreatedTodo from "./CreateTodo";
import TableContent from "./TableContent";

function Container() {

   const [db, setDb] = useState([]);
   const [dataToEdit, setDataToEdit] = useState(null);

   const createData  = (data) => {
      data.id = Date.now();
      setDb([...db, data]);
   };

   const updateData  = (data) => {
      let newData = db.map(( element ) => {
         return element.id === data.id ? data : element;
      });
      setDb(newData);
   };

   const deleteData  = (id) => {
      let isDelete = window.confirm("¿seguro que quieres eliminar?");
      if (isDelete) {
         let newData = db.filter(( element ) => element.id !== id );
         setDb(newData);
      };
   };
   
   return (
      <div className="container">
         <div className="row">
            <h1 className="text-center">JUEGOS OLIMPICOS</h1>
            <div className="row justify-content-center">
              <CreatedTodo db={db} createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
            </div>
            <div className="table mt-5">
               <TableContent setDataToEdit={setDataToEdit} data={db} deleteData={deleteData} />
            </div>
         </div>
      </div>
   );
};
export default Container;