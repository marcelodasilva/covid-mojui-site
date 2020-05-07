import React from 'react'
import Head from 'next/head'
import Countup from 'react-countup'
import classnames from 'classnames'
import {subDays,formatRelative} from 'date-fns'
import {ptBR} from 'date-fns/locale'

import styles from './Home.module.css'
import { subHours } from 'date-fns/esm'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home | Combate COVID-19 Mojuí dos Campos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <section className={styles.content} >
          <h1>Dados sobre COVID-19 em Mojuí dos Campos</h1>
          <div className={styles.card__list} >
            <div className={classnames(styles.card, styles.monitorados)}>
              <h1>Monitorados</h1>
              <h4><Countup start={0} end={500} duration={2}  /></h4>
            </div>
            <div className={classnames(styles.card,styles.analise)}>
              <h1>Análise</h1>
              <h4><Countup start={0} end={500} duration={2}  /></h4>
            </div>
            <div className={classnames(styles.card,styles.descartados)}>
              <h1>Descartados</h1>
              <h4><Countup start={0} end={500} duration={2}  /></h4>
            </div>
            <div className={classnames(styles.card,styles.confirmados)}>
              <h1>Confirmados</h1>
              <h4><Countup start={0} end={500} duration={2}  /></h4>
            </div>
            <div className={classnames(styles.card,styles.obitos)}>
              <h1>Óbitos</h1>
              <h4><Countup start={0} end={500} duration={2}  /></h4>
            </div>

          </div>
  <p>Última Atualização: <span>{formatRelative(new Date(),new Date(),{locale:ptBR})}</span></p>
        </section>
      </div>
    </>
  )
}

export default Home;
