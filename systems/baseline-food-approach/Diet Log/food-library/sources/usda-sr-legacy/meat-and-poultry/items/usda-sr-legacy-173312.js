/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "item-10-8-oz",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173312",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 305.0,
      "key": "item-10-8-oz",
      "kind": "unit",
      "label": "item 10.8 oz"
    }
  ],
  "name": "McDONALD'S, Bacon Ranch Salad with Grilled Chicken",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 3.64,
    "energy_kcal": 339.0,
    "fat_g": 3.14,
    "fibre_g": 1.0,
    "folate_ug": 0.0,
    "iron_mg": 0.65,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 10.3,
    "salt_g": 0.575,
    "sat_fat_g": 1.24,
    "sodium_mg": 230.0,
    "sugar_g": 1.73,
    "vitamin_a_ug": 2010.0,
    "vitamin_c_mg": 10.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173312",
  "state": "Grilled",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "grilled",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
