import { useRef } from 'react'
import '../styles/badge.css'
type Props = {
    content: string,
    isHeader?: boolean
}
function Badge(props: Props) {

    // const div = useRef<HTMLDivElement>(null);
    // if(props.isHeader){
    //     div.current?.classList.toggle('header');
    // }
    const classname = 'badge-container' + (props.isHeader ? " header":"");
  return (
    <div className={classname}><p className='badge-content'>{props.content}</p></div>
  )
}

export default Badge