/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "can-drained",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-173800",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 253.0,
      "key": "can-drained",
      "kind": "unit",
      "label": "can drained"
    }
  ],
  "name": "Chickpeas (garbanzo beans, bengal gram), mature seeds, canned, drained solids",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 22.5,
    "energy_kcal": 583.0,
    "fat_g": 2.77,
    "fibre_g": 6.4,
    "folate_ug": 48.0,
    "iron_mg": 1.07,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 85.0,
    "potassium_mg": 126.0,
    "protein_g": 7.05,
    "salt_g": 0.615,
    "sat_fat_g": 0.214,
    "sodium_mg": 246.0,
    "sugar_g": 4.01,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173800",
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
