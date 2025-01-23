"use server";
import { EmailTemplate } from "@/components/resend/email-template";
import { Resend } from "resend";
import { ZContactForm } from "../zod/contact-form.zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (
  {}: { initial?: true; success: boolean; message: string },
  { name, email, message }: TContactFormFields
): Promise<{ initial?: true; success: boolean; message: string }> => {
  const {
    success: zodSuccess,
    error: zodError,
    data: validatedData,
  } = ZContactForm.safeParse({
    name,
    email,
    message,
  });

  if (!zodSuccess) {
    return {
      success: false,
      message: zodError?.message || "",
    };
  }

  const { error: resendError } = await resend.emails.send({
    from: "EnterTab-SLP <onboarding@resend.dev>",
    to: [process.env.RESEND_EMAIL_TO!],
    subject: "New Message",
    react: await EmailTemplate(validatedData),
  });

  if (resendError) {
    return {
      success: false,
      message: resendError.message,
    };
  }

  return {
    success: true,
    message: "Your message has been sent successfully",
  };
};
