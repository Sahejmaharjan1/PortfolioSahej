import { NavigationTemplate } from "@/components/navigation-template";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NavigationTemplate>{children}</NavigationTemplate>;
}
