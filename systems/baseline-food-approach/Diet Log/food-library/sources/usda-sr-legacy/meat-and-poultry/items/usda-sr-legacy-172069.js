/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "item-4-9-oz",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172069",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "item-4-9-oz",
      "kind": "unit",
      "label": "item 4.9 oz"
    }
  ],
  "name": "McDONALD'S, Bacon Egg & Cheese Biscuit",
  "nutritionPerBasis": {
    "calcium_mg": 109.0,
    "carbs_g": 22.3,
    "energy_kcal": 304.0,
    "fat_g": 18.8,
    "fibre_g": 0.9,
    "folate_ug": 0.0,
    "iron_mg": 2.13,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 335.0,
    "potassium_mg": 121.0,
    "protein_g": 13.4,
    "salt_g": 2.1575,
    "sat_fat_g": 8.26,
    "sodium_mg": 863.0,
    "sugar_g": 2.18,
    "vitamin_a_ug": 399.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172069",
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
