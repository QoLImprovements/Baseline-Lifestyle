/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-small-pizza-8-10-diameter",
  "description": "Pizza",
  "id": "usda-fndds-2708628",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 566.0,
      "key": "1-small-pizza-8-10-diameter",
      "kind": "unit",
      "label": "1 small pizza (8-10\" diameter)"
    },
    {
      "gramsPerUnit": 7.7,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 828.0,
      "key": "1-medium-pizza-11-12-diameter",
      "kind": "unit",
      "label": "1 medium pizza (11-12\" diameter)"
    },
    {
      "gramsPerUnit": 149.0,
      "key": "1-piece-large-pizza",
      "kind": "unit",
      "label": "1 piece, large pizza"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-personal-size-pizza-5-7-diameter",
      "kind": "unit",
      "label": "1 personal size pizza (5-7\" diameter)"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "1-2-bagel",
      "kind": "unit",
      "label": "1/2 bagel"
    },
    {
      "gramsPerUnit": 94.0,
      "key": "1-piece-small-pizza",
      "kind": "unit",
      "label": "1 piece, small pizza"
    },
    {
      "gramsPerUnit": 1548.0,
      "key": "1-extra-large-pizza-16-18-diameter",
      "kind": "unit",
      "label": "1 extra-large pizza (16-18\" diameter)"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-2-english-muffin",
      "kind": "unit",
      "label": "1/2 English muffin"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-french-bread",
      "kind": "unit",
      "label": "1 French bread"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-piece-extra-large-pizza",
      "kind": "unit",
      "label": "1 piece, extra-large pizza"
    }
  ],
  "name": "Pizza, cheese, with vegetables, from restaurant or fast food, thick crust",
  "nutritionPerBasis": {
    "calcium_mg": 161.0,
    "carbs_g": 30.4,
    "energy_kcal": 245.0,
    "fat_g": 9.39,
    "fibre_g": 2.1,
    "folate_ug": 96.0,
    "iron_mg": 2.24,
    "magnesium_mg": 22.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 189.0,
    "potassium_mg": 169.0,
    "protein_g": 9.74,
    "salt_g": 1.2,
    "sat_fat_g": 3.76,
    "sodium_mg": 480.0,
    "sugar_g": 3.41,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 4.8,
    "vitamin_e_mg": 0.76,
    "vitamin_k_ug": 9.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708628",
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
