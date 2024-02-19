import { AppState } from 'react-native';

// Check the current app state
const currentAppState = AppState.currentState;

// Listen for app state changes
AppState.addEventListener('change', (newAppState) => {
  if (newAppState === 'active') {
    // App is in the foreground (not on a call)
  } else if (newAppState === 'inactive') {
    // App is transitioning between foreground and background (e.g., during an incoming call)
  } else if (newAppState === 'background') {
    // App is in the background (user may be on a call)
  }
});
