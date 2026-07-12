/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cup-nfs",
  "description": "Crackers, excludes saltines",
  "id": "usda-fndds-2708170",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-small-or-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 small or medium single serving bag"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "1-special-k-snack-cracker",
      "kind": "unit",
      "label": "1 Special K Snack Cracker"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-cracker",
      "kind": "unit",
      "label": "1 cracker"
    }
  ],
  "name": "Crackers, multigrain",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 67.6,
    "energy_kcal": 482.0,
    "fat_g": 20.4,
    "fibre_g": 3.5,
    "folate_ug": 103.0,
    "iron_mg": 2.59,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 292.0,
    "potassium_mg": 171.0,
    "protein_g": 7.1,
    "salt_g": 2.2075,
    "sat_fat_g": 3.3,
    "sodium_mg": 883.0,
    "sugar_g": 12.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.75,
    "vitamin_k_ug": 36.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708170",
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
