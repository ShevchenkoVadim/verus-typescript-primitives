import { VDXFObject, VerusIDSignature, VerusIDSignatureInterface } from "../";
import { Challenge, ChallengeInterface } from "./Challenge";
export interface RequestInterface {
    chain_id: string;
    signing_id: string;
    signature: VerusIDSignatureInterface;
    challenge: ChallengeInterface;
}
export declare class Request extends VDXFObject {
    chain_id: string;
    signing_id: string;
    signature: VerusIDSignature;
    challenge: Challenge;
    constructor(request: RequestInterface);
    getSignedData(): string;
    stringable(): {
        vdxfkey: string;
        chain_id: string;
        signing_id: string;
        signature: {
            vdxfkey: string;
            signature: string;
        };
        challenge: {
            vdxfkey: string;
            uuid: string;
            client: {
                vdxfkey: string;
                client_id: string;
                name: string;
                redirect_uris: import("./Client").RedirectUri[];
                grant_types: string[];
                response_types: string[];
                scope: string;
                audience: string[];
                owner: string;
                policy_uri: string;
                allowed_cors_origins: string[];
                tos_uri: string;
                client_uri: string;
                logo_uri: string;
                contacts: string[];
                client_secret_expires_at: number;
                subject_type: string;
                token_endpoint_auth_method: string;
                userinfo_signed_response_alg: string;
                created_at: string;
                updated_at: string;
            };
            requested_scope: string[];
            requested_access_token_audience: string[];
            skip: boolean;
            subject: string;
            oidc_context: {} | {
                acr_values: string[];
                display: string;
                id_token_hint_claims: {
                    [key: string]: any;
                };
                login_hint: string;
                ui_locales: string[];
            };
            request_url: string;
            login_challenge: string;
            login_session_id: string;
            acr: string;
            session_id: string;
        };
    };
}
