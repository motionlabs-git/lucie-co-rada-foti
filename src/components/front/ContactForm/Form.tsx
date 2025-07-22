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
            <label
                htmlFor="name"
                className='font-promenadeItalic text-xl'
            >Jméno</label>
            <input
                className='py-2 px-4 shadow-md border-stone-400 border rounded-xl block w-full focus:border-stone-700 duration-200 bg-stone-200 font-satoshiBold text-xl' type='text'
                id='name'
            />
            <label
                htmlFor="name"
                className='font-promenadeItalic text-xl'
            >Jméno</label>
            <input className='py-2 px-4 shadow-md border-stone-400 border rounded-xl block w-full focus:border-stone-700 duration-200 bg-stone-200 font-satoshiBold text-xl' type='text' />


            <input />



            <input type="submit" />
        </form>
    )
}

export default Form