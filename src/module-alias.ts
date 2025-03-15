import * as moduleAlias from "module-alias";
import { resolve } from "path";

const typedModuleAlias = moduleAlias as unknown as any;

typedModuleAlias.addAliases({
  "@": resolve(__dirname),
});
