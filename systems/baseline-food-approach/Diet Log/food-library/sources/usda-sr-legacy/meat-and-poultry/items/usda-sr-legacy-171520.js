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
  "id": "usda-sr-legacy-171520",
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
    }
  ],
  "name": "Chicken, broilers or fryers, rotisserie, original seasoning, skin only, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 0.11,
    "energy_kcal": 406.0,
    "fat_g": 37.2,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.98,
    "magnesium_mg": 26.0,
    "omega3_g": 0.233,
    "phosphorus_mg": 248.0,
    "potassium_mg": 245.0,
    "protein_g": 17.7,
    "salt_g": 0.9525,
    "sat_fat_g": 9.99,
    "sodium_mg": 381.0,
    "sugar_g": 0.11,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171520",
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
