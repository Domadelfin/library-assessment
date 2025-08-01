/*
  Warnings:

  - Changed the type of `category` on the `Book` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "public"."Categories" AS ENUM ('Fantasy', 'Horror', 'Mystery', 'Romance_Novel', 'Science_Fiction', 'Autobiography', 'Historical_Fiction', 'Thriller', 'Young_Adult', 'Literature', 'Adventure_Fiction', 'History', 'Graphic_Novel', 'Short_Story', 'Cookbook', 'Fairytale', 'Poetry', 'WesternFiction', 'Biography', 'Classics', 'Crime', 'Dystopian');

-- AlterTable
ALTER TABLE "public"."Book" DROP COLUMN "category",
ADD COLUMN     "category" "public"."Categories" NOT NULL;
