type Props = {
    number: number,
    point: string,
    desc: string
}

function DemoPoint(props: Props) {
  return (
    <div className="point">
        <div className="point-number">{props.number}</div>
        <h2 className="white-color">{props.point}</h2>
        <p className="grey-color">{props.desc}</p>
    </div>
  )
}

export default DemoPoint