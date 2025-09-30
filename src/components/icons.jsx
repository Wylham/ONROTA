// src/components/icons.jsx
import {
  // básicos / contato
  Mail,
  Phone,
  User,
  MessageSquare,
  MessageCircle,
  // UI / ações
  Scan,
  ShieldCheck,
  Sparkles,
  Truck,
  ArrowRight,
  CheckCircle2,
  Eye,
  Gem,
  Cpu,
  FileText,
  UserCheck,
  Plug,
  Shield,
  Rocket,
  BrainCircuit,
  MessagesSquare,
  // testimonials + navegação
  Star as LucideStar,
  ChevronLeft as LucideChevronLeft,
  ChevronRight as LucideChevronRight,
  Quote as LucideQuote,
  // plans (solicitados pelo erro)
  CalendarCheck2 as LucideCalendarCheck2,
  Wrench as LucideWrench,
} from "lucide-react";

/* =========================================================
   EXPORTS “COMPATÍVEIS” COM AS SEÇÕES (nomes crus)
   => Assim você NÃO precisa mexer nos imports existentes
   ========================================================= */
export const CalendarCheck2 = (props) => <LucideCalendarCheck2 {...props} />;
export const Wrench = (props) => <LucideWrench {...props} />;
export const Quote = (props) => <LucideQuote {...props} />;
export const Star = (props) => <LucideStar {...props} />;
export const ChevronLeft = (props) => <LucideChevronLeft {...props} />;
export const ChevronRight = (props) => <LucideChevronRight {...props} />;

/* =========================================================
   WRAPPERS “Icon*” (recomendado usar daqui para frente)
   Mantêm a coesão e facilitam trocar a lib no futuro.
   ========================================================= */
// Contatos / básicos
export const IconMail = (props) => <Mail {...props} />;
export const IconPhone = (props) => <Phone {...props} />;
export const IconUser = (props) => <User {...props} />;

// Missão / Visão / Valores / Utilidades
export const IconShield = (props) => <ShieldCheck {...props} />; // segurança
export const IconLink = (props) => <Cpu {...props} />; // “tech”
export const IconTruck = (props) => <Truck {...props} />; // transporte
export const IconCheck = (props) => <CheckCircle2 {...props} />; // bullet check
export const IconScan = (props) => <Scan {...props} />;
export const IconArrowRight = (props) => <ArrowRight {...props} />;
export const IconVisao = (props) => <Eye {...props} />;
export const IconValores = (props) => <Gem {...props} />;
export const IconSparkles = (props) => <Sparkles {...props} />;

// Social / comunicação
export const IconWhatsApp = (props) => <MessageCircle {...props} />;
export const IconWhatsapp = IconWhatsApp;
export const IconMessage = (props) => <MessagesSquare {...props} />;

// Services (OnCad)
export const IconOCR = (props) => <FileText {...props} />; // OCR em PDFs
export const IconCadastro = (props) => <UserCheck {...props} />; // Cadastro automático
export const IconAPI = (props) => <Plug {...props} />; // Integração API
export const IconValidacao = (props) => <Shield {...props} />; // Validações

// Impact / extras
export const IconRocket = (props) => <Rocket {...props} />;
export const IconAI = (props) => <BrainCircuit {...props} />;

// Testimonials – versões “Icon*” (opcional nas suas seções novas)
export const IconStar = (props) => <LucideStar fill="currentColor" {...props} />;
export const IconPrev = (props) => <LucideChevronLeft {...props} />;
export const IconNext = (props) => <LucideChevronRight {...props} />;
export const IconQuote = (props) => <LucideQuote {...props} />;
