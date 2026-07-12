/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup-pieces",
  "description": "Cold cuts and cured meats",
  "id": "usda-fndds-2706178",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup-pieces",
      "kind": "unit",
      "label": "1 cup, pieces"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "guideline-amount-on-regular-sandwich",
      "kind": "unit",
      "label": "Guideline amount on regular sandwich"
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
      "gramsPerUnit": 84.0,
      "key": "guideline-amount-on-large-sandwich",
      "kind": "unit",
      "label": "Guideline amount on large sandwich"
    }
  ],
  "name": "Bologna, reduced sodium",
  "nutritionPerBasis": {
    "calcium_mg": 125.0,
    "carbs_g": 6.31,
    "energy_kcal": 281.0,
    "fat_g": 23.8,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.24,
    "magnesium_mg": 15.0,
    "omega3_g": 0.023,
    "phosphorus_mg": 212.0,
    "potassium_mg": 320.0,
    "protein_g": 10.3,
    "salt_g": 2.075,
    "sat_fat_g": 7.39,
    "sodium_mg": 830.0,
    "sugar_g": 1.97,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706178",
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
