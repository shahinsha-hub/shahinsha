#include <stdio.h>

int main() {
    int n, i;
    int largest, smallest;

    // Input the number of elements in the array
    printf("Enter the number of elements in the array: ");
    scanf("%d", &n);

    // Declare the array
    int arr[n];

    // Input the elements of the array
    printf("Enter %d elements:\n", n);
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    // Initialize largest and smallest
    largest = smallest = arr[0];

    // Find the largest and smallest elements
    for (i = 1; i < n; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    // Output the results
    printf("Largest number: %d\n", largest);
    printf("Smallest number: %d\n", smallest);

    return 0;
}