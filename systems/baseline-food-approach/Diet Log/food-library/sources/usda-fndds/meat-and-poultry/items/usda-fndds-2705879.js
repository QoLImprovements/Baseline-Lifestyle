/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-oz-boneless",
  "description": "Cold cuts and cured meats",
  "id": "usda-fndds-2705879",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-boneless",
      "kind": "unit",
      "label": "1 oz, boneless"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 0.35,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 9.2,
      "key": "1-thin-slice",
      "kind": "unit",
      "label": "1 thin slice"
    },
    {
      "gramsPerUnit": 9.2,
      "key": "1-slice-nfs",
      "kind": "unit",
      "label": "1 slice, NFS"
    }
  ],
  "name": "Ham, prosciutto",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.3,
    "energy_kcal": 195.0,
    "fat_g": 8.32,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.11,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 318.0,
    "potassium_mg": 510.0,
    "protein_g": 27.8,
    "salt_g": 6.75,
    "sat_fat_g": 2.78,
    "sodium_mg": 2700.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705879",
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
