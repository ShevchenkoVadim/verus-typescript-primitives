import { ApiRequest } from "../../ApiRequest";
import { ApiPrimitiveJson, RequestParams } from "../../ApiPrimitive";
import { GET_ADDRESS_DELTAS } from "../../../constants/cmds";

interface Addresses {
  addresses: Array<string>;
  start?: number;
  end?: number;
  chaininfo?: boolean;
  verbosity?: number;
  friendlynames?: boolean;
}

export class GetAddressDeltasRequest extends ApiRequest {
  addresses: Addresses;

  constructor(chain: string, addresses: Addresses) {
    super(chain, GET_ADDRESS_DELTAS);
    this.addresses = addresses;
  }

  getParams(): RequestParams {
    return [
      this.addresses as {
        addresses: Array<string>;
        start?: number;
        end?: number;
        chaininfo?: boolean;
        verbosity?: number;
        friendlynames?: boolean;
      },
    ];
  }

  static fromJson(object: ApiPrimitiveJson): GetAddressDeltasRequest {
    return new GetAddressDeltasRequest(
      object.chain as string,
      object.addresses as unknown as Addresses
    );
  }

  toJson(): ApiPrimitiveJson {
    return {
      chain: this.chain,
      addresses: this.addresses as {
        addresses: Array<string>;
        start?: number;
        end?: number;
        chaininfo?: boolean;
        verbosity?: number;
        friendlynames?: boolean;
      },
    };
  }
}
