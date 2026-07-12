/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-fun-size",
  "description": "Sweets",
  "id": "usda-sr-legacy-169587",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "serving-fun-size",
      "kind": "unit",
      "label": "serving fun size"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "serving-1-58-oz-bag",
      "kind": "unit",
      "label": "serving 1.58 oz bag"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "serving-0-25-cup",
      "kind": "unit",
      "label": "serving 0.25 cup"
    }
  ],
  "name": "Candies, NESTLE, RAISINETS Chocolate Covered Raisins",
  "nutritionPerBasis": {
    "calcium_mg": 85.0,
    "carbs_g": 71.0,
    "energy_kcal": 422.0,
    "fat_g": 17.0,
    "fibre_g": 2.2,
    "folate_ug": 0.0,
    "iron_mg": 1.2,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 4.4,
    "salt_g": 0.0825,
    "sat_fat_g": 11.0,
    "sodium_mg": 33.0,
    "sugar_g": 59.0,
    "vitamin_a_ug": 77.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169587",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
