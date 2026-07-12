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
  "id": "usda-sr-legacy-172465",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 231.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 445.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    }
  ],
  "name": "Refried beans, canned, fat-free",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 13.5,
    "energy_kcal": 79.0,
    "fat_g": 0.45,
    "fibre_g": 4.7,
    "folate_ug": 57.0,
    "iron_mg": 1.62,
    "magnesium_mg": 38.0,
    "omega3_g": 0.153,
    "phosphorus_mg": 111.0,
    "potassium_mg": 344.0,
    "protein_g": 5.34,
    "salt_g": 0.875,
    "sat_fat_g": 0.093,
    "sodium_mg": 350.0,
    "sugar_g": 0.61,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172465",
  "state": "Fried",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "fried",
    "legumes-and-legume-products",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
