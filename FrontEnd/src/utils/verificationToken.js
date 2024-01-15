import jwt_decode from "jwt-decode";

export default function verificationToken(token) {
  const decodedToken = jwt_decode(token);
  const expirationTimestamp = decodedToken.exp; // expression du temps en seconde
  const currentTimestamp = Math.floor(Date.now() / 1000); // Timestamp actuel en secondes
  if (currentTimestamp >= expirationTimestamp) {
    console.log("Le token a expiré.");
  } else {
    console.log("Le token est valide.");
  }
}
