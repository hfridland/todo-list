import iconSun from '../../images/icon-sun.svg'
import iconMoon from '../../images/icon-moon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setTheam } from '../../slices/theamSlice'
import { useEffect } from 'react'

const TheamBtn = () => {
  const dispatch = useDispatch()
  const theam = useSelector((state) => state.theam)
  const toggleTheam = () =>
    dispatch(setTheam(theam === 'light' ? 'dark' : 'light'))

  useEffect(() => {
    document.body.setAttribute('data-theam', 'theam' + theam)
  }, [theam])

  const img = theam === 'light' ? iconMoon : iconSun

  return (
    <div className="theam-btn">
      <img src={img} alt="Theam swither" onClick={toggleTheam} />
    </div>
  )
}

export default TheamBtn
