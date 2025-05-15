import UseModel from "@/components/3dmodel/UseModel";
import FadeUpWhenVisible from "@/components/animation/FadeUpWhenVisible";
import TypingHeader from "@/components/animation/TypingHeader";
import { notoThai, quicksand } from "@/utils/font";
import { ShieldCheck, Globe, Megaphone, Laptop, Smartphone, Brush, Server, Search, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedCard from "@/components/projectsection/AnimatedCard";
import SkillSection from "@/components/skillsection/SkillSection";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#131212] text-black dark:text-white">
      <section id="Home">
        <div className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center">
          {/* 3D background with gradient overlay */}
          <div className="absolute inset-0 z-0">
            <UseModel />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-transparent dark:from-[#131212]/80 dark:via-[#131212]/60 dark:to-transparent backdrop-blur-sm" />
          </div>
          {/* Content Centered */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center px-4 space-y-6 mx-auto">
              <FadeUpWhenVisible>
                <TypingHeader
                  className="text-4xl md:text-6xl font-bold mb-4"
                  words={[
                    'Welcome to my portfolio',
                    'Welcome to my website',
                    'Welcome to my projects',
                  ]}
                />
              </FadeUpWhenVisible>

              <FadeUpWhenVisible>
                <div className="flex justify-center">
                  <img
                    src="/img/profile/profile.png"
                    alt="profile"
                    className="w-48 aspect-square rounded-full object-cover shadow-lg mb-4"
                  />
                </div>
              </FadeUpWhenVisible>

              <FadeUpWhenVisible>
                <p className={`${notoThai.className} text-xl md:text-2xl mb-4`}>
                  รับออกแบบและสร้างเว็บไซต์ <span className={quicksand.className}>Landing Page</span>
                  <br /> ที่ดูดี ใช้งานง่าย และแสดงผลได้ดีบนทุกอุปกรณ์
                </p>
              </FadeUpWhenVisible>

              <FadeUpWhenVisible>
                <a
                  href="#Projects"
                  className={`${notoThai.className} border-animation text-center px-6 py-3 font-bold rounded-xl text-lg transition duration-300 hover:scale-[1.03]`}
                >
                  ชมผลงาน
                </a>
              </FadeUpWhenVisible>
            </div>
          </div>

        </div>
      </section>
      <section id="About Me" className={`${notoThai.className}`}>
        {/* Main Intro */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center w-full min-h-screen gap-8 p-8">
          {/* Content */}
          <div className="w-full md:w-1/2">
            <FadeUpWhenVisible>
              <h1 className={`${quicksand.className} text-4xl font-bold mb-6 text-center md:text-left`}>
                About Me
              </h1>
            </FadeUpWhenVisible>
            <FadeUpWhenVisible>
              <p className="text-lg mb-4 leading-relaxed">
                ชอบตกแต่งและออกแบบเว็บไซต์ให้ดูดีและตอบโจทย์ กำลังหาโอกาสรับงานเพื่อเก็บประสบการณ์และพัฒนาฝีมือให้ดียิ่งขึ้น จะพยายามทำทุกงานให้ออกมาดีครับ
              </p>
            </FadeUpWhenVisible>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <FadeUpWhenVisible>
              <img
                src="/img/profile/aboutme.png"
                alt="profile"
                className="w-[320px] h-auto rounded-xl shadow-2xl"
              />
            </FadeUpWhenVisible>
          </div>
        </div>

        {/* Content Sections */}
        <div className="p-8 space-y-20">
          {/* Section: Importance */}
          <section className="mb-15">
            <FadeUpWhenVisible>
              <h2 className="text-center text-4xl font-bold mb-10">
                ความสำคัญของการมีเว็บไซต์
              </h2>
            </FadeUpWhenVisible>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <ShieldCheck className="text-green-500 w-10 h-10" />,
                  text: 'ช่วยสร้างความน่าเชื่อถือให้กับแบรนด์และโปรโมทแบรนด์ไปในตัว',
                },
                {
                  icon: <Globe className="text-blue-400 w-10 h-10" />,
                  text: 'สามารถเข้าถึงลูกค้าได้ตลอดเวลา ลูกค้าสามารถหาข้อมูลเกี่ยวกับแบรนด์ได้ง่าย',
                },
                {
                  icon: <Megaphone className="text-yellow-400 w-10 h-10" />,
                  text: 'เป็นการเพิ่มช่องทางในการโปรโมทสินค้าของแบรนด์',
                },
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="hover:scale-[1.03] duration-500 ease-out transition-transform hover:shadow-xl"
                >
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    {item.icon}
                    <p className="text-lg">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Section: Process */}
          <section className="mb-15">
            <FadeUpWhenVisible>
              <h2 className="text-center text-4xl font-bold mb-10">
                ขั้นตอนการจ้าง
              </h2>
            </FadeUpWhenVisible>

            <div className="space-y-6 max-w-3xl mx-auto">
              {[
                'อธิบายภาพรวมข้อมูลเกี่ยวกับเว็บไซต์ที่ลูกค้าต้องการ',
                'ส่งข้อมูลและรูปภาพรายละเอียด เช่น ข้อความ, ภาพสินค้า, โลโก้ ฯลฯ',
                'ผมจะออกแบบเว็บไซต์ตัวอย่างตามข้อมูล ใช้เวลาประมาณ 1–5 วันขึ้นอยู่กับจำนวนหน้า',
                'ลูกค้าตรวจสอบเว็บไซต์และแจ้งแก้ไขได้เต็มที่จนกว่าจะพอใจ',
                'เมื่อเสร็จสมบูรณ์ จะอัปโหลดขึ้นโฮสติ้ง พร้อมใช้งานจริง',
              ].map((text, index) => (
                <div
                  key={index}
                  className="relative pl-12 py-4 border rounded-lg hover:scale-[1.03] duration-500 ease-out transition-transform hover:shadow-lg"
                >
                  <div className="absolute bg-black dark:bg-white text-white dark:text-black left-4 top-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-lg">{text}</p>
                </div>

              ))}
            </div>
          </section>

          {/* Section: Services */}
          <section className="mb-15">
            <FadeUpWhenVisible>
              <h2 className="text-center text-4xl font-bold mb-10">
                สิ่งที่ลูกค้าจะได้รับ
              </h2>
            </FadeUpWhenVisible>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
              {[
                {
                  icon: <Laptop className="text-primary w-6 h-6" />,
                  title: <>เว็บไซต์ <span className="font-bold">(Landing Page)</span></>,
                  desc: <>รับออกแบบเว็บไซต์ Landing Page หน้าเดียวหรือหลายหน้าเหมาะสำหรับโปรโมทสินค้า บริการ หรือพอร์ตโฟลิโอส่วนตัว</>,
                },
                {
                  icon: <Smartphone className="text-primary w-6 h-6" />,
                  title: <>รองรับทุกอุปกรณ์ <span className="font-bold">(Responsive Design)</span></>,
                  desc: 'เว็บไซต์แสดงผลได้ดีทุกหน้าจอ ทั้งมือถือ แท็บเล็ต และคอมพิวเตอร์',
                },
                {
                  icon: <Brush className="text-primary w-6 h-6" />,
                  title: 'ดีไซน์สวยงาม ตามแบรนด์ของคุณ',
                  desc: 'ออกแบบเว็บไซต์ให้เข้ากับโทนสี ฟอนต์ และภาพลักษณ์ของแบรนด์',
                },
                {
                  icon: <Server className="text-primary w-6 h-6" />,
                  title: 'บริการโฮสต์เว็บไซต์พร้อมใช้งาน',
                  desc: 'ดูแลเรื่องโฮสติ้งให้พร้อมออนไลน์ทันที ปลอดภัย เสถียร ใช้งานได้จริง',
                },
                {
                  icon: <Search className="text-primary w-6 h-6" />,
                  title: 'ปรับ SEO เบื้องต้นให้ค้นเจอบน Google',
                  desc: 'ช่วยตั้งค่า SEO On-page ให้เว็บไซต์มีโอกาสติดหน้าแรก Google เช่น ตั้งหัวข้อ คำอธิบาย และคีย์เวิร์ดเบื้องต้น',
                },
                {
                  icon: <Tag className="text-primary w-6 h-6" />,
                  title: 'ราคาเริ่มต้นที่ 1,500 บาท',
                  desc: 'เริ่มต้นที่ 1,500 บาท รวมโฮสติ้ง ถ้ามีหลายหน้าเพิ่มหน้าละ 500 บาท หรือแล้วแต่ความซับซ้อนของเนื้อหา',
                },

              ].map((item, index) => (
                <FadeUpWhenVisible key={index}>
                  <Card className="sm:min-h-[250px] md:min-h-[330px] lg:min-h-[250px] hover:scale-[1.03] duration-500 ease-out transition-transform hover:shadow-lg duration-300">
                    <CardHeader className="flex flex-row items-center gap-4">
                      {item.icon}
                      <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-lg">{item.desc}</CardContent>
                  </Card>
                </FadeUpWhenVisible>
              ))}
            </div>
          </section>

          {/* CTA Button */}
          <div className="flex justify-center items-center mb-15">
            <Link
                href="https://fastwork.co/user/krisapat"
                className={`${notoThai.className} border-animation text-center px-6 py-3 font-bold rounded-xl text-lg transition duration-300 hover:scale-[1.03]`}
              >
                เริ่มต้น Landing Page ของคุณ
              </Link>
          </div>
        </div>
      </section>
      <section id="Projects" className="py-16 px-4 md:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>
        <div className="flex flex-col items-center gap-10">
          <AnimatedCard
            imageUrl="/img/project/1.png"
            name="Currensa"
            title="เป็นเว็ปไซต์เกี่ยวกับการดูกราฟสินทรัพย์แบบเรียลไทม์และมีเครื่องมือคำนวณเกี่ยวกับการเงิน"
            linkUrl="https://currensa.vercel.app/"
          />
          <AnimatedCard
            imageUrl="/img/project/2.png"
            name="Anniversary"
            title="เป็นเว็ปไซต์ที่เกี่ยวกับการฉลองวันครบรอบให้คนสำคัญ"
            linkUrl="https://anniversary-3jyu.vercel.app/"
          />
          <AnimatedCard
            imageUrl="/img/project/3.png"
            name="Tokyo Table"
            title="เป็นเว็ปไซต์ที่เกี่ยวกับการโปรโมทร้านอาหารญี่ปุ่น"
            linkUrl="https://portfolio3-beta-ten.vercel.app/"
          />
        </div>
      </section>
      <section id="Skills">
        <SkillSection />
      </section>
    </main>
  );
}
