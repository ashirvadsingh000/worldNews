import React from 'react'
import state1 from '../../public/state1.svg'
import state2 from '../../public/state2.svg'
import state3 from '../../public/state3.svg'
import { Link } from 'react-router-dom'
import state4 from '../../public/state4.svg'
import state5 from '../../public/state5.svg'
import state6 from '../../public/state6.svg'
import state7 from '../../public/state7.svg'
import state8 from '../../public/state8.svg'
import state9 from '../../public/state9.svg'
const States = () => {
  return (
    <div className="section flex justify-center items-center">
      <div className="mainbox  bg-white border-2 shadow-lg shadow-home-blue mt-28 rounded-2xl  h-full  w-fi mx-12 mb-5">
        <div className="title text-center py-6">
          <h1 className='text-2xl font-bold'>राज्य चुनें</h1>
        </div>
      <div className="box grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row justify-evenly gap-6 p-6">
        <div className="item1 h-28 border-2 rounded-lg shadow-lg shadow-slate-600  text-center cursor-pointer  content-center px-14 hover:text-red-500  justify-self-center w-full">
          <img src={state1} alt="" srcset="" className='size-16' />
          <h1 className='text-xl'><Link to="/server"> उत्तर प्रदेश </Link></h1>
        </div>
        <div className="item2 h-28 border-2 rounded-lg shadow-lg shadow-slate-600  text-center cursor-pointer  content-center px-14 hover:text-red-500  justify-self-center w-full">
          <img src={state2} alt="" srcset="" className='size-16' />
          <h1 className='text-xl'><Link to="/server"> उत्तराखंड</Link>
          </h1>
        </div>
        <div className="item3 h-28 border-2 rounded-lg shadow-lg shadow-slate-600  text-center cursor-pointer  content-center px-14 hover:text-red-500  justify-self-center w-full">
          <img src={state3} alt="" srcset="" className='size-16' />
          <h1 className='text-xl'><Link to="/server"> मध्‍य प्रदेश</Link>
          </h1>
        </div>
        <div className="item4 h-28 border-2 rounded-lg shadow-lg shadow-slate-600  text-center cursor-pointer  content-center px-14 hover:text-red-500  justify-self-center w-full">
          <img src={state4} alt="" srcset="" className='size-16' />
          <h1 className='text-xl'><Link to="/server"> छत्‍तीसगढ़</Link>
          </h1>
        </div>
        <div className="item5 h-28 border-2 rounded-lg shadow-lg shadow-slate-600  text-center cursor-pointer  content-center px-14 hover:text-red-500  justify-self-center w-full">
          <img src={state5} alt="" srcset="" className='size-16' />
          <h1 className='text-xl'><Link to="/server"> हरियाणा</Link>
          </h1>
        </div>
        <div className="item6 h-28 border-2 rounded-lg shadow-lg shadow-slate-600  text-center cursor-pointer  content-center px-14 hover:text-red-500  justify-self-center w-full">
          <img src={state6} alt="" srcset="" className='size-16' />
          <h1 className='text-xl'><Link to="/server"> दिल्ली</Link>
          </h1>
        </div>
        <div className="item7 h-28 border-2 rounded-lg shadow-lg shadow-slate-600  text-center cursor-pointer  content-center px-14 hover:text-red-500  justify-self-center w-full">
          <img src={state7} alt="" srcset="" className='size-16' />
          <h1 className='text-xl'><Link to="/server"> बिहार</Link>
          </h1>
        </div>
        <div className="item8 h-28 border-2 rounded-lg shadow-lg shadow-slate-600  text-center cursor-pointer  content-center px-14 hover:text-red-500  justify-self-center w-full">
          <img src={state8} alt="" srcset="" className='size-16' />
          <h1 className='text-xl'><Link to="/server">झारखंड</Link>
          </h1>
        </div>
        <div className="item9 h-28 border-2 rounded-lg shadow-lg shadow-slate-600 cursor-pointer hover:text-red-500 content-center px-14  ">
          <img src={state9} alt="" srcset="" className='size-16'  />
          <h1 className='text-xl'><Link to="/server"> राजस्‍थान</Link></h1>
        </div>
      </div>
      </div>
    </div>
      )
}

export default States
