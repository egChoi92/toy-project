import { useState, useEffect } from "react";

export default function TopicImage({imgPath, alt}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imgPath;
    img.onload = () => setIsLoaded(true);
  }, [])
  return (<>
        {isLoaded &&     
        <img 
            src={imgPath} 
            alt={alt}
        />}
    </>
  )
    
}
