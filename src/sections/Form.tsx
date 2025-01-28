"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { Textarea } from "@/components/textarea";
import starImage from "@/assets/star.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { sendToTelegram } from "@/actions/sendToTelegram";

export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    }

    try {
      const result = await sendToTelegram(data)
      if (!result.success) {
        throw new Error(result.message)
      }
      setTimeout(() => setSubmitted(false), 3000)
    } catch (err) {
      setError("Failed to send message. Please try again.")
      setSubmitted(false)
    }
  }

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-white w-full py-12 md:py-24 lg:py-32 overflow-x-clip"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="section-heading relative">
            <motion.img
              src={starImage.src}
              alt="star image"
              width={360}
              className="absolute -left-[420px] -top-[137px]"
              style={{
                translateY,
              }}
            />
            <h2 className="section-title">Qo`shimcha ma`lumot</h2>
            <p className="section-desc mt-5">
              Qo`shimcha savollar bo`lsa quyidagi formani to`ldiring yoki biz
              bilan bog`laning
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-[700px] mt-8">
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="name">Ismingiz</Label>
              <Input
                id="name"
                placeholder="Ism"
                required
                className="shadow-[0_7px_14px_#eaeaea]"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Telefon raqamingiz</Label>
              <Input placeholder="+998" id="phone" type="tel" required />
            </div>
            {/* <div className="grid gap-2">
              <Label>Qaysi kursga qiziqyapsiz?</Label>
              <RadioGroup defaultValue="kompyuter" className="grid gap-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="kompyuter" value="kompyuter" />
                  <Label htmlFor="kompyuter">Kompyuter savodxonligi</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="frontend" value="frontend" />
                  <Label htmlFor="frontend">Front-end</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="backend" value="backend" />
                  <Label htmlFor="backend">Back-end</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="foundation" value="foundation" />
                  <Label htmlFor="foundation">Foundation</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="cyber" value="cyber" />
                  <Label htmlFor="cyber">Kiber xavfsizlik</Label>
                </div>
              </RadioGroup>
            </div> */}
            <div className="grid gap-2">
              <Label htmlFor="message">Qo`shimcha ma`lumot</Label>
              <Textarea placeholder="Izoh..." id="message" />
            </div>
            <Button
              type="submit"
              className="w-full bg-black text-white hover:bg-gray-800"
            >
              {submitted ? (
                <span className="flex items-center justify-center gap-2">
                  <Check className="h-4 w-4" />
                  Yuborildi
                </span>
              ) : (
                "Yuborish"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
