import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import EmailTag from './../assets/imgs/buttons/email_tag.svg';
import NameTag from './../assets/imgs/buttons/name_tag.svg';
import SendButton from "./../assets/imgs/buttons/Send_message.svg";

import { Textarea } from "./ui/textarea"


const formSchema = z.object({

    EMAIL: z.string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email."),
    MESSAGE: z.string().min(1, { message: "Enter a valid message" }),
})


export default function ContactForm() {


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            EMAIL: "",
            MESSAGE: "",
        },
    })


    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7 max-w-xl w-full flex flex-col items-end relative z-30">

                <FormField
                    control={form.control}
                    name="EMAIL"
                    render={({ field }: any) => (
                        <FormItem className="w-full">
                            <div className="bg-[#747C94] shadow-inner shadow-black/25 flex items-center pl-4 rounded-xl">
                                <img src={EmailTag} alt="Email Tag" className="h-7 w-7" />
                                <FormControl className="bg-transparent">
                                    <Input placeholder="EMAIL ADDRESS" {...field} className="outline-none placeholder:text-white/25 py-3.5 placeholder:text-base" />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="MESSAGE"
                    render={({ field }: any) => (
                        <FormItem className="w-full">
                            <div className="bg-[#747C94] shadow-inner shadow-black/25 flex items-start pl-4 rounded-xl">
                                <div className="py-2">
                                    <img src={NameTag} alt="Email Tag" className="h-7 w-7" />
                                </div>
                                <FormControl className="bg-transparent">
                                    <Textarea
                                        {...field}
                                        placeholder="Message"
                                        className="resize-none bg-transparent h-28 w-full outline-none border-none placeholder:text-white/25 lg:text-lg" />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />


                <button
                    type="submit"
                    className="bg-none outline-none border-none max-w-[140px] md:max-w-[150px] xl:max-w-[200px]"
                >
                    <img
                        src={SendButton}
                        alt="Send Message"
                        className="h-auto w-full object-contain object-center"
                    />
                </button>
            </form>
        </Form>
    )
}

