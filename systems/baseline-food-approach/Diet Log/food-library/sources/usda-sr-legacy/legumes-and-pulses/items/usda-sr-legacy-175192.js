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
  "id": "usda-sr-legacy-175192",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 262.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beans, great northern, mature seeds, canned",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 21.0,
    "energy_kcal": 114.0,
    "fat_g": 0.39,
    "fibre_g": 4.9,
    "folate_ug": 81.0,
    "iron_mg": 1.57,
    "magnesium_mg": 51.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 136.0,
    "potassium_mg": 351.0,
    "protein_g": 7.37,
    "salt_g": 0.925,
    "sat_fat_g": 0.12,
    "sodium_mg": 370.0,
    "sugar_g": 1.41,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.79,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175192",
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
