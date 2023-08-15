// const isRequiredString = (field) => {
//     return field !== null && field !== undefined && field.toString().trim() !== "";
// }


// const isMaxLenghtString = (field) => {
//     // console.log("---------",typeof field.toString(),"----------",field.toString())
//     return  field.toString().trim().length < 256;
// }

// const isValidEmail = (field) =>{
//     // console.log("type of field",typeof field,"=======",field)
//     const Regex = /^mailto: [^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return field.match(Regex);
// }

// const isValidNumber = (field) => {
//     const NumberRegex =/^\+\d+$/;
//     return field.match(NumberRegex)
// }

// const isValidImageFile = (field)  => {
//     if (typeof field !== 'string') {
//         return false;
//       }
//     const FileRegex = /^([a-zA-Z0-9\s_\\.\-:])+(.png|.jpe?g|.gif)$/i;
//     return field.match(FileRegex)
// }

// const ValidationRules = {
//     isRequiredString,
//     isMaxLenghtString,
//     isValidEmail,
//     isValidNumber,
//     isValidImageFile
// }

// export default ValidationRules








 //  else if (!ValidationRules.isRequiredString(field)) {
        //     setValidationState(prevState => { return { ...prevState, linkModalContent: { ...prevState.linkModalContent, value: "This Field Cannot Be Empty" } } })
        //     return false
        // }
        // else if (!ValidationRules.isMaxLenghtString(field)) {
        //     setValidationState(prevState => { return { ...prevState, linkModalContent: { ...prevState.linkModalContent, value: "maximum lenght reached" } } })
        //     return false
        // }