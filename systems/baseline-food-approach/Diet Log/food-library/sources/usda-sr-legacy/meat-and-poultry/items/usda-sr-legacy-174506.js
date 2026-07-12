/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-174506",
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
      "gramsPerUnit": 182.0,
      "key": "back",
      "kind": "unit",
      "label": "back"
    }
  ],
  "name": "Chicken, broiler, rotisserie, BBQ, back meat only",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 0.31,
    "energy_kcal": 888.0,
    "fat_g": 13.9,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.82,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 212.0,
    "potassium_mg": 263.0,
    "protein_g": 21.8,
    "salt_g": 1.4075,
    "sat_fat_g": 3.61,
    "sodium_mg": 563.0,
    "sugar_g": 0.31,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174506",
  "state": "Unspecified",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
