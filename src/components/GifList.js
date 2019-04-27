import React from 'react'

function renderGifs(gifs){
    return gifs.map(gif => {
      return <li>
      <img key={gif.id} src={gif.images.original.url}></img>
      </li>
    })
}

function GifList(props){
  return(<ul>
    {renderGifs(props.gifs)}
    </ul>
  )
}

export default GifList
