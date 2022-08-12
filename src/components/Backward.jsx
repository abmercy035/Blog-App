import BackArrow from '../img/arrow-circle-left.svg'

export default function Back ({ Func }) {
  return (
        <div onClick={Func}>

      <img className = 'pagination-arrow'
src={BackArrow} alt='Back' />
    </div>
  )
}
