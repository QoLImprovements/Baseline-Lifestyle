/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "drumstick",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171521",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 53.0,
      "key": "drumstick",
      "kind": "unit",
      "label": "drumstick"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "serving-3-oz",
      "kind": "unit",
      "label": "serving (3 oz)"
    }
  ],
  "name": "Chicken, broilers or fryers, rotisserie, original seasoning, drumstick, meat and skin, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 0.02,
    "energy_kcal": 215.0,
    "fat_g": 12.0,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 1.07,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 255.0,
    "potassium_mg": 291.0,
    "protein_g": 26.9,
    "salt_g": 1.0275,
    "sat_fat_g": 3.02,
    "sodium_mg": 411.0,
    "sugar_g": 0.02,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171521",
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
