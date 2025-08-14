import './Tweet.css'

function Tweet({props}) {
    return (
        <>
         <div className="container-post">

            <div className='details'>
               <p>{props.userName}</p>
               <p>{props.date} </p>
            </div>
            <div className='thePostText'>
                {props.content}  
            </div>
                   
     
         </div>
        </>
    )
}
export default Tweet;