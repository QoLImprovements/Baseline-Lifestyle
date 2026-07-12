/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Crackers, excludes saltines",
  "id": "usda-fndds-2707799",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 46.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-extra-large-stick",
      "kind": "unit",
      "label": "1 extra large stick"
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
      "gramsPerUnit": 10.0,
      "key": "1-medium-stick",
      "kind": "unit",
      "label": "1 medium stick"
    }
  ],
  "name": "Breadsticks, hard, gluten free",
  "nutritionPerBasis": {
    "calcium_mg": 238.0,
    "carbs_g": 66.3,
    "energy_kcal": 453.0,
    "fat_g": 15.8,
    "fibre_g": 10.2,
    "folate_ug": 35.0,
    "iron_mg": 2.83,
    "magnesium_mg": 164.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 374.0,
    "potassium_mg": 381.0,
    "protein_g": 11.2,
    "salt_g": 1.095,
    "sat_fat_g": 2.07,
    "sodium_mg": 438.0,
    "sugar_g": 0.86,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.5,
    "vitamin_k_ug": 13.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707799",
  "state": "Unspecified",
  "subcategory": "Crackers, excludes saltines",
  "tags": [
    "crackers-excludes-saltines",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
