<script setup>
defineProps({
  variant: {
    type: String,
    default: 'window',
  },
  palette: {
    type: Array,
    default: () => ['#173a31', '#d8b56a', '#f3ead7', '#b55436'],
  },
})
</script>

<template>
  <svg
    class="pattern-artwork"
    viewBox="0 0 320 320"
    role="img"
    aria-hidden="true"
    preserveAspectRatio="xMidYMid meet"
  >
    <rect width="320" height="320" :fill="palette[2]" />
    <path d="M0 0h320v320H0z" :fill="palette[0]" opacity="0.04" />

    <g
      v-if="variant === 'window'"
      fill="none"
      :stroke="palette[0]"
      stroke-width="7"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M160 24 296 160 160 296 24 160Z" />
      <path d="M160 55 265 160 160 265 55 160Z" :stroke="palette[1]" stroke-width="4" />
      <path d="M160 24v272M24 160h272M64 64l192 192M256 64 64 256" />
      <circle cx="160" cy="160" r="42" :fill="palette[3]" stroke="none" />
      <path d="M137 160h46M160 137v46" :stroke="palette[2]" stroke-width="6" />
      <path d="M72 72c23-18 50-18 70 0M248 72c-23-18-50-18-70 0M72 248c23 18 50 18 70 0M248 248c-23 18-50 18-70 0" :stroke="palette[3]" stroke-width="5" />
    </g>

    <g
      v-else-if="variant === 'knot'"
      fill="none"
      :stroke="palette[1]"
      stroke-width="12"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M160 42c74 0 118 44 118 118s-44 118-118 118S42 234 42 160 86 42 160 42Z" :stroke="palette[0]" />
      <path d="M102 102h116v116H102z" :stroke="palette[3]" stroke-width="8" />
      <path d="M80 160c32-44 48 44 80 0s48 44 80 0M160 80c-44 32 44 48 0 80s44 48 0 80" />
      <circle cx="160" cy="160" r="24" :fill="palette[1]" stroke="none" />
    </g>

    <g
      v-else-if="variant === 'forest'"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M18 255 96 112l45 87 50-120 73 176Z" :fill="palette[0]" opacity="0.9" />
      <path d="M36 275h248" :stroke="palette[3]" stroke-width="8" />
      <path d="M84 238V93M84 151l-40-38M84 174l48-48M234 225V83M234 135l-46-40M234 167l42-42" :stroke="palette[1]" stroke-width="11" />
      <circle cx="84" cy="74" r="22" :fill="palette[3]" />
      <circle cx="234" cy="64" r="18" :fill="palette[3]" />
      <path d="M52 254c28-34 65-32 92 0M174 254c30-34 65-32 94 0" :stroke="palette[2]" stroke-width="6" />
    </g>

    <g v-else-if="variant === 'fish'" fill="none">
      <path d="M0 160c54-76 106 76 160 0s106 76 160 0" :stroke="palette[0]" stroke-width="18" />
      <path d="M0 160c54 76 106-76 160 0s106-76 160 0" :stroke="palette[1]" stroke-width="18" />
      <g :fill="palette[2]" :stroke="palette[0]" stroke-width="5">
        <ellipse cx="73" cy="88" rx="34" ry="20" transform="rotate(-22 73 88)" />
        <ellipse cx="160" cy="65" rx="34" ry="20" transform="rotate(18 160 65)" />
        <ellipse cx="247" cy="88" rx="34" ry="20" transform="rotate(-22 247 88)" />
        <ellipse cx="73" cy="232" rx="34" ry="20" transform="rotate(22 73 232)" />
        <ellipse cx="160" cy="255" rx="34" ry="20" transform="rotate(-18 160 255)" />
        <ellipse cx="247" cy="232" rx="34" ry="20" transform="rotate(22 247 232)" />
      </g>
      <circle cx="160" cy="160" r="35" :fill="palette[3]" />
      <path d="M140 160h40M160 140v40" :stroke="palette[2]" stroke-width="6" />
    </g>

    <g v-else-if="variant === 'diamond'" fill="none" stroke-linecap="round">
      <path d="m160 18 142 142-142 142L18 160Z" :fill="palette[0]" />
      <path d="m160 52 108 108-108 108-108-108Z" :fill="palette[1]" />
      <path d="m160 91 69 69-69 69-69-69Z" :fill="palette[3]" />
      <path d="M160 18v284M18 160h284M60 60l200 200M260 60 60 260" :stroke="palette[2]" stroke-width="6" />
      <circle cx="160" cy="160" r="18" :fill="palette[0]" />
    </g>

    <g
      v-else-if="variant === 'cloud'"
      fill="none"
      :stroke="palette[0]"
      stroke-width="13"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M49 185c-2-40 28-69 65-58 13-43 76-54 103-19 37-18 77 12 66 52 30 11 31 56 3 70H66c-31-10-37-36-17-45Z" :fill="palette[1]" />
      <path d="M75 176c25-34 51-13 56 8 12-32 54-43 70-4 17-17 46-6 48 18" :stroke="palette[2]" stroke-width="7" />
      <path d="M86 226c26-29 53-29 79 0s53 29 79 0" :stroke="palette[3]" stroke-width="8" />
      <circle cx="160" cy="160" r="20" :fill="palette[3]" stroke="none" />
    </g>

    <g
      v-else-if="variant === 'flower'"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M160 274V100" :stroke="palette[0]" stroke-width="11" />
      <path d="M160 176c-46 5-75-20-79-60 43-2 76 20 79 60ZM160 142c43 3 69-20 73-58-40-3-70 20-73 58Z" :fill="palette[0]" />
      <path d="M160 239c-38 3-64-16-71-48 35-4 62 13 71 48ZM160 218c38 3 64-16 71-48-35-4-62 13-71 48Z" :fill="palette[1]" />
      <g :fill="palette[3]" :stroke="palette[0]" stroke-width="5">
        <circle cx="160" cy="82" r="28" />
        <circle cx="118" cy="111" r="27" />
        <circle cx="202" cy="111" r="27" />
        <circle cx="131" cy="154" r="27" />
        <circle cx="189" cy="154" r="27" />
      </g>
      <circle cx="160" cy="125" r="25" :fill="palette[1]" />
      <path d="M145 125h30M160 110v30" :stroke="palette[2]" stroke-width="6" />
    </g>

    <g v-else-if="variant === 'ribbon'" fill="none" stroke-linecap="round">
      <path d="M20 115c38-60 90-60 128 0s90 60 128 0" :stroke="palette[0]" stroke-width="22" />
      <path d="M20 205c38 60 90 60 128 0s90-60 128 0" :stroke="palette[1]" stroke-width="22" />
      <path d="M54 160h212" :stroke="palette[2]" stroke-width="7" stroke-dasharray="12 12" />
      <g :fill="palette[3]" :stroke="palette[0]" stroke-width="5">
        <circle cx="72" cy="160" r="24" />
        <circle cx="160" cy="160" r="34" />
        <circle cx="248" cy="160" r="24" />
      </g>
      <circle cx="160" cy="160" r="13" :fill="palette[1]" />
    </g>

    <g
      v-else-if="variant === 'lattice'"
      fill="none"
      :stroke="palette[0]"
      stroke-width="11"
      stroke-linejoin="round"
    >
      <path d="M30 30h260v260H30z" :stroke="palette[1]" stroke-width="8" />
      <path d="M52 52h96v96H52zM172 52h96v96h-96zM52 172h96v96H52zM172 172h96v96h-96z" :fill="palette[2]" />
      <path d="M68 84h64M84 68v64M188 84h64M204 68v64M68 204h64M84 188v64M188 204h64M204 188v64" :stroke="palette[0]" />
      <path d="M52 160h216M160 52v216" :stroke="palette[3]" stroke-width="13" />
      <path d="M132 132h56v56h-56z" :fill="palette[3]" />
    </g>

    <g v-else fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M160 282V48" :stroke="palette[0]" stroke-width="12" />
      <path d="M160 150c-54-4-78-38-72-85 45-1 74 32 72 85ZM160 112c52-4 76-37 70-83-44-1-72 31-70 83ZM160 225c-48-4-70-34-65-76 41-1 67 29 65 76ZM160 192c46-4 68-33 63-73-39-1-65 29-63 73Z" :fill="palette[1]" />
      <circle cx="160" cy="52" r="24" :fill="palette[3]" />
      <circle cx="88" cy="80" r="17" :fill="palette[3]" />
      <circle cx="232" cy="49" r="17" :fill="palette[3]" />
      <circle cx="96" cy="170" r="15" :fill="palette[3]" />
      <circle cx="224" cy="143" r="15" :fill="palette[3]" />
      <path d="M112 282h96" :stroke="palette[0]" stroke-width="10" />
    </g>
  </svg>
</template>
