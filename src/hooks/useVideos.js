import {useState, useEffect} from 'react'
import youtube from  '../apis/youtube'

//in this custom hook everything that has to do with inputing and outputing video related operations is added. The input is the default string, the output is the list of videos and the search function
;
//does not need to be destructured to pass in 
const useVideos = (defaultSearchTerm) =>{
    const [videos,setVideos]=useState([])
    useEffect(()=>{
        // initial default search to populate
        search(defaultSearchTerm)
      
      },[defaultSearchTerm])

      const search = async (term) => {
        const response = await youtube.get('/search', {
          params: {
            q: term,
          },
        });
    
        // this.setState({
        //   videos: response.data.items,
        //   selectedVideo: response.data.items[0],
        // });
        // response with list of videos
        setVideos(response.data.items)
    
      };
    //   returning the outputs of video list and a function to change that list of videos,search
    //similar to useState you return it in an array or an object with a getter and a setter
    //object is more common in js community and arrays are more common in react convention
    //with a default amount videos are returned 
    //search is a function that allows you to update the state of the video
    return [videos,search]
}

export default useVideos