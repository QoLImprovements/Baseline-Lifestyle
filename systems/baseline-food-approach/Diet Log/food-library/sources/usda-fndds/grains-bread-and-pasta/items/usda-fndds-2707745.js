/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup",
  "description": "Crackers, excludes saltines",
  "id": "usda-fndds-2707745",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 46.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-small-stick",
      "kind": "unit",
      "label": "1 small stick"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-large-stick",
      "kind": "unit",
      "label": "1 large stick"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-snack-size-stick",
      "kind": "unit",
      "label": "1 snack size stick"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-medium-stick",
      "kind": "unit",
      "label": "1 medium stick"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-extra-large-stick",
      "kind": "unit",
      "label": "1 extra large stick"
    }
  ],
  "name": "Breadsticks, hard, whole wheat",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 67.9,
    "energy_kcal": 425.0,
    "fat_g": 11.0,
    "fibre_g": 7.1,
    "folate_ug": 87.0,
    "iron_mg": 4.63,
    "magnesium_mg": 104.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 272.0,
    "potassium_mg": 267.0,
    "protein_g": 15.1,
    "salt_g": 1.4425,
    "sat_fat_g": 2.11,
    "sodium_mg": 577.0,
    "sugar_g": 3.29,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707745",
  "state": "Unspecified",
  "subcategory": "Crackers, excludes saltines",
  "tags": [
    "crackers-excludes-saltines",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
