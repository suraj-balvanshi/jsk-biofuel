"use client";

import type React from "react";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Upload, X } from "lucide-react";

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

import { useRef } from "react";

const formSchema = z.object({
  position: z.string({
    required_error: "Please select a position",
  }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  address: z.string().min(5, { message: "Please enter your full address" }),
  previousPosition: z
    .string()
    .min(2, { message: "Please enter your previous position" }),
  previousCompany: z
    .string()
    .min(2, { message: "Please enter your previous company" }),
  expectedCTC: z.string().min(1, { message: "Please enter your expected CTC" }),
  yearsOfExperience: z
    .string()
    .min(1, { message: "Please enter your years of experience" }),
  // Add reference fields
  referenceName: z
    .string()
    .min(2, { message: "Reference name must be at least 2 characters" })
    .optional(),
  referenceCompany: z
    .string()
    .min(2, { message: "Reference company must be at least 2 characters" })
    .optional(),
  referencePosition: z
    .string()
    .min(2, { message: "Reference position must be at least 2 characters" })
    .optional(),
  referenceEmail: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .optional(),
  referencePhone: z
    .string()
    .min(10, { message: "Please enter a valid phone number" })
    .optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function PerfectCareer() {
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
      // Add reference fields default values
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

    try {
      try {
        const formData = new FormData();

        // Append all form values
        Object.entries(data).forEach(([key, value]) => {
          if (value !== undefined) {
            formData.append(key, value);
          }
        });

        // Append the resume file
        if (resumeFile) {
          formData.append("resume", resumeFile);
        }

        const response = await fetch("/api/career-email", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Failed to send email");
        }

        const result = await response.json();
        alert("Application submitted successfully!");

        form.reset();
        setResumeFile(null);
      } catch (error) {
        console.error("Error:", error);
        alert(
          "There was an error submitting your application. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "There was an error submitting your application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const positions = [
    "Sales Manager",
    "Chemical Engineer",
    "Mechanical Engineer",
    "CRE",
  ];

  return (
    <Card className="p-6 my-4 max-w-4xl mx-auto">
      <h3 className="text-6xl text-center font-bold">Career</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Position Information</h2>
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Position Applying For</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a position" />
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
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Rajesh Kumar" {...field} />
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
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+91 9876543210" {...field} />
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
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="rajesh.kumar@example.com"
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
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="123 MG Road, Bengaluru, Karnataka, 560001"
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
            <h2 className="text-xl font-semibold">Professional Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="previousPosition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Previous Position</FormLabel>
                    <FormControl>
                      <Input placeholder="Chemical Engineer" {...field} />
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
                    <FormLabel>Previous Company</FormLabel>
                    <FormControl>
                      <Input placeholder="Reliance Industries" {...field} />
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
                    <FormLabel>Expected CTC</FormLabel>
                    <FormControl>
                      <Input placeholder="₹12,00,000" {...field} />
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
                    <FormLabel>Years of Experience</FormLabel>
                    <FormControl>
                      <Input placeholder="5" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">References</h2>
            <p className="text-sm text-gray-500 mb-4">
              Please provide a professional reference (optional)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="referenceName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reference Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Anil Sharma" {...field} />
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
                    <FormLabel>Reference Company</FormLabel>
                    <FormControl>
                      <Input placeholder="Tata Chemicals" {...field} />
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
                    <FormLabel>Reference Position</FormLabel>
                    <FormControl>
                      <Input placeholder="Senior Manager" {...field} />
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
                    <FormLabel>Reference Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="anil.sharma@example.com"
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
                    <FormLabel>Reference Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="+91 9876543211" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Resume Upload</h2>
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
                    Drag and drop your resume here <br /> or click to browse
                  </p>
                  <label htmlFor="resume-upload">
                    <div className="mt-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        Select File
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
                    Supported formats: PDF, DOC, DOCX (Max 5MB)
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
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
}
