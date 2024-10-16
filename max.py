def max_of_three(x, y, z):
    maximum = max(x, y, z)
    return maximum

# Example usage
X = 10
Y = 20
Z = 15

max_value = max_of_three(X, Y, Z)
print(f"The maximum value among {X}, {Y}, and {Z} is: {max_value}")

# Display which number is the maximum
if max_value == X:
    print(f"{X} is the maximum number.")
elif max_value == Y:
    print(f"{Y} is the maximum number.")
else:
    print(f"{Z} is the maximum number.")