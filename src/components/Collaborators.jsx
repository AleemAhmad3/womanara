"use client"
import "./Collaborators.css"

const images = [
  "/radiation.jpeg",
  "/hi.jpeg",
  "/united.jpeg",
  "/circle.jpeg",
  "/varian.jpeg",
  "/elekta.jpeg",
  "/hologic.jpeg",
  "/siemens.jpeg",
  "/sit.jpeg",
  "/sysmex.jpeg",
  "/xoft.jpeg",
  "/murrieta.jpeg",
  "/zemalt-logo.webp",
  "/carteroil-nobg.png",
  "/moawin-nobg.png",
]

const Collaborators = () => {
  const duplicatedImages = [...images, ...images]

  return (
    <div className="collaborators" >
      <h2>Collaborators</h2>
      <div className="marquee-container">
        <div className="marquee-content">
          {duplicatedImages.map((image, index) => (
            <div key={index} className="marquee-item">
              <img src={image || "/placeholder.svg"} alt={`Collaborator ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collaborators
