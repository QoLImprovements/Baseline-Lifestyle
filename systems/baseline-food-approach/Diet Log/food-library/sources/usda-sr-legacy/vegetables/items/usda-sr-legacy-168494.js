/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "4-spears",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168494",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "4-spears",
      "kind": "unit",
      "label": "4 spears"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 293.0,
      "key": "package-10-oz-yields",
      "kind": "unit",
      "label": "package (10 oz) yields"
    }
  ],
  "name": "Asparagus, frozen, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 1.92,
    "energy_kcal": 18.0,
    "fat_g": 0.42,
    "fibre_g": 1.6,
    "folate_ug": 135.0,
    "iron_mg": 0.56,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 172.0,
    "protein_g": 2.95,
    "salt_g": 0.6,
    "sat_fat_g": 0.096,
    "sodium_mg": 240.0,
    "sugar_g": 0.32,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 24.4,
    "vitamin_e_mg": 1.2,
    "vitamin_k_ug": 80.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168494",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
