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
  "id": "usda-sr-legacy-168253",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "chop",
      "kind": "unit",
      "label": "chop"
    }
  ],
  "name": "Pork, fresh, loin, top loin (chops), boneless, separable lean only, cooked, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.0,
    "energy_kcal": 722.0,
    "fat_g": 6.08,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.63,
    "magnesium_mg": 27.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 237.0,
    "potassium_mg": 367.0,
    "protein_g": 27.6,
    "salt_g": 0.1125,
    "sat_fat_g": 2.08,
    "sodium_mg": 45.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168253",
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
