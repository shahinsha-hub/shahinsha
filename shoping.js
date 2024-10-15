const shopList = document.getElementById('shopList');
const shoppingList = document.getElementById('shoppingList');
const currentShopTitle = document.getElementById('currentShopTitle');
const currentShopContainer = document.getElementById('currentShopContainer');
const itemInput = document.getElementById('itemInput');

let shops = {}; // Object to hold shop names and their items
let currentShop = null;

// Create a new shop
document.getElementById('createShopButton').addEventListener('click', function() {
    const shopInput = document.getElementById('shopInput');
    const shopName = shopInput.value.trim();

    if (shopName !== '' && !shops[shopName]) {
        shops[shopName] = []; // Initialize an empty array for this shop's items

        const shopItem = document.createElement('li');
        shopItem.textContent = shopName;

        const removeShopButton = document.createElement('button');
        removeShopButton.textContent = 'Remove';
        removeShopButton.addEventListener('click', function() {
            removeShop(shopName);
        });

        shopItem.appendChild(removeShopButton);
        shopItem.style.display = 'flex';
        shopItem.style.justifyContent = 'space-between';
        
        shopItem.addEventListener('click', function() {
            currentShop = shopName;
            currentShopTitle.textContent = currentShop;
            displayItems();
            currentShopContainer.style.display = 'block';
            shopInput.value = ''; // Clear input field
        });

        shopList.appendChild(shopItem);
        shopInput.value = ''; // Clear input field
    }
});

// Add item to the current shopping list
document.getElementById('addItemButton').addEventListener('click', function() {
    const itemValue = itemInput.value.trim();

    if (itemValue !== '' && currentShop) {
        shops[currentShop].push(itemValue); // Add item to the current shop's array
        displayItems(); // Update the display
        itemInput.value = ''; // Clear input field
    }
});

// Display items for the current shop
function displayItems() {
    shoppingList.innerHTML = ''; // Clear previous items

    if (shops[currentShop]) {
        shops[currentShop].forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', function() {
                removeItem(item);
            });

            listItem.appendChild(removeButton);
            shoppingList.appendChild(listItem);
        });
    }
}

// Remove item from the current shop's list
function removeItem(item) {
    shops[currentShop] = shops[currentShop].filter(i => i !== item);
    displayItems(); // Update the display
}

// Remove shop and its items
function removeShop(shopName) {
    delete shops[shopName]; // Remove the shop from the shops object
    const shopItems = Array.from(shopList.children);
    shopItems.forEach(shopItem => {
        if (shopItem.textContent.includes(shopName)) {
            shopList.removeChild(shopItem);
        }
    });
    // Hide current shop view if the removed shop is currently selected
    if (currentShop === shopName) {
        currentShopContainer.style.display = 'none';
        currentShop = null;
        shoppingList.innerHTML = ''; // Clear the displayed items
    }
}