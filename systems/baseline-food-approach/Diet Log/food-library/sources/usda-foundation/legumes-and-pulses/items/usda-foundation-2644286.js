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
  "id": "usda-foundation-2644286",
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
  "name": "Beans, navy, canned, sodium added, drained and rinsed",
  "nutritionPerBasis": {
    "calcium_mg": 63.9,
    "carbs_g": 20.0,
    "energy_kcal": 119.0,
    "fat_g": 1.4,
    "fibre_g": 6.85,
    "folate_ug": 0.0,
    "iron_mg": 1.6,
    "magnesium_mg": 29.6,
    "omega3_g": 0.0,
    "phosphorus_mg": 86.7,
    "potassium_mg": 184.0,
    "protein_g": 6.57,
    "salt_g": 0.475,
    "sat_fat_g": 0.0,
    "sodium_mg": 190.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2644286",
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
