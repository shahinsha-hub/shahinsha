#include "stdio.h"

void findLargestAndSmallest(int arr[], int n, int *largest, int *smallest) {
    *largest = arr[0];
    *smallest = arr[0];
    
    for(int i = 1; i < n; i++) {
        if(arr[i] > *largest) {
            *largest = arr[i];
        }
        if(arr[i] < *smallest) {
            *smallest = arr[i];
        }
    }
}

int main() {
    int n;

    printf("Enter the number of elements in the array: ");
    scanf("%d", &n);

    int arr[n];

    printf("Enter the elements of the array:\n");
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    int largest, smallest;
    findLargestAndSmallest(arr, n, &largest, &smallest);

    printf("Largest number: %d\n", largest);
    printf("Smallest number: %d\n", smallest);

    return 0;
}