def check_type(value):
    return type(value)

# Example usage
values = [42, 3.14, "Hello", True, [1, 2, 3]]

for val in values:
    val_type = check_type(val)
    print(f"The value: {val} has type: {val_type}")