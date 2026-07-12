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
  "id": "usda-fndds-2708156",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-crispbread-or-cracker",
      "kind": "unit",
      "label": "1 crispbread or cracker"
    }
  ],
  "name": "Crackers, crispbread",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 82.2,
    "energy_kcal": 366.0,
    "fat_g": 1.3,
    "fibre_g": 16.5,
    "folate_ug": 47.0,
    "iron_mg": 2.43,
    "magnesium_mg": 78.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 269.0,
    "potassium_mg": 319.0,
    "protein_g": 7.9,
    "salt_g": 1.025,
    "sat_fat_g": 0.145,
    "sodium_mg": 410.0,
    "sugar_g": 1.07,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 6.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708156",
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
