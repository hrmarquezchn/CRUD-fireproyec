import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {collection, getDocs, getdoc, deleteDoc} from 'firebase/firestore'
import {db} from '../firebaseConfig/firebase'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)


const Show = () => {
// configurar los ganchos
const [products, setProducts] = useState([])

//referencia la DB firestore
const  productsCollection = collection(db, "products")

//funsion para mostrar todos los documentos
const getProducts = async () => {
    const data = getDocs(productsCollection)
    //console.log(data.docs)
 setProducts(
    data.docs.map( (doc) => ( {...doc.data(), id: doc.id}))
    )
    console.log(products)
}

//funsion para eliminar los documentos
const deleteProduct = async (id) => {
  const protuctDoc = doc(db, "products", id)
  await deleteDoc(productDoc)
  getProducts()
}


//funsion para confirmacion de SwitAlert


//Usar useEffect
useEffect(() => {
    getProducts()
}, [])


  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col'>
        <div className="d-grid gap-2">
          <link to="/create" clasNeme='btn btn-secundary mt-2 mb-2'>Create</link>
        </div>

        <table className='table table-dark table-hover'>
          <thead>
            <tr>
              <th>Description</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            { products.map( (product) => (
             <tr key={product.id}>
              <td>{product.description}</td>
              <td>{product.stock}</td>

              <td>
                  <link to={`/edit/${product.id}`} className="btn btn-light"><i className="fa-solid fa-pecil"></i></link>
                  <button onClick={ () =>{ deleteProduct(product.id) }} className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
              </td>
             </tr> 
            )) }

          </tbody>



        </table>

        </div>
      </div>
    </div>
    





    </>
  )
}

export default Show