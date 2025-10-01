/*
  Warnings:

  - The `artists` column on the `Song` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `duration` on the `Song` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "public"."Song_artists_key";

-- AlterTable
ALTER TABLE "public"."Song" DROP COLUMN "artists",
ADD COLUMN     "artists" TEXT[],
DROP COLUMN "duration",
ADD COLUMN     "duration" INTEGER NOT NULL;
