import React, { useState } from 'react';
import './shopping.css';

const App = () => {
    const [shopName, setShopName] = useState('');
    const [shops, setShops] = useState([]);
    const [currentShop, setCurrentShop] = useState(null);
    const [itemName, setItemName] = useState('');

    const createShop = () => {
        if (shopName) {
            setShops([...shops, { name: shopName, items: [] }]);
            setShopName('');
        }
    };

    const addItem = () => {
        if (itemName && currentShop) {
            const updatedShops = shops.map(shop => {
                if (shop.name === currentShop.name) {
                    return { ...shop, items: [...shop.items, itemName] };
                }
                return shop;
            });
            setShops(updatedShops);
            setItemName('');
        }
    };

    const selectShop = (shop) => {
        setCurrentShop(shop);
    };

    return (
        <div className="container">
            <h1>Shopping List</h1>
            <input
                type="text"
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
                placeholder="Enter shop name..."
            />
            <button onClick={createShop}>Create Shop</button>
            <div id="shopListContainer">
                <h2>Shops</h2>
                <ul id="shopList">
                    {shops.map((shop) => (
                        <li key={shop.name} onClick={() => selectShop(shop)}>
                            {shop.name}
                        </li>
                    ))}
                </ul>
            </div>
            {currentShop && (
                <div id="currentShopContainer">
                    <h2 id="currentShopTitle">{currentShop.name}</h2>
                    <input
                        type="text"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        placeholder="Enter an item..."
                    />
                    <button onClick={addItem}>Add Item</button>
                    <ul id="shoppingList">
                        {currentShop.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default App;
