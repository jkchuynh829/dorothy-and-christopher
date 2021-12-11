declare namespace Models {

  interface Guest {
    readonly id: string;
    first_name: string;
    last_name: string;
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    zip_code: string;
    is_attending: boolean;
    meal_preference: string;
    party_id: string;
    created_at: Date;
    updated_at: Date;
  }

  interface Party {
    readonly id: string;
    created_at: Date;
    updated_at: Date;
  }
}
