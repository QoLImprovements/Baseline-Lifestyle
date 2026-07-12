/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup-chopped-or-diced",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171477",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "cup-chopped-or-diced",
      "kind": "unit",
      "label": "cup, chopped or diced"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "0-5-breast-bone-and-skin-removed",
      "kind": "unit",
      "label": "0.5 breast, bone and skin removed"
    }
  ],
  "name": "Chicken, broilers or fryers, breast, meat only, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 0.0,
    "energy_kcal": 690.0,
    "fat_g": 3.57,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.04,
    "magnesium_mg": 29.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 228.0,
    "potassium_mg": 256.0,
    "protein_g": 31.0,
    "salt_g": 0.185,
    "sat_fat_g": 1.01,
    "sodium_mg": 74.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171477",
  "state": "Roasted",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
