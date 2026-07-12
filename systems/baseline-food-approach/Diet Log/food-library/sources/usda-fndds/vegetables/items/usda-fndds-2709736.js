/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-tablespoon",
  "description": "Tomato-based condiments",
  "id": "usda-fndds-2709736",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-packet",
      "kind": "unit",
      "label": "1 packet"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "guideline-amount-per-sandwich",
      "kind": "unit",
      "label": "Guideline amount per sandwich"
    }
  ],
  "name": "Salsa, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 6.74,
    "energy_kcal": 34.0,
    "fat_g": 0.19,
    "fibre_g": 1.8,
    "folate_ug": 4.0,
    "iron_mg": 0.42,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 258.0,
    "protein_g": 1.44,
    "salt_g": 1.64,
    "sat_fat_g": 0.021,
    "sodium_mg": 656.0,
    "sugar_g": 3.81,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 1.22,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709736",
  "state": "Unspecified",
  "subcategory": "Tomato-based condiments",
  "tags": [
    "tomato-based-condiments",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
