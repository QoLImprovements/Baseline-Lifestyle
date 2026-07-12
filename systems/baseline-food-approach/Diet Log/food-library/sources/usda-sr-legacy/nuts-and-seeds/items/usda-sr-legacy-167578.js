/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "piece",
  "description": "Sweets",
  "id": "usda-sr-legacy-167578",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Candies, fudge, peanut butter, prepared-from-recipe",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 77.8,
    "energy_kcal": 1620.0,
    "fat_g": 6.59,
    "fibre_g": 0.7,
    "folate_ug": 9.0,
    "iron_mg": 0.22,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 68.0,
    "potassium_mg": 119.0,
    "protein_g": 3.78,
    "salt_g": 0.295,
    "sat_fat_g": 1.72,
    "sodium_mg": 118.0,
    "sugar_g": 73.4,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.01,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167578",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "nuts-and-seeds",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
