/*
  Warnings:

  - Added the required column `cryptId` to the `crypt` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_crypt" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cryptId" TEXT NOT NULL,
    "crypt" TEXT NOT NULL,
    "cryptKey" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "crypt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_crypt" ("crypt", "cryptKey", "id", "userId") SELECT "crypt", "cryptKey", "id", "userId" FROM "crypt";
DROP TABLE "crypt";
ALTER TABLE "new_crypt" RENAME TO "crypt";
CREATE UNIQUE INDEX "crypt_cryptId_key" ON "crypt"("cryptId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
