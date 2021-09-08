import userPhoto from '../../images/userPhoto.jpg';
import './UserInfo.css'
export default function UserInfo() {
  return(
    <div className={'user-info-wrap'}>
      <div className={'circle-box'}>
        <div className={'circle red'}></div>
        <div className={'circle yellow'}></div>
        <div className={'circle green'}></div>
      </div>
      <div className={'user-inform-box'}>
        <div className={'user-photo'}>
          <img src={userPhoto} alt="Photo"/>
        </div>
        <div className={'user-inform'}>
          <div className={'name'}>Estelle Collins</div>
          <div className={'address'}>
            <span>Montreal</span>
            <span>QC</span>
          </div>
        </div>
        
      </div>
    </div>
  )
}