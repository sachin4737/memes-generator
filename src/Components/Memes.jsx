import React from 'react'


export default function Memes() {
    const [meme,setMeme] =React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages,setAllMemeImages] = React.useState([])

     React.useEffect(()=>{
         fetch("https://api.imgflip.com/get_memes")
         .then(res=> res.json())
         .then(data=>setAllMemeImages(data.data.memes))
     },[])


   function getImage(){
        const randomNumber = Math.floor(Math.random() * allMemeImages.length);
        const url = allMemeImages[randomNumber].url;
       
        console.log(url);
        setMeme(preMeme =>({
            ...preMeme,
            randomImage:url
        }))
   }

   function handleChange(event){
    
       setMeme(preMeme =>({
           ...preMeme,
           [event.target.name]:event.target.value
       }))
   }

  return (
    <div className='container'>
        <div className="input-box">
            <input
             type="text"
              placeholder='Top-Text'
              name="topText"
              value={meme.topText}
              onChange={handleChange}
              />

            <input
             type="text" 
             placeholder='Bottom-Text' 
             name="bottomText"
             value={meme.bottomText}
             onChange={handleChange}
             />

            <button
            onClick={getImage}
            >Get a new meme image</button>
        </div>
        <div className="bottom-form">
            <img src={meme.randomImage} alt='random' />
            <h2 className='meme-text top'>{meme.topText}</h2>
            <h2 className='meme-text bottom'>{meme.bottomText}</h2>
        </div>
    </div>
  )
}
