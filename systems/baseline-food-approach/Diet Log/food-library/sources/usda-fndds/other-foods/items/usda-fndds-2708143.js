/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cup-nfs",
  "description": "Saltine crackers",
  "id": "usda-fndds-2708143",
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
      "gramsPerUnit": 18.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Crackers, saltine, reduced sodium",
  "nutritionPerBasis": {
    "calcium_mg": 118.0,
    "carbs_g": 73.5,
    "energy_kcal": 416.0,
    "fat_g": 8.75,
    "fibre_g": 2.9,
    "folate_ug": 138.0,
    "iron_mg": 5.07,
    "magnesium_mg": 25.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 110.0,
    "potassium_mg": 716.0,
    "protein_g": 9.39,
    "salt_g": 1.615,
    "sat_fat_g": 1.98,
    "sodium_mg": 646.0,
    "sugar_g": 2.19,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.11,
    "vitamin_k_ug": 15.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708143",
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
