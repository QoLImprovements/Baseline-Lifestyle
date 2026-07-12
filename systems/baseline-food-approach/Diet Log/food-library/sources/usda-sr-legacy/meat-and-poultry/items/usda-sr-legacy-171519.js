/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-3oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171519",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "serving-3oz",
      "kind": "unit",
      "label": "serving (3oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 53.0,
      "key": "drumstick",
      "kind": "unit",
      "label": "drumstick"
    }
  ],
  "name": "Chicken, broilers or fryers, drumstick, rotisserie, original seasoning, meat only, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 0.0,
    "energy_kcal": 176.0,
    "fat_g": 6.81,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.09,
    "magnesium_mg": 24.0,
    "omega3_g": 0.045,
    "phosphorus_mg": 257.0,
    "potassium_mg": 301.0,
    "protein_g": 28.7,
    "salt_g": 1.0425,
    "sat_fat_g": 1.59,
    "sodium_mg": 417.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171519",
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
