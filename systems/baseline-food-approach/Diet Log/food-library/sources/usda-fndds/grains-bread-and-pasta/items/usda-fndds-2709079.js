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
  "id": "usda-fndds-2709079",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 164.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 486.0,
      "key": "1-package-6-oz-yields",
      "kind": "unit",
      "label": "1 package (6 oz) yields"
    },
    {
      "gramsPerUnit": 218.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Flavored rice mixture",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 19.8,
    "energy_kcal": 127.0,
    "fat_g": 4.26,
    "fibre_g": 0.4,
    "folate_ug": 38.0,
    "iron_mg": 1.08,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 33.0,
    "protein_g": 1.87,
    "salt_g": 0.74,
    "sat_fat_g": 0.861,
    "sodium_mg": 296.0,
    "sugar_g": 0.56,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 4.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709079",
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
