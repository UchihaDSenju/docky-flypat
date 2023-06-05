import mail from '../assets/featureIcons/message.svg'
import analytics from '../assets/featureIcons/Analytics.svg'
import teams from '../assets/featureIcons/users.svg'
import design from '../assets/featureIcons/design.svg'
import app from '../assets/featureIcons/app.svg'
import settings from '../assets/featureIcons/setting.svg'

const style = { color: "white", fontSize: "1.5em" }
export const features = [
    {
        icon: app,
        title: 'EMR, DHIS, ABDM',
        desc: 'The first business platform to bring together all of your products from to One place.',
        background: '#974063'
    },
    {
        icon: design,
        title: 'Enhanced Integrations',
        desc: 'A tool that allows you to create, Manage multiple integrations with your vendors, insurance providers & business apps.',
        background: '#F54768'
    },
    {
        icon: teams,
        title: 'Team Management',
        desc: 'Our Calendar lets you know what\'s happening with your teams, vendors  across locations & collaborate seamlessly',
        background: '#FF9677'
    },
    {
        icon: mail,
        title: 'Measure  performance',
        desc: 'Stay connected with your team and make quick decisions wherever you are.',
        background: '#41436A'
    },
    {
        icon: analytics,
        title: 'Custom analytics',
        desc: 'Get a complete dashboard in the cloud. See activity, revenue and metrics all in one place.',
        background: '#FF9677'
    },
    {
        icon: settings,
        title: 'Easy setup',
        desc: 'End to End Business Platform, hospital Management, Lab, Pharmacy, Automation and Help Desk.',
        background: '#974063'
    }
]