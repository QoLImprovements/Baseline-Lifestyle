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
  "id": "usda-fndds-2708486",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
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
      "gramsPerUnit": 40.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Cereal, other, honey",
  "nutritionPerBasis": {
    "calcium_mg": 184.0,
    "carbs_g": 76.1,
    "energy_kcal": 388.0,
    "fat_g": 5.71,
    "fibre_g": 6.1,
    "folate_ug": 374.0,
    "iron_mg": 20.0,
    "magnesium_mg": 66.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 199.0,
    "potassium_mg": 190.0,
    "protein_g": 8.02,
    "salt_g": 1.26,
    "sat_fat_g": 0.669,
    "sodium_mg": 504.0,
    "sugar_g": 26.5,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 11.4,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708486",
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
