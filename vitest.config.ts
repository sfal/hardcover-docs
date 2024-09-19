/// <reference types="vitest" />
import {getViteConfig} from 'astro/config';

export default getViteConfig(
    {
        test: {
            coverage: {
                // you can include other reporters, but 'json-summary' is required, json is recommended
                reporter: ['text', 'json-summary', 'json'],
                // If you want a coverage reports even if your tests are failing, include the reportOnFailure option
                reportOnFailure: true,
            }
        }
    },
    {
        site: 'https://docs.hardcover.app',
        trailingSlash: 'always',
    },
);