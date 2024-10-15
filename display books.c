#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_BOOKS 100
#define TITLE_LENGTH 100
#define AUTHOR_LENGTH 100

// Define the structure for a book
struct Book {
    int id;
    char title[TITLE_LENGTH];
    char author[AUTHOR_LENGTH];
};

// Function prototypes
void addBook(struct Book books[], int *count);
void displayBooks(struct Book books[], int count);

int main() {
    struct Book books[MAX_BOOKS];
    int count = 0;
    int choice;

    do {
        printf("\nLibrary Management System\n");
        printf("1. Add Book\n");
        printf("2. Display Books\n");
        printf("3. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        getchar();  // To consume the newline character

        switch (choice) {
            case 1:
                addBook(books, &count);
                break;
            case 2:
                displayBooks(books, count);
                break;
            case 3:
                printf("Exiting the system.\n");
                break;
            default:
                printf("Invalid choice! Please try again.\n");
        }
    } while (choice != 3);

    return 0;
}

// Function to add a book
void addBook(struct Book books[], int *count) {
    if (*count >= MAX_BOOKS) {
        printf("Cannot add more books, library is full!\n");
        return;
    }

    struct Book newBook;
    newBook.id = *count + 1;  // Auto-increment ID

    printf("Enter title: ");
    fgets(newBook.title, TITLE_LENGTH, stdin);
    newBook.title[strcspn(newBook.title, "\n")] = 0; // Remove newline

    printf("Enter author: ");
    fgets(newBook.author, AUTHOR_LENGTH, stdin);
    newBook.author[strcspn(newBook.author, "\n")] = 0; // Remove newline

    books[*count] = newBook;
    (*count)++;
    printf("Book added successfully!\n");
}

// Function to display all books
void displayBooks(struct Book books[], int count) {
    if (count == 0) {
        printf("No books available in the library.\n");
        return;
    }

    printf("\nList of Books:\n");
    for (int i = 0; i < count; i++) {
        printf("ID: %d\n", books[i].id);
        printf("Title: %s\n", books[i].title);
        printf("Author: %s\n", books[i].author);
        printf("--------------------\n");
    }
}