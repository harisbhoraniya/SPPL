// "use client";

// import { BodyCopyText } from "@/components/views/BodyCopyText";
// import { HeaderText } from "@/components/views/HeaderText";
// import MainPage from "@/components/views/MainPage";
// import ContainerSection from "@/components/views/ContainerSection";
// import BannerImage from "@/components/views/BannerImage";
// import AnimatedButton from "@/components/views/AnimatedButton";
// import { useToast } from "@/hooks/use-toast";
// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function OEMCollaborators() {
//   const [formData, setFormData] = useState({
//     name: "",
//     company: "",
//     Phone: "",
//     email: "",
//     message: "",
//   });

//   const { toast } = useToast();
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!formData.name.trim()) {
//       toast({
//         variant: "destructive",
//         title: "Name Required",
//         description: "Please enter your name.",
//       });
//       return;
//     }
//     if (!formData.company.trim()) {
//       toast({
//         variant: "destructive",
//         title: "Company Name Required",
//         description: "Please enter your company name.",
//       });
//       return;
//     }

//     if (!formData.Phone.trim()) {
//       toast({
//         variant: "destructive",
//         title: "Phone Number Required",
//         description: "Please enter your phone number.",
//       });
//       return;
//     }

//     const phoneRegex = /^[\d+\-\s]+$/;
//     if (!phoneRegex.test(formData.Phone)) {
//       toast({
//         variant: "destructive",
//         title: "Invalid Phone Number",
//         description: "Phone number should contain only numbers.",
//       });
//       return;
//     }

//     if (!formData.email.trim()) {
//       toast({
//         variant: "destructive",
//         title: "Email Required",
//         description: "Please enter your email address.",
//       });
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       toast({
//         variant: "destructive",
//         title: "Invalid Email",
//         description: "Please enter a valid email address.",
//       });
//       return;
//     }

//     if (!formData.message.trim()) {
//       toast({
//         variant: "destructive",
//         title: "Message Required",
//         description: "Please enter your message.",
//       });
//       return;
//     }

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         access_key: "8586bec1-f0b2-4c32-89c5-ccb765af1e15",
//         subject: "New OEM Collaboration Enquiry",
//         ...formData,
//       }),
//     });

//     const result = await response.json();
//     if (result.success) {
//       toast({
//         variant: "success",
//         title: "Form Submitted Successfully",
//         description: "Thank you for your interest! Our team will get back to you soon.",
//       });
//       setFormData({ name: "", company: "", Phone: "", email: "", message: "" });
//     } else {
//       setError("Failed to send message. Please try again.");
//       toast({
//         variant: "destructive",
//         title: "Submission Failed",
//         description: "There was an error submitting the form. Please try again later.",
//       });
//     }
//   };

//   return (
//     <MainPage>
//       <BannerImage
//         image={"/img/OEM Collaborators/OEM_Collaborators_Banner.jpg"}
//         mobileImage={"/img/OEM Collaborators/mob/OEM_Collaborators_Banner.jpg"}
//         text={"OEM COLLABORATORS"}
//       />

//       <ContainerSection className={"mt-16"}>
//         {/* <HeaderText>OEM COLLABORATORS</HeaderText> */}

//         <BodyCopyText className={"space-y-4"}>
//           <div className="space-y-2">
//             <p className="font-semibold">1. OVERVIEW</p>
//             <p>
//               Safety Projects Pvt Ltd works closely with Original Equipment Manufacturers (OEMs) across
//               the safety and industrial equipment space to deliver reliable, high-quality solutions to
//               industries such as Construction and Infrastructure, Oil and Gas, Telecommunication,
//               Pharmaceuticals, Power Generation, and Defence. Our OEM collaborations allow us to bring
//               the best products and technologies to our clients while offering our partners access to a
//               strong distribution network and deep domain expertise in Occupational Safety and Health.
//             </p>
//           </div>
//         </BodyCopyText>

//         <BodyCopyText className={"space-y-4"}>
//           <div className="space-y-2">
//             <p className="font-semibold">2. WHY PARTNER WITH US</p>
//           </div>
//           <div>
//             <ul className="list-disc space-y-2">
//               <li>
//                 <span className="font-semibold">Pan-India Reach.</span> A well-established distribution
//                 and service network across major industrial hubs in India.
//               </li>
//               <li>
//                 <span className="font-semibold">Industry Expertise.</span> Over two decades of experience
//                 as a trusted solution provider in Occupational Safety and Health.
//               </li>
//               <li>
//                 <span className="font-semibold">Application Support.</span> A dedicated technical team
//                 that works with clients to identify the right product fit for their operations.
//               </li>
//               <li>
//                 <span className="font-semibold">After-Sales Service.</span> Strong servicing and support
//                 infrastructure to maintain long-term customer relationships.
//               </li>
//             </ul>
//           </div>
//         </BodyCopyText>

//         <BodyCopyText className={"space-y-4"}>
//           <div className="space-y-2">
//             <p className="font-semibold">3. WHAT WE OFFER OUR OEM PARTNERS</p>
//           </div>
//           <div>
//             <ul className="list-disc space-y-2">
//               <li>Access to a wide base of enterprise and institutional clients.</li>
//               <li>Support with product certification, compliance, and market entry in India.</li>
//               <li>Dedicated sales and marketing efforts to promote partner products.</li>
//               <li>Warehousing, logistics, and after-sales servicing support.</li>
//             </ul>
//           </div>
//         </BodyCopyText>

//         <BodyCopyText className={"space-y-4"}>
//           <div className="space-y-2">
//             <p className="font-semibold">4. HOW TO BECOME A COLLABORATOR</p>
//             <p>
//               If you are an OEM looking to expand your reach in India through a trusted, safety-focused
//               partner, we would love to hear from you. Fill out the form below with details about your
//               company and products, and our business development team will get in touch with you.
//             </p>
//           </div>
//         </BodyCopyText>
//       </ContainerSection>

//       <ContainerSection>
//         <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden p-4 md:p-8 lg:p-16 space-y-4 mb-20">
//           <HeaderText className={"text-[#d42225] text-center"}>
//             Become an OEM Collaborator
//           </HeaderText>
//           <BodyCopyText className={"text-gray-600 text-center"}>
//             Tell us about your company and products, and let's explore working together.
//           </BodyCopyText>
//           <motion.form
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1 }}
//             onSubmit={handleSubmit}
//             className="space-y-4 max-w-2xl mx-auto w-full"
//           >
//             <div>
//               <label className="block text-gray-600">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d42225]"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600">Company Name</label>
//               <input
//                 type="text"
//                 name="company"
//                 placeholder="Your Company Name"
//                 value={formData.company}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d42225]"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600">Phone</label>
//               <input
//                 type="text"
//                 name="Phone"
//                 placeholder="Your Phone Number"
//                 value={formData.Phone}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d42225]"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600">Email</label>
//               <input
//                 type="text"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d42225]"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600">Message</label>
//               <textarea
//                 name="message"
//                 rows={4}
//                 placeholder="Tell us about your products and collaboration interest"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d42225]"
//               ></textarea>
//             </div>
//             <div className="w-full">
//               <AnimatedButton text={"Send Enquiry"} className={"duration-1000"} />
//             </div>
//           </motion.form>
//         </div>
//       </ContainerSection>
//     </MainPage>
//   );
// }


"use client";

import { BodyCopyText } from "@/components/views/BodyCopyText";
import { HeaderText } from "@/components/views/HeaderText";
import MainPage from "@/components/views/MainPage";
import ContainerSection from "@/components/views/ContainerSection";
import BannerImage from "@/components/views/BannerImage";
import AnimatedButton from "@/components/views/AnimatedButton";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useState } from "react";

export default function OEMCollaborators() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    Phone: "",
    email: "",
    message: "",
  });

  const { toast } = useToast();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name.trim()) {
      toast({
        variant: "destructive",
        title: "Name Required",
        description: "Please enter your name.",
      });
      return;
    }
    if (!formData.company.trim()) {
      toast({
        variant: "destructive",
        title: "Company Name Required",
        description: "Please enter your company name.",
      });
      return;
    }

    if (!formData.Phone.trim()) {
      toast({
        variant: "destructive",
        title: "Phone Number Required",
        description: "Please enter your phone number.",
      });
      return;
    }

    const phoneRegex = /^[\d+\-\s]+$/;
    if (!phoneRegex.test(formData.Phone)) {
      toast({
        variant: "destructive",
        title: "Invalid Phone Number",
        description: "Phone number should contain only numbers.",
      });
      return;
    }

    if (!formData.email.trim()) {
      toast({
        variant: "destructive",
        title: "Email Required",
        description: "Please enter your email address.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        variant: "destructive",
        title: "Invalid Email",
        description: "Please enter a valid email address.",
      });
      return;
    }

    if (!formData.message.trim()) {
      toast({
        variant: "destructive",
        title: "Message Required",
        description: "Please enter your message.",
      });
      return;
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "8586bec1-f0b2-4c32-89c5-ccb765af1e15",
        subject: "New OEM Collaboration Enquiry",
        ...formData,
      }),
    });

    const result = await response.json();
    if (result.success) {
      toast({
        variant: "success",
        title: "Form Submitted Successfully",
        description: "Thank you for your interest! Our team will get back to you soon.",
      });
      setFormData({ name: "", company: "", Phone: "", email: "", message: "" });
    } else {
      setError("Failed to send message. Please try again.");
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was an error submitting the form. Please try again later.",
      });
    }
  };

  return (
    <MainPage >
      <BannerImage
        image={"/img/oem_banner.png"}
        mobileImage={"/img/oem_mob_banner.jpg"}
        text={"OEM & Collaboration"}
      />

      <ContainerSection >
        {/* <HeaderText>OEM COLLABORATORS</HeaderText> */}

        <BodyCopyText className="space-y-6 w-full lg:w-4/5 lg:mx-auto text-center">
          <div className="space-y-2">
            {/* <p className="font-semibold"> OVERVIEW</p> */}
            <p>
              At Safety Projects, we provide comprehensive OEM and contract manufacturing solutions
              for businesses seeking a reliable engineering and manufacturing partner. Today, Safety
              Projects manufactures construction fall protection systems, engineered protection
              systems for the industrial applications, precision industrial machine spare parts, and a
              broad portfolio of custom-engineered products for customers worldwide. From the product
              ideation and design to precision manufacturing and global delivery, we support
              the organizations with fully customized solutions tailored to their technical, commercial,
              and branding requirements.
            </p>
            <p>
              Our capabilities extend far beyond manufacturing. Backed by a dedicated R&D and
              engineering team, we collaborate closely with customers to transform ideas into
              market-ready products through innovative design, engineering, prototyping, and
              precision manufacturing. Whether you have a concept, an existing prototype, or complete
              engineering drawings, we provide the technical expertise and manufacturing excellence
              needed to bring your vision to life.
            </p>
            <p>
              We offer flexible engagement models designed around your business needs. Choose from
              OEM manufacturing of our proven products under your brand, private-label solutions with
              customized branding, labelling, and packaging, or fully bespoke product development from
              concept through production. Our lean manufacturing practices, robust production
              capacity, stringent quality assurance processes, and adherence to applicable regional
              and international standards ensure consistent quality at every stage.
            </p>
            <p>
              Every partnership is built on trust, transparency, and long-term collaboration. To
              protect our customers' innovations, we establish appropriate confidentiality and
              intellectual property protection agreements wherever required, ensuring complete peace
              of mind throughout the development and manufacturing process. Combined with end-to-end
              logistics and worldwide delivery capabilities, we serve as a dependable extension of
              your engineering and manufacturing team, helping you bring exceptional products to
              market with confidence.
            </p>
          </div>
        </BodyCopyText>

        {/* <BodyCopyText className={"space-y-4"}>
          <div className="space-y-2">
            <p className="font-semibold">2. WHY PARTNER WITH US</p>
          </div>
          <div>
            <ul className="list-disc space-y-2">
              <li>
                <span className="font-semibold">Pan-India Reach.</span> A well-established distribution
                and service network across major industrial hubs in India.
              </li>
              <li>
                <span className="font-semibold">Industry Expertise.</span> Over two decades of experience
                as a trusted solution provider in Occupational Safety and Health.
              </li>
              <li>
                <span className="font-semibold">Application Support.</span> A dedicated technical team
                that works with clients to identify the right product fit for their operations.
              </li>
              <li>
                <span className="font-semibold">After-Sales Service.</span> Strong servicing and support
                infrastructure to maintain long-term customer relationships.
              </li>
            </ul>
          </div>
        </BodyCopyText>

        <BodyCopyText className={"space-y-4"}>
          <div className="space-y-2">
            <p className="font-semibold">3. WHAT WE OFFER OUR OEM PARTNERS</p>
          </div>
          <div>
            <ul className="list-disc space-y-2">
              <li>Access to a wide base of enterprise and institutional clients.</li>
              <li>Support with product certification, compliance, and market entry in India.</li>
              <li>Dedicated sales and marketing efforts to promote partner products.</li>
              <li>Warehousing, logistics, and after-sales servicing support.</li>
            </ul>
          </div>
        </BodyCopyText>

        <BodyCopyText className={"space-y-4"}>
          <div className="space-y-2">
            <p className="font-semibold">4. HOW TO BECOME A COLLABORATOR</p>
            <p>
              If you are an OEM looking to expand your reach in India through a trusted, safety-focused
              partner, we would love to hear from you. Fill out the form below with details about your
              company and products, and our business development team will get in touch with you.
            </p>
          </div>
        </BodyCopyText> */}
      </ContainerSection>

      <ContainerSection>
        <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden p-4 md:p-8 lg:p-16 space-y-4 ">
          <HeaderText className={"text-[#d42225] text-center"}>
            Let's Collaborate
          </HeaderText>
          <BodyCopyText className={"text-gray-600 text-center"}>
            Tell us about your company and products, and let's explore working together.
          </BodyCopyText>
          <motion.form
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            onSubmit={handleSubmit}
            className="space-y-4 max-w-2xl mx-auto w-full"
          >
            <div>
              <label className="block text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d42225]"
              />
            </div>
            <div>
              <label className="block text-gray-600">Company Name</label>
              <input
                type="text"
                name="company"
                placeholder="Your Company Name"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d42225]"
              />
            </div>
            <div>
              <label className="block text-gray-600">Phone</label>
              <input
                type="text"
                name="Phone"
                placeholder="Your Phone Number"
                value={formData.Phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d42225]"
              />
            </div>
            <div>
              <label className="block text-gray-600">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d42225]"
              />
            </div>
            <div>
              <label className="block text-gray-600">Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your products and collaboration interest"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d42225]"
              ></textarea>
            </div>
            <div className="w-full">
              <AnimatedButton text={"Send Enquiry"} className={"duration-1000"} />
            </div>
          </motion.form>
        </div>
      </ContainerSection>
    </MainPage>
  );
}