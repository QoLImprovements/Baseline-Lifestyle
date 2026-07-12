/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-piece-nfs",
  "description": "Pizza",
  "id": "usda-fndds-2708655",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "1-piece-nfs",
      "kind": "unit",
      "label": "1 piece, NFS"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "1-personal-size-pizza-5-7-diameter",
      "kind": "unit",
      "label": "1 personal size pizza (5-7\" diameter)"
    },
    {
      "gramsPerUnit": 5.6,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    }
  ],
  "name": "Pizza, with meat other than pepperoni, from school lunch, thin crust",
  "nutritionPerBasis": {
    "calcium_mg": 238.0,
    "carbs_g": 32.2,
    "energy_kcal": 250.0,
    "fat_g": 7.83,
    "fibre_g": 3.9,
    "folate_ug": 71.0,
    "iron_mg": 2.09,
    "magnesium_mg": 52.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 318.0,
    "potassium_mg": 385.0,
    "protein_g": 12.6,
    "salt_g": 1.1425,
    "sat_fat_g": 3.49,
    "sodium_mg": 457.0,
    "sugar_g": 7.53,
    "vitamin_a_ug": 89.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708655",
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
