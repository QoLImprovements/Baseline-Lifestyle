/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Turkey, duck, other poultry",
  "id": "usda-fndds-2706149",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-diced-cooked",
      "kind": "unit",
      "label": "1 cup, diced, cooked"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-quail-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 quail (yield after cooking, bone removed)"
    }
  ],
  "name": "Quail, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 0.0,
    "energy_kcal": 226.0,
    "fat_g": 14.0,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 4.41,
    "magnesium_mg": 22.0,
    "omega3_g": 0.047,
    "phosphorus_mg": 278.0,
    "potassium_mg": 215.0,
    "protein_g": 25.0,
    "salt_g": 0.535,
    "sat_fat_g": 3.94,
    "sodium_mg": 214.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 70.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706149",
  "state": "Cooked",
  "subcategory": "Turkey, duck, other poultry",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "turkey-duck-other-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
