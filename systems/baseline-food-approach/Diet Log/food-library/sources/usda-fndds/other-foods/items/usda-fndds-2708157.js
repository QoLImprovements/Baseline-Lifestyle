/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-flatbread",
  "description": "Crackers, excludes saltines",
  "id": "usda-fndds-2708157",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-flatbread",
      "kind": "unit",
      "label": "1 flatbread"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-wheat-thins",
      "kind": "unit",
      "label": "1 Wheat Thins"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-town-house-cracker",
      "kind": "unit",
      "label": "1 Town House cracker"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Crackers, flatbread",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 75.2,
    "energy_kcal": 412.0,
    "fat_g": 8.25,
    "fibre_g": 10.2,
    "folate_ug": 91.0,
    "iron_mg": 3.51,
    "magnesium_mg": 58.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 196.0,
    "potassium_mg": 224.0,
    "protein_g": 9.85,
    "salt_g": 1.58,
    "sat_fat_g": 0.744,
    "sodium_mg": 632.0,
    "sugar_g": 2.92,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.87,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708157",
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
