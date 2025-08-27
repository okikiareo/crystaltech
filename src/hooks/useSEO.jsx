import { useEffect } from "react";

/**
 * Lightweight SEO helper to set document title, description, and social tags.
 * Accepts partials; unprovided fields fall back to existing values.
 */
export function useSEO(options = {}) {
    useEffect(() => {
        const {
            title,
            description,
            url,
            image,
            type = "website",
        } = options;

        if (typeof title === "string") {
            document.title = title;
        }

        const ensureMeta = (selector, createAttrs) => {
            let el = document.head.querySelector(selector);
            if (!el) {
                el = document.createElement("meta");
                Object.entries(createAttrs).forEach(([k, v]) => el.setAttribute(k, v));
                document.head.appendChild(el);
            }
            return el;
        };

        if (typeof description === "string") {
            const metaDesc = document.head.querySelector('meta[name="description"]')
                || ensureMeta('meta[name="description"]', { name: "description" });
            metaDesc.setAttribute("content", description);
        }

        if (title) {
            const ogTitle = ensureMeta('meta[property="og:title"]', { property: "og:title" });
            ogTitle.setAttribute("content", title);
            const twTitle = ensureMeta('meta[name="twitter:title"]', { name: "twitter:title" });
            twTitle.setAttribute("content", title);
        }

        if (description) {
            const ogDesc = ensureMeta('meta[property="og:description"]', { property: "og:description" });
            ogDesc.setAttribute("content", description);
            const twDesc = ensureMeta('meta[name="twitter:description"]', { name: "twitter:description" });
            twDesc.setAttribute("content", description);
        }

        if (url) {
            const ogUrl = ensureMeta('meta[property="og:url"]', { property: "og:url" });
            ogUrl.setAttribute("content", url);
            let linkCanonical = document.head.querySelector('link[rel="canonical"]');
            if (!linkCanonical) {
                linkCanonical = document.createElement("link");
                linkCanonical.setAttribute("rel", "canonical");
                document.head.appendChild(linkCanonical);
            }
            linkCanonical.setAttribute("href", url);
        }

        if (image) {
            const ogImg = ensureMeta('meta[property="og:image"]', { property: "og:image" });
            ogImg.setAttribute("content", image);
            const twImg = ensureMeta('meta[name="twitter:image"]', { name: "twitter:image" });
            twImg.setAttribute("content", image);
        }

        if (type) {
            const ogType = ensureMeta('meta[property="og:type"]', { property: "og:type" });
            ogType.setAttribute("content", type);
        }
    }, [options.title, options.description, options.url, options.image, options.type]);
}


