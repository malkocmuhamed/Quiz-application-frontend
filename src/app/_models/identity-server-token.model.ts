export class IdentityServerToken {
    public accessToken: string;
    public tokenType: string;
    public expiresIn: string;
    public scope: string;
    public refreshToken: string;

    constructor(obj?: any) {
        this.accessToken = obj?.access_token ?? "";
        this.tokenType = obj?.token_type ?? "";
        this.expiresIn = obj?.expires_in ?? "";
        this.scope = obj?.scope ?? "";
        this.refreshToken = obj?.refresh_token ?? "";
    }
}