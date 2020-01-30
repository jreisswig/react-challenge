import React from 'react'
import styled from 'styled-components/macro'

export default function Bookinfos({
  id,
  bookshelves,
  download_count,
  languages,
  media_type,
  subjects,
  title
}) {
  return (
    <>
      <Headline3>Buchinfos ändern:</Headline3>
      <Label htmlFor="title">Title</Label>
      <Input id="title" defaultValue={title}></Input>
      <Label htmlFor="id">Id</Label>
      <Input id="id" defaultValue={id}></Input>
      <Label htmlFor="bookshelves">Bookshelves</Label>
      <Input id="bookshelves" defaultValue={bookshelves}></Input>
      <Label htmlFor="download_count">Downloads</Label>
      <Input id="download_count" defaultValue={download_count}></Input>
      <Label htmlFor="languages">Languages</Label>
      <Input id="languages" defaultValue={languages}></Input>
      <Label htmlFor="media_type">Media Types</Label>
      <Input id="media_type" defaultValue={media_type}></Input>
      <Label htmlFor="subjects">Subjects</Label>
      <Input id="subjects" defaultValue={subjects}></Input>
    </>
  )
}

const Label = styled.label``
const Input = styled.input`
  background: #f3f7f6;
  border: none;
  padding: 9px;
  font-size: 1rem;
  border-radius: 5px;
  color: #7d7b7b;
`
const Headline3 = styled.h3`
  font-size: 1rem;
  font-weight: unset;
  margin: 0;
`
