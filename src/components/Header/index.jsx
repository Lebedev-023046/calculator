import * as S from './styled'
import React from 'react'

export default function index() {
    return (
      <React.Fragment>
        <S.SHeader>
          <S.Sdiv>Calculator App</S.Sdiv>
          <S.Snav>
            <S.Sul>
              <S.Sli><S.Sa to="/">Home</S.Sa></S.Sli>
              <S.Sli><S.Sa to="/settings">Settings</S.Sa></S.Sli>
            </S.Sul>
          </S.Snav>
        </S.SHeader>
      </React.Fragment>
    )
}
