import {AccordionData} from "./types";

export const experience: AccordionData  = {
        'Work': [
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
                description: ['Erasmus semester'],
                from: '01/2016',
                to: '07/2016'
            }
        ]
    }

export const colors = {
    light: {
        '--color-primary': '#bbd4ce',
        '--color-secondary': '#fdebd3',
        '--color-action': '#f4aea0',
        '--color-primary-text': '#264e70',
        '--color-secondary-text': '#679186',
        '--color-action-text': '#b1706c',
        '--color-background': '#fff'
    },
    dark: {
        '--color-primary': '#264e70',
        '--color-secondary': '#679186',
        '--color-action': '#b1706c',
        '--color-primary-text': '#bbd4ce',
        '--color-secondary-text': '#fdebd3',
        '--color-action-text': '#f4aea0',
        '--color-background': '#fff'
    }
}


export const words = 'Hello there!\nI\'m Zsuzsi.\nI develop stuff.';

export const navigation = {
    'Hi': 'welcome-section',
    'About me': 'about-section',
    'Experience': 'experience-section',
    'Projects': 'projects-section',
    'Contact': 'contact-section'
}