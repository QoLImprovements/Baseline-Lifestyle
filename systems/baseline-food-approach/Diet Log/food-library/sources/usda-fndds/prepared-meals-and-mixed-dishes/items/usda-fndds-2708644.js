/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "1-personal-size-pizza-5-7-diameter",
  "description": "Pizza",
  "id": "usda-fndds-2708644",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-personal-size-pizza-5-7-diameter",
      "kind": "unit",
      "label": "1 personal size pizza (5-7\" diameter)"
    },
    {
      "gramsPerUnit": 5.8,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "1-piece-nfs",
      "kind": "unit",
      "label": "1 piece, NFS"
    }
  ],
  "name": "Pizza, with pepperoni, from school lunch, medium crust",
  "nutritionPerBasis": {
    "calcium_mg": 178.0,
    "carbs_g": 29.8,
    "energy_kcal": 256.0,
    "fat_g": 9.22,
    "fibre_g": 4.3,
    "folate_ug": 57.0,
    "iron_mg": 2.64,
    "magnesium_mg": 46.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 310.0,
    "potassium_mg": 345.0,
    "protein_g": 13.6,
    "salt_g": 1.21,
    "sat_fat_g": 3.52,
    "sodium_mg": 484.0,
    "sugar_g": 5.82,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 8.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708644",
  "state": "Unspecified",
  "subcategory": "Pizza",
  "tags": [
    "pizza",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
