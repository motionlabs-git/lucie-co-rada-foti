import Form from '@/components/front/ContactForm/Form'
import React from 'react'


const ContactForm = () => {
    return (
        <section className='container flex gap-2'>
            <div className='flex-1'>
                <h2 className='text-5xl leading-[1.5em]'>
                    <strong>Potřebuješ fotku?</strong>
                    <em className='indent-4 text-6xl text-orange'>
                        Kontaktuj mě!
                    </em>
                    <em className='indent-8 text-6xl text-brown'>
                        Contact me!
                    </em>
                </h2>
                <p className='text-gray-600 mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore animi nemo veniam expedita, cum eaque quia culpa blanditiis totam distinctio rerum quidem, vero asperiores nisi ipsum veritatis molestiae in dicta.</p>
            </div>


            <Form></Form>
        </section>
    )
}

export default ContactForm