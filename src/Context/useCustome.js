import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
function useRequestData(baseUrl) {
  const [data, setData] = useState([]);
  const [dataView, setDataView] = useState([]);
  //GET
  const requestGet = async () => {
    try {
      await axios.get(baseUrl)
        .then(response => {
          setData(response.data);
          setDataView(response.data);
        })
    }
    catch (err) {
      console.log(err);
    }

  }

  //POST
  const requestPost = async () => {
    await axios.post(baseUrl, select)
      .then(response => {
        setData(data.concat(response.data))

      }).catch(e => {
        console.log(e);
      })
  }

  const [select, setSelect] = useState({
    product_name: '',
    provider: '',
    existing_units: '',
    date_entry: '',
    description: '',
    category: '',

  })


  const [dataId, setDataId] = useState({
    product_name: '',
    provider: '',
    existing_units: '',
    date_entry: '',
    description: '',
    category: '',

  })
  // const { id } = useParams();
  const requestGetbyId = async (id) => {
    await axios.get(baseUrl + '/' + id)
      .then(response => {
        setDataId(response.data)
      })
  }


  const requestPUT = async (id) => {
    await axios.put(baseUrl + '/' + id, dataId)
      .then(response => {
        var newData = data;
        newData.map(pupdate => {
          if (dataId.id === pupdate.id) {
            pupdate.product_name = dataId.product_name
            pupdate.provider = dataId.provider
            pupdate.existing_units = dataId.existing_units
            pupdate.date_entry = dataId.date_entry
            pupdate.description = dataId.description
            pupdate.category = dataId.category

          }
        })
        setData(newData)
      })
  }


  const requestDelete = async (id) => {
    await axios.delete(baseUrl + "/" + id)
      .then(response => {
        setData(response.data.filter(product => product.id !== id));
      })

  }

  useEffect(async () => {
    await requestGet();
  }, [dataId])



  return {

    data,
    setData,
    requestPost,
    setSelect,
    select,
    dataId,
    setDataId,
    requestGetbyId,
    requestPUT,
    requestDelete,
    setDataView,
    dataView
  }

}
export { useRequestData }






// //Status for show data
// const [select, setSelect] = useState({
//   product_name: '',
//   provider: '',
//   date_entry: '',
//   description: '',

// })
// //sync typing with fields
// const handleChange = (e) => {

//   const { name, value } = e.target;
//   setSelect({ ...select, [name]: value })
// }


// //request POST
// const resquestPost = async () => {
//   await axios.post(baseUrl, select)
//     .then(response => {
//       setData(data.concat(response.data))
//     }

//     )
// }