/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-172454",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 246.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    }
  ],
  "name": "Hummus, home prepared",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 20.1,
    "energy_kcal": 742.0,
    "fat_g": 8.59,
    "fibre_g": 4.0,
    "folate_ug": 59.0,
    "iron_mg": 1.56,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 110.0,
    "potassium_mg": 173.0,
    "protein_g": 4.86,
    "salt_g": 0.605,
    "sat_fat_g": 1.14,
    "sodium_mg": 242.0,
    "sugar_g": 0.27,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 7.9,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172454",
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
