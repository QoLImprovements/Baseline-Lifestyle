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
  "id": "usda-foundation-2644292",
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
  "name": "Beans, pinto, canned, sodium added, drained and rinsed",
  "nutritionPerBasis": {
    "calcium_mg": 55.2,
    "carbs_g": 19.6,
    "energy_kcal": 117.0,
    "fat_g": 1.27,
    "fibre_g": 7.09,
    "folate_ug": 0.0,
    "iron_mg": 1.28,
    "magnesium_mg": 27.5,
    "omega3_g": 0.0,
    "phosphorus_mg": 83.1,
    "potassium_mg": 210.0,
    "protein_g": 6.69,
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
  "sourceId": "2644292",
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
