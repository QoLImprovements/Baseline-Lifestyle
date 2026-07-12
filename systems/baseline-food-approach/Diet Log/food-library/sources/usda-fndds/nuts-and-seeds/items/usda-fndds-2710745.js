/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-tablespoon",
  "description": "Protein and nutritional powders",
  "id": "usda-fndds-2710745",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.5,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-scoop",
      "kind": "unit",
      "label": "1 scoop"
    }
  ],
  "name": "Nutritional powder mix, protein, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 469.0,
    "carbs_g": 6.25,
    "energy_kcal": 352.0,
    "fat_g": 1.56,
    "fibre_g": 3.1,
    "folate_ug": 33.0,
    "iron_mg": 1.13,
    "magnesium_mg": 195.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1320.0,
    "potassium_mg": 500.0,
    "protein_g": 78.1,
    "salt_g": 0.39,
    "sat_fat_g": 0.781,
    "sodium_mg": 156.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710745",
  "state": "Unspecified",
  "subcategory": "Protein and nutritional powders",
  "tags": [
    "nuts-and-seeds",
    "protein-and-nutritional-powders",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
