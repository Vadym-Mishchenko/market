import './Header.scss';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__nav">
        <a className="header__link" href="/">Women</a>
        <a className="header__link" href="/">Men</a>
        <a className="header__link" href="/">Kids</a>
      </div>
      <div className="header__logo"></div>
      <div className="header__options">
        <select name="currency_type" className="header__select">
          <option value="1" className="header__select-item">$ USD</option>
          <option value="2" className="header__select-item">€ EUR</option>
          <option value="3" className="header__select-item">₴ UA</option>
        </select>
        <div className="header__basket"></div>
      </div>
    </div>
  )
};