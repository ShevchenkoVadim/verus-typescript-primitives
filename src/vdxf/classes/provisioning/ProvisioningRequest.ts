import {
  VerusIDSignatureInterface,
  LOGIN_CONSENT_PROVISIONING_REQUEST_VDXF_KEY
} from "../../";
import { R_ADDR_VERSION } from "../../../constants/vdxf";
import { Request } from "../Request";
import { ProvisioningChallenge, ProvisioningChallengeInterface } from "./ProvisioningChallenge";

export interface ProvisioningRequestInterface {
  signing_address?: string;
  signature?: VerusIDSignatureInterface;
  challenge: ProvisioningChallengeInterface;
}

export class ProvisioningRequest extends Request {
  signing_address?: string;
  challenge: ProvisioningChallenge;

  constructor(
    request: ProvisioningRequestInterface = {
      signing_address: "",
      challenge: new ProvisioningChallenge(),
    }
  ) {
    super(
      {
        system_id: null,
        signing_id: null,
        challenge: request.challenge,
        signature: request.signature
      },
      LOGIN_CONSENT_PROVISIONING_REQUEST_VDXF_KEY.vdxfid
    );

    this.challenge = new ProvisioningChallenge(request.challenge)
    this.signing_address = request.signing_address;
  }

  stringable() {
    return {
      vdxfkey: this.vdxfkey,
      system_id: null,
      signing_address: this.signing_address,
      signing_id: null,
      signature: this.signature ? this.signature.stringable() : this.signature,
      challenge: this.challenge.stringable(),
    };
  }

  dataByteLength(): number {
    const length = this._dataByteLength(false, this.signing_address);

    return length;
  }

  toDataBuffer(): Buffer {
    const buffer = this._toDataBuffer(false, this.signing_address);

    return buffer;
  }

  fromDataBuffer(buffer: Buffer, offset?: number): number {
    let _offset = this._fromDataBuffer(buffer, offset, R_ADDR_VERSION, false, false)

    this.challenge = new ProvisioningChallenge()
    _offset = this.challenge.fromBuffer(buffer, _offset)
    this.signing_address = this.signing_id
    this.signing_id = null

    return _offset;
  }

  toWalletDeeplinkUri(): string {
    throw new Error("Cannot create deeplink from provisioning request");
  }

  static fromWalletDeeplinkUri(uri: string): Request {
    throw new Error("Cannot create provisioning request from deeplink");
  }
}
