import Form from '@/components/front/ContactForm/Form'
import React from 'react'


const ContactForm = () => {
    return (
        <section id='contact' className='container flex gap-10'>
            <div className='flex-1'>
                <h2 className='text-5xl leading-[1.5em]'>
                    <strong className='invertText blurryItem'>Chceš fotku?</strong>
                    <em className='indent-4 text-6xl text-orange blurryItem'>
                        Kontaktuj mě a ...
                    </em>
                    <em className='indent-8 text-6xl text-brown blurryItem'>
                        *cvak
                    </em>
                </h2>
                <p className='text-gray-600 mt-2 blurryItem'>
                    Tento formulář slouží pouze jako poptávka focení. Napiš mi prosím svou představu o focení, lokaci, vhodný termín a případné detaily. Budu tě kontaktovat zpět ;-)
                </p>
            </div>


            <Form></Form>
        </section>
    )
}

export default ContactForm