"use client";

import type React from "react";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Upload, X } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

export default function PerfectCareer() {
  const t = useTranslations("career");

  const formSchema = z.object({
    // Required fields...
    position: z.string({ required_error: t("positionRequiredError") }),
    name: z.string().min(2, { message: t("nameValidationError") }),
    phone: z.string().min(10, { message: t("phoneValidationError") }),
    email: z.string().email({ message: t("emailValidationError") }),
    address: z.string().min(5, { message: t("addressValidationError") }),
    previousPosition: z
      .string()
      .min(2, { message: t("previousPositionValidationError") }),
    previousCompany: z
      .string()
      .min(2, { message: t("previousCompanyValidationError") }),
    expectedCTC: z
      .string()
      .min(1, { message: t("expectedCTCValidationError") }),
    yearsOfExperience: z
      .string()
      .min(1, { message: t("yearsOfExperienceValidationError") }),

    // Optional fields with proper handling for empty string
    referenceName: z
      .string()
      .transform((val) => (val === "" ? undefined : val))
      .optional()
      .refine((val) => val === undefined || val.length >= 2, {
        message: t("referenceNameValidationError"),
      }),
    referenceCompany: z
      .string()
      .transform((val) => (val === "" ? undefined : val))
      .optional()
      .refine((val) => val === undefined || val.length >= 2, {
        message: t("referenceCompanyValidationError"),
      }),
    referencePosition: z
      .string()
      .transform((val) => (val === "" ? undefined : val))
      .optional()
      .refine((val) => val === undefined || val.length >= 2, {
        message: t("referencePositionValidationError"),
      }),
    referenceEmail: z
      .string()
      .transform((val) => (val === "" ? undefined : val))
      .optional()
      .refine(
        (val) => val === undefined || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        { message: t("referenceEmailValidationError") }
      ),
    referencePhone: z
      .string()
      .transform((val) => (val === "" ? undefined : val))
      .optional()
      .refine((val) => val === undefined || val.length >= 10, {
        message: t("referencePhoneValidationError"),
      }),
  });

  type FormValues = z.infer<typeof formSchema>;
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      position: "",
      name: "",
      phone: "",
      email: "",
      address: "",
      previousPosition: "",
      previousCompany: "",
      expectedCTC: "",
      yearsOfExperience: "",
      referenceName: "",
      referenceCompany: "",
      referencePosition: "",
      referenceEmail: "",
      referencePhone: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setResumeFile(null);
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    const tStrings = {
      subject: t("subject", { position: data.position }),
      body: t("body", {
        name: data.name,
        phone: data.phone,
        email: data.email,
        address: data.address,
        position: data.position,
        experience: data.yearsOfExperience,
        expectedCTC: data.expectedCTC,
        referenceName: data.referenceName || "",
        referenceCompany: data.referenceCompany || "",
        referencePosition: data.referencePosition || "",
        referenceEmail: data.referenceEmail || "",
        referencePhone: data.referencePhone || "",
      }),
      successMessage: t("successMessage"),
      errorMessage: t("errorMessage"),
    };

    try {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined) {
          formData.append(key, value);
        }
      });

      if (resumeFile) {
        formData.append("resume", resumeFile);
      }

      formData.append("tStrings", JSON.stringify(tStrings));

      const response = await fetch("/api/career-email", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        alert(tStrings.errorMessage);
        throw new Error("Failed to send email");
      }

      alert(tStrings.successMessage);
      form.reset();
      setResumeFile(null);
    } catch (error) {
      console.error("Error:", error);
      alert(tStrings.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const positions = [
    t("position1"),
    t("position2"),
    t("position3"),
    t("position4"),
  ];

  return (
    <Card className="p-6 my-4 max-w-4xl mx-auto font-inter">
      <h3 className="text-6xl text-center font-bold font-spaceGrotesk">
        {t("title")}
      </h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold font-playfair">
              {t("positionInfo")}
            </h2>
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("positionLabel")}</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={t("positionPlaceholder")} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {positions.map((position) => (
                        <SelectItem key={position} value={position}>
                          {position}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold font-playfair">
              {t("personalInfo")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("nameLabel")}</FormLabel>
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
                    <FormLabel>{t("phoneLabel")}</FormLabel>
                    <FormControl>
                      <Input placeholder={t("phonePlaceholder")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("emailLabel")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("emailPlaceholder")}
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>{t("addressLabel")}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t("addressPlaceholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold font-playfair">
              {t("professionalInfo")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="previousPosition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("previousPositionLabel")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("previousPositionPlaceholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="previousCompany"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("previousCompanyLabel")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("previousCompanyPlaceholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="expectedCTC"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("expectedCTCLabel")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("expectedCTCPlaceholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="yearsOfExperience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("yearsOfExperienceLabel")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("yearsOfExperiencePlaceholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold font-playfair">
              {t("references")}
            </h2>
            <p className="text-sm text-gray-500 mb-4">{t("referencesNote")}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="referenceName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("referenceNameLabel")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("referenceNamePlaceholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="referenceCompany"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("referenceCompanyLabel")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("referenceCompanyPlaceholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="referencePosition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("referencePositionLabel")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("referencePositionPlaceholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="referenceEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("referenceEmailLabel")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("referenceEmailPlaceholder")}
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="referencePhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("referencePhoneLabel")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("referencePhonePlaceholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">{t("resumeUpload")}</h2>
            <div
              onDragOver={(e) => {
                e.preventDefault();
                e.stopPropagation();
                e.currentTarget.classList.add("border-blue-500", "bg-blue-50");
              }}
              onDragLeave={(e) => {
                e.preventDefault();
                e.stopPropagation();
                e.currentTarget.classList.remove(
                  "border-blue-500",
                  "bg-blue-50"
                );
              }}
              onDrop={(e) => {
                e.preventDefault();
                e.stopPropagation();
                e.currentTarget.classList.remove(
                  "border-blue-500",
                  "bg-blue-50"
                );
                if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                  setResumeFile(e.dataTransfer.files[0]);
                }
              }}
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 transition-colors duration-200 ease-in-out"
            >
              {!resumeFile ? (
                <div className="flex flex-col items-center justify-center space-y-2 cursor-pointer">
                  <Upload className="h-8 w-8 text-gray-400" />
                  <p className="text-sm text-gray-500 text-center">
                    {t("dragDrop")}
                  </p>
                  <label htmlFor="resume-upload">
                    <div className="mt-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        {t("selectFile")}
                      </Button>
                    </div>
                    <input
                      ref={fileInputRef}
                      id="resume-upload"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="sr-only"
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="text-xs text-gray-400 mt-2">
                    {t("supportedFormats")}
                  </p>
                </div>
              ) : (
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center space-x-2">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded bg-gray-200 flex items-center justify-center">
                        <span className="text-xs font-medium">
                          {resumeFile.name.split(".").pop()?.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {resumeFile.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={removeFile}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full font-spaceGrotesk"
              disabled={isSubmitting}
            >
              {isSubmitting ? t("submitting") : t("submit")}
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
}
