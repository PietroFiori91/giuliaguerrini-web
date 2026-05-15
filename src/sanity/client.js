import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "f1ilb70v",
  dataset: "production",
  apiVersion: "2026-05-15",
  useCdn: true,
});
