/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "tbsp",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-173756",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 12.5,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Chickpeas (garbanzo beans, bengal gram), mature seeds, raw",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 63.0,
    "energy_kcal": 378.0,
    "fat_g": 6.04,
    "fibre_g": 12.2,
    "folate_ug": 557.0,
    "iron_mg": 4.31,
    "magnesium_mg": 79.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 252.0,
    "potassium_mg": 718.0,
    "protein_g": 20.5,
    "salt_g": 0.06,
    "sat_fat_g": 0.603,
    "sodium_mg": 24.0,
    "sugar_g": 10.7,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.82,
    "vitamin_k_ug": 9.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173756",
  "state": "Raw",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "legumes-and-pulses",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
