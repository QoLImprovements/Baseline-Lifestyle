/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169312",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 168.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "package-9-oz-yields",
      "kind": "unit",
      "label": "package (9 oz), yields"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "0-33-package-9-oz-yields",
      "kind": "unit",
      "label": "0.33 package (9 oz) yields"
    }
  ],
  "name": "Artichokes, (globe or french), frozen, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 9.18,
    "energy_kcal": 45.0,
    "fat_g": 0.5,
    "fibre_g": 4.6,
    "folate_ug": 119.0,
    "iron_mg": 0.56,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 61.0,
    "potassium_mg": 264.0,
    "protein_g": 3.11,
    "salt_g": 0.7225,
    "sat_fat_g": 0.119,
    "sodium_mg": 289.0,
    "sugar_g": 0.84,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 12.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169312",
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
