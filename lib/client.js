import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = createClient({
    projectId: "ai326fkz",
    dataset: "production",
    apiVersion: "2023-12-07",
    useCdn: true,
    token:
        "skqHNmL1CZU5CR2ZDpG19Umtp3thELx9biTqvWLIgDqCqIk9tgO1jkdLwBnmXhzekL1T9DfJUkA8Nz7FqFtLly462f8mvVIJlhBmaBEjihHMU6Vm12sW21IcQNLYLo8lzW0UFUDVTN870tpTyXLQ3DhnuE0UytLgWdXzjbBQ6m3LSlHnFbgV",
        ignoreBrowserTokenWarning: true
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)