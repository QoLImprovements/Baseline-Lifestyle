/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "breast",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171125",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 384.0,
      "key": "breast",
      "kind": "unit",
      "label": "breast"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Chicken, broiler, rotisserie, BBQ, breast, meat and skin",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 0.09,
    "energy_kcal": 731.0,
    "fat_g": 7.67,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.51,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 244.0,
    "potassium_mg": 276.0,
    "protein_g": 26.4,
    "salt_g": 0.8225,
    "sat_fat_g": 1.96,
    "sodium_mg": 329.0,
    "sugar_g": 0.09,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171125",
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
