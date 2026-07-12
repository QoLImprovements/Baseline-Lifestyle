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
  "id": "usda-foundation-2644285",
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
  "name": "Beans, black, canned, sodium added, drained and rinsed",
  "nutritionPerBasis": {
    "calcium_mg": 43.3,
    "carbs_g": 19.8,
    "energy_kcal": 115.0,
    "fat_g": 1.27,
    "fibre_g": 6.69,
    "folate_ug": 0.0,
    "iron_mg": 1.69,
    "magnesium_mg": 32.5,
    "omega3_g": 0.0,
    "phosphorus_mg": 91.0,
    "potassium_mg": 253.0,
    "protein_g": 6.91,
    "salt_g": 0.545,
    "sat_fat_g": 0.0,
    "sodium_mg": 218.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2644285",
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
