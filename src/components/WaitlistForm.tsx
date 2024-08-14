import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import LanguageTag from './../assets/imgs/language.png';
import CountryTag from './../assets/imgs/earth.png';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "./ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select"
import { Input } from "./ui/input"
import EmailTag from './../assets/imgs/buttons/email_tag.png';
import NameTag from './../assets/imgs/buttons/name_tag.png';
import SubmitBtn from './../assets/imgs/buttons/Submit.png';
import { useMailChimpForm } from "use-mailchimp-form";
import ClipLoader from "react-spinners/ClipLoader"
import { useNavigate } from "react-router"
import { CountriesFlag } from "./Countries";


const formSchema = z.object({
    FNAME: z.string().min(5, { message: "Add a valid name." }),
    EMAIL: z.string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email."),
    COUNTRY: z.string().min(1, { message: "Select a Country" }),
    LANGUAGE: z.string().min(1, { message: "Type a Preferred Language" })
})


export default function WaitlistForm() {
    const navigate = useNavigate()
    const url = `https://gmail.us14.list-manage.com/subscribe/post?u=${import.meta.env.VITE_MAIL_FORM_API_POST}&amp;id=${import.meta.env.VITE_MAIL_FORM_API_ID}&amp;f_id=${import.meta.env.VITE_MAIL_FORM_API_FORM_ID}`;

    const {
        loading,
        success,
        error,
        handleSubmit,
    } = useMailChimpForm(url);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            FNAME: "",
            EMAIL: "",
            COUNTRY: '',
            LANGUAGE: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        handleSubmit(values);
        setTimeout(() => {
            if (success) {
                navigate('/suscribed', { replace: true, state: { email: values.EMAIL } })
            }
        }, 1500)

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 max-w-xl w-full flex flex-col items-center relative z-30">
                <FormField
                    control={form.control}
                    name="FNAME"
                    render={({ field }: any) => (
                        <FormItem className="w-full">
                            <div className="bg-[#505C81] shadow-inner shadow-black/25 flex items-center pl-4 rounded-xl">
                                <img src={NameTag} alt="Email Tag" className="h-7 w-7" />
                                <FormControl className="bg-transparent">
                                    <Input placeholder="FULL NAME" {...field} className="outline-none placeholder:text-white/25 py-3 placeholder:text-base" />
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
                            <div className="bg-[#505C81] shadow-inner shadow-black/25 flex items-center pl-4 rounded-xl">
                                <img src={EmailTag} alt="Email Tag" className="h-7 w-7" />
                                <FormControl className="bg-transparent">
                                    <Input placeholder="EMAIL ADDRESS" {...field} className="outline-none placeholder:text-white/25 py-3 placeholder:text-base" />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="COUNTRY"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="bg-[#505C81] shadow-inner shadow-black/25 pl-4 rounded-xl border-0">
                                        <div className="flex items-center">
                                            <img src={CountryTag} alt="Email Tag" className="h-7 w-7 mr-3" />
                                            <SelectValue placeholder="select country" />
                                        </div>
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-[#505C81] shadow-inner shadow-black/25 rounded-xl border-0">
                                    {
                                        CountriesFlag.map((items, idx) => (
                                            <SelectItem key={idx} value={items.alt}>{items.alt}</SelectItem>
                                        ))
                                    }
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="space-y-1 w-full">
                    <FormField
                        control={form.control}
                        name="LANGUAGE"
                        render={({ field }: any) => (
                            <FormItem className="w-full">
                                <div className="bg-[#505C81] shadow-inner shadow-black/25 flex items-center pl-4 rounded-xl">
                                    <img src={LanguageTag} alt="Language Tag" className="h-7 w-7" />
                                    <FormControl className="bg-transparent">
                                        <Input placeholder="Preferred Language" {...field} className="outline-none placeholder:text-white/25 py-3 placeholder:text-base" />
                                    </FormControl>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {error && <p className="text-red-600">
                        Ooops!!! Please try again</p>}
                </div>

                {loading ?
                    <ClipLoader
                        color={'#B6F6FF'}
                        loading={loading}
                        size={35}
                        speedMultiplier={1}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                    :
                    <button
                        type="submit"
                        className="bg-none outline-none border-none max-w-[140px] md:max-w-[150px] xl:max-w-[200px]"
                    >
                        <img
                            src={SubmitBtn}
                            alt="Join Waitlist"
                            className="h-auto w-full object-contain object-center"
                        />
                    </button>}

            </form>
        </Form>
    )
}
