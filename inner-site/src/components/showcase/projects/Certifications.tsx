import React from 'react';
import ociArchitect from '../../../assets/pictures/certifications/oci-architect.png';
import aiVectorSearch from '../../../assets/pictures/certifications/ai-vector-search.png';
import ociAiFoundations from '../../../assets/pictures/certifications/oci-ai-foundations.png';
import generativeAi from '../../../assets/pictures/certifications/generative-ai.png';
import aiAgentStudio from '../../../assets/pictures/certifications/ai-agent-studio.png';
import cloudSuccessNavigator from '../../../assets/pictures/certifications/cloud-success-navigator.png';
import oracleSqlUdemy from '../../../assets/pictures/certifications/oracle-sql-udemy.png';
import innovationIE from '../../../assets/pictures/certifications/innovation-ie.png';
import padiScuba from '../../../assets/pictures/certifications/padi-scuba.png';

export interface CertificationsProps {}

const Certifications: React.FC<CertificationsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Certifications</h1>
            <h3>Professional Development</h3>
            <br />
            <div className="text-block">
                <p>
                    Throughout my career, I've pursued various certifications to deepen my expertise
                    in cloud architecture, artificial intelligence, and emerging technologies. These
                    credentials reflect my commitment to staying at the forefront of innovation and
                    building world-class AI systems on Oracle Cloud Infrastructure.
                </p>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>Oracle Cloud Infrastructure 2025 Certified Architect Associate</h2>
                    </div>
                    <div style={styles.headerRow}>
                        <p><b>Oracle</b> | Issued Dec 2025</p>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <div className="captioned-image">
                    <img src={ociArchitect} style={styles.certImage} alt="OCI Architect Certificate" />
                </div>
                <p>
                    <a
                        href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=9E73EAFB35714FB0334556A4F5A736A1471F1567ED3FD087857E5A46AC92246A"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View Credential
                    </a>
                </p>
            </div>
            <br />

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>Oracle AI Vector Search Certified Professional</h2>
                    </div>
                    <div style={styles.headerRow}>
                        <p><b>Oracle</b> | Issued Oct 2025</p>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <div className="captioned-image">
                    <img src={aiVectorSearch} style={styles.certImage} alt="AI Vector Search Certificate" />
                </div>
                <p>
                    <a
                        href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=1E287F102AAA3FF6B9F466F36BB9DDD549B4722CE23B112EAD7F8EF483F70FD3"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View Credential
                    </a>
                </p>
            </div>
            <br />

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate</h2>
                    </div>
                    <div style={styles.headerRow}>
                        <p><b>Oracle</b> | Issued Oct 2025</p>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <div className="captioned-image">
                    <img src={ociAiFoundations} style={styles.certImage} alt="OCI AI Foundations Certificate" />
                </div>
                <p>
                    <a
                        href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=0CF25770144535FD7600AE54F4B3962429A8A81EDBC22057C84361F6E89A6AF3"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View Credential
                    </a>
                </p>
            </div>
            <br />

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>Oracle Cloud Infrastructure 2025 Certified Generative AI Professional</h2>
                    </div>
                    <div style={styles.headerRow}>
                        <p><b>Oracle</b> | Issued Sep 2025</p>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <div className="captioned-image">
                    <img src={generativeAi} style={styles.certImage} alt="Generative AI Certificate" />
                </div>
                <p>
                    <a
                        href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=F024DDADA34C2BC2FE29A387D831A7C4D8E6B1454C35C657A8A83C624A5CBA42"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View Credential
                    </a>
                </p>
            </div>
            <br />

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>Oracle Cloud Success Navigator Essentials</h2>
                    </div>
                    <div style={styles.headerRow}>
                        <p><b>Oracle</b> | Issued Sep 2025</p>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <div className="captioned-image">
                    <img src={cloudSuccessNavigator} style={styles.certImage} alt="Cloud Success Navigator Certificate" />
                </div>
                <p>
                    <a
                        href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=EF2D2097A43E92E228817468BAF70991532F93DE63C6E1A7FCA9A263308A86B6"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View Credential
                    </a>
                </p>
            </div>
            <br />

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>Oracle Fusion AI Agent Studio Certified Foundations Associate - Rel 1</h2>
                    </div>
                    <div style={styles.headerRow}>
                        <p><b>Oracle</b> | Issued Sep 2025</p>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <div className="captioned-image">
                    <img src={aiAgentStudio} style={styles.certImage} alt="AI Agent Studio Certificate" />
                </div>
                <p>
                    <a
                        href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=BF1EA55CD38FF2DAE782A7C8BB8CB2096B2F49237289D367017E91C22A8A199F"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View Credential
                    </a>
                </p>
            </div>
            <br />

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>The Complete Oracle SQL Certification Course</h2>
                    </div>
                    <div style={styles.headerRow}>
                        <p><b>Udemy</b> | Issued Oct 2024</p>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <div className="captioned-image">
                    <img src={oracleSqlUdemy} style={styles.certImage} alt="Oracle SQL Udemy Certificate" />
                </div>
                <p style={styles.skills}>
                    <i>Credential ID: UC-89ecb090-de43-4020-a413-863c7b2f14f1</i>
                </p>
            </div>
            <br />

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>Innovation Certification</h2>
                    </div>
                    <div style={styles.headerRow}>
                        <p><b>IE University</b> | Issued Jan 2023</p>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <div className="captioned-image">
                    <img src={innovationIE} style={styles.certImage} alt="IE University Innovation Certificate" />
                </div>
                <p style={styles.skills}>
                    <i>Credential ID: TW1QZO-CE000491</i>
                </p>
            </div>
            <br />

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>PADI Open Water Diver</h2>
                    </div>
                    <div style={styles.headerRow}>
                        <p><b>PADI</b></p>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <div className="captioned-image">
                    <img src={padiScuba} style={styles.certImage} alt="PADI Scuba Diving Certificate" />
                </div>
            </div>
            <br />
        </div>
    );
};

const styles: StyleSheetCSS = {
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    skills: {
        fontSize: 14,
        color: '#666',
        marginTop: 8,
    },
    certImage: {
        width: '100%',
        maxWidth: 600,
        height: 'auto',
        marginBottom: 16,
    },
};

export default Certifications;
