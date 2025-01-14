import katex from 'katex';
import type { KatexOptions } from './math';
/**
 * Renders displayed math
 *
 * Takes a TeX expression and outputs a HTML string for the rendered math in displayed mode
 *
 * @param x TeX expression to be rendered
 * @param options defaults to `{overflowAuto: true, throwOnError: false}`.
 * overflowAuto is a custom option where the default `overflowAuto===true` wraps the generated HTML in a container with `style="overflow-x:auto;"`
 * All KaTeX options are supported, and with the exception of `throwOnError` and `displayMode` are left as default
 *
 * @returns HTML string generated by KaTeX representing displayed math
 *
 * With default options, is equivalent to calling `katex.renderToString(x, {throwOnError: false, displayMode: true})
 * and wrapping it in a container with `style="overflow-x:auto;"`
 */
export function display(x: string, options?: KatexOptionsDisplay) {
	options = {
		overflowAuto: true,
		throwOnError: false,
		displayMode: true,
		...options,
	};
	let katexString = katex.renderToString(x, options);
	katexString = options.overflowAuto
		? `<div style="overflow-x:auto;">${katexString}</div>`
		: katexString;
	return katexString;
}

export interface KatexOptionsDisplay extends KatexOptions {
	/** whether to wrap KaTeX output in a container with style="overflow-x: auto" */
	overflowAuto?: boolean;
}
