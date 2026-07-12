/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "tsp",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-172473",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 4.5,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Soy sauce made from soy and wheat (shoyu), low sodium",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 5.59,
    "energy_kcal": 237.0,
    "fat_g": 0.3,
    "fibre_g": 0.7,
    "folate_ug": 44.0,
    "iron_mg": 1.35,
    "magnesium_mg": 69.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 166.0,
    "potassium_mg": 352.0,
    "protein_g": 9.05,
    "salt_g": 9.0,
    "sat_fat_g": 0.035,
    "sodium_mg": 3600.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172473",
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
