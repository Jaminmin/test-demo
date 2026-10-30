import React, { useState } from "react";
import {
  Calendar,
  Building2,
  Cpu,
  TrendingUp,
  Award,
  Users,
  Factory,
  Globe2,
  ChevronRight,
  Briefcase,
  Layers,
  ShieldCheck,
  Menu,
  X,
  ExternalLink,
  ZoomIn,
  Sparkles,
  Info,
} from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedTimelineEra, setSelectedTimelineEra] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    year: string;
    caption: string;
    source?: string;
  } | null>(null);

  // ข้อมูล Interactive Timeline
  const timelineEras = [
    {
      year: "2495",
      title: "ก่อตั้งบริษัท สยามกลการ จำกัด",
      subtitle: "ก้าวแรกของ ดร.ถาวร พรประภา จากการค้าของเก่าสู่ผู้แทนจำหน่ายต่างประเทศรายแรกของนิสสัน",
      tag: "จุดเริ่มต้น & วิสัยทัศน์",
      desc: "4 กันยายน พ.ศ. 2495 ดร.ถาวร พรประภา (ขณะอายุ 36 ปี) ก่อตั้งบริษัท สยามกลการ จำกัด บริเวณถนนพระราม 1 ปทุมวัน หลังตกผลึกทางความคิดจากการเดินทางเยือนประเทศญี่ปุ่นว่า 'สินค้าใหม่เปรียบเสมือนน้ำในบ่อที่ไม่มีวันหมด' สยามกลการได้รับการแต่งตั้งเป็นตัวแทนจำหน่ายรถยนต์ นิสสัน–ดัทสัน รายแรกนอกประเทศญี่ปุ่น",
    },
    {
      year: "2505",
      title: "กำเนิดโรงงานประกอบรถยนต์แห่งแรก",
      subtitle: "บริษัท สยามกลการและนิสสัน จำกัด (ซอยศรีจันทร์ ถนนสุขุมวิท 67)",
      tag: "รากฐานการผลิตจริง",
      desc: "ร่วมทุนกับนิสสันตั้งโรงงานประกอบรถยนต์แห่งแรกขึ้น มีพนักงานบุกเบิก 120 คน กำลังการผลิตเริ่มต้น 4 คันต่อวัน ประกอบรถยนต์นั่งยอดนิยมอย่าง Datsun Bluebird วางรากฐานวัฒนธรรมช่างเทคนิค ฝีมือแรงงาน และระบบการควบคุมคุณภาพมาตรฐานวิศวกรรมสากล",
    },
    {
      year: "2512–2515",
      title: "นโยบาย Local Content & ตราตั้งพระราชทาน",
      subtitle: "กำเนิดอุตสาหกรรมชิ้นส่วนยานยนต์ในประเทศ",
      tag: "นโยบายรัฐ & เกียรติประวัติ",
      desc: "พ.ศ. 2512 รัฐบาลออกกฎหมายกำหนดให้รถยนต์ที่ประกอบในประเทศต้องใช้ชิ้นส่วนที่ผลิตในประเทศไม่น้อยกว่า 25% สยามกลการจึงดึงยักษ์ใหญ่ชิ้นส่วนระดับโลกมาร่วมทุนในไทยอย่างต่อเนื่อง ต่อมาในวันที่ 19 มิถุนายน พ.ศ. 2515 สยามกลการได้รับพระราชทานตราตั้ง 'ครุฑ' อันสะท้อนถึงความซื่อสัตย์สุจริตและความมั่นคง",
    },
    {
      year: "2528–2540",
      title: "Plaza Accord และยุคส่งออกยานยนต์",
      subtitle: "เงินเยนแข็งค่า การเปิดเสรีอุตสาหกรรม และก้าวสู่ศูนย์กลางระดับภูมิภาค",
      tag: "ขยายตัว & สู่ตลาดโลก",
      desc: "ข้อตกลง Plaza Accord (พ.ศ. 2528) ผลักดันให้เงินเยนแข็งค่าอย่างรวดเร็ว บริษัทญี่ปุ่นจึงย้ายฐานการผลิตมายังไทยอย่างมหาศาล สยามกลการขยายโรงงานสู่ศูนย์อุตสาหกรรมบางนา-ตราด กม.21 และเมื่อภาครัฐเปิดเสรีอุตสาหกรรมรถยนต์ช่วงต้นทศวรรษ 2530 ยอดผลิตพุ่งทะยานจนไทยเริ่มส่งออกรถยนต์สำเร็จรูปสู่ตลาดโลก",
    },
  ];

  // คลังภาพประวัติศาสตร์ (Historic Image Gallery)
  const archivePhotos = [
    {
      src: "./images/thaworn-phornprapha.jpg",
      title: "ดร.ถาวร พรประภา (พ.ศ. 2459–2544)",
      year: "พ.ศ. 2495",
      caption: "ผู้ก่อตั้งกลุ่มบริษัท สยามกลการ จำกัด ผู้นำทางวิสัยทัศน์ที่นำเข้ารถยนต์นิสสัน–ดัทสัน และผลักดันการสร้างโรงงานประกอบรถยนต์และโรงงานชิ้นส่วนรายแรกๆ ของไทย",
      source: "เอกสารประวัติศาสตร์สยามกลการ / จดหมายเหตุตระกูลพรประภา",
    },
    {
      src: "./images/siam-motors-hq-building.jpg",
      title: "อาคารสำนักงานใหญ่ สยามกลการ ปทุมวัน",
      year: "พ.ศ. 2500 ต้นๆ",
      caption: "อาคารสำนักงานใหญ่ บริษัท สยามกลการ จำกัด ถนนพระราม 1 ปทุมวัน ด้านหน้ามีรถยนต์ Datsun จอดเรียงราย และด้านบนประดับตราตั้งพระราชทานครุฑอันทรงเกียรติ",
      source: "จดหมายเหตุสยามกลการ ถนนพระราม 1 (ตราตั้งพระราชทานครุฑ 19 มิ.ย. 2515)",
    },
    {
      src: "./images/sukhumvit-assembly-factory.jpg",
      title: "ซุ้มประตูโรงงานประกอบรถยนต์ สยามกลการและนิสสัน",
      year: "พ.ศ. 2505",
      caption: "โรงงานประกอบรถยนต์แห่งแรก ซอยศรีจันทร์ ถนนสุขุมวิท ในภาพคือรถยนต์ Datsun Bluebird รุ่นแรกที่ประกอบเสร็จสมบูรณ์กำลังวิ่งลอดซุ้มประตูโรงงานออกสู่ท้องถนน",
      source: "จดหมายเหตุโรงงานประกอบรถยนต์ สยามกลการและนิสสัน ซอยศรีจันทร์ สุขุมวิท 67",
    },
    {
      src: "./images/datsun-bluebird.jpg",
      title: "Datsun Bluebird (P312 Series)",
      year: "พ.ศ. 2505",
      caption: "รถเก๋งยอดนิยมในตำนานของคนไทยยุค 2500 รถยนต์นั่งรุ่นแรกๆ ที่ประกอบขึ้น ณ โรงงานสยามกลการและนิสสัน ซอยศรีจันทร์ สุขุมวิท โดดเด่นด้วยความทนทานและประหยัดน้ำมัน",
      source: "Nissan Heritage Collection / คลังภาพประวัติศาสตร์ยานยนต์คลาสสิก",
    },
    {
      src: "./images/datsun-620.jpg",
      title: "Datsun 620 หรือ 'ดัทสัน ช้างเหยียบ'",
      year: "พ.ศ. 2515",
      caption: "รถกระบะขวัญใจคนไทยในตำนาน โด่งดังด้วยความอึด ถึก ทนทาน ขับเคลื่อนเศรษฐกิจการขนส่ง พ่อค้าแม่ค้า และเกษตรกรไทยในยุคบุกเบิกอุตสาหกรรม",
      source: "Nissan Motor Archives / บันทึกประวัติศาสตร์ยานยนต์เพื่อการพาณิชย์",
    },
    {
      src: "./images/automotive-parts.jpg",
      title: "สายการผลิตชิ้นส่วนวิศวกรรมยานยนต์ขั้นสูง",
      year: "พ.ศ. 2512 เป็นต้นมา",
      caption: "ผลจากนโยบายกำหนดสัดส่วนชิ้นส่วนในประเทศ (Local Content 25%) นำไปสู่การร่วมทุนตั้งโรงงานผลิตแบตเตอรี่ โช้คอัพ กระจก แหนบ และชิ้นส่วนเครื่องยนต์",
      source: "Unsplash Creative Commons / คลังภาพประวัติศาสตร์อุตสาหกรรมการผลิต",
    },
  ];

  // ข้อมูลกลุ่มธุรกิจ
  const businessGroups = [
    {
      name: "1. กลุ่มอุตสาหกรรมรถยนต์",
      icon: <Factory className="w-5 h-5 text-amber-500" />,
      companies: [
        "นิสสัน มอเตอร์ (ประเทศไทย)",
        "นิสสัน พาวเวอร์เทรน (ประเทศไทย)",
        "นิสสัน เทรดดิ้ง (ไทยแลนด์)",
        "สยามนิสสัน บอดี้",
        "สยามนิสสัน เซลส์",
        "เอส เอ็น เอ็น อุปกรณ์และแม่พิมพ์",
      ],
      desc: "สายการผลิต การประกอบตัวถัง รถยนต์สำเร็จรูป และระบบขับเคลื่อน",
    },
    {
      name: "2. กลุ่มอะไหล่และชิ้นส่วนยานยนต์",
      icon: <Cpu className="w-5 h-5 text-amber-500" />,
      companies: [
        "ยีเอส ยัวซ่า สยาม อินดัสตรีส์ / สยาม ยีเอส แบตเตอรี่",
        "บ๊อช ออโตโมทีฟ (ประเทศไทย)",
        "มาห์เล สยาม ฟิลเตอร์ซิสเต็มส์ & อิเล็คทริค ไดรฟ์",
        "ฮิตาชิ แอสเตโม ชลบุรี พาวเวอร์เทรน",
        "เควายบี (ประเทศไทย) / เอ็กเซดี้ (ประเทศไทย)",
        "เอ็น เอส เค แบริ่งส์ / วาลีโอสยาม / สยามคาลโซนิค / สยามเอ็นจีเค",
      ],
      desc: "การร่วมทุนระดับโลกผลิตแบตเตอรี่ โช้คอัพ ลูกปืน หัวเทียน และระบบระบายความร้อน",
    },
    {
      name: "3. กลุ่มอุตสาหกรรมและเครื่องจักรหนัก",
      icon: <Layers className="w-5 h-5 text-amber-500" />,
      companies: [
        "บางกอกโคมัตสุ (Komatsu Excavator & Heavy Machinery)",
        "อุปกรณ์ยกขนและระบบโลจิสติกส์อุตสาหกรรม",
      ],
      desc: "เครื่องจักรกลหนักเพื่องานก่อสร้าง โครงสร้างพื้นฐาน และเหมืองแร่",
    },
    {
      name: "4. กลุ่มการท่องเที่ยวและบริการ",
      icon: <Globe2 className="w-5 h-5 text-amber-500" />,
      companies: [
        "สยามคันทรีคลับ (Siam Country Club Pattaya)",
        "โรงแรม สยาม@สยาม ดีไซน์ โฮเต็ล (กรุงเทพฯ & พัทยา)",
      ],
      desc: "สนามกอล์ฟมาตรฐานระดับ LPGA Tour และโรงแรมไลฟ์สไตล์บูติกชั้นนำ",
    },
    {
      name: "5. กลุ่มการศึกษาและเครื่องดนตรี",
      icon: <Award className="w-5 h-5 text-amber-500" />,
      companies: [
        "สถาบันดนตรียามาฮ่า (Yamaha Music School)",
        "โรงเรียนดนตรีและศิลปะการแสดงสยามกลการ",
      ],
      desc: "การสร้างเยาวชนและศิลปินผ่านหลักสูตรดนตรีมาตรฐานระดับโลกของ Yamaha",
    },
    {
      name: "6. กลุ่มการลงทุนและอสังหาริมทรัพย์",
      icon: <Briefcase className="w-5 h-5 text-amber-500" />,
      companies: [
        "อาคารสยามกลการ ถนนพระราม 1",
        "นิคมและศูนย์อุตสาหกรรมสยามกลการ บางนา-ตราด กม.21",
      ],
      desc: "บริหารพื้นที่พาณิชยกรรม นิคมการผลิต และการลงทุนในนวัตกรรมแห่งอนาคต",
    },
  ];

  // เลื่อนหน้าจอแบบ Smooth Scroll
  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#121214] text-[#E4E1DB] font-sans selection:bg-[#C28E52] selection:text-black">
      {/* Texture Layer */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px] z-50"></div>

      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#121214]/95 backdrop-blur-md border-b border-[#2C2B29]/80 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div
            onClick={() => scrollTo("hero")}
            className="cursor-pointer flex items-center gap-3.5 group"
          >
            <div className="w-11 h-11 rounded-sm bg-[#1E1D1B] border border-[#C28E52]/60 flex items-center justify-center text-[#C28E52] font-serif font-black text-xl group-hover:border-[#C28E52] transition shadow-md shadow-black">
              SM
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-[0.28em] text-[#C28E52] font-semibold">
                Historical Digital Archive
              </span>
              <span className="font-serif text-sm md:text-base tracking-wide text-[#F3EFE6] font-medium">
                Siam Motors & Phornprapha
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {[
              { id: "hero", label: "หน้าแรก" },
              { id: "timeline", label: "ไทม์ไลน์" },
              { id: "gallery", label: "คลังภาพ" },
              { id: "section-01", label: "01 ตระกูลพรประภา" },
              { id: "section-02", label: "02 โรงงานแรก" },
              { id: "section-03", label: "03 ชิ้นส่วนยานยนต์" },
              { id: "section-04", label: "04 เศรษฐกิจไทย" },
              { id: "section-references", label: "05 แหล่งอ้างอิง" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-wider rounded transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-[#C28E52] bg-[#22211F] font-semibold shadow-inner border border-[#C28E52]/30"
                    : "text-[#9E9789] hover:text-[#E4E1DB] hover:bg-[#1A1918]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#9E9789] hover:text-[#E4E1DB]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#18181A] border-b border-[#2C2B29] px-6 py-4 space-y-2">
            {[
              { id: "hero", label: "หน้าแรก (Hero)" },
              { id: "timeline", label: "ไทม์ไลน์สำคัญ (Timeline)" },
              { id: "gallery", label: "คลังภาพจดหมายเหตุ (Archive Gallery)" },
              { id: "section-01", label: "01 ประวัติตระกูลพรประภา" },
              { id: "section-02", label: "02 การนำเข้าและโรงงานแห่งแรก" },
              { id: "section-03", label: "03 การผลิตชิ้นส่วน & 6 กลุ่มธุรกิจ" },
              { id: "section-04", label: "04 ผลกระทบต่อเศรษฐกิจไทย" },
              { id: "section-references", label: "05 แหล่งที่มาของข้อมูลและภาพถ่าย" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left py-2 text-sm text-[#A69F91] hover:text-[#C28E52]"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative pt-36 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto border-b border-[#242321]"
      >
        <div className="absolute top-16 right-6 hidden md:block">
          <div className="text-[110px] font-serif font-black text-[#191816] select-none leading-none">
            1952–1997
          </div>
        </div>

        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1E1C] border border-[#3E3A33] text-[#C28E52] text-xs uppercase tracking-widest mb-6">
            <Sparkles size={14} className="text-[#C28E52]" />
            จดหมายเหตุประวัติศาสตร์เศรษฐกิจ & ยานยนต์ไทย
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.14] text-[#FAF8F5] mb-6">
            From Import to Industry: <br />
            <span className="italic font-light text-[#D8A164]">
              The Phornprapha Family
            </span>{" "}
            and Siam Motors
          </h1>

          <p className="text-lg md:text-xl text-[#ABA394] font-light leading-relaxed mb-8">
            จากธุรกิจนำเข้ารถยนต์สู่การพัฒนาอุตสาหกรรมยานยนต์ไทย พ.ศ. 2495–2540:
            เรื่องราวของวิสัยทัศน์ <strong>ดร.ถาวร พรประภา</strong> ผู้เปลี่ยนผ่านประเทศไทยจากประเทศผู้ซื้อสินค้านำเข้า
            สู่การวางรากฐานโรงงานประกอบ วัฒนธรรมช่างฝีมือเทคนิค
            และการสร้างคลัสเตอร์ชิ้นส่วนยานยนต์จนไทยกลายเป็น "ดีทรอยต์แห่งเอเชีย"
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => scrollTo("gallery")}
              className="px-6 py-3.5 bg-[#C28E52] hover:bg-[#A9773F] text-black font-semibold text-sm rounded shadow-lg shadow-[#C28E52]/20 transition duration-200 flex items-center gap-2"
            >
              ชมภาพถ่ายประวัติศาสตร์ <ChevronRight size={18} />
            </button>
            <button
              onClick={() => scrollTo("timeline")}
              className="px-6 py-3.5 bg-[#1F1E1C] hover:bg-[#2A2926] border border-[#3E3A33] text-[#E4E1DB] font-medium text-sm rounded transition"
            >
              สำรวจ 4 ยุคสมัยสำคัญ
            </button>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-[#22211F]">
          <div>
            <div className="text-2xl md:text-3xl font-serif text-[#FAF8F5] font-semibold">
              4 ก.ย. 2495
            </div>
            <div className="text-xs text-[#8A8476] mt-1">
              ก่อตั้ง บจก. สยามกลการ
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-serif text-[#C28E52] font-semibold">
              รายแรก
            </div>
            <div className="text-xs text-[#8A8476] mt-1">
              ตัวแทนต่างประเทศของนิสสันญี่ปุ่น
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-serif text-[#FAF8F5] font-semibold">
              พ.ศ. 2505
            </div>
            <div className="text-xs text-[#8A8476] mt-1">
              โรงงานประกอบรถยนต์แห่งแรก
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-serif text-[#C28E52] font-semibold">
              25%
            </div>
            <div className="text-xs text-[#8A8476] mt-1">
              เกณฑ์ชิ้นส่วนในประเทศ (พ.ศ. 2512)
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Quick Explorer */}
      <section
        id="timeline"
        className="py-20 px-6 max-w-7xl mx-auto border-b border-[#242321] bg-[#161517]/40"
      >
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#C28E52] mb-2 font-medium">
            Chronological Archive
          </h2>
          <h3 className="font-serif text-3xl text-[#F3EFE6]">
            หมุดหมายสำคัญในประวัติศาสตร์ (Timeline)
          </h3>
          <p className="text-sm text-[#9E9789] mt-2">
            คลิกเลือกช่วงเวลาเพื่อดูไฮไลต์พัฒนาการของสยามกลการและการเติบโตของอุตสาหกรรมไทย
          </p>
        </div>

        {/* Timeline Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-8">
          {timelineEras.map((era, idx) => (
            <button
              key={era.year}
              onClick={() => setSelectedTimelineEra(idx)}
              className={`p-4 rounded text-left border transition-all ${
                selectedTimelineEra === idx
                  ? "bg-[#22201D] border-[#C28E52] shadow-lg shadow-[#C28E52]/10"
                  : "bg-[#18181A] border-[#2C2B29] hover:border-[#48453F]"
              }`}
            >
              <span className="inline-block px-2.5 py-0.5 text-[11px] rounded bg-[#2C2A26] text-[#D8A164] font-mono mb-2">
                พ.ศ. {era.year}
              </span>
              <h4 className="font-serif text-base text-[#FAF8F5] leading-snug">
                {era.title}
              </h4>
            </button>
          ))}
        </div>

        {/* Timeline Active Card Detail */}
        <div className="p-6 md:p-8 rounded-lg bg-[#1B1A18] border border-[#36332E] relative overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 h-1 bg-[#C28E52] w-full" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#C28E52] bg-[#2A2723] px-2.5 py-1 rounded">
                {timelineEras[selectedTimelineEra].tag}
              </span>
              <h4 className="font-serif text-2xl text-[#FAF8F5] mt-3">
                พ.ศ. {timelineEras[selectedTimelineEra].year} —{" "}
                {timelineEras[selectedTimelineEra].title}
              </h4>
              <p className="text-sm text-[#A69F91] mt-0.5">
                {timelineEras[selectedTimelineEra].subtitle}
              </p>
            </div>
            <div className="text-4xl font-serif font-black text-[#2E2C28] select-none">
              ERA {selectedTimelineEra + 1}
            </div>
          </div>
          <p className="text-[#D6D0C4] text-base leading-relaxed border-t border-[#2B2925] pt-4">
            {timelineEras[selectedTimelineEra].desc}
          </p>
        </div>
      </section>

      {/* Gallery Section: คลังภาพประวัติศาสตร์ */}
      <section
        id="gallery"
        className="py-24 px-6 max-w-7xl mx-auto border-b border-[#242321]"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C28E52] mb-2">
              <Sparkles size={16} /> Photo Archival Collection
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#FAF8F5]">
              คลังภาพถ่ายและหลักฐานทางประวัติศาสตร์
            </h2>
            <p className="text-sm text-[#9E9789] mt-2 max-w-2xl">
              ภาพถ่ายดั้งเดิมจากเอกสารจดหมายเหตุ ทั้งอาคารสำนักงานใหญ่แห่งแรก
              ซุ้มประตูโรงงานประกอบรถยนต์สุขุมวิท และยานยนต์รุ่นบุกเบิกของประเทศไทย
            </p>
          </div>
          <div className="text-xs text-[#8A8476] bg-[#181716] px-3 py-1.5 rounded border border-[#2B2926]">
            คลิกที่ภาพเพื่อขยายและอ่านบันทึกประวัติศาสตร์
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {archivePhotos.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(photo)}
              className="group cursor-pointer rounded bg-[#181715] border border-[#2D2A26] hover:border-[#C28E52]/60 overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div className="aspect-[16/11] overflow-hidden relative bg-[#1E1D1B] flex items-center justify-center p-2">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition" />
                <div className="absolute top-3 left-3 bg-[#161514]/90 backdrop-blur px-2.5 py-1 rounded text-[11px] font-mono text-[#D8A164] border border-[#332E27]">
                  {photo.year}
                </div>
                <div className="absolute bottom-3 right-3 p-1.5 rounded bg-black/60 text-white/80 group-hover:text-amber-400 transition">
                  <ZoomIn size={16} />
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-base text-[#FAF8F5] group-hover:text-[#D8A164] transition mb-1.5">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-[#9E9789] line-clamp-2 leading-relaxed mb-3">
                    {photo.caption}
                  </p>
                  {photo.source && (
                    <div className="text-[10px] text-[#7A7469] flex items-center gap-1 font-mono">
                      <span className="text-[#C28E52]">ที่มา:</span> {photo.source}
                    </div>
                  )}
                </div>
                <div className="mt-4 pt-3 border-t border-[#262421] flex items-center justify-between text-[11px] text-[#C28E52]">
                  <span>เปิดบันทึกจดหมายเหตุ</span>
                  <ChevronRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 01: ประวัติตระกูลพรประภา */}
      <section
        id="section-01"
        className="py-24 px-6 max-w-7xl mx-auto border-b border-[#242321]"
      >
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="relative group">
              <div className="rounded-lg bg-[#1C1B19] border border-[#38352F] overflow-hidden p-3 shadow-2xl relative">
                <div className="aspect-[4/5] rounded overflow-hidden relative">
                  <img
                    src="./images/thaworn-phornprapha.jpg"
                    alt="ดร.ถาวร พรประภา"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D8A164]">
                      ARCHIVE PORTRAIT
                    </span>
                    <h4 className="font-serif text-2xl text-[#FAF8F5]">
                      ดร.ถาวร พรประภา
                    </h4>
                    <p className="text-xs text-[#B5AEA1]">
                      พ.ศ. 2459 – 2544 (สิริอายุ 85 ปี)
                    </p>
                  </div>
                </div>

                <div className="mt-3 p-4 bg-[#141412] rounded border border-[#2B2925] text-xs text-[#A69F91] leading-relaxed">
                  "ผู้บุกเบิกอุตสาหกรรมยานยนต์ไทย ผู้ได้รับความไว้วางใจให้เป็นตัวแทนจำหน่ายในต่างประเทศรายแรกของบริษัท นิสสัน มอเตอร์ ประเทศญี่ปุ่น"
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C28E52] mb-2">
              <Building2 size={16} /> นิทรรศการห้องที่ 01
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#FAF8F5] mb-6">
              ประวัติตระกูลพรประภา <br />
              <span className="text-xl md:text-2xl font-light text-[#A89F90]">
                (The Phornprapha Family & Dr. Thaworn)
              </span>
            </h2>

            <div className="space-y-4 text-[#C9C2B5] leading-relaxed text-base">
              <p>
                ตระกูลพรประภาเริ่มต้นจากการค้าขาย ในวัยหนุ่ม ดร.ถาวร พรประภา
                ดำเนินธุรกิจค้าของเก่า ประมูลเศษเหล็กและรถยนต์ใช้แล้วจากยุคสงครามโลกมาปรับสภาพขาย
                แต่จุดเปลี่ยนทางความคิดเกิดขึ้นเมื่อได้เดินทางเยือนประเทศญี่ปุ่นในวัยเพียง 20 ปี
                ซึ่งทำให้ท่านตระหนักว่า:
              </p>

              <blockquote className="p-5 rounded bg-[#181715] border-l-2 border-[#C28E52] text-[#E0D9CD] italic text-sm">
                "การค้าของเก่า แม้กำไรดีแต่ก็มีวันหมดไป... แต่การเป็นตัวแทนจำหน่าย 'ของใหม่'
                เปรียบเสมือนน้ำในบ่อที่ไม่มีวันเหือดแห้ง หากขายดี โรงงานก็สามารถผลิตป้อนใหม่อย่างไม่สิ้นสุด"
              </blockquote>

              <p>
                แนวคิดนี้ผลักดันให้ ดร.ถาวร ก่อตั้ง <strong>บริษัท สยามกลการ จำกัด</strong> ขึ้นเมื่อวันที่
                <strong> 4 กันยายน พ.ศ. 2495</strong> (ขณะอายุ 36 ปี)
                มีสำนักงานใหญ่แห่งแรกตั้งอยู่บริเวณถนนพระราม 1 ปทุมวัน
                และด้วยความมุ่งมั่นจริงใจ สยามกลการสามารถเอาชนะใจผู้บริหารนิสสัน มอเตอร์ ญี่ปุ่น
                จนได้รับการแต่งตั้งเป็น <strong>ผู้แทนจำหน่ายในต่างประเทศ (Overseas Distributor) รายแรกในประวัติศาสตร์ของนิสสัน</strong>
              </p>

              <div className="p-4 rounded bg-[#19191B] border border-[#2D2C28] flex items-start gap-3 mt-4">
                <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-xs text-[#B0A99C]">
                  <strong>เกียรติประวัติตราตั้งพระราชทาน:</strong> เมื่อวันที่ 19 มิถุนายน พ.ศ. 2515
                  บริษัท สยามกลการ จำกัด ได้รับพระราชทานตราตั้ง <strong>"ครุฑ"</strong>
                  จากพระบาทสมเด็จพระบรมชนกาธิศา มหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร
                  สะท้อนความซื่อสัตย์สุจริตและความมั่นคงในการดำเนินธุรกิจเพื่อประโยชน์ของสังคม
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: จุดเริ่มต้นนำเข้าและประกอบ */}
      <section
        id="section-02"
        className="py-24 px-6 max-w-7xl mx-auto border-b border-[#242321]"
      >
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C28E52] mb-2">
            <Factory size={16} /> นิทรรศการห้องที่ 02
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#FAF8F5]">
            จุดเริ่มต้นของการนำเข้าและประกอบรถยนต์
          </h2>
          <p className="text-base text-[#9E9789] mt-2">
            The Beginning of Automobile Imports and Domestic Assembly (1952–1962)
          </p>
        </div>

        {/* Featured Archive Historic Photo & Story */}
        <div className="grid md:grid-cols-12 gap-8 items-center mb-14">
          <div className="md:col-span-6 rounded-lg overflow-hidden border border-[#3A362E] bg-[#161514] p-3 shadow-xl">
            <img
              src="./images/sukhumvit-assembly-factory.jpg"
              alt="โรงงานประกอบรถยนต์สยามกลการและนิสสัน ซอยศรีจันทร์"
              className="w-full rounded h-auto object-cover"
            />
            <p className="text-xs text-[#8A8476] mt-3 text-center italic">
              ภาพประวัติศาสตร์: รถยนต์ Datsun Bluebird รุ่นแรกที่ประกอบเสร็จ กำลังวิ่งออกจากโรงงานซอยศรีจันทร์ สุขุมวิท พ.ศ. 2505
            </p>
          </div>

          <div className="md:col-span-6 space-y-4">
            <h3 className="font-serif text-2xl text-[#FAF8F5]">
              จุดเปลี่ยนปี พ.ศ. 2505: โรงงานสุขุมวิท ซอยศรีจันทร์
            </h3>
            <p className="text-sm text-[#BFB7A8] leading-relaxed">
              หลังสงครามโลกครั้งที่สอง รถยนต์นำเข้าได้รับความนิยมสูงขึ้นตามการขยายตัวของการคมนาคม
              แต่ ดร.ถาวร พรประภา มองไกลกว่าเพียงการเป็น 'พ่อค้านำเข้า'
              จึงได้ชักชวนบริษัท นิสสัน มอเตอร์ ประเทศญี่ปุ่น มาร่วมทุนจัดตั้ง
              <strong> บริษัท สยามกลการและนิสสัน จำกัด</strong> ในปี พ.ศ. 2505
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded bg-[#191816] border border-[#2D2B27]">
                <div className="text-2xl font-serif text-[#C28E52]">120 คน</div>
                <div className="text-xs text-[#8A8476] mt-1">พนักงานรุ่นบุกเบิก</div>
              </div>
              <div className="p-4 rounded bg-[#191816] border border-[#2D2B27]">
                <div className="text-2xl font-serif text-[#C28E52]">4 คัน/วัน</div>
                <div className="text-xs text-[#8A8476] mt-1">กำลังการผลิตเริ่มต้น</div>
              </div>
            </div>
            <p className="text-xs text-[#9E9789] leading-relaxed">
              แม้กำลังผลิตเริ่มต้นจะอยู่ที่ 4 คันต่อวัน
              แต่นับเป็นหลักไมล์ที่วางรากฐานโครงสร้างแรงงานช่างฝีมือไทย
              การควบคุมคุณภาพชิ้นส่วน การเชื่อมประกอบ และการพ่นสีตามหลักวิศวกรรมสากล
            </p>
          </div>
        </div>

        {/* Historic Vehicles Spotlight */}
        <div className="p-8 rounded-lg bg-[#181715] border border-[#2C2B28]">
          <h4 className="font-serif text-xl text-[#FAF8F5] mb-6 flex items-center gap-2">
            <Info size={20} className="text-[#C28E52]" />
            ยานยนต์ในตำนานผู้ขับเคลื่อนสังคมไทยยุคบุกเบิก
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-[#262421] rounded-lg bg-[#141312] overflow-hidden flex flex-col justify-between">
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#1E1D1B] flex items-center justify-center p-3">
                <img
                  src="./images/datsun-bluebird.jpg"
                  alt="Datsun Bluebird"
                  className="w-full h-full object-contain hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-mono text-[#D8A164]">Datsun Bluebird (P312)</span>
                <h5 className="font-serif text-lg text-[#EDE8DF] mt-1">ดัทสัน บลูเบิร์ด (เก๋งยอดนิยม)</h5>
                <p className="text-xs text-[#9E9789] mt-2 leading-relaxed">
                  รถยนต์นั่งที่ได้รับความนิยมสูงในหมู่ข้าราชการ คหบดี และครอบครัวไทยยุคกึ่งพุทธกาล
                  สร้างชื่อเสียงด้านความประหยัดน้ำมันและความทนทาน จนทำให้แบรนด์ดัทสันเป็นที่ยอมรับทั่วประเทศ
                </p>
              </div>
            </div>

            <div className="border border-[#262421] rounded-lg bg-[#141312] overflow-hidden flex flex-col justify-between">
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#1E1D1B] flex items-center justify-center p-3">
                <img
                  src="./images/datsun-620.jpg"
                  alt="Datsun 620"
                  className="w-full h-full object-contain hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-mono text-[#D8A164]">Datsun 620 Pickup</span>
                <h5 className="font-serif text-lg text-[#EDE8DF] mt-1">ดัทสัน ช้างเหยียบ (กระบะพันธุ์อึด)</h5>
                <p className="text-xs text-[#9E9789] mt-2 leading-relaxed">
                  รถกระบะขนาด 1 ตันที่ทนทานต่อสภาพถนนไทย ขับเคลื่อนการขนส่งผลผลิตการเกษตร
                  สินค้าอุปโภคบริโภค และเป็นกระดูกสันหลังทางเศรษฐกิจของพ่อค้าแม่ค้าไทยทั่วทุกภูมิภาค
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03: จุดเริ่มต้นการผลิตชิ้นส่วนรถยนต์ & 6 กลุ่มธุรกิจ */}
      <section
        id="section-03"
        className="py-24 px-6 max-w-7xl mx-auto border-b border-[#242321]"
      >
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C28E52] mb-2">
            <Cpu size={16} /> นิทรรศการห้องที่ 03
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#FAF8F5]">
            จุดเริ่มต้นการผลิตชิ้นส่วนรถยนต์ & อาณาจักร 6 กลุ่มธุรกิจ
          </h2>
          <p className="text-base text-[#9E9789] mt-2">
            The Beginning of Automobile Parts Manufacturing & Modern Conglomerate
          </p>
        </div>

        {/* Local Content Mandate Callout */}
        <div className="mb-12 p-6 md:p-8 rounded-lg bg-[#1D1B18] border border-[#423C32] relative shadow-lg">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="w-14 h-14 rounded bg-[#2D2821] border border-[#C28E52]/40 flex items-center justify-center shrink-0 text-[#C28E52]">
              <Calendar size={28} />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C28E52] font-semibold">
                นโยบายประวัติศาสตร์ปี พ.ศ. 2512 (Local Content 25%)
              </span>
              <h3 className="font-serif text-xl text-[#FAF8F5] mt-1 mb-2">
                กฎหมายบังคับใช้ชิ้นส่วนในประเทศไม่น้อยกว่าร้อยละ 25
              </h3>
              <p className="text-sm text-[#BFB7A8] leading-relaxed">
                รัฐบาลกำหนดเงื่อนไขเพื่อลดการพึ่งพาเงินตราต่างประเทศ
                สยามกลการจึงเริ่มจับมือกับผู้ผลิตชิ้นส่วนระดับโลก
                ทั้งจากญี่ปุ่น เยอรมนี และสหรัฐฯ เข้ามาร่วมทุนตั้งโรงงานผลิตในไทย
                เช่น <strong>ยีเอส แบตเตอรี่ (GS Battery), โช้คอัพ เควายบี (KYB), บ๊อช (Bosch), วาลีโอ (Valeo), และหัวเทียน เอ็นจีเค (NGK)</strong>
                ทำให้เกิดการถ่ายทอดเทคโนโลยี (Technology Transfer) ชั้นสูงสู่ช่างไทย
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-serif text-2xl text-[#EDE8DF]">
            โครงสร้าง 6 กลุ่มธุรกิจของเครือสยามกลการ
          </h3>
          <span className="text-xs text-[#8A8476]">
            ข้อมูลปัจจุบันและบริษัทในเครือ
          </span>
        </div>

        {/* 6 Groups Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded bg-[#181715] border border-[#2B2925] hover:border-[#4B453C] transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-[#24221F] border border-[#35322C]">
                    {group.icon}
                  </div>
                  <h4 className="font-serif text-base font-medium text-[#FAF8F5]">
                    {group.name}
                  </h4>
                </div>
                <p className="text-[11px] text-[#8C8578] mb-4">
                  {group.desc}
                </p>
                <ul className="space-y-2 border-t border-[#262421] pt-3">
                  {group.companies.map((company, cIdx) => (
                    <li
                      key={cIdx}
                      className="text-xs text-[#A69F91] flex items-start gap-2"
                    >
                      <span className="text-[#C28E52] mt-0.5">•</span>
                      <span>{company}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 04: ผลกระทบต่อเศรษฐกิจไทย (4 มิติ) */}
      <section id="section-04" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C28E52] mb-2">
            <TrendingUp size={16} /> นิทรรศการห้องที่ 04
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#FAF8F5]">
            ผลกระทบต่อเศรษฐกิจไทย (พ.ศ. 2495–2540)
          </h2>
          <p className="text-base text-[#9E9789] mt-2">
            Economic Impacts on Thailand: Structural Transformation & Regional Hub
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 4.1 */}
          <div className="p-8 rounded-lg bg-[#181715] border border-[#2B2925] relative group hover:border-[#524B3F] transition">
            <div className="text-xs font-mono text-[#C28E52] mb-2">
              มิติที่ 4.1
            </div>
            <h3 className="font-serif text-xl text-[#FAF8F5] mb-3">
              การเปลี่ยนแปลงโครงสร้างเศรษฐกิจ
              <span className="block text-xs font-sans text-[#8C8578] mt-0.5 font-normal">
                Economic Structural Transformation
              </span>
            </h3>
            <p className="text-sm text-[#BDB5A6] leading-relaxed">
              ช่วยผลักดันประเทศจากเศรษฐกิจการเกษตรและการค้าสินค้านำเข้า
              เข้าสู่เศรษฐกิจอุตสาหกรรมการผลิตจริงภายในประเทศ
              ทำให้กิจกรรมทางเศรษฐกิจขยายวงครอบคลุมการจัดการโรงงาน
              โลจิสติกส์ และระบบซัพพลายเชน
            </p>
          </div>

          {/* 4.2 */}
          <div className="p-8 rounded-lg bg-[#181715] border border-[#2B2925] relative group hover:border-[#524B3F] transition">
            <div className="text-xs font-mono text-[#C28E52] mb-2">
              มิติที่ 4.2
            </div>
            <h3 className="font-serif text-xl text-[#FAF8F5] mb-3">
              การสร้างงานและพัฒนาทักษะแรงงาน
              <span className="block text-xs font-sans text-[#8C8578] mt-0.5 font-normal">
                Employment and Skills Development
              </span>
            </h3>
            <p className="text-sm text-[#BDB5A6] leading-relaxed">
              สร้างงานในทุกระดับ ตั้งแต่แรงงานฝ่ายผลิต ช่างเทคนิค
              ไปจนถึงวิศวกรและการบริหาร
              แรงงานไทยได้รับการถ่ายทอดเทคโนโลยีและระบบควบคุมคุณภาพแบบญี่ปุ่น
              อีกทั้งยังแตกแขนงไปสู่ธุรกิจบริการหลังการขาย ศูนย์บริการ และอู่ซ่อมรถทั่วประเทศ
            </p>
          </div>

          {/* 4.3 */}
          <div className="p-8 rounded-lg bg-[#181715] border border-[#2B2925] relative group hover:border-[#524B3F] transition">
            <div className="text-xs font-mono text-[#C28E52] mb-2">
              มิติที่ 4.3
            </div>
            <h3 className="font-serif text-xl text-[#FAF8F5] mb-3">
              การพัฒนาผู้ผลิตชิ้นส่วนและห่วงโซ่อุปทาน
              <span className="block text-xs font-sans text-[#8C8578] mt-0.5 font-normal">
                Automotive Supply Chain Development
              </span>
            </h3>
            <p className="text-sm text-[#BDB5A6] leading-relaxed">
              การกำหนดสัดส่วนชิ้นส่วนในประเทศช่วงปลายทศวรรษ 2510
              วางรากฐานให้ไทยเป็นศูนย์กลางการผลิตชิ้นส่วน
              โดยอาศัยความร่วมมือหลายฝ่ายทั้งนโยบายรัฐ การลงทุนจากต่างชาติ
              และผู้ประกอบการไทยหลากหลายกลุ่ม (มิใช่สยามกลการเพียงเจ้าเดียว)
            </p>
          </div>

          {/* 4.4 */}
          <div className="p-8 rounded-lg bg-[#181715] border border-[#2B2925] relative group hover:border-[#524B3F] transition">
            <div className="text-xs font-mono text-[#C28E52] mb-2">
              มิติที่ 4.4
            </div>
            <h3 className="font-serif text-xl text-[#FAF8F5] mb-3">
              การลงทุนต่างชาติและการขยายตลาดส่งออก
              <span className="block text-xs font-sans text-[#8C8578] mt-0.5 font-normal">
                Foreign Investment and Export Growth
              </span>
            </h3>
            <p className="text-sm text-[#BDB5A6] leading-relaxed">
              หลังข้อตกลง Plaza Accord ค่าเงินเยนแข็งตัวในปี 2528
              บริษัทยานยนต์ญี่ปุ่นจึงย้ายฐานมายังไทย
              ประกอบกับการเปิดเสรีอุตสาหกรรมช่วงต้นทศวรรษ 2530 (พ.ศ. 2534–2539)
              ทำให้ไทยพัฒนาจนกลายเป็นฐานการผลิตเพื่อส่งออกรถยนต์สำเร็จรูปในที่สุด
            </p>
          </div>
        </div>
      </section>

      {/* Section 05: แหล่งข้อมูลอ้างอิงและบรรณานุกรม */}
      <section
        id="section-references"
        className="py-24 px-6 max-w-7xl mx-auto border-t border-[#242321]"
      >
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C28E52] mb-2">
            <ExternalLink size={16} /> บันทึกจดหมายเหตุ & บรรณานุกรม
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#FAF8F5]">
            แหล่งที่มาของข้อมูลและภาพถ่ายประวัติศาสตร์
          </h2>
          <p className="text-base text-[#9E9789] mt-2">
            References, Archival Citations & Image Credits
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Col 1: เอกสารหลัก */}
          <div className="p-6 rounded-lg bg-[#181715] border border-[#2B2925] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#C28E52] uppercase mb-2">
                01. เอกสารประวัติศาสตร์หลัก
              </div>
              <h4 className="font-serif text-base text-[#FAF8F5] mb-3">
                เอกสารวิชาการประวัติศาสตร์เศรษฐกิจ
              </h4>
              <ul className="space-y-3 text-xs text-[#ABA394] leading-relaxed">
                <li className="border-l border-[#3E3A33] pl-3">
                  <strong className="text-[#EDE8DF] block">
                    From Import to Industry: The Phornprapha Family and Siam Motors
                  </strong>
                  จากธุรกิจนำเข้ารถยนต์สู่การพัฒนาอุตสาหกรรมยานยนต์ไทย พ.ศ. 2495–2540
                </li>
                <li className="border-l border-[#3E3A33] pl-3">
                  <strong className="text-[#EDE8DF] block">
                    บันทึกประวัติศาสตร์การประกอบรถยนต์ในประเทศ
                  </strong>
                  ข้อมูลการก่อตั้ง บริษัท สยามกลการและนิสสัน จำกัด พ.ศ. 2505 ณ ซอยศรีจันทร์ ถนนสุขุมวิท
                </li>
              </ul>
            </div>
          </div>

          {/* Col 2: แหล่งข้อมูลธุรกิจ & วิชาการ */}
          <div className="p-6 rounded-lg bg-[#181715] border border-[#2B2925] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#C28E52] uppercase mb-2">
                02. บทความ & ข้อมูลอ้างอิง
              </div>
              <h4 className="font-serif text-base text-[#FAF8F5] mb-3">
                สารคดีและฐานข้อมูลเศรษฐกิจ
              </h4>
              <ul className="space-y-3 text-xs text-[#ABA394] leading-relaxed">
                <li className="border-l border-[#3E3A33] pl-3">
                  <strong className="text-[#EDE8DF] block">
                    บริษัท สยามกลการ จำกัด (Siam Motors Co., Ltd.)
                  </strong>
                  หอประวัติและบันทึก 7 ทศวรรษการดำเนินธุรกิจ เครือสยามกลการ (siammotors.com)
                </li>
                <li className="border-l border-[#3E3A33] pl-3">
                  <strong className="text-[#EDE8DF] block">The People สารคดีประวัติศาสตร์ธุรกิจ</strong>
                  "ดร.ถาวร พรประภา คนแรกของโลกที่ Nissan ให้เป็นตัวแทนจำหน่ายนอกญี่ปุ่น"
                </li>
                <li className="border-l border-[#3E3A33] pl-3">
                  <strong className="text-[#EDE8DF] block">ประชาชาติธุรกิจ</strong>
                  "7 ทศวรรษ 'สยามกลการ' จากค้าของเก่า สู่ผู้แทนจำหน่ายนิสสัน และอาณาจักรยานยนต์ไทย"
                </li>
                <li className="border-l border-[#3E3A33] pl-3">
                  <strong className="text-[#EDE8DF] block">สถาบันยานยนต์ (TAI) & สศอ.</strong>
                  ข้อมูลประวัติศาสตร์นโยบายชิ้นส่วนในประเทศ (Local Content Requirements 1969)
                </li>
              </ul>
            </div>
          </div>

          {/* Col 3: ภาพถ่าย & สิทธิ์ */}
          <div className="p-6 rounded-lg bg-[#181715] border border-[#2B2925] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#C28E52] uppercase mb-2">
                03. แหล่งที่มาของรูปภาพ (Image Credits)
              </div>
              <h4 className="font-serif text-base text-[#FAF8F5] mb-3">
                ภาพถ่ายจดหมายเหตุ & ยานยนต์
              </h4>
              <ul className="space-y-3 text-xs text-[#ABA394] leading-relaxed">
                <li className="border-l border-[#3E3A33] pl-3">
                  <strong className="text-[#EDE8DF] block">ภาพประวัติศาสตร์จริงในเอกสาร</strong>
                  ภาพเหมือน ดร.ถาวร พรประภา, ภาพอาคารสยามกลการ ปทุมวัน (พระราชทานตราตั้งครุฑ 2515), และภาพซุ้มประตูโรงงานสุขุมวิท 2505
                </li>
                <li className="border-l border-[#3E3A33] pl-3">
                  <strong className="text-[#EDE8DF] block">Datsun Bluebird (P312)</strong>
                  Nissan Heritage Collection & Classic Automobile Archives
                </li>
                <li className="border-l border-[#3E3A33] pl-3">
                  <strong className="text-[#EDE8DF] block">Datsun 620 Pickup ("ช้างเหยียบ")</strong>
                  Nissan Motor Co., Ltd. Commercial Vehicle Archives
                </li>
                <li className="border-l border-[#3E3A33] pl-3">
                  <strong className="text-[#EDE8DF] block">สายการผลิตชิ้นส่วนวิศวกรรม</strong>
                  Creative Commons License via Unsplash Photography
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox / Image Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#181715] border border-[#3E3A33] rounded-lg max-w-3xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 hover:bg-black text-white/80 hover:text-white transition"
            >
              <X size={20} />
            </button>

            <div className="aspect-[16/10] bg-black overflow-hidden flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="inline-block px-2.5 py-0.5 rounded bg-[#2A2723] text-[#D8A164] font-mono text-xs">
                  จดหมายเหตุ {selectedImage.year}
                </div>
                {selectedImage.source && (
                  <div className="text-[11px] text-[#8C8578] font-mono">
                    <span className="text-[#C28E52]">แหล่งที่มา:</span> {selectedImage.source}
                  </div>
                )}
              </div>
              <h3 className="font-serif text-2xl text-[#FAF8F5] mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-[#C4BDB0] leading-relaxed">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#242321] bg-[#0E0E10] text-[#787267] text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#1C1B19] border border-[#C28E52]/30 flex items-center justify-center text-[#C28E52] font-serif font-bold text-sm">
              SM
            </div>
            <span>
              โครงการพิพิธภัณฑ์ประวัติศาสตร์เศรษฐกิจดิจิทัล: ตระกูลพรประภา และ สยามกลการ (พ.ศ. 2495–2540)
            </span>
          </div>

          <div className="flex gap-6">
            <button
              onClick={() => scrollTo("hero")}
              className="hover:text-[#C28E52] transition"
            >
              กลับสู่ด้านบนสุด ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
