declare module 'svelte-select' {
  // WIP: extend when more properties are needed.
  type SelectProps = {
    items: { value: string, label: string }[],
    selectedValue?: any | undefined,
    showIndicator?: boolean,
  };  

  import type { SvelteComponent } from "svelte"; 
  class Select extends SvelteComponent { $$prop_def: SelectProps }
  export default Select; 
}
