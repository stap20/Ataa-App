export default function formatDonationNumber(number) {
    // Convert the number to a string
    let strNumber = String(number);
    
    // Calculate the number of leading zeros needed to reach a total length of 6 characters
    let leadingZeros = 5 - strNumber.length;
    
    // Create a string with leading zeros
    let zerosString = "0".repeat(leadingZeros);
    
    // Concatenate the leading zeros with the number
    let formattedNumber = zerosString + strNumber;
    
    // Prefix with '#'
    return "#" + formattedNumber;
}