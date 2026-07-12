/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "slice-large",
  "description": "Baked Products",
  "id": "usda-sr-legacy-168013",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 41.0,
      "key": "slice-large",
      "kind": "unit",
      "label": "slice large"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "slice-regular",
      "kind": "unit",
      "label": "slice regular"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Bread, multi-grain (includes whole-grain)",
  "nutritionPerBasis": {
    "calcium_mg": 103.0,
    "carbs_g": 43.3,
    "energy_kcal": 265.0,
    "fat_g": 4.23,
    "fibre_g": 7.4,
    "folate_ug": 75.0,
    "iron_mg": 2.5,
    "magnesium_mg": 78.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 228.0,
    "potassium_mg": 230.0,
    "protein_g": 13.4,
    "salt_g": 0.9525,
    "sat_fat_g": 0.872,
    "sodium_mg": 381.0,
    "sugar_g": 6.39,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168013",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
