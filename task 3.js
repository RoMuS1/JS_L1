function whatCentury(year)
{
  let stoletie = Math.floor((parseInt(year) - 1) / 100) + 1;
  let suffix = (stoletie % 10 === 1 && stoletie % 100 !== 11) ? "st" :(stoletie % 10 === 2 && stoletie % 100 !== 12) ? "nd" : (stoletie % 10 === 3 && stoletie % 100 !== 13) ? "rd" : "th";
  return stoletie + suffix;
}