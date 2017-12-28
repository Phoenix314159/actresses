import React from 'react'

export default ({data, openPopUp}) => (
  <tbody>
  {data.map((row, i) => { //iterate over json object from server
    const {year, actress, movie} = row  //pull off properties to display on every iteration
    return (
      <tr key={i} onClick={() => openPopUp(i)}>
        <td>{year}</td>
        <td>{actress}</td>
        <td>{movie}</td>
      </tr>
    )
  })}
  </tbody>
)


