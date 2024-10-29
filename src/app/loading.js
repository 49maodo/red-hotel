import { Roller } from 'react-css-spinners'

export default function loading() {
  return (
    <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center', height: '100vh' }}>
          <Roller
              color="rgba(102,95,101,1)"
              size={100}
          />
    </div>
  )
}
