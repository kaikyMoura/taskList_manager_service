/*
  Warnings:

  - You are about to drop the column `passWord` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `User` table. All the data in the column will be lost.
  - Added the required column `user_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "passWord",
DROP COLUMN "userName",
ADD COLUMN     "user_name" TEXT NOT NULL,
ADD COLUMN     "user_password" TEXT NOT NULL;
