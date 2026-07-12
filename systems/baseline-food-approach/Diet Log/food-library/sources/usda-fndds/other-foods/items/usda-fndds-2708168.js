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
  "id": "usda-fndds-2708168",
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
  "name": "Crackers, saltine, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 82.3,
    "energy_kcal": 393.0,
    "fat_g": 1.6,
    "fibre_g": 2.7,
    "folate_ug": 124.0,
    "iron_mg": 7.72,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 113.0,
    "potassium_mg": 115.0,
    "protein_g": 10.5,
    "salt_g": 2.1225,
    "sat_fat_g": 0.244,
    "sodium_mg": 849.0,
    "sugar_g": 0.38,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708168",
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
