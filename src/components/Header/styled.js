import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 4rem;
  padding: 0px 1.5rem;
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 0.95);
`

export const Sdiv = styled.div`
  display: flex;
  align-items: center;
`

export const Snav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Sul = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
`

export const Sli = styled.li``

export const Sa = styled(Link)`
  display: block;
  margin: 0 1rem;
  cursor: pointer;
  color: white;
  position: relative;
  text-decoration: none;

  &:after {
    display: block;
    position: absolute;
    width: 0%;
    transition: 0.2s ease-out;
    content: '';
    bottom: -8%;
    left: 0;
    height: 3px;
    background-color: white;
  }
  &:hover&:after {
    width: 100%;
  }
`
