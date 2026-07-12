/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "piece",
  "description": "Sweets",
  "id": "usda-sr-legacy-167987",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Candies, fudge, chocolate, prepared-from-recipe",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 76.7,
    "energy_kcal": 1720.0,
    "fat_g": 10.4,
    "fibre_g": 1.7,
    "folate_ug": 4.0,
    "iron_mg": 1.77,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 71.0,
    "potassium_mg": 134.0,
    "protein_g": 2.39,
    "salt_g": 0.1125,
    "sat_fat_g": 6.45,
    "sodium_mg": 45.0,
    "sugar_g": 73.1,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167987",
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
