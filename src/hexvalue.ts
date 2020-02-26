import { computed } from "@vue/composition-api";

export function useHexValue(props: any) {

  const hexString = computed(() => {
    let str: string = props.value.toString(16);
    while (str.length < 8) {
      str = '0' + str;
    }

    str = str.slice(0, 6) + ' ' + str.slice(6);
    str = str.slice(0, 4) + ' ' + str.slice(4);
    str = str.slice(0, 2) + ' ' + str.slice(2);

    return str.toUpperCase();
  });

  return {
    hexString,
  };
}