/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cubic-inch",
  "description": "Cheese",
  "id": "usda-fndds-2705708",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup-melted",
      "kind": "unit",
      "label": "1 cup, melted"
    },
    {
      "gramsPerUnit": 144.0,
      "key": "1-cup-sliced",
      "kind": "unit",
      "label": "1 cup, sliced"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "1-package-4-5-oz",
      "kind": "unit",
      "label": "1 package (4.5 oz)"
    },
    {
      "gramsPerUnit": 144.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    }
  ],
  "name": "Cheese, Brie",
  "nutritionPerBasis": {
    "calcium_mg": 184.0,
    "carbs_g": 0.45,
    "energy_kcal": 334.0,
    "fat_g": 27.7,
    "fibre_g": 0.0,
    "folate_ug": 65.0,
    "iron_mg": 0.5,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 188.0,
    "potassium_mg": 152.0,
    "protein_g": 20.8,
    "salt_g": 1.5725,
    "sat_fat_g": 17.4,
    "sodium_mg": 629.0,
    "sugar_g": 0.45,
    "vitamin_a_ug": 174.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705708",
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
