import { useState } from 'react'
import { Dashboard } from './components/dashboard'
import { Header } from './components/Header'
import { NewTransactionModal } from './components/NewTransactionModal'

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      ></NewTransactionModal>
    </>
  )
}
