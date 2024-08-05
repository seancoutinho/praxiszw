import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home3/About"
import Banner from "@/components/sections/home3/Banner"
import Services from "@/components/sections/home3/Services"
import Features from "@/components/sections/home3/Features"
import Expertise from "@/components/sections/home3/Expertise"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <Banner />
                <Features />
                <About />
                <Services />
                {/* <Video /> */}
                {/* <Team /> */}
                {/* <Testimonial /> */}
                {/* <Clients /> */}
                {/* <Projects /> */}
                <Expertise />
            </Layout>
        </>
    )
}