import { Redirect, useRouter } from "expo-router";
import { useContext } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "./_layout";
const weeklySales = [
  { day: "SEG", value: 0.45 },
  { day: "TER", value: 0.7 },
  { day: "QUA", value: 0.55 },
  { day: "QUI", value: 0.82 },
  { day: "SEX", value: 0.65 },
  { day: "SÁB", value: 1 },
  { day: "DOM", value: 0.38 },
];

const recentSales = [
  {
    initials: "MC",
    name: "Maria Clara",
    time: "Hoje, 11:42",
    value: "R$ 289,90",
  },
  {
    initials: "JP",
    name: "João Pedro",
    time: "Hoje, 10:18",
    value: "R$ 154,00",
  },
  { initials: "AS", name: "Ana Souza", time: "Hoje, 09:36", value: "R$ 97,50" },
];

export default function Dashboard() {
  const router = useRouter();
  const { taLogado } = useContext(AuthContext);

  if (taLogado === false) {
    return <Redirect href="/login" />;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.brand}>
              SENAC <Text style={styles.brandDot}>•</Text>
            </Text>
            <Text style={styles.greeting}>Olá, seja bem-vindo!</Text>
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>S</Text>
          </View>
        </View>

        <View style={styles.titleRow}>
          <View>
            <Text style={styles.pageTitle}>Visão geral</Text>
            <Text style={styles.subtitle}>Acompanhe seus resultados</Text>
          </View>
          <View style={styles.period}>
            <Text style={styles.periodText}>Este mês</Text>
            <Text style={styles.periodChevron}>⌄</Text>
          </View>
        </View>

        <View style={styles.revenueCard}>
          <View style={styles.revenueHeader}>
            <Text style={styles.revenueLabel}>Faturamento total</Text>
            <View style={styles.growthBadge}>
              <Text style={styles.growthText}>↑ 12,8%</Text>
            </View>
          </View>
          <Text style={styles.revenueValue}>R$ 150.164,00</Text>
          <Text style={styles.revenueCaption}>em relação ao mês passado</Text>
          <View style={styles.chart}>
            {weeklySales.map((item, index) => (
              <View key={item.day} style={styles.chartColumn}>
                <View
                  style={[
                    styles.chartTrack,
                    index === 5 && styles.chartTrackActive,
                  ]}
                >
                  <View
                    style={[
                      styles.chartBar,
                      { height: `${item.value * 100}%` },
                      index === 5 && styles.chartBarActive,
                    ]}
                  />
                </View>
                <Text style={styles.chartLabel}>{item.day}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.metricsRow}>
          <View style={styles.metricCard}>
            <View style={[styles.metricIcon, styles.salesIcon]}>
              <Text style={styles.metricIconText}>↗</Text>
            </View>
            <Text style={styles.metricLabel}>Vendas hoje</Text>
            <Text style={styles.metricValue}>R$ 4.280,00</Text>
            <Text style={styles.metricHint}>28 pedidos</Text>
          </View>
          <View style={styles.metricCard}>
            <View style={[styles.metricIcon, styles.ticketIcon]}>
              <Text style={styles.metricIconText}>◎</Text>
            </View>
            <Text style={styles.metricLabel}>Ticket médio</Text>
            <Text style={styles.metricValue}>R$ 152,86</Text>
            <Text style={styles.metricHint}>por pedido</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Vendas recentes</Text>
          <Pressable
            accessibilityRole="button"
            onPress={() => router.replace("/")}
            hitSlop={8}
          >
            <Text style={styles.seeAll}>Início</Text>
          </Pressable>
        </View>

        <View style={styles.salesList}>
          {recentSales.map((sale, index) => (
            <View
              key={sale.initials}
              style={[
                styles.saleRow,
                index === recentSales.length - 1 && styles.saleRowLast,
              ]}
            >
              <View style={styles.customerAvatar}>
                <Text style={styles.customerInitials}>{sale.initials}</Text>
              </View>
              <View style={styles.customerInfo}>
                <Text style={styles.customerName}>{sale.name}</Text>
                <Text style={styles.saleTime}>{sale.time}</Text>
              </View>
              <Text style={styles.saleValue}>{sale.value}</Text>
            </View>
          ))}
        </View>

        <Pressable
          accessibilityRole="button"
          style={({ pressed }) => [
            styles.loginButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.loginButtonText}>Acessar área de login</Text>
          <Text style={styles.loginButtonArrow}>→</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F7FB",
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 32,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 28,
  },
  brand: {
    color: "#102A43",
    fontSize: 15,
    fontWeight: "800",
    letterSpacing: 1.4,
  },
  brandDot: {
    color: "#F29B38",
  },
  greeting: {
    color: "#8290A3",
    fontSize: 13,
    marginTop: 5,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#E5EDF7",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: "#1769AA",
    fontSize: 17,
    fontWeight: "700",
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  pageTitle: {
    color: "#172B4D",
    fontSize: 24,
    fontWeight: "700",
  },
  subtitle: {
    color: "#8290A3",
    fontSize: 13,
    marginTop: 5,
  },
  period: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 11,
    paddingVertical: 9,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E8EDF3",
  },
  periodText: {
    color: "#43546A",
    fontSize: 12,
    fontWeight: "600",
  },
  periodChevron: {
    color: "#8290A3",
    fontSize: 16,
    marginLeft: 8,
  },
  revenueCard: {
    backgroundColor: "#1769AA",
    borderRadius: 20,
    padding: 20,
    overflow: "hidden",
  },
  revenueHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  revenueLabel: {
    color: "#D6E8F7",
    fontSize: 13,
  },
  growthBadge: {
    backgroundColor: "rgba(255,255,255,0.16)",
    borderRadius: 12,
    paddingHorizontal: 9,
    paddingVertical: 5,
  },
  growthText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
  },
  revenueValue: {
    color: "#FFFFFF",
    fontSize: 27,
    fontWeight: "700",
    marginTop: 10,
  },
  revenueCaption: {
    color: "#D6E8F7",
    fontSize: 11,
    marginTop: 4,
  },
  chart: {
    height: 94,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 22,
  },
  chartColumn: {
    alignItems: "center",
    flex: 1,
  },
  chartTrack: {
    height: 68,
    width: 15,
    justifyContent: "flex-end",
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: 8,
    overflow: "hidden",
  },
  chartTrackActive: {
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  chartBar: {
    width: "100%",
    backgroundColor: "#A6D3F2",
    borderRadius: 8,
  },
  chartBarActive: {
    backgroundColor: "#FFFFFF",
  },
  chartLabel: {
    color: "#D6E8F7",
    fontSize: 9,
    marginTop: 7,
  },
  metricsRow: {
    flexDirection: "row",
    marginHorizontal: -5,
    marginTop: 14,
  },
  metricCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 14,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#EDF0F5",
  },
  metricIcon: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  salesIcon: {
    backgroundColor: "#E6F4EF",
  },
  ticketIcon: {
    backgroundColor: "#FFF2E5",
  },
  metricIconText: {
    color: "#1769AA",
    fontSize: 17,
    fontWeight: "700",
  },
  metricLabel: {
    color: "#8290A3",
    fontSize: 11,
  },
  metricValue: {
    color: "#172B4D",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 5,
  },
  metricHint: {
    color: "#A0AAB8",
    fontSize: 10,
    marginTop: 4,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 26,
    marginBottom: 12,
  },
  sectionTitle: {
    color: "#172B4D",
    fontSize: 16,
    fontWeight: "700",
  },
  seeAll: {
    color: "#1769AA",
    fontSize: 12,
    fontWeight: "600",
  },
  salesList: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "#EDF0F5",
  },
  saleRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F2F6",
  },
  saleRowLast: {
    borderBottomWidth: 0,
  },
  customerAvatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#EAF1F8",
    alignItems: "center",
    justifyContent: "center",
  },
  customerInitials: {
    color: "#1769AA",
    fontSize: 11,
    fontWeight: "700",
  },
  customerInfo: {
    flex: 1,
    marginLeft: 11,
  },
  customerName: {
    color: "#263B53",
    fontSize: 12,
    fontWeight: "600",
  },
  saleTime: {
    color: "#A0AAB8",
    fontSize: 10,
    marginTop: 4,
  },
  saleValue: {
    color: "#263B53",
    fontSize: 12,
    fontWeight: "700",
  },
  loginButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DCE4ED",
    borderRadius: 12,
    paddingVertical: 14,
    marginTop: 18,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  loginButtonText: {
    color: "#1769AA",
    fontSize: 13,
    fontWeight: "700",
  },
  loginButtonArrow: {
    color: "#1769AA",
    fontSize: 17,
    marginLeft: 8,
  },
});
