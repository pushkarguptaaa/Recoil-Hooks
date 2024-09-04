import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue, useRecoilValueLoadable } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, todosAtom, totalSelector } from './atoms'

function App() {
    return <RecoilRoot>
      <MainApp />
      <Todo id = {1}/>
      <Todo id = {2}/>
    </RecoilRoot>  
  }


  const MainApp = (() => {
    const networkCount = useRecoilValue(networkAtom)
    const jobsCount = useRecoilValue(jobsAtom)
    const messagingCount = useRecoilValue(messagingAtom)
    const notificationsCount = useRecoilValue(notificationsAtom) 
    const totalCount = useRecoilValue(totalSelector)

    return (
      <>
        <button>Home</button>
  
        <button>My Network ({networkCount >= 100 ? "99+" : networkCount})</button>
        <button>Jobs ({jobsCount})</button>
        <button>Messaging ({messagingCount})</button>
        <button>Notifications ({notificationsCount})</button>
  
        <button>Me ({totalCount})</button>
  
      </>
    )
  })

  const Todo = (({id}) => {
    const currentTodo = useRecoilValueLoadable(todosAtom(id))

    if(currentTodo.state == "loading")
      return <div>
        ...loading
      </div>
    else if(currentTodo.state == "hasValue")
      return (
        <div>
          {currentTodo.contents.title} <br></br>
          {currentTodo.contents.description}
        </div>
      )
    })
    


export default App
