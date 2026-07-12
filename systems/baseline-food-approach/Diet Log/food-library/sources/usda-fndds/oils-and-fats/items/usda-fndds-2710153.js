/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "quantity-not-specified",
  "description": "Butter and animal fats",
  "id": "usda-fndds-2710153",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "guideline-amount-per-slice-of-bread-roll",
      "kind": "unit",
      "label": "Guideline amount per slice of bread/roll"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-pat",
      "kind": "unit",
      "label": "1 pat"
    }
  ],
  "name": "Table fat, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 0.36,
    "energy_kcal": 677.0,
    "fat_g": 75.3,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.04,
    "magnesium_mg": 2.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 18.0,
    "potassium_mg": 25.0,
    "protein_g": 0.58,
    "salt_g": 1.48,
    "sat_fat_g": 32.5,
    "sodium_mg": 592.0,
    "sugar_g": 0.35,
    "vitamin_a_ug": 782.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 7.24,
    "vitamin_k_ug": 43.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710153",
  "state": "Unspecified",
  "subcategory": "Butter and animal fats",
  "tags": [
    "butter-and-animal-fats",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
