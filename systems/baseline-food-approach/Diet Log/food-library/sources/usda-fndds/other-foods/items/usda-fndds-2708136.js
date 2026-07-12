/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cracker",
  "description": "Crackers, excludes saltines",
  "id": "usda-fndds-2708136",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-cracker",
      "kind": "unit",
      "label": "1 cracker"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Crackers, oatmeal",
  "nutritionPerBasis": {
    "calcium_mg": 92.0,
    "carbs_g": 70.7,
    "energy_kcal": 455.0,
    "fat_g": 16.4,
    "fibre_g": 6.9,
    "folate_ug": 38.0,
    "iron_mg": 2.64,
    "magnesium_mg": 72.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 302.0,
    "potassium_mg": 283.0,
    "protein_g": 7.3,
    "salt_g": 1.7475,
    "sat_fat_g": 3.21,
    "sodium_mg": 699.0,
    "sugar_g": 15.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.55,
    "vitamin_k_ug": 14.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708136",
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
