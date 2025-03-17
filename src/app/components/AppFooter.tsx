import Box from '@mui/material/Box';

export default function AppFooter() {
  return (
    <footer>
      <Box sx={{ pt: '2rem', textAlign: 'center' }}>
        &copy;{ new Date().getFullYear() } Jae Webb<br />
        data provided by <a href="https://highlightly.net">Highlightly</a><br />
        If there's no data then I've reached my basic plan limit for the day!
      </Box>
    </footer>
  )
}