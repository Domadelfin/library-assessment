-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('Available', 'Checked_Out', 'Reserved', 'Lost');

-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('Librarian', 'Member');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "public"."Role" NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "PendingOverduePayment" DECIMAL(65,30) NOT NULL DEFAULT 0.00,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "isbn" TEXT,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BookCopy" (
    "id" SERIAL NOT NULL,
    "bookId" INTEGER NOT NULL,
    "shelfId" INTEGER NOT NULL,
    "status" "public"."Status" NOT NULL DEFAULT 'Available',
    "checkOut" TIMESTAMP(3),
    "borrowerId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "barcode" TEXT,

    CONSTRAINT "BookCopy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Author" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BorrowHistory" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "bookCopyId" INTEGER NOT NULL,
    "borrowedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "returnedAt" TIMESTAMP(3),

    CONSTRAINT "BorrowHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Book_isbn_key" ON "public"."Book"("isbn");

-- CreateIndex
CREATE UNIQUE INDEX "BookCopy_barcode_key" ON "public"."BookCopy"("barcode");

-- AddForeignKey
ALTER TABLE "public"."Book" ADD CONSTRAINT "Book_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BookCopy" ADD CONSTRAINT "BookCopy_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "public"."Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BookCopy" ADD CONSTRAINT "BookCopy_borrowerId_fkey" FOREIGN KEY ("borrowerId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BorrowHistory" ADD CONSTRAINT "BorrowHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BorrowHistory" ADD CONSTRAINT "BorrowHistory_bookCopyId_fkey" FOREIGN KEY ("bookCopyId") REFERENCES "public"."BookCopy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
