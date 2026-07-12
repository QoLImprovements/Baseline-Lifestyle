/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "package-1-package",
  "description": "Sweets",
  "id": "usda-sr-legacy-168765",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "package-1-package",
      "kind": "unit",
      "label": "package 1 package"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "7-pieces",
      "kind": "unit",
      "label": "7 pieces"
    }
  ],
  "name": "Candies, ROLO Caramels in Milk Chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 145.0,
    "carbs_g": 68.0,
    "energy_kcal": 474.0,
    "fat_g": 20.9,
    "fibre_g": 0.9,
    "folate_ug": 0.0,
    "iron_mg": 0.42,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 71.0,
    "potassium_mg": 188.0,
    "protein_g": 5.08,
    "salt_g": 0.47,
    "sat_fat_g": 14.5,
    "sodium_mg": 188.0,
    "sugar_g": 63.9,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 1.1,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168765",
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
