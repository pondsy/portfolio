import sharedStyles from "../../Style/sharedStyles.module.scss";
import styles from './Experience.module.scss';
import CustomVisibilitySensor from "../../Components/VisibilitySensor";
import Table from "../../Components/Table";
import CustomMotionDiv from "../../Components/CustomMotionDiv";

interface AccordionData {
    [key: string]: AccordionItemData[];
}

export interface AccordionItemData {
    name: string;
    title: string;
    description?: string[];
    from: string;
    to: string;
}

const ExperienceSection = () => {

    const experience: AccordionData  = {
        'Work experience': [
            {
                name: 'Bagpoint Group',
                title: 'Frontend developer',
                description: [
                    'Development and maintenance of the booking funnel and admin dashboard',
                    'Maintenance of the WordPress site',
                    'Designing mockups'
                ],
                from: '05/2021',
                to: ''
            },
            {
                name: 'SCITODATE',
                title: 'Product Engineer',
                description: ['Development and maintenance of user dashboard and a Chrome extension'],
                from: '10/2019',
                to: '01/2021'
            },
            {
                name: 'queueup',
                title: 'Junior Frontend Developer',
                description: ['Development of multiple mobile applications'],
                from: '08/2018',
                to: '10/2019'
            }
        ],
        'Education': [
            {
                name: 'IU International University of Applied Sciences',
                title: 'Computer science',
                from: '01/2022',
                to: ''
            },
            {
                name: 'CODAISSEUR',
                title: 'Full-Stack Javascript Developer',
                from: '04/2018',
                to: '06/2018'
            },
            {
                name: 'Óbuda University',
                title: 'Environmental Engineer',
                from: '09/2012',
                to: '02/2018'
            },
            {
                name: 'Avans University of Applied Sciences',
                title: 'Environmental consultant',
                description: ['Erasmus'],
                from: '01/2016',
                to: '07/2016'
            }
        ]
    }

    const downloadCV = () => {

    }

    return (
        <CustomVisibilitySensor elementID={'experience-section'}>
            <section className={sharedStyles.section} id="experience-section">
                <CustomMotionDiv className={styles.container}>
                    <div className={styles.experiences}>
                        {Object.entries(experience).map(([key, value], index) => (
                            <Table title={key} data={value} key={index}/>
                        ))}
                    </div>
                    <div className={styles.download} onClick={downloadCV}>
                        <i className="fa-solid fa-download"/>
                        <a aria-label="CV download" rel="noreferrer" href="https://drive.google.com/file/d/1Bx2VEd4Wifp7_i1Ojoai9i5rgtXOVeYL/view?usp=sharing" target="_blank" download>{` download CV`}</a>
                    </div>
                </CustomMotionDiv>
            </section>
        </CustomVisibilitySensor>
    )
}

export default ExperienceSection;