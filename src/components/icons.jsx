import {
  Mail,
  Phone,
  User,
  MessageSquare,
  MessageCircle,
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
  Rocket, // 🚀 simplificação
  BrainCircuit, // 🧠 IA
  MessagesSquare, // 💬 comunicação
} from "lucide-react";

export const IconMail = (props) => <Mail {...props} />;
export const IconPhone = (props) => <Phone {...props} />;
export const IconUser = (props) => <User {...props} />;

export const IconShield = (props) => <ShieldCheck {...props} />; // segurança geral
export const IconLink = (props) => <Cpu {...props} />; // inovação/tecnologia
export const IconTruck = (props) => <Truck {...props} />; // transporte
export const IconCheck = (props) => <CheckCircle2 {...props} />; // lista valores

export const IconScan = (props) => <Scan {...props} />;
export const IconArrowRight = (props) => <ArrowRight {...props} />;

export const IconVisao = (props) => <Eye {...props} />; // visão
export const IconValores = (props) => <Gem {...props} />; // valores

export const IconWhatsApp = (props) => <MessageCircle {...props} />;
export const IconWhatsapp = IconWhatsApp;

// recursos do OnCad
export const IconOCR = (props) => <FileText {...props} />; // OCR em PDFs
export const IconCadastro = (props) => <UserCheck {...props} />; // Cadastro automático
export const IconAPI = (props) => <Plug {...props} />; // Integração API
export const IconValidacao = (props) => <Shield {...props} />; // Validações e regras

// novos para Impact.jsx
export const IconRocket = (props) => <Rocket {...props} />; // simplifique o dia a dia
export const IconAI = (props) => <BrainCircuit {...props} />; // melhorias na análise/IA
export const IconMessage = (props) => <MessagesSquare {...props} />; // esteja onde seu cliente está
