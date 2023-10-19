-- CreateTable
CREATE TABLE "crypt" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "crypt" TEXT NOT NULL,
    "cryptKey" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "crypt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
