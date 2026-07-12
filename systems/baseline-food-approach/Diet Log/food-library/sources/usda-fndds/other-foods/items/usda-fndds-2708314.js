/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-pouch",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708314",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-waffle",
      "kind": "unit",
      "label": "1 waffle"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-miniature-bite-size-waffle",
      "kind": "unit",
      "label": "1 miniature/bite size waffle"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-thick-belgian-waffle",
      "kind": "unit",
      "label": "1 thick / Belgian waffle"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-stick",
      "kind": "unit",
      "label": "1 stick"
    }
  ],
  "name": "Waffle, plain, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 46.8,
    "energy_kcal": 292.0,
    "fat_g": 7.35,
    "fibre_g": 1.5,
    "folate_ug": 69.0,
    "iron_mg": 3.31,
    "magnesium_mg": 25.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 152.0,
    "potassium_mg": 201.0,
    "protein_g": 9.72,
    "salt_g": 1.2625,
    "sat_fat_g": 1.84,
    "sodium_mg": 505.0,
    "sugar_g": 3.68,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708314",
  "state": "Unspecified",
  "subcategory": "Pancakes, waffles, French toast",
  "tags": [
    "other-foods",
    "pancakes-waffles-french-toast",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
