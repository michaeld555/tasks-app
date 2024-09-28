import { Dimensions, StyleSheet } from "react-native";

const CARD_WIDTH = Math.min(Dimensions.get('screen').width * 0.75, 400);

export const styles = StyleSheet.create({
    container: {
      paddingVertical: 24,
      paddingHorizontal: 0,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
    title: {
      paddingHorizontal: 24,
      fontSize: 32,
      fontWeight: '700',
      color: '#1d1d1d',
      marginBottom: 12,
    },
    /** List */
    list: {
      marginBottom: 24,
    },
    listHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 24,
    },
    listTitle: {
      fontSize: 18,
      fontWeight: '600',
      lineHeight: 22,
      color: '#121a26',
    },
    listAction: {
      fontSize: 14,
      fontWeight: '500',
      lineHeight: 20,
      color: '#778599',
    },
    listContent: {
      paddingVertical: 12,
      paddingHorizontal: 18,
    },
    /** Card */
    card: {
      width: CARD_WIDTH,
      paddingVertical: 16,
      paddingHorizontal: 20,
      borderRadius: 12,
      backgroundColor: '#fff',
      marginHorizontal: 6,
      shadowColor: '#90a0ca',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 1,
    },
    cardTop: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    cardIcon: {
      width: 44,
      height: 44,
      borderRadius: 9999,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#eff1f5',
    },
    cardBody: {
      paddingLeft: 12,
    },
    cardTitle: {
      fontSize: 15,
      fontWeight: '600',
      lineHeight: 18,
      color: '#121a26',
      marginBottom: 4,
    },
    cardSubtitle: {
      fontSize: 14,
      fontWeight: '500',
      lineHeight: 18,
      color: '#778599',
    },
    cardFooter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 18,
    },
    cardFooterText: {
      fontSize: 13,
      fontWeight: '500',
      lineHeight: 18,
      color: '#778599',
    },
  });