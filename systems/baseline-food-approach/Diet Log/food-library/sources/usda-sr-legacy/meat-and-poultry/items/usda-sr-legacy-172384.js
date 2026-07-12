/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "neck-bone-and-skin-removed",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172384",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "neck-bone-and-skin-removed",
      "kind": "unit",
      "label": "neck, bone and skin removed"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, neck, meat only, cooked, simmered",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 0.0,
    "energy_kcal": 749.0,
    "fat_g": 8.18,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 2.63,
    "magnesium_mg": 16.0,
    "omega3_g": 0.14,
    "phosphorus_mg": 128.0,
    "potassium_mg": 140.0,
    "protein_g": 24.6,
    "salt_g": 0.16,
    "sat_fat_g": 2.1,
    "sodium_mg": 64.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 121.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172384",
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
