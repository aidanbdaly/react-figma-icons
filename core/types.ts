import type { SVGProps } from "react";

import * as custom from "../custom";

type IconData = {
  readonly id: string;
  readonly name: string;
  readonly url: string;
};

const ICONS = {
  ...custom,
};

type IconName = keyof typeof ICONS;

const isIconName = (iconName: string): iconName is IconName =>
  iconName in ICONS;

const ICON_KEYS = Object.keys(ICONS).filter(isIconName);

const iconFactory = new Map<IconName, (props: IconCoreProps) => JSX.Element>();

Object.entries(ICONS).forEach(
  ([iconName, icon]) => isIconName(iconName) && iconFactory.set(iconName, icon),
);

type IconCoreProps = SVGProps<SVGSVGElement>;

export { iconFactory, ICON_KEYS, isIconName };
export type { IconName, IconCoreProps, IconData };
