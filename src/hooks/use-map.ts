import {MutableRefObject, useEffect, useRef, useState} from 'react';
import {Nullable} from 'vitest';
import leaflet from 'leaflet';
import {City} from '../types/city.ts';

export function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City) {
  const [map, setMap] = useState<Nullable<leaflet.Map>>(null);
  const isRenderedRef = useRef(false);

  useEffect(
    () => {
      if (mapRef.current !== null) {
        if (!isRenderedRef.current) {
          const instance = leaflet.map(mapRef.current, {
            center: {
              lat: city.location.latitude,
              lng: city.location.longitude
            },
            zoom: city.location.zoom
          });

          leaflet
            .tileLayer(
              'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
              {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
              },
            )
            .addTo(instance);

          setMap(instance);
          isRenderedRef.current = true;
        } else {
          map?.setView(
            {
              lat: city.location.latitude,
              lng: city.location.longitude
            },
            city.location.zoom
          );
        }
      }
    }, [mapRef, city, map]);

  return map;
}
