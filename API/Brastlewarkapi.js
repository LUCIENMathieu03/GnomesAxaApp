export function getBrastlewarkInhabitantsWhitSearchText(text){
  const url = "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}