/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup-slices",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169222",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "cup-slices",
      "kind": "unit",
      "label": "cup slices"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "pod",
      "kind": "unit",
      "label": "pod"
    }
  ],
  "name": "Yardlong bean, raw",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 8.35,
    "energy_kcal": 197.0,
    "fat_g": 0.4,
    "fibre_g": 0.0,
    "folate_ug": 62.0,
    "iron_mg": 0.47,
    "magnesium_mg": 44.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 59.0,
    "potassium_mg": 240.0,
    "protein_g": 2.8,
    "salt_g": 0.01,
    "sat_fat_g": 0.105,
    "sodium_mg": 4.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 18.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169222",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "legumes-and-pulses",
    "raw",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
