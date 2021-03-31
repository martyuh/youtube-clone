import React,{useState, useEffect} from 'react';
import SearchBar from './SearchBar';
// import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos'



const App = () => {
  // state = { videos: [], selectedVideo: null };
  
  const [selectedVideo, setSelectedVideos]=useState(null)
  // call your custom hook with a default search term
  //destructure the returned output from the custom hook 
  const [videos, search] = useVideos('buildings')

  // componentDidMount() {
  //   this.onTermSubmit('buildings');
  // }

  //create a useEffect that will run whenever the list of videos is changed via a search. When that occurs the selectedVideos will be reassigned to the first index of that new list
  useEffect(()=>{
  //object for the selected video 
  setSelectedVideos(videos[0])
  },[videos])

    
// async call to youtube api using params object to populate body/url for request instead of a query 


  // const onVideoSelect = (video) => {
  //   setSelectedVideos(video);
  // };

  
    return (
      <div className="ui container">
      {/* passes the search function from the custom hook */}
        <SearchBar onFormSubmit={search} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                // onVideoSelect={(video)=>setSelectedVideos(video)}
                //if it's a single parameter shared with a single line of code you can refactor the function being passed to what is below
                onVideoSelect={setSelectedVideos}
                videos={videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default App;
