"use client";

import React from "react";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";

type RequestStatus = "Pending" | "Signed" | "Rejected" | "Approved" | "Executed";
type RequestType = "Add Tradeable Asset" | "Close Vault" | "Cash Out";

interface SignRequest {
    id: string;
    type: RequestType;
    status: RequestStatus;
    initiatedBy: string;
    initiatedByAddress: string;
    vault: string;
    created: string;
    currentSignatures: number;
    requiredSignatures: number;
    progressColor: "info" | "success" | "primary";
}

const INBOX_REQUESTS: SignRequest[] = [
    {
        id: "1",
        type: "Add Tradeable Asset",
        status: "Pending",
        initiatedBy: "Trader John",
        initiatedByAddress: "0x71...21",
        vault: "Vault Alpha",
        created: "Jan 20, 10:30 AM",
        currentSignatures: 1,
        requiredSignatures: 2,
        progressColor: "info",
    },
    {
        id: "2",
        type: "Close Vault",
        status: "Pending",
        initiatedBy: "Admin Jane",
        initiatedByAddress: "0x89...11",
        vault: "Vault Beta",
        created: "Jan 18, 02:15 PM",
        currentSignatures: 2,
        requiredSignatures: 2,
        progressColor: "info",
    },
    {
        id: "3",
        type: "Add Tradeable Asset",
        status: "Signed",
        initiatedBy: "Trader Mike",
        initiatedByAddress: "0x33...99",
        vault: "Vault Gamma",
        created: "Jan 15, 09:00 AM",
        currentSignatures: 3,
        requiredSignatures: 2,
        progressColor: "success",
    },
];

interface InitiatedRequest {
    id: string;
    type: RequestType;
    status: RequestStatus;
    targetVault: string;
    amount: string;
    lastUpdated: string;
    currentSignatures: number;
    requiredSignatures: number;
    progressColor: "success" | "info" | "primary";
    note?: string;
}

const INITIATED_REQUESTS: InitiatedRequest[] = [
    {
        id: "1",
        type: "Cash Out",
        status: "Approved",
        targetVault: "Vault Gamma",
        amount: "IDRP 5,000,000",
        lastUpdated: "Jan 21, 09:00 AM",
        currentSignatures: 3,
        requiredSignatures: 2,
        progressColor: "success",
        note: "Processing auto-execution (2/3 Threshold Met)",
    },
    {
        id: "2",
        type: "Close Vault",
        status: "Pending",
        targetVault: "Vault Delta",
        amount: "N/A",
        lastUpdated: "Jan 19, 05:00 PM",
        currentSignatures: 1,
        requiredSignatures: 2,
        progressColor: "info",
        note: "Waiting for 2/3 signatures",
    },
    {
        id: "3",
        type: "Cash Out",
        status: "Executed",
        targetVault: "Vault Epsilon",
        amount: "IDRP 2,000,000",
        lastUpdated: "Jan 10, 01:00 PM",
        currentSignatures: 3,
        requiredSignatures: 2,
        progressColor: "primary",
    },
];

export default function ApprovalPage() {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <main className="flex-1 w-full px-4 md:px-8 py-8 flex flex-col gap-8 overflow-hidden">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-neutral-900">
                    Transparent Approval Hub
                </h1>
                <div className="lg:hidden flex items-center gap-2">
                    <button className="flex items-center gap-2 text-sm font-bold text-neutral-600 hover:text-primary">
                        <Icon name="menu" />
                        Menu
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-8">
                {/* Multisig Sign Requests (Inbox) */}
                <Card className="shadow-soft border-neutral-200">
                    <CardHeader className="flex flex-col gap-6 pb-0">
                        <div>
                            <CardTitle className="flex items-center gap-2 text-xl">
                                <Icon name="inbox" className="text-primary text-[24px]" />
                                Multisig Sign Requests{" "}
                                <span className="text-neutral-500 font-medium text-sm">
                                    (Inbox)
                                </span>
                            </CardTitle>
                            <CardDescription className="mt-1 text-neutral-600">
                                Requests waiting for your action. Review and sign to proceed.
                            </CardDescription>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="relative flex-1">
                                <Icon
                                    name="filter_alt"
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-[18px]"
                                />
                                <select className="block w-full rounded-lg border-neutral-200 bg-neutral-50 py-2 pl-9 pr-4 text-xs font-medium text-neutral-900 focus:border-primary focus:ring-primary focus:outline-none">
                                    <option>All Request Types</option>
                                    <option>Add Tradeable Asset</option>
                                    <option>Close Vault</option>
                                    <option>Cash Out</option>
                                </select>
                            </div>
                            <div className="relative flex-1">
                                <Icon
                                    name="lock"
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-[18px]"
                                />
                                <select className="block w-full rounded-lg border-neutral-200 bg-neutral-50 py-2 pl-9 pr-4 text-xs font-medium text-neutral-900 focus:border-primary focus:ring-primary focus:outline-none">
                                    <option>All Vaults</option>
                                    <option>Vault Alpha</option>
                                    <option>Vault Beta</option>
                                </select>
                            </div>
                            <div className="relative flex-1">
                                <Icon
                                    name="visibility"
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-[18px]"
                                />
                                <select className="block w-full rounded-lg border-neutral-200 bg-neutral-50 py-2 pl-9 pr-4 text-xs font-medium text-neutral-900 focus:border-primary focus:ring-primary focus:outline-none">
                                    <option>Pending</option>
                                    <option>Signed</option>
                                    <option>Rejected</option>
                                </select>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4 mt-6">
                        {INBOX_REQUESTS.map((request) => (
                            <div
                                key={request.id}
                                onClick={() => request.status === "Pending" && setShowModal(true)}
                                className={`bg-neutral-50 border border-neutral-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer ${request.status === "Signed" ? "opacity-70" : ""
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-sm font-bold text-neutral-900">
                                        {request.type}
                                    </h3>
                                    <span
                                        className={`text-xs font-bold px-2 py-0.5 rounded-full ${request.status === "Pending"
                                            ? "bg-info/10 text-info"
                                            : "bg-success/10 text-success"
                                            }`}
                                    >
                                        {request.status}
                                    </span>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs text-neutral-600 mb-3">
                                    <div>
                                        <span className="font-medium">Initiated By:</span>{" "}
                                        {request.initiatedBy}{" "}
                                        <span className="text-neutral-400 font-mono text-[10px] ml-1">
                                            ({request.initiatedByAddress})
                                        </span>
                                    </div>
                                    <div>
                                        <span className="font-medium">Vault:</span>{" "}
                                        <a className="text-primary hover:underline font-bold" href="#">
                                            {request.vault}
                                        </a>
                                    </div>
                                    <div>
                                        <span className="font-medium">Created:</span>{" "}
                                        {request.created}
                                    </div>
                                    <div>
                                        <span className="font-medium">Progress:</span>{" "}
                                        {request.currentSignatures}/{request.requiredSignatures} (
                                        {request.requiredSignatures} required)
                                    </div>
                                </div>
                                <div className="h-1 bg-neutral-200 rounded-full overflow-hidden mb-4">
                                    <div
                                        className={`h-full ${request.progressColor === "info"
                                            ? "bg-info"
                                            : request.progressColor === "success"
                                                ? "bg-success"
                                                : "bg-primary"
                                            }`}
                                        style={{
                                            width: `${(request.currentSignatures / request.requiredSignatures) *
                                                100
                                                }%`,
                                        }}
                                    ></div>
                                </div>
                                <div className="text-right">
                                    {request.status === "Pending" ? (
                                        <Button size="sm" className="px-4 py-2 h-auto rounded-lg">
                                            Review & Sign
                                        </Button>
                                    ) : (
                                        <Button
                                            size="sm"
                                            className="px-4 py-2 h-auto rounded-lg bg-neutral-200 text-neutral-600 cursor-not-allowed hover:bg-neutral-200 hover:text-neutral-600"
                                            disabled
                                        >
                                            Signed
                                        </Button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Multisig Sign Initiated (Monitoring) */}
                <Card className="shadow-soft border-neutral-200">
                    <CardHeader className="flex flex-col gap-6 pb-0">
                        <div>
                            <CardTitle className="flex items-center gap-2 text-xl">
                                <Icon
                                    name="track_changes"
                                    className="text-accent text-[24px]"
                                />
                                Multisig Sign Initiated{" "}
                                <span className="text-neutral-500 font-medium text-sm">
                                    (Monitoring)
                                </span>
                            </CardTitle>
                            <CardDescription className="mt-1 text-neutral-600">
                                Requests you initiated, tracking progress and accountability.
                            </CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4 mt-6">
                        {INITIATED_REQUESTS.map((request) => (
                            <div
                                key={request.id}
                                className={`bg-neutral-50 border border-neutral-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer ${request.status === "Executed" ? "opacity-70" : ""
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-sm font-bold text-neutral-900">
                                        {request.type}
                                    </h3>
                                    <span
                                        className={`text-xs font-bold px-2 py-0.5 rounded-full ${request.status === "Approved"
                                            ? "bg-success/10 text-success"
                                            : request.status === "Pending"
                                                ? "bg-info/10 text-info"
                                                : "bg-primary/10 text-primary"
                                            }`}
                                    >
                                        {request.status}
                                    </span>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs text-neutral-600 mb-3">
                                    <div>
                                        <span className="font-medium">Target Vault:</span>{" "}
                                        {request.targetVault}
                                    </div>
                                    <div>
                                        <span className="font-medium">Amount:</span>{" "}
                                        {request.amount}
                                    </div>
                                    <div>
                                        <span className="font-medium">Last Updated:</span>{" "}
                                        {request.lastUpdated}
                                    </div>
                                    <div>
                                        <span className="font-medium">Progress:</span>{" "}
                                        {request.currentSignatures}/{request.requiredSignatures} (
                                        {request.requiredSignatures} required)
                                    </div>
                                </div>
                                <div className="h-1 bg-neutral-200 rounded-full overflow-hidden mb-4">
                                    <div
                                        className={`h-full ${request.progressColor === "success"
                                            ? "bg-success"
                                            : request.progressColor === "info"
                                                ? "bg-info"
                                                : "bg-primary"
                                            }`}
                                        style={{
                                            width: `${(request.currentSignatures / request.requiredSignatures) *
                                                100
                                                }%`,
                                        }}
                                    ></div>
                                </div>
                                {request.note && (
                                    <div
                                        className={`text-xs font-bold ${request.status === "Approved"
                                            ? "text-success"
                                            : "text-neutral-500"
                                            }`}
                                    >
                                        <span>{request.note}</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-neutral-900/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 flex flex-col gap-6">
                        <div className="flex justify-between items-center pb-4 border-b border-neutral-100">
                            <h2 className="text-2xl font-bold text-neutral-900">
                                Multisig Request Detail
                            </h2>
                            <button
                                className="text-neutral-400 hover:text-neutral-600"
                                onClick={() => setShowModal(false)}
                            >
                                <Icon name="close" />
                            </button>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-lg font-bold text-neutral-900">Summary</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                                <div>
                                    <span className="font-semibold text-neutral-600">
                                        Request Type:
                                    </span>{" "}
                                    <span className="text-neutral-900">Add Tradeable Asset</span>
                                </div>
                                <div>
                                    <span className="font-semibold text-neutral-600">
                                        Initiator:
                                    </span>{" "}
                                    <span className="text-neutral-900">Trader John</span>
                                </div>
                                <div>
                                    <span className="font-semibold text-neutral-600">Vault:</span>{" "}
                                    <span className="text-neutral-900">
                                        Vault Alpha (0xabc123...)
                                    </span>
                                </div>
                                <div>
                                    <span className="font-semibold text-neutral-600">
                                        Status:
                                    </span>{" "}
                                    <span className="text-info font-bold">Pending</span>
                                </div>
                            </div>
                        </div>
                        <div className="border border-neutral-200 rounded-xl p-5 flex flex-col gap-4">
                            <h3 className="text-lg font-bold text-neutral-900">
                                Action Details
                            </h3>
                            <div className="text-neutral-700 text-sm">
                                <p className="mb-2">
                                    Trader John has initiated a request to add &apos;Cocoa Beans&apos; as a
                                    new tradeable asset to Vault Alpha.
                                </p>
                                <p className="mb-2">
                                    This will expand the investment opportunities within the vault,
                                    allowing for diversification into agricultural commodities.
                                </p>
                                <div className="text-sm text-neutral-600 font-mono bg-neutral-50 p-3 rounded-lg overflow-x-auto mt-2">
                                    {`{ "type": "ADD_ASSET", "vaultId": "0xabc123...", "asset": "Cocoa Beans", "reason": "Market diversification" }`}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-lg font-bold text-neutral-900">
                                Approval Progress
                            </h3>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-neutral-600 text-sm">
                                    Required Signatures:
                                </span>
                                <span className="font-bold text-neutral-900">2 of 3</span>
                            </div>
                            <ul className="flex flex-col gap-3">
                                <li className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <Icon
                                            name="check_circle"
                                            className="text-success text-[20px]"
                                        />
                                        <div className="font-semibold text-neutral-900 text-sm">
                                            Investor A{" "}
                                            <span className="text-xs font-medium text-neutral-500">
                                                (You)
                                            </span>
                                        </div>
                                    </div>
                                    <span className="text-xs text-neutral-600">
                                        Jan 20, 10:45 AM
                                    </span>
                                </li>
                                <li className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <Icon
                                            name="schedule"
                                            className="text-info text-[20px]"
                                        />
                                        <div className="font-semibold text-neutral-900 text-sm">
                                            Investor B
                                        </div>
                                    </div>
                                    <span className="text-xs text-neutral-600">Pending</span>
                                </li>
                                <li className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <Icon
                                            name="schedule"
                                            className="text-info text-[20px]"
                                        />
                                        <div className="font-semibold text-neutral-900 text-sm">
                                            Investor C
                                        </div>
                                    </div>
                                    <span className="text-xs text-neutral-600">Pending</span>
                                </li>
                            </ul>
                        </div>
                        <div className="border border-red-200 bg-red-50 rounded-xl p-5 flex flex-col gap-4">
                            <h3 className="text-lg font-bold text-danger flex items-center gap-2">
                                <Icon name="warning" className="text-[24px]" />
                                Risk & Context
                            </h3>
                            <div className="text-neutral-700 text-sm">
                                <p className="mb-2">
                                    <span className="font-semibold">Asset Risk Note:</span> Cocoa
                                    Beans are subject to commodity market volatility, geopolitical
                                    risks, and climate-related supply disruptions. This asset
                                    class can experience significant price swings.
                                </p>
                                <p className="mb-2">
                                    <span className="font-semibold">Vault Impact Summary:</span>{" "}
                                    Adding this asset will increase the overall diversification of
                                    Vault Alpha but also introduce exposure to agricultural
                                    commodity specific risks. Initial allocation will be
                                    conservative.
                                </p>
                                <p>
                                    <span className="font-semibold">Liquidity Warning:</span>{" "}
                                    Futures contracts for agricultural commodities may have lower
                                    liquidity compared to major financial instruments, potentially
                                    affecting execution prices during large trades.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-end gap-3 pt-4 border-t border-neutral-100">
                            <Button
                                className="bg-danger/10 text-danger hover:bg-danger/20 hover:text-danger transition-colors text-sm font-bold px-5 py-2.5 rounded-lg shadow-none border-none"
                            >
                                Reject
                            </Button>
                            <Button className="px-5 py-2.5 rounded-lg">
                                Sign & Approve
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
