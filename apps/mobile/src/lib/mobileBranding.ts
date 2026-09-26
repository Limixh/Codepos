export type MobileStageLabel = "Alpha" | "Dev" | "Preview";

export function resolveMobileStageLabel(appVariant: unknown): MobileStageLabel {
  if (appVariant === "development") return "Dev";
  if (appVariant === "preview") return "Preview";
  return "Alpha";
}
