def show_attributes_and_methods(obj):
    return dir(obj)

# Example usage
string_example = "Hello, World!"
list_example = [1, 2, 3]

print("Attributes and methods of a string:")
print(show_attributes_and_methods(string_example))

print("\nAttributes and methods of a list:")
print(show_attributes_and_methods(list_example))