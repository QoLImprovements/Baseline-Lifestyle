/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "pod",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169359",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "pod",
      "kind": "unit",
      "label": "pod"
    },
    {
      "gramsPerUnit": 104.0,
      "key": "cup-slices",
      "kind": "unit",
      "label": "cup slices"
    }
  ],
  "name": "Yardlong bean, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 9.17,
    "energy_kcal": 47.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 45.0,
    "iron_mg": 0.98,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 57.0,
    "potassium_mg": 290.0,
    "protein_g": 2.53,
    "salt_g": 0.6,
    "sat_fat_g": 0.026,
    "sodium_mg": 240.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 16.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169359",
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
