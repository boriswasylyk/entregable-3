import useFetch from "../../Hook/useFetch"
import React, { useEffect } from "react";

const ResidentCard = ( { url } ) => {
 
 const [ resident, getResident ] = useFetch(url)
 
 useEffect(() => {
   getResident()
   
 }, [])
 
 console.log(resident)

    return (
    <article class="resident">
        <header class="resident_header">
            <img class="resident_image" src={resident?.image} alt="" />
            <div class="resident_status">
                <span class={`resident_status_circule ${resident?.status}`}></span>
                <span class="resident_status_value">{resident?.status}</span>
            </div>
        </header>
        <section class="resident_body">
            <h3 class="resident_name">{resident?.name}</h3>
            <hr class="resident_separator" />
            <ul class="resident_list">
          <li class="resident_item"><span class="resident_label">Specie</span><span class="resident_value">{resident?.species}</span></li>
          <li class="resident_item"><span class="resident_label">Origin</span><span class="resident_value">{resident?.origin.name}</span></li>
          <li class="resident_item"><span class="resident _label">Eppisodes where appear</span><span class="resident_value">{resident?.episode.length}</span></li>
        </ul>
        </section>
    </article>
  )
}

export default ResidentCard