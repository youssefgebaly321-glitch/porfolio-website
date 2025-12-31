import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Oracle</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.oracle.com/'}
                        >
                            <h4>www.oracle.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>AI Engineer</h3>
                        <b>
                            <p>Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Architecting and implementing AI-powered cloud solutions that power enterprise applications at scale.
                    Designing robust, scalable cloud-native infrastructure on Oracle Cloud Infrastructure (OCI) while
                    leveraging expertise in NLP, computer vision, and advanced ML techniques to build intelligent systems.
                    Leading end-to-end machine learning pipeline development and collaborating with cross-functional teams
                    to deliver AI solutions that transform business operations across multiple industries.
                </p>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Cyshield</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://cyshield.com/'}
                        >
                            <h4>www.cyshield.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Technical Support Engineer</h3>
                        <b>
                            <p>October 2024 - August 2025</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Provided technical support and engineering solutions for cybersecurity software in Egypt, specializing in
                    critical infrastructure applications. Handled bug fixes and problem resolution for an electricity sector
                    application serving over 80 million people. Collaborated with cross-functional teams to diagnose and resolve
                    software issues while implementing automated monitoring systems, ensuring seamless integration and minimal
                    downtime for mission-critical services.
                </p>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Stellar Consulting</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://stellar.com.eg/'}
                        >
                            <h4>www.stellar.com.eg</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Digital Operations Consultant</h3>
                        <b>
                            <p>June 2024 - September 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Delivered personalized event solutions across UAE, Egypt, and Saudi Arabia for major pharmaceutical and
                    healthcare organizations. Developed custom registration apps and websites to streamline attendee experiences
                    while leveraging cutting-edge technology for optimal engagement. Collaborated with Pfizer, AstraZeneca, and
                    the Deputy Health Minister of Egypt on high-profile healthcare events.
                </p>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Mooevo</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://mooevo.com'}
                        >
                            <h4>www.mooevo.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Innovation Consultant</h3>
                        <b>
                            <p>September 2022 - December 2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Conducted comprehensive market research and strategic analysis for a mobility innovation company,
                    defining their route to market in B2B and B2C sectors. Performed qualitative and quantitative research
                    to assess product positioning, organized weekly client presentations, and monitored campaign performance
                    metrics to optimize marketing effectiveness.
                </p>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Al Futtaim</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.alfuttaim.com/'}
                        >
                            <h4>www.alfuttaim.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Information Technology Intern</h3>
                        <b>
                            <p>June 2019 - September 2019</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    First professional software development experience working on a healthcare application for one of the
                    Middle East's leading conglomerates. Designed, coded, and tested software modules for Al Futtaim's
                    "HealthHub" application while collaborating with stakeholders to gather requirements and provide
                    technical support for hardware and software troubleshooting.
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
