import { expect, test } from "vitest";
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
