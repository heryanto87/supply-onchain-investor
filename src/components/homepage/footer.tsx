import React from "react";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 pt-12 pb-8 lg:pt-16">
      <Container>
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-1 md:col-span-2 md:pr-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="size-6 rounded bg-primary flex items-center justify-center text-accent font-bold">
                <Icon name="eco" className="text-lg" />
              </div>
              <span className="text-lg font-bold text-primary">APLX</span>
            </div>
            <p className="text-neutral-500 text-sm max-w-sm mb-6 leading-relaxed">
              The bridge between traditional coffee commodities and modern decentralized finance. Secure, transparent, and built for growth.
            </p>
            <div className="flex gap-4">
              <a className="text-neutral-400 hover:text-primary transition-colors" href="#">
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
              </a>
              <a className="text-neutral-400 hover:text-primary transition-colors" href="#">
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-primary font-bold mb-6 text-sm uppercase tracking-wide">Platform</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li><Link className="hover:text-accent transition-colors" href="#">Vaults</Link></li>
              <li><Link className="text-neutral-300 cursor-not-allowed flex items-center gap-2" href="#">Marketplace <span className="text-[9px] bg-neutral-100 px-1 py-0.5 rounded text-neutral-400 font-bold border border-neutral-200">SOON</span></Link></li>
              <li><Link className="hover:text-accent transition-colors" href="#">Analytics</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary font-bold mb-6 text-sm uppercase tracking-wide">Resources</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li><Link className="hover:text-accent transition-colors" href="#">Documentation</Link></li>
              <li><Link className="hover:text-accent transition-colors" href="#">Legal Framework</Link></li>
              <li><Link className="hover:text-accent transition-colors" href="#">Gudangin WMS</Link></li>
              <li><Link className="hover:text-accent transition-colors" href="#">Support</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-100 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400">
          <p>© 2024 APLX Commodities. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link className="hover:text-primary transition-colors" href="#">Privacy Policy</Link>
            <Link className="hover:text-primary transition-colors" href="#">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
