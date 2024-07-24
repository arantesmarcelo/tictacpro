import { StyleSheet } from 'react-native';
import colors from './colors';
import spacing from './spacing';
import typography from './typography';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.medium,
    justifyContent: 'center',
    alignItems: 'center',    
  },
  text: {
    color: colors.text,
    ...typography.body,
  },
  // Add other global styles
});

export default globalStyles;
