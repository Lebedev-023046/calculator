import React from 'react'
import { useSelector } from 'react-redux'

import * as S from './styled'

export default function Display() {
  const { currentValue  } = useSelector(state => state.appReducer)

  return (
    <div>
      <S.SDisplayContainer>
        <S.SKeyboardContainer>
          <S.SDisplayInputField>
            { currentValue }
          </S.SDisplayInputField>
        </S.SKeyboardContainer>
      </S.SDisplayContainer>
    </div>
  )
}
