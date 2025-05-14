"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

export default function PerfectContactForm() {
  const t = useTranslations("PerfectContactForm");

  const formSchema = z.object({
    name: z.string().min(2, {
      message: t("form.nameError"), // Use translation function
    }),
    phone: z.string().min(10, {
      message: t("form.phoneError"), // Use translation function
    }),
    email: z
      .string()
      .email({
        message: t("form.emailError"), // Use translation function
      })
      .optional()
      .or(z.literal("")),
    city: z.string().optional(),
    state: z.string().optional(),
    product: z.string().optional(),
    query: z.string().min(10, {
      message: t("form.queryError"), // Use translation function
    }),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      city: "",
      state: "",
      product: "",
      query: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    const tStrings = {
      emailSubject: t("emailSubject"),
      emailBody: {
        name: t("emailBody.name"),
        phone: t("emailBody.phone"),
        email: t("emailBody.email"),
        city: t("emailBody.city"),
        state: t("emailBody.state"),
        product: t("emailBody.product"),
        query: t("emailBody.query"),
      },
      emailAdditionalContent: {
        intro: t("emailBody.intro"),
        patience: t("emailBody.patience"),
        closing: t("emailBody.closing"),
        regards: t("emailBody.regards"),
        company: t("emailBody.company"),
      },
      formSubmitted: t("formSubmitted"),
      emailError: t("emailError"),
    };

    try {
      const response = await fetch("/api/contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, ...tStrings }),
      });

      if (response.ok) {
        toast(t("formSubmitted"), {
          description: t("formSubmittedDescription"),
        });
        form.reset();
      } else {
        const { error } = await response.json();
        toast.error(error || t("formError"));
      }
    } catch (error) {
      console.log(error);

      toast.error(t("formError"));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 font-inter"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">
                  {t("nameLabel")} <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder={t("namePlaceholder")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">
                  {t("phoneLabel")} <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder={t("phonePlaceholder")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">
                  {t("emailLabel")}
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={t("emailPlaceholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="product"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold">
                  {t("productLabel")}
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="w-full">
                    <SelectTrigger>
                      <SelectValue placeholder={t("productPlaceholder")} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="product1">{t("product1")}</SelectItem>
                    <SelectItem value="product2">{t("product2")}</SelectItem>
                    <SelectItem value="other">{t("productOther")}</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">
                  {t("cityLabel")}
                </FormLabel>
                <FormControl>
                  <Input placeholder={t("cityPlaceholder")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">
                  {t("stateLabel")}
                </FormLabel>
                <FormControl>
                  <Input placeholder={t("statePlaceholder")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">
                {t("queryLabel")} <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t("queryPlaceholder")}
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full font-spaceGrotesk"
          disabled={isSubmitting}
        >
          {isSubmitting ? t("submitting") : t("submit")}
        </Button>
      </form>
    </Form>
  );
}
