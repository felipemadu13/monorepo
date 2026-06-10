import { Fragment as e, createBlock as t, createElementBlock as n, createElementVNode as r, createTextVNode as i, createVNode as a, defineComponent as o, openBlock as s, ref as c, renderList as l, renderSlot as u, resolveComponent as d, toDisplayString as f, unref as p, withCtx as m } from "vue";
import "vuetify";
import "vuetify/components";
import "vuetify/directives";
//#region ../../node_modules/.pnpm/@monorepo+ui@1.0.0_typescript@6.0.3_vue@3.5.35_typescript@6.0.3_/node_modules/@monorepo/ui/src/components/UiTable.vue?vue&type=script&setup=true&lang.ts
var h = { class: "text-h6 font-weight-bold" }, g = { class: "bg-grey-lighten-4" }, _ = ["colspan"], v = /*#__PURE__*/ ((e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
})(/* @__PURE__ */ o({
	__name: "UiTable",
	props: { headers: {} },
	setup(o) {
		return (c, p) => {
			let v = d("v-chip"), y = d("v-card-title"), b = d("v-table"), x = d("v-card");
			return s(), t(x, {
				class: "mx-auto my-4",
				elevation: "3",
				rounded: "lg"
			}, {
				default: m(() => [a(y, { class: "bg-indigo-darken-2 text-white py-3 px-4 d-flex align-center justify-space-between" }, {
					default: m(() => [r("span", h, [u(c.$slots, "title", {}, () => [p[0] ||= i("Tabela de Dados", -1)], !0)]), a(v, {
						color: "indigo-lighten-4",
						size: "small",
						variant: "flat",
						class: "text-indigo-darken-4 font-weight-bold"
					}, {
						default: m(() => [...p[1] ||= [i(" Biblioteca UI ", -1)]]),
						_: 1
					})]),
					_: 3
				}), a(b, {
					hover: "",
					class: "border-t"
				}, {
					default: m(() => [r("thead", null, [r("tr", g, [(s(!0), n(e, null, l(o.headers, (e) => (s(), n("th", {
						key: e,
						class: "text-left font-weight-bold text-subtitle-2 text-grey-darken-2"
					}, f(e), 1))), 128))])]), r("tbody", null, [u(c.$slots, "rows", {}, () => [r("tr", null, [r("td", {
						colspan: o.headers.length,
						class: "text-center text-grey py-4"
					}, " Nenhum dado disponível ", 8, _)])], !0)])]),
					_: 3
				})]),
				_: 3
			});
		};
	}
}), [["__scopeId", "data-v-f34646d6"]]), y = { class: "suporte-simple-dashboard pa-4" }, b = { class: "font-weight-medium" }, x = /* @__PURE__ */ o({
	__name: "SuporteDashboard",
	setup(t) {
		let o = [
			"ID",
			"Título",
			"Prioridade",
			"Status"
		], u = c([
			{
				id: 1042,
				title: "Falha no acesso ao ERP",
				priority: "Alta",
				priorityColor: "error",
				status: "Aberto"
			},
			{
				id: 1041,
				title: "Configuração de VPN",
				priority: "Média",
				priorityColor: "warning",
				status: "Em Andamento"
			},
			{
				id: 1040,
				title: "Instalação de Figma Enterprise",
				priority: "Baixa",
				priorityColor: "secondary",
				status: "Fechado"
			}
		]);
		return (t, c) => {
			let h = d("v-chip");
			return s(), n("div", y, [
				c[1] ||= r("h2", { class: "text-h4 mb-4 text-indigo-darken-3 font-weight-bold" }, " Suporte Técnico ", -1),
				c[2] ||= r("p", { class: "text-subtitle-1 text-grey-darken-1 mb-6" }, [
					i(" Exibindo dados a partir do componente de tabela herdado do pacote "),
					r("strong", null, "@monorepo/ui"),
					i(". ")
				], -1),
				a(p(v), { headers: o }, {
					title: m(() => [...c[0] ||= [i(" Chamados Ativos ", -1)]]),
					rows: m(() => [(s(!0), n(e, null, l(u.value, (e) => (s(), n("tr", { key: e.id }, [
						r("td", b, "#" + f(e.id), 1),
						r("td", null, f(e.title), 1),
						r("td", null, [a(h, {
							color: e.priorityColor,
							size: "small",
							variant: "flat",
							class: "font-weight-bold text-white"
						}, {
							default: m(() => [i(f(e.priority), 1)]),
							_: 2
						}, 1032, ["color"])]),
						r("td", null, [a(h, {
							color: "info",
							size: "small",
							variant: "outlined",
							class: "font-weight-bold"
						}, {
							default: m(() => [i(f(e.status), 1)]),
							_: 2
						}, 1024)])
					]))), 128))]),
					_: 1
				})
			]);
		};
	}
});
//#endregion
export { x as SuporteDashboard };
