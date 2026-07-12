/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "package-10-oz-yields",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168498",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 311.0,
      "key": "package-10-oz-yields",
      "kind": "unit",
      "label": "package (10 oz) yields"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Lima beans, immature seeds, frozen, fordhook, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 19.3,
    "energy_kcal": 103.0,
    "fat_g": 0.34,
    "fibre_g": 5.3,
    "folate_ug": 21.0,
    "iron_mg": 1.82,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 97.0,
    "potassium_mg": 304.0,
    "protein_g": 6.07,
    "salt_g": 0.7225,
    "sat_fat_g": 0.077,
    "sodium_mg": 289.0,
    "sugar_g": 1.34,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 12.8,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168498",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "legumes-and-pulses",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
