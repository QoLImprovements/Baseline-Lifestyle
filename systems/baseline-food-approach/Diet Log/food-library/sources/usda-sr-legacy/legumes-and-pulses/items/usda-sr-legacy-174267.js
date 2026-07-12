/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "oz",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-174267",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Peanut flour, defatted",
  "nutritionPerBasis": {
    "calcium_mg": 140.0,
    "carbs_g": 34.7,
    "energy_kcal": 327.0,
    "fat_g": 0.55,
    "fibre_g": 15.8,
    "folate_ug": 248.0,
    "iron_mg": 2.1,
    "magnesium_mg": 370.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 760.0,
    "potassium_mg": 1290.0,
    "protein_g": 52.2,
    "salt_g": 0.45,
    "sat_fat_g": 0.063,
    "sodium_mg": 180.0,
    "sugar_g": 8.22,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174267",
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
