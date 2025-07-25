import React from 'react'

const SingleProductShimmer = () => {
  return (
    <div>
      <div className="flex w-2/4 h-96 m-auto flex-col gap-4">
  <div className="flex items-center gap-4">
    <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
    <div className="flex flex-col gap-4">
      <div className="skeleton h-4 w-20"></div>
      <div className="skeleton h-4 w-28"></div>
    </div>
  </div>
  <div className="skeleton h-32 w-full"></div>
</div>
    </div>
  )
}

export default SingleProductShimmer
