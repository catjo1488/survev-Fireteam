import { expect, test } from "vitest";
import { isEditorAuthorized } from "../../server/src/utils/editorAccess.ts";

test("dev mode enables editor by default when edit messages are enabled", () => {
    expect(isEditorAuthorized(undefined, "dev", true)).toBe(true);
    expect(isEditorAuthorized(undefined, "dev", false)).toBe(false);
});

test("live mode requires an allowlisted account slug", () => {
    expect(isEditorAuthorized("editor", "live", true, ["editor"])).toBe(true);
    expect(isEditorAuthorized(undefined, "live", true, ["editor"])).toBe(false);
    expect(isEditorAuthorized("other", "live", true, ["editor"])).toBe(false);
    expect(isEditorAuthorized(" Editor ", "live", true, ["editor"])).toBe(true);
});
