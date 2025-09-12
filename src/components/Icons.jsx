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
} from "lucide-react";

export const IconMail = (props) => <Mail {...props} />;
export const IconPhone = (props) => <Phone {...props} />;
export const IconUser = (props) => <User {...props} />;
export const IconMessage = (props) => <MessageSquare {...props} />;

export const IconShield = (props) => <ShieldCheck {...props} />; // segurança
export const IconLink = (props) => <Cpu {...props} />; // inovação/tecnologia
export const IconTruck = (props) => <Truck {...props} />; // transporte
export const IconCheck = (props) => <CheckCircle2 {...props} />; // lista valores

export const IconScan = (props) => <Scan {...props} />;
export const IconArrowRight = (props) => <ArrowRight {...props} />;

export const IconVisao = (props) => <Eye {...props} />; // visão
export const IconValores = (props) => <Gem {...props} />; // valores

export const IconWhatsApp = (props) => <MessageCircle {...props} />;
export const IconWhatsapp = IconWhatsApp;
