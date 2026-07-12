/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "unit-yield-from-1-lb-ready-to-cook-duck",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171113",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-duck",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook duck)"
    },
    {
      "gramsPerUnit": 174.0,
      "key": "cup-chopped-or-diced-cooked",
      "kind": "unit",
      "label": "cup chopped or diced, cooked"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "leg-bone-and-skin-removed",
      "kind": "unit",
      "label": "leg, bone and skin removed"
    }
  ],
  "name": "Duck, young duckling, domesticated, White Pekin, leg, meat only, bone in, cooked without skin, braised",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.0,
    "energy_kcal": 745.0,
    "fat_g": 5.96,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.33,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 29.1,
    "salt_g": 0.27,
    "sat_fat_g": 1.34,
    "sodium_mg": 108.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171113",
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
