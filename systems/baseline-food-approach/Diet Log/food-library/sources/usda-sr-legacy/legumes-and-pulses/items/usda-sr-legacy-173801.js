/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup-drained-rinsed",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-173801",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 152.0,
      "key": "cup-drained-rinsed",
      "kind": "unit",
      "label": "cup drained, rinsed"
    },
    {
      "gramsPerUnit": 254.0,
      "key": "can-drained-rinsed",
      "kind": "unit",
      "label": "can drained, rinsed"
    }
  ],
  "name": "Chickpeas (garbanzo beans, bengal gram), mature seeds, canned, drained, rinsed in tap water",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 22.9,
    "energy_kcal": 138.0,
    "fat_g": 2.47,
    "fibre_g": 6.3,
    "folate_ug": 41.0,
    "iron_mg": 0.98,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 80.0,
    "potassium_mg": 109.0,
    "protein_g": 7.04,
    "salt_g": 0.53,
    "sat_fat_g": 0.213,
    "sodium_mg": 212.0,
    "sugar_g": 4.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173801",
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
