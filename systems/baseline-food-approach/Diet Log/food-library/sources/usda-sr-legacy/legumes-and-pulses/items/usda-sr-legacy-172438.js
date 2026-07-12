/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "can",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-172438",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 442.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    },
    {
      "gramsPerUnit": 238.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Refried beans, canned, traditional style",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 13.6,
    "energy_kcal": 379.0,
    "fat_g": 2.01,
    "fibre_g": 3.7,
    "folate_ug": 11.0,
    "iron_mg": 1.44,
    "magnesium_mg": 35.0,
    "omega3_g": 0.169,
    "phosphorus_mg": 92.0,
    "potassium_mg": 319.0,
    "protein_g": 4.98,
    "salt_g": 0.925,
    "sat_fat_g": 0.631,
    "sodium_mg": 370.0,
    "sugar_g": 0.54,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172438",
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
