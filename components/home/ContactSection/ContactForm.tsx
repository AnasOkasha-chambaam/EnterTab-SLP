"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/lib/actions/contact.actions";
import { cn } from "@/lib/utils";
import { MESSAGE_MAX_LENGTH, ZContactForm } from "@/lib/zod/contact-form.zod";
import { Loader2, MailIcon } from "lucide-react";
import { toast } from "sonner";

const formSchema = ZContactForm;

const ContactForm = () => {
  // 0. Prepare form action.
  const [sendEmailState, sendEmailAction, isSendingEmail] = useActionState(
    sendEmail,
    {
      initial: true,
      success: false,
      message: "",
    }
  );

  // 1. Define your form.
  const form = useForm<TContactFormFields>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: TContactFormFields) {
    startTransition(() => {
      sendEmailAction(values);
    });
  }

  // 3. Handle form submission status.
  useEffect(() => {
    if (sendEmailState.initial) return;

    if (!sendEmailState.success) {
      toast.error("Something Went Wrong!", {
        description: sendEmailState.message,
        richColors: true,
      });
      return;
    }

    toast.success(sendEmailState.message, {
      richColors: true,
    });
    //   form.reset();
  }, [sendEmailState]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your Name"
                  {...field}
                  disabled={field.disabled || isSendingEmail}
                />
              </FormControl>
              <FormMessage className="dark:brightness-200" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your Email"
                  {...field}
                  disabled={field.disabled || isSendingEmail}
                />
              </FormControl>
              <FormMessage className="dark:brightness-200" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your Message"
                  {...field}
                  disabled={field.disabled || isSendingEmail}
                />
              </FormControl>
              <FormDescription
                className={cn("flex justify-end", {
                  "text-destructive dark:brightness-200":
                    field.value.length > MESSAGE_MAX_LENGTH,
                })}
              >
                {field.value.length}/{MESSAGE_MAX_LENGTH}
              </FormDescription>
              <FormMessage className="dark:brightness-200" />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSendingEmail}>
          {isSendingEmail ? (
            <>
              <Loader2 className="animate-spin" /> Sending...
            </>
          ) : (
            <>
              <MailIcon /> Send
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
