declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"basis_analyse_das_fundament_von_seo.md": {
	id: "basis_analyse_das_fundament_von_seo.md";
  slug: "basis_analyse_das_fundament_von_seo";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"datenschutz_im_digitalen_umfeld.md": {
	id: "datenschutz_im_digitalen_umfeld.md";
  slug: "datenschutz_im_digitalen_umfeld";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ich_werde_nicht_gefunden.md": {
	id: "ich_werde_nicht_gefunden.md";
  slug: "ich_werde_nicht_gefunden";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"seo_und_wordpress.md": {
	id: "seo_und_wordpress.md";
  slug: "seo_und_wordpress";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"technisches_seo.md": {
	id: "technisches_seo.md";
  slug: "technisches_seo";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"warum_muss_meine_webseite_schnell_sein.md": {
	id: "warum_muss_meine_webseite_schnell_sein.md";
  slug: "warum_muss_meine_webseite_schnell_sein";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"warum_seo_fuer_unternehmen_wichtig_ist.md": {
	id: "warum_seo_fuer_unternehmen_wichtig_ist.md";
  slug: "warum_seo_fuer_unternehmen_wichtig_ist";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"warum_user_eine_seite_verlassen.md": {
	id: "warum_user_eine_seite_verlassen.md";
  slug: "warum_user_eine_seite_verlassen";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"was_guter_content_mindestens_braucht.md": {
	id: "was_guter_content_mindestens_braucht.md";
  slug: "was_guter_content_mindestens_braucht";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"wenn_farben_kaufentscheidend_sind.md": {
	id: "wenn_farben_kaufentscheidend_sind.md";
  slug: "wenn_farben_kaufentscheidend_sind";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"wie_sicher_ist_ihre_webseite.md": {
	id: "wie_sicher_ist_ihre_webseite.md";
  slug: "wie_sicher_ist_ihre_webseite";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"wie_verkaufe_ich_mit_meinem_web_shop.md": {
	id: "wie_verkaufe_ich_mit_meinem_web_shop.md";
  slug: "wie_verkaufe_ich_mit_meinem_web_shop";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};
"projects": {
"chromtech.md": {
	id: "chromtech.md";
  slug: "chromtech";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"first-collection.md": {
	id: "first-collection.md";
  slug: "first-collection";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"joshi-foundation.md": {
	id: "joshi-foundation.md";
  slug: "joshi-foundation";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"vapestore.md": {
	id: "vapestore.md";
  slug: "vapestore";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"wiichaeller.md": {
	id: "wiichaeller.md";
  slug: "wiichaeller";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"wochenbettbetreuung.md": {
	id: "wochenbettbetreuung.md";
  slug: "wochenbettbetreuung";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"team": {
"fabrice": {
	id: "fabrice";
  collection: "team";
  data: InferEntrySchema<"team">
};
"linda": {
	id: "linda";
  collection: "team";
  data: InferEntrySchema<"team">
};
"martina": {
	id: "martina";
  collection: "team";
  data: InferEntrySchema<"team">
};
"olivia": {
	id: "olivia";
  collection: "team";
  data: InferEntrySchema<"team">
};
"sabine": {
	id: "sabine";
  collection: "team";
  data: InferEntrySchema<"team">
};
"simon": {
	id: "simon";
  collection: "team";
  data: InferEntrySchema<"team">
};
"tino": {
	id: "tino";
  collection: "team";
  data: InferEntrySchema<"team">
};
"valeriia": {
	id: "valeriia";
  collection: "team";
  data: InferEntrySchema<"team">
};
"zandrea": {
	id: "zandrea";
  collection: "team";
  data: InferEntrySchema<"team">
};
"zboney": {
	id: "zboney";
  collection: "team";
  data: InferEntrySchema<"team">
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
