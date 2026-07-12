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
  "id": "usda-sr-legacy-175206",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 448.0,
      "key": "can-total-can-contents",
      "kind": "unit",
      "label": "can (total can contents)"
    }
  ],
  "name": "Chickpeas (garbanzo beans, bengal gram), mature seeds, canned, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 13.5,
    "energy_kcal": 88.0,
    "fat_g": 1.95,
    "fibre_g": 4.4,
    "folate_ug": 25.0,
    "iron_mg": 1.23,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 80.0,
    "potassium_mg": 144.0,
    "protein_g": 4.92,
    "salt_g": 0.695,
    "sat_fat_g": 0.204,
    "sodium_mg": 278.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175206",
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
