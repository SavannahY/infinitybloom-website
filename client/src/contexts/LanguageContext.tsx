import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export type Lang = "en" | "zh";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

/* ------------------------------------------------------------------ */
/*  TRANSLATIONS                                                       */
/* ------------------------------------------------------------------ */

const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Navbar
    "nav.services": "Services",
    "nav.solutions": "Solutions",
    "nav.process": "Process",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "Get in Touch",

    // Hero
    "hero.overline": "Technology Consulting",
    "hero.heading.1": "Infrastructure for the ",
    "hero.heading.accent": "energy transition",
    "hero.sub": "We advise on renewable energy, data center development, and enterprise software — delivering integrated consulting across Asia-Pacific and beyond.",
    "hero.cta.primary": "Explore Services",
    "hero.cta.secondary": "Contact Us",
    "hero.metric.1.value": "Global",
    "hero.metric.1.label": "Business Coverage",
    "hero.metric.2.value": "24/7",
    "hero.metric.2.label": "Data Availability",
    "hero.metric.3.value": "APAC+",
    "hero.metric.3.label": "Regional Reach",
    "hero.metric.4.value": "End-to-End",
    "hero.metric.4.label": "Consulting Delivery",

    // Services
    "services.overline": "What We Do",
    "services.heading.1": "Our ",
    "services.heading.accent": "services",
    "services.sub": "Technology consulting and integrated solutions across the full energy and data infrastructure value chain — serving clients globally.",
    "services.1.title": "Renewable Energy Consulting",
    "services.1.subtitle": "Power Strategy & Procurement",
    "services.1.desc": "We advise data center operators and enterprises on clean energy strategy — from PPA structuring and renewable electricity procurement to grid integration planning.",
    "services.1.tag1": "PPA Advisory",
    "services.1.tag2": "Energy Strategy",
    "services.1.tag3": "Grid Integration",
    "services.2.title": "Data Center Development",
    "services.2.subtitle": "Infrastructure Design & Delivery",
    "services.2.desc": "End-to-end consulting for hyperscale and edge data center projects — covering site selection, power infrastructure design, construction management, and commissioning.",
    "services.2.tag1": "Site Selection",
    "services.2.tag2": "Power Design",
    "services.2.tag3": "Commissioning",
    "services.3.title": "Hardware Advisory",
    "services.3.subtitle": "Global Technology Consulting",
    "services.3.desc": "Our technology consultants advise on server, networking, and cooling hardware — from vendor evaluation and procurement strategy to deployment planning.",
    "services.3.tag1": "Vendor Evaluation",
    "services.3.tag2": "Procurement",
    "services.3.tag3": "TCO Optimization",
    "services.4.title": "Enterprise Software",
    "services.4.subtitle": "Energy & Data Center Platforms",
    "services.4.desc": "We develop and license B2B software for data center energy management and campus design — real-time monitoring, predictive analytics, and automated optimization.",
    "services.4.tag1": "DCIM Platform",
    "services.4.tag2": "Energy Analytics",
    "services.4.tag3": "Campus Design",
    "services.5.title": "BTM Solar & Battery",
    "services.5.subtitle": "Behind-the-Meter Systems",
    "services.5.desc": "We design, install, and manage behind-the-meter solar PV and battery storage systems for commercial and industrial clients globally.",
    "services.5.tag1": "Solar PV",
    "services.5.tag2": "BESS",
    "services.5.tag3": "Demand Management",

    // Solutions
    "solutions.overline": "Our Solutions",
    "solutions.heading.1": "Integrated ",
    "solutions.heading.accent": "platforms",
    "solutions.sub": "Global consulting expertise paired with enterprise-grade technology platforms for energy and data infrastructure.",
    "solutions.reach.title": "Worldwide Consulting Reach",
    "solutions.reach.desc": "Infinity Bloom operates across Asia-Pacific, the Middle East, and emerging markets. Our consultants bring local regulatory expertise combined with international best practices.",
    "solutions.reach.f1": "Asia-Pacific, Middle East, and global market access",
    "solutions.reach.f2": "Cross-border project management and advisory",
    "solutions.reach.f3": "Local regulatory and grid compliance expertise",
    "solutions.reach.f4": "Multilingual delivery (English, Mandarin, Cantonese)",
    "solutions.reach.cta": "Discuss Your Project",
    "solutions.cap.1.title": "Global Coverage",
    "solutions.cap.1.desc": "Consulting engagements across Asia-Pacific, the Middle East, and emerging markets with local regulatory expertise.",
    "solutions.cap.2.title": "24/7 Data Availability",
    "solutions.cap.2.desc": "Real-time monitoring and analytics platforms that keep your infrastructure performing at its best, around the clock.",
    "solutions.cap.3.title": "Enterprise Software",
    "solutions.cap.3.desc": "Proprietary DCIM and energy campus management platforms purpose-built for global data center operations.",
    "solutions.cap.4.title": "BTM Energy Solutions",
    "solutions.cap.4.desc": "Behind-the-meter solar PV and battery storage systems that reduce grid dependency and lower operational costs.",

    // Process
    "process.overline": "How We Work",
    "process.heading.1": "Our ",
    "process.heading.accent": "process",
    "process.sub": "A structured, transparent consulting approach from initial discovery through long-term support.",
    "process.1.title": "Discovery",
    "process.1.desc": "We assess your energy needs, site conditions, regulatory landscape, and business objectives — producing a clear feasibility report.",
    "process.2.title": "Strategy",
    "process.2.desc": "Our consultants develop tailored technical designs and strategic roadmaps — from power system architecture to software integration.",
    "process.3.title": "Implementation",
    "process.3.desc": "We manage procurement, construction, and deployment through our global partner network — ensuring quality delivery on time.",
    "process.4.title": "Optimisation",
    "process.4.desc": "Post-deployment, our platforms provide real-time monitoring, analytics, and ongoing advisory to keep your infrastructure at peak performance.",

    // About
    "about.overline": "About Us",
    "about.heading.1": "Who we ",
    "about.heading.accent": "are",
    "about.subtitle": "A technology consulting firm for the energy transition",
    "about.p1": "Infinity Bloom Co. Limited is a technology consulting firm founded to address the growing intersection of digital infrastructure and sustainable energy. As data centers become the backbone of the global economy, their energy demands have never been greater.",
    "about.p2": "We work with data center operators, property developers, and enterprises worldwide to design and deliver solutions that are both technically rigorous and environmentally responsible.",
    "about.p3": "From renewable energy advisory and data center development to hardware consulting and proprietary software platforms — Infinity Bloom is your partner for the full infrastructure lifecycle.",
    "about.fact.1.label": "Headquarters",
    "about.fact.1.value": "Hong Kong",
    "about.fact.2.label": "Focus",
    "about.fact.2.value": "B2B Consulting",
    "about.fact.3.label": "Coverage",
    "about.fact.3.value": "Global",
    "about.fact.4.label": "Languages",
    "about.fact.4.value": "EN / 中文 / 廣東話",

    // Why Us
    "whyus.overline": "Why Infinity Bloom",
    "whyus.heading.1": "What sets us ",
    "whyus.heading.accent": "apart",
    "whyus.sub": "We combine deep technical expertise with a genuine commitment to sustainable infrastructure — delivering consulting that creates lasting value.",
    "whyus.1.title": "Technical Excellence",
    "whyus.1.desc": "Deep expertise in power engineering, data center design, and enterprise software — built from decades of combined industry experience.",
    "whyus.2.title": "Sustainable Innovation",
    "whyus.2.desc": "We believe the most resilient infrastructure is built on clean energy. Every engagement we deliver advances the energy transition.",
    "whyus.3.title": "Consulting Partnership",
    "whyus.3.desc": "We work as an extension of your team — providing strategic advisory, technical delivery, and long-term operational support.",
    "whyus.4.title": "Global Perspective",
    "whyus.4.desc": "Headquartered in Hong Kong with a global outlook. We bring international best practices to every market we serve.",
    "whyus.5.title": "Integrated Delivery",
    "whyus.5.desc": "From energy strategy through software deployment — a single partner for the full infrastructure lifecycle.",
    "whyus.6.title": "Proprietary Technology",
    "whyus.6.desc": "Our B2B software platforms are purpose-built for energy and data center operations — not adapted from generic tools.",
    "whyus.cta.title": "Ready to start a conversation?",
    "whyus.cta.desc": "Let us know about your project and we will get back to you within 24 hours.",
    "whyus.cta.btn": "Get in Touch",

    // Contact
    "contact.overline": "Contact",
    "contact.heading.1": "Get in ",
    "contact.heading.accent": "touch",
    "contact.sub": "Tell us about your project. We typically respond within one business day.",
    "contact.form.name": "Name",
    "contact.form.name.ph": "Your name",
    "contact.form.email": "Email",
    "contact.form.email.ph": "you@company.com",
    "contact.form.company": "Company",
    "contact.form.company.ph": "Company name",
    "contact.form.service": "Service Area",
    "contact.form.service.ph": "Select a service",
    "contact.form.service.1": "Renewable Energy Consulting",
    "contact.form.service.2": "Data Center Development",
    "contact.form.service.3": "Hardware Advisory",
    "contact.form.service.4": "Enterprise Software",
    "contact.form.service.5": "BTM Solar & Battery",
    "contact.form.service.6": "General Enquiry",
    "contact.form.message": "Message",
    "contact.form.message.ph": "Tell us about your project...",
    "contact.form.submit": "Send Enquiry",
    "contact.form.success": "Thank you for your enquiry. We will be in touch shortly.",
    "contact.info.reach": "Reach Us",
    "contact.info.email": "Email",
    "contact.info.office": "Office",
    "contact.info.office.value": "Hong Kong",
    "contact.info.regions": "Service Regions",
    "contact.info.region.1": "Asia-Pacific",
    "contact.info.region.2": "Middle East",
    "contact.info.region.3": "Southeast Asia",
    "contact.info.region.4": "Greater China",
    "contact.info.region.5": "Global",
    "contact.info.response": "Response Time",
    "contact.info.response.desc": "We typically respond within one business day. For urgent enquiries, please indicate in your message.",

    // Footer
    "footer.copyright": "Infinity Bloom Co. Limited. All rights reserved.",

    // Ticker
    "ticker.1": "Renewable Energy",
    "ticker.2": "Data Centers",
    "ticker.3": "Hardware Advisory",
    "ticker.4": "Enterprise Software",
    "ticker.5": "BTM Solar",
    "ticker.6": "Battery Storage",
    "ticker.7": "DCIM Platforms",
    "ticker.8": "Energy Campus",
    "ticker.9": "Global Consulting",
    "ticker.10": "Grid Integration",
  },

  zh: {
    // Navbar
    "nav.services": "服务",
    "nav.solutions": "解决方案",
    "nav.process": "流程",
    "nav.about": "关于我们",
    "nav.contact": "联系我们",
    "nav.cta": "联系我们",

    // Hero
    "hero.overline": "技术咨询",
    "hero.heading.1": "赋能",
    "hero.heading.accent": "能源转型基础设施",
    "hero.sub": "我们提供可再生能源、数据中心建设及企业软件的综合咨询服务，业务覆盖亚太地区及全球市场。",
    "hero.cta.primary": "了解服务",
    "hero.cta.secondary": "联系我们",
    "hero.metric.1.value": "全球",
    "hero.metric.1.label": "业务覆盖",
    "hero.metric.2.value": "24/7",
    "hero.metric.2.label": "数据可用性",
    "hero.metric.3.value": "亚太+",
    "hero.metric.3.label": "区域覆盖",
    "hero.metric.4.value": "端到端",
    "hero.metric.4.label": "咨询交付",

    // Services
    "services.overline": "我们的服务",
    "services.heading.1": "专业",
    "services.heading.accent": "服务",
    "services.sub": "覆盖能源与数据基础设施全价值链的技术咨询与综合解决方案，服务全球客户。",
    "services.1.title": "可再生能源咨询",
    "services.1.subtitle": "电力策略与采购",
    "services.1.desc": "我们为数据中心运营商和企业提供清洁能源战略咨询——从PPA结构设计、可再生电力采购到电网接入规划。",
    "services.1.tag1": "PPA咨询",
    "services.1.tag2": "能源策略",
    "services.1.tag3": "电网接入",
    "services.2.title": "数据中心建设",
    "services.2.subtitle": "基础设施设计与交付",
    "services.2.desc": "为超大规模和边缘数据中心项目提供端到端咨询——涵盖选址、电力基础设施设计、施工管理和调试。",
    "services.2.tag1": "选址评估",
    "services.2.tag2": "电力设计",
    "services.2.tag3": "调试验收",
    "services.3.title": "硬件咨询",
    "services.3.subtitle": "全球技术咨询",
    "services.3.desc": "我们的技术顾问提供服务器、网络和制冷硬件咨询——从供应商评估、采购策略到部署规划。",
    "services.3.tag1": "供应商评估",
    "services.3.tag2": "采购管理",
    "services.3.tag3": "TCO优化",
    "services.4.title": "企业软件",
    "services.4.subtitle": "能源与数据中心平台",
    "services.4.desc": "我们开发并授权B2B软件，用于数据中心能源管理和园区设计——实时监控、预测分析和自动化优化。",
    "services.4.tag1": "DCIM平台",
    "services.4.tag2": "能源分析",
    "services.4.tag3": "园区设计",
    "services.5.title": "表后光储系统",
    "services.5.subtitle": "表后计量系统",
    "services.5.desc": "我们为全球商业和工业客户设计、安装和管理表后光伏和电池储能系统。",
    "services.5.tag1": "光伏发电",
    "services.5.tag2": "储能系统",
    "services.5.tag3": "需求管理",

    // Solutions
    "solutions.overline": "解决方案",
    "solutions.heading.1": "集成",
    "solutions.heading.accent": "平台",
    "solutions.sub": "全球咨询专业能力与企业级技术平台的结合，服务于能源和数据基础设施。",
    "solutions.reach.title": "全球咨询网络",
    "solutions.reach.desc": "Infinity Bloom的业务覆盖亚太地区、中东和新兴市场。我们的顾问将本地监管专业知识与国际最佳实践相结合。",
    "solutions.reach.f1": "亚太、中东及全球市场准入",
    "solutions.reach.f2": "跨境项目管理与咨询",
    "solutions.reach.f3": "本地监管与电网合规专业能力",
    "solutions.reach.f4": "多语言交付（英语、普通话、粤语）",
    "solutions.reach.cta": "讨论您的项目",
    "solutions.cap.1.title": "全球覆盖",
    "solutions.cap.1.desc": "在亚太、中东和新兴市场开展咨询业务，具备本地监管专业知识。",
    "solutions.cap.2.title": "全天候数据可用",
    "solutions.cap.2.desc": "实时监控和分析平台，确保您的基础设施全天候保持最佳性能。",
    "solutions.cap.3.title": "企业软件",
    "solutions.cap.3.desc": "专为全球数据中心运营打造的DCIM和能源园区管理平台。",
    "solutions.cap.4.title": "表后能源方案",
    "solutions.cap.4.desc": "表后光伏和电池储能系统，降低电网依赖，减少运营成本。",

    // Process
    "process.overline": "工作流程",
    "process.heading.1": "我们的",
    "process.heading.accent": "流程",
    "process.sub": "从初始发现到长期支持，结构化、透明的咨询方法。",
    "process.1.title": "需求发现",
    "process.1.desc": "我们评估您的能源需求、场地条件、监管环境和业务目标——出具清晰的可行性报告。",
    "process.2.title": "策略制定",
    "process.2.desc": "我们的顾问制定量身定制的技术设计和战略路线图——从电力系统架构到软件集成。",
    "process.3.title": "项目实施",
    "process.3.desc": "我们通过全球合作伙伴网络管理采购、施工和部署——确保按时高质量交付。",
    "process.4.title": "持续优化",
    "process.4.desc": "部署后，我们的平台提供实时监控、分析和持续咨询，保持基础设施的最佳性能。",

    // About
    "about.overline": "关于我们",
    "about.heading.1": "了解",
    "about.heading.accent": "我们",
    "about.subtitle": "面向能源转型的技术咨询公司",
    "about.p1": "Infinity Bloom Co. Limited 是一家技术咨询公司，致力于解决数字基础设施与可持续能源日益交汇的挑战。随着数据中心成为全球经济的支柱，其能源需求前所未有。",
    "about.p2": "我们与全球的数据中心运营商、房地产开发商和企业合作，设计和交付既技术严谨又环境友好的解决方案。",
    "about.p3": "从可再生能源咨询和数据中心建设到硬件咨询和自研软件平台——Infinity Bloom是您全生命周期基础设施的合作伙伴。",
    "about.fact.1.label": "总部",
    "about.fact.1.value": "香港",
    "about.fact.2.label": "定位",
    "about.fact.2.value": "B2B咨询",
    "about.fact.3.label": "覆盖",
    "about.fact.3.value": "全球",
    "about.fact.4.label": "语言",
    "about.fact.4.value": "EN / 中文 / 廣東話",

    // Why Us
    "whyus.overline": "为什么选择我们",
    "whyus.heading.1": "我们的",
    "whyus.heading.accent": "优势",
    "whyus.sub": "我们将深厚的技术专长与对可持续基础设施的真诚承诺相结合——提供创造持久价值的咨询服务。",
    "whyus.1.title": "技术卓越",
    "whyus.1.desc": "在电力工程、数据中心设计和企业软件方面拥有深厚专业知识——源自数十年的行业经验积累。",
    "whyus.2.title": "可持续创新",
    "whyus.2.desc": "我们相信最具韧性的基础设施建立在清洁能源之上。我们交付的每个项目都在推动能源转型。",
    "whyus.3.title": "咨询伙伴",
    "whyus.3.desc": "我们作为您团队的延伸——提供战略咨询、技术交付和长期运营支持。",
    "whyus.4.title": "全球视野",
    "whyus.4.desc": "总部位于香港，放眼全球。我们将国际最佳实践带到每一个服务市场。",
    "whyus.5.title": "一体化交付",
    "whyus.5.desc": "从能源策略到软件部署——一个合作伙伴覆盖完整的基础设施生命周期。",
    "whyus.6.title": "自研技术",
    "whyus.6.desc": "我们的B2B软件平台专为能源和数据中心运营打造——而非通用工具的改编。",
    "whyus.cta.title": "准备好开始对话了吗？",
    "whyus.cta.desc": "告诉我们您的项目需求，我们将在24小时内回复。",
    "whyus.cta.btn": "联系我们",

    // Contact
    "contact.overline": "联系我们",
    "contact.heading.1": "取得",
    "contact.heading.accent": "联系",
    "contact.sub": "告诉我们您的项目需求，我们通常在一个工作日内回复。",
    "contact.form.name": "姓名",
    "contact.form.name.ph": "您的姓名",
    "contact.form.email": "邮箱",
    "contact.form.email.ph": "you@company.com",
    "contact.form.company": "公司",
    "contact.form.company.ph": "公司名称",
    "contact.form.service": "服务领域",
    "contact.form.service.ph": "选择服务",
    "contact.form.service.1": "可再生能源咨询",
    "contact.form.service.2": "数据中心建设",
    "contact.form.service.3": "硬件咨询",
    "contact.form.service.4": "企业软件",
    "contact.form.service.5": "表后光储系统",
    "contact.form.service.6": "一般咨询",
    "contact.form.message": "留言",
    "contact.form.message.ph": "请描述您的项目需求...",
    "contact.form.submit": "提交咨询",
    "contact.form.success": "感谢您的咨询，我们会尽快与您联系。",
    "contact.info.reach": "联系方式",
    "contact.info.email": "邮箱",
    "contact.info.office": "办公室",
    "contact.info.office.value": "香港",
    "contact.info.regions": "服务区域",
    "contact.info.region.1": "亚太地区",
    "contact.info.region.2": "中东",
    "contact.info.region.3": "东南亚",
    "contact.info.region.4": "大中华区",
    "contact.info.region.5": "全球",
    "contact.info.response": "响应时间",
    "contact.info.response.desc": "我们通常在一个工作日内回复。如有紧急需求，请在留言中注明。",

    // Footer
    "footer.copyright": "Infinity Bloom Co. Limited 版权所有。",

    // Ticker
    "ticker.1": "可再生能源",
    "ticker.2": "数据中心",
    "ticker.3": "硬件咨询",
    "ticker.4": "企业软件",
    "ticker.5": "光伏发电",
    "ticker.6": "储能系统",
    "ticker.7": "DCIM平台",
    "ticker.8": "能源园区",
    "ticker.9": "全球咨询",
    "ticker.10": "电网接入",
  },
};

/* ------------------------------------------------------------------ */
/*  PROVIDER                                                           */
/* ------------------------------------------------------------------ */

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("ib-lang") as Lang | null;
      if (saved === "en" || saved === "zh") return saved;
    }
    return "en";
  });

  const changeLang = useCallback((newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem("ib-lang", newLang);
    document.documentElement.lang = newLang === "zh" ? "zh-Hans" : "en";
  }, []);

  const toggleLang = useCallback(() => {
    changeLang(lang === "en" ? "zh" : "en");
  }, [lang, changeLang]);

  const t = useCallback(
    (key: string) => translations[lang][key] ?? key,
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
