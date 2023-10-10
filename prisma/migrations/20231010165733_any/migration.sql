/*
  Warnings:

  - You are about to drop the column `fullName` on the `Users` table. All the data in the column will be lost.
  - Added the required column `fullUserName` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullUserName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "privateKey" TEXT
);
INSERT INTO "new_Users" ("email", "id", "password", "privateKey") SELECT "email", "id", "password", "privateKey" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_id_key" ON "Users"("id");
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
CREATE UNIQUE INDEX "Users_privateKey_key" ON "Users"("privateKey");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
