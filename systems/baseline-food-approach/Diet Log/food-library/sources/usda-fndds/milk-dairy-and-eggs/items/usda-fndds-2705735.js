/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup-melted",
  "description": "Cheese",
  "id": "usda-fndds-2705735",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup-melted",
      "kind": "unit",
      "label": "1 cup, melted"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "1-cup-diced",
      "kind": "unit",
      "label": "1 cup, diced"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "1-cup-shredded",
      "kind": "unit",
      "label": "1 cup, shredded"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-cracker-size-slice",
      "kind": "unit",
      "label": "1 cracker-size slice"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    }
  ],
  "name": "Cheese, Swiss",
  "nutritionPerBasis": {
    "calcium_mg": 890.0,
    "carbs_g": 1.44,
    "energy_kcal": 393.0,
    "fat_g": 31.0,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.13,
    "magnesium_mg": 33.0,
    "omega3_g": 0.027,
    "phosphorus_mg": 574.0,
    "potassium_mg": 71.0,
    "protein_g": 27.0,
    "salt_g": 0.4625,
    "sat_fat_g": 18.2,
    "sodium_mg": 185.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 292.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705735",
  "state": "Unspecified",
  "subcategory": "Cheese",
  "tags": [
    "cheese",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
