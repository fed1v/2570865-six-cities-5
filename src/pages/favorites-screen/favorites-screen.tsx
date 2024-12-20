import {FavoritePlaceCardList} from '../../components/favorites-list/favorite-place-card-list.tsx';
import {Header} from '../../components/header/header.tsx';
import {Offer} from '../../types/offer.ts';

export function FavoritesScreen() {

  const offers: Offer[] = [];

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>

            <FavoritePlaceCardList
              offers={offers}
            />
          </section>
        </div>
      </main>

      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}
