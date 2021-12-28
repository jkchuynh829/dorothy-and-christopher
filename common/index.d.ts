declare namespace Models {
  interface Guest {
    readonly id: string;
    first_name: string;
    last_name: string;
    is_attending: boolean;
    meal_preference: string;
    party_id: string;
    created_at: Date;
    updated_at: Date;
  }

  interface Party {
    readonly id: string;
    name: string;
    size: number;
    address: string;
    created_at: Date;
    updated_at: Date;
  }
}
