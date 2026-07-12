/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-5-cup",
  "description": "Sweets",
  "id": "usda-sr-legacy-168830",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 587.0,
      "key": "package-yield-2-cups",
      "kind": "unit",
      "label": "package yield (2 cups)"
    }
  ],
  "name": "Puddings, lemon, dry mix, instant, prepared with whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 99.0,
    "carbs_g": 20.1,
    "energy_kcal": 481.0,
    "fat_g": 2.9,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.06,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 205.0,
    "potassium_mg": 127.0,
    "protein_g": 2.7,
    "salt_g": 0.6675,
    "sat_fat_g": 1.74,
    "sodium_mg": 267.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168830",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "milk-dairy-and-eggs",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
