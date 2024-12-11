import { Plugin, IAgentRuntime } from "@ai16z/eliza";
import { getBalanceAction } from "./actions/getBalance.ts";
import { faucetAction } from "./actions/faucet.ts";
import { sendZilAction } from "./actions/sendZil.ts";
import { transactionEvaluator } from "./evaluators/transactionEvaluator.ts";
import { walletEvaluator } from "./evaluators/walletEvaluator.ts";
import { networkStatusProvider } from "./providers/networkStatus.ts";

export * from "./actions/index.ts";
export * from "./evaluators/index.ts";
export * from "./providers/index.ts";

export const zilliqaPlugin: Plugin = {
    name: "ZILLIQA",
    description: "Zilliqa blockchain integration plugin",
    actions: [
        getBalanceAction,
        faucetAction,
        sendZilAction
    ],
    evaluators: [
        transactionEvaluator,
        walletEvaluator
    ],
    providers: [
        networkStatusProvider,
    ]

    
};

export default zilliqaPlugin;