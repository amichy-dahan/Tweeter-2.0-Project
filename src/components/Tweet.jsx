import './Tweet.css'

function Tweet({props}) {
    return (
        <>
         <div className="container-post">

            <div className='details'>
               <p>{props.name}</p>
               <p>{props.date} </p>
            </div>
            <div className='thePostText'>
                {props.text}  
            </div>
                   
     
         </div>
        </>
    )
}
export default Tweet;