/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup-nfs",
  "description": "Other red and orange vegetables",
  "id": "usda-fndds-2709706",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup-mashed",
      "kind": "unit",
      "label": "1 cup, mashed"
    }
  ],
  "name": "Sweet potato, canned, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 21.0,
    "energy_kcal": 91.0,
    "fat_g": 0.2,
    "fibre_g": 1.8,
    "folate_ug": 17.0,
    "iron_mg": 0.89,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 311.0,
    "protein_g": 1.64,
    "salt_g": 0.5175,
    "sat_fat_g": 0.041,
    "sodium_mg": 207.0,
    "sugar_g": 4.98,
    "vitamin_a_ug": 397.0,
    "vitamin_c_mg": 26.3,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709706",
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
