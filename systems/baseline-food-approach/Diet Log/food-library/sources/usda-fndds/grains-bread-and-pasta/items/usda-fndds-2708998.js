/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2708998",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 121.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 161.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Rice, white, with corn, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 25.2,
    "energy_kcal": 134.0,
    "fat_g": 2.5,
    "fibre_g": 0.9,
    "folate_ug": 51.0,
    "iron_mg": 0.99,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 51.0,
    "potassium_mg": 84.0,
    "protein_g": 2.58,
    "salt_g": 0.445,
    "sat_fat_g": 0.367,
    "sodium_mg": 178.0,
    "sugar_g": 0.81,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708998",
  "state": "Unspecified",
  "subcategory": "Rice mixed dishes",
  "tags": [
    "grains-bread-and-pasta",
    "rice-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
