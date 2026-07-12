/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Saltine crackers",
  "id": "usda-fndds-2708169",
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
      "gramsPerUnit": 1.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-sleeve",
      "kind": "unit",
      "label": "1 sleeve"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-cracker",
      "kind": "unit",
      "label": "1 cracker"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    }
  ],
  "name": "Crackers, saltine, multigrain",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 68.2,
    "energy_kcal": 398.0,
    "fat_g": 10.7,
    "fibre_g": 6.7,
    "folate_ug": 82.0,
    "iron_mg": 5.14,
    "magnesium_mg": 70.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 196.0,
    "potassium_mg": 221.0,
    "protein_g": 7.14,
    "salt_g": 3.025,
    "sat_fat_g": 0.0,
    "sodium_mg": 1210.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.19,
    "vitamin_k_ug": 18.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708169",
  "state": "Unspecified",
  "subcategory": "Saltine crackers",
  "tags": [
    "other-foods",
    "saltine-crackers",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
