/**
 * Converts a flag emoji (e.g. 🇺🇸) to its 2-letter ISO country code (e.g. "US").
 * Flag emojis use Regional Indicator Symbols: each letter = codepoint 0x1F1E6 + (letter offset).
 */
function flagEmojiToCode(flag: string): string | null {
    const codePoints = [...flag].map((c) => c.codePointAt(0) ?? 0);
    const ri = codePoints.filter((cp) => cp >= 0x1f1e6 && cp <= 0x1f1ff);
    if (ri.length !== 2) return null;
    return String.fromCharCode(ri[0] - 0x1f1e6 + 65, ri[1] - 0x1f1e6 + 65);
}

interface FlagProps {
    emoji: string;
    size?: number;
    className?: string;
}

export function Flag({ emoji, size = 20, className = "" }: FlagProps) {
    const code = flagEmojiToCode(emoji);
    if (!code) return <span>{emoji}</span>;

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w80/${code.toLowerCase()}.png 2x`}
            width={size}
            height={Math.round(size * 0.75)}
            alt={`${code} flag`}
            className={`inline-block align-middle ${className}`}
            loading="lazy"
            style={{ verticalAlign: "middle" }}
        />
    );
}
