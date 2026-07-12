/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-small-back-yield-after-cooking-bone-removed",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2706081",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-small-back-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 small back (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-large-back-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 large back (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-medium-back-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 medium back (yield after cooking, bone removed)"
    }
  ],
  "name": "Chicken, back",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 0.0,
    "energy_kcal": 298.0,
    "fat_g": 20.8,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.41,
    "magnesium_mg": 20.0,
    "omega3_g": 0.11,
    "phosphorus_mg": 153.0,
    "potassium_mg": 208.0,
    "protein_g": 25.7,
    "salt_g": 1.0225,
    "sat_fat_g": 5.77,
    "sodium_mg": 409.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 104.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706081",
  "state": "Unspecified",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "chicken-whole-pieces",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
