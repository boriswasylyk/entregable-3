

const LocationInfo = ( { location } ) => {
  return(

    <article className="location">
    <h2 className="location_name">{location?.name}</h2>
    <ul className="location_ul">
        <li className="location_list"><span className="location_span">Type:</span>{location?.type}</li>
        <li className="location_list"><span className="location_span">Dimension:</span>{location?.dimension || 'uknown'}</li>
        <li className="location_list"><span className="location_span">Population:</span>{location?.residents.length}</li>
    </ul>
    </article>
  )

}

export default LocationInfo