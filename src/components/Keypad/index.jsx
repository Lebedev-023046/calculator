import React from 'react'
import * as S from './styled'
import { KeypadButton } from '../KeypadButton'
import { btnVals } from '@/constants/btnVals'
import { useDispatch } from 'react-redux'
import { addValue } from '@/redux/actions'



export default function Keypad() {
  const dispatch = useDispatch()

  const processVals = ['=', 'CE', 'C']
  const handleKeypad = event => {
    if (event.target.parentNode.classList.contains('keypadContainer'))
      if (processVals.includes(event.target.textContent))  {
        console.log('function for processing expression')
      }else {
        dispatch(addValue(event.target.textContent))
      }
    }

    return (
      <S.SKeypadContainer className="keypadContainer" onClick={event => handleKeypad(event)}>
        { btnVals.map(btnValue =>
          <KeypadButton key={btnValue.id} value={btnValue.key}/>,
        )}
      </S.SKeypadContainer>
    )
}
