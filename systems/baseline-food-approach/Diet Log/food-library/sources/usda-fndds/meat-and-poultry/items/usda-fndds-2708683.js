/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-2-english-muffin",
  "description": "Pizza",
  "id": "usda-fndds-2708683",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 61.0,
      "key": "1-2-english-muffin",
      "kind": "unit",
      "label": "1/2 English muffin"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-personal-size-pizza-5-7-diameter",
      "kind": "unit",
      "label": "1 personal size pizza (5-7\" diameter)"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-piece-medium-pizza",
      "kind": "unit",
      "label": "1 piece, medium pizza"
    },
    {
      "gramsPerUnit": 630.0,
      "key": "1-small-pizza-8-10-diameter",
      "kind": "unit",
      "label": "1 small pizza (8-10\" diameter)"
    },
    {
      "gramsPerUnit": 104.0,
      "key": "1-2-bagel",
      "kind": "unit",
      "label": "1/2 bagel"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-piece-nfs",
      "kind": "unit",
      "label": "1 piece, NFS"
    },
    {
      "gramsPerUnit": 161.0,
      "key": "1-piece-extra-large-pizza",
      "kind": "unit",
      "label": "1 piece, extra-large pizza"
    },
    {
      "gramsPerUnit": 1615.0,
      "key": "1-extra-large-pizza-16-18-diameter",
      "kind": "unit",
      "label": "1 extra-large pizza (16-18\" diameter)"
    },
    {
      "gramsPerUnit": 8.1,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 310.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-french-bread",
      "kind": "unit",
      "label": "1 French bread"
    }
  ],
  "name": "White pizza, cheese, with meat and vegetables, thick crust",
  "nutritionPerBasis": {
    "calcium_mg": 184.0,
    "carbs_g": 25.3,
    "energy_kcal": 270.0,
    "fat_g": 13.3,
    "fibre_g": 1.1,
    "folate_ug": 48.0,
    "iron_mg": 1.91,
    "magnesium_mg": 22.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 168.0,
    "potassium_mg": 159.0,
    "protein_g": 11.7,
    "salt_g": 1.3975,
    "sat_fat_g": 4.94,
    "sodium_mg": 559.0,
    "sugar_g": 3.06,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 3.7,
    "vitamin_e_mg": 1.05,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708683",
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
