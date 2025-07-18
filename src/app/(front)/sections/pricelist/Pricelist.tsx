'use client'
import PricelistCard from '@/components/front/Pricelist/PricelistCard'
import React, { useState } from 'react'


const fakeData = [{ title: 'Rychle a bezbolestně', price: 1000 }, { title: 'Mám rád kompromis', price: 2000 }, { title: 'Před foťákem jako doma', price: 3000 }

]

const Pricelist = () => {

    const [selected, setSelected] = useState(0)



    return (
        <section className='container flex gap-10'>

            <div className='flex-2 flex flex-col gap-2'>

                <h2>Ceník</h2>

                {fakeData.map((item, index) =>
                    <button onClick={() => setSelected(index)} key={index} className={`${selected === index ? 'bg-gray-100' : 'bg-gray-50'} w-full flex justify-between items-center hover:bg-gray-100 bg-gray-50 border-black/20 border-2 rounded-2xl shadow-md p-4 duration-300`}>
                        <span className='font-satoshiBold text-xl'>

                            {item.title}
                        </span>
                        <span className='font-satoshiBold text-xl'>
                            {selected === index ? '-' : '+'}
                        </span>
                    </button>
                )}

            </div>



            <PricelistCard title={fakeData[selected].title} ></PricelistCard>


        </section>
    )
}

export default Pricelist