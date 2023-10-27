<script lang="ts">
export let name;
const label = (str) => {
    return str
        .toLowerCase()
        .split('_')
        .map(function (word) {
            return word.replace(word[0], word[0].toUpperCase())
        })
        .join(' ')
}
</script>

<div class="space-y-2">
    <label for={name}  class="text-sm text-jip-700 pl-2 font-semibold tracking-wide">
        {label(name)}
    </label>
    <input class="bg-gray-100 border-2 border-gray-200 rounded-md  py-2.5 pl-2 text-gray-900 shadow-sm w-full text-sm" {...$$props}>
</div>
