#include<stdio.h>

int reverse_number(int num) {
    int reversed = 0;
    
    while (num != 0) {
        int digit = num % 10; // Get the last digit
        reversed = reversed * 10 + digit; // Append digit to reversed number
        num /= 10; // Remove the last digit from num
    }
    
    return reversed;
}

int main() {
    int number;

    // Get user input
    printf("Enter a number to reverse: ");
    scanf("%d", &number);
    
    int reversed_number = reverse_number(number);
    printf("The reversed number is: %d\n", reversed_number);
    
    return 0;
}