/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "item-7-8-oz",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172073",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 223.0,
      "key": "item-7-8-oz",
      "kind": "unit",
      "label": "item 7.8 oz"
    }
  ],
  "name": "McDONALD'S, Bacon Ranch Salad without chicken",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 4.2,
    "energy_kcal": 61.0,
    "fat_g": 3.64,
    "fibre_g": 1.5,
    "folate_ug": 53.0,
    "iron_mg": 0.67,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 45.0,
    "potassium_mg": 201.0,
    "protein_g": 4.14,
    "salt_g": 0.33,
    "sat_fat_g": 1.51,
    "sodium_mg": 132.0,
    "sugar_g": 2.14,
    "vitamin_a_ug": 2890.0,
    "vitamin_c_mg": 13.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172073",
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
