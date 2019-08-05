export declare enum UriScheme {
    SCHEME_HTTP = "http",
    SCHEME_HTTPS = "https",
    SCHEME_FTP = "ftp"
}
export declare class URI {
    user: string;
    password: string;
    host: string;
    port: string;
    path: string;
    params: string;
    private f_scheme;
    private custom_port;
    private separate_scheme;
    private parse_protocol;
    private separate_credentials;
    private extract_path_and_params;
    private separate_path_and_params;
    private correct_host;
    private scheme_matches_port;
    constructor(url?: string);
    parse(url: string): void;
    stringify(): string;
    scheme: UriScheme;
}
