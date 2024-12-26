import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "5w9bsirz",
  dataset: "production",
  apiVersion: "2024-11-01",
  useCdn: false,
});