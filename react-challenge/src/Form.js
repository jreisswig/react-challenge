import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import axios from 'axios'
import Bookinfos from './Bookinfos'

export default function App() {
  const [genre, setGenre] = useState([])
  const [books, setBooks] = useState([])
  const [selectedGenre, setSelectedGenre] = useState('')
  const [fiction, setFiction] = useState([])
  const [science, setScience] = useState([])
  const [selectedTitle, setSelectedTitle] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3000/subjects')
      .then(resp => {
        setGenre(resp.data)
      })

      .catch(error => {
        console.log(error)
      })

    axios
      .get('http://localhost:3000/books')
      .then(resp => {
        setBooks(resp.data)
      })

      .catch(error => {
        console.log(error)
      })

    axios
      .get('http://localhost:3000/books?subjects_like=Fiction')
      .then(resp => {
        setFiction(resp.data)
      })

      .catch(error => {
        console.log(error)
      })

    axios
      .get('http://localhost:3000/books?subjects_like=Science')
      .then(resp => {
        setScience(resp.data)
      })

      .catch(error => {
        console.log(error)
      })
  }, [])

  function getChange(id) {
    const el = document.getElementById(id)
    const input = el.value
    id === 'genre' ? setSelectedGenre(input) : setSelectedTitle(input)
  }

  return (
    <StyledForm method="post" action="" id="">
      <Headline3>Wähle ein Genre:</Headline3>
      <Label htmlFor="genre"></Label>
      <select
        id="genre"
        name="genre"
        onChange={event => getChange('genre')}
        placeholder="Wähle ein Genre *"
      >
        {genre.map(genre => (
          <option value={genre}>{genre} </option>
        ))}
      </select>

      {selectedGenre !== '' && (
        <select
          id="title"
          name="booktitle"
          onChange={event => getChange('title')}
          placeholder="Wähle ein Buch *"
        >
          {selectedGenre === 'Fiction'
            ? fiction.map(fiction => (
                <option defaultValue={fiction.title}>{fiction.title}</option>
              ))
            : science.map(science => (
                <option defaultValue={science.title}>{science.title}</option>
              ))}
        </select>
      )}

      {selectedTitle !== '' && (
        <>
          {books
            .filter(book => book.title === selectedTitle)
            .map(book => (
              <Bookinfos {...book} />
            ))}
        </>
      )}
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: grid;
  gap: 10px;
  width: 300px;
  margin-top: 100px;
`
const Label = styled.label``
const Headline3 = styled.h3`
  font-size: 1rem;
  font-weight: unset;
  margin: 0;
`
