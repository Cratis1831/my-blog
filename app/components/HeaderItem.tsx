import Link from "next/link";
import React from "react";

type Props = {
  url: string;
  label: string;
};

function HeaderItem({ url, label }: Props) {
  return (
    <nav>
      <Link href={url} className="font-semibold">
        {label}
      </Link>
    </nav>
  );
}

export default HeaderItem;
