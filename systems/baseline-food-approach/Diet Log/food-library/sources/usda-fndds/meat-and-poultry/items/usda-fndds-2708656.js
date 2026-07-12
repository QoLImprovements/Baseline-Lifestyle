/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-2-bagel",
  "description": "Pizza",
  "id": "usda-fndds-2708656",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 149.0,
      "key": "1-2-bagel",
      "kind": "unit",
      "label": "1/2 bagel"
    },
    {
      "gramsPerUnit": 54.0,
      "key": "1-2-english-muffin",
      "kind": "unit",
      "label": "1/2 English muffin"
    },
    {
      "gramsPerUnit": 158.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 178.0,
      "key": "1-personal-size-pizza-5-7-diameter",
      "kind": "unit",
      "label": "1 personal size pizza (5-7\" diameter)"
    },
    {
      "gramsPerUnit": 6.3,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 158.0,
      "key": "1-piece-nfs",
      "kind": "unit",
      "label": "1 piece, NFS"
    },
    {
      "gramsPerUnit": 143.0,
      "key": "1-french-bread",
      "kind": "unit",
      "label": "1 French bread"
    }
  ],
  "name": "Pizza, with meat other than pepperoni, from school lunch, thick crust",
  "nutritionPerBasis": {
    "calcium_mg": 168.0,
    "carbs_g": 30.6,
    "energy_kcal": 257.0,
    "fat_g": 9.07,
    "fibre_g": 4.0,
    "folate_ug": 81.0,
    "iron_mg": 2.21,
    "magnesium_mg": 23.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 279.0,
    "potassium_mg": 282.0,
    "protein_g": 13.3,
    "salt_g": 1.0825,
    "sat_fat_g": 4.22,
    "sodium_mg": 433.0,
    "sugar_g": 3.72,
    "vitamin_a_ug": 60.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708656",
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
