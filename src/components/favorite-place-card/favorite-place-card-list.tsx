import {Offer} from '../../types/offer.ts';
import {MemoizedFavoritePlaceCard} from './favorite-place-card.tsx';
import {memo} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts.ts';

type FavoritesListProps = {
  offers: Offer[];
}

export function FavoritePlaceCardList({offers}: FavoritesListProps) {
  const cities = Array.from(new Set(offers.map((offer) => offer.city.name))).toSorted();

  return (
    <ul className="favorites__list">
      {
        cities
          .map((city) => (

            <li key={city} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to={AppRoute.Main}>
                    <span>{city}</span>
                  </Link>
                </div>
              </div>

              <div className="favorites__places">
                {
                  offers
                    .filter((offer) => offer.city.name === city)
                    .map((offer) => (
                      <MemoizedFavoritePlaceCard
                        key={offer.id}
                        {...offer}
                        imageSrc={offer.previewImage}
                      />
                    ))
                }
              </div>

            </li>))
      }
    </ul>
  );
}

export const MemoizedFavoritePlaceCardList = memo(FavoritePlaceCardList);
