/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "medium-bagel-3-1-2-to-4-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174900",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 99.0,
      "key": "medium-bagel-3-1-2-to-4-dia",
      "kind": "unit",
      "label": "medium bagel (3-1/2\" to 4\" dia)"
    },
    {
      "gramsPerUnit": 123.0,
      "key": "large-bagel-4-1-2",
      "kind": "unit",
      "label": "large bagel (4-1/2\")"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "mini-bagel-2-1-2-dia",
      "kind": "unit",
      "label": "mini bagel (2-1/2\" dia)"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "small-bagel-3-dia",
      "kind": "unit",
      "label": "small bagel (3\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Bagels, plain, enriched, with calcium propionate (includes onion, poppy, sesame), toasted",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 57.4,
    "energy_kcal": 1200.0,
    "fat_g": 1.43,
    "fibre_g": 1.8,
    "folate_ug": 131.0,
    "iron_mg": 4.5,
    "magnesium_mg": 24.0,
    "omega3_g": 0.064,
    "phosphorus_mg": 92.0,
    "potassium_mg": 116.0,
    "protein_g": 11.1,
    "salt_g": 1.1425,
    "sat_fat_g": 0.229,
    "sodium_mg": 457.0,
    "sugar_g": 9.14,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174900",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
