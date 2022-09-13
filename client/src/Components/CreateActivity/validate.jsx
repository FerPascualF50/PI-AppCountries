export default function validate(input) {
    let errors = {};
    if (!input.name) {
        errors.name = "Need an activity name";
    } else if (input.name.length < 3) {
        errors.name = "Minumum of 3 characters"
    } else if (input.name.length > 25) {
        errors.name = "Maximum of 25 characters"
    } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(input.name)) {
        errors.name = "Activity name must not contain special or characters numbers"
    }
    return errors
}