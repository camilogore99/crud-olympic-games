import React from 'react'

const CrudTableRow = ({ data, setDataToEdit, deleteData }) => {
   let { id, country, gold, silver, bronze, players } = data;
   return (
      <tr>
         <td>{country} </td>
         <td>{gold}</td>
         <td>{silver}</td>
         <td>{bronze}</td>
         <td>{players}</td>
         <td><button onClick={ () =>  deleteData(id) } className="btn btn-danger">delete</button></td>
         <td><button onClick={ () => setDataToEdit(data) } className="btn btn-warning">Update</button></td>
      </tr>
   );
};

export default CrudTableRow;
