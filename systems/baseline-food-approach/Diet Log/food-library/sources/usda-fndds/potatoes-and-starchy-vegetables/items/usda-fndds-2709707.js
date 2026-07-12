/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup-mashed",
  "description": "Other red and orange vegetables",
  "id": "usda-fndds-2709707",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup-mashed",
      "kind": "unit",
      "label": "1 cup, mashed"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup-pieces",
      "kind": "unit",
      "label": "1 cup, pieces"
    }
  ],
  "name": "Sweet potato, canned, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 20.0,
    "energy_kcal": 124.0,
    "fat_g": 4.35,
    "fibre_g": 1.7,
    "folate_ug": 16.0,
    "iron_mg": 0.85,
    "magnesium_mg": 21.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 47.0,
    "potassium_mg": 297.0,
    "protein_g": 1.58,
    "salt_g": 0.5275,
    "sat_fat_g": 1.13,
    "sodium_mg": 211.0,
    "sugar_g": 4.75,
    "vitamin_a_ug": 397.0,
    "vitamin_c_mg": 25.0,
    "vitamin_e_mg": 1.57,
    "vitamin_k_ug": 5.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709707",
  "state": "Canned",
  "subcategory": "Other red and orange vegetables",
  "tags": [
    "canned",
    "other-red-and-orange-vegetables",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
