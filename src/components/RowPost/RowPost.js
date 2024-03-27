import React, { useState, useEffect,useContext } from 'react'
import YouTube from 'react-youtube';
import './RowPost.css'
import axios from '../axios'
import { imageUrl, API_KEY } from '../../Constants/Constant'
import app, {auth, db} from '../../Firebase/config'
import { LikedMovieProvider } from '../../context/LikedMovieContext';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setDoc,doc,arrayUnion } from 'firebase/firestore';




function RowPost(props) {
  const [urlId, setUrlId] = useState('')
  const [rowpost, setrowPost] = useState([])
  const [liked, setLiked] = useState([]);
  const [favMovie,setFavMovie] = useState([])
  const [removelike,setRemoveLike] = useState([])
  let email;
  let userId;


  useEffect(()=>{

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        userId = user.uid;
        console.log("uuid"+userId)
        console.log(user.email)
        email=user.email;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  },[])






  const handleLike = (obj) => {
    console.log("liked moview"+obj)
    if (liked.includes(obj.id)) {
      setLiked(liked.filter(id => id !== obj.id));
    } else {
      setLiked([...liked, obj.id]);
      setFavMovie([...favMovie,obj])
      
      console.log("mmm"+favMovie)
      



    }
  };
  

  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data.results)
      setrowPost(response.data.results)
    }).catch((err) => alert(err))
  }, [])


  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      if (response.data.results !== 0) {
        setUrlId(response.data.results[0])
      } else {
        console.log("array empty")
      }
      console.log(response.data)
    })
  }

  return (
    <div className='row'>
      <h1>{props.title}</h1>
      <div className="posters">


          {

            rowpost.map((obj) =>
              <div className='container'>

                <img  className={props.isSmall ? "smallPoster" : "poster"} src={`${imageUrl + obj.backdrop_path}`} alt="" />
                <div className="overlay">
                  <div onClick={() => handleMovie(obj.id)} className="text">{props.isSmall ? obj.title : obj.name}</div>
                  <svg
                    className={`like-button ${liked.includes(obj.id) ? 'liked' : ''}`}

                    onClick={() =>                  
                      handleMovie(obj.id)
                       }
                    aria-label="Like"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 203 103">
                    <path
                      className="heart-icon"
                      d=""
                    />
                  </svg>
                </div>
              </div>

            )




          }


          

        </div>


      
      {urlId && <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPost
//heart button
// d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"