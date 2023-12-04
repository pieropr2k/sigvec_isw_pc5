export interface Client {
    id_client: number | null;
    last_names: string;
    first_names: string;
    birthdate: Date | null;
    email: string;
    document_id_type: string;
    document_id_number: number;
    n_phone: number;
    district: string;
    direction: string;
}
