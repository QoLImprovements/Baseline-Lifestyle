/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup-boneless",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706710",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 223.0,
      "key": "1-cup-boneless",
      "kind": "unit",
      "label": "1 cup, boneless"
    },
    {
      "gramsPerUnit": 196.0,
      "key": "1-cup-yield-after-bone-removed",
      "kind": "unit",
      "label": "1 cup (yield after bone removed)"
    },
    {
      "gramsPerUnit": 223.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 223.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    }
  ],
  "name": "Chicken fricassee, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 7.17,
    "energy_kcal": 172.0,
    "fat_g": 10.6,
    "fibre_g": 1.2,
    "folate_ug": 13.0,
    "iron_mg": 0.77,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 129.0,
    "potassium_mg": 317.0,
    "protein_g": 12.1,
    "salt_g": 1.8825,
    "sat_fat_g": 1.8,
    "sodium_mg": 753.0,
    "sugar_g": 1.26,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 16.9,
    "vitamin_e_mg": 1.97,
    "vitamin_k_ug": 9.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706710",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "meat-and-poultry",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
