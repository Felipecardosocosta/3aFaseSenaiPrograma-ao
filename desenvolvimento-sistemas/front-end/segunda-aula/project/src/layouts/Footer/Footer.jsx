import React from 'react'

import style from './Footer.module.css'

 export const Footer = ({autor}) => {
  return (
    <footer className={style.footer}>

    <p className={style.autor}> Desenvolvido por {autor}</p>
    </footer>
  )
}

