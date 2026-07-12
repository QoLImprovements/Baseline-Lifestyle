/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "item-5-8-oz",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173300",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "item-5-8-oz",
      "kind": "unit",
      "label": "item 5.8 oz"
    }
  ],
  "name": "McDONALD'S, Bacon, Egg & Cheese McGRIDDLES",
  "nutritionPerBasis": {
    "calcium_mg": 109.0,
    "carbs_g": 26.2,
    "energy_kcal": 1140.0,
    "fat_g": 13.2,
    "fibre_g": 0.8,
    "folate_ug": 0.0,
    "iron_mg": 1.65,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 12.0,
    "salt_g": 1.6825,
    "sat_fat_g": 4.2,
    "sodium_mg": 673.0,
    "sugar_g": 9.56,
    "vitamin_a_ug": 313.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173300",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
