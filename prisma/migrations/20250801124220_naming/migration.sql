/*
  Warnings:

  - You are about to drop the column `PendingOverduePayment` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "PendingOverduePayment",
ADD COLUMN     "pendingOverduePayment" DECIMAL(65,30) NOT NULL DEFAULT 0.0;
