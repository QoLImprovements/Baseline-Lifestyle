/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-small-can-7-oz",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706477",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 198.0,
      "key": "1-small-can-7-oz",
      "kind": "unit",
      "label": "1 small can (7 oz)"
    },
    {
      "gramsPerUnit": 716.0,
      "key": "1-large-can",
      "kind": "unit",
      "label": "1 large can"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "1-cup-canned",
      "kind": "unit",
      "label": "1 cup, canned"
    },
    {
      "gramsPerUnit": 425.0,
      "key": "1-medium-can-15-oz",
      "kind": "unit",
      "label": "1 medium can (15 oz)"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "1-cup-homemade",
      "kind": "unit",
      "label": "1 cup, homemade"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Corned beef hash",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 9.27,
    "energy_kcal": 164.0,
    "fat_g": 10.2,
    "fibre_g": 1.1,
    "folate_ug": 7.0,
    "iron_mg": 1.0,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 56.0,
    "potassium_mg": 172.0,
    "protein_g": 8.73,
    "salt_g": 1.03,
    "sat_fat_g": 4.32,
    "sodium_mg": 412.0,
    "sugar_g": 0.34,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706477",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-and-poultry",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
