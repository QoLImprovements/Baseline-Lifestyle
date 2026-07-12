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
  "id": "usda-sr-legacy-173622",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 11.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "neck-bone-removed",
      "kind": "unit",
      "label": "neck, bone removed"
    }
  ],
  "name": "Chicken, broilers or fryers, neck, meat and skin, cooked simmered",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 0.0,
    "energy_kcal": 1030.0,
    "fat_g": 18.1,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 2.3,
    "magnesium_mg": 13.0,
    "omega3_g": 0.08,
    "phosphorus_mg": 122.0,
    "potassium_mg": 108.0,
    "protein_g": 19.6,
    "salt_g": 0.13,
    "sat_fat_g": 5.0,
    "sodium_mg": 52.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173622",
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
