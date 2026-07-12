/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-slice-nfs",
  "description": "Cold cuts and cured meats",
  "id": "usda-fndds-2706177",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-slice-nfs",
      "kind": "unit",
      "label": "1 slice, NFS"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup-pieces",
      "kind": "unit",
      "label": "1 cup, pieces"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "guideline-amount-on-regular-sandwich",
      "kind": "unit",
      "label": "Guideline amount on regular sandwich"
    },
    {
      "gramsPerUnit": 84.0,
      "key": "guideline-amount-on-large-sandwich",
      "kind": "unit",
      "label": "Guideline amount on large sandwich"
    }
  ],
  "name": "Bologna, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 5.2,
    "energy_kcal": 204.0,
    "fat_g": 14.8,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.0,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 178.0,
    "potassium_mg": 147.0,
    "protein_g": 11.8,
    "salt_g": 2.0525,
    "sat_fat_g": 5.46,
    "sodium_mg": 821.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706177",
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
