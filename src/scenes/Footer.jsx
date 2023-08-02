import SocialMediaIcons from "../components/SocialMediaIcons"

const Footer = () => {
  return (
    <footer className="h-64 bg-paladiumBlue pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-Bodini font-semibold text-2xl text-gold">
            ANSON HUNNELL
          </p>
          <p className="font-Franklin text-md text-gold">
            ©2023 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
