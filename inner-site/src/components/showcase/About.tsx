import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import santa1 from '../../assets/pictures/santa1.jpg';
import santa2 from '../../assets/pictures/santa2.jpg';
import menow2025 from '../../assets/pictures/menow2025.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Youssef Gebaly</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a software engineer currently working at Oracle!
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:youssef.gebaly@oracle.com">
                        youssef.gebaly@oracle.com
                    </a>{' '}
                    or{' '}
                    <a href="mailto:youssefgebaly321@gmail.com">
                        youssefgebaly321@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    From a young age, I had a curiosity about how things worked, a
                    curiosity that was permanently cemented when Santa brought me a
                    Sonic the Hedgehog game on one fateful Christmas morning. As you can see from the picture, I'm giving Santa the kind of stare that says "this better be good", while he's looking back at me with a
                    knowing smile, clearly proud of what he's just unleashed. That
                    gift awakened something in me, an absolute obsession with
                    computers and gaming. I spent countless hours trying to figure
                    out how Sonic could run that fast and collect that many rings,
                    which eventually led me to wonder how the whole thing was
                    programmed in the first place. In 2006, my family and I
                    moved countries from Egypt to the UAE, where I attended elementary, middle-school, and high-school, still chasing
                    that same curiosity that started with a Sonic the Hedgehog CD. That chase took me to Madrid, Spain, where I studied Computer Science & AI at IE University, officially making Santa responsible for my entire career trajectory.
                </p>
                <br />
                <div className="captioned-image">
                    <div style={styles.sideBySideImages}>
                        <img src={santa2} style={styles.sideBySideImage} alt="Santa moment 2" />
                        <img src={santa1} style={styles.sideBySideImage} alt="Santa moment 1" />
                    </div>
                    <p>
                        <sub>
                            <b>Figure 1:</b> This is what "planting the seed" looks like in real time.
                        </sub>
                    </p>
                </div>

                <p>
                    I started programming seriously during high school in Dubai, where
                    I transitioned from being curious about how things worked to
                    actually building them. I spent my free time coding small projects
                    and learning new technologies. An internship at Al Futtaim in 2019
                    gave me my first professional experience and made it clear this
                    was my path forward.
                </p>
                <br />
                <p>
                    In 2020, I was accepted into IE University in Madrid to study
                    Computer Science and AI, it was a dream come true. The next four
                    years were transformative. I dove deep into machine learning,
                    computer vision, and natural language processing, building the
                    technical foundation I use every day now. The program was
                    comprehensive: I learned Python, SQL, C++, Java, and HTML and worked with Azure for cloud computing studied algorithms and data
                    structures and designed databases. Projects like building pipelines
                    and recommendation engines gave me hands-on experience applying these concepts to real problems. What made IE truly special was the international community. I was surrounded by talented students from all over the world, each bringing unique perspectives to our work. Living in Madrid, experiencing a different culture, and studying in an environment that encouraged bold thinking and innovation made those years unforgettable. I graduated in 2024 with the skills and mindset to build AI systems that don't just solve problems but actively create new possibilities.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond software, I'm fascinated by how Artificial Intelligence is
                            reshaping entire industries. I believe AI isn't merely a tool, it's
                            a fundamental driver of innovation that enables smarter decisions
                            and redefines technology's role in our lives. Working as an AI
                            Engineer at Oracle, I'm dedicated to building systems that don't
                            just react to the future but actively shape it. My goal is to
                            create technologies that serve humanity and accelerate progress
                            throughout all industries. Outside work, I enjoy
                            sports, travel, and diving into emerging technologies.
                        </p>
                        <br />
                        <p>
                            In high school at Universal American School in Dubai, I led
                            Model United Nations, founded the Meditation Club, and competed in varsity basketball and wrestling. These diverse experiences taught me how to lead with purpose, compete with passion, and maintain mental clarity, which I consider are skills that have become foundational both in my AI engineering work at Oracle along with my other endevours.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={menow2025} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, 2026
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:youssef.gebaly@oracle.com">
                        youssef.gebaly@oracle.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    sideBySideImages: {
        display: 'flex',
        flexDirection: 'row',
        gap: '16px',
        width: '100%',
        justifyContent: 'center',
    },
    sideBySideImage: {
        height: 'auto',
        width: '48%',
        objectFit: 'contain',
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
