/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "2-tbsp",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-172457",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "2-tbsp",
      "kind": "unit",
      "label": "2 tbsp"
    }
  ],
  "name": "Peanut spread, reduced sugar",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 14.2,
    "energy_kcal": 2720.0,
    "fat_g": 54.9,
    "fibre_g": 7.8,
    "folate_ug": 144.0,
    "iron_mg": 2.84,
    "magnesium_mg": 164.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 350.0,
    "potassium_mg": 818.0,
    "protein_g": 24.8,
    "salt_g": 0.73,
    "sat_fat_g": 10.2,
    "sodium_mg": 292.0,
    "sugar_g": 6.35,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 8.06,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172457",
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
