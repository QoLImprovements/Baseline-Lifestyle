/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "chop",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168364",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 107.0,
      "key": "chop",
      "kind": "unit",
      "label": "chop"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Pork, fresh, loin, top loin (chops), boneless, separable lean only, with added solution, cooked, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 0.0,
    "energy_kcal": 170.0,
    "fat_g": 5.73,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.56,
    "magnesium_mg": 29.0,
    "omega3_g": 0.028,
    "phosphorus_mg": 317.0,
    "potassium_mg": 608.0,
    "protein_g": 29.6,
    "salt_g": 0.7875,
    "sat_fat_g": 1.96,
    "sodium_mg": 315.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168364",
  "state": "Grilled",
  "subcategory": "Pork Products",
  "tags": [
    "grilled",
    "meat-and-poultry",
    "pork-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
