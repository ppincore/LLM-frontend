import { Link } from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import { Typography } from "antd";
import type { ReactNode } from "react";

type TAppLinkProps = LinkProps & {
  children?: ReactNode
  className?: string;
};

const { Text } = Typography;

const AppLink = (props: TAppLinkProps) => {
  const { children, to, className, ...otherProps } = props;

  return (
    <Link to={to} {...otherProps} className={className}>
      {typeof children === "string" ? <Text>{children}</Text> : children}
    </Link>
  );
};

export default AppLink;
