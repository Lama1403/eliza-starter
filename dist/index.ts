import { Character, ModelProviderName, IAgentRuntime, IDatabaseAdapter, ICacheManager, AgentRuntime } from '@ai16z/eliza';

declare const wait: (minTime?: number, maxTime?: number) => Promise<unknown>;
declare function parseArguments(): {
    character?: string;
    characters?: string;
};
declare function loadCharacters(charactersArg: string): Promise<Character[]>;
declare function getTokenForProvider(provider: ModelProviderName, character: Character): string;
declare function initializeClients(character: Character, runtime: IAgentRuntime): Promise<any[]>;
declare function createAgent(character: Character, db: IDatabaseAdapter, cache: ICacheManager, token: string): AgentRuntime;

export { createAgent, getTokenForProvider, initializeClients, loadCharacters, parseArguments, wait };
