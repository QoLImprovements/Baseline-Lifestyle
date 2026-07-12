/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-piece-nfs",
  "description": "Pizza",
  "id": "usda-fndds-2708621",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 54.0,
      "key": "1-2-english-muffin",
      "kind": "unit",
      "label": "1/2 English muffin"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "1-2-bagel",
      "kind": "unit",
      "label": "1/2 bagel"
    }
  ],
  "name": "Pizza, cheese, from school lunch, thick crust",
  "nutritionPerBasis": {
    "calcium_mg": 193.0,
    "carbs_g": 28.1,
    "energy_kcal": 254.0,
    "fat_g": 9.27,
    "fibre_g": 2.9,
    "folate_ug": 88.0,
    "iron_mg": 2.63,
    "magnesium_mg": 40.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 284.0,
    "potassium_mg": 303.0,
    "protein_g": 14.6,
    "salt_g": 1.0525,
    "sat_fat_g": 4.36,
    "sodium_mg": 421.0,
    "sugar_g": 5.02,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.72,
    "vitamin_k_ug": 5.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708621",
  "state": "Unspecified",
  "subcategory": "Pizza",
  "tags": [
    "milk-dairy-and-eggs",
    "pizza",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
