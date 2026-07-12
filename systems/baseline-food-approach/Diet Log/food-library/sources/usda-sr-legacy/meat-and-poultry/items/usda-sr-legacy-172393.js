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
  "id": "usda-sr-legacy-172393",
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
      "gramsPerUnit": 14.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "wing-bone-and-skin-removed",
      "kind": "unit",
      "label": "wing, bone and skin removed"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "cup-chopped-or-diced",
      "kind": "unit",
      "label": "cup, chopped or diced"
    }
  ],
  "name": "Chicken, broilers or fryers, wing, meat only, cooked, stewed",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 757.0,
    "fat_g": 7.18,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.12,
    "magnesium_mg": 18.0,
    "omega3_g": 0.11,
    "phosphorus_mg": 134.0,
    "potassium_mg": 153.0,
    "protein_g": 27.2,
    "salt_g": 0.1825,
    "sat_fat_g": 2.0,
    "sodium_mg": 73.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172393",
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
