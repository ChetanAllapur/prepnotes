/**
 * Shared domain types for PrepNotes web and mobile apps.
 */

export type ContentStatus = "draft" | "published" | "archived";

export interface Topic {
  id: string;
  title: string;
  slug: string;
  description?: string;
  status: ContentStatus;
  createdAt: string;
  updatedAt: string;
}

export interface Note {
  id: string;
  topicId: string;
  title: string;
  slug: string;
  description?: string;
  content?: string;
  status: ContentStatus;
  createdAt: string;
  updatedAt: string;
}

export interface PdfResource {
  id: string;
  noteId: string;
  title: string;
  fileSizeBytes?: number;
  pageCount?: number;
  priceInPaise: number;
  currency: "INR";
  status: ContentStatus;
}

export interface UserProfile {
  id: string;
  displayName?: string;
  email: string;
  role: "user" | "admin";
}

export interface Purchase {
  id: string;
  userId: string;
  resourceId: string;
  amountInPaise: number;
  currency: "INR";
  status: "pending" | "paid" | "failed" | "refunded";
  purchasedAt?: string;
}