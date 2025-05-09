import _ from "lodash";

class utils {
  isEmptyValue(value: any) {
    return (
      typeof value === "undefined" ||
      typeof value === undefined ||
      value === null ||
      value === "" ||
      value.length === 0 ||
      value === "undefined" ||
      value === undefined
    );
  }

  getValueByPath = (obj: any, path: string) => {
    return _.get(obj, path);
  };
}

const MainUtils = new utils();
export default MainUtils;
