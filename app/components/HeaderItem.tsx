import Link from "next/link";
import React from "react";

type Props = {
  url: string;
  label: string;
};

function HeaderItem({ url, label }: Props) {
  return (
    <Link href={url} className="font-semibold">
      {label}
    </Link>
  );
}

export default HeaderItem;
