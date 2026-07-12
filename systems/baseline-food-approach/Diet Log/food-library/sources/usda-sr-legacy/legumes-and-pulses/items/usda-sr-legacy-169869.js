/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "tbsp",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-169869",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Peanut butter, reduced sodium",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 21.8,
    "energy_kcal": 2470.0,
    "fat_g": 49.9,
    "fibre_g": 6.6,
    "folate_ug": 92.0,
    "iron_mg": 1.9,
    "magnesium_mg": 159.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 317.0,
    "potassium_mg": 747.0,
    "protein_g": 24.0,
    "salt_g": 0.5075,
    "sat_fat_g": 7.72,
    "sodium_mg": 203.0,
    "sugar_g": 9.29,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 9.05,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169869",
  "state": "Unspecified",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
