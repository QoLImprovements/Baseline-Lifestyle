/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pizza",
  "id": "usda-fndds-2708643",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 5.6,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "1-piece-nfs",
      "kind": "unit",
      "label": "1 piece, NFS"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "1-personal-size-pizza-5-7-diameter",
      "kind": "unit",
      "label": "1 personal size pizza (5-7\" diameter)"
    }
  ],
  "name": "Pizza with pepperoni, from school lunch, thin crust",
  "nutritionPerBasis": {
    "calcium_mg": 202.0,
    "carbs_g": 31.2,
    "energy_kcal": 254.0,
    "fat_g": 8.62,
    "fibre_g": 4.3,
    "folate_ug": 55.0,
    "iron_mg": 2.74,
    "magnesium_mg": 51.0,
    "omega3_g": 0.017,
    "phosphorus_mg": 316.0,
    "potassium_mg": 382.0,
    "protein_g": 12.8,
    "salt_g": 1.2375,
    "sat_fat_g": 2.81,
    "sodium_mg": 495.0,
    "sugar_g": 7.62,
    "vitamin_a_ug": 75.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 5.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708643",
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
