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
  "id": "usda-sr-legacy-175184",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 259.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beans, baked, canned, with franks",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 15.4,
    "energy_kcal": 596.0,
    "fat_g": 6.57,
    "fibre_g": 6.9,
    "folate_ug": 30.0,
    "iron_mg": 1.73,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 104.0,
    "potassium_mg": 235.0,
    "protein_g": 6.75,
    "salt_g": 1.075,
    "sat_fat_g": 2.35,
    "sodium_mg": 430.0,
    "sugar_g": 6.53,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175184",
  "state": "Baked",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "baked",
    "legumes-and-legume-products",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
