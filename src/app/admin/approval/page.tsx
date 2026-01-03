"use client";

import { useState, useEffect } from "react";
import { Icon } from "@/components/ui/icon";
import { ApprovalInboxSection } from "@/components/admin/approvals/approval-inbox-section";
import { ApprovalMonitoringSection } from "@/components/admin/approvals/approval-monitoring-section";
import { ApprovalDetailModal } from "@/components/admin/approvals/approval-detail-modal";
import { getInboxRequests, getInitiatedRequests } from "@/lib/api/approvals";
import type { ApprovalRequest } from "@/types/approval";

export default function AdminApprovalPage() {
  const [inboxRequests, setInboxRequests] = useState<ApprovalRequest[]>([]);
  const [initiatedRequests, setInitiatedRequests] = useState<ApprovalRequest[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<ApprovalRequest | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load data on mount
  useEffect(() => {
    async function loadData() {
      try {
        const [inbox, initiated] = await Promise.all([
          getInboxRequests(),
          getInitiatedRequests(),
        ]);
        setInboxRequests(inbox);
        setInitiatedRequests(initiated);
      } catch (error) {
        console.error("Failed to load approval requests:", error);
      } finally {
        setIsLoading(false);
      }
    }
    void loadData();
  }, []);

  const handleReview = (request: ApprovalRequest) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRequest(null);
  };

  const handleApprove = async (request: ApprovalRequest) => {
    // TODO: Implement actual approval logic
    console.log("Approving request:", request.id);
    // After approval, refresh the data
    const [inbox, initiated] = await Promise.all([
      getInboxRequests(),
      getInitiatedRequests(),
    ]);
    setInboxRequests(inbox);
    setInitiatedRequests(initiated);
    handleCloseModal();
  };

  const handleReject = async (request: ApprovalRequest) => {
    // TODO: Implement actual rejection logic
    console.log("Rejecting request:", request.id);
    // After rejection, refresh the data
    const [inbox, initiated] = await Promise.all([
      getInboxRequests(),
      getInitiatedRequests(),
    ]);
    setInboxRequests(inbox);
    setInitiatedRequests(initiated);
    handleCloseModal();
  };

  if (isLoading) {
    return (
      <main className="flex-1 w-full px-4 md:px-8 py-8 flex flex-col gap-8 overflow-hidden">
        <div className="flex items-center justify-center py-12">
          <p className="text-neutral-600">Loading approval requests...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 w-full px-4 md:px-8 py-8 flex flex-col gap-8 overflow-hidden">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-neutral-900">Admin Priority View</h1>
        <div className="lg:hidden flex items-center gap-2">
          <button className="flex items-center gap-2 text-sm font-bold text-neutral-600 hover:text-primary">
            <Icon name="menu" />
            Menu
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <ApprovalInboxSection requests={inboxRequests} onReview={handleReview} />
        <ApprovalMonitoringSection
          requests={initiatedRequests}
          onReview={handleReview}
        />
      </div>

      <ApprovalDetailModal
        request={selectedRequest}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </main>
  );
}

