import {MainScreen} from '../../pages/main-screen/main-screen.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {LoginScreen} from '../../pages/login-screen/login-screen.tsx';
import {NotFoundScreen} from '../../pages/not-found-screen/not-found-screen.tsx';
import {OfferScreen} from '../../pages/offer-screen/offer-screen.tsx';
import {AppRoute, AuthorizationStatus} from '../../consts.ts';
import {PrivateRoute} from '../private-route/private-route.tsx';
import {FavoritesScreen} from '../../pages/favorites-screen/favorites-screen.tsx';
import {Offer} from '../../types/offer.ts';
import {fillOffersList} from '../../store/action.ts';
import {useAppDispatch} from '../../hooks';
import {OFFERS} from '../../mocks/offers.ts';

type AppScreenProps = {
  offers: Offer[];
  cityNames: string[];
};

export function App({offers, cityNames}: AppScreenProps) {
  const dispatch = useAppDispatch();
  dispatch(fillOffersList({offers: OFFERS}));

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainScreen
              cityNames={cityNames}
            />
          }
        />

        <Route
          path={AppRoute.Login}
          element={<LoginScreen/>}
        />

        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesScreen offers={offers}/>
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.Offer}
          element={<OfferScreen/>}
        />

        <Route
          path="*"
          element={<NotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>

  );
}
