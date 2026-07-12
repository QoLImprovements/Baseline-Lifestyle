/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "1-french-bread",
  "description": "Pizza",
  "id": "usda-fndds-2708645",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 143.0,
      "key": "1-french-bread",
      "kind": "unit",
      "label": "1 French bread"
    },
    {
      "gramsPerUnit": 158.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 149.0,
      "key": "1-2-bagel",
      "kind": "unit",
      "label": "1/2 bagel"
    },
    {
      "gramsPerUnit": 178.0,
      "key": "1-personal-size-pizza-5-7-diameter",
      "kind": "unit",
      "label": "1 personal size pizza (5-7\" diameter)"
    },
    {
      "gramsPerUnit": 158.0,
      "key": "1-piece-nfs",
      "kind": "unit",
      "label": "1 piece, NFS"
    },
    {
      "gramsPerUnit": 6.3,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 54.0,
      "key": "1-2-english-muffin",
      "kind": "unit",
      "label": "1/2 English muffin"
    }
  ],
  "name": "Pizza with pepperoni, from school lunch, thick crust",
  "nutritionPerBasis": {
    "calcium_mg": 155.0,
    "carbs_g": 28.3,
    "energy_kcal": 259.0,
    "fat_g": 9.82,
    "fibre_g": 4.3,
    "folate_ug": 59.0,
    "iron_mg": 2.53,
    "magnesium_mg": 41.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 305.0,
    "potassium_mg": 308.0,
    "protein_g": 14.4,
    "salt_g": 1.185,
    "sat_fat_g": 4.22,
    "sodium_mg": 474.0,
    "sugar_g": 4.03,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 10.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708645",
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
