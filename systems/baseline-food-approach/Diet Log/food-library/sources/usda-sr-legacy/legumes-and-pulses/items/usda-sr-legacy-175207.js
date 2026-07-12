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
  "id": "usda-sr-legacy-175207",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Chili with beans, canned",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 13.2,
    "energy_kcal": 433.0,
    "fat_g": 3.76,
    "fibre_g": 3.3,
    "folate_ug": 23.0,
    "iron_mg": 3.43,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 154.0,
    "potassium_mg": 365.0,
    "protein_g": 6.12,
    "salt_g": 1.0575,
    "sat_fat_g": 1.13,
    "sodium_mg": 423.0,
    "sugar_g": 1.65,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175207",
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
