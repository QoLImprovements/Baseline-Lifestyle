/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cup",
  "description": "Crackers, excludes saltines",
  "id": "usda-fndds-2707697",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "4-cubes",
      "kind": "unit",
      "label": "4 cubes"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "1-fast-food-package",
      "kind": "unit",
      "label": "1 fast food package"
    }
  ],
  "name": "Croutons",
  "nutritionPerBasis": {
    "calcium_mg": 96.0,
    "carbs_g": 63.5,
    "energy_kcal": 465.0,
    "fat_g": 18.3,
    "fibre_g": 5.0,
    "folate_ug": 105.0,
    "iron_mg": 2.82,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 181.0,
    "protein_g": 10.8,
    "salt_g": 3.325,
    "sat_fat_g": 5.25,
    "sodium_mg": 1330.0,
    "sugar_g": 4.41,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 7.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707697",
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
