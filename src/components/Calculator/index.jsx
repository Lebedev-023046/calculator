import React from 'react'
import * as S from './styled'
import Display from '@components/Display'
import Keypad from '@components/Keypad'
import History from '../History'

export default function Calculator() {
    return (
      <div>
        <S.SCalculatorContainer>
          <S.SKeypadContainer>
            <Display />
            <Keypad />
          </S.SKeypadContainer>
          <History />
        </S.SCalculatorContainer>
      </div>
    )
}
