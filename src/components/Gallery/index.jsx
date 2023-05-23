import styles from "./styles.module.scss";
import { Tags } from "../Tags";
import React from 'react'

export function Gallery() {
  return (
    <section>
        <h2>Navegue pela galeria</h2>
        <Tags />
        <ul></ul>
    </section>
  )
}