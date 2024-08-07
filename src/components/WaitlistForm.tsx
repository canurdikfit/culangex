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
import EmailTag from './../assets/imgs/buttons/email_tag.png';
import NameTag from './../assets/imgs/buttons/name_tag.png';
import SubmitBtn from './../assets/imgs/buttons/Submit.png';
import { useNavigate } from "react-router"






const formSchema = z.object({
    FNAME: z.string(),
    EMAIL: z.string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email.")
})


export default function WaitlistForm() {
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            FNAME: "",
            EMAIL: "",
        },
    })


    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        navigate('/suscribed', { replace: true, state: { email: values.EMAIL } })
    }




    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7 max-w-xl w-full flex flex-col items-center relative z-30">
                <FormField
                    control={form.control}
                    name="FNAME"
                    render={({ field }: any) => (
                        <FormItem className="w-full">
                            <div className="bg-[#747C94] shadow-inner shadow-black/25 flex items-center pl-4 rounded-xl">
                                <img src={NameTag} alt="Email Tag" className="h-7 w-7" />
                                <FormControl className="bg-transparent">
                                    <Input placeholder="FULL NAME" {...field} className="outline-none placeholder:text-white/25 py-3.5 placeholder:text-base" />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />
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
                <button
                    type="submit"
                    className="bg-none outline-none border-none max-w-[140px] md:max-w-[150px] xl:max-w-[200px]"
                >
                    <img
                        src={SubmitBtn}
                        alt="Join Waitlist"
                        className="h-auto w-full object-contain object-center"
                    />
                </button>

            </form>
        </Form>
    )
}
