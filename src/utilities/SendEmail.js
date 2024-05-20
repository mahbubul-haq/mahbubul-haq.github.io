import emailjs from "@emailjs/browser";

export const sendEmail = async (form) => {
    try {
        // how to add g-recaptcha-response to form data
        // form.append('g-recaptcha-response', recaptchaValue);

        
        const response = await emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form,
            {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                
            }
        );
        return {
            success: true,
            response: response,
        };
    } catch (error) {
        return {
            success: false,
            error: error,
        };
    }
};
