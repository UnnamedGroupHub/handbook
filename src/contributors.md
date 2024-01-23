<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/24614929',
    name: 'Alex',
    title: 'Director',
    links: [
      { icon: 'github', link: 'https://github.com/zuedev' },
      { icon: 'twitter', link: 'https://twitter.com/zuedev' }
    ]
  },
]
</script>

# Our Contributors

Say hello to our amazing contributors! 👋

Without them, this handbook would not be possible.

<VPTeamMembers size="small" :members="members" />
