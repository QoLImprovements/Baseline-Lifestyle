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
  "id": "usda-sr-legacy-175182",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 254.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beans, baked, canned, plain or vegetarian",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 21.1,
    "energy_kcal": 94.0,
    "fat_g": 0.37,
    "fibre_g": 4.1,
    "folate_ug": 12.0,
    "iron_mg": 1.19,
    "magnesium_mg": 27.0,
    "omega3_g": 0.051,
    "phosphorus_mg": 74.0,
    "potassium_mg": 224.0,
    "protein_g": 4.75,
    "salt_g": 0.8575,
    "sat_fat_g": 0.071,
    "sodium_mg": 343.0,
    "sugar_g": 7.96,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175182",
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
