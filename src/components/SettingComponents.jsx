import { Switch } from "antd";

const SettingsComponent = ({ settingInfo }) => {
  return (
    <div className="container mx-auto px-6 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {settingInfo.map((setting) => (
          <div key={setting.id} className="flex items-center space-x-4 p-2">
            {/* Switch Element */}
            <Switch className="flex-shrink-0" />
            {/* Heading and Caption */}
            <div>
              <h3 className="text-sm font-semibold text-gray-800">
                {setting.heading}
              </h3>
              <p className="text-xs font-medium text-gray-400">
                {setting.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsComponent;
