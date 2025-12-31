import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

type Transaction = {
    title: string;
    date: string;
    amount: string;
    type: "sent" | "received";
    icon: string;
};

const RECENT_TRANSACTIONS: Transaction[] = [
    {
        title: 'Invested "Coffee"',
        date: "Jan 15 • Sent",
        amount: "-5.0M",
        type: "sent",
        icon: "arrow_outward",
    },
    {
        title: 'Profit "Palm Oil"',
        date: "Jan 10 • Received",
        amount: "+250k",
        type: "received",
        icon: "arrow_downward",
    },
    {
        title: "IDRP Top Up",
        date: "Jan 05 • Top Up",
        amount: "+10.0M",
        type: "received",
        icon: "payments",
    },
    {
        title: 'Invested "Rubber"',
        date: "Dec 28 • Sent",
        amount: "-3.0M",
        type: "sent",
        icon: "arrow_outward",
    },
    {
        title: 'Profit "Coffee"',
        date: "Dec 20 • Received",
        amount: "+150k",
        type: "received",
        icon: "arrow_downward",
    },
];

export default function InvestorDashboardPage() {
    return (
        <main className="flex-1 w-full px-4 md:px-8 py-8 flex flex-col gap-8 overflow-hidden">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-neutral-900">Overview</h1>
                <div className="lg:hidden flex items-center gap-2">
                    <button className="flex items-center gap-2 text-sm font-bold text-neutral-600 hover:text-primary">
                        <Icon name="menu" />
                        Menu
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-6 lg:gap-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Wallet Information */}
                    <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-soft lg:col-span-1">
                        <h2 className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
                            <Icon
                                name="account_balance_wallet"
                                className="text-primary text-[20px]"
                            />
                            Wallet Information
                        </h2>
                        <div className="flex flex-col gap-4">
                            <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-100">
                                <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                                    Wallet Address
                                </p>
                                <div className="flex items-center justify-between gap-2">
                                    <p className="text-neutral-900 text-sm font-bold truncate font-mono">
                                        0x1A2...F9a0B
                                    </p>
                                    <button
                                        className="text-neutral-400 hover:text-primary transition-colors cursor-pointer"
                                        aria-label="Copy wallet address"
                                    >
                                        <Icon name="content_copy" className="text-[16px]" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-100">
                                    <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                                        Wallet Name
                                    </p>
                                    <p className="text-neutral-900 text-sm font-bold truncate">
                                        Main Wallet
                                    </p>
                                </div>
                                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-100">
                                    <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                                        KYC Status
                                    </p>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <Icon name="verified" className="text-success text-[16px]" />
                                        <span className="text-success text-xs font-bold">
                                            Verified
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* IDRP Balance */}
                    <div className="bg-primary text-white rounded-2xl p-6 lg:p-10 shadow-soft flex flex-col justify-between items-start gap-6 relative overflow-hidden lg:col-span-2">
                        <div className="absolute right-0 top-0 w-80 h-80 bg-accent opacity-10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        <div className="flex items-center justify-between w-full relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/10 rounded-lg">
                                    <Icon
                                        name="account_balance"
                                        className="text-white text-[24px]"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold">Wallet IDRP Balance</h2>
                                    <p className="text-xs text-white/60 font-medium">
                                        Your current buying power
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-start relative z-10 w-full">
                            <p className="text-sm opacity-80 font-medium mb-1">
                                Available Balance
                            </p>
                            <div className="flex items-baseline flex-wrap">
                                <span className="text-3xl font-bold opacity-80 mr-2">IDRP</span>
                                <span className="text-4xl font-extrabold tracking-tight">
                                    12,500,000
                                </span>
                            </div>
                        </div>
                        <div className="w-full pt-6 border-t border-white/10 relative z-10 flex flex-wrap gap-4">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="rounded-xl shadow-lg shadow-black/10 flex-1 sm:flex-none"
                            >
                                <span>Top Up IDRP</span>
                                <Icon name="add_circle" className="text-[20px]" />
                            </Button>
                            <Button
                                variant="outline-white"
                                size="lg"
                                className="rounded-xl flex-1 sm:flex-none"
                            >
                                <span>Withdraw</span>
                                <Icon name="arrow_outward" className="text-[20px]" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Investment Overview */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                            <Icon name="analytics" className="text-primary text-[24px]" />
                            Investment Overview
                        </h2>
                        <button className="text-sm font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-1 group">
                            View Portfolio
                            <Icon
                                name="arrow_forward"
                                className="text-[16px] group-hover:translate-x-0.5 transition-transform"
                            />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-soft flex flex-col items-start justify-between gap-6 hover:shadow-md transition-all hover:-translate-y-0.5">
                            <div className="flex items-start justify-between w-full">
                                <div className="size-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center">
                                    <Icon name="trending_up" className="text-[24px]" />
                                </div>
                                <span className="bg-primary/5 text-primary text-xs font-bold px-2 py-1 rounded">
                                    Active
                                </span>
                            </div>
                            <div>
                                <p className="text-neutral-500 text-sm font-medium mb-1">
                                    Vaults Actively Invested
                                </p>
                                <p className="text-4xl font-bold text-neutral-900">7</p>
                                <p className="text-xs text-neutral-500 mt-2 font-medium flex items-center gap-1">
                                    <span className="text-success font-bold flex items-center">
                                        <Icon name="arrow_upward" className="text-[14px]" /> 2
                                    </span>
                                    vs last month
                                </p>
                            </div>
                        </div>
                        <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-soft flex flex-col items-start justify-between gap-6 hover:shadow-md transition-all hover:-translate-y-0.5">
                            <div className="flex items-start justify-between w-full">
                                <div className="size-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                                    <Icon name="payments" className="text-[24px]" />
                                </div>
                                <span className="bg-accent/10 text-accent text-xs font-bold px-2 py-1 rounded">
                                    Total
                                </span>
                            </div>
                            <div>
                                <p className="text-neutral-500 text-sm font-medium mb-1">
                                    Total Investment Amount
                                </p>
                                <p className="text-4xl font-bold text-primary">IDRP 85M</p>
                                <p className="text-xs text-neutral-500 mt-2 font-medium flex items-center gap-1">
                                    Across all active vaults
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Transactions */}
                <div className="flex flex-col gap-4 bg-white border border-neutral-200 rounded-2xl p-6 shadow-soft flex-1">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                            <Icon name="history" className="text-primary text-[20px]" />
                            Transactions
                        </h2>
                    </div>
                    <div className="relative">
                        <Icon
                            name="search"
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-[18px]"
                        />
                        <input
                            className="block w-full rounded-lg border-neutral-200 bg-neutral-50 py-2 pl-9 pr-4 text-xs font-medium text-neutral-900 focus:border-primary focus:ring-primary placeholder:text-neutral-400 focus:outline-none"
                            placeholder="Filter..."
                            type="text"
                            aria-label="Filter transactions"
                        />
                    </div>
                    <div className="flex flex-col gap-3 overflow-y-auto pr-1 custom-scrollbar max-h-[500px]">
                        {RECENT_TRANSACTIONS.map((tx, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between p-3 rounded-lg bg-neutral-50 border border-neutral-100 hover:bg-neutral-100 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`size-8 rounded-full flex items-center justify-center shrink-0 ${tx.type === "sent"
                                            ? "bg-primary/5 text-primary"
                                            : "bg-accent/10 text-accent"
                                            }`}
                                    >
                                        <Icon name={tx.icon} className="text-[16px]" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm font-bold text-neutral-900 truncate">
                                            {tx.title}
                                        </p>
                                        <p className="text-[10px] text-neutral-600">{tx.date}</p>
                                    </div>
                                </div>
                                <span
                                    className={`text-xs font-bold whitespace-nowrap ${tx.type === "sent" ? "text-primary" : "text-accent"
                                        }`}
                                >
                                    {tx.amount}
                                </span>
                            </div>
                        ))}
                    </div>
                    <Button
                        variant="dashed"
                        size="sm"
                        className="mt-auto w-full"
                    >
                        View All Transactions
                    </Button>
                </div>
            </div>
        </main>
    );
}
