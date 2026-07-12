/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "breast-breast-with-skin-and-bone",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171518",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 483.0,
      "key": "breast-breast-with-skin-and-bone",
      "kind": "unit",
      "label": "breast breast with skin and bone"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Chicken, broilers or fryers, rotisserie, original seasoning, breast, meat only, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 137.0,
    "fat_g": 2.79,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.45,
    "magnesium_mg": 25.0,
    "omega3_g": 0.024,
    "phosphorus_mg": 235.0,
    "potassium_mg": 303.0,
    "protein_g": 28.0,
    "salt_g": 0.7825,
    "sat_fat_g": 0.775,
    "sodium_mg": 313.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171518",
  "state": "Cooked",
  "subcategory": "Poultry Products",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
