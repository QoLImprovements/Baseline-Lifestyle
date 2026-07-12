/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "racc",
  "description": "Legumes and Legume Products",
  "id": "usda-foundation-2644288",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Chickpeas (garbanzo beans, bengal gram), canned, sodium added, drained and rinsed",
  "nutritionPerBasis": {
    "calcium_mg": 40.5,
    "carbs_g": 20.3,
    "energy_kcal": 137.0,
    "fat_g": 3.1,
    "fibre_g": 5.92,
    "folate_ug": 0.0,
    "iron_mg": 1.04,
    "magnesium_mg": 28.4,
    "omega3_g": 0.0,
    "phosphorus_mg": 86.5,
    "potassium_mg": 137.0,
    "protein_g": 7.02,
    "salt_g": 0.505,
    "sat_fat_g": 0.0,
    "sodium_mg": 202.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2644288",
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
