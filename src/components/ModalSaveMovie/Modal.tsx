import React from 'react'
import './modal.scss'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'


const Modal = () => {
  const dispatch = useDispatch();
  const {active} = useTypedSelector(state => state.active)

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => dispatch({type:"SEARCH_ACTION", payload: !active})}>
    
      <div className={active ?'modal__content active' : "modal__content"} onClick={e => e.stopPropagation()}>
        fsd
      </div>
    </div>
  )
}

export default Modal