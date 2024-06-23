import { useState } from 'react'
import './App.css'
import { ProdactCard } from './components/card/main-card'
import cardimg1 from '/public/card-img-1.png'
import cardimg2 from '/public/card-img-2.png'
import cardimg3 from '/public/card-img-3.png'
import cardimg4 from '/public/card-img-4.png'
import cardimg5 from '/public/card-img-5.png'
import cardimg6 from '/public/card-img-6.png'
import cardimg7 from '/public/card-img-7.png'
import cardimg8 from '/public/card-img-5.png'
import cardimg9 from '/public/card-img-9.png'
import cardimg10 from '/public/card-img-10.png'
import groups from '/public/group-images.png'
import icon1 from '/icon1.svg'
import icon2 from '/icon2.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
    <h2 className="title">Рукнлар</h2>
      <img src={groups} alt="img" />
    </div>
    <div className="container">

    <h2 className="title">Янги қўшилганлар</h2>
      <div className='product'>
        <ProdactCard img={cardimg1} title={"1984"} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
        <ProdactCard img={cardimg2} title={"Rich dad poor dad"} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
        <ProdactCard img={cardimg3} title={"Код 8"} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
        <ProdactCard img={cardimg4} title={"Даниел КИЗ"} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
        <ProdactCard img={cardimg5} title={"Бепарволикнинг но..."} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
      </div>
    </div>
    <div className="container">
      <h2 className="title">Аудио китоблар</h2>
        <div className="product">
        <ProdactCard img={cardimg6} title={"1984"} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
        <ProdactCard img={cardimg7} title={"Rich dad poor dad"} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
        <ProdactCard img={cardimg8} title={"Код 8"} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
        <ProdactCard img={cardimg9} title={"Даниел КИЗ"} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
        <ProdactCard img={cardimg10} title={"Бепарволикнинг но..."} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
        </div>
        </div>
    </>
  )
}

export default App
