import { FaReact, FaAws } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { AiOutlinePython } from "react-icons/ai";
import { SiMysql, SiPostgresql, SiDocker } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

interface iconProps {
  className: string;
  size: number;
}

export const icons = {
  "Aws": ({className, size} : iconProps) => <FaAws className={className} size={size} />,
  "Docker": ({className, size} : iconProps) => <SiDocker className={className} size={size} />,
  "Mysql": ({className, size} : iconProps) => <SiMysql className={className} size={size} />,
  "Python": ({className, size} : iconProps) => <AiOutlinePython className={className} size={size} />,
  "React": ({className, size} : iconProps) => <FaReact className={className} size={size} />,
  "TypeScript": ({className, size} : iconProps) => <TbBrandTypescript className={className} size={size} />,
  "Go": ({className, size} : iconProps) => <FaGolang className={className} size={size} />,
  "PostgreSQL": ({className, size} : iconProps) => <SiPostgresql className={className} size={size} />,
}