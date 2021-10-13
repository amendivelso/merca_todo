import React, { createContext } from 'react';
import { useRequestData } from './useCustome';


const ApiContext = createContext();

const ApiProvider = (props) => {
  const baseUrl = 'https://desolate-gorge-58133.herokuapp.com/api/products';
  const { data, setData, requestPost, select, setSelect, setDataId, dataId, requestGetbyId, requestPUT, requestDelete } = useRequestData(baseUrl)



  return (
    <ApiContext.Provider value={{
      data,
      setData,
      select,
      setSelect,
      requestPost,
      setDataId,
      dataId,
      requestGetbyId,
      requestPUT,
      requestDelete

    }}>

      {props.children}
    </ApiContext.Provider>
  )
}

export { ApiContext, ApiProvider }
