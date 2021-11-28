import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function Index() {

    const [empleados,setEmpleados]=useState([])

    useEffect(()=>{
        obtenerEmpleados()
    },[])

    const obtenerEmpleados=async()=>{
        const id=sessionStorage.getItem('idusuario')
        const token=sessionStorage.getItem('token')
        const respuesta=await axios.get('http://localhost:4000/empleados/listarempleadosjefe/'+id,
        {
            headers:{'autorizacion':token}
        })
        setEmpleados(respuesta.data)

    }

    return (
        <div>
            <header className='py-2 bg-primary text-white'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1><i className='fas fa-pencil-alt'></i>Empleados</h1>
                        </div>
                    </div>
                </div>
            </header> 
        
            {/* // SEARCH */}

            <nav className='navbar py-4'>
                <div className="container">
                    <div className="col-md-3">
                        <Link to='#' className="btn btn-primary btn-block" data-toggle='modal'
                        data-target='#addEmpleado'> <i className='fas fa-plus'></i> ADD Empleado
                        </Link> 
                    </div>
                    <div className="col md-6 ml-auto">
                        <div className="input-group">
                            <input className='form-control mr-sm-2' type='search'
                            placeholder='Buscar...' aria-label='Search'/> 
                        </div>
                    </div>
                </div>    
            </nav>

            {/* // MOSTRAR EMPLEADO */}

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Empleados de {sessionStorage.getItem('nombre')}</h4> 
                                </div> 
                                <table className='table table-responsive-lg table-striped'>
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th>#</th>
                                            <th>Nombres</th>
                                            <th>Apellidos</th>
                                            <th>Identificación</th>
                                            <th>Tipo de Contrato</th>
                                            <th>Opciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            empleados.map((empleado,i)=>(
                                                <tr key={empleado._id}>
                                                    <td>{i+1}</td>
                                                    <td>{empleado.nombre}</td>
                                                    <td>{empleado.apellidos}</td>
                                                    <td>{empleado.identificacion}</td>
                                                    <td>{empleado.tcontrato}</td>
                                                    <td>
                                                        <button className='btn btn-warning mr-1'>Eliminar</button>
                                                        <button className='btn btn-danger mr-1'>Editar</button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
