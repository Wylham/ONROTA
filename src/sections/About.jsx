import React from "react";
import { COMPANY_NAME } from "../constants";
import { IconCheck } from "../components/Icons";
import { motion } from "framer-motion";
import CountUp from "../components/CountUp";

export default function About() {
  return (
    <section
      id="sobre"
      className="bg-white text-black scroll-mt-24 md:scroll-mt-28"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-3">Sobre nós</h2>
          <p className="leading-relaxed text-slate-700">
            A {COMPANY_NAME} desenvolve soluções digitais para simplificar
            operações de transporte. Atuamos desde o diagnóstico até a
            implementação e suporte.
          </p>
          <ul className="mt-5 grid gap-2 text-slate-700">
            <li className="flex items-start gap-2">
              <IconCheck className="w-4 h-4 mt-1" /> Equipe multidisciplinar
            </li>
            <li className="flex items-start gap-2">
              <IconCheck className="w-4 h-4 mt-1" /> Integrações robustas
            </li>
            <li className="flex items-start gap-2">
              <IconCheck className="w-4 h-4 mt-1" /> Hospedagem pronta para
              produção
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-slate-200 bg-white text-black p-8"
        >
          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold text-slate-900">
                <CountUp to={99} suffix="%" />
              </p>
              <p className="text-sm text-slate-600">precisão do OCR</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-slate-900">
                <CountUp to={0} suffix="%" />
              </p>
              <p className="text-sm text-slate-600">erro humano</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-slate-900">
                -<CountUp to={80} suffix="%" />
              </p>
              <p className="text-sm text-slate-600">tempo de cadastro</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-slate-900">24/7</p>
              <p className="text-sm text-slate-600">APIs monitoradas</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
