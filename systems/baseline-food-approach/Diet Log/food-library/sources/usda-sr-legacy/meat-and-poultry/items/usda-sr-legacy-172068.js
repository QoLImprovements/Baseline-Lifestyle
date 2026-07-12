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
  "id": "usda-sr-legacy-172068",
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
  "name": "McDONALD'S, Sausage McMUFFIN with Egg",
  "nutritionPerBasis": {
    "calcium_mg": 172.0,
    "carbs_g": 17.3,
    "energy_kcal": 1150.0,
    "fat_g": 17.8,
    "fibre_g": 0.9,
    "folate_ug": 0.0,
    "iron_mg": 1.97,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 171.0,
    "potassium_mg": 171.0,
    "protein_g": 12.6,
    "salt_g": 1.43,
    "sat_fat_g": 6.01,
    "sodium_mg": 572.0,
    "sugar_g": 1.57,
    "vitamin_a_ug": 335.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172068",
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
