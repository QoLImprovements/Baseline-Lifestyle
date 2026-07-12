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
  "id": "usda-fndds-2708654",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "1-piece-nfs",
      "kind": "unit",
      "label": "1 piece, NFS"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-personal-size-pizza-5-7-diameter",
      "kind": "unit",
      "label": "1 personal size pizza (5-7\" diameter)"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 5.8,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    }
  ],
  "name": "Pizza, with meat other than pepperoni, from school lunch, medium crust",
  "nutritionPerBasis": {
    "calcium_mg": 203.0,
    "carbs_g": 31.4,
    "energy_kcal": 254.0,
    "fat_g": 8.45,
    "fibre_g": 4.0,
    "folate_ug": 76.0,
    "iron_mg": 2.15,
    "magnesium_mg": 38.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 298.0,
    "potassium_mg": 334.0,
    "protein_g": 12.9,
    "salt_g": 1.1125,
    "sat_fat_g": 3.85,
    "sodium_mg": 445.0,
    "sugar_g": 5.62,
    "vitamin_a_ug": 74.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.78,
    "vitamin_k_ug": 4.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708654",
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
