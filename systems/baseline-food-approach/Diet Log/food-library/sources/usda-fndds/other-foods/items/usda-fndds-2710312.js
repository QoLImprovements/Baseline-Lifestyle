/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cup",
  "description": "Gelatins, ices, sorbets",
  "id": "usda-fndds-2710312",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    }
  ],
  "name": "Gelatin salad with vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 14.0,
    "energy_kcal": 61.0,
    "fat_g": 0.02,
    "fibre_g": 0.7,
    "folate_ug": 4.0,
    "iron_mg": 0.14,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.0,
    "potassium_mg": 26.0,
    "protein_g": 1.47,
    "salt_g": 0.1725,
    "sat_fat_g": 0.005,
    "sodium_mg": 69.0,
    "sugar_g": 11.9,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710312",
  "state": "Unspecified",
  "subcategory": "Gelatins, ices, sorbets",
  "tags": [
    "gelatins-ices-sorbets",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
