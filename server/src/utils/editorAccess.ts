import type { ServerMode } from "../../../configType.ts";

export function isEditorAuthorized(
    slug: string | undefined,
    serverMode: ServerMode,
    allowEditMsg: boolean,
    editorUsers: string[] = [],
): boolean {
    if (!allowEditMsg) return false;
    if (serverMode === "dev") return true;
    return !!slug && editorUsers.includes(slug);
}
