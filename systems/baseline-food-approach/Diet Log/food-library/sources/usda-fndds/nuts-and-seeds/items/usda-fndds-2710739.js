/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "quantity-not-specified",
  "description": "Protein and nutritional powders",
  "id": "usda-fndds-2710739",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "1-scoop",
      "kind": "unit",
      "label": "1 scoop"
    }
  ],
  "name": "Nutritional powder mix, high protein (Slim Fast)",
  "nutritionPerBasis": {
    "calcium_mg": 1040.0,
    "carbs_g": 50.0,
    "energy_kcal": 433.0,
    "fat_g": 13.5,
    "fibre_g": 18.2,
    "folate_ug": 385.0,
    "iron_mg": 24.8,
    "magnesium_mg": 473.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 563.0,
    "potassium_mg": 752.0,
    "protein_g": 27.9,
    "salt_g": 1.2375,
    "sat_fat_g": 1.33,
    "sodium_mg": 495.0,
    "sugar_g": 20.6,
    "vitamin_a_ug": 865.0,
    "vitamin_c_mg": 104.0,
    "vitamin_e_mg": 51.9,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710739",
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
