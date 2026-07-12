/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "item-7-oz",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172060",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 199.0,
      "key": "item-7-oz",
      "kind": "unit",
      "label": "item 7 oz"
    }
  ],
  "name": "McDONALD'S, Sausage, Egg & Cheese McGRIDDLES",
  "nutritionPerBasis": {
    "calcium_mg": 96.0,
    "carbs_g": 22.0,
    "energy_kcal": 283.0,
    "fat_g": 17.7,
    "fibre_g": 0.6,
    "folate_ug": 0.0,
    "iron_mg": 1.51,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 307.0,
    "potassium_mg": 146.0,
    "protein_g": 10.8,
    "salt_g": 1.63,
    "sat_fat_g": 5.65,
    "sodium_mg": 652.0,
    "sugar_g": 7.9,
    "vitamin_a_ug": 264.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172060",
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
