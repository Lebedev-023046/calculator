import * as S from './styled'
import React from 'react'

export default function index() {
    return (
        <S.SHeader>
          <S.Sdiv>Calculator App</S.Sdiv>
          <S.Snav>
            <S.Sul>
              <S.Sli><S.Sa>Home</S.Sa></S.Sli>
              <S.Sli><S.Sa>Settings</S.Sa></S.Sli>
            </S.Sul>
          </S.Snav>
        </S.SHeader>
    )
}
