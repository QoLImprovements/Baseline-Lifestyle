/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup-dry-type",
  "description": "Cottage/ricotta cheese",
  "id": "usda-fndds-2705753",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "1-cup-dry-type",
      "kind": "unit",
      "label": "1 cup, dry type"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-cup-creamed",
      "kind": "unit",
      "label": "1 cup, creamed"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    }
  ],
  "name": "Cheese, cottage, dry curd",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 6.66,
    "energy_kcal": 72.0,
    "fat_g": 0.29,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.15,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 190.0,
    "potassium_mg": 137.0,
    "protein_g": 10.3,
    "salt_g": 0.93,
    "sat_fat_g": 0.169,
    "sodium_mg": 372.0,
    "sugar_g": 1.85,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705753",
  "state": "Unspecified",
  "subcategory": "Cottage/ricotta cheese",
  "tags": [
    "cottage-ricotta-cheese",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
