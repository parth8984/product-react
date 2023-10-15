function VideoCard(props){
    return(
        <>
        <div className='video-card'>
        <img className='videothumbnil'
        src= {props.thumbnailUrl}/>
       <h3>{props.title}</h3>
       <p  id="Auther">{props.likes} <span id="Date">| {props.views }</span></p>
       <div id="Description"> 
       <div>{props.channelName}</div>
        </div>
       </div>
      
     
        
      </>
      
    );
}

export default VideoCard;


