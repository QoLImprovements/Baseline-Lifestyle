/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "container",
  "description": "Beverages",
  "id": "usda-sr-legacy-174176",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 209.0,
      "key": "container",
      "kind": "unit",
      "label": "container"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "ml",
      "kind": "unit",
      "label": "ml"
    }
  ],
  "name": "Beverages, fruit juice drink, reduced sugar, with vitamin E added",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 10.0,
    "energy_kcal": 39.0,
    "fat_g": 0.07,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.04,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1.0,
    "potassium_mg": 11.0,
    "protein_g": 0.0,
    "salt_g": 0.005,
    "sat_fat_g": 0.008,
    "sodium_mg": 2.0,
    "sugar_g": 9.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174176",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
