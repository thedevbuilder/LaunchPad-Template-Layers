import { icons } from 'lucide-react';
interface IconProps {
  name: keyof typeof icons;
  color?: string;
  size?: number;
  className?: string;
}

const Icon = ({ name, color, size, className }: IconProps) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    return <span className="text-red-500 text-xs">Icon "{name}" not found</span>;
  }

  return <LucideIcon color={color} size={size} className={className} />;
};

export default Icon;