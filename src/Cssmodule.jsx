import React from 'react'
import styles from'./style.module.css'
import styled from 'styled-components'
export default function Cssmodule(props) {
  console.log("Hello from cssmodule");
  const ButtonHarsh=styled.button({
    fontSize:"1.6rem",
    color:"chocolate",
    backgroundColor:"aliceblue",
    padding:"1rem",
    border:"2px solid blue",
    margin:"1rem",
  })
  const ParagraphStyled=styled.p`
  font-size:2rem;
  font-weight:bold;
  color:blue;
  margin:1rem;
  `
  function hioandlebuttonclick(){
    alert('hello this is event clicked button ')
  }

  return (
    <div>
      <h1 className={styles.sample1}>Hello my name is harsh</h1>
      <h1 className={styles.sample2}>This is another name of harsh</h1>
      <ButtonHarsh onClick={props.click}>Watch now using styled components1</ButtonHarsh>
      <ButtonHarsh>Watch now using styled components1</ButtonHarsh>
     
      <ParagraphStyled>Hello this is created using styled components</ParagraphStyled>
    </div>
  )
}
