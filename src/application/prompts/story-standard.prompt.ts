export const requeredStoryStandardPrompt = (amountScenes: number) => `
- A história deve ter um início, meio e fim.
- Cada interação feita deve impactar no desenrolar da história.
- O diálogo deve ser coerente e seguir uma linha de raciocínio.
- Deve conter ${amountScenes} sceneCharacters.
- Nem todas as cenas precisam ter interações.
- A história deve incluir no mínimo 2 interações.
- O retorno deve ser no formato JSON.
`;
