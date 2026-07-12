/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "guideline-amount-on-regular-sandwich",
  "description": "Butter and animal fats",
  "id": "usda-fndds-2710154",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "guideline-amount-on-regular-sandwich",
      "kind": "unit",
      "label": "Guideline amount on regular sandwich"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-pat",
      "kind": "unit",
      "label": "1 pat"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "guideline-amount-on-large-sandwich",
      "kind": "unit",
      "label": "Guideline amount on large sandwich"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "guideline-amount-per-slice-of-bread-roll",
      "kind": "unit",
      "label": "Guideline amount per slice of bread/roll"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Butter, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 0.06,
    "energy_kcal": 743.0,
    "fat_g": 82.2,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.06,
    "magnesium_mg": 2.0,
    "omega3_g": 0.065,
    "phosphorus_mg": 22.0,
    "potassium_mg": 23.0,
    "protein_g": 0.85,
    "salt_g": 1.31,
    "sat_fat_g": 45.6,
    "sodium_mg": 524.0,
    "sugar_g": 0.58,
    "vitamin_a_ug": 758.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 7.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710154",
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
