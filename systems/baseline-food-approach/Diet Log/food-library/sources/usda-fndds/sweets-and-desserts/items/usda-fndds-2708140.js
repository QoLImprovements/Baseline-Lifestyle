/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-biscuit-soft",
  "description": "Crackers, excludes saltines",
  "id": "usda-fndds-2708140",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-biscuit-soft",
      "kind": "unit",
      "label": "1 biscuit, soft"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-biscuit-nfs",
      "kind": "unit",
      "label": "1 biscuit, NFS"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-biscuit-hard",
      "kind": "unit",
      "label": "1 biscuit, hard"
    }
  ],
  "name": "Crackers, breakfast biscuit",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 71.0,
    "energy_kcal": 427.0,
    "fat_g": 15.1,
    "fibre_g": 7.3,
    "folate_ug": 39.0,
    "iron_mg": 3.94,
    "magnesium_mg": 78.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 234.0,
    "potassium_mg": 276.0,
    "protein_g": 7.12,
    "salt_g": 1.075,
    "sat_fat_g": 2.24,
    "sodium_mg": 430.0,
    "sugar_g": 22.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 1.4,
    "vitamin_k_ug": 13.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708140",
  "state": "Unspecified",
  "subcategory": "Crackers, excludes saltines",
  "tags": [
    "crackers-excludes-saltines",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
