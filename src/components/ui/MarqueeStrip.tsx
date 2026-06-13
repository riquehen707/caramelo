import { Container } from "./Container";
import styles from "./MarqueeStrip.module.scss";

type MarqueeStripProps = {
  items: string[];
};

export function MarqueeStrip({ items }: MarqueeStripProps) {
  return (
    <div className={`${styles.root} marquee-strip`}>
      <Container className="flex flex-wrap items-center justify-between gap-3 py-4">
        {items.map((item, index) => (
          <span
            key={item}
            className="text-sm font-black uppercase tracking-[0.12em]"
          >
            {index > 0 ? <span className="mr-3 text-caramelo">/</span> : null}
            {item}
          </span>
        ))}
      </Container>
    </div>
  );
}
