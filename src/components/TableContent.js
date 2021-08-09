import React from "react";
import CrudTableRow from "./CrudTableRow";

function TableContent( { data, setDataToEdit, deleteData } ) {
    
   return (
      <div className="App">
         <table className="table table-dark">
            <thead>
               <tr>
                  <th scope="col">Pais</th>
                  <th scope="col">Oro</th>
                  <th scope="col">Plata</th>
                  <th scope="col">Bronce</th>
                  <th scope="col">#jugadores</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Edit</th>
               </tr>
            </thead>
            <tbody>
                  {data.length === 0 ? <tr><td colSpan="7">Sin datos</td></tr> : data.map( (dataI) => <CrudTableRow data={dataI} key={dataI.id} setDataToEdit={setDataToEdit} deleteData={deleteData}  /> )}
            </tbody>
         </table>
      </div>
   );
}

export default TableContent;


