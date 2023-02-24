import React from 'react'
import styles from './filmecard.module.css'
import foto from './semfoto.png'
export default function FilmeCard ({ data }) {



  if(data === null){
    return (<></>)
  }

  return (
    <div>
      <section className={styles.card}>
        <div className={styles.info}>
          <div>
            <img src={(data.Poster==="N/A")? foto:data.Poster} alt='poster' className={styles.poster} />
          </div>
          <div className={styles.infoText}>
            <h4>Título : {data.Title}</h4>
            <h4>Gênero : {data.Genre}</h4>
            <h4>Ano: {data.Year}</h4>
            <p><strong>Escrito por : </strong>{data.Writer}</p>
            <p><strong>Diretor : </strong>{data.Director}</p>
          </div>
        </div>
        <div className={styles.texts}>
          <p><strong>Trama: </strong>{data.Plot}</p>
          <p><strong>Atores : </strong>{data.Actors} </p>
          <p><strong>Idioma: </strong>{data.Language}</p>
        </div>
      </section>
    </div>
  )
}
