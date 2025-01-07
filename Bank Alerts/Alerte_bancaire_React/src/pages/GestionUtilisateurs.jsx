import React from 'react'
import CustomPaginationActionsTable from '../components/tables/UtilisateursTable'
import  { useContextState } from '../contexts/ContextProvider'

const GestionUtilisateurs = () => {

  const {isModalOpen, setModalOpen} = useContextState()

  const blur = isModalOpen ? 'blur-sm' : ''
  return (
    <div className={`${blur} grid justify-items-end m-20`}>
          <CustomPaginationActionsTable/>
    </div>
  )

}

export default GestionUtilisateurs