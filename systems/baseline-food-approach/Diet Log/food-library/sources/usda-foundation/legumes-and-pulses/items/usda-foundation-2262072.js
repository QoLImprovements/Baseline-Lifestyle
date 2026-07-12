/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Legumes and Legume Products",
  "id": "usda-foundation-2262072",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peanut butter, creamy",
  "nutritionPerBasis": {
    "calcium_mg": 49.8,
    "carbs_g": 22.7,
    "energy_kcal": 632.0,
    "fat_g": 49.4,
    "fibre_g": 6.32,
    "folate_ug": 97.3,
    "iron_mg": 1.85,
    "magnesium_mg": 193.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 393.0,
    "potassium_mg": 654.0,
    "protein_g": 24.0,
    "salt_g": 0.5525,
    "sat_fat_g": 8.42,
    "sodium_mg": 221.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 5.41,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2262072",
  "state": "Unspecified",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
