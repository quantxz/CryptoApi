/*
  Warnings:

  - Made the column `privateKey` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullUserName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "privateKey" TEXT NOT NULL
);
INSERT INTO "new_Users" ("email", "fullUserName", "id", "password", "privateKey") SELECT "email", "fullUserName", "id", "password", "privateKey" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_id_key" ON "Users"("id");
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
CREATE UNIQUE INDEX "Users_privateKey_key" ON "Users"("privateKey");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
