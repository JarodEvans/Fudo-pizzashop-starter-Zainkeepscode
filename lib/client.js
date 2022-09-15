import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
    projectId: "q7fvtkdt",
    dataset: 'production',
    apiVersion: "2022-07-16",
    useCdn: true,
    token:
    "sktGm3QkTMVwTP8nPmuF4HeguMBM35Dt8YEqXDyHBAcmIukEjDVOLr3KueCQ5DyBQ1R0M0GhlhlfDmoxuR2qBSdk6nBzNxzP0ls4PCXsZaxwy7yP5efBvGKJkqVe15GKuhpOwTeCE2Nd3gCvWmP9daGfKWOSvvQfY3hRIC6zDzTHjN9wLCXA"
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)