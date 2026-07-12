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
  "id": "usda-sr-legacy-172409",
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
      "gramsPerUnit": 382.0,
      "key": "0-5-duck",
      "kind": "unit",
      "label": "0.5 duck"
    },
    {
      "gramsPerUnit": 173.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-duck",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook duck)"
    }
  ],
  "name": "Duck, domesticated, meat and skin, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 1410.0,
    "fat_g": 28.4,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 2.7,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 156.0,
    "potassium_mg": 204.0,
    "protein_g": 19.0,
    "salt_g": 0.1475,
    "sat_fat_g": 9.67,
    "sodium_mg": 59.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172409",
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
