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
  "id": "usda-sr-legacy-173755",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 103.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Carob flour",
  "nutritionPerBasis": {
    "calcium_mg": 348.0,
    "carbs_g": 88.9,
    "energy_kcal": 222.0,
    "fat_g": 0.65,
    "fibre_g": 39.8,
    "folate_ug": 29.0,
    "iron_mg": 2.94,
    "magnesium_mg": 54.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 79.0,
    "potassium_mg": 827.0,
    "protein_g": 4.62,
    "salt_g": 0.0875,
    "sat_fat_g": 0.09,
    "sodium_mg": 35.0,
    "sugar_g": 49.1,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173755",
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
