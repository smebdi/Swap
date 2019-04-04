/*
  This section is required to define each of the models for data types.
  Angular requires that these are strongly typed. If you are getting a response back
  from a server, it's an enforced best-practice to create a data type, rather than
  manually call any properties on the response.
*/

// ratebeer response wrapper to extract array of beer items
export interface UntappdExtract {
    meta: {
      code: number,
      response_time: {
          time: number,
          measure: string
        },
      init_time: {
          time: number,
          measure: string
        }
    };
    notifications: [];
    response: {
        message: string,
        time_taken: number,
        brewery_id: number,
        search_type: string,
        type_id: number,
        search_version: number,
        found: number,
        offset: number,
        limit: number,
        term: string,
        parsed_term: string,
        beers: {
            count: number,
            items: Untappd[]
        }
    };
  }
  export interface Untappd {
    checkin_count: number;
    have_had: boolean;
    your_count: number;
    beer: UntappdBeer;
    brewery: UntappdBrewery;
    likes: number;
  }

  export interface UntappdBrewery {
    brewery_id: string;
    brewery_name: string;
    brewery_slug: string;
    brewery_page_url: string;
    brewery_type: string;
    brewery_label: string;
    country_name: string;
    contact: {
        twitter: string,
        facebook: string,
        instagram: string,
        url: string
    };
    location: {
        brewery_city: string,
        brewery_state: string,
        lat: number,
        lng: number
    };
    brewery_active: number;
}

  export interface UntappdBeer {
    bid: number;
    beer_name?: string;
    beer_label?: string;
    beer_abv?: number;
    beer_slug?: string;
    beer_ibu?: number;
    beer_description?: string;
    created_at?: string;
    beer_style?: string;
    in_production?: number;
    auth_rating?: string;
    wish_list?: boolean;
    style_name?: string;
  }
