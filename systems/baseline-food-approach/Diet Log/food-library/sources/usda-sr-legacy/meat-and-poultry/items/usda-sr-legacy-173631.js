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
  "id": "usda-sr-legacy-173631",
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
      "gramsPerUnit": 40.0,
      "key": "wing-bone-removed",
      "kind": "unit",
      "label": "wing, bone removed"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, wing, meat and skin, cooked, stewed",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.0,
    "energy_kcal": 1040.0,
    "fat_g": 16.8,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.13,
    "magnesium_mg": 16.0,
    "omega3_g": 0.1,
    "phosphorus_mg": 121.0,
    "potassium_mg": 139.0,
    "protein_g": 22.8,
    "salt_g": 0.1675,
    "sat_fat_g": 4.71,
    "sodium_mg": 67.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173631",
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
