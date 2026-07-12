/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "13-pieces",
  "description": "Sweets",
  "id": "usda-sr-legacy-167979",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 41.0,
      "key": "13-pieces",
      "kind": "unit",
      "label": "13 pieces"
    }
  ],
  "name": "Candies, HERSHEY'S GOLDEN ALMOND SOLITAIRES",
  "nutritionPerBasis": {
    "calcium_mg": 203.0,
    "carbs_g": 46.8,
    "energy_kcal": 2380.0,
    "fat_g": 37.1,
    "fibre_g": 4.4,
    "folate_ug": 0.0,
    "iron_mg": 2.5,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 12.0,
    "salt_g": 0.13,
    "sat_fat_g": 15.2,
    "sodium_mg": 52.0,
    "sugar_g": 37.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167979",
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
