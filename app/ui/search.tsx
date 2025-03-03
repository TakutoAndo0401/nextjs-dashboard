"use client";

import { parseAsNumberLiteral, parseAsString, useQueryState } from "nuqs";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  placeholder: string;
};

export default function Search({ placeholder }: Props) {
  const pathname = usePathname();
  const { replace } = useRouter();

  const [params, setParams] = useQueryState("query");

  function handleSearch(term: string) {
    if (term) {
      setParams(term);
    } else {
      setParams(null);
    }

    replace(`${pathname}?${params}`);
  }

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={params || ""}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
