/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "item-4-oz",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173308",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "item-4-oz",
      "kind": "unit",
      "label": "item 4 oz"
    }
  ],
  "name": "McDONALD'S, Sausage McMUFFIN",
  "nutritionPerBasis": {
    "calcium_mg": 224.0,
    "carbs_g": 24.5,
    "energy_kcal": 333.0,
    "fat_g": 21.1,
    "fibre_g": 1.4,
    "folate_ug": 69.0,
    "iron_mg": 2.04,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 163.0,
    "potassium_mg": 188.0,
    "protein_g": 12.7,
    "salt_g": 1.7325,
    "sat_fat_g": 7.25,
    "sodium_mg": 693.0,
    "sugar_g": 1.93,
    "vitamin_a_ug": 260.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173308",
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
