import { describe, expect, it } from "vite-plus/test";

import { resolveMobileStageLabel } from "./mobileBranding";

describe("resolveMobileStageLabel", () => {
  it.each([
    ["development", "Dev"],
    ["preview", "Preview"],
    ["production", "Alpha"],
    [undefined, "Alpha"],
  ] as const)("labels the %s app variant", (variant, expected) => {
    expect(resolveMobileStageLabel(variant)).toBe(expected);
  });
});
