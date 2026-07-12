/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "drumstick-bone-and-skin-removed",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172377",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 46.0,
      "key": "drumstick-bone-and-skin-removed",
      "kind": "unit",
      "label": "drumstick, bone and skin removed"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "cup-chopped-or-diced",
      "kind": "unit",
      "label": "cup, chopped or diced"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Chicken, broilers or fryers, drumstick, meat only, cooked, stewed",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 707.0,
    "fat_g": 5.71,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 1.37,
    "magnesium_mg": 21.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 150.0,
    "potassium_mg": 199.0,
    "protein_g": 27.5,
    "salt_g": 0.2,
    "sat_fat_g": 1.51,
    "sodium_mg": 80.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172377",
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
