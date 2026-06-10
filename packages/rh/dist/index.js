import { Fragment as e, computed as t, createBlock as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, createTextVNode as o, createVNode as s, defineComponent as c, openBlock as l, ref as u, renderList as d, renderSlot as f, resolveComponent as p, toDisplayString as m, unref as h, watch as g, withCtx as _ } from "vue";
import "vuetify";
import "vuetify/components";
import "vuetify/directives";
//#region ../../node_modules/.pnpm/@monorepo+ui@2.0.0_typescript@6.0.3_vue@3.5.35_typescript@6.0.3_/node_modules/@monorepo/ui/src/components/UiTable.vue?vue&type=script&setup=true&lang.ts
var v = { class: "text-h6 font-weight-bold" }, y = { class: "px-4 py-2 bg-grey-lighten-5 border-b" }, b = { class: "bg-grey-lighten-4" }, x = ["colspan"], S = /*#__PURE__*/ ((e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
})(/* @__PURE__ */ c({
	__name: "UiTable",
	props: {
		headers: {},
		search: {}
	},
	emits: ["update:search"],
	setup(t, { emit: r }) {
		let c = t, h = r, S = u(c.search || "");
		g(() => c.search, (e) => {
			S.value = e || "";
		});
		let C = (e) => {
			h("update:search", e || "");
		};
		return (r, c) => {
			let u = p("v-chip"), h = p("v-card-title"), g = p("v-text-field"), w = p("v-table"), T = p("v-card");
			return l(), n(T, {
				class: "mx-auto my-4",
				elevation: "3",
				rounded: "lg"
			}, {
				default: _(() => [
					s(h, { class: "bg-indigo-darken-2 text-white py-3 px-4 d-flex align-center justify-space-between flex-wrap gap-2" }, {
						default: _(() => [a("span", v, [f(r.$slots, "title", {}, () => [c[1] ||= o("Tabela de Dados", -1)], !0)]), s(u, {
							color: "indigo-lighten-4",
							size: "small",
							variant: "flat",
							class: "text-indigo-darken-4 font-weight-bold"
						}, {
							default: _(() => [...c[2] ||= [o(" Biblioteca UI v2.0.0 (Filtro Ativo) ", -1)]]),
							_: 1
						})]),
						_: 3
					}),
					a("div", y, [s(g, {
						modelValue: S.value,
						"onUpdate:modelValue": [c[0] ||= (e) => S.value = e, C],
						density: "compact",
						label: "Buscar nesta tabela...",
						"prepend-inner-icon": "mdi-magnify",
						variant: "outlined",
						"hide-details": "",
						"single-line": "",
						clearable: "",
						color: "indigo"
					}, null, 8, ["modelValue"])]),
					s(w, {
						hover: "",
						class: "border-t"
					}, {
						default: _(() => [a("thead", null, [a("tr", b, [(l(!0), i(e, null, d(t.headers, (e) => (l(), i("th", {
							key: e,
							class: "text-left font-weight-bold text-subtitle-2 text-grey-darken-2"
						}, m(e), 1))), 128))])]), a("tbody", null, [f(r.$slots, "rows", {}, () => [a("tr", null, [a("td", {
							colspan: t.headers.length,
							class: "text-center text-grey py-4"
						}, " Nenhum dado disponível ", 8, x)])], !0)])]),
						_: 3
					})
				]),
				_: 3
			});
		};
	}
}), [["__scopeId", "data-v-5ed6d445"]]), C = { class: "rh-simple-dashboard pa-4" }, w = { class: "font-weight-medium" }, T = { key: 0 }, E = {
	colspan: "4",
	class: "text-center text-grey py-4"
}, D = /* @__PURE__ */ c({
	__name: "RhDashboard",
	setup(n) {
		let c = [
			"Nome",
			"Cargo",
			"Departamento",
			"Status"
		], f = u(""), g = u([
			{
				name: "Ana Souza",
				role: "Tech Lead",
				department: "Tecnologia",
				status: "Ativo"
			},
			{
				name: "Bruno Ramos",
				role: "UX Designer",
				department: "Tecnologia",
				status: "Ativo"
			},
			{
				name: "Carla Dias",
				role: "Gerente Geral",
				department: "RH",
				status: "Ativo"
			}
		]), v = t(() => {
			if (!f.value) return g.value;
			let e = f.value.toLowerCase();
			return g.value.filter((t) => t.name.toLowerCase().includes(e) || t.role.toLowerCase().includes(e) || t.department.toLowerCase().includes(e));
		});
		return (t, n) => {
			let u = p("v-chip");
			return l(), i("div", C, [
				n[2] ||= a("h2", { class: "text-h4 mb-4 text-indigo-darken-3 font-weight-bold" }, " Recursos Humanos (UI v2.0.0) ", -1),
				n[3] ||= a("p", { class: "text-subtitle-1 text-grey-darken-1 mb-6" }, [
					o(" Exibindo dados filtrados usando a funcionalidade de busca da versão "),
					a("strong", null, "2.0.0"),
					o(" de "),
					a("strong", null, "@monorepo/ui"),
					o(". ")
				], -1),
				s(h(S), {
					headers: c,
					search: f.value,
					"onUpdate:search": n[0] ||= (e) => f.value = e
				}, {
					title: _(() => [...n[1] ||= [o(" Colaboradores Ativos ", -1)]]),
					rows: _(() => [(l(!0), i(e, null, d(v.value, (e) => (l(), i("tr", { key: e.name }, [
						a("td", w, m(e.name), 1),
						a("td", null, m(e.role), 1),
						a("td", null, m(e.department), 1),
						a("td", null, [s(u, {
							color: "success",
							size: "small",
							variant: "flat",
							class: "font-weight-bold"
						}, {
							default: _(() => [o(m(e.status), 1)]),
							_: 2
						}, 1024)])
					]))), 128)), v.value.length === 0 ? (l(), i("tr", T, [a("td", E, " Nenhum colaborador encontrado para a busca \"" + m(f.value) + "\" ", 1)])) : r("", !0)]),
					_: 1
				}, 8, ["search"])
			]);
		};
	}
});
//#endregion
export { D as RhDashboard };
