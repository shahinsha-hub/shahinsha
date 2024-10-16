def round_number(value, decimals=0):
    return round(value, decimals)

# Example usage
number = 3.14159
rounded_to_2 = round_number(number, 2)
rounded_to_0 = round_number(number)

print(f"Original number: {number}")
print(f"Rounded to 2 decimal places: {rounded_to_2}")
print(f"Rounded to nearest whole number: {rounded_to_0}")