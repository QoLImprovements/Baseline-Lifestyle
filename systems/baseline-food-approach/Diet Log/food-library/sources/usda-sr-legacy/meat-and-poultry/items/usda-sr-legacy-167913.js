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
  "id": "usda-sr-legacy-167913",
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
      "gramsPerUnit": 150.0,
      "key": "chop-boneless-yield-from-189g-raw-meat",
      "kind": "unit",
      "label": "chop boneless (yield from 189g raw meat)"
    }
  ],
  "name": "Pork, fresh, loin, top loin (chops), boneless, separable lean and fat, with added solution, cooked, pan-broiled",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.0,
    "energy_kcal": 190.0,
    "fat_g": 7.66,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.63,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 317.0,
    "potassium_mg": 512.0,
    "protein_g": 28.4,
    "salt_g": 0.5125,
    "sat_fat_g": 2.72,
    "sodium_mg": 205.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167913",
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
