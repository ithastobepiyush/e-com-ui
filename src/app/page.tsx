import Image from "next/image"

const Homepage = () => {
  return (
    <div className=''>Homepage
    <div className="relative aspect-[3/1] mb-12">
      <Image src="/featured.png" alt="featured" fill />
    </div>
    </div>
  )
}

export default Homepage