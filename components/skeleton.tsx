'use client';

export function SkeletonLoader() {
  return (
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="space-y-2 animate-pulse">
          <div className="h-12 bg-card rounded-lg"></div>
          <div className="h-4 bg-card/60 rounded w-3/4"></div>
        </div>
      ))}
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-card p-6 rounded-xl border border-border animate-pulse">
      <div className="h-6 bg-muted rounded-lg mb-4 w-1/2"></div>
      <div className="space-y-3">
        <div className="h-4 bg-muted rounded"></div>
        <div className="h-4 bg-muted rounded w-5/6"></div>
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-16 bg-card rounded-lg w-3/4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-card rounded"></div>
        <div className="h-4 bg-card rounded w-5/6"></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="h-12 bg-card rounded-lg"></div>
        <div className="h-12 bg-card rounded-lg"></div>
      </div>
    </div>
  );
}
