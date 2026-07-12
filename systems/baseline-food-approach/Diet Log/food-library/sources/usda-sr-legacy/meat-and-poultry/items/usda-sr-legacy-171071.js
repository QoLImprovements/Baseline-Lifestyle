/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "0-5-back-bone-removed",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171071",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 53.0,
      "key": "0-5-back-bone-removed",
      "kind": "unit",
      "label": "0.5 back, bone removed"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, back, meat and skin, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 0.0,
    "energy_kcal": 1260.0,
    "fat_g": 21.0,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.42,
    "magnesium_mg": 20.0,
    "omega3_g": 0.11,
    "phosphorus_mg": 154.0,
    "potassium_mg": 210.0,
    "protein_g": 26.0,
    "salt_g": 0.2175,
    "sat_fat_g": 5.82,
    "sodium_mg": 87.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 105.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171071",
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
