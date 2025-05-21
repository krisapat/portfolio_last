'use client'

import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { ChevronLeft, ChevronRight, Laptop, Smartphone, Brush, Server, Search, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import 'swiper/css'
import 'swiper/css/navigation'

export default function ServiceSwiper() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const services = [
    {
      icon: <Laptop className="text-primary w-6 h-6" />,
      title: <>เว็บไซต์ <span className="font-bold">(Landing Page)</span></>,
      desc: <>รับออกแบบเว็บไซต์ Landing Page หน้าเดียวหรือหลายหน้า เหมาะสำหรับโปรโมทสินค้า บริการ หรือพอร์ตโฟลิโอส่วนตัว</>,
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
  ]

  return (
    <div className="w-full relative px-6">
      {/* Navigation Buttons */}
      <Button
        ref={prevRef}
        variant="ghost"
        size="icon"
        className="absolute top-1/2 left-0 -translate-y-1/2 z-10 bg-white/80 hover:bg-black text-black hover:text-white rounded-full shadow"
      >
        <ChevronLeft />
      </Button>
      <Button
        ref={nextRef}
        variant="ghost"
        size="icon"
        className="absolute top-1/2 right-0 -translate-y-1/2 z-10 bg-white/80 hover:bg-black text-black hover:text-white rounded-full shadow"
      >
        <ChevronRight />
      </Button>

      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{
          prevEl: prevRef.current!,
          nextEl: nextRef.current!,
        }}
        onBeforeInit={(swiper) => {
          if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
          }
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {services.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="h-[300px] flex items-center justify-center">
              <Card className="min-h-[280px] hover:scale-[1.03] transition-transform duration-500 ease-out hover:shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4">
                  {item.icon}
                  <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-lg">{item.desc}</CardContent>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination */}
      <div className="mt-4 flex justify-center gap-2">
        {services.map((_, idx) => (
          <div
            key={idx}
            className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-6 bg-black dark:bg-white' : 'w-2.5 bg-gray-400'
              }`}
          />
        ))}
      </div>
    </div>
  )
}
