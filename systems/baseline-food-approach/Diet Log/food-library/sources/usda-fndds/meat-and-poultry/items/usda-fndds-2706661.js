/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup-yield-after-bone-removed",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706661",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 177.0,
      "key": "1-cup-yield-after-bone-removed",
      "kind": "unit",
      "label": "1 cup (yield after bone removed)"
    },
    {
      "gramsPerUnit": 219.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 164.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 219.0,
      "key": "1-cup-boneless",
      "kind": "unit",
      "label": "1 cup, boneless"
    }
  ],
  "name": "Stewed rabbit, Puerto Rican style,",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 6.83,
    "energy_kcal": 214.0,
    "fat_g": 12.7,
    "fibre_g": 1.0,
    "folate_ug": 9.0,
    "iron_mg": 1.73,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 145.0,
    "potassium_mg": 342.0,
    "protein_g": 17.1,
    "salt_g": 1.1,
    "sat_fat_g": 2.62,
    "sodium_mg": 440.0,
    "sugar_g": 0.92,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 2.09,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706661",
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
