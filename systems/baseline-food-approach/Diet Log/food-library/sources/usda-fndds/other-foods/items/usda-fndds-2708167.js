/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-sleeve",
  "description": "Saltine crackers",
  "id": "usda-fndds-2708167",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-sleeve",
      "kind": "unit",
      "label": "1 sleeve"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
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
  "name": "Crackers, saltine",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 74.0,
    "energy_kcal": 418.0,
    "fat_g": 8.64,
    "fibre_g": 2.8,
    "folate_ug": 134.0,
    "iron_mg": 5.57,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 102.0,
    "potassium_mg": 152.0,
    "protein_g": 9.46,
    "salt_g": 2.3525,
    "sat_fat_g": 1.65,
    "sodium_mg": 941.0,
    "sugar_g": 1.29,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.15,
    "vitamin_k_ug": 25.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708167",
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
