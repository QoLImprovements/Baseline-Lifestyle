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
  "id": "usda-fndds-2706131",
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
      "gramsPerUnit": 525.0,
      "key": "1-back-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 back (yield after cooking, bone removed)"
    }
  ],
  "name": "Turkey, back",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 0.0,
    "energy_kcal": 203.0,
    "fat_g": 11.3,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.67,
    "magnesium_mg": 29.0,
    "omega3_g": 0.021,
    "phosphorus_mg": 250.0,
    "potassium_mg": 250.0,
    "protein_g": 25.6,
    "salt_g": 1.3925,
    "sat_fat_g": 3.18,
    "sodium_mg": 557.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706131",
  "state": "Unspecified",
  "subcategory": "Turkey, duck, other poultry",
  "tags": [
    "meat-and-poultry",
    "turkey-duck-other-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
