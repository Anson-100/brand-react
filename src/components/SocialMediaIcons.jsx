import linkedinImage from "../assets/linkedin.png"
import twitterImage from "../assets/twitter.png"
import instagramImage from "../assets/instagram.png"
import facebookImage from "../assets/facebook.png"

import linkedinLight from "../assets/linkedinLight.png"
import twitterLight from "../assets/twitterLight.png"
import instagramLight from "../assets/instagramLight.png"
import facebookLight from "../assets/facebookLight.png"

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={linkedinLight} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={twitterLight} className="max-w-[32px]" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={facebookLight} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="linkedin-link"
          src={instagramLight}
          className="max-w-[32px]"
        />
      </a>
    </div>
  )
}

export default SocialMediaIcons
