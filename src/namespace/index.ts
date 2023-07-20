export default (str: string, divider: string): object => {
  return str.split(divider).reduceRight((cur, acc) => {
    return { [acc]: cur }
  }, {});;
};
