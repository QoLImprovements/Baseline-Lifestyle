/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving",
  "description": "Sweets",
  "id": "usda-sr-legacy-169881",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Candies, chocolate covered, low sugar or low calorie",
  "nutritionPerBasis": {
    "calcium_mg": 285.0,
    "carbs_g": 37.7,
    "energy_kcal": 2470.0,
    "fat_g": 43.3,
    "fibre_g": 3.5,
    "folate_ug": 25.0,
    "iron_mg": 1.45,
    "magnesium_mg": 129.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 332.0,
    "potassium_mg": 606.0,
    "protein_g": 12.4,
    "salt_g": 0.2775,
    "sat_fat_g": 21.7,
    "sodium_mg": 111.0,
    "sugar_g": 14.6,
    "vitamin_a_ug": 55.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 2.61,
    "vitamin_k_ug": 7.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169881",
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
