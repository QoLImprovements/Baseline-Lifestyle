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
  "id": "usda-sr-legacy-174279",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    }
  ],
  "name": "Soy sauce made from hydrolyzed vegetable protein",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 7.84,
    "energy_kcal": 253.0,
    "fat_g": 0.51,
    "fibre_g": 0.5,
    "folate_ug": 13.0,
    "iron_mg": 0.33,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 94.0,
    "potassium_mg": 447.0,
    "protein_g": 7.0,
    "salt_g": 17.05,
    "sat_fat_g": 0.04,
    "sodium_mg": 6820.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174279",
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
