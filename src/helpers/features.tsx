import {MdOutlineMailOutline, MdDraw} from 'react-icons/md'
import {IoAnalyticsSharp} from 'react-icons/io5'
import {AiOutlineTeam, AiFillAppstore, AiFillSetting} from 'react-icons/ai'

const style = { color: "white", fontSize: "1.5em" }
export const features = [
    {
        icon: <MdOutlineMailOutline fill='white' />,
        title: 'Measure your performance',
        desc: 'Stay connected with your team and make quick decisions wherever you are. '
    },
    {
        icon: <IoAnalyticsSharp fill='white' />,
        title: 'Custom analytics',
        desc: 'Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place.'
    },
    {
        icon: <AiOutlineTeam fill='white'/>,
        title: 'Team Management',
        desc: 'Our calendar lets you know what is happening with customer and projects so you'
    },
    {
        icon: <MdDraw fill='white' />,
        title: 'Build your website',
        desc: 'A tool that lets you build a dream website even if you know nothing about web design or programming.'
    },
    {
        icon: <AiFillAppstore fill='white' />,
        title: 'Connect multiple apps',
        desc: 'The first business platform to bring together all of your products from one place.'
    },
    {
        icon: <AiFillSetting fill='white' />,
        title: 'Easy setup',
        desc: 'End to End Business Platform, Sales Management, Marketing Automation, Help Desk'
    }
]