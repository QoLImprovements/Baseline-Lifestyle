/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169371",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Dock, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 2.93,
    "energy_kcal": 84.0,
    "fat_g": 0.64,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 2.08,
    "magnesium_mg": 89.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 52.0,
    "potassium_mg": 321.0,
    "protein_g": 1.83,
    "salt_g": 0.5975,
    "sat_fat_g": 0.0,
    "sodium_mg": 239.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 174.0,
    "vitamin_c_mg": 26.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169371",
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
