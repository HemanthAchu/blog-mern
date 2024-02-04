import { Button } from 'flowbite-react'
import React from 'react'

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 my-10 mx-24 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
      <div className='justify-center flex-1 flex flex-col' >
        <h2 className='text-2xl'>Want to learn more about javascript?</h2>
        <p className='text-gray-500 my-2'>checkout these resources with 100 javascript projects</p>
        <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
            <a href="">10 jacvascript project</a>
        </Button>
      </div>
      <div className='p-7 flex-1'>
        <img src="https://imgs.search.brave.com/q-FgkuT1BlLTfLoTwcdcOvIu_otYhdAQzOBFcDkaKMo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vd2VzYm9zL2lt/YWdlL2ZldGNoL3Ff/YXV0byxmX2F1dG8v/aHR0cHM6Ly9zMy5h/bWF6b25hd3MuY29t/L2pzMzAtY2RuL3Nt/YWxsNy5qcGc" alt="" />
      </div>
    </div>
  )
}
