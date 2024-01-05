export interface VDXFKeyInterface {
    vdxfid: string;
    hash160result: string;
    qualifiedname: {
        name: string;
        namespace: string;
    };
}
export declare const VERUSPAY_INVOICE_VDXF_KEY: VDXFKeyInterface;
export declare const IDENTITY_AUTH_SIG_VDXF_KEY: VDXFKeyInterface;
export declare const LOGIN_CONSENT_RESPONSE_SIG_VDXF_KEY: VDXFKeyInterface;
export declare const LOGIN_CONSENT_REQUEST_VDXF_KEY: VDXFKeyInterface;
export declare const LOGIN_CONSENT_RESPONSE_VDXF_KEY: VDXFKeyInterface;
export declare const LOGIN_CONSENT_CHALLENGE_VDXF_KEY: VDXFKeyInterface;
export declare const LOGIN_CONSENT_DECISION_VDXF_KEY: VDXFKeyInterface;
export declare const WALLET_VDXF_KEY: VDXFKeyInterface;
export declare const LOGIN_CONSENT_REDIRECT_VDXF_KEY: VDXFKeyInterface;
export declare const LOGIN_CONSENT_WEBHOOK_VDXF_KEY: VDXFKeyInterface;
export declare const LOGIN_CONSENT_ATTESTATION_WEBHOOK_VDXF_KEY: VDXFKeyInterface;
export declare const LOGIN_CONSENT_CONTEXT_VDXF_KEY: VDXFKeyInterface;
export declare const LOGIN_CONSENT_ID_PROVISIONING_WEBHOOK_VDXF_KEY: VDXFKeyInterface;
export declare const ID_ADDRESS_VDXF_KEY: VDXFKeyInterface;
export declare const ID_SYSTEMID_VDXF_KEY: VDXFKeyInterface;
export declare const ID_FULLYQUALIFIEDNAME_VDXF_KEY: VDXFKeyInterface;
export declare const ID_PARENT_VDXF_KEY: VDXFKeyInterface;
export declare const LOGIN_CONSENT_PROVISIONING_REQUEST_VDXF_KEY: VDXFKeyInterface;
export declare const LOGIN_CONSENT_PROVISIONING_CHALLENGE_VDXF_KEY: VDXFKeyInterface;
export declare const LOGIN_CONSENT_PROVISIONING_DECISION_VDXF_KEY: VDXFKeyInterface;
export declare const LOGIN_CONSENT_PROVISIONING_RESPONSE_VDXF_KEY: VDXFKeyInterface;
export declare const LOGIN_CONSENT_PROVISIONING_RESULT_VDXF_KEY: VDXFKeyInterface;
export declare const IDENTITY_NAME_COMMITMENT_TXID: VDXFKeyInterface;
export declare const IDENTITY_REGISTRATION_TXID: VDXFKeyInterface;
export declare const IDENTITY_UPDATE_TXID: VDXFKeyInterface;
export declare const LOGIN_CONSENT_PROVISIONING_RESULT_STATE_PENDINGREQUIREDINFO: VDXFKeyInterface;
export declare const LOGIN_CONSENT_PROVISIONING_RESULT_STATE_PENDINGAPPROVAL: VDXFKeyInterface;
export declare const LOGIN_CONSENT_PROVISIONING_RESULT_STATE_COMPLETE: VDXFKeyInterface;
export declare const LOGIN_CONSENT_PROVISIONING_RESULT_STATE_FAILED: VDXFKeyInterface;
export declare const LOGIN_CONSENT_PROVISIONING_ERROR_KEY_NAMETAKEN: VDXFKeyInterface;
export declare const LOGIN_CONSENT_PROVISIONING_ERROR_KEY_UNKNOWN: VDXFKeyInterface;
export declare const LOGIN_CONSENT_PROVISIONING_ERROR_KEY_COMMIT_FAILED: VDXFKeyInterface;
export declare const LOGIN_CONSENT_PROVISIONING_ERROR_KEY_CREATION_FAILED: VDXFKeyInterface;
export declare const LOGIN_CONSENT_PROVISIONING_ERROR_KEY_TRANSFER_FAILED: VDXFKeyInterface;
export declare const SIGNED_SESSION_OBJECT_DATA: VDXFKeyInterface;
export declare const SIGNED_SESSION_OBJECT: VDXFKeyInterface;
export declare const CURRENCY_ADDRESS: VDXFKeyInterface;
interface VDXFIdentityData extends VDXFKeyInterface {
    detail: string;
    name: string;
}
export declare const ATTESTATION_IDENTITY_DATA: {
    [vdxfid: string]: VDXFIdentityData;
};
export declare const CVDXF_Data: {};
export {};
