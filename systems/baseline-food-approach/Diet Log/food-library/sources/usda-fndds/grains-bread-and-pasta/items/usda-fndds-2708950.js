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
  "id": "usda-fndds-2708950",
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
      "gramsPerUnit": 162.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Bibimbap, Korean",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 8.11,
    "energy_kcal": 76.0,
    "fat_g": 2.44,
    "fibre_g": 1.1,
    "folate_ug": 37.0,
    "iron_mg": 0.93,
    "magnesium_mg": 28.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 68.0,
    "potassium_mg": 244.0,
    "protein_g": 5.5,
    "salt_g": 1.0875,
    "sat_fat_g": 0.49,
    "sodium_mg": 435.0,
    "sugar_g": 1.52,
    "vitamin_a_ug": 113.0,
    "vitamin_c_mg": 10.5,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 95.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708950",
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
