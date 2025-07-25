import React, {useState} from 'react'

const Comments = ({reviews , OpenIdx, setOpenIdx , idx}) => {

   const {reviewerName, rating , comment} = reviews;

   const [Open, setOpen] = useState(false)

   const showComment = (idx) => {
     setOpenIdx(idx)
     setOpen(!Open);
   }



  return (
    <div>
      <div className="w-3/4 m-auto flex items-center justify-between px-4 py-4 bg-slate-500 hover:bg-slate-600 rounded-m mt-4 text-2xl">
         <h2>{reviewerName}</h2>
         {
            Open == false ?
           <button onClick={()=> showComment(idx)}>
           <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M12 15.6315L20.9679 10.8838L20.0321 9.11619L12 13.3685L3.96788 9.11619L3.0321 10.8838L12 15.6315Z"></path></svg>
           </button>:
            <button onClick={()=> showComment(idx)}>
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M12 8.36853L20.9679 13.1162L20.0321 14.8838L12 10.6315L3.96788 14.8838L3.0321 13.1162L12 8.36853Z"></path></svg>
          </button>
         }
        </div>
        {
            OpenIdx == idx  && Open == true ? <div className={"w-1/2 m-auto flex items-center justify-between px-4 py-4 bg-gray-600 rounded-m mt-1 text-2xl"}>
            <h3>{comment}</h3>
            <h3>{rating}⭐</h3>
            </div> : null
        }

    </div>
  )
}

export default Comments
