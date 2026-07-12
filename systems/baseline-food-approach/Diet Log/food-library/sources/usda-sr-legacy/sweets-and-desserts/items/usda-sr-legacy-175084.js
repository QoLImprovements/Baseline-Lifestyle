/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175084",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 11.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Nabisco, Nabisco Oreo Crunchies, Cookie Crumb Topping",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 70.2,
    "energy_kcal": 1990.0,
    "fat_g": 21.5,
    "fibre_g": 3.2,
    "folate_ug": 30.0,
    "iron_mg": 4.9,
    "magnesium_mg": 48.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 103.0,
    "potassium_mg": 194.0,
    "protein_g": 4.78,
    "salt_g": 1.32,
    "sat_fat_g": 4.14,
    "sodium_mg": 528.0,
    "sugar_g": 36.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175084",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
