import React from "react";
import { PRODUCT_NAME } from "../constants";
import {
  IconScan,
  IconShield,
  IconLink,
  IconTruck,
  IconArrowRight,
  IconCheck,
} from "../components/Icons.jsx";

export default function Services() {
  return (
    <section id="servicos" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-4xl font-bold mb-3">{PRODUCT_NAME}</h2>
        <p className="text-white/80 text-lg md:text-xl max-w-3xl">
          Cadastro de motoristas e caminhões com OCR de CNH/CRLV, validações
          automáticas e integração ERP via API — rápido, padronizado e sem erro
          humano.
        </p>

        {/* Card branco legível */}
        <div className="mt-8 rounded-3xl bg-white text-black border border-slate-200 shadow-xl p-6 md:p-8">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <h3 className="text-2xl md:text-3xl font-semibold">
                O que é o {PRODUCT_NAME}?
              </h3>
              <p className="mt-3 text-slate-700">
                Lê CNH e CRLV com OCR, preenche o cadastro automaticamente e
                envia ao ERP via API.
              </p>

              <h4 className="mt-6 font-semibold text-slate-900">
                Como funciona
              </h4>
              <ol className="mt-3 grid sm:grid-cols-3 gap-4">
                <li className="rounded-xl p-4 bg-slate-50 border border-slate-200">
                  <p className="font-medium flex items-center gap-2">
                    <IconScan className="w-4 h-4" /> Captura (OCR)
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Foto/PDF da CNH/CRLV com normalização.
                  </p>
                </li>
                <li className="rounded-xl p-4 bg-slate-50 border border-slate-200">
                  <p className="font-medium flex items-center gap-2">
                    <IconTruck className="w-4 h-4" /> Fluxo guiado
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Preenchimento automático e regras por perfil.
                  </p>
                </li>
                <li className="rounded-xl p-4 bg-slate-50 border border-slate-200">
                  <p className="font-medium flex items-center gap-2">
                    <IconLink className="w-4 h-4" /> Integração ERP
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Envio via API, webhooks e logs por registro.
                  </p>
                </li>
              </ol>

              <div className="mt-6">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Solicitar demonstração <IconArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Coluna direita: espaço reservado (sem dependências) */}
            <div className="lg:col-span-5">
              <div className="h-[360px] rounded-2xl ring-1 ring-slate-200 grid place-items-center bg-black text-white/60">
                Tela do app (adicione imagens depois)
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6">
            <h4 className="font-semibold text-slate-900">
              Integrações & segurança
            </h4>
            <ul className="mt-3 grid sm:grid-cols-3 gap-4 text-sm">
              <li className="rounded-xl p-4 bg-slate-50 border border-slate-200">
                <IconLink className="w-4 h-4 inline mr-2" /> ERPs (API REST)
              </li>
              <li className="rounded-xl p-4 bg-slate-50 border border-slate-200">
                <IconShield className="w-4 h-4 inline mr-2" /> Criptografia em
                trânsito/repouso
              </li>
              <li className="rounded-xl p-4 bg-slate-50 border border-slate-200">
                <IconShield className="w-4 h-4 inline mr-2" /> Consentimento &
                retenção (LGPD)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
