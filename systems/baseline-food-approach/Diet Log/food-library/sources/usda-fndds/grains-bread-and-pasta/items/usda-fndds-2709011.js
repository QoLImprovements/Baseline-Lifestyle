/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2709011",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 172.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Rice, white, with dark green vegetables, NS as to fat",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 22.2,
    "energy_kcal": 125.0,
    "fat_g": 2.45,
    "fibre_g": 0.9,
    "folate_ug": 56.0,
    "iron_mg": 1.06,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 48.0,
    "potassium_mg": 102.0,
    "protein_g": 2.62,
    "salt_g": 0.475,
    "sat_fat_g": 0.356,
    "sodium_mg": 190.0,
    "sugar_g": 0.39,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 19.5,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 27.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709011",
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
