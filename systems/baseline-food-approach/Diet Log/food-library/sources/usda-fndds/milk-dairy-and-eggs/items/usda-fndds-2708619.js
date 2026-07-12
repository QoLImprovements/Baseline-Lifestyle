/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-surface-inch",
  "description": "Pizza",
  "id": "usda-fndds-2708619",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.8,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
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
      "gramsPerUnit": 147.0,
      "key": "1-piece-nfs",
      "kind": "unit",
      "label": "1 piece, NFS"
    }
  ],
  "name": "Pizza, cheese, from school lunch, medium crust",
  "nutritionPerBasis": {
    "calcium_mg": 206.0,
    "carbs_g": 29.7,
    "energy_kcal": 250.0,
    "fat_g": 8.59,
    "fibre_g": 3.4,
    "folate_ug": 71.0,
    "iron_mg": 2.58,
    "magnesium_mg": 46.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 300.0,
    "potassium_mg": 326.0,
    "protein_g": 13.7,
    "salt_g": 1.0525,
    "sat_fat_g": 4.18,
    "sodium_mg": 421.0,
    "sugar_g": 6.07,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 5.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708619",
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
