import React from "react";
import MapGG from "../../Map/Map";
import SelectOption from "../../SelectOption/SelectOption";

function Location() {
  return (
    <div className="pt-[100px] w-[100%] flex items-start justify-end">
      <div>
        {" "}
        <iframe
          title="This is a unique title"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125412.45219489711!2d106.64345590458338!3d10.800654291746905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529b421cb3027%3A0x5a2a30403562cb79!2zRG9taW5vJ3MgUGl6emEgTMOqIFbEg24gS2jGsMahbmc!5e0!3m2!1svi!2s!4v1665469662983!5m2!1svi!2s"
          width="1140"
          height="480"
          allowfullscreen=""
          loading="lazy"
        />
      </div>
      <SelectOption />
    </div>
  );
}

export default Location;
