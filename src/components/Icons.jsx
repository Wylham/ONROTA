// src/components/Icons.jsx
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

export const IconCheck = (props) => <Check {...props} />;
export const IconScan = (props) => <Scan {...props} />;
export const IconShield = (props) => <Shield {...props} />;
export const IconLink = (props) => <LinkIcon {...props} />;
export const IconTruck = (props) => <Truck {...props} />;
export const IconArrowRight = (props) => <ArrowRight {...props} />;

export const IconWhatsApp = (props) => <MessageCircle {...props} />;
export const IconWhatsapp = IconWhatsApp;
