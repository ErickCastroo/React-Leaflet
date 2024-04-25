import L from "leaflet";
import venueLocationIcon from "../../assets/venue_location_icon.svg";

export const IconLocacion = L.icon({
  iconUrl: venueLocationIcon,
  iconRetinaUrl: venueLocationIcon,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});