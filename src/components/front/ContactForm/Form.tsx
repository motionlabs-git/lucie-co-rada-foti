import React from 'react'
// import { SubmitHandler, useForm } from 'react-hook-form'
// import z from 'zod'

// type Inputs = {
//     example: string
//     exampleRequired: string
// }


// const FormInputs = z.object({
//     name: z.string(),
// });

const Form = () => {

    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm<Inputs>()
    // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)




    return (
        <form
            className='flex-1'

        >
            <fieldset>

                <label
                    htmlFor="name"
                    className='font-promenadeItalic text-xl'
                >Jméno</label>

                <div className='relative flex justify-center overflow-hidden rounded-xl mt-2'>
                    <input
                        className='peer z-20 py-3 px-4 shadow-md border-stone-400 border rounded-xl block w-full focus:border-stone-700 duration-200 bg-stone-300/30 backdrop-blur-2xl font-satoshiBold font-semibold text-xl placeholder:text-black/40'
                        type='text'
                        placeholder='Jméno'
                        id='name'
                        autoComplete='off'

                    />
                    <div className='w-1/3 z-10 aspect-square h-auto rounded-full bg-orange absolute bottom-0 translate-y-1/2 opacity-30 blur-3xl peer-focus:opacity-20 peer-focus:w-2/3 duration-300'></div>


                </div>
            </fieldset>

            <fieldset className='mt-3'>
                <label
                    htmlFor="phone"
                    className='font-promenadeItalic text-xl'
                >
                    Telefon
                </label>


                <div className='relative flex justify-center overflow-hidden rounded-xl mt-2'>
                    <input
                        className='peer z-20 py-3 px-4 shadow-md border-stone-400 border rounded-xl block w-full focus:border-stone-700 duration-200 bg-stone-300/30 backdrop-blur-2xl font-satoshiBold font-semibold text-xl placeholder:text-black/40'
                        type='text'
                        placeholder='Telefon'
                        id='phone'
                        autoComplete='off'
                    />
                    <div className='w-1/3 z-10 aspect-square h-auto rounded-full bg-orange absolute bottom-0 translate-y-1/2 opacity-30 blur-3xl peer-focus:opacity-20 peer-focus:w-2/3 duration-300'></div>
                </div>

            </fieldset>

            <fieldset className='mt-3'>
                <label
                    htmlFor="email"
                    className='font-promenadeItalic text-xl'
                >
                    Email
                </label>


                <div className='relative flex justify-center overflow-hidden rounded-xl mt-2'>
                    <input
                        className='peer z-20 py-3 px-4 shadow-md border-stone-400 border rounded-xl block w-full focus:border-stone-700 duration-200 bg-stone-300/30 backdrop-blur-2xl font-satoshiBold font-semibold text-xl placeholder:text-black/40'
                        type='text'
                        placeholder='Email'
                        id='email'
                        autoComplete='off'
                    />
                    <div className='w-1/3 z-10 aspect-square h-auto rounded-full bg-orange absolute bottom-0 translate-y-1/2 opacity-30 blur-3xl peer-focus:opacity-20 peer-focus:w-2/3 duration-300'></div>
                </div>

            </fieldset>


            <fieldset className='mt-3'>
                <label
                    htmlFor="textarea"
                    className='font-promenadeItalic text-xl'
                >Text</label>


                <div className='relative flex justify-center overflow-hidden rounded-xl mt-2'>
                    <textarea
                        className='peer z-20 py-3 px-4 max-h-[10em] shadow-md border-stone-400 border rounded-xl block w-full focus:border-stone-700 duration-200 bg-stone-300/30 backdrop-blur-2xl font-satoshiBold font-semibold text-xl placeholder:text-black/40'
                        placeholder='Jméno'
                        rows={5}
                        maxLength={300}
                        id='textarea'
                        autoComplete='off'
                    />
                    <div className='w-1/3 z-10 aspect-square h-auto rounded-full bg-orange absolute bottom-0 translate-y-1/2 opacity-30 blur-3xl peer-focus:opacity-20 peer-focus:w-2/3 duration-300'></div>
                </div>

            </fieldset>


            <input className='w-full mt-4 bg-black rounded-xl py-3 font-satoshiBold font-semibold text-white blur-xs duration-300 hover:blur-none' type="submit" value='Odeslat' />


        </form>
    )
}

export default Form