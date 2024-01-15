
import callApi from "./callApi";
export function formaterDateHeure (dateString: string) {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  const formattedDateHeure = `${day}-${month}-${year}  à  ${hours}:${minutes}:${seconds}`;

  return formattedDateHeure;
}



export {
  callApi,
};
