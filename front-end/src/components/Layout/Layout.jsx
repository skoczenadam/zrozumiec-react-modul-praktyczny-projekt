import { CategoryMenu } from "../CategoryMenu/CategoryMenu";
import { MainContent } from "../MainContent/MainContent";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { Footer } from "../Footer/Footer";
import { IconMenu } from "../IconMenu/IconMenu";
import { Logo } from "../Logo/Logo";
import { MainMenu } from "../MainMenu/MainMenu";
import { TopBar } from "../TopBar/TopBar";
import { Outlet } from "react-router-dom";
import { CURRENCIES } from "../../constants/currencies";
import { CurrencyContext } from "../../contexts/currencyContext";
import { CartContext } from "../../contexts/CartContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export function Layout() {
  const [currency, setCurrency] = useLocalStorage(
    "selected_currency",
    CURRENCIES.PLN
  );
  const [cartItems, setCartItems] = useLocalStorage("cart_products", []);

  function addProductToCart(product) {
    const newState = [...cartItems, product];
    setCartItems(newState);
  }

  function removeProductFromCart(product) {
    const newState = cartItems.filter((item) => item.id !== product.id);
    setCartItems(newState);
  }

  return (
    <CartContext.Provider
      value={[cartItems, addProductToCart, removeProductFromCart]}
    >
      <CurrencyContext.Provider value={[currency, setCurrency]}>
        <MainContent>
          <TopBar>
            <MainMenu />
            <Logo />
            <div>
              <CurrencySelector />
              <IconMenu />
            </div>
          </TopBar>
          <CategoryMenu />
          <Outlet />
        </MainContent>
        <Footer />
      </CurrencyContext.Provider>
    </CartContext.Provider>
  );
}
