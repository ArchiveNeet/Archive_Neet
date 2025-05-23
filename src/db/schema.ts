import { desc, relations } from "drizzle-orm";
import { integer, pgTable, varchar, date, PgTable } from "drizzle-orm/pg-core";

export const ProductTable = pgTable("products", {
 id: integer().primaryKey().generatedAlwaysAsIdentity(),
 name: varchar({ length: 255 }).notNull(),
 price: integer().notNull(),
 description: varchar({ length: 2406 }).notNull(),
 product_type_id: integer().notNull(),
 image_url: varchar({ length: 255 }).notNull(),
 created_at: date().defaultNow(),
});
 
export const ProductType = pgTable("product_types", {
 id: integer().primaryKey().generatedAlwaysAsIdentity(),
 name: varchar({ length: 255 }).notNull(),
});

export const SalesTable = pgTable("sales", {
 id: integer().primaryKey().generatedAlwaysAsIdentity(),
 user_id: integer().notNull(),
 product_id: integer().notNull(),
 bought_at: date().defaultNow(),
 quantity: integer().notNull(),
 total_price: integer().notNull(),
});

export const HomeImgs = pgTable("home_imgs", {
 id: integer().primaryKey().generatedAlwaysAsIdentity(),
 name: varchar({ length: 255 }).notNull(),
 img_url: varchar({ length: 255 }).notNull(),
 product_type_id: integer().notNull(), // Foreign key to ProductType
});

// Relations
export const ProductTypeRelations = relations(ProductType, ({ many }) => ({
 products: many(ProductTable),
 homeImages: many(HomeImgs),
}));

export const ProductTableRelations = relations(ProductTable, ({ one }) => ({
 productType: one(ProductType, {
  fields: [ProductTable.product_type_id],
  references: [ProductType.id],
 }),
}));

export const HomeImgsRelations = relations(HomeImgs, ({ one }) => ({
 productType: one(ProductType, {
  fields: [HomeImgs.product_type_id],
  references: [ProductType.id],
 }),
}));

export const SalesTableRelations = relations(SalesTable, ({ one }) => ({
 product: one(ProductTable, {
  fields: [SalesTable.product_id],
  references: [ProductTable.id],
 }),
}));