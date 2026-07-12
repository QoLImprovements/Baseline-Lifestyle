/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-biscuit-with-gravy",
  "description": "Egg/breakfast sandwiches",
  "id": "usda-fndds-2708744",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "1-biscuit-with-gravy",
      "kind": "unit",
      "label": "1 biscuit with gravy"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Biscuit with gravy",
  "nutritionPerBasis": {
    "calcium_mg": 80.0,
    "carbs_g": 17.0,
    "energy_kcal": 224.0,
    "fat_g": 14.7,
    "fibre_g": 0.8,
    "folate_ug": 25.0,
    "iron_mg": 1.01,
    "magnesium_mg": 12.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 206.0,
    "potassium_mg": 152.0,
    "protein_g": 6.2,
    "salt_g": 1.1275,
    "sat_fat_g": 6.31,
    "sodium_mg": 451.0,
    "sugar_g": 3.88,
    "vitamin_a_ug": 73.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 6.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708744",
  "state": "Unspecified",
  "subcategory": "Egg/breakfast sandwiches",
  "tags": [
    "egg-breakfast-sandwiches",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
