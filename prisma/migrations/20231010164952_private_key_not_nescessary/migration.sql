-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "privateKey" TEXT
);
INSERT INTO "new_Users" ("email", "fullName", "id", "password", "privateKey") SELECT "email", "fullName", "id", "password", "privateKey" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_id_key" ON "Users"("id");
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
CREATE UNIQUE INDEX "Users_privateKey_key" ON "Users"("privateKey");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
