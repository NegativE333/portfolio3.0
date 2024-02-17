"use client";

import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import { SubmitButton } from "./submit-button";
import toast from "react-hot-toast";
import { useRef } from "react";

export const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const resetForm = () => {
        if (formRef.current) {
            formRef.current.reset();
        }
    };

    return(
        <motion.div 
            initial={{opacity : 0}}
            animate={{opacity: 1}}
            transition={{duration : 2}}
            className="h-full flex flex-col gap-2 justify-center items-center w-[min(100%,38rem)] text-center"
        >   
            <div className="bg-white/50 p-4 sm:p-8 rounded-xl shadow-lg hover:shadow-xl">
                <div className="text-xl sm:text-2xl">
                    Contact Me
                </div>
                <div className="text-xs sm:text-md text-gray-700 mt-2">
                    Contact me directly at <a className="underline hover:text-gray-900" href="mailto:omtekade914@gmail.com">omtekade914@gmail.com</a> or through this form.
                </div>
                <div className="w-full">
                    <form 
                        ref={formRef}
                        action={async (formData) => {
                            const { data, error } = await sendEmail(formData);

                            if(error){
                                toast.error(error);
                                return;
                            }
                            
                            toast.success("Email sent successfully");
                            resetForm(); 
                        }}
                        className="mt-5 flex flex-col gap-2"
                    >
                        <input 
                            type="email" 
                            name="senderEmail"
                            required
                            maxLength={250}
                            className="h-14 px-4 rounded-lg border border-black/10 shadow-md bg-white/10"
                            placeholder="Your email"
                        />
                        <textarea 
                            className="h-52 my-3 rounded-lg border border-black/10 p-4 shadow-md bg-white/10"
                            name="message"
                            placeholder="Your message"
                            required
                            maxLength={3000}
                        />
                        <SubmitButton />
                    </form>
                </div>
            </div>
        </motion.div>
    )
}