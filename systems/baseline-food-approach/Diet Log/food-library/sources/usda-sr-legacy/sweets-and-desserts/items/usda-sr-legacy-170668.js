/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-1-2-cup",
  "description": "Sweets",
  "id": "usda-sr-legacy-170668",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "serving-1-2-cup",
      "kind": "unit",
      "label": "serving 1/2 cup"
    }
  ],
  "name": "Ice creams, BREYERS, No Sugar Added, Chocolate Caramel",
  "nutritionPerBasis": {
    "calcium_mg": 121.0,
    "carbs_g": 25.2,
    "energy_kcal": 151.0,
    "fat_g": 5.8,
    "fibre_g": 1.0,
    "folate_ug": 0.0,
    "iron_mg": 0.59,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 3.54,
    "salt_g": 0.1925,
    "sat_fat_g": 3.65,
    "sodium_mg": 77.0,
    "sugar_g": 5.81,
    "vitamin_a_ug": 266.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170668",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
