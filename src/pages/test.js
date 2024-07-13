const [isAllChecked, setIsAllChecked] = useState(false);
  const [storeChecked, setStoreChecked] = useState({
    techStore: false,
    keyboardWorld: false,
    soundHub: false,
    accessoryDepot: false,
    gamers: false,
    watchStore: false,
    storageSolution: false,
    cameraWorld: false,
  });
  const [cartItems, setCartItems] = useState([]);
  const [totalCheckedProducts, setTotalCheckedProducts] = useState(0);

  useEffect(() => {
    // Load checked items from localStorage on component mount
    const savedCheckedItems =
      JSON.parse(localStorage.getItem("checkedItems")) || {};
    setStoreChecked(savedCheckedItems);
  }, []);

  useEffect(() => {
    // Save checked items to localStorage whenever storeChecked changes
    localStorage.setItem("checkedItems", JSON.stringify(storeChecked));

    // Update total checked products count
    const totalChecked = Object.values(storeChecked).filter(
      (item) => item
    ).length;
    setTotalCheckedProducts(totalChecked);
  }, [storeChecked]);

  const handleAllCheckedChange = (e) => {
    const isChecked = e.target.checked;
    setIsAllChecked(isChecked);
    setStoreChecked({
      techStore: isChecked,
      keyboardWorld: isChecked,
      soundHub: isChecked,
      accessoryDepot: isChecked,
      gamers: isChecked,
      watchStore: isChecked,
      storageSolution: isChecked,
      cameraWorld: isChecked,
    });
  };

  const handleStoreCheckedChange = (store, isChecked) => {
    setStoreChecked((prev) => ({
      ...prev,
      [store]: isChecked,
    }));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    // Update cart items in localStorage
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };
