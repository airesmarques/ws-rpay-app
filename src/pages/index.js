import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/WashStation-icon.png"
      width={150}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="WashStation"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="https://wslavapaga.washstation.xyz/api/payrequest?mc=L01-05">Continuar</Link> <br />
    </p>
    <script>
    
    
    </script>

  </Layout>
)

export default IndexPage
