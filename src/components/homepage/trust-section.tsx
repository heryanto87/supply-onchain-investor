import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";

export function TrustSection() {
  return (
    <section className="py-24 bg-neutral-50 border-y border-neutral-200">
      <Container>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-accent font-bold tracking-wider text-xs uppercase mb-3 block">Security First</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Built on Trust & Transparency</h2>
          <p className="text-neutral-500 leading-relaxed">APLX integrates legal frameworks with blockchain technology to ensure every digital asset is backed 1:1 by physical commodities.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-100 shadow-card hover:shadow-soft transition-all duration-300 group">
            <div className="size-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <Icon name="receipt_long" className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">SRG Backed</h3>
            <p className="text-neutral-500 leading-relaxed text-sm">
              Investments are secured by <strong>Sistem Resi Gudang</strong> (Warehouse Receipts), providing legal proof of ownership for the underlying commodities.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-100 shadow-card hover:shadow-soft transition-all duration-300 group">
            <div className="size-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <Icon name="shield_lock" className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">CMA Managed</h3>
            <p className="text-neutral-500 leading-relaxed text-sm">
              <strong>Collateral Management Agreements</strong> ensure physical asset integrity. Third-party agents verify quality and quantity in Gudangin warehouses.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-100 shadow-card hover:shadow-soft transition-all duration-300 group">
            <div className="size-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <Icon name="currency_exchange" className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">IDRP Settlement</h3>
            <p className="text-neutral-500 leading-relaxed text-sm">
              All transactions are settled in <strong>IDRP</strong>, a 1:1 IDR-pegged stablecoin, eliminating crypto volatility risk while maintaining speed.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
