#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define TABLE_SIZE 10

struct Transaction {
    int transactionID;
    char sender[50];
    char receiver[50];
    double amount;
    struct Transaction *next;
};

struct Transaction* hashTable[TABLE_SIZE];

int hash(int transactionID) {
    return transactionID % TABLE_SIZE;
}

struct Transaction* createTransaction(int transactionID, const char* sender, const char* receiver, double amount) {
    struct Transaction* newTransaction = (struct Transaction*)malloc(sizeof(struct Transaction));
    newTransaction->transactionID = transactionID;
    strcpy(newTransaction->sender, sender);
    strcpy(newTransaction->receiver, receiver);
    newTransaction->amount = amount;
    newTransaction->next = NULL;
    return newTransaction;
}

void insertTransaction(int transactionID, const char* sender, const char* receiver, double amount) {
    int index = hash(transactionID);
    struct Transaction* newTransaction = createTransaction(transactionID, sender, receiver, amount);
    newTransaction->next = hashTable[index];
    hashTable[index] = newTransaction;
}

struct Transaction* searchTransaction(int transactionID) {
    int index = hash(transactionID);
    struct Transaction* temp = hashTable[index];
   
    while (temp != NULL) {
        if (temp->transactionID == transactionID) {
            return temp;
        }
        temp = temp->next;
    }
   
    return NULL;
}

void displayTransactions() {
    for (int i = 0; i < TABLE_SIZE; i++) {
        struct Transaction* temp = hashTable[i];
        if (temp != NULL) {
            printf("Index %d:\n", i);
            while (temp != NULL) {
                printf("  Transaction ID: %d, Sender: %s, Receiver: %s, Amount: %.2f\n", temp->transactionID, temp->sender, temp->receiver, temp->amount);
                temp = temp->next;
            }
        }
    }
}

int main() {
    for (int i = 0; i < TABLE_SIZE; i++) {
        hashTable[i] = NULL;
    }

    int numTransactions;
    printf("Enter the number of transactions to insert: ");
    scanf("%d", &numTransactions);

    for (int i = 0; i < numTransactions; i++) {
        int transactionID;
        char sender[50], receiver[50];
        double amount;

        printf("\nEnter details for transaction %d:\n", i + 1);
        printf("Transaction ID: ");
        scanf("%d", &transactionID);
        printf("Sender: ");
        scanf("%s", sender);
        printf("Receiver: ");
        scanf("%s", receiver);
        printf("Amount: ");
        scanf("%lf", &amount);
        insertTransaction(transactionID, sender, receiver, amount);
    }
    printf("\nTransactions in the bank system:\n");
    displayTransactions();
    int searchID;
    printf("\nEnter transaction ID to search: ");
    scanf("%d", &searchID);
    struct Transaction* transaction = searchTransaction(searchID);
    if (transaction != NULL) {
        printf("\nTransaction found:\n");
        printf("Transaction ID: %d, Sender: %s, Receiver: %s, Amount: %.2f\n", transaction->transactionID, transaction->sender, transaction->receiver, transaction->amount);
    } else {
        printf("\nTransaction ID %d not found.\n", searchID);
    }
    return 0;
}

