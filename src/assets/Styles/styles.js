import {
  StyleSheet
} from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const drawer = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  drawerIcon: {
    marginRight: 10,
  },
    drawerLabel: {
    fontSize: 16,
  },
    activeItem: {
    backgroundColor: '#f0f0f0',
  },
    activeLabel: {
    fontWeight: 'bold',
  },
});

export const itemList = StyleSheet.create({
  container: {fontSize: 18, padding: 10, textAlign: 'center'},
});