def divide_and_modulus(a, b):
    quotient, remainder = divmod(a, b)
    return quotient, remainder

# Example usage
numerator = 10
denominator = 3
result = divide_and_modulus(numerator, denominator)

print(f"Dividing {numerator} by {denominator}:")
print(f"Quotient: {result[0]}, Remainder: {result[1]}")
