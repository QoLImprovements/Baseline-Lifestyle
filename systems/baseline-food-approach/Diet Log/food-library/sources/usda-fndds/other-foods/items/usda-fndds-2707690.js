/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-small-stick",
  "description": "Crackers, excludes saltines",
  "id": "usda-fndds-2707690",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 12.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
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
    }
  ],
  "name": "Breadsticks, hard, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 68.4,
    "energy_kcal": 412.0,
    "fat_g": 9.5,
    "fibre_g": 3.0,
    "folate_ug": 162.0,
    "iron_mg": 4.28,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 121.0,
    "potassium_mg": 124.0,
    "protein_g": 12.0,
    "salt_g": 1.7825,
    "sat_fat_g": 1.41,
    "sodium_mg": 713.0,
    "sugar_g": 1.26,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.01,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707690",
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
