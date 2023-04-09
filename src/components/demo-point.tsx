type Props = {
    number: number,
    point: string,
    desc: string
}

function DemoPoint(props: Props) {
  return (
    <div className="point">
        <div className="point-number">{props.number}</div>
        <div className="point-content">
          <h2 className="white-color">{props.point}</h2>
          <p className="grey-color">{props.desc}</p>
        </div>
    </div>
  )
}

export default DemoPoint