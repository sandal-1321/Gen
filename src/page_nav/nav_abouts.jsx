import "../static/nav_about.css"
import Abo_img from '../image/abo1.png'
import Abo_img1 from '../image/abo2.png'
import Abo_img2 from '../image/abo3.jpg'
import Abo_img3 from '../image/abo4.jpg'


const nav_abouts = () => {
    return (
        <div>
            <main>
                <div className='nav-aboutus' id='main-about'>
                    <h1>About Us</h1>
                    <p>Welcome to GenBug Solution ⚙️! We are dedicated to providing the best services to our customers.</p>
                    <p>Our mission is to deliver high-quality products that meet the needs of our clients.</p>
                </div>
                <div className='nav-about-section'>
                    <div className='nav-about-body'>
                        <h2>Our Mission</h2>
                    </div>
                    <div className='nav-about-body1'>
                        <div className='nav-about-body-box'>
                            <img src={Abo_img} width={350} height={200} alt='icon' />
                            <h3>🏢 Our Expertise</h3>
                            <p>We are a leading Information Technology company committed to transforming businesses through innovative digital solutions and reliable services. With a strong foundation in modern technologies and industry best practices,Our experienced and passionate team of developers, designers, and technology experts is dedicated to delivering cutting-edge solutions that are not only scalable but also customized to meet the unique needs of every client. We deliver end-to-end digital solutions, from apps to enterprise software, cloud, and e-commerce, driving real results.
                                We are driven by quality, innovation, and customer satisfaction, building long-term client partnerships through tailored strategies, transparency, and ongoing support.</p>
                        </div>
                    </div>
                    <div className='nav-about-body1'>
                        <div className='nav-about-body-box'>
                            <img src={Abo_img1} width={330} height={200} alt='icon' />
                            <h3>🎯 Our Mission & Vision</h3>
                            <p>Our mission is to empower businesses by delivering smart, efficient, and future-ready technology solutions that drive growth, innovation, and sustainability. We envision a future where organizations of all sizes can access world-class IT services that enhance productivity, competitiveness, and transformation. By embracing the latest advancements, we strive to be a trusted partner that not only provides solutions but also builds long-term relationships, fosters trust, and creates ecosystems where businesses thrive with confidence. Our vision is to make digital transformation accessible to all, ensuring that technology fuels progress, inspires innovation, and opens new opportunities for sustainable success.</p>
                        </div>
                    </div>
                    <div className='nav-about-body1'>
                        <div className='nav-about-body-box'>
                            <img src={Abo_img2} width={330} height={200} alt='icon' />
                            <h3>🤝 Client Testimonials</h3>
                            <p>Our clients’ voices reflect the trust and value we bring through our services. Their experiences show how our solutions drive growth, improve efficiency, and keep them ahead in the market. Each testimonial highlights our commitment to quality, innovation, and customer satisfaction, making their success our top priority. Their trust inspires us to keep raising the bar, building lasting relationships, and creating meaningful impact with every project we deliver. We believe that every client story is not just feedback but a testament to our dedication, motivating us to continually innovate and deliver exceptional results that exceed expectations.</p>
                        </div>
                    </div>
                    <div className='nav-about-body1'>
                        <div className='nav-about-body-box'>
                            <img src={Abo_img3} width={330} height={200} alt='icon' />
                            <h3>🚀 Our future goals</h3>
                            <p>Our future goals in Artificial Intelligence are centered on harnessing the
                                power of AI to create smarter, more adaptive, and data-driven solutions that transform
                                the way businesses operate. We aim to integrate AI into every layer of digital
                                innovation — from automating processes and enhancing decision-making to delivering
                                personalized customer experiences and predictive insights. By investing in research, innovation, and ethical AI practices, we strive to build intelligent systems that not only solve today’s challenges but also anticipate future opportunities. Our vision is to make AI accessible, scalable, and impactful for organizations of all sizes,
                                helping them achieve growth, efficiency, and sustainability in the digital era.</p>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default nav_abouts
