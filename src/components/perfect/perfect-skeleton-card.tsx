import { Skeleton } from "../ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 rounded-xl overflow-hidden motion-preset-pulse">
      <Skeleton className="h-[125px] w-full rounded-xl overflow-hidden" />
    </div>
  );
}
