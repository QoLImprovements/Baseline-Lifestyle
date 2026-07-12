/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "unit-yield-from-1-lb-ready-to-cook-chicken",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-173615",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    },
    {
      "gramsPerUnit": 158.0,
      "key": "leg-bone-removed",
      "kind": "unit",
      "label": "leg, bone removed"
    }
  ],
  "name": "Chicken, broilers or fryers, leg, meat and skin, cooked, fried, batter",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 8.72,
    "energy_kcal": 1140.0,
    "fat_g": 16.2,
    "fibre_g": 0.3,
    "folate_ug": 18.0,
    "iron_mg": 1.4,
    "magnesium_mg": 20.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 152.0,
    "potassium_mg": 189.0,
    "protein_g": 21.8,
    "salt_g": 0.6975,
    "sat_fat_g": 4.28,
    "sodium_mg": 279.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173615",
  "state": "Fried",
  "subcategory": "Poultry Products",
  "tags": [
    "fried",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
