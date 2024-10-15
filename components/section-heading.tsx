export const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-sm uppercase text-muted-foreground tracking-wider">
      {children}
    </h3>
  );
};
