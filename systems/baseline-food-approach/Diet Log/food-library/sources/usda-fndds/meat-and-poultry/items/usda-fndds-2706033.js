/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2706033",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-thigh",
      "kind": "unit",
      "label": "1 thigh"
    }
  ],
  "name": "Chicken thigh, baked or broiled, skin eaten, from fast food / restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 0.0,
    "energy_kcal": 243.0,
    "fat_g": 16.2,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.05,
    "magnesium_mg": 21.0,
    "omega3_g": 0.021,
    "phosphorus_mg": 210.0,
    "potassium_mg": 246.0,
    "protein_g": 22.6,
    "salt_g": 1.205,
    "sat_fat_g": 4.25,
    "sodium_mg": 482.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 5.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706033",
  "state": "Baked",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "baked",
    "chicken-whole-pieces",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
