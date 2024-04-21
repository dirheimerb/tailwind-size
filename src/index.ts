import plugin from "tailwindcss/plugin.js";
import Sizing from "./sizing.js";
import { PluginAPI } from "tailwindcss/types/config.js";
import './styles.css';

const baseSelectors: string = Object.entries(Sizing).map(([key, value]) => {
    return `.${key}`; // This will generate class selectors based on keys from Sizing
}).join(',\n');

const sizing = plugin(function({ addUtilities }: PluginAPI) {
    // The way Tailwind's addUtilities function is used needs to map each selector to its corresponding styles
    const utilities = Object.entries(Sizing).reduce((acc, [key, value]) => {
        acc[`.${key}`] = value; // Construct each utility class
        return acc;
    }, {} as Record<string, any>);

    // Add all utilities at once
    addUtilities(utilities);

    // Add base selectors
    addUtilities({
        [baseSelectors]: {
            boxSizing: 'border-box',
        },
    });
});

export default sizing;

export * from './sizing.js';
export * from './type.js';
export * from './convert.js';
