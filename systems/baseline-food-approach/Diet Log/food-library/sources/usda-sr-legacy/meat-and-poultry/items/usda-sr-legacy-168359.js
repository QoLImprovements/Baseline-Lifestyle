/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz-3-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168359",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz-3-oz",
      "kind": "unit",
      "label": "3 oz (3 oz)"
    },
    {
      "gramsPerUnit": 366.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Pork, cured, ham, slice, bone-in, separable lean and fat, heated, pan-broil",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.7,
    "energy_kcal": 757.0,
    "fat_g": 8.48,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.34,
    "magnesium_mg": 25.0,
    "omega3_g": 0.047,
    "phosphorus_mg": 285.0,
    "potassium_mg": 405.0,
    "protein_g": 25.5,
    "salt_g": 2.13,
    "sat_fat_g": 2.75,
    "sodium_mg": 852.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168359",
  "state": "Unspecified",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
