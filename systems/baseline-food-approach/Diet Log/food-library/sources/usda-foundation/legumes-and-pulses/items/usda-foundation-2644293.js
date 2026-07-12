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
  "id": "usda-foundation-2644293",
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
  "name": "Blackeye pea, canned, sodium added, drained and rinsed",
  "nutritionPerBasis": {
    "calcium_mg": 27.8,
    "carbs_g": 19.2,
    "energy_kcal": 116.0,
    "fat_g": 1.3,
    "fibre_g": 4.34,
    "folate_ug": 0.0,
    "iron_mg": 1.08,
    "magnesium_mg": 27.3,
    "omega3_g": 0.0,
    "phosphorus_mg": 83.0,
    "potassium_mg": 138.0,
    "protein_g": 6.92,
    "salt_g": 0.5675,
    "sat_fat_g": 0.0,
    "sodium_mg": 227.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2644293",
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
