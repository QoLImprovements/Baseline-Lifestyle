/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "can-total-can-contents",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-175250",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 448.0,
      "key": "can-total-can-contents",
      "kind": "unit",
      "label": "can total can contents"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Chickpeas (garbanzo beans, bengal gram), mature seeds, canned, solids and liquids, low sodium",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 13.5,
    "energy_kcal": 369.0,
    "fat_g": 1.95,
    "fibre_g": 4.4,
    "folate_ug": 25.0,
    "iron_mg": 1.23,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 80.0,
    "potassium_mg": 144.0,
    "protein_g": 4.92,
    "salt_g": 0.33,
    "sat_fat_g": 0.204,
    "sodium_mg": 132.0,
    "sugar_g": 2.59,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175250",
  "state": "Canned",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "canned",
    "legumes-and-legume-products",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
