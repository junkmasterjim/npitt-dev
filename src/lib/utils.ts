import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPayloadDate(input: string) {
  const m = new Date(Date.parse(input)).getMonth()
  const yyyy = new Date(Date.parse(input)).getFullYear()
  let mm;

  switch (m) {
    case 0:
      mm = "January";
      break;
    case 1:
      mm = "February";
      break;
    case 2:
      mm = "March";
      break;
    case 3:
      mm = "April";
      break;
    case 4:
      mm = "May";
      break;
    case 5:
      mm = "June";
      break;
    case 6:
      mm = "July";
      break;
    case 7:
      mm = "August";
      break;
    case 8:
      mm = "September";
      break;
    case 9:
      mm = "October";
      break;
    case 10:
      mm = "November";
      break;
    case 11:
      mm = "December";
      break;
  }

  return `${mm}, ${yyyy}`
}
