import Image from "next/image"
 const Footer = () => {
    return (
        <div className="footer text-mute w-100">
          <div className="container text-center">
            <div className="row">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="list-unstyled"
        >
          Powered by{''}
          <span className="logo">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
            </div>
          </div>
      </div>

    )
    
}

export default Footer;