/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-personal-size-pizza-5-7-diameter",
  "description": "Pizza",
  "id": "usda-fndds-2708667",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 278.0,
      "key": "1-personal-size-pizza-5-7-diameter",
      "kind": "unit",
      "label": "1 personal size pizza (5-7\" diameter)"
    },
    {
      "gramsPerUnit": 173.0,
      "key": "1-piece-large-pizza",
      "kind": "unit",
      "label": "1 piece, large pizza"
    },
    {
      "gramsPerUnit": 121.0,
      "key": "1-2-bagel",
      "kind": "unit",
      "label": "1/2 bagel"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 1115.0,
      "key": "1-medium-pizza-11-12-diameter",
      "kind": "unit",
      "label": "1 medium pizza (11-12\" diameter)"
    },
    {
      "gramsPerUnit": 181.0,
      "key": "1-piece-extra-large-pizza",
      "kind": "unit",
      "label": "1 piece, extra-large pizza"
    },
    {
      "gramsPerUnit": 118.0,
      "key": "1-piece-small-pizza",
      "kind": "unit",
      "label": "1 piece, small pizza"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "1-2-english-muffin",
      "kind": "unit",
      "label": "1/2 English muffin"
    },
    {
      "gramsPerUnit": 1810.0,
      "key": "1-extra-large-pizza-16-18-diameter",
      "kind": "unit",
      "label": "1 extra-large pizza (16-18\" diameter)"
    },
    {
      "gramsPerUnit": 139.0,
      "key": "1-piece-medium-pizza",
      "kind": "unit",
      "label": "1 piece, medium pizza"
    },
    {
      "gramsPerUnit": 173.0,
      "key": "1-piece-nfs",
      "kind": "unit",
      "label": "1 piece, NFS"
    }
  ],
  "name": "Pizza with extra meat and extra vegetables, thick crust",
  "nutritionPerBasis": {
    "calcium_mg": 143.0,
    "carbs_g": 26.4,
    "energy_kcal": 239.0,
    "fat_g": 9.97,
    "fibre_g": 1.9,
    "folate_ug": 85.0,
    "iron_mg": 2.29,
    "magnesium_mg": 21.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 187.0,
    "potassium_mg": 190.0,
    "protein_g": 11.0,
    "salt_g": 1.195,
    "sat_fat_g": 3.85,
    "sodium_mg": 478.0,
    "sugar_g": 2.94,
    "vitamin_a_ug": 55.0,
    "vitamin_c_mg": 4.3,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 8.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708667",
  "state": "Unspecified",
  "subcategory": "Pizza",
  "tags": [
    "meat-and-poultry",
    "pizza",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
