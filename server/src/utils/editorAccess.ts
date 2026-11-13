import type { ServerMode } from "../../../configType.ts";

export function isEditorAuthorized(
    slug: string | undefined,
    serverMode: ServerMode,
    allowEditMsg: boolean,
    editorUsers: string[] = [],
): boolean {
    if (!allowEditMsg) return false;
    if (serverMode === "dev") return true;
    const normalizedSlug = slug?.trim().toLowerCase();
    return !!normalizedSlug
        && editorUsers.some((user) => user.trim().toLowerCase() === normalizedSlug);
}
