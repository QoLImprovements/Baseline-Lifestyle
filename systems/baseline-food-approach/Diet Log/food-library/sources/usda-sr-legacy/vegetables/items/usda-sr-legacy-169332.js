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
  "id": "usda-sr-legacy-169332",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Brussels sprouts, frozen, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 8.32,
    "energy_kcal": 42.0,
    "fat_g": 0.39,
    "fibre_g": 4.1,
    "folate_ug": 101.0,
    "iron_mg": 0.48,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 56.0,
    "potassium_mg": 290.0,
    "protein_g": 3.64,
    "salt_g": 0.6475,
    "sat_fat_g": 0.081,
    "sodium_mg": 259.0,
    "sugar_g": 2.08,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 45.7,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 194.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169332",
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
