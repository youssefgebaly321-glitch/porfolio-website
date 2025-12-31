import React from 'react';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import ragCorrect from '../../../assets/pictures/projects/software/rag-correct.png';
// @ts-ignore
import padcevCorrect from '../../../assets/pictures/projects/software/padcev-correct.png';
// @ts-ignore
import grafanaAi from '../../../assets/pictures/projects/software/grafana-ai.jpg';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>youssefgebaly.com</h2>
                <br />
                <p>
                    youssefgebaly.com is my portfolio website, and also the
                    website you are on right now. This project is a customized
                    version of an amazing 3D portfolio concept that challenged
                    me both technically and creatively.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Blender Scene of the 3D website.
                            The scene from Blender was baked and exported in a
                            GLTF format.
                        </sub>
                    </p>
                </div>
                <p>
                    The website is split into two parts: the 3D site and the 2D OS site. The
                    3D site uses Three.js to render the scene and renders the 2D
                    site inside of it using an iframe. The 2D OS site is a
                    simple React site that works as a standalone web app. The actual rendering of
                    the 2D site is accomplished using a CSS renderer provided by
                    Three.js that transforms the HTML of the 2D site with 3D CSS
                    transforms to give the illusion of three dimensionality.
                </p>
            </div>
            <div className="text-block">
                <h2>RAG Document Q&A Application</h2>
                <br />
                <p>
                    A production-ready RAG (Retrieval-Augmented Generation) application that enables intelligent document analysis
                    through AI-powered search and generation. Built with Next.js 15 and powered by Oracle Cloud Infrastructure's
                    cutting-edge AI services, this application demonstrates the practical implementation of enterprise-grade AI solutions.
                </p>
                <br />
                <h3>Technical Architecture</h3>
                <p>
                    The application leverages a sophisticated tech stack including Next.js 15 with App Router, Oracle Autonomous Database
                    23ai with AI Vector Search (1024-dimension embeddings via OCI Cohere), and Anthropic Claude Sonnet 4.5 for intelligent
                    response generation. Document processing supports PDF, DOCX, and TXT formats with optimized chunking and overlap strategies.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={ragCorrect} style={styles.image} alt="RAG Document Q&A Application Demo" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 2:</b> RAG Document Q&A Application interface showing document upload,
                            AI-powered chat, and source attribution features.
                        </sub>
                    </p>
                </div>
                <p>
                    This project showcases the integration of multiple cloud services into a cohesive AI application, demonstrating
                    practical experience with Oracle Cloud Infrastructure, vector databases, and large language models in a production context.
                </p>
            </div>
            <div className="text-block">
                <h2>Oracle AI Data Platform - Executive Demo Suite</h2>
                <br />
                <p>
                    A comprehensive demonstration suite showcasing Oracle AI Data Platform's unified capabilities through three
                    executive-ready Jupyter notebooks. This project illustrates real-world e-commerce analytics use cases,
                    demonstrating 80% faster time-to-insight and 50-70% lower TCO compared to traditional multi-vendor stacks.
                </p>
                <br />
                <h3>Notebook 1: Real-Time Streaming Analytics</h3>
                <p>
                    Implements real-time customer order monitoring using OCI Streaming (Kafka-compatible) with Delta Lake ACID transactions.
                    Features ADW Federation enabling unified SQL queries across cloud streaming data and on-premise data warehouses,
                    processing thousands of events per second with zero data loss. Includes time travel capabilities for historical
                    data analysis and full audit trail maintenance.
                </p>
                <br />
                <h3>Notebook 2: AI-Powered Customer Intelligence</h3>
                <p>
                    Demonstrates native Gen AI integration using Oracle's query_model() function to call Llama 3.3 70B directly from
                    Spark SQL - no external API complexity required. Analyzes 500+ customer reviews in minutes with automated sentiment
                    analysis, multi-language support (75+ languages), and intelligent issue categorization. Showcases 80% faster
                    deployment than traditional NLP pipeline development with zero model training overhead.
                </p>
                <br />
                <h3>Notebook 3: Predictive ML Analytics</h3>
                <p>
                    Implements GPU-accelerated TensorFlow for customer churn prediction (85%+ accuracy, 0.90+ AUC-ROC) and Spark MLlib
                    collaborative filtering for personalized product recommendations. Demonstrates complete ML pipeline from feature
                    engineering through production deployment, with quantified business impact: $24 ROI per $1 retention spend, 200%
                    revenue uplift from recommendations, and $100K+ total quantified value in prevented churn and incremental revenue.
                </p>
            </div>
            <div className="text-block">
                <h2>AI-Powered Grafana Dashboard Analyzer</h2>
                <br />
                <p>
                    An intelligent Grafana plugin that transforms monitoring dashboards into actionable insights using computer vision
                    and AI. Built with OpenAI Vision APIs, prompt engineering, and OpenTelemetry architecture, this plugin analyzes
                    dashboard visuals to provide context-aware observations without requiring raw timeseries data access.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={grafanaAi} style={styles.image} alt="AI-Powered Grafana Dashboard Analyzer" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 5:</b> AI-Powered Grafana Dashboard Analyzer providing intelligent insights
                            from monitoring dashboards using computer vision and contextual analysis.
                        </sub>
                    </p>
                </div>
                <h3>Core Capabilities</h3>
                <p>
                    Features a multi-mode prompting engine with specialized modes (Summary, Diagnosis, Prediction, Comparison) that
                    dynamically generate tailored prompt chains for structured AI analysis. The image-to-insight pipeline uses visual
                    encoder models to interpret rendered dashboards, while alert context injection ensures the AI prioritizes active
                    alerts and threshold violations in its analysis. OpenTelemetry-aware architecture enables integration of OTEL
                    traces and metadata for infrastructure-level correlations and deeper root cause analysis.
                </p>
                <br />
                <p>
                    With proper business context, the plugin transforms from descriptive to prescriptive, delivering insights like
                    "API Latency surges post-deployment likely affected user login success rate" instead of generic observations.
                    It predicts trends, diagnoses root causes, and connects data patterns like an experienced team member, enabling
                    smarter operational decisions at scale.
                </p>
            </div>
            <div className="text-block">
                <h2>PADCEV Immersive Experience - Advanced Leap Motion Integration</h2>
                <br />
                <p>
                    Developed an innovative immersive room experience showcasing PADCEV's mechanism of action through interactive
                    3D visualizations controlled by hand gestures. This project combined cutting-edge hardware integration with
                    real-time data visualization to create an engaging educational experience for medical professionals.
                </p>
                <br />
                <h3>Technical Implementation</h3>
                <p>
                    The experience was powered by Advanced Leap Motion Sensors, enabling precise hand gesture recognition for
                    intuitive control of dynamic 3D medical visualizations. Real-time gesture tracking provided natural interaction
                    with complex molecular models, allowing users to explore PADCEV's innovative mechanism of action through an
                    immersive, hands-free interface.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={padcevCorrect} style={styles.image} alt="PADCEV Immersive Experience" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> PADCEV immersive room experience with gesture-controlled
                            3D visualizations and interactive medical education displays.
                        </sub>
                    </p>
                </div>
                <p>
                    The system delivered real-time insights into drug delivery mechanisms, cellular interactions, and therapeutic
                    pathways through spatially-mapped gesture controls. This innovative approach to medical education technology
                    demonstrated the effective integration of motion sensing hardware with complex scientific visualization.
                </p>
            </div>
            <div className="text-block">
                <h2>AL-Futtaim Healthhub Application</h2>
                <br />
                <p>
                    Developed a comprehensive healthcare management application for AL-Futtaim Healthcare, streamlining patient
                    engagement and healthcare service delivery across their network of facilities. This full-stack application
                    integrates appointment scheduling, patient records management, and healthcare provider coordination into a
                    unified platform.
                </p>
                <br />
                <h3>Core Functionality</h3>
                <p>
                    The Healthhub application provides patients with seamless access to healthcare services including online
                    appointment booking, medical history tracking, prescription management, and secure communication with healthcare
                    providers. The platform supports multi-facility coordination, enabling patients to access services across the
                    AL-Futtaim Healthcare network through a single integrated interface.
                </p>
                <br />
                <p>
                    Built with a focus on user experience and data security, the application implements industry-standard healthcare
                    data protection protocols while maintaining an intuitive interface for patients of all technical backgrounds.
                    The system architecture supports scalability to accommodate growing patient volumes and expanding service offerings.
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    image: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
