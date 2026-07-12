/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Ready-to-eat cereal, higher sugar (>21.2g/100g)",
  "id": "usda-fndds-2708461",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-prepackaged-single-serving",
      "kind": "unit",
      "label": "1 prepackaged single serving"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Cereal, granola",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 67.4,
    "energy_kcal": 420.0,
    "fat_g": 13.0,
    "fibre_g": 7.4,
    "folate_ug": 24.0,
    "iron_mg": 3.07,
    "magnesium_mg": 106.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 297.0,
    "potassium_mg": 310.0,
    "protein_g": 9.82,
    "salt_g": 0.4025,
    "sat_fat_g": 1.34,
    "sodium_mg": 161.0,
    "sugar_g": 22.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 2.53,
    "vitamin_k_ug": 5.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708461",
  "state": "Unspecified",
  "subcategory": "Ready-to-eat cereal, higher sugar (>21.2g/100g)",
  "tags": [
    "grains-bread-and-pasta",
    "ready-to-eat-cereal-higher-sugar-21-2g-100g",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
