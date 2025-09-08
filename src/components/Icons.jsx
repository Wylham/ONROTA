// src/components/Icons.jsx
// Se precisar: npm i lucide-react
import React from "react";
import {
  Mail,
  Phone,
  User,
  MessageSquare,
  MessageCircle,
  Check,
  Scan,
  Shield,
  Link as LinkIcon,
  Truck,
  ArrowRight,
} from "lucide-react";

export const IconMail = (props) => <Mail {...props} />;
export const IconPhone = (props) => <Phone {...props} />;
export const IconUser = (props) => <User {...props} />;
export const IconMessage = (props) => <MessageSquare {...props} />;

// Ícones usados nas seções (About/Hero/Services)
export const IconCheck = (props) => <Check {...props} />;
export const IconScan = (props) => <Scan {...props} />;
export const IconShield = (props) => <Shield {...props} />;
export const IconLink = (props) => <LinkIcon {...props} />;
export const IconTruck = (props) => <Truck {...props} />;
export const IconArrowRight = (props) => <ArrowRight {...props} />;

// WhatsApp — ofereço as DUAS grafias para não quebrar nada
export const IconWhatsApp = (props) => <MessageCircle {...props} />;
export const IconWhatsapp = IconWhatsApp;
