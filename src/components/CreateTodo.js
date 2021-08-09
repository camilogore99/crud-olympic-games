import React, { useEffect, useState } from "react";


const initialForm = {
   id: null,
   country: '',
   gold: "",
   silver: "",
   bronze: "",
   players: ""
}

function CreatedTodo( { db, createData, updateData, dataToEdit, setDataToEdit } ) {

   const [form, setForm] = useState(initialForm);

   useEffect(() => {
      if (dataToEdit) {
         setForm(dataToEdit)
      }else {
         setForm(initialForm)
      }
      
   }, [dataToEdit])

   const handleChange = (event) => {
     setForm({...form , [event.target.name]: event.target.value })
   };
  
   const handleSubmit = (event) => {

      event.preventDefault();
      if (!form.country) {
         alert("conpleta los campos ");
         return;
      };
     
      if (form.id === null) {
         createData(form)
      }else{
         updateData(form);
      }
      handleReset();
   };
  
  const handleReset = () => {
     setForm(initialForm);
     setDataToEdit(null)
  };
  
  return (
    <div className="container">
        <div className="form d-flex justify-content-center">
            <form  onSubmit={handleSubmit} >
                <div className="Row justify-content-center">
                    <div className="row justify-content-center">
                        <div>
                            <label htmlFor="task">pais </label>
                        </div>
                        <div>
                            <input type="text" name="country" onChange={handleChange} value={form.country} />
                        </div>
                    </div>
                       <div className="col-4">
                          <div>
                             <label htmlFor="student" >Oro </label>
                          </div>
                          <div>
                             <input type="number" name="gold" onChange={handleChange} value={form.gold} />
                          </div>
                       </div>
                       <div className="col-4">
                          <div>
                             <label htmlFor="student" >Plata </label>
                          </div>
                          <div>
                             <input type="number" name="silver" onChange={handleChange} value={form.silver} />
                          </div>
                       </div>
                       <div className="col-4">
                          <div>
                             <label htmlFor="student" >Bronce </label>
                          </div>
                          <div>
                             <input type="number" name="bronze" onChange={handleChange} value={form.bronze} />
                          </div>
                       </div>
                    <div>
                        <div>
                            <label htmlFor="student" >Cantidad jugadres </label>
                        </div>
                        <div>
                            <input type="number" name="players" onChange={handleChange} value={form.players} />
                        </div>
                    </div>
                    <div className="row justify-content-center ">
                       <div className="col-6 mt-3">
                          <button type="submit" className="btn btn-primary">{dataToEdit ? "Actualizar" : "Crear"}</button> 
                       </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  );
}

export default CreatedTodo;