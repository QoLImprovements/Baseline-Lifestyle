/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "guideline-amount-on-large-sandwich",
  "description": "Cold cuts and cured meats",
  "id": "usda-fndds-2706195",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 84.0,
      "key": "guideline-amount-on-large-sandwich",
      "kind": "unit",
      "label": "Guideline amount on large sandwich"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-slice-nfs",
      "kind": "unit",
      "label": "1 slice, NFS"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "guideline-amount-on-regular-sandwich",
      "kind": "unit",
      "label": "Guideline amount on regular sandwich"
    }
  ],
  "name": "Salami, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 0.72,
    "energy_kcal": 378.0,
    "fat_g": 31.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.36,
    "magnesium_mg": 20.0,
    "omega3_g": 0.032,
    "phosphorus_mg": 192.0,
    "potassium_mg": 363.0,
    "protein_g": 21.1,
    "salt_g": 4.4,
    "sat_fat_g": 11.4,
    "sodium_mg": 1760.0,
    "sugar_g": 0.26,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706195",
  "state": "Unspecified",
  "subcategory": "Cold cuts and cured meats",
  "tags": [
    "cold-cuts-and-cured-meats",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
