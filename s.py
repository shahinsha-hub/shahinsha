import matplotlib.pyplot as plt
import numpy as np

# Generate data
x = np.linspace(0, 2 * np.pi, 100)  # 100 points from 0 to 2π
y = np.sin(x)  # Compute the sine of each x value

# Create the plot
plt.figure()  # Create a new figure
plt.plot(x, y, label='Sine Wave', color='blue')  # Plot the sine wave
plt.title('Sine Wave')  # Title of the graph
plt.xlabel('x (radians)')  # x-axis label
plt.ylabel('sin(x)')  # y-axis label
plt.axhline(0, color='black', linewidth=0.5, linestyle='--')  # Add a horizontal line at y=0
plt.axvline(0, color='black', linewidth=0.5, linestyle='--')  # Add a vertical line at x=0
plt.grid(True)  # Enable the grid
plt.legend()  # Show legend

# Display the plot
plt.show()
