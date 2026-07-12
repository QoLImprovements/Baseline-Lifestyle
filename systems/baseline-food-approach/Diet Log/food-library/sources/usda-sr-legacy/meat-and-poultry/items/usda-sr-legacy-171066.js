/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "0-5-chicken-bone-removed",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171066",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 184.0,
      "key": "0-5-chicken-bone-removed",
      "kind": "unit",
      "label": "0.5 chicken, bone removed"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, dark meat, meat and skin, cooked, stewed",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.0,
    "energy_kcal": 975.0,
    "fat_g": 14.7,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.31,
    "magnesium_mg": 18.0,
    "omega3_g": 0.08,
    "phosphorus_mg": 133.0,
    "potassium_mg": 166.0,
    "protein_g": 23.5,
    "salt_g": 0.175,
    "sat_fat_g": 4.06,
    "sodium_mg": 70.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171066",
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
