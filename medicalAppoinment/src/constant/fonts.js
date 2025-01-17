import { isIOS } from "../utils/platformUtil";

export const fontFamilies = {
    // MONTSERRAT: {
    //   normal: isIOS() ? 'Montserrat-Regular' : 'MontserratRegular',
    //   medium: isIOS() ? 'Montserrat-Medium' : 'MontserratMedium',
    //   bold: isIOS() ? 'Montserrat-Bold' : 'MontserratBold',
    // },
    // RUBIK: {
    //   normal: isIOS() ? 'Rubik-Regular' : 'RubikRegular',
    //   medium: isIOS() ? 'Rubik-Medium' : 'RubikMedium',
    //   bold: isIOS() ? 'Rubik-Bold' : 'RubikBold',
    // },
    // Adjust the above code to fit your chosen fonts' names


    bold: isIOS() ? 'AveriaSansLibre-Bold' : 'AveriaSansLibre-Bold',
  };