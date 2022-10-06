import React from 'react'
import * as S from './styled'
import { KeypadButton } from '../KeypadButton'
import { btnVals } from '@/constants/btnVals'

export default function Keypad() {
    return (
      <S.SKeypadContainer>
        { btnVals.map(btnValue =>
          <KeypadButton key={btnValue.id} value={btnValue.key}/>,
        )}
      </S.SKeypadContainer>
    )
}
