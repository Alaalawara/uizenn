import ResponsiveSwitch from "../components/ResponsiveSwitch";
import DesktopComponentsLayout from "../componentLayout/DesktopComponentsLayout";
import MobileComponentsLayout from "../componentLayout/MobileComponentsLayout";

export default function ComponentsLayout() {
  return (
    <ResponsiveSwitch
      mobile={<MobileComponentsLayout />}
      desktop={<DesktopComponentsLayout />}
    />
  );
}