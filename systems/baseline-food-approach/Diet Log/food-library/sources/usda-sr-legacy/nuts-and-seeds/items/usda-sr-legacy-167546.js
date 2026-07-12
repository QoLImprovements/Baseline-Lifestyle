/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "serving",
  "description": "Sweets",
  "id": "usda-sr-legacy-167546",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Candies, honey-combed, with peanut butter",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 67.4,
    "energy_kcal": 1980.0,
    "fat_g": 20.2,
    "fibre_g": 1.9,
    "folate_ug": 34.0,
    "iron_mg": 0.71,
    "magnesium_mg": 66.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 132.0,
    "potassium_mg": 220.0,
    "protein_g": 8.72,
    "salt_g": 0.435,
    "sat_fat_g": 5.74,
    "sodium_mg": 174.0,
    "sugar_g": 62.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.57,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167546",
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
