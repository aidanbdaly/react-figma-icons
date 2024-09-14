import type { IconCoreProps, IconName } from "./core";

import { cloneElement } from "react";

import { iconFactory } from "./core";

type IconProps = IconCoreProps & { readonly name: IconName };

const Icon = (props: IconProps): JSX.Element => {
  const { name, className, style } = props;

  const Icon = iconFactory.get(name);

  if (!Icon) {
    return <span />;
  }

  return cloneElement(<Icon className={className} style={style} />);
};

export { Icon };
export type { IconProps };
