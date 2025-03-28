import './ShowCount.css'

function ShowCount(props) {
  return (
    <div className='contador'>
      <h2>
        Ha hecho click {props.count}
        {props.count === 1 ? 'vez' : 'veces'}
      </h2>
    </div>
  )
}

export default ShowCount
