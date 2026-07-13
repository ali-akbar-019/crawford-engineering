// src/utils/useDocumentTitle.ts

import { useEffect } from "react";

const SITE_NAME = "Crawford Engineering & Infrastructure";

export function useDocumentTitle(title: string, description?: string) {
    useEffect(() => {
        const previousTitle = document.title;
        document.title = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;

        let previousDescription: string | null = null;
        let metaTag: HTMLMetaElement | null = null;

        if (description) {
            metaTag = document.querySelector('meta[name="description"]');
            if (metaTag) {
                previousDescription = metaTag.getAttribute("content");
                metaTag.setAttribute("content", description);
            }
        }

        return () => {
            document.title = previousTitle;
            if (metaTag && previousDescription !== null) {
                metaTag.setAttribute("content", previousDescription);
            }
        };
    }, [title, description]);
}
