/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-169183",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 107.0,
      "key": "chop",
      "kind": "unit",
      "label": "chop"
    }
  ],
  "name": "Pork, fresh, loin, top loin (chops), boneless, separable lean and fat, with added solution, cooked, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.02,
    "energy_kcal": 829.0,
    "fat_g": 9.42,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.57,
    "magnesium_mg": 28.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 307.0,
    "potassium_mg": 581.0,
    "protein_g": 28.3,
    "salt_g": 0.755,
    "sat_fat_g": 3.27,
    "sodium_mg": 302.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169183",
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
