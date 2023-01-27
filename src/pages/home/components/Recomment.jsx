import React from 'react'

const Recomment = () => {
  return (
    <div className="tw-relative">
      <img
        src="/images/recomment.jpg"
        className="object-cover brightness-50 w-full h-[80vh] "
      />
      <div className="tw-absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col gap-5">
          <div className="text-3xl font-grand text-secondary text-center ">
            feature campfire
          </div>
          <div className="text-5xl font-bold text-while text-center">
            find my new friends here !
          </div>
          <div className="text-xl font-serif text-while text-center">
            campfire is a feature that enables us to meet people from all around
            the world who share our passion in hiking and camping.
          </div>
          <div className="flex justify-center gap-3">
            <button className="tw-bg-secondary font-serif text-while font-bold text-lg  rounded-lg h-10 w-[200px] hover:first-letter:s">
              join now!
            </button>
            <button className="tw-bg-secondary font-serif text-while font-bold text-lg  rounded-lg h-10 w-[200px] hover:first-letter:s">
              create campfire
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recomment
