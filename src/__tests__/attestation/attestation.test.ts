import { ATTESTATION_READ_REQUEST, IDENTITY_VIEW, IDENTITY_DATA_FIRSTNAME, LOGIN_CONSENT_REDIRECT_VDXF_KEY, VerusIDSignature, IDENTITY_DATA_LASTNAME, IDENTITY_DATA_ATTESTOR, IDENTITY_DATA_IDENTITY, ATTESTATION_TYPE } from "../../vdxf";
import { Attestation, LoginConsentRequest } from "../../vdxf/classes";
import { RedirectUri, RequestedPermission } from "../../vdxf/classes/Challenge";
import { Context } from "../../vdxf/classes/Context";
import { CPartialAttestationProof } from "../../vdxf/classes/Attestation";
import { AttestationData, AttestationDataType } from "../../vdxf/classes/attestationData";

describe('Serializes and deserializes attestation request', () => {
  test('attestation request with reply', async () => {
    const req = new LoginConsentRequest({
      system_id: "i5w5MuNik5NtLcYmNzcvaoixooEebB6MGV",
      signing_id: "iB5PRXMHLYcNtM8dfLB6KwfJrHU2mKDYuU",
      signature: {
        signature:
          "AYG2IQABQSAN1fp6A9NIVbxvKuOVLLU+0I+G3oQGbRtS6u4Eampfb217Cdf5FCMScQhV9kMxtjI9GWzpchmjuiTB2tctk6qT",
      },
      challenge: {
        challenge_id: "iKNufKJdLX3Xg8qFru9AuLBvivAEJ88PW4",
        requested_access: [new RequestedPermission("", IDENTITY_VIEW.vdxfid),
        new RequestedPermission({
          accepted_attestors: ["iC9x9VZ2XMop7spFzeXqSKX8WqmrG9cu41"],
          attestation_keys: [
            IDENTITY_DATA_FIRSTNAME.vdxfid,
            IDENTITY_DATA_LASTNAME.vdxfid,
            IDENTITY_DATA_ATTESTOR.vdxfid,
            IDENTITY_DATA_IDENTITY.vdxfid,
            ATTESTATION_TYPE.vdxfid]
        }, ATTESTATION_READ_REQUEST.vdxfid)],
        session_id: "iRQZGW36o3RcVR1xyVT1qWdAKdxp3wUyrh",
        redirect_uris: [
          new RedirectUri(
            "https://www.verus.io",
            LOGIN_CONSENT_REDIRECT_VDXF_KEY.vdxfid
          ),
        ],
        created_at: 1664382484,
        salt: "i6NawEzHMocZnU4h8pPkGpHApvsrHjxwXE",
        context: new Context({
          ["i4KyLCxWZXeSkw15dF95CUKytEK3HU7em9"]: "test",
        }),
      },
    });

    const componentsMap = new Map();

    componentsMap.set(0, new AttestationDataType("Chris", IDENTITY_DATA_FIRSTNAME.vdxfid, "8e6744dc4f229e543bbd00d65b395829e44c8eb7b358ee3131ca25e6ecc3b210"));
    componentsMap.set(1, new AttestationDataType("Monkins", IDENTITY_DATA_LASTNAME.vdxfid, "7c3920940db4385cd305557a57a8df33346712096e76b58d7c4ace05e17b90a2"));
    componentsMap.set(2, new AttestationDataType("chad@", IDENTITY_DATA_IDENTITY.vdxfid, "ce662d61a20ae211728cdb1b924628c84edfe0fcbd59a86f56a125ad73689ac1"));
    componentsMap.set(3, new AttestationDataType("valu attestation@", IDENTITY_DATA_ATTESTOR.vdxfid, "9067dc6a9b38dd15f985770bb819eb62de39a5d1f0e12f9a4807f78968794af4"));
    componentsMap.set(4, new AttestationDataType("KYC Attestation v1", ATTESTATION_TYPE.vdxfid, "338b6ad44179f46fc24f3ed01fd247c9664384a71ba5465aebceece8d7c45a0a"));

    const signaturesForAttestation = new VerusIDSignature({
      signature: "AYG2IQABQSAN1fp6A9NIVbxvKuOVLLU+0I+G3oQGbRtS6u4Eampfb217Cdf5FCMScQhV9kMxtjI9GWzpchmjuiTB2tctk6qT",
    })

    const attestationResponse = new Attestation({
      data: new AttestationData(componentsMap),
      signature: signaturesForAttestation,
      system_id: "i5w5MuNik5NtLcYmNzcvaoixooEebB6MGV",
      signing_id: "iB5PRXMHLYcNtM8dfLB6KwfJrHU2mKDYuU"
    },
    );

    const proofResponseRoot = attestationResponse.rootHash();
    const proofOfItemZero = attestationResponse.getProof([0]);
    const proofOfAll = attestationResponse.getProof([0, 1, 2, 3, 4]);
    const rootOfItemZero = proofOfItemZero.checkProof(0);

    for (let i = 0; i < 5; i++) {

      const rootOfItem = proofOfAll.checkProof(i);
      expect(rootOfItem.toString('hex')).toStrictEqual("bfa5d560098bcc51df0341b18922db0987907febe4eb44958866c015c36919f0");
    }

    expect(proofResponseRoot.toString('hex')).toStrictEqual("bfa5d560098bcc51df0341b18922db0987907febe4eb44958866c015c36919f0");
    expect(rootOfItemZero.toString('hex')).toStrictEqual("bfa5d560098bcc51df0341b18922db0987907febe4eb44958866c015c36919f0");

    // check attestation serializes and deserializes correctly

    const attestationFromBuffer = new Attestation();

    const attestationResponseBuffer = attestationResponse.toBuffer();
    attestationFromBuffer.fromBuffer(attestationResponseBuffer);

    const proofResponseRootFromBuffer = attestationResponse.rootHash();
    expect(proofResponseRootFromBuffer.toString('hex')).toStrictEqual("bfa5d560098bcc51df0341b18922db0987907febe4eb44958866c015c36919f0");

    //check the partialproofs serialize and desserialize

    const proofItemZeroBuffer = proofOfItemZero.toBuffer();

    const proofItemZeroFromBuffer = new CPartialAttestationProof();

    proofItemZeroFromBuffer.fromBuffer(proofItemZeroBuffer);

    const rootOfItemZerofromBuffer = proofOfItemZero.checkProof(0);

    expect(rootOfItemZerofromBuffer.toString('hex')).toStrictEqual("bfa5d560098bcc51df0341b18922db0987907febe4eb44958866c015c36919f0");
  });
});
