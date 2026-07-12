/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "2-tablespoon",
  "description": "Legumes and Legume Products",
  "id": "usda-foundation-321358",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 33.9,
      "key": "2-tablespoon",
      "kind": "unit",
      "label": "2 tablespoon"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Hummus, commercial",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 14.9,
    "energy_kcal": 960.0,
    "fat_g": 17.1,
    "fibre_g": 5.4,
    "folate_ug": 36.0,
    "iron_mg": 2.41,
    "magnesium_mg": 71.1,
    "omega3_g": 0.637,
    "phosphorus_mg": 166.0,
    "potassium_mg": 289.0,
    "protein_g": 7.35,
    "salt_g": 1.095,
    "sat_fat_g": 2.22,
    "sodium_mg": 438.0,
    "sugar_g": 0.34,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.74,
    "vitamin_k_ug": 17.2
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "321358",
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
