import { expect, test } from "vitest";
import { resolveEditorMessageAccess } from "../../config.ts";
import { buildCommentedConfigHjson } from "../../configTemplate.ts";

test("generated config preserves the editor account allowlist", () => {
    const config = buildCommentedConfigHjson({
        editorUsers: ["test-user", "another-user"],
    });

    expect(config).toContain('editorUsers: ["test-user", "another-user"]');
});

test("generated config defaults the editor account allowlist to empty", () => {
    const config = buildCommentedConfigHjson({});

    expect(config).toContain("editorUsers: []");
});

test("live allowlisted Editor can be enabled without the general debug switch", () => {
    expect(resolveEditorMessageAccess("live", false, true, ["editor"])).toBe(true);
    expect(resolveEditorMessageAccess("live", false, true, [])).toBe(false);
    expect(resolveEditorMessageAccess("live", false, false, ["editor"])).toBe(false);
});

test("disabled debug master still blocks editor messages in dev", () => {
    expect(resolveEditorMessageAccess("dev", false, true, ["editor"])).toBe(false);
});
