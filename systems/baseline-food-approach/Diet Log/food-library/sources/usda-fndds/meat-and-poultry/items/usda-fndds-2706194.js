/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-piece",
  "description": "Sausages",
  "id": "usda-fndds-2706194",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-breakfast-size-link",
      "kind": "unit",
      "label": "1 breakfast size link"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-bun-size-or-griller-link",
      "kind": "unit",
      "label": "1 bun-size or griller link"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-cocktail-or-miniature-link",
      "kind": "unit",
      "label": "1 cocktail or miniature link"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "1-half-smoke-sausage",
      "kind": "unit",
      "label": "1 half smoke sausage"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-patty",
      "kind": "unit",
      "label": "1 patty"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 138.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    }
  ],
  "name": "Pork and beef sausage",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 2.4,
    "energy_kcal": 333.0,
    "fat_g": 28.0,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.38,
    "magnesium_mg": 18.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 136.0,
    "potassium_mg": 302.0,
    "protein_g": 15.9,
    "salt_g": 2.1,
    "sat_fat_g": 10.1,
    "sodium_mg": 840.0,
    "sugar_g": 1.04,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 9.6,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706194",
  "state": "Unspecified",
  "subcategory": "Sausages",
  "tags": [
    "meat-and-poultry",
    "sausages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
